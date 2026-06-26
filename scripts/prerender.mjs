/**
 * Prerender script.
 *
 * 1. Boots a static file server over the `build/` output produced by `vite build`.
 * 2. Drives a headless Chromium through each route in scripts/routes.mjs.
 * 3. Captures the fully-rendered HTML (with react-helmet-async <head> tags) and
 *    writes <route>.html files alongside the SPA bundle. On the next deploy,
 *    Vercel serves these static HTML files directly (filesystem priority before
 *    the SPA fallback rewrite), so crawlers see real content per URL.
 */
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { ROUTES } from "./routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BUILD_DIR = resolve(__dirname, "..", "build");
const PORT = 4173;
const HOST = `http://127.0.0.1:${PORT}`;

if (!existsSync(BUILD_DIR)) {
  console.error("[prerender] build/ not found. Run `vite build` first.");
  process.exit(1);
}

// Snapshot the pristine index.html (empty root) BEFORE we start prerendering.
// We use this as the SPA fallback for routes whose .html file doesn't exist yet.
// Otherwise the first prerendered route would overwrite index.html and later
// routes would hydrate on top of stale head tags, producing duplicates.
const PRISTINE_INDEX = readFileSync(join(BUILD_DIR, "index.html"));

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

/**
 * Launch a browser appropriate for the current environment.
 *
 * On Vercel (and other serverless/CI build images) the system is missing the
 * shared libraries that Puppeteer's bundled Chrome needs (e.g. libnspr4.so), so
 * we use @sparticuz/chromium, which ships a self-contained Chromium binary,
 * driven through puppeteer-core. Locally we use full puppeteer with its own
 * downloaded Chrome.
 */
async function launchBrowser() {
  if (process.env.VERCEL || process.env.CI) {
    const [{ default: chromium }, { default: puppeteerCore }] = await Promise.all([
      import("@sparticuz/chromium"),
      import("puppeteer-core"),
    ]);
    return puppeteerCore.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    });
  }
  const { default: puppeteer } = await import("puppeteer");
  return puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
}

function serveStatic(req, res) {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath.endsWith("/")) urlPath += "index.html";
  const filePath = join(BUILD_DIR, urlPath);
  // SPA navigation fallback: ALWAYS serve the pristine (empty-root) index.html
  // for paths without a corresponding asset file, so React starts from a clean
  // <head> on every prerender request.
  const ext = "." + filePath.split(".").pop();
  if (!existsSync(filePath)) {
    res.writeHead(200, { "Content-Type": MIME[".html"] });
    res.end(PRISTINE_INDEX);
    return;
  }
  const data = readFileSync(filePath);
  res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
  res.end(data);
}

async function main() {
  const server = createServer((req, res) => {
    try {
      serveStatic(req, res);
    } catch (err) {
      res.writeHead(500);
      res.end(String(err));
    }
  });
  await new Promise((r) => server.listen(PORT, "127.0.0.1", r));
  console.log(`[prerender] serving ${BUILD_DIR} on ${HOST}`);

  const browser = await launchBrowser();

  let ok = 0;
  let failed = [];

  for (const { path } of ROUTES) {
    const url = `${HOST}${path}`;
    const page = await browser.newPage();
    try {
      // Suppress PostHog and other analytics during prerender
      await page.setRequestInterception(true);
      page.on("request", (req) => {
        const u = req.url();
        if (u.includes("posthog.com") || u.includes("google-analytics") || u.includes("googletagmanager")) {
          req.abort();
        } else {
          req.continue();
        }
      });

      await page.goto(url, { waitUntil: "networkidle0", timeout: 60_000 });

      // Wait for the footer to be present in the DOM — this ensures React has
      // fully rendered the entire page tree (including all sections) before we
      // capture the HTML. Heavy product pages can take several seconds to paint
      // all sections on Vercel's @sparticuz/chromium.
      try {
        await page.waitForSelector("footer, [data-testid='site-footer']", { timeout: 10_000 });
      } catch (_) {
        // footer selector not found — fall through and capture what we have
        console.warn(`[prerender] footer not found on ${path}, capturing partial render`);
      }

      // Extra buffer for react-helmet-async to flush <head> changes and for any
      // remaining micro-tasks / IntersectionObserver reveals to settle.
      await new Promise((r) => setTimeout(r, 2_000));

      const html = await page.content();

      // Decide output path: "/" -> index.html; "/foo/bar" -> foo/bar.html
      const outRel = path === "/" ? "index.html" : path.replace(/^\//, "") + ".html";
      const outPath = join(BUILD_DIR, outRel);
      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, html);
      console.log(`[prerender] ${path}  ->  ${outRel}`);
      ok++;
    } catch (err) {
      console.error(`[prerender] FAIL ${path}: ${err.message}`);
      failed.push(path);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();

  console.log(`[prerender] done. ${ok}/${ROUTES.length} ok` + (failed.length ? `, failed: ${failed.join(", ")}` : ""));
  if (failed.length) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

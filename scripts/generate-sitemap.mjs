/**
 * Generates build/sitemap.xml and build/robots.txt from scripts/routes.mjs.
 */
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import { writeFileSync } from "node:fs";
import { ROUTES, SITE_URL } from "./routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BUILD_DIR = resolve(__dirname, "..", "build");
const today = new Date().toISOString().slice(0, 10);

const urls = ROUTES.map(
  ({ path, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${path === "/" ? "" : path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`,
).join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const robots = `User-agent: *
Allow: /
Disallow: /signup

Sitemap: ${SITE_URL}/sitemap.xml
`;

writeFileSync(join(BUILD_DIR, "sitemap.xml"), sitemap);
writeFileSync(join(BUILD_DIR, "robots.txt"), robots);
console.log(`[sitemap] wrote ${ROUTES.length} URLs to sitemap.xml + robots.txt`);

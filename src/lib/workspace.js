import axios from "axios";

/**
 * Everything about turning a workspace NAME into the workspace URL.
 *
 * Two surfaces have to agree here: /signup previews the address a new workspace
 * will get, and /signin turns a typed name back into the address to send
 * someone to. If they disagreed, the URL promised at signup would not be the
 * one sign-in looks up.
 */

export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";
export const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:3005";

/**
 * The origin tenants hang off: https://zukvo.com in production,
 * http://localhost:3005 in dev. A workspace lives at {slug}.{this host}.
 *
 * STATED, not inferred. This used to be derived from VITE_APP_URL by stripping
 * a leading "app." — which works only for exactly one naming convention and
 * quietly produces acme.app-staging.zukvo.com, or acme.zukvo-fe-x9f2.vercel.app,
 * for any other. Naming the base directly costs one env var and cannot guess
 * wrong.
 *
 * The fallback keeps the old derivation so a deployment that has not set the
 * variable yet behaves exactly as before rather than breaking on rollout.
 */
export const WORKSPACE_BASE_URL =
    import.meta.env.VITE_WORKSPACE_BASE_URL ||
    (() => {
        try {
            const u = new URL(APP_URL);
            return `${u.protocol}//${u.host.replace(/^app\./, "")}`;
        } catch {
            return "https://zukvo.com";
        }
    })();

/**
 * The host suffix a workspace name is appended to: ".zukvo.com" in production,
 * ".localhost:3005" in dev.
 *
 * Every tenant gets its own host in BOTH environments. Dev is not the special
 * case it looks like — zukvo-fe documents `{tenant}.localhost:3005 → zukvo`
 * (src/lib/product.ts) and TenantContext resolves the tenant from exactly that
 * shape, the same way `{tenant}.testiez.localhost:3005` works for the other
 * brand. So the suffix is always real and always shown; there is no
 * environment where it has to be faked or hidden.
 */
export const WORKSPACE_DOMAIN = (() => {
    try {
        return `.${new URL(WORKSPACE_BASE_URL).host}`;
    } catch {
        return ".zukvo.com";
    }
})();

/**
 * The subdomain the backend derives from a workspace name.
 *
 * Mirrors slugify() in zukvo-be/src/controllers/landingSignupController.ts.
 * At signup it is only a preview — a collision appends -2 there — but it has to
 * agree on the shape, or the form promises a URL the customer will not get.
 */
export function slugify(text) {
    return (text || "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}

/**
 * The subdomain meant by whatever someone put in the sign-in field.
 *
 * People arrive at that field with the workspace name ("Acme Corp"), the
 * subdomain ("acme-corp"), or — most often, because it is what sits in a
 * browser tab or a bookmark — the whole URL. Accepting all three is the
 * difference between a customer signing in and a customer emailing support.
 *
 * A pasted host keeps only its first label, so a workspace name containing a
 * dot resolves to the part before it. That is the losing trade on purpose:
 * "acme.zukvo.com" is pasted far more often than a name like "acme.io" is
 * typed, and the latter's subdomain has no dot in it anyway.
 */
export function normalizeWorkspaceInput(raw) {
    const host = (raw || "")
        .trim()
        .toLowerCase()
        .replace(/^https?:\/\//, "")
        .split("/")[0]
        .split(".")[0];

    return slugify(host);
}

/** The workspace's own origin, e.g. https://acme.zukvo.com. */
export function workspaceUrl(tenantSubdomain) {
    try {
        const u = new URL(WORKSPACE_BASE_URL);
        return `${u.protocol}//${tenantSubdomain}${WORKSPACE_DOMAIN}`;
    } catch {
        return `https://${tenantSubdomain}.zukvo.com`;
    }
}

/**
 * Builds the login URL for a tenant workspace, e.g.
 * https://acme.zukvo.com/login — or http://acme.localhost:3005/login in dev.
 *
 * Dev used to get `localhost:3005/login?subdomain=acme` instead, on the premise
 * that "subdomain.localhost doesn't resolve in browsers". It does, and the app
 * has always relied on it: TenantContext detects the tenant from a *.localhost
 * host, and product.ts names {tenant}.localhost:3005 as the Zukvo dev address.
 * Dropping the special case means dev and prod take the same code path, which
 * is also what lets the sign-in field show a suffix that is true in both.
 */
export function buildLoginUrl(tenantSubdomain, accessToken, email, sso) {
    const base = `${workspaceUrl(tenantSubdomain)}/login`;

    const params = new URLSearchParams();
    if (accessToken) params.set('token', accessToken);
    else if (email) {
        params.set('email', email);
        if (sso) params.set('sso', sso);
    }

    // Signing in from /signin passes neither a token nor an email, and that
    // leaves nothing to append — a bare trailing "?" otherwise.
    const query = params.toString();
    return query ? `${base}?${query}` : base;
}

/**
 * Look up a workspace by subdomain before sending anyone to it.
 *
 * Without this, a typo lands the customer on a host that either does not
 * resolve in DNS or serves someone else's login form — both dead ends with no
 * way back. Checking first turns that into a correctable message on a page
 * they are already on.
 *
 * Returns null when the workspace definitively does not exist on Zukvo, and
 * THROWS for every other failure (offline, rate limited, backend down) so the
 * caller can tell "wrong name" from "we could not check" and choose to send the
 * customer on regardless.
 */
export async function resolveWorkspace(subdomain) {
    let res;
    try {
        res = await axios.get(`${API_URL}/api/tenants/resolve`, {
            params: { subdomain },
            // Stated rather than left to the Origin header, which is all the
            // backend has to go on otherwise — and in dev the origin is a bare
            // localhost port that matches neither brand, so the tenant would be
            // resolved without the Zukvo/Testiez scoping that production has.
            headers: { "x-zukvo-product": "zukvo" },
        });
    } catch (err) {
        // 404 is the definitive "no such Zukvo workspace". The backend answers
        // it identically for a name nobody has and for one that exists only on
        // Testiez — deliberately, so this endpoint is not an existence oracle
        // across brands — so the message shown must not distinguish them either.
        if (err?.response?.status === 404) return null;
        throw err;
    }

    const info = res?.data?.data?.tenantInfo;
    if (!info?.subdomain) throw new Error("Unexpected workspace lookup response");

    return { subdomain: info.subdomain, name: info.name || "" };
}

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Building2, Check, Loader2 } from "lucide-react";
import ZukvoLogo from "@/components/ZukvoLogo";
import SEO from "@/components/SEO";
import {
    WORKSPACE_DOMAIN,
    buildLoginUrl,
    normalizeWorkspaceInput,
    resolveWorkspace,
} from "@/lib/workspace";

const REASONS = [
    "Every workspace has its own address, its own data and its own sign-in",
    "Nothing crosses between workspaces — not tickets, not clients, not people",
    "Your projects, invoices and history stay exactly where you left them",
];

/**
 * Where the last workspace signed into is remembered.
 *
 * Only the subdomain, which is already public in the URL bar — no identity, no
 * token. It exists so the second visit is one click rather than a typing
 * exercise, and losing it costs nothing but that convenience.
 */
const LAST_WORKSPACE_KEY = "zukvo:last-workspace";

function readLastWorkspace() {
    try {
        return localStorage.getItem(LAST_WORKSPACE_KEY) || "";
    } catch {
        // Private mode, or storage blocked outright. Not remembering is a worse
        // experience, not a broken one.
        return "";
    }
}

function rememberWorkspace(subdomain) {
    try {
        localStorage.setItem(LAST_WORKSPACE_KEY, subdomain);
    } catch {
        /* see readLastWorkspace */
    }
}

export default function SignIn() {
    const { search } = useLocation();
    const [raw, setRaw] = useState("");
    const [status, setStatus] = useState("idle"); // idle | checking | leaving
    const [error, setError] = useState("");
    const [remembered, setRemembered] = useState("");

    /**
     * `?workspace=` wins over the remembered name: a link someone was sent is a
     * deliberate instruction about which workspace to open, while localStorage
     * is only a guess carried over from last time.
     */
    useEffect(() => {
        const last = readLastWorkspace();
        setRemembered(last);

        const params = new URLSearchParams(search);
        const asked = params.get("workspace") || params.get("subdomain") || "";
        const prefill = normalizeWorkspaceInput(asked) || last;
        if (prefill) setRaw(prefill);
    }, [search]);

    // Recomputed every keystroke and shown under the field, so the address we
    // are about to send them to is never a surprise.
    const slug = normalizeWorkspaceInput(raw);
    const busy = status !== "idle";

    const go = (subdomain) => {
        rememberWorkspace(subdomain);
        setStatus("leaving");
        window.location.assign(buildLoginUrl(subdomain));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (busy) return;

        if (!slug) {
            setError("Enter your workspace name to continue.");
            return;
        }

        setError("");
        setStatus("checking");

        try {
            const found = await resolveWorkspace(slug);

            if (!found) {
                setStatus("idle");
                setError(
                    `We couldn't find a workspace at ${slug}${WORKSPACE_DOMAIN}. Check the spelling, or ask an admin on your team for the address they sign in at.`
                );
                return;
            }

            // The RESOLVED subdomain, not the typed one. A workspace renamed
            // after signup still answers to its old name in the lookup, and this
            // is where that gets turned into the address that exists today.
            go(found.subdomain);
        } catch {
            // The lookup itself failed — offline, rate limited, backend
            // restarting. Someone who typed the right name should not be
            // stranded by our outage, and their own workspace's login page is
            // the real authority anyway.
            go(slug);
        }
    };

    return (
        <main
            data-testid="signin-page"
            className="relative min-h-screen bg-[#FAFAFA] text-zukvo-ink overflow-x-clip zk-mesh"
        >
            {/* Soft dot grid — same treatment as /signup */}
            <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_70%)] pointer-events-none" />

            <SEO />

            <header className="absolute top-0 inset-x-0 z-30">
                <div className="mx-auto max-w-7xl px-6 md:px-10 py-5 flex items-center justify-between">
                    <Link to="/" className="shrink-0" data-testid="signin-logo-link">
                        <ZukvoLogo variant="light" size={30} />
                    </Link>
                    <div className="flex items-center gap-2 text-[12.5px]">
                        <span className="hidden sm:inline text-zinc-500">
                            No workspace yet?
                        </span>
                        <Link
                            to="/signup"
                            data-testid="signin-signup"
                            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-zukvo-ink font-medium hover:border-zinc-300 transition-colors"
                        >
                            Get Zukvo
                            <ArrowRight className="size-3.5" />
                        </Link>
                    </div>
                </div>
            </header>

            <div className="relative mx-auto max-w-2xl px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24">
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 shadow-[0_25px_70px_-30px_rgba(15,23,42,0.25)]">
                    <h1 className="text-[22px] md:text-[26px] font-semibold tracking-tight text-zukvo-ink">
                        Sign in to your workspace
                    </h1>
                    <p className="mt-2 text-[13.5px] text-zinc-500">
                        Every team gets its own Zukvo. Tell us which one, and we&apos;ll open its
                        sign-in page.
                    </p>

                    {/* Offered only when it is not already what the field resolves
                        to — otherwise it reads as a button that does nothing. */}
                    {remembered && remembered !== slug && (
                        <button
                            type="button"
                            onClick={() => go(remembered)}
                            disabled={busy}
                            data-testid="signin-recent"
                            className="mt-6 flex w-full items-center gap-3 rounded-xl border border-zinc-200 bg-white px-3.5 py-3 text-left transition-colors hover:border-zukvo-500/50 hover:bg-zukvo-500/5 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            <span className="shrink-0 rounded-md bg-zukvo-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-zukvo-600">
                                Last used
                            </span>
                            <span className="min-w-0 flex-1 truncate text-[14px] font-medium text-zukvo-ink">
                                {remembered}
                                {WORKSPACE_DOMAIN}
                            </span>
                            <ArrowRight className="size-4 shrink-0 text-zinc-400" />
                        </button>
                    )}

                    <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
                        <div>
                            <label
                                htmlFor="signin-workspace"
                                className="block text-[12px] font-medium text-zukvo-ink mb-1.5"
                            >
                                Workspace name
                            </label>

                            {/* Input and suffix share one border so they read as a
                                single address being completed, not a text box that
                                happens to sit beside some grey text. */}
                            <div className="group relative flex items-center rounded-xl border border-zinc-200 bg-white focus-within:border-zukvo-500 focus-within:ring-2 focus-within:ring-zukvo-500/20 transition-all">
                                <span className="pl-3.5 text-zinc-400">
                                    <Building2 className="size-4" />
                                </span>
                                <input
                                    id="signin-workspace"
                                    type="text"
                                    autoComplete="organization"
                                    autoCapitalize="none"
                                    autoCorrect="off"
                                    spellCheck={false}
                                    autoFocus
                                    placeholder="acme"
                                    value={raw}
                                    disabled={busy}
                                    onChange={(e) => {
                                        setRaw(e.target.value);
                                        if (error) setError("");
                                    }}
                                    data-testid="signin-workspace-input"
                                    className="min-w-0 flex-1 bg-transparent px-3 py-3 text-[14px] text-zukvo-ink placeholder:text-zinc-400 focus:outline-none disabled:cursor-not-allowed"
                                />
                                <span className="shrink-0 self-stretch flex items-center border-l border-zinc-200 bg-zinc-50 px-3.5 text-[13px] text-zinc-500 rounded-r-xl">
                                    {WORKSPACE_DOMAIN}
                                </span>
                            </div>

                            <p className="mt-1.5 text-[12px] text-zinc-500">
                                {slug ? (
                                    <>
                                        We&apos;ll open{" "}
                                        <span className="font-medium text-zukvo-ink break-all">
                                            {slug}
                                            {WORKSPACE_DOMAIN}
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        The name in your workspace address — or paste the whole URL,
                                        that works too.
                                    </>
                                )}
                            </p>
                        </div>

                        {error && (
                            <div
                                role="alert"
                                data-testid="signin-error"
                                className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-3 text-[13px] text-rose-700"
                            >
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={busy}
                            data-testid="signin-submit"
                            className="group w-full inline-flex items-center justify-center gap-2 rounded-xl text-white text-[14px] font-medium px-5 py-3.5 shadow-[0_15px_40px_-15px_rgba(99,102,241,0.55)] transition-all hover:shadow-[0_18px_50px_-15px_rgba(99,102,241,0.65)] disabled:opacity-70 disabled:cursor-not-allowed"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #6366F1, #8B5CF6, #A855F7)",
                            }}
                        >
                            {status === "checking" ? (
                                <>
                                    <Loader2 className="size-4 animate-spin" />
                                    Finding your workspace…
                                </>
                            ) : status === "leaving" ? (
                                <>
                                    <Loader2 className="size-4 animate-spin" />
                                    Opening…
                                </>
                            ) : (
                                <>
                                    Continue
                                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                                </>
                            )}
                        </button>

                        <p className="text-[12px] text-zinc-500">
                            You sign in on your own workspace — your password never reaches this
                            page.
                        </p>
                    </form>

                    <ul className="mt-7 space-y-2.5 border-t border-zinc-100 pt-6">
                        {REASONS.map((reason) => (
                            <li key={reason} className="flex items-start gap-2.5 text-[13px] text-zinc-600">
                                <span className="mt-0.5 shrink-0 grid size-4 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                                    <Check className="size-2.5" strokeWidth={3} />
                                </span>
                                {reason}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-6 text-center text-[12.5px] text-zinc-500">
                    Can&apos;t remember the name?{" "}
                    <Link
                        to="/contact-sales"
                        className="text-zukvo-600 font-medium hover:text-zukvo-700"
                    >
                        Ask our team
                    </Link>
                </div>
            </div>
        </main>
    );
}

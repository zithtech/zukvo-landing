import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    Check,
    Sparkles,
    Eye,
    EyeOff,
    Lock,
    Mail,
    User,
    ShieldCheck,
    Zap,
    Pencil,
    Wand2,
    Building2,
} from "lucide-react";
import ZukvoLogo from "@/components/ZukvoLogo";
import SEO from "@/components/SEO";

/* ---------------- DATA (mirrors Pricing.jsx) ---------------- */

const TIERS = {
    solo: {
        id: "solo",
        name: "Solo",
        kicker: "For independents",
        priceINR: 499,
        priceUSD: 9,
        features: [
            "1 Member",
            "Ticket Management (Tickets, Sprints, Buckets)",
            "Project Management",
            "Document Hub (5GB)",
            "ZithPort Extension",
            "Leads Management (Up to 30 Leads)",
            "Proposals",
            "Client Management (Up to 10 Clients)",
            "Calendar & Mail Integration",
            "Dashboard Access",
        ],
        trial: "Start free — no card required",
    },
    "solo-pro": {
        id: "solo-pro",
        name: "Solo Pro",
        kicker: "For power solos",
        priceINR: 1499,
        priceUSD: 24,
        featured: true,
        features: [
            "Everything in Solo +",
            "BugList",
            "Document Hub (15GB)",
            "BidiQ AI",
            "Leads Management (Up to 100 Leads)",
            "Client Management (Up to 30 Clients)",
            "Advanced Client Portal (30 Portal Access)",
            "Invoice Management",
            "Accounts Management",
        ],
        trial: "14-day free trial — no card required",
    },
    team: {
        id: "team",
        name: "Team",
        kicker: "For growing teams",
        priceINR: 4999,
        priceUSD: 79,
        features: [
            "Everything in Solo Pro +",
            "Up to 15 Members",
            "SQuads",
            "Time Tracking (My & Team)",
            "Daily Updates",
            "Ticket Reports & Advanced Sprint Reports",
            "Roles & Permissions",
            "Members Management",
            "Leads Management (Up to 150 Leads)",
            "Document Hub (25GB)",
        ],
        trial: "14-day free trial — no card required",
    },
    growth: {
        id: "growth",
        name: "Growth",
        kicker: "For scaling orgs",
        priceINR: 9999,
        priceUSD: 149,
        features: [
            "Everything in Team +",
            "Up to 30 Members",
            "Performance Management",
            "Escalation Management",
            "Advanced Workforce Operations",
            "Document Hub (50GB)",
        ],
        trial: "14-day free trial — no card required",
    },
    scale: {
        id: "scale",
        name: "Scale",
        kicker: "For enterprises",
        priceINR: null,
        priceUSD: null,
        custom: true,
        features: [
            "Everything in Growth +",
            "Up to 200 Members",
            "Unlimited Clients",
            "Unlimited Leads",
            "Document Hub (100GB)",
            "Priority Support",
            "Dedicated Onboarding",
            "Custom Workspace Setup",
            "Enterprise Support",
        ],
        trial: "Contact sales for a tailored plan",
    },
};

const SETS = [
    {
        id: "set1",
        label: "SET 1",
        name: "Execution Suite",
        hasAi: true,
        pricing: {
            withAi: { monthly: 14, yearly: 11 },
            withoutAi: { monthly: 10, yearly: 8 },
        },
        modules: [
            "Ticket Management",
            "Document Hub",
            "Project Management",
            "SQuads",
        ],
    },
    {
        id: "set2",
        label: "SET 2",
        name: "Workforce Ops",
        priceMonthly: 8,
        priceYearly: 6,
        modules: ["Daily Updates", "Time Tracking", "Performance Mgmt", "Escalations"],
    },
    {
        id: "set3",
        label: "SET 3",
        name: "Growth Suite",
        hasAi: true,
        pricing: {
            withAi: { monthly: 14, yearly: 11 },
            withoutAi: { monthly: 8, yearly: 6 },
        },
        modules: ["ZithPort Extension", "Leads Management", "Proposals (Zai)", "BidIQ"],
    },
    {
        id: "set4",
        label: "SET 4",
        name: "Organization Suite",
        priceMonthly: 6,
        priceYearly: 5,
        modules: ["Client Mgmt", "Client Portal", "Roles & Permissions", "Members", "Grades"],
    },
    {
        id: "set5",
        label: "SET 5",
        name: "Finance Suite",
        priceMonthly: 10,
        priceYearly: 8,
        modules: ["Invoice", "Accounts"],
    },
    {
        id: "set6",
        label: "SET 6",
        name: "Connect",
        free: true,
        modules: ["Integrations", "Mail Page", "Calendar Page", "Main Dashboard"],
    },
];

/* ---------------- HOOK: parse URL params ---------------- */

function useSignupContext() {
    const { search } = useLocation();
    return useMemo(() => {
        const p = new URLSearchParams(search);
        return {
            tier: p.get("tier"),
            sets: (p.get("sets") || "").split(",").filter(Boolean),
            ai: (p.get("ai") || "").split(",").filter(Boolean),
            billing: p.get("billing") === "monthly" ? "monthly" : "yearly",
            currency: p.get("currency") === "INR" ? "INR" : "USD",
        };
    }, [search]);
}

/* ---------------- PAGE ---------------- */

export default function Signup() {
    const ctx = useSignupContext();

    useEffect(() => {
        if (typeof window !== "undefined" && window.location.hash !== "") {
            const hash = window.location.hash;
            if (hash.includes("access_token=")) {
                const params = new URLSearchParams(hash.substring(1));
                const token = params.get("access_token");
                if (token && window.opener) {
                    window.opener.postMessage(
                        { type: "microsoft-signup-token", token },
                        window.location.origin
                    );
                    window.close();
                }
            }
        }
    }, []);

    useEffect(() => {
        if (!document.getElementById("google-gsi-client")) {
            const script = document.createElement("script");
            script.src = "https://accounts.google.com/gsi/client";
            script.id = "google-gsi-client";
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        }
    }, []);

    return (
        <main
            data-testid="signup-page"
            className="relative min-h-screen bg-[#FAFAFA] text-zukvo-ink overflow-x-clip zk-mesh"
        >
            {/* Soft dot grid */}
            <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_70%)] pointer-events-none" />

            <SEO />
            <MinimalNav />

            <div className="relative mx-auto max-w-7xl px-6 md:px-10 pt-28 md:pt-32 pb-16 md:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    {/* LEFT — Plan summary */}
                    <aside className="lg:col-span-5 lg:sticky lg:top-24">
                        <PlanSummary ctx={ctx} />
                    </aside>

                    {/* RIGHT — Signup form */}
                    <section className="lg:col-span-7">
                        <SignupCard ctx={ctx} />
                    </section>
                </div>
            </div>
        </main>
    );
}

/* ---------------- NAV ---------------- */

function MinimalNav() {
    return (
        <header className="absolute top-0 inset-x-0 z-30">
            <div className="mx-auto max-w-7xl px-6 md:px-10 py-5 flex items-center justify-between">
                <Link to="/" className="shrink-0" data-testid="signup-logo-link">
                    <ZukvoLogo variant="light" size={30} />
                </Link>
                <div className="flex items-center gap-2 text-[12.5px]">
                    <span className="hidden sm:inline text-zinc-500">
                        Already have an account?
                    </span>
                    <a
                        href="#login"
                        data-testid="signup-signin"
                        className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-zukvo-ink font-medium hover:border-zinc-300 transition-colors"
                    >
                        Sign in
                        <ArrowRight className="size-3.5" />
                    </a>
                </div>
            </div>
        </header>
    );
}

/* ---------------- PLAN SUMMARY ---------------- */

function PlanSummary({ ctx }) {
    if (ctx.tier && TIERS[ctx.tier]) {
        return <TierSummary tier={TIERS[ctx.tier]} currency={ctx.currency} />;
    }
    if (ctx.sets && ctx.sets.length > 0) {
        return <ModulesSummary selected={ctx.sets} ai={ctx.ai} billing={ctx.billing} />;
    }
    return <DefaultSummary />;
}

function PriceUnit({ billing }) {
    return (
        <span className="text-[13px] text-zinc-500">
            / month{" "}
            <span className="text-zinc-400">· billed {billing}</span>
        </span>
    );
}

function TierSummary({ tier, currency }) {
    const isINR = currency === "INR";
    const symbol = isINR ? "₹" : "$";
    const price = isINR ? tier.priceINR : tier.priceUSD;
    const formatted =
        price !== null && price !== undefined
            ? price.toLocaleString(isINR ? "en-IN" : "en-US")
            : null;
    return (
        <div
            data-testid="signup-summary-tier"
            className="relative rounded-3xl border border-zinc-200 bg-white p-7 md:p-8 shadow-[0_30px_80px_-40px_rgba(15,15,15,0.15)]"
        >
            <div className="inline-flex items-center gap-2 rounded-full border border-zukvo-500/30 bg-zukvo-500/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-600">
                <Sparkles className="size-3" /> Your selected plan
            </div>
            <div className="mt-5">
                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                    {tier.kicker}
                </div>
                <div className="mt-1 font-heading text-3xl md:text-4xl font-medium text-zukvo-ink tracking-tight">
                    {tier.name}
                </div>
                {tier.featured && (
                    <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-zukvo-500/10 text-zukvo-600 border border-zukvo-500/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.22em]">
                        Most popular
                    </span>
                )}
            </div>

            <div className="mt-6 flex items-end gap-2">
                {tier.custom ? (
                    <span className="font-heading text-5xl font-medium tracking-tighter text-zukvo-ink">
                        Custom
                    </span>
                ) : (
                    <>
                        <span className="font-heading text-5xl font-medium tracking-tighter text-zukvo-ink">
                            {symbol}
                            {formatted}
                        </span>
                        <div className="pb-2">
                            <div className="text-[12px] text-zinc-500">/ month</div>
                            <div className="text-[11px] text-zinc-400">
                                Billed monthly · {isINR ? "India" : "Global"}
                            </div>
                        </div>
                    </>
                )}
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 text-[12px] text-emerald-700 font-medium">
                <ShieldCheck className="size-3.5" /> {tier.trial}
            </div>

            <div className="mt-6 h-px bg-zinc-200" />

            <ul className="mt-5 space-y-2.5">
                {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-zinc-700">
                        <Check className="mt-0.5 size-4 text-zukvo-600 shrink-0" />
                        <span>{f}</span>
                    </li>
                ))}
            </ul>

            <ChangePlanLink />
        </div>
    );
}

function ModulesSummary({ selected, ai, billing }) {
    const aiSet = new Set(ai);
    const selectedSets = SETS.filter((s) => selected.includes(s.id));
    let total = 0;
    selectedSets.forEach((s) => {
        if (s.free) return;
        if (s.hasAi) {
            const variant = aiSet.has(s.id) ? s.pricing.withAi : s.pricing.withoutAi;
            total += billing === "yearly" ? variant.yearly : variant.monthly;
        } else {
            total += billing === "yearly" ? s.priceYearly : s.priceMonthly;
        }
    });

    return (
        <div
            data-testid="signup-summary-modules"
            className="relative rounded-3xl border border-zinc-200 bg-white p-7 md:p-8 shadow-[0_30px_80px_-40px_rgba(15,15,15,0.15)]"
        >
            <div className="inline-flex items-center gap-2 rounded-full border border-zukvo-500/30 bg-zukvo-500/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-600">
                <Sparkles className="size-3" /> Your custom plan
            </div>
            <div className="mt-5">
                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                    Built your own
                </div>
                <div className="mt-1 font-heading text-3xl md:text-4xl font-medium text-zukvo-ink tracking-tight">
                    {selectedSets.length}{" "}
                    <span className="text-zinc-500">
                        {selectedSets.length === 1 ? "module set" : "module sets"}
                    </span>
                </div>
            </div>

            <div className="mt-6 flex items-end gap-2">
                <span className="font-heading text-5xl font-medium tracking-tighter text-zukvo-ink">
                    {total === 0 ? "Free" : `$${total}`}
                </span>
                {total > 0 && (
                    <div className="pb-2">
                        <PriceUnit billing={billing} />
                        {billing === "yearly" && (
                            <div className="text-[11px] text-zinc-400">
                                ${total * 12}/yr per user
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 text-[12px] text-emerald-700 font-medium">
                <ShieldCheck className="size-3.5" /> 14-day free trial — no card required
            </div>

            <div className="mt-6 h-px bg-zinc-200" />

            <div className="mt-5 space-y-2.5">
                {selectedSets.map((s) => {
                    const isAi = aiSet.has(s.id);
                    const price = s.free
                        ? "Free"
                        : s.hasAi
                          ? billing === "yearly"
                              ? `$${isAi ? s.pricing.withAi.yearly : s.pricing.withoutAi.yearly}`
                              : `$${isAi ? s.pricing.withAi.monthly : s.pricing.withoutAi.monthly}`
                          : billing === "yearly"
                            ? `$${s.priceYearly}`
                            : `$${s.priceMonthly}`;
                    return (
                        <div
                            key={s.id}
                            className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50/60 px-3.5 py-2.5"
                        >
                            <div className="flex items-center gap-2.5 min-w-0">
                                <span className="text-[9.5px] font-bold uppercase tracking-[0.22em] rounded-full border border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-600 px-1.5 py-0.5 shrink-0">
                                    {s.label}
                                </span>
                                <div className="min-w-0">
                                    <div className="text-[13px] font-medium text-zukvo-ink truncate">
                                        {s.name}
                                    </div>
                                    <div className="text-[11px] text-zinc-500 truncate">
                                        {s.modules.slice(0, 3).join(" · ")}
                                        {s.modules.length > 3 && " · …"}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                                {s.hasAi && (
                                    <span
                                        className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] border ${
                                            isAi
                                                ? "bg-zukvo-500/10 text-zukvo-600 border-zukvo-500/30"
                                                : "border-zinc-200 text-zinc-400"
                                        }`}
                                    >
                                        <Wand2 className="size-2.5" />{" "}
                                        {isAi ? "With AI" : "No AI"}
                                    </span>
                                )}
                                <span className="text-[13px] font-medium text-zukvo-ink">
                                    {price}
                                    {!s.free && (
                                        <span className="text-[10.5px] text-zinc-500">/mo</span>
                                    )}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <ChangePlanLink />
        </div>
    );
}

function DefaultSummary() {
    return (
        <div className="relative rounded-3xl border border-zinc-200 bg-white p-7 md:p-8 shadow-[0_30px_80px_-40px_rgba(15,15,15,0.15)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-zukvo-500/30 bg-zukvo-500/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-600">
                <Sparkles className="size-3" /> Start free
            </div>
            <div className="mt-5 font-heading text-3xl md:text-4xl font-medium text-zukvo-ink tracking-tight">
                The work OS for freelancers, teams &amp; companies.
            </div>
            <p className="mt-3 text-[14px] text-zinc-600 leading-relaxed">
                Create your account — no card required. Pick a plan now or after the 14-day
                trial.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2.5">
                {[
                    { i: Zap, t: "14-day free trial" },
                    { i: ShieldCheck, t: "No credit card" },
                    { i: Sparkles, t: "Cancel anytime" },
                    { i: Check, t: "Built for solo & teams" },
                ].map((b, i) => (
                    <div
                        key={i}
                        className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50/60 px-3 py-2 text-[12.5px] text-zukvo-ink"
                    >
                        <b.i className="size-3.5 text-zukvo-600" /> {b.t}
                    </div>
                ))}
            </div>

            <ChangePlanLink label="See pricing options" />
        </div>
    );
}

function ChangePlanLink({ label = "Change plan" }) {
    return (
        <div className="mt-6 pt-5 border-t border-zinc-200 flex items-center justify-between text-[12.5px]">
            <Link
                to="/#pricing"
                data-testid="signup-change-plan"
                className="inline-flex items-center gap-1.5 text-zukvo-600 hover:text-zukvo-700 font-medium"
            >
                <ArrowLeft className="size-3.5" />
                {label}
            </Link>
            <span className="text-zinc-400 inline-flex items-center gap-1.5">
                <Pencil className="size-3" /> Editable later in Billing
            </span>
        </div>
    );
}

/* ---------------- SIGNUP FORM ---------------- */

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

function SignupCard({ ctx }) {
    const [showPwd, setShowPwd] = useState(false);
    const [pwd, setPwd] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("freelancer"); // freelancer | team
    const [companyName, setCompanyName] = useState("");
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState("");

    const handleGoogleSignup = () => {
        if (typeof window === "undefined" || !window.google) {
            setErrorMsg("Google login is not ready yet. Please wait a few seconds and try again.");
            return;
        }

        if (type === "team" && !companyName.trim()) {
            setErrorMsg("Please enter your Company Name before signing up with Google.");
            return;
        }

        setErrorMsg("");

        try {
            const client = window.google.accounts.oauth2.initTokenClient({
                client_id: "945644412981-eu93b14d7jr5d0gd5s04758lu6mupad8.apps.googleusercontent.com",
                scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
                callback: async (tokenResponse) => {
                    if (tokenResponse.error) {
                        setErrorMsg("Google Sign Up was cancelled or failed.");
                        return;
                    }
                    if (tokenResponse.access_token) {
                        setStatus("loading");
                        try {
                            const res = await axios.post(`${API_URL}/api/landing/signup/google`, {
                                token: tokenResponse.access_token,
                                type,
                                companyName: type === "team" ? companyName : undefined,
                                planConfig: {
                                    tier: ctx.tier ?? null,
                                    sets: ctx.sets,
                                    ai: ctx.ai,
                                    billing: ctx.billing,
                                    currency: ctx.currency,
                                },
                            });

                            const { tenantSubdomain, email: verifiedEmail } = res.data;
                            const appUrl = new URL(import.meta.env.VITE_APP_URL || "http://localhost:3005");
                            window.location.href = `${appUrl.protocol}//${tenantSubdomain}.${appUrl.host}/login?email=${encodeURIComponent(verifiedEmail)}&sso=google`;
                        } catch (err) {
                            const msg = err?.response?.data?.error || "Google sign up failed. Please try again.";
                            setErrorMsg(msg);
                            setStatus("error");
                        }
                    }
                },
            });
            client.requestAccessToken();
        } catch (err) {
            console.error("Google auth initialisation error:", err);
            setErrorMsg("Failed to initialize Google login popup.");
        }
    };

    const handleMicrosoftSignup = () => {
        if (type === "team" && !companyName.trim()) {
            setErrorMsg("Please enter your Company Name before signing up with Microsoft.");
            return;
        }

        setErrorMsg("");

        const clientId = "2de414d6-6eff-4c4a-9480-f124cc8d4796";
        const redirectUri = `${window.location.origin}${window.location.pathname}`;
        const scope = encodeURIComponent("openid profile email User.Read");
        const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&response_mode=fragment`;

        const width = 600;
        const height = 600;
        const left = window.screen.width / 2 - width / 2;
        const top = window.screen.height / 2 - height / 2;
        const popup = window.open(
            authUrl,
            "microsoft-signup-popup",
            `width=${width},height=${height},top=${top},left=${left},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`
        );

        if (!popup) {
            setErrorMsg("Popup blocked. Please allow popups for this site.");
            return;
        }

        const messageListener = async (event) => {
            if (event.origin !== window.location.origin) return;

            if (event.data?.type === "microsoft-signup-token" && event.data?.token) {
                const token = event.data.token;
                cleanup();

                setStatus("loading");
                try {
                    const res = await axios.post(`${API_URL}/api/landing/signup/microsoft`, {
                        token,
                        type,
                        companyName: type === "team" ? companyName : undefined,
                        planConfig: {
                            tier: ctx.tier ?? null,
                            sets: ctx.sets,
                            ai: ctx.ai,
                            billing: ctx.billing,
                            currency: ctx.currency,
                        },
                    });

                    const { tenantSubdomain, email: verifiedEmail } = res.data;
                    const appUrl = new URL(import.meta.env.VITE_APP_URL || "http://localhost:3005");
                    window.location.href = `${appUrl.protocol}//${tenantSubdomain}.${appUrl.host}/login?email=${encodeURIComponent(verifiedEmail)}&sso=microsoft`;
                } catch (err) {
                    const msg = err?.response?.data?.error || "Microsoft sign up failed. Please try again.";
                    setErrorMsg(msg);
                    setStatus("error");
                }
            }
        };

        window.addEventListener("message", messageListener);

        const checkClosedInterval = setInterval(() => {
            if (popup.closed) {
                cleanup();
                setStatus("idle");
            }
        }, 1000);

        const cleanup = () => {
            window.removeEventListener("message", messageListener);
            clearInterval(checkClosedInterval);
        };
    };

    const pwdStrength = useMemo(() => {
        let s = 0;
        if (pwd.length >= 8) s++;
        if (/[A-Z]/.test(pwd)) s++;
        if (/[0-9]/.test(pwd)) s++;
        if (/[^A-Za-z0-9]/.test(pwd)) s++;
        return s; // 0-4
    }, [pwd]);

    const onSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");
        try {
            await axios.post(`${API_URL}/api/landing/signup`, {
                email,
                name,
                password: pwd,
                type,
                companyName: type === "team" ? companyName : undefined,
                planConfig: {
                    tier: ctx.tier ?? null,
                    sets: ctx.sets,
                    ai: ctx.ai,
                    billing: ctx.billing,
                    currency: ctx.currency,
                },
            });
            setStatus("success");
        } catch (err) {
            const msg = err?.response?.data?.error || "Something went wrong. Please try again.";
            setErrorMsg(msg);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div
                data-testid="signup-card"
                className="relative rounded-3xl border border-zinc-200 bg-white p-7 md:p-10 shadow-[0_30px_80px_-40px_rgba(15,15,15,0.15)] text-center"
            >
                <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30">
                    <Mail className="size-6 text-emerald-600" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-medium text-zukvo-ink tracking-tight">
                    Check your inbox
                </h2>
                <p className="mt-3 text-[14px] text-zinc-500 leading-relaxed max-w-sm mx-auto">
                    We sent a verification link to{" "}
                    <span className="font-medium text-zukvo-ink">{email}</span>. Click it to verify your email and continue.
                </p>
                <p className="mt-5 text-[12.5px] text-zinc-400">
                    Didn't receive it?{" "}
                    <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="text-zukvo-600 font-medium hover:text-zukvo-700"
                    >
                        Try again
                    </button>
                </p>
            </div>
        );
    }

    return (
        <div
            data-testid="signup-card"
            className="relative rounded-3xl border border-zinc-200 bg-white p-7 md:p-10 shadow-[0_30px_80px_-40px_rgba(15,15,15,0.15)]"
        >
            <h1 className="font-heading text-3xl md:text-4xl font-medium text-zukvo-ink tracking-tight text-center">
                Create your free account
            </h1>
            <p className="mt-2 text-center text-[13.5px] text-zinc-500">
                Get started in under a minute.
            </p>

            {/* Account type toggle */}
            <div className="mt-7 grid grid-cols-2 gap-2.5">
                {[
                    { value: "freelancer", label: "Freelancer", desc: "Just me" },
                    { value: "team", label: "Team", desc: "My company" },
                ].map((opt) => (
                    <button
                        key={opt.value}
                        type="button"
                        onClick={() => setType(opt.value)}
                        className={`flex flex-col items-start rounded-xl border px-4 py-3 text-left transition-all ${
                            type === opt.value
                                ? "border-zukvo-500 bg-zukvo-500/5 ring-2 ring-zukvo-500/20"
                                : "border-zinc-200 bg-white hover:border-zinc-300"
                        }`}
                    >
                        <span className={`text-[13.5px] font-medium ${type === opt.value ? "text-zukvo-700" : "text-zukvo-ink"}`}>
                            {opt.label}
                        </span>
                        <span className="text-[11.5px] text-zinc-500">{opt.desc}</span>
                    </button>
                ))}
            </div>

            {/* SSO */}
            <div className="mt-5 space-y-2.5">
                <SsoButton
                    provider="google"
                    label="Sign up with Google"
                    testid="signup-sso-google"
                    onClick={handleGoogleSignup}
                />
                <SsoButton
                    provider="microsoft"
                    label="Sign up with Microsoft"
                    testid="signup-sso-microsoft"
                    onClick={handleMicrosoftSignup}
                />
            </div>

            {/* Divider */}
            <div className="my-7 flex items-center gap-3">
                <span className="flex-1 h-px bg-zinc-200" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-400 font-medium">
                    or
                </span>
                <span className="flex-1 h-px bg-zinc-200" />
            </div>

            {/* Email form */}
            <form onSubmit={onSubmit} className="space-y-4" data-testid="signup-form">
                <FormField
                    label="Work Email"
                    icon={Mail}
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={setEmail}
                    testid="signup-email"
                />
                <FormField
                    label="Full Name"
                    icon={User}
                    type="text"
                    placeholder="Jane Smith"
                    value={name}
                    onChange={setName}
                    testid="signup-name"
                />
                {type === "team" && (
                    <FormField
                        label="Company Name"
                        icon={Building2}
                        type="text"
                        placeholder="Acme Corp"
                        value={companyName}
                        onChange={setCompanyName}
                        testid="signup-company"
                    />
                )}
                <div>
                    <label className="block text-[12px] font-medium text-zukvo-ink mb-1.5">
                        Password
                    </label>
                    <div className="group relative flex items-center rounded-xl border border-zinc-200 bg-white focus-within:border-zukvo-500 focus-within:ring-2 focus-within:ring-zukvo-500/20 transition-all">
                        <span className="pl-3.5 text-zinc-400">
                            <Lock className="size-4" />
                        </span>
                        <input
                            type={showPwd ? "text" : "password"}
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                            placeholder="At least 8 characters"
                            data-testid="signup-password"
                            className="flex-1 bg-transparent px-3 py-3 text-[14px] text-zukvo-ink placeholder:text-zinc-400 focus:outline-none"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPwd((s) => !s)}
                            data-testid="signup-password-toggle"
                            className="pr-3.5 text-zinc-400 hover:text-zukvo-ink"
                            aria-label={showPwd ? "Hide password" : "Show password"}
                        >
                            {showPwd ? (
                                <EyeOff className="size-4" />
                            ) : (
                                <Eye className="size-4" />
                            )}
                        </button>
                    </div>
                    {pwd && (
                        <div className="mt-2 flex items-center gap-1.5">
                            {[1, 2, 3, 4].map((i) => (
                                <span
                                    key={i}
                                    className={`h-1 flex-1 rounded-full transition-colors ${
                                        i <= pwdStrength
                                            ? pwdStrength <= 1
                                                ? "bg-rose-400"
                                                : pwdStrength <= 2
                                                  ? "bg-amber-400"
                                                  : pwdStrength <= 3
                                                    ? "bg-zukvo-500"
                                                    : "bg-emerald-500"
                                            : "bg-zinc-200"
                                    }`}
                                />
                            ))}
                            <span className="ml-2 text-[10.5px] text-zinc-500 uppercase tracking-[0.18em] w-16 text-right">
                                {pwdStrength <= 1
                                    ? "Weak"
                                    : pwdStrength <= 2
                                      ? "OK"
                                      : pwdStrength <= 3
                                        ? "Strong"
                                        : "Excellent"}
                            </span>
                        </div>
                    )}
                </div>

                <p className="text-[11.5px] text-zinc-500 leading-relaxed">
                    By creating an account, you accept our{" "}
                    <a
                        href="#terms"
                        className="text-zukvo-600 underline underline-offset-2 hover:text-zukvo-700"
                    >
                        Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a
                        href="#privacy"
                        className="text-zukvo-600 underline underline-offset-2 hover:text-zukvo-700"
                    >
                        Privacy Policy
                    </a>
                    .
                </p>

                {errorMsg && (
                    <p className="text-[13px] text-rose-600 bg-rose-50 border border-rose-200 rounded-xl px-3.5 py-2.5">
                        {errorMsg}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={status === "loading"}
                    data-testid="signup-submit"
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl text-white text-[14px] font-medium px-5 py-3.5 shadow-[0_15px_40px_-15px_rgba(99,102,241,0.55)] transition-all hover:shadow-[0_18px_50px_-15px_rgba(99,102,241,0.65)] disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                        backgroundImage:
                            "linear-gradient(135deg, #6366F1, #8B5CF6, #A855F7)",
                    }}
                >
                    {status === "loading" ? "Creating account…" : "Create Free Account"}
                    {status !== "loading" && <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />}
                </button>
            </form>

            <div className="mt-6 text-center text-[12.5px] text-zinc-500">
                Already have an account?{" "}
                <a
                    href="#login"
                    className="text-zukvo-600 font-medium hover:text-zukvo-700"
                >
                    Sign in
                </a>
            </div>
        </div>
    );
}

function FormField({ label, icon: Icon, type, placeholder, value, onChange, testid }) {
    return (
        <div>
            <label className="block text-[12px] font-medium text-zukvo-ink mb-1.5">
                {label}
            </label>
            <div className="group relative flex items-center rounded-xl border border-zinc-200 bg-white focus-within:border-zukvo-500 focus-within:ring-2 focus-within:ring-zukvo-500/20 transition-all">
                <span className="pl-3.5 text-zinc-400">
                    <Icon className="size-4" />
                </span>
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    data-testid={testid}
                    className="flex-1 bg-transparent px-3 py-3 text-[14px] text-zukvo-ink placeholder:text-zinc-400 focus:outline-none"
                />
            </div>
        </div>
    );
}

function SsoButton({ provider, label, testid, onClick }) {
    return (
        <button
            type="button"
            data-testid={testid}
            onClick={onClick}
            className="w-full inline-flex items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-[14px] font-medium text-zukvo-ink hover:border-zinc-300 hover:bg-zinc-50 transition-colors"
        >
            <SsoIcon provider={provider} />
            {label}
        </button>
    );
}

function SsoIcon({ provider }) {
    if (provider === "google") {
        return (
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
                <path
                    fill="#4285F4"
                    d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.71-1.57 2.7-3.89 2.7-6.62z"
                />
                <path
                    fill="#34A853"
                    d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.95v2.34A9 9 0 0 0 9 18z"
                />
                <path
                    fill="#FBBC05"
                    d="M3.97 10.72A5.4 5.4 0 0 1 3.68 9c0-.6.1-1.18.29-1.72V4.94H.95A9 9 0 0 0 0 9c0 1.45.35 2.83.95 4.06l3.02-2.34z"
                />
                <path
                    fill="#EA4335"
                    d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 .95 4.94l3.02 2.34C4.68 5.16 6.66 3.58 9 3.58z"
                />
            </svg>
        );
    }
    if (provider === "microsoft") {
        return (
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
                <rect x="0" y="0" width="8.5" height="8.5" fill="#F25022" />
                <rect x="9.5" y="0" width="8.5" height="8.5" fill="#7FBA00" />
                <rect x="0" y="9.5" width="8.5" height="8.5" fill="#00A4EF" />
                <rect x="9.5" y="9.5" width="8.5" height="8.5" fill="#FFB900" />
            </svg>
        );
    }
    return null;
}

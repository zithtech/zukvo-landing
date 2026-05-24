import React, { useMemo, useState } from "react";
import { Check, Sparkles, Plus, Wand2 } from "lucide-react";

const TIERS = [
    {
        id: "solo",
        name: "Solo Freelancer",
        kicker: "For independents",
        priceMonthly: 12,
        priceYearly: 9,
        cta: "Start free",
        features: [
            "Zithport extension",
            "BidIQ AI · 50 verdicts / mo",
            "Zai proposals · 30 / mo",
            "Up to 3 active clients",
            "Invoices + time tracking",
            "Document Hub · 5GB",
        ],
    },
    {
        id: "team",
        name: "Team",
        kicker: "For freelance studios",
        priceMonthly: 29,
        priceYearly: 24,
        priceUnit: "/ user",
        cta: "Start 14-day trial",
        featured: true,
        features: [
            "Everything in Solo",
            "Unlimited clients & projects",
            "Sprints, Buckets, Bug list",
            "RBAC for up to 25 users",
            "Daily updates + standups",
            "Document Hub · 100GB",
            "BidIQ · unlimited",
        ],
    },
    {
        id: "company",
        name: "Company",
        kicker: "For services companies",
        priceMonthly: null,
        priceYearly: null,
        cta: "Talk to sales",
        features: [
            "Everything in Team",
            "Granular RBAC + audit trail",
            "SSO / SAML",
            "Custom contracts & SOWs",
            "Dedicated CSM",
            "On-prem option",
            "Priority SLAs",
        ],
    },
];

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
            { name: "Ticket Management — Sprints, Bug list, Buckets, Reports", ai: true },
            { name: "Document Hub", ai: true },
            { name: "Project Management", ai: true },
            { name: "SQuads" },
        ],
    },
    {
        id: "set2",
        label: "SET 2",
        name: "Workforce Ops",
        priceMonthly: 8,
        priceYearly: 6,
        modules: [
            { name: "Daily Updates" },
            { name: "Time Tracking — My & Team" },
            { name: "Performance Management" },
            { name: "Escalation Management" },
        ],
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
        modules: [
            { name: "ZithPort Extension" },
            { name: "Leads Management", ai: true },
            { name: "Proposals (Zai)", ai: true },
            { name: "BidIQ", ai: true, aiOnly: true },
        ],
    },
    {
        id: "set4",
        label: "SET 4",
        name: "Organization Suite",
        priceMonthly: 6,
        priceYearly: 5,
        modules: [
            { name: "Client Management" },
            { name: "Client Portal" },
            { name: "Roles & Permissions" },
            { name: "Members Management" },
            { name: "Grades" },
        ],
    },
    {
        id: "set5",
        label: "SET 5",
        name: "Finance Suite",
        priceMonthly: 10,
        priceYearly: 8,
        modules: [
            { name: "Invoice — Dashboard, Templates, Customers" },
            { name: "Accounts" },
        ],
    },
    {
        id: "set6",
        label: "SET 6",
        name: "Connect",
        free: true,
        modules: [
            { name: "Integrations — Calendar, Mail" },
            { name: "Mail Page" },
            { name: "Calendar Page" },
            { name: "Main Dashboard" },
        ],
    },
];

export default function Pricing() {
    const [yearly, setYearly] = useState(true);
    const [selected, setSelected] = useState(() => ({
        set1: true,
        set2: false,
        set3: false,
        set4: false,
        set5: false,
        set6: true,
    }));
    const [aiEnabled, setAiEnabled] = useState(() => ({
        set1: true,
        set3: true,
    }));

    const toggleSet = (id) => {
        if (id === "set6") return; // Connect is always included
        setSelected((s) => ({ ...s, [id]: !s[id] }));
    };

    const toggleAi = (id) => {
        setAiEnabled((a) => ({ ...a, [id]: !a[id] }));
    };

    const priceFor = (s) => {
        if (s.free) return 0;
        if (s.hasAi) {
            const variant = aiEnabled[s.id] ? s.pricing.withAi : s.pricing.withoutAi;
            return yearly ? variant.yearly : variant.monthly;
        }
        return yearly ? s.priceYearly : s.priceMonthly;
    };

    const { total, count } = useMemo(() => {
        let t = 0;
        let c = 0;
        for (const s of SETS) {
            if (!selected[s.id]) continue;
            c += 1;
            t += priceFor(s);
        }
        return { total: t, count: c };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected, yearly, aiEnabled]);

    return (
        <section
            id="pricing"
            data-testid="pricing-section"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-20">
                <div className="zk-reveal text-center max-w-2xl mx-auto">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        <Sparkles className="size-3 text-zukvo-400" /> Pricing
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em]">
                        Honest, scaling pricing.
                    </h2>
                    <p className="mt-4 text-zinc-400 text-base md:text-lg leading-relaxed">
                        Start free. Upgrade when your pipeline does.
                    </p>

                    {/* Toggle */}
                    <div
                        className="mt-8 inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#101014] p-1"
                        data-testid="pricing-billing-toggle"
                    >
                        <button
                            data-testid="pricing-toggle-monthly"
                            onClick={() => setYearly(false)}
                            className={`px-4 py-2 text-[12px] rounded-full font-medium transition-all ${
                                !yearly
                                    ? "bg-white text-zukvo-ink"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            Monthly
                        </button>
                        <button
                            data-testid="pricing-toggle-yearly"
                            onClick={() => setYearly(true)}
                            className={`px-4 py-2 text-[12px] rounded-full font-medium transition-all flex items-center gap-2 ${
                                yearly
                                    ? "bg-white text-zukvo-ink"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            Yearly
                            <span
                                className={`text-[10px] uppercase tracking-[0.18em] rounded-full px-1.5 py-0.5 border ${
                                    yearly
                                        ? "bg-zukvo-500/10 text-zukvo-600 border-zukvo-500/30"
                                        : "bg-emerald-500/10 text-emerald-300 border-emerald-400/30"
                                }`}
                            >
                                -25%
                            </span>
                        </button>
                    </div>
                </div>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
                    {TIERS.map((t) => {
                        const price = yearly ? t.priceYearly : t.priceMonthly;
                        return (
                            <div
                                key={t.id}
                                data-testid={`pricing-tier-${t.id}`}
                                className={`relative rounded-2xl p-7 md:p-8 ${
                                    t.featured
                                        ? "zk-trace-border"
                                        : "border border-white/10 bg-[#0E0E10]"
                                }`}
                            >
                                {t.featured && (
                                    <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-zukvo-500 text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em]">
                                        Most popular
                                    </span>
                                )}
                                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">
                                    {t.kicker}
                                </div>
                                <div className="mt-2 font-heading text-2xl font-medium text-white">
                                    {t.name}
                                </div>

                                <div className="mt-6 flex items-end gap-1.5">
                                    {price === null ? (
                                        <span className="font-heading text-5xl font-medium tracking-tighter text-white">
                                            Custom
                                        </span>
                                    ) : (
                                        <>
                                            <span className="font-heading text-5xl font-medium tracking-tighter text-white">
                                                ${price}
                                            </span>
                                            <span className="pb-2 text-[12px] text-zinc-500">
                                                {t.priceUnit || ""} / month
                                            </span>
                                        </>
                                    )}
                                </div>
                                {price !== null && yearly && (
                                    <div className="mt-1 text-[11px] text-zinc-500">
                                        Billed yearly · ${price * 12}{t.priceUnit ? "/user" : ""}/yr
                                    </div>
                                )}

                                <a
                                    href={t.id === "company" ? "#contact" : "#start"}
                                    data-testid={`pricing-cta-${t.id}`}
                                    className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-[13px] font-medium transition-colors ${
                                        t.featured
                                            ? "bg-zukvo-500 hover:bg-zukvo-600 text-white"
                                            : "bg-white text-zukvo-ink hover:bg-zinc-100"
                                    }`}
                                >
                                    {t.cta}
                                </a>

                                <div className="mt-7 h-px bg-white/10" />

                                <ul className="mt-6 space-y-3">
                                    {t.features.map((f) => (
                                        <li
                                            key={f}
                                            className="flex items-start gap-2.5 text-[13.5px] text-zinc-300"
                                        >
                                            <Check className="mt-0.5 size-4 text-zukvo-400 shrink-0" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* Build your plan — module SET picker */}
                <div
                    id="build-your-plan"
                    data-testid="pricing-module-picker"
                    className="mt-14 md:mt-16 scroll-mt-24"
                >
                    <div className="zk-reveal text-center max-w-2xl mx-auto">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                            <Plus className="size-3 text-zukvo-400" /> Build your plan
                        </span>
                        <h3 className="mt-5 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Pick only the modules you need.
                        </h3>
                        <p className="mt-4 text-zinc-400 text-base md:text-lg leading-relaxed">
                            Six suites. Toggle what fits your team. Connect is always free.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {SETS.map((s) => {
                            const isSelected = !!selected[s.id];
                            const isFree = !!s.free;
                            const ai = !!aiEnabled[s.id];
                            const price = priceFor(s);
                            return (
                                <div
                                    key={s.id}
                                    role="button"
                                    tabIndex={isFree ? -1 : 0}
                                    onClick={() => toggleSet(s.id)}
                                    onKeyDown={(e) => {
                                        if (isFree) return;
                                        if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault();
                                            toggleSet(s.id);
                                        }
                                    }}
                                    aria-pressed={isSelected}
                                    aria-disabled={isFree}
                                    data-testid={`pricing-set-${s.id}`}
                                    className={`group relative text-left rounded-2xl p-4 md:p-5 transition-all outline-none focus-visible:ring-2 focus-visible:ring-zukvo-500/60 ${
                                        isSelected
                                            ? "bg-[#0E0E10] ring-1 ring-zukvo-500/50 shadow-[0_0_0_4px_rgba(99,102,241,0.08)]"
                                            : "bg-[#0E0E10] border border-white/10 hover:border-white/20"
                                    } ${isFree ? "cursor-default" : "cursor-pointer"}`}
                                >
                                    {/* Checkbox / status indicator */}
                                    <span
                                        className={`absolute top-3.5 right-3.5 inline-flex size-5 items-center justify-center rounded-md border transition-colors ${
                                            isSelected
                                                ? "bg-zukvo-500 border-zukvo-500 text-white"
                                                : "border-white/15 bg-transparent text-transparent group-hover:border-white/30"
                                        }`}
                                        aria-hidden="true"
                                    >
                                        <Check className="size-3" />
                                    </span>

                                    <div className="flex items-center gap-1.5 flex-wrap pr-7">
                                        <span
                                            className={`text-[9.5px] font-bold uppercase tracking-[0.22em] rounded-full px-1.5 py-0.5 border ${
                                                isSelected
                                                    ? "bg-zukvo-500/10 text-zukvo-300 border-zukvo-500/30"
                                                    : "border-white/10 text-zinc-400"
                                            }`}
                                        >
                                            {s.label}
                                        </span>
                                        {isFree && (
                                            <span className="text-[9.5px] font-bold uppercase tracking-[0.22em] rounded-full px-1.5 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-400/30">
                                                Always included
                                            </span>
                                        )}
                                    </div>

                                    <div className="mt-2.5 font-heading text-lg md:text-xl font-medium text-white">
                                        {s.name}
                                    </div>

                                    <div className="mt-2.5 flex items-baseline gap-1.5">
                                        {isFree ? (
                                            <span className="font-heading text-2xl font-medium tracking-tight text-white">
                                                Free
                                            </span>
                                        ) : (
                                            <>
                                                <span className="font-heading text-2xl font-medium tracking-tight text-white">
                                                    ${price}
                                                </span>
                                                <span className="text-[11px] text-zinc-500">
                                                    / user / month
                                                </span>
                                            </>
                                        )}
                                    </div>

                                    {/* AI toggle for sets that have an AI variant */}
                                    {s.hasAi && (
                                        <div
                                            className="mt-3 inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#101014] p-0.5"
                                            data-testid={`pricing-ai-toggle-${s.id}`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <button
                                                type="button"
                                                data-testid={`pricing-ai-on-${s.id}`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (!ai) toggleAi(s.id);
                                                }}
                                                aria-pressed={ai}
                                                className={`inline-flex items-center gap-1 px-2.5 py-1 text-[10.5px] rounded-full font-medium transition-colors ${
                                                    ai
                                                        ? "bg-zukvo-500 text-white"
                                                        : "text-zinc-400 hover:text-white"
                                                }`}
                                            >
                                                <Wand2 className="size-2.5" /> With AI
                                            </button>
                                            <button
                                                type="button"
                                                data-testid={`pricing-ai-off-${s.id}`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (ai) toggleAi(s.id);
                                                }}
                                                aria-pressed={!ai}
                                                className={`px-2.5 py-1 text-[10.5px] rounded-full font-medium transition-colors ${
                                                    !ai
                                                        ? "bg-white text-zukvo-ink"
                                                        : "text-zinc-400 hover:text-white"
                                                }`}
                                            >
                                                Without AI
                                            </button>
                                        </div>
                                    )}

                                    <div className="mt-3.5 h-px bg-white/10" />

                                    <ul className="mt-3.5 space-y-2">
                                        {s.modules.map((m) => {
                                            const disabled = m.aiOnly && s.hasAi && !ai;
                                            const showAiBadge = m.ai && s.hasAi;
                                            return (
                                                <li
                                                    key={m.name}
                                                    className={`flex items-start gap-1.5 text-[12px] leading-snug ${
                                                        disabled ? "text-zinc-500 line-through decoration-zinc-700" : "text-zinc-300"
                                                    }`}
                                                >
                                                    <Check
                                                        className={`mt-0.5 size-3 shrink-0 ${
                                                            disabled
                                                                ? "text-zinc-700"
                                                                : isSelected
                                                                ? "text-zukvo-400"
                                                                : "text-zinc-500"
                                                        }`}
                                                    />
                                                    <span className="flex-1">{m.name}</span>
                                                    {showAiBadge && (
                                                        <span
                                                            className={`mt-0.5 inline-flex items-center gap-0.5 rounded-full px-1 py-0.5 text-[8.5px] font-bold uppercase tracking-[0.18em] border ${
                                                                ai
                                                                    ? "bg-zukvo-500/10 text-zukvo-300 border-zukvo-500/30"
                                                                    : "border-white/10 text-zinc-500"
                                                            }`}
                                                        >
                                                            <Wand2 className="size-2" /> AI
                                                        </span>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>

                    {/* Running total bar */}
                    <div
                        data-testid="pricing-module-summary"
                        className="mt-8 rounded-2xl border border-white/10 bg-[#0E0E10] p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
                    >
                        <div className="flex items-center gap-4">
                            <div className="inline-flex size-11 items-center justify-center rounded-xl bg-zukvo-500/10 border border-zukvo-500/30 text-zukvo-300">
                                <Sparkles className="size-5" />
                            </div>
                            <div>
                                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">
                                    Your plan
                                </div>
                                <div className="mt-0.5 text-[14px] text-zinc-200">
                                    {count} {count === 1 ? "module set" : "module sets"} selected
                                    <span className="text-zinc-500"> · billed {yearly ? "yearly" : "monthly"}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 md:gap-6 w-full md:w-auto">
                            <div className="md:text-right">
                                <div className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-white">
                                    {total === 0 ? "Free" : `$${total}`}
                                </div>
                                {total > 0 && (
                                    <div className="text-[11px] text-zinc-500">
                                        per user / month{yearly ? ` · $${total * 12}/yr` : ""}
                                    </div>
                                )}
                            </div>
                            <a
                                href="#start"
                                data-testid="pricing-module-cta"
                                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-[13px] font-medium bg-zukvo-500 hover:bg-zukvo-600 text-white transition-colors whitespace-nowrap"
                            >
                                {total === 0 ? "Start with Connect" : "Continue with this plan"}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import React, { useState } from "react";
import { Check, Sparkles } from "lucide-react";

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

export default function Pricing() {
    const [yearly, setYearly] = useState(true);

    return (
        <section
            id="pricing"
            data-testid="pricing-section"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
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
            </div>
        </section>
    );
}

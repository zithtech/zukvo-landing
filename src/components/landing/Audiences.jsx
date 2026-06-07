import React from "react";
import { User, Users, Building2, Check } from "lucide-react";

const PERSONAS = [
    {
        icon: User,
        kicker: "Solo freelancer",
        plan: "Solo · Solo Pro",
        title: "Run a one-person agency.",
        body: "Capture leads, score bids with BidIQ, send Zai proposals, deliver work and invoice — all solo, no app-hopping.",
        items: ["Zithport + Leads pipeline", "BidIQ + Zai proposals", "Invoices + Accounts"],
        accent: "from-amber-500/10 to-amber-500/0",
        ring: "ring-amber-400/20",
        testid: "audience-solo",
    },
    {
        icon: Users,
        kicker: "Freelance team",
        plan: "Team",
        title: "Coordinate without chaos.",
        body: "Up to 15 members on a shared pipeline — squads, time tracking, daily updates, and roles & permissions.",
        items: ["Squads + roles & permissions", "Time tracking + daily updates", "Sprints + buckets + bugs"],
        accent: "from-zukvo-500/15 to-zukvo-500/0",
        ring: "ring-zukvo-500/30",
        featured: true,
        testid: "audience-team",
    },
    {
        icon: Building2,
        kicker: "Companies",
        plan: "Growth · Scale",
        title: "Standardize how work flows.",
        body: "Scale to 200 members with performance reviews, escalation management, advanced workforce ops, and unlimited clients.",
        items: ["Performance + escalation mgmt", "Advanced workforce ops", "Unlimited clients & leads"],
        accent: "from-emerald-500/10 to-emerald-500/0",
        ring: "ring-emerald-400/20",
        testid: "audience-company",
    },
];

export default function Audiences() {
    return (
        <section
            id="audiences"
            data-testid="audiences-section"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-20">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Built for
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em]">
                        One product. Three operating modes.
                    </h2>
                    <p className="mt-5 text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed">
                        Whether you're a solo operator, a 6-person studio, or a 200-person services
                        company — Zukvo adapts to how you actually work.
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
                    {PERSONAS.map((p) => (
                        <div
                            key={p.kicker}
                            data-testid={p.testid}
                            className={`zk-reveal relative rounded-2xl border ${
                                p.featured ? "border-zukvo-500/40" : "border-white/10"
                            } bg-[#0E0E10] p-7 overflow-hidden hover:-translate-y-1 transition-transform duration-300 ring-1 ${p.ring}`}
                        >
                            <div
                                aria-hidden
                                className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${p.accent}`}
                            />
                            <div className="relative">
                                <div className="flex items-center justify-between">
                                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white">
                                        <p.icon className="size-5" />
                                    </span>
                                    <a
                                        href="#pricing"
                                        className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 hover:text-white hover:border-white/20 transition-colors"
                                    >
                                        {p.plan}
                                    </a>
                                </div>
                                <div className="mt-5 text-[11px] uppercase tracking-[0.22em] text-zukvo-300">
                                    {p.kicker}
                                </div>
                                <h3 className="mt-2 font-heading font-medium text-2xl md:text-[26px] tracking-[-0.02em]">
                                    {p.title}
                                </h3>
                                <p className="mt-3 text-[14px] text-zinc-400 leading-relaxed">
                                    {p.body}
                                </p>
                                <ul className="mt-5 space-y-2">
                                    {p.items.map((it) => (
                                        <li
                                            key={it}
                                            className="flex items-center gap-2 text-[13px] text-zinc-300"
                                        >
                                            <Check className="size-3.5 text-zukvo-400" />
                                            {it}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

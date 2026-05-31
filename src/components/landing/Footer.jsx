import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Twitter,
    Github,
    Linkedin,
    ArrowUpRight,
    Plus,
    Target,
    Layers,
    Activity,
    Eye,
    Receipt,
} from "lucide-react";
import ZukvoLogo from "@/components/ZukvoLogo";

const JOURNEY = [
    {
        label: "Find Clients & Manage",
        sub: "From the marketplace to the signed proposal — bring clients in, qualify them, and run the relationship without losing context.",
        icon: Target,
        tone: "violet",
        links: [
            { label: "Zithport", href: "/products/zithport" },
            { label: "Leads Management", href: "/products/leads-management" },
            { label: "Client Management", href: "/products/client-management" },
            { label: "Client Portal", href: "/products/client-portal" },
            { label: "Proposals", href: "/products/proposals" },
        ],
    },
    {
        label: "Manage Work",
        sub: "Sprints, tickets, and the day-to-day — every moving piece, visible and accountable.",
        icon: Layers,
        tone: "indigo",
        links: [
            { label: "Project Management", href: "/products/project-management" },
            { label: "Ticket Management", href: "/products/ticket-management" },
            { label: "Daily Updates", href: "/products/daily-updates" },
            { label: "Squads", href: "/products/squads" },
            { label: "Document Hub", href: "/products/document-hub" },
        ],
    },
    {
        label: "Track Team",
        sub: "Performance, hours, and momentum — visible, never invasive.",
        icon: Activity,
        tone: "emerald",
        links: [
            { label: "Performance Management", href: "/products/performance-management" },
            { label: "Time Tracking", href: "/products/time-tracking" },
            { label: "Escalation Management", href: "/products/escalation-management" },
            { label: "Mail & Calendar", href: "/products/mail-calendar" },
        ],
    },
    {
        label: "Share Progress",
        sub: "A branded window into the work — no screenshots, no chasing, no surprises.",
        icon: Eye,
        tone: "amber",
        links: [
            { label: "Client Portal", href: "/products/client-portal" },
            { label: "Daily Updates", href: "/products/daily-updates" },
            { label: "Document Hub", href: "/products/document-hub" },
        ],
    },
    {
        label: "Get Paid",
        sub: "Proposals out, invoices in, accounts reconciled — money moves on its own rails.",
        icon: Receipt,
        tone: "rose",
        links: [
            { label: "Invoice", href: "/products/invoice" },
            { label: "Proposals", href: "/products/proposals" },
            { label: "Accounts", href: "/products/accounts" },
        ],
    },
];

const TONE = {
    violet: { accent: "text-violet-300", dot: "bg-violet-400" },
    indigo: { accent: "text-zukvo-300", dot: "bg-zukvo-400" },
    emerald: { accent: "text-emerald-300", dot: "bg-emerald-400" },
    amber: { accent: "text-amber-300", dot: "bg-amber-400" },
    rose: { accent: "text-rose-300", dot: "bg-rose-400" },
};

export default function Footer() {
    const [open, setOpen] = useState(0);
    return (
        <footer
            data-testid="site-footer"
            className="relative bg-[#0A0A0A] text-white border-t border-white/10 overflow-hidden"
        >
            {/* Ambient mesh */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none opacity-70"
                style={{
                    backgroundImage:
                        "radial-gradient(50% 60% at 20% 10%, rgba(139,92,246,0.10), transparent 60%), radial-gradient(40% 50% at 80% 20%, rgba(99,102,241,0.10), transparent 60%), radial-gradient(45% 55% at 50% 95%, rgba(16,185,129,0.06), transparent 60%)",
                }}
            />

            <div className="relative mx-auto max-w-5xl px-6 md:px-10 pt-16 md:pt-20 pb-8">
                {/* Eyebrow */}
                <div className="zk-reveal flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Choose your next move
                    </span>
                </div>

                {/* Big question */}
                <h2
                    data-testid="footer-journey-heading"
                    className="zk-reveal mt-5 mx-auto text-center font-heading font-medium tracking-[-0.04em] text-white leading-[1.02]"
                    style={{ fontSize: "clamp(30px, 5vw, 64px)" }}
                >
                    What do you want to do{" "}
                    <span
                        className="text-transparent bg-clip-text"
                        style={{
                            backgroundImage:
                                "linear-gradient(135deg, #A78BFA, #6366F1, #34D399)",
                        }}
                    >
                        today?
                    </span>
                </h2>
                <p className="zk-reveal mt-4 max-w-lg mx-auto text-center text-[13.5px] md:text-[14.5px] text-zinc-400 leading-relaxed">
                    Pick a direction. Each path opens the rooms and tools that get it done.
                </p>

                {/* Journey list — no boxes, typography-led */}
                <div
                    data-testid="footer-journey-list"
                    className="zk-reveal mt-10 md:mt-12 border-t border-white/10"
                >
                    {JOURNEY.map((j, i) => {
                        const t = TONE[j.tone];
                        const isOpen = open === i;
                        return (
                            <div
                                key={j.label}
                                className="border-b border-white/10"
                                data-testid={`footer-journey-item-${i}`}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                    className="group w-full flex items-center gap-4 md:gap-6 py-4 md:py-5 text-left transition-colors"
                                >
                                    <span
                                        className={`shrink-0 font-mono text-[10.5px] tracking-[0.18em] ${t.accent} w-7`}
                                    >
                                        0{i + 1}
                                    </span>
                                    <span
                                        className={`shrink-0 ${t.accent} transition-transform duration-300 ${
                                            isOpen ? "scale-110" : "group-hover:scale-110"
                                        }`}
                                    >
                                        <j.icon className="size-5 md:size-[22px]" />
                                    </span>
                                    <h3
                                        className={`flex-1 font-heading font-medium text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] tracking-[-0.03em] leading-[1.05] transition-colors duration-300 ${
                                            isOpen
                                                ? "text-white"
                                                : "text-zinc-500 group-hover:text-white"
                                        }`}
                                    >
                                        {j.label}
                                    </h3>
                                    <span
                                        className={`shrink-0 inline-flex size-8 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-all duration-300 ${
                                            isOpen
                                                ? "rotate-45 bg-white text-zukvo-ink border-white"
                                                : "group-hover:bg-white/5"
                                        }`}
                                        aria-hidden="true"
                                    >
                                        <Plus className="size-3.5" />
                                    </span>
                                </button>

                                {/* Expanded panel */}
                                <div
                                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="pb-5 md:pb-6 md:pl-[68px] grid md:grid-cols-12 gap-4 md:gap-8">
                                            <p className="md:col-span-5 text-[12.5px] md:text-[13px] text-zinc-400 leading-relaxed">
                                                {j.sub}
                                            </p>
                                            <div className="md:col-span-7 flex flex-wrap items-center gap-x-5 gap-y-2">
                                                {j.links.map((s) => (
                                                    <Link
                                                        key={s.label}
                                                        to={s.href}
                                                        data-testid={`footer-journey-link-${s.label.toLowerCase().replace(/\s+|&/g, "-")}`}
                                                        className="group/sub inline-flex items-center gap-1 text-[13px] md:text-[13.5px] text-zinc-300 hover:text-white transition-colors"
                                                    >
                                                        <span className="relative">
                                                            {s.label}
                                                            <span
                                                                className={`absolute left-0 right-0 -bottom-0.5 h-px ${t.dot} scale-x-0 group-hover/sub:scale-x-100 origin-left transition-transform duration-300`}
                                                            />
                                                        </span>
                                                        <ArrowUpRight className="size-3.5 text-zinc-500 group-hover/sub:text-white transition-all duration-300 group-hover/sub:translate-x-0.5 group-hover/sub:-translate-y-0.5" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Helper line below the journey */}
                <div className="zk-reveal mt-7 flex flex-col sm:flex-row items-center justify-center gap-2.5 text-[12px] text-zinc-500">
                    <span>Not sure where to start?</span>
                    <Link
                        to="/products"
                        data-testid="footer-explore-all"
                        className="inline-flex items-center gap-1.5 text-zinc-200 hover:text-white transition-colors"
                    >
                        Explore every module
                        <ArrowUpRight className="size-3.5" />
                    </Link>
                </div>

                {/* Slim brand bar */}
                <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <ZukvoLogo variant="dark" size={22} />
                        <span className="hidden md:inline text-[11.5px] text-zinc-500">
                            The work OS for freelancers, teams and companies.
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        {[Twitter, Github, Linkedin].map((I, i) => (
                            <a
                                key={i}
                                href="#"
                                data-testid={`footer-social-${i}`}
                                className="inline-flex size-8 items-center justify-center rounded-full border border-white/10 text-zinc-300 hover:text-white hover:border-zukvo-500/40 transition-colors"
                                aria-label="Social"
                            >
                                <I className="size-3.5" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[11.5px] text-zinc-500">
                    <div data-testid="footer-copyright">
                        © {new Date().getFullYear()} Zukvo. All rights reserved.
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-emerald-400" /> All systems
                        operational
                    </div>
                </div>

                {/* Massive wordmark */}
                <div
                    className="mt-10 select-none pointer-events-none"
                    data-testid="footer-bigmark"
                    aria-hidden="true"
                >
                    <div
                        className="font-heading font-semibold tracking-[-0.06em] leading-none text-transparent"
                        style={{
                            fontSize: "clamp(80px, 18vw, 320px)",
                            WebkitTextStroke: "1px rgba(255,255,255,0.18)",
                            backgroundImage:
                                "linear-gradient(180deg, rgba(99,102,241,0.18), transparent 70%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                        }}
                    >
                        ZUKVO
                    </div>
                </div>
            </div>
        </footer>
    );
}

import React from "react";
import { ArrowRight, PlayCircle, Zap, Sparkles } from "lucide-react";

const DASHBOARD_IMG =
    "https://customer-assets.emergentagent.com/job_39f817a0-5131-43e1-a744-33b263e6d84a/artifacts/9vyiu5cd_image.png";

export default function Hero() {
    return (
        <section
            id="hero"
            data-testid="hero-section"
            className="relative pt-32 md:pt-40 pb-0 zk-mesh"
        >
            {/* dot grid */}
            <div className="absolute inset-0 zk-dot-grid-light opacity-60 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent_70%)]" />

            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                {/* Eyebrow */}
                <div className="zk-reveal flex justify-center">
                    <span
                        data-testid="hero-eyebrow"
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 backdrop-blur px-3.5 py-1.5 text-[12px] font-medium text-zinc-700"
                    >
                        <Sparkles className="size-3.5 text-zukvo-500" />
                        Now with <span className="text-zukvo-600">BidIQ AI</span> & Zai assistants
                    </span>
                </div>

                {/* Headline */}
                <h1
                    data-testid="hero-headline"
                    className="zk-reveal mt-6 text-center font-heading font-medium text-[42px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[84px] tracking-[-0.04em] text-zukvo-ink"
                >
                    The work OS for{" "}
                    <span className="relative inline-block">
                        <span className="relative z-10">freelancers</span>
                        <svg
                            className="absolute left-0 -bottom-2 w-full"
                            viewBox="0 0 300 18"
                            fill="none"
                            preserveAspectRatio="none"
                            aria-hidden
                        >
                            <path
                                d="M2 12 C 80 4, 200 18, 298 8"
                                stroke="#6366F1"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                    <br className="hidden sm:block" /> who think like founders.
                </h1>

                {/* Sub */}
                <p
                    data-testid="hero-subhead"
                    className="zk-reveal mx-auto mt-7 max-w-2xl text-center text-[17px] md:text-lg leading-relaxed text-zinc-600"
                >
                    Capture leads from any job board with the{" "}
                    <span className="text-zukvo-ink font-medium">Zithport</span> extension. Decide
                    smart with <span className="text-zukvo-ink font-medium">BidIQ</span>. Ship
                    sprints, invoices, and docs — all from a single, beautifully fast command
                    center.
                </p>

                {/* CTAs */}
                <div className="zk-reveal mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                        href="#start"
                        data-testid="hero-cta-primary"
                        className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium shadow-[0_10px_40px_-10px_rgba(99,102,241,0.55)] hover:bg-zukvo-600 transition-all"
                    >
                        Start free — no card
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                    <a
                        href="#demo"
                        data-testid="hero-cta-secondary"
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-medium text-zinc-800 hover:border-zinc-400 transition-colors"
                    >
                        <PlayCircle className="size-4 text-zukvo-600" />
                        Watch the 90-sec demo
                    </a>
                </div>

                {/* Tiny stats */}
                <div className="zk-reveal mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] text-zinc-500">
                    <span className="inline-flex items-center gap-2">
                        <Zap className="size-3.5 text-zukvo-500" /> 14-day free trial
                    </span>
                    <span className="hidden sm:inline">·</span>
                    <span>Built for solo, teams & companies</span>
                    <span className="hidden sm:inline">·</span>
                    <span>RBAC ready</span>
                </div>

                {/* Product visual */}
                <div className="zk-reveal relative mt-16 md:mt-20">
                    <div
                        className="relative mx-auto max-w-[1180px] rounded-[20px] border border-zinc-800/40 bg-zukvo-ink/95 p-2 md:p-3 shadow-[0_60px_120px_-30px_rgba(15,15,15,0.45),0_0_0_1px_rgba(99,102,241,0.18)]"
                        data-testid="hero-product-frame"
                    >
                        {/* Window chrome */}
                        <div className="flex items-center gap-1.5 px-3 py-2">
                            <span className="size-2.5 rounded-full bg-[#FF5F57]" />
                            <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
                            <span className="size-2.5 rounded-full bg-[#28C840]" />
                            <span className="ml-3 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                zukvo.app/work/sprint
                            </span>
                        </div>
                        <div className="overflow-hidden rounded-[12px] border border-white/5">
                            <img
                                src={DASHBOARD_IMG}
                                alt="Zukvo product dashboard showing sprint tickets and AI assistant"
                                className="block w-full h-auto"
                                loading="eager"
                                data-testid="hero-product-image"
                            />
                        </div>
                    </div>

                    {/* Glow */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-x-10 -top-10 -bottom-32 -z-10"
                        style={{
                            background:
                                "radial-gradient(60% 50% at 50% 30%, rgba(99,102,241,0.18), transparent 70%)",
                        }}
                    />

                    {/* Floating chips */}
                    <FloatingChip
                        className="hidden md:flex -left-4 lg:-left-12 top-24"
                        icon={<Zap className="size-3.5 text-amber-400" />}
                        title="BidIQ Verdict"
                        value="High-fit · Bid"
                        accent="amber"
                        testid="float-chip-bidiq"
                    />
                    <FloatingChip
                        className="hidden md:flex -right-4 lg:-right-12 top-1/2"
                        icon={<Sparkles className="size-3.5 text-zukvo-400" />}
                        title="Zai drafted"
                        value="Proposal · 2m ago"
                        accent="indigo"
                        testid="float-chip-zai"
                    />
                </div>
            </div>

            {/* Bridge into dark sections */}
            <div className="relative mt-[-180px] h-[260px] pointer-events-none">
                <div className="absolute inset-x-0 bottom-0 h-[260px] bg-gradient-to-b from-transparent via-[#0A0A0A]/60 to-[#0A0A0A]" />
            </div>
        </section>
    );
}

function FloatingChip({ className = "", icon, title, value, accent = "indigo", testid }) {
    const ring =
        accent === "amber"
            ? "ring-amber-400/30 shadow-[0_10px_40px_-12px_rgba(245,158,11,0.45)]"
            : "ring-zukvo-500/30 shadow-[0_10px_40px_-12px_rgba(99,102,241,0.55)]";
    return (
        <div
            data-testid={testid}
            className={`absolute z-10 ${className} flex items-center gap-3 rounded-2xl bg-[#111114]/90 backdrop-blur-md border border-white/10 px-3.5 py-2.5 ring-1 ${ring}`}
        >
            <span className="inline-flex size-7 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                {icon}
            </span>
            <div className="text-left">
                <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                    {title}
                </div>
                <div className="text-[13px] text-white font-medium">{value}</div>
            </div>
        </div>
    );
}

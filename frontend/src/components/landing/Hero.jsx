import React, { useEffect, useState } from "react";
import {
    ArrowRight,
    PlayCircle,
    Zap,
    Sparkles,
    Chrome,
    Layers,
    Handshake,
    GitBranch,
    Receipt,
    Check,
    CircleDot,
    Building2,
    FileSignature,
    UsersRound,
    Siren,
    KeyRound,
    User,
    ChevronDown,
    ChevronRight,
} from "lucide-react";

const FLOWS = {
    freelancer: {
        id: "freelancer",
        label: "Freelancer",
        icon: User,
        caption: "How a solo freelancer ships a job — Zithport to Accounts.",
        stages: [
            {
                id: "capture",
                stage: "Capture",
                icon: Chrome,
                accent: "amber",
                title: "Job extracted from Upwork",
                meta: "Zithport · 1-click",
                sub: "Job board → Zukvo",
            },
            {
                id: "triage",
                stage: "Triage",
                icon: Layers,
                accent: "indigo",
                title: "Saved to Leads",
                meta: "Score · 87/100",
                sub: "Leads Management",
            },
            {
                id: "decide",
                stage: "Decide",
                icon: Zap,
                accent: "amber",
                title: "Worth Applying",
                meta: "Bid recommended",
                sub: "BidIQ · AI verdict",
            },
            {
                id: "pitch",
                stage: "Pitch",
                icon: Sparkles,
                accent: "violet",
                title: "Proposal drafted",
                meta: "412 words · sent",
                sub: "Proposals + Zai",
            },
            {
                id: "onboard",
                stage: "Onboard",
                icon: Handshake,
                accent: "indigo",
                title: "Lead → Client + Project",
                meta: "Portal live",
                sub: "Client + Portal",
            },
            {
                id: "ship",
                stage: "Ship",
                icon: GitBranch,
                accent: "indigo",
                title: "Sprint #1",
                meta: "5 tickets · 1 doc",
                sub: "Sprint + Tickets + Docs",
            },
            {
                id: "bill",
                stage: "Bill",
                icon: Receipt,
                accent: "emerald",
                title: "$4,250 paid",
                meta: "Invoice → Accounts",
                sub: "Closed",
            },
        ],
    },
    company: {
        id: "company",
        label: "Team / Company",
        icon: UsersRound,
        caption: "How a services team scales delivery — Intake to Accounts.",
        stages: [
            {
                id: "intake",
                stage: "Intake",
                icon: Building2,
                accent: "indigo",
                title: "Acme Corporation onboarded",
                meta: "26 fields · 4 steps",
                sub: "Client Management",
            },
            {
                id: "pitch",
                stage: "Pitch",
                icon: FileSignature,
                accent: "violet",
                title: "Proposal · 4 pages",
                meta: "Built with Zai",
                sub: "Proposals",
            },
            {
                id: "plan",
                stage: "Plan",
                icon: UsersRound,
                accent: "indigo",
                title: "VDrive squad assembled",
                meta: "1 Head · 1 Sub · 4",
                sub: "Squads + Project",
            },
            {
                id: "ship",
                stage: "Ship",
                icon: GitBranch,
                accent: "indigo",
                title: "Sprint 7 · in flight",
                meta: "12 tickets · 14d",
                sub: "Sprint + Tickets + Docs + Time",
            },
            {
                id: "govern",
                stage: "Govern",
                icon: Siren,
                accent: "amber",
                title: "Quality · 92% on-time",
                meta: "0 escalations",
                sub: "Performance + Escalations",
            },
            {
                id: "show",
                stage: "Show",
                icon: KeyRound,
                accent: "emerald",
                title: "Portal live",
                meta: "Client tracking · live",
                sub: "Client Portal",
            },
            {
                id: "bill",
                stage: "Bill",
                icon: Receipt,
                accent: "emerald",
                title: "$48,200 invoiced",
                meta: "Net 15 · auto-reconciled",
                sub: "Invoice + Accounts",
            },
        ],
    },
};
const ACCENT_MAP = {
    indigo: {
        chipBg: "bg-zukvo-500/25",
        chipText: "text-indigo-200",
        chipBorder: "border-indigo-400/50",
        ring: "ring-zukvo-500/50",
        glow: "shadow-[0_0_0_4px_rgba(99,102,241,0.12)]",
        dot: "bg-indigo-300",
        flow: "from-transparent via-indigo-300/70 to-transparent",
    },
    amber: {
        chipBg: "bg-amber-500/15",
        chipText: "text-amber-300",
        chipBorder: "border-amber-400/30",
        ring: "ring-amber-400/40",
        glow: "shadow-[0_0_0_4px_rgba(245,158,11,0.10)]",
        dot: "bg-amber-400",
        flow: "from-transparent via-amber-400/70 to-transparent",
    },
    violet: {
        chipBg: "bg-violet-500/15",
        chipText: "text-violet-300",
        chipBorder: "border-violet-400/30",
        ring: "ring-violet-400/40",
        glow: "shadow-[0_0_0_4px_rgba(139,92,246,0.10)]",
        dot: "bg-violet-400",
        flow: "from-transparent via-violet-400/70 to-transparent",
    },
    emerald: {
        chipBg: "bg-emerald-500/15",
        chipText: "text-emerald-300",
        chipBorder: "border-emerald-400/30",
        ring: "ring-emerald-400/40",
        glow: "shadow-[0_0_0_4px_rgba(16,185,129,0.10)]",
        dot: "bg-emerald-400",
        flow: "from-transparent via-emerald-400/70 to-transparent",
    },
};
const PIPELINE_ROTATE_MS = 2200;

export default function Hero() {
    const [activeFlow, setActiveFlow] = useState("freelancer");
    const [activeStage, setActiveStage] = useState(0);
    const [paused, setPaused] = useState(false);

    const flow = FLOWS[activeFlow];

    // Reset rotation when the user switches flows
    useEffect(() => {
        setActiveStage(0);
    }, [activeFlow]);

    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => {
            setActiveStage((a) => (a + 1) % flow.stages.length);
        }, PIPELINE_ROTATE_MS);
        return () => clearInterval(id);
    }, [paused, flow.stages.length]);

    return (
        <section
            id="hero"
            data-testid="hero-section"
            className="relative pt-24 md:pt-28 pb-0 zk-mesh"
        >
            {/* dot grid */}
            <div className="absolute inset-0 zk-dot-grid-light opacity-60 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent_70%)]" />

            {/* Tech backdrop: orbs, network graph, scan line, activity chips */}
            <HeroBackdrop />

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
                    className="zk-reveal mt-6 mx-auto max-w-5xl text-center font-heading font-medium text-[40px] leading-[1.02] sm:text-5xl md:text-6xl lg:text-[68px] tracking-[-0.04em] text-zukvo-ink text-balance"
                >
                    The work OS for freelancers,
                    <br className="hidden sm:block" />{" "}
                    teams &{" "}
                    <span className="relative inline-block">
                        <span className="relative z-10">companies</span>
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
                    </span>{" "}
                    they grow into.
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

                {/* Animated workflow pipeline */}
                <div
                    className="zk-reveal relative mt-10 md:mt-12"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    {/* Pipeline header */}
                    <div className="flex flex-col items-center gap-4 mb-6">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-400">
                                Work flowing through the OS
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">
                                <span className="size-1.5 rounded-full bg-emerald-400 zk-pulse" />
                                Live
                            </span>
                        </div>

                        {/* Audience tabs */}
                        <div
                            role="tablist"
                            aria-label="Workflow audience"
                            className="inline-flex items-center gap-1 rounded-full border border-zinc-800/60 bg-[#0E0E12] p-1"
                            data-testid="hero-flow-tabs"
                        >
                            {Object.values(FLOWS).map((f) => {
                                const FIcon = f.icon;
                                const isActive = f.id === activeFlow;
                                return (
                                    <button
                                        key={f.id}
                                        type="button"
                                        role="tab"
                                        aria-selected={isActive}
                                        onClick={() => setActiveFlow(f.id)}
                                        data-testid={`hero-flow-tab-${f.id}`}
                                        className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12.5px] font-medium transition-colors ${
                                            isActive
                                                ? "bg-white text-zukvo-ink"
                                                : "text-zinc-400 hover:text-white"
                                        }`}
                                    >
                                        <FIcon className="size-3.5" />
                                        {f.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div
                        data-testid="hero-pipeline"
                        className="relative mx-auto max-w-[1180px] rounded-[24px] border border-zinc-800/50 bg-gradient-to-b from-[#0E0E12] to-[#0A0A0A] p-5 md:p-7 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.45)] overflow-hidden"
                    >
                        {/* Faint grid backdrop */}
                        <div
                            aria-hidden
                            className="absolute inset-0 rounded-[24px] opacity-[0.18] pointer-events-none"
                            style={{
                                backgroundImage:
                                    "linear-gradient(to right, rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.5) 1px, transparent 1px)",
                                backgroundSize: "40px 40px",
                                maskImage:
                                    "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                                WebkitMaskImage:
                                    "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                            }}
                        />

                        {/* Pipeline grid — responsive, gives each card breathing room */}
                        <div
                            key={activeFlow}
                            className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
                        >
                            {flow.stages.map((s, i) => {
                                const isActive = i === activeStage;
                                const isPast = i < activeStage;
                                const accent = ACCENT_MAP[s.accent];
                                const Icon = s.icon;
                                const isLast = i === flow.stages.length - 1;
                                return (
                                    <PipelineCard
                                        key={s.id}
                                        stage={s}
                                        icon={Icon}
                                        accent={accent}
                                        isActive={isActive}
                                        isPast={isPast}
                                        isLast={isLast}
                                        flowAnimate={!paused && isActive}
                                        index={i}
                                        onSelect={() => setActiveStage(i)}
                                    />
                                );
                            })}
                        </div>

                        {/* Footer caption */}
                        <div className="relative mt-7 pt-5 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12px] text-zinc-500">
                            <div className="inline-flex items-center gap-2">
                                <CircleDot className="size-3.5 text-zukvo-400" />
                                <span>{flow.caption}</span>
                            </div>
                            <div className="inline-flex items-center gap-2">
                                <span className="size-1.5 rounded-full bg-emerald-400 zk-pulse" />
                                <span>
                                    {activeFlow === "freelancer"
                                        ? "1,284 freelancers working right now"
                                        : "312 services teams shipping right now"}
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bridge into dark sections */}
            <div className="relative mt-[-180px] h-[260px] pointer-events-none">
                <div className="absolute inset-x-0 bottom-0 h-[260px] bg-gradient-to-b from-transparent via-[#0A0A0A]/60 to-[#0A0A0A]" />
            </div>
        </section>
    );
}

function HeroBackdrop() {
    return (
        <div
            aria-hidden
            data-testid="hero-backdrop"
            className="pointer-events-none absolute inset-0 overflow-hidden"
        >
            {/* Soft top atmosphere glow */}
            <div
                className="absolute -top-40 left-1/2 -translate-x-1/2 size-[900px] rounded-full opacity-50 blur-3xl"
                style={{
                    background:
                        "radial-gradient(circle, rgba(99,102,241,0.30), transparent 65%)",
                }}
            />

            {/* Perspective grid floor */}
            <div
                className="absolute inset-x-0 bottom-0 h-[78%]"
                style={{
                    perspective: "1100px",
                    perspectiveOrigin: "50% 0%",
                }}
            >
                <div
                    className="zk-grid-floor absolute inset-x-[-30%] inset-y-0"
                    style={{
                        transform: "rotateX(62deg) translateZ(-100px)",
                        WebkitMaskImage:
                            "linear-gradient(to top, black 28%, transparent 90%)",
                        maskImage:
                            "linear-gradient(to top, black 28%, transparent 90%)",
                    }}
                />
            </div>


            {/* Side fade so the grid dies softly at the edges */}
            <div
                className="absolute inset-y-0 left-0 w-[14%]"
                style={{
                    background:
                        "linear-gradient(to right, rgba(250,250,250,1), rgba(250,250,250,0))",
                }}
            />
            <div
                className="absolute inset-y-0 right-0 w-[14%]"
                style={{
                    background:
                        "linear-gradient(to left, rgba(250,250,250,1), rgba(250,250,250,0))",
                }}
            />
        </div>
    );
}

function PipelineCard({ stage, icon: Icon, accent, isActive, isPast, isLast, flowAnimate, index, onSelect }) {
    return (
        <button
            type="button"
            onClick={onSelect}
            data-testid={`pipeline-card-${stage.id}`}
            aria-pressed={isActive}
            className={`group relative min-w-0 text-left rounded-2xl border bg-[#0E0E12] p-5 md:p-6 min-h-[180px] flex flex-col transition-all duration-500 ${
                isActive
                    ? `ring-1 ${accent.ring} ${accent.glow} border-white/10 -translate-y-1 z-10`
                    : isPast
                    ? "border-white/5 opacity-85 hover:opacity-100"
                    : "border-white/10 opacity-75 hover:opacity-100"
            }`}
        >
            {/* Stage chip + step number */}
            <div className="flex items-center justify-between">
                <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] border ${accent.chipBg} ${accent.chipText} ${accent.chipBorder}`}
                >
                    <Icon className="size-3" />
                    {stage.stage}
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-mono">
                    0{index + 1}
                </span>
            </div>

            {/* Body */}
            <div className="mt-4 flex-1">
                <div className="text-[14.5px] font-medium text-white leading-snug">
                    {stage.title}
                </div>
                <div className="mt-1.5 text-[12.5px] text-zinc-300 leading-snug">
                    {stage.meta}
                </div>
            </div>

            {/* Sub line — pinned to bottom */}
            <div className="mt-4 pt-3 border-t border-white/5 text-[10px] uppercase tracking-[0.18em] text-zinc-500 break-words leading-relaxed">
                {stage.sub}
            </div>

            {/* Active pulse dot */}
            <span
                className={`absolute top-3 right-3 size-1.5 rounded-full transition-opacity ${
                    isActive ? `${accent.dot} zk-pulse opacity-100` : "opacity-0"
                }`}
            />

            {/* Past = check overlay (top-right when not active) */}
            {isPast && !isActive && (
                <span className="absolute top-3 right-3 inline-flex size-4 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300">
                    <Check className="size-2.5" />
                </span>
            )}

            {/* Always-visible flow arrow between cards.
                Horizontal on lg+ (sits in the grid gap, points right).
                Vertical (chevron-down) on smaller screens where cards stack. */}
            {!isLast && (
                <>
                    {/* Horizontal arrow — desktop grid */}
                    <span
                        aria-hidden
                        className={`hidden lg:inline-flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 size-6 items-center justify-center rounded-full border bg-[#0E0E12] transition-all ${
                            isActive
                                ? `${accent.chipBorder} ${accent.chipText}`
                                : "border-white/15 text-zinc-500"
                        }`}
                        style={
                            isActive && flowAnimate
                                ? { animation: "zk-pulse 1.8s ease-in-out infinite" }
                                : undefined
                        }
                    >
                        <ChevronRight className="size-3.5" />
                    </span>
                    {/* Vertical arrow — mobile / stacked */}
                    <span
                        aria-hidden
                        className={`lg:hidden absolute -bottom-3.5 left-1/2 -translate-x-1/2 z-20 inline-flex size-6 items-center justify-center rounded-full border bg-[#0E0E12] transition-all ${
                            isActive
                                ? `${accent.chipBorder} ${accent.chipText}`
                                : "border-white/15 text-zinc-500"
                        }`}
                        style={
                            isActive && flowAnimate
                                ? { animation: "zk-pulse 1.8s ease-in-out infinite" }
                                : undefined
                        }
                    >
                        <ChevronDown className="size-3.5" />
                    </span>
                </>
            )}
        </button>
    );
}

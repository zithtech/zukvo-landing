import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
    Chrome,
    Zap,
    Sparkles,
    GitBranch,
    Clock,
    Users,
    Send,
    Bug,
    Check,
    Wand2,
    Layers,
    ChevronRight,
    Maximize2,
    X,
    Trash2,
    Archive,
    Repeat,
} from "lucide-react";

import proposalPageImg from "@/assets/proposalbuilder.png";
import ticketSprintImg from "@/assets/ticket-sprint.png";
import leadsManagementImg from "@/assets/leadsmanagement.png";
import sprintSummaryImg from "@/assets/sprintcompletionsummary.png";
import sprintPendingImg from "@/assets/sprintcompletionpending.png";

const ZAI_IMG = proposalPageImg;
const SPRINT_IMG = ticketSprintImg;
const LEADS_IMG = leadsManagementImg;
const SPRINT_SUMMARY_IMG = sprintSummaryImg;
const SPRINT_PENDING_IMG = sprintPendingImg;

export default function FeaturesBento() {
    return (
        <section
            id="features"
            data-testid="features-bento-section"
            className="relative bg-[#0A0A0A] text-white"
        >
            {/* subtle dot grid */}
            <div className="absolute inset-0 zk-dot-grid opacity-40 pointer-events-none [mask-image:radial-gradient(60%_50%_at_50%_30%,black,transparent_75%)]" />

            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-20">
                {/* Heading */}
                <div className="max-w-3xl">
                    <span className="zk-reveal inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        <Zap className="size-3 text-zukvo-400" />
                        The pipeline
                    </span>
                    <h2
                        data-testid="features-heading"
                        className="zk-reveal mt-5 font-heading font-medium text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em]"
                    >
                        From job board to invoice — <br className="hidden sm:block" />
                        without switching tabs.
                    </h2>
                    <p className="zk-reveal mt-5 text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed">
                        Zukvo turns every freelance opportunity into a structured pipeline.
                        Capture, qualify, propose, deliver, and bill — all in one place.
                    </p>
                </div>

                {/* Bento grid */}
                <div className="zk-reveal mt-14 grid grid-cols-1 md:grid-cols-12 gap-5">
                    {/* Zithport - large left */}
                    <BentoCard
                        testid="bento-zithport"
                        className="md:col-span-7 md:row-span-2 min-h-[420px]"
                        eyebrow="Zithport · Chrome extension"
                        title="Save jobs from any board. They land in Zukvo as Leads."
                        body="Upwork, Contra, LinkedIn, Niche boards — one click and the post becomes a structured Lead with budget, scope, deadline, and source attached."
                    >
                        <ZithportVisual />
                    </BentoCard>

                    {/* BidIQ */}
                    <BentoCard
                        testid="bento-bidiq"
                        className="md:col-span-5"
                        highlight
                        eyebrow="BidIQ AI"
                        title="Bid or pass? BidIQ tells you in 4 seconds."
                        body="An AI verdict score on every lead — fit, competition, pricing band, and risk. Stop wasting time on jobs you'd never win."
                    >
                        <BidIQVisual />
                    </BentoCard>

                    {/* Zai proposal */}
                    <BentoCard
                        testid="bento-zai"
                        className="md:col-span-5"
                        eyebrow="Zai · Proposal AI"
                        title="Draft proposals in plain English."
                        body="Zai writes scoped, on-brand proposals from a single sentence brief. Edit, send, track — done."
                    >
                        <div className="relative mt-5 -mx-6 -mb-7 h-[320px] overflow-hidden rounded-b-2xl border-t border-white/[0.08] bg-[#0A0A12]">
                            {/* Multi-layer ambient lighting */}
                            <div aria-hidden className="pointer-events-none absolute inset-0">
                                <div className="absolute top-0 right-0 w-3/5 h-full bg-gradient-to-bl from-zukvo-500/15 via-violet-500/5 to-transparent" />
                                <div className="absolute bottom-0 left-0 w-3/5 h-3/4 bg-gradient-to-tr from-fuchsia-500/10 via-violet-600/5 to-transparent" />
                                <div className="absolute -top-20 right-1/4 size-72 rounded-full bg-zukvo-500/20 blur-[90px]" />
                                <div className="absolute -bottom-16 left-1/3 size-56 rounded-full bg-violet-500/15 blur-[80px]" />
                            </div>

                            {/* Subtle dot grid texture */}
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-0 opacity-[0.18]"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                                    backgroundSize: "22px 22px",
                                    maskImage:
                                        "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
                                }}
                            />

                            {/* Main screenshot — lifted with multi-shadow depth */}
                            <div className="absolute left-1/2 top-10 w-[88%] -translate-x-1/2 rounded-xl overflow-hidden ring-1 ring-white/[0.12] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.65),0_8px_30px_-10px_rgba(99,102,241,0.35),inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                                <img
                                    src={ZAI_IMG}
                                    alt="Zai proposal builder draft view"
                                    className="block w-full h-auto object-cover object-top"
                                />
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                />
                            </div>

                            {/* Floating: Zai generating — glassmorphic card (top-right) */}
                            <div className="absolute top-5 right-4 flex items-center gap-2.5 rounded-2xl bg-white/95 backdrop-blur-xl pl-1.5 pr-3 py-1.5 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.6)_inset] ring-1 ring-black/[0.04]">
                                <span className="inline-flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-zukvo-500 to-violet-600 shadow-[0_6px_16px_-4px_rgba(99,102,241,0.6),inset_0_1px_0_0_rgba(255,255,255,0.3)]">
                                    <Sparkles className="size-4 text-white" />
                                </span>
                                <div className="leading-tight">
                                    <div className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-zinc-500">Zai</div>
                                    <div className="mt-0.5 text-[11.5px] font-semibold text-zinc-900">Generating</div>
                                </div>
                                <span className="ml-0.5 flex items-center gap-0.5">
                                    <span className="size-1 rounded-full bg-zukvo-500 animate-pulse" />
                                    <span className="size-1 rounded-full bg-zukvo-500 animate-pulse [animation-delay:150ms]" />
                                    <span className="size-1 rounded-full bg-zukvo-500 animate-pulse [animation-delay:300ms]" />
                                </span>
                            </div>

                            {/* Floating: Zai suggestion — premium glass card (bottom-left, shown only when column is wide enough) */}
                            <div className="hidden lg:block absolute bottom-5 left-4 w-[180px] rounded-2xl bg-white/95 backdrop-blur-xl p-3 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.6)_inset] ring-1 ring-black/[0.04]">
                                <div className="flex items-center gap-1.5">
                                    <span className="inline-flex size-4 items-center justify-center rounded-md bg-gradient-to-br from-zukvo-500 to-violet-600">
                                        <Wand2 className="size-2.5 text-white" />
                                    </span>
                                    <span className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-zukvo-600">
                                        Zai suggests
                                    </span>
                                </div>
                                <div className="mt-1.5 text-[11.5px] font-semibold text-zinc-900 leading-snug">
                                    Add a timeline section
                                </div>
                                <div className="mt-1 flex items-center gap-1.5">
                                    <span className="text-[9.5px] text-zinc-500">Clarity</span>
                                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-1.5 py-0.5 text-[9px] font-bold text-emerald-700 ring-1 ring-emerald-200/60">
                                        +32%
                                    </span>
                                </div>
                            </div>

                            {/* Floating: Drafted pill — gradient (bottom-right) */}
                            <div className="absolute bottom-5 right-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 pl-2 pr-3.5 py-1.5 text-white shadow-[0_18px_40px_-10px_rgba(16,185,129,0.55),inset_0_1px_0_0_rgba(255,255,255,0.25)]">
                                <span className="inline-flex size-5 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30">
                                    <Check className="size-3" />
                                </span>
                                <div className="leading-tight">
                                    <div className="text-[8.5px] font-medium uppercase tracking-[0.18em] text-white/75">
                                        Drafted
                                    </div>
                                    <div className="text-[11px] font-semibold whitespace-nowrap">
                                        in 12 seconds
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BentoCard>

                    {/* One-click convert */}
                    <BentoCard
                        testid="bento-convert"
                        className="md:col-span-12"
                        eyebrow="One-click convert"
                        title="Lead → Client → Project. One click, no copy-paste."
                        body="Once a proposal is accepted, Zukvo spawns the client record, the project workspace, contract slot, and onboarding checklist automatically."
                    >
                        <ConvertVisual />
                    </BentoCard>

                    {/* Sprint */}
                    <BentoCard
                        testid="bento-sprints"
                        className="md:col-span-7"
                        eyebrow="Sprints · Tickets · Buckets · Bugs"
                        title="A workspace that ships, not just plans."
                        body="Sprint cycles, tickets, buckets, bug lists — everything a serious team needs, with optional AI for task breakdown and estimation."
                    >
                        <SprintShowcase />
                    </BentoCard>

                    {/* Pending ticket actions */}
                    <div className="md:col-span-5">
                        <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0E0E10] p-6 md:p-7">
                            {/* Ambient glow */}
                            <div
                                aria-hidden
                                className="pointer-events-none absolute -top-24 -right-16 size-64 rounded-full bg-zukvo-500/10 blur-[80px]"
                            />
                            <div
                                aria-hidden
                                className="pointer-events-none absolute -bottom-20 -left-12 size-52 rounded-full bg-violet-500/8 blur-[70px]"
                            />

                            {/* Header */}
                            <div className="relative">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex size-5 items-center justify-center rounded-md bg-amber-500/15 ring-1 ring-amber-400/30">
                                        <Clock className="size-3 text-amber-400" />
                                    </span>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-400">
                                        End of sprint
                                    </span>
                                    <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-300 ring-1 ring-amber-400/25">
                                        5 pending
                                    </span>
                                </div>
                                <h4 className="mt-3 font-heading font-medium text-xl md:text-[22px] tracking-tight text-white">
                                    Tickets left open? You decide.
                                </h4>
                                <p className="mt-2 text-[13px] leading-relaxed text-zinc-400">
                                    When a sprint closes, nothing falls through the cracks — route every
                                    unfinished ticket exactly where it belongs.
                                </p>
                            </div>

                            {/* Action rows */}
                            <div className="relative mt-5 space-y-2">
                                {SPRINT_ACTIONS.map((a) => (
                                    <SprintAction key={a.title} {...a} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function BentoCard({
    className = "",
    eyebrow,
    title,
    body,
    children,
    highlight = false,
    testid,
}) {
    return (
        <div
            data-testid={testid}
            className={`relative group rounded-2xl border ${highlight ? "border-zukvo-500/30 bg-[#0E0E13]" : "border-white/10 bg-[#0E0E10]"
                } p-7 md:p-8 overflow-hidden transition-colors hover:border-white/20 ${className}`}
        >
            {highlight && (
                <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-px rounded-2xl"
                    style={{
                        background:
                            "radial-gradient(60% 100% at 100% 0%, rgba(99,102,241,0.18), transparent 60%)",
                    }}
                />
            )}
            <div className="relative">
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400/90">
                    {eyebrow}
                </div>
                <h3 className="mt-3 font-heading font-medium text-2xl md:text-[28px] leading-[1.15] tracking-[-0.02em] text-white">
                    {title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-zinc-400 max-w-xl">
                    {body}
                </p>
                {children}
            </div>
        </div>
    );
}

const SPRINT_ACTIONS = [
    {
        icon: Trash2,
        title: "Delete pending Tickets",
        desc: "Clear out what's no longer relevant.",
        grad: "from-rose-500 to-red-600",
        ring: "ring-rose-400/30",
        shadow: "rgba(244,63,94,0.5)",
    },
    {
        icon: Archive,
        title: "Move to Backlog",
        desc: "Park them for re-prioritization later.",
        grad: "from-amber-500 to-orange-600",
        ring: "ring-amber-400/30",
        shadow: "rgba(245,158,11,0.5)",
    },
    {
        icon: Repeat,
        title: "Move to another Sprint",
        desc: "Carry work straight into the next cycle.",
        grad: "from-zukvo-500 to-violet-600",
        ring: "ring-zukvo-400/30",
        shadow: "rgba(99,102,241,0.5)",
    },
    {
        icon: Layers,
        title: "Move to Buckets",
        desc: "Group now, pull into any sprint later.",
        grad: "from-emerald-500 to-teal-600",
        ring: "ring-emerald-400/30",
        shadow: "rgba(16,185,129,0.5)",
    },
];

function SprintAction({ icon: Icon, title, desc, grad, ring, shadow }) {
    return (
        <div className="group relative flex items-center gap-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] hover:-translate-y-0.5">
            <span
                className={`inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${grad} ring-1 ${ring}`}
                style={{
                    boxShadow: `0 8px 18px -6px ${shadow}, inset 0 1px 0 0 rgba(255,255,255,0.25)`,
                }}
            >
                <Icon className="size-4 text-white" />
            </span>
            <div className="min-w-0 flex-1">
                <div className="text-[13.5px] font-semibold leading-tight text-white">
                    {title}
                </div>
                <div className="mt-0.5 text-[11.5px] leading-snug text-zinc-400">{desc}</div>
            </div>
            <ChevronRight className="size-4 shrink-0 text-zinc-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-zinc-300" />
        </div>
    );
}

function ZithportVisual() {
    return (
        <div className="relative mt-7">
            <div className="rounded-xl border border-white/10 bg-[#101014] p-4">
                <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                    <Chrome className="size-3.5" />
                    <span className="font-mono">upwork.com/jobs/full-stack-react-...</span>
                </div>
                <div className="mt-3 rounded-lg border border-white/10 bg-[#16161B] p-4">
                    <div className="text-[13px] text-zinc-300">
                        Senior React + FastAPI engineer · 3 month contract
                    </div>
                    <div className="mt-1 text-[12px] text-zinc-500">$60–90/hr · Posted 2h ago</div>
                    <button className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-zukvo-500/15 border border-zukvo-500/30 text-zukvo-300 px-2.5 py-1.5 text-[11px] font-medium">
                        <Zap className="size-3" />
                        Save to Zukvo
                    </button>
                </div>
            </div>
            <div className="mt-3 flex items-center gap-2 text-[11px] text-zinc-500">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Synced as Lead in 002 · Pipeline / New
            </div>

            {/* Leads Management — premium SaaS showcase */}
            <div className="relative mt-3 h-[270px] sm:h-[300px] md:h-[340px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A12]">
                {/* Multi-layer ambient lighting */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                >
                    <div className="absolute top-0 left-0 w-3/5 h-full bg-gradient-to-br from-zukvo-500/15 via-violet-500/5 to-transparent" />
                    <div className="absolute bottom-0 right-0 w-3/5 h-3/4 bg-gradient-to-tl from-fuchsia-500/10 via-violet-600/5 to-transparent" />
                    <div className="absolute -top-24 left-1/4 size-72 rounded-full bg-zukvo-500/20 blur-[90px]" />
                    <div className="absolute -bottom-16 right-1/3 size-56 rounded-full bg-violet-500/15 blur-[80px]" />
                </div>

                {/* Subtle dot grid texture */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-[0.18]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                        backgroundSize: "22px 22px",
                        maskImage:
                            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
                    }}
                />

                {/* Main screenshot — lifted with 3D-feel multi-shadow */}
                <div
                    className="absolute left-1/2 top-6 w-[86%] -translate-x-1/2 rounded-xl overflow-hidden ring-1 ring-white/[0.12] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.65),0_8px_30px_-10px_rgba(99,102,241,0.35),inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                >
                    <img
                        src={LEADS_IMG}
                        alt="Zukvo leads management pipeline view"
                        className="block w-full h-auto object-cover object-top"
                    />
                    {/* Top edge highlight */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                </div>

                {/* Floating: Source pill — dark glass (top-right) */}
                <div className="absolute top-6 right-4 inline-flex items-center gap-1.5 rounded-full bg-zinc-900/80 backdrop-blur-xl pl-2 pr-3 py-1.5 text-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.08]">
                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
                        <Chrome className="size-3" />
                    </span>
                    <span className="text-[10.5px] font-semibold tracking-tight whitespace-nowrap">
                        Upwork · Auto-tagged
                    </span>
                </div>

                {/* Floating: BidIQ verdict — circular gauge (bottom-left) */}
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2.5 rounded-2xl bg-white/95 backdrop-blur-xl pl-1.5 pr-3.5 py-1.5 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.6)_inset] ring-1 ring-black/[0.04]">
                    <div className="relative shrink-0">
                        <svg viewBox="0 0 40 40" className="size-9 -rotate-90">
                            <defs>
                                <linearGradient id="bidiq-gauge" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#10B981" />
                                    <stop offset="100%" stopColor="#6366F1" />
                                </linearGradient>
                            </defs>
                            <circle
                                cx="20"
                                cy="20"
                                r="15"
                                fill="none"
                                stroke="rgba(99,102,241,0.14)"
                                strokeWidth="3.5"
                            />
                            <circle
                                cx="20"
                                cy="20"
                                r="15"
                                fill="none"
                                stroke="url(#bidiq-gauge)"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                strokeDasharray={`${0.87 * 2 * Math.PI * 15} ${2 * Math.PI * 15}`}
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-heading text-[11.5px] font-bold tracking-tight text-zinc-900 leading-none">
                                87
                            </span>
                        </div>
                    </div>
                    <div className="leading-tight">
                        <div className="flex items-center gap-1">
                            <Sparkles className="size-2.5 text-zukvo-500" />
                            <span className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-zukvo-600">
                                BidIQ AI
                            </span>
                        </div>
                        <div className="mt-0.5 text-[10.5px] font-semibold text-emerald-600 whitespace-nowrap">
                            High fit verdict
                        </div>
                    </div>
                </div>

                {/* Floating: Today stats — gradient pill (bottom-right, hidden on mobile to avoid overlap) */}
                <div className="hidden sm:inline-flex absolute bottom-5 right-4 items-center gap-2 rounded-full bg-gradient-to-r from-zukvo-500 to-violet-600 pl-2 pr-3.5 py-1.5 text-white shadow-[0_18px_40px_-10px_rgba(99,102,241,0.6),inset_0_1px_0_0_rgba(255,255,255,0.25)]">
                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30">
                        <Check className="size-3" />
                    </span>
                    <div className="leading-tight">
                        <div className="text-[8.5px] font-medium uppercase tracking-[0.18em] text-white/70">
                            Today
                        </div>
                        <div className="text-[11px] font-semibold whitespace-nowrap">
                            12 new leads
                        </div>
                    </div>
                </div>
            </div>

            {/* Lead-to-proposal workflow strip */}
            <div className="relative mt-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0B0B14] via-[#0A0A14] to-[#0C0C18] p-4 md:p-5">
                {/* Ambient lighting */}
                <div aria-hidden className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-20 left-1/3 size-72 rounded-full bg-zukvo-500/12 blur-[80px]" />
                    <div className="absolute -bottom-16 right-1/4 size-56 rounded-full bg-violet-500/10 blur-[70px]" />
                </div>

                {/* Header */}
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex size-5 items-center justify-center rounded-md bg-zukvo-500/15 ring-1 ring-zukvo-500/30">
                            <GitBranch className="size-3 text-zukvo-300" />
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-400">
                            Lead-to-Proposal flow
                        </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-emerald-400">
                        <span className="relative flex size-1.5">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                        </span>
                        Live pipeline
                    </span>
                </div>

                {/* Steps row — 2x2 grid on mobile, flow row on sm+ */}
                <div className="relative mt-4 grid grid-cols-2 gap-2 sm:flex sm:items-stretch sm:gap-1.5">
                    {/* Step 1: Saved job post */}
                    <FlowStep
                        n={1}
                        icon={Chrome}
                        title="Saved job post"
                        sub="Zithport extension"
                        state="done"
                    />
                    <FlowArrow state="done" />

                    {/* Step 2: Listed in leads */}
                    <FlowStep
                        n={2}
                        icon={Layers}
                        title="Listed in Leads"
                        sub="Auto-tagged · Synced"
                        state="done"
                    />
                    <FlowArrow state="done" />

                    {/* Step 3: BidIQ check */}
                    <FlowStep
                        n={3}
                        icon={Sparkles}
                        title="BidIQ check"
                        sub="Score · 87 / 100"
                        state="active"
                    />
                    <FlowArrow state="active" />

                    {/* Step 4: Generate proposal */}
                    <FlowStep
                        n={4}
                        icon={Send}
                        title="Generate proposal"
                        sub="Zai drafts in ~12s"
                        state="next"
                    />
                </div>
            </div>
        </div>
    );
}

function FlowStep({ n, icon: Icon, title, sub, state = "next" }) {
    const isDone = state === "done";
    const isActive = state === "active";
    return (
        <div
            className={`group relative flex-1 min-w-0 rounded-xl border p-2.5 transition-colors ${isActive
                    ? "border-zukvo-500/50 bg-zukvo-500/[0.06] shadow-[inset_0_0_40px_-12px_rgba(99,102,241,0.4)]"
                    : isDone
                        ? "border-white/[0.08] bg-white/[0.025]"
                        : "border-white/[0.06] bg-white/[0.015]"
                }`}
        >
            {/* Top row: icon + step number */}
            <div className="flex items-center justify-between">
                <span
                    className={`inline-flex size-7 items-center justify-center rounded-lg ${isActive || isDone
                            ? "bg-gradient-to-br from-zukvo-500 to-violet-600 shadow-[0_6px_16px_-4px_rgba(99,102,241,0.55),inset_0_1px_0_0_rgba(255,255,255,0.25)]"
                            : "bg-white/[0.04] ring-1 ring-white/10"
                        }`}
                >
                    <Icon
                        className={`size-3.5 ${isActive || isDone ? "text-white" : "text-zinc-500"
                            }`}
                    />
                </span>
                {isDone ? (
                    <span className="inline-flex size-4 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/40">
                        <Check className="size-2.5 text-emerald-400" />
                    </span>
                ) : isActive ? (
                    <span className="relative flex size-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-zukvo-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex size-2 rounded-full bg-zukvo-500" />
                    </span>
                ) : (
                    <span className="text-[9px] font-bold text-zinc-600 tracking-[0.2em]">
                        0{n}
                    </span>
                )}
            </div>

            {/* Title + sub */}
            <div className="mt-2">
                <div
                    className={`text-[11.5px] font-semibold leading-tight tracking-tight truncate ${isActive || isDone ? "text-white" : "text-zinc-400"
                        }`}
                >
                    {title}
                </div>
                <div
                    className={`mt-0.5 text-[10px] leading-tight truncate ${isActive
                            ? "text-zukvo-300"
                            : isDone
                                ? "text-zinc-500"
                                : "text-zinc-600"
                        }`}
                >
                    {sub}
                </div>
            </div>

            {/* Bottom accent bar */}
            <div className="mt-2 h-0.5 rounded-full overflow-hidden bg-white/[0.04]">
                <div
                    className={`h-full rounded-full ${isDone
                            ? "w-full bg-gradient-to-r from-emerald-400 to-emerald-500"
                            : isActive
                                ? "w-2/3 bg-gradient-to-r from-zukvo-400 to-violet-500"
                                : "w-0"
                        }`}
                />
            </div>
        </div>
    );
}

function FlowArrow({ state = "next" }) {
    const active = state === "done" || state === "active";
    return (
        <div className="hidden sm:flex items-center self-center px-0.5">
            <ChevronRight
                className={`size-3.5 ${active ? "text-zukvo-400" : "text-zinc-700"}`}
            />
        </div>
    );
}

function BidIQVisual() {
    return (
        <div className="relative mt-6 rounded-xl border border-zukvo-500/30 bg-[#0B0B12] p-5 shadow-[inset_0_0_60px_-20px_rgba(99,102,241,0.35)]">
            <div className="flex items-center justify-between">
                <div className="text-[11px] uppercase tracking-[0.22em] text-zukvo-300">
                    BidIQ verdict
                </div>
                <div className="text-[11px] text-zinc-500 font-mono">L-2391</div>
            </div>
            <div className="mt-3 flex items-end gap-3">
                <div className="text-5xl font-heading font-medium text-white tracking-tighter">
                    87
                </div>
                <div className="pb-2 text-[12px] text-emerald-400">/ 100 · High fit</div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
                <Stat label="Fit" value="92%" />
                <Stat label="Comp." value="Low" />
                <Stat label="Band" value="$70/hr" />
            </div>
            <button className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-zukvo-500 hover:bg-zukvo-600 transition-colors text-white px-3.5 py-1.5 text-[12px] font-medium">
                <Send className="size-3" />
                Generate proposal
            </button>
        </div>
    );
}

function Stat({ label, value }) {
    return (
        <div className="rounded-md border border-white/10 bg-white/5 px-2.5 py-2">
            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{label}</div>
            <div className="text-[13px] text-white font-medium">{value}</div>
        </div>
    );
}

function ConvertVisual() {
    const steps = [
        { icon: <Sparkles className="size-4" />, label: "Lead", sub: "Pipeline" },
        { icon: <Send className="size-4" />, label: "Proposal", sub: "Sent" },
        { icon: <Users className="size-4" />, label: "Client", sub: "Created" },
        { icon: <GitBranch className="size-4" />, label: "Project", sub: "Sprint 1" },
        { icon: <Bug className="size-4" />, label: "Tickets", sub: "Live" },
    ];
    return (
        <div className="mt-7 grid grid-cols-2 md:grid-cols-5 gap-3">
            {steps.map((s, i) => (
                <div
                    key={i}
                    className="relative rounded-xl border border-white/10 bg-[#101014] p-4 hover:border-zukvo-500/40 transition-colors"
                >
                    <span className="inline-flex size-8 items-center justify-center rounded-md bg-zukvo-500/10 text-zukvo-300 border border-zukvo-500/30">
                        {s.icon}
                    </span>
                    <div className="mt-3 text-sm text-white font-medium">{s.label}</div>
                    <div className="text-[11px] text-zinc-500">{s.sub}</div>
                    {i < steps.length - 1 && (
                        <span className="hidden md:block absolute -right-2 top-1/2 size-3 -translate-y-1/2 rotate-45 border-t border-r border-white/10 bg-[#0A0A0A]" />
                    )}
                </div>
            ))}
        </div>
    );
}

const SPRINT_VIEWS = [
    {
        key: "summary",
        src: SPRINT_SUMMARY_IMG,
        eyebrow: "Sprint review",
        title: "Completion summary",
        sub: "Burn-down, velocity, and what shipped this cycle.",
    },
    {
        key: "pending",
        src: SPRINT_PENDING_IMG,
        eyebrow: "Carry-over",
        title: "Pending items",
        sub: "Decide what rolls to the next sprint or back to the backlog.",
    },
];

function SprintShowcase() {
    const [openKey, setOpenKey] = useState(null);
    const open = openKey ? SPRINT_VIEWS.find((v) => v.key === openKey) : null;

    useEffect(() => {
        if (!openKey) return undefined;
        const onKey = (e) => {
            if (e.key === "Escape") setOpenKey(null);
        };
        window.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [openKey]);

    return (
        <>
            <div className="mt-5 -mx-6 -mb-7 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-white/10 bg-[#0A0A12] p-4 rounded-b-2xl">
                {SPRINT_VIEWS.map((v) => (
                    <button
                        key={v.key}
                        type="button"
                        onClick={() => setOpenKey(v.key)}
                        aria-label={`Expand ${v.title}`}
                        className="group relative overflow-hidden rounded-xl ring-1 ring-white/[0.08] bg-[#0E0E13] cursor-zoom-in transition-all duration-300 hover:-translate-y-1 hover:ring-zukvo-500/40 hover:shadow-[0_24px_50px_-12px_rgba(99,102,241,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-zukvo-500/70 text-left"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={v.src}
                                alt={v.title}
                                className="block w-full h-auto transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                            />
                            {/* Hover gradient veil */}
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            {/* Maximize icon (top-right) */}
                            <span
                                aria-hidden
                                className="absolute top-2.5 right-2.5 inline-flex size-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-md text-white ring-1 ring-white/20 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.5)]"
                            >
                                <Maximize2 className="size-3.5" />
                            </span>
                            {/* Caption on hover */}
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-x-0 bottom-0 p-3.5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                            >
                                <div className="text-[9.5px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                                    {v.eyebrow}
                                </div>
                                <div className="mt-0.5 text-[13px] font-semibold text-white leading-tight">
                                    {v.title}
                                </div>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {open &&
                createPortal(
                    <div
                        className="zk-lightbox-backdrop fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-xl"
                        onClick={() => setOpenKey(null)}
                        role="dialog"
                        aria-modal="true"
                        aria-label={open.title}
                    >
                        <div
                            className="zk-lightbox-content relative w-full max-w-6xl"
                            onClick={(e) => e.stopPropagation()}
                            onMouseDown={(e) => e.stopPropagation()}
                        >
                            {/* Image card with built-in close button */}
                            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15 bg-[#0A0A12] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.8),0_8px_30px_-10px_rgba(99,102,241,0.35)]">
                                {/* Close button — top-right of image, always reachable */}
                                <button
                                    type="button"
                                    onClick={() => setOpenKey(null)}
                                    aria-label="Close preview"
                                    className="absolute top-3 right-3 z-10 inline-flex items-center gap-2 rounded-full bg-black/70 backdrop-blur-md ring-1 ring-white/15 text-white pl-3 pr-2 py-1.5 hover:bg-black/85 transition-colors shadow-[0_8px_24px_-8px_rgba(0,0,0,0.7)]"
                                >
                                    <span className="hidden sm:inline text-[10.5px] font-medium tracking-wide">
                                        Close
                                    </span>
                                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-white/10">
                                        <X className="size-3" />
                                    </span>
                                </button>

                                <img
                                    src={open.src}
                                    alt={open.title}
                                    className="block w-full h-auto max-h-[78vh] object-contain bg-[#0A0A12]"
                                />
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
                                />
                            </div>

                            {/* Caption + tab switcher */}
                            <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
                                <div>
                                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                                        {open.eyebrow}
                                    </div>
                                    <div className="mt-1 font-heading text-lg md:text-xl font-medium tracking-tight">
                                        {open.title}
                                    </div>
                                    <div className="mt-1 text-[12.5px] text-zinc-400 max-w-md leading-relaxed">
                                        {open.sub}
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-1 self-start sm:self-auto rounded-full bg-white/[0.06] backdrop-blur p-1 ring-1 ring-white/10">
                                    {SPRINT_VIEWS.map((v) => (
                                        <button
                                            key={v.key}
                                            type="button"
                                            onClick={() => setOpenKey(v.key)}
                                            className={`px-3 py-1.5 text-[11.5px] font-medium rounded-full transition-all ${openKey === v.key
                                                    ? "bg-white text-zinc-900 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.4)]"
                                                    : "text-white/70 hover:text-white"
                                                }`}
                                        >
                                            {v.title}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    );
}

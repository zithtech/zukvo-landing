import React from "react";
import {
    Chrome,
    Zap,
    Sparkles,
    GitBranch,
    FileText,
    Clock,
    Receipt,
    Users,
    ShieldCheck,
    Send,
    Bug,
} from "lucide-react";

const ZAI_IMG =
    "https://customer-assets.emergentagent.com/job_39f817a0-5131-43e1-a744-33b263e6d84a/artifacts/rap6qk77_image.png";
const SPRINT_IMG =
    "https://customer-assets.emergentagent.com/job_39f817a0-5131-43e1-a744-33b263e6d84a/artifacts/meqjpr4p_image.png";

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
                        From job board to invoice — <br />
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
                        body="Upwork, Contra, LinkedIn, niche boards — one click and the post becomes a structured Lead with budget, scope, deadline, and source attached."
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
                        <div className="mt-5 -mx-6 -mb-7 overflow-hidden rounded-b-2xl border-t border-white/10">
                            <img
                                src={ZAI_IMG}
                                alt="Zai AI ticket creation modal"
                                className="block w-full h-[230px] object-cover object-top"
                            />
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
                        body="Sprint cycles, tickets, buckets, bug lists — everything a serious team needs, with optional AI for breakdown and estimation."
                    >
                        <div className="mt-5 -mx-6 -mb-7 overflow-hidden rounded-b-2xl border-t border-white/10">
                            <img
                                src={SPRINT_IMG}
                                alt="Sprint completion modal in Zukvo"
                                className="block w-full h-[260px] object-cover object-top"
                            />
                        </div>
                    </BentoCard>

                    {/* Quick tools */}
                    <div className="md:col-span-5 grid grid-cols-2 gap-5">
                        <MiniCard testid="mini-docs" icon={<FileText className="size-5" />} title="Document Hub" body="Public/private share, ticket linking, AI drafts." />
                        <MiniCard testid="mini-time" icon={<Clock className="size-5" />} title="Time Tracking" body="Per-ticket timers + daily updates." />
                        <MiniCard testid="mini-invoice" icon={<Receipt className="size-5" />} title="Invoices" body="Generate, send, reconcile. Built-in." />
                        <MiniCard testid="mini-rbac" icon={<ShieldCheck className="size-5" />} title="RBAC" body="Role-based access for the whole team." />
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
            className={`relative group rounded-2xl border ${
                highlight ? "border-zukvo-500/30 bg-[#0E0E13]" : "border-white/10 bg-[#0E0E10]"
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

function MiniCard({ icon, title, body, testid }) {
    return (
        <div
            data-testid={testid}
            className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5 hover:border-zukvo-500/40 transition-colors"
        >
            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-zukvo-500/10 text-zukvo-400 border border-zukvo-500/20">
                {icon}
            </span>
            <div className="mt-4 font-heading font-medium text-base text-white">{title}</div>
            <div className="mt-1 text-[13px] text-zinc-400 leading-relaxed">{body}</div>
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

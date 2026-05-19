import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    Chrome,
    Search,
    Save,
    ExternalLink,
    LogOut,
    Target,
    Sparkles,
    CheckCircle2,
    AlertTriangle,
    Cloud,
    RefreshCw,
    Zap,
    DollarSign,
    Star,
    FileText,
    Briefcase,
    TrendingUp,
    Wand2,
    Globe2,
    Plus,
    ChevronRight,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import ImageSlot from "@/components/ImageSlot";

const ZP_EMPTY_IMG =
    "https://customer-assets.emergentagent.com/job_work-nexus-20/artifacts/3szv1iq5_image.png";
const ZP_EXTRACTED_IMG =
    "https://customer-assets.emergentagent.com/job_work-nexus-20/artifacts/0k3jn96u_image%20%284%29.png";
const ZP_SKILL_IMG =
    "https://customer-assets.emergentagent.com/job_work-nexus-20/artifacts/dg375boj_image%20%283%29.png";
const ZP_SAVED_IMG =
    "https://customer-assets.emergentagent.com/job_work-nexus-20/artifacts/0s0gwi2b_image%20%282%29.png";
const ZP_LIST_IMG =
    "https://customer-assets.emergentagent.com/job_work-nexus-20/artifacts/jtx75szs_image%20%281%29.png";

const SUBMODULES = [
    { id: "extract", label: "Extract", icon: Search },
    { id: "score", label: "Lead score", icon: Target },
    { id: "skill", label: "Skill alignment", icon: Sparkles },
    { id: "sync", label: "Sync to Leads", icon: Cloud },
    { id: "saved", label: "Saved jobs", icon: Save },
];

export default function ZithPort() {
    useEffect(() => {
        const targets = document.querySelectorAll(".zk-reveal");
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("is-visible");
                        obs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
        );
        targets.forEach((t) => obs.observe(t));
        return () => obs.disconnect();
    }, []);

    return (
        <main
            data-testid="zithport-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink overflow-x-hidden"
        >
            <Nav />
            <Hero />
            <SubmoduleNav />
            <ExtractSection />
            <LeadScoreSection />
            <SkillSection />
            <SyncSection />
            <SavedSection />
            <FlowSection />
            <FinalCTA />
            <Footer />
        </main>
    );
}

/* ---------------- HERO ---------------- */

function Hero() {
    return (
        <section
            data-testid="zp-hero"
            className="relative pt-32 md:pt-40 pb-16 md:pb-24 zk-mesh"
        >
            <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_75%)] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                <div className="zk-reveal">
                    <Link
                        to="/products"
                        data-testid="zp-breadcrumb"
                        className="inline-flex items-center gap-1.5 text-[12px] text-zinc-500 hover:text-zukvo-600"
                    >
                        <ArrowLeft className="size-3.5" />
                        All products
                    </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-7">
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-violet-600">
                            <Chrome className="size-3.5" />
                            ZithPort · Chrome extension
                        </div>
                        <h1
                            data-testid="zp-headline"
                            className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink"
                        >
                            Browse Upwork. <br />
                            <span className="text-zinc-500">Capture leads on autopilot.</span>
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            ZithPort lives in your browser. Open any Upwork job, hit{" "}
                            <span className="font-medium text-zukvo-ink">Extract Job</span>, and
                            Zukvo parses the post, scores it on a 100-point lead rubric, checks
                            it against your skills, and syncs the qualified ones straight into
                            your Leads pipeline.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/#start"
                                data-testid="zp-cta-primary"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Install ZithPort
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            <a
                                href="#extract"
                                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-medium text-zinc-800 hover:border-zinc-400 transition-colors"
                            >
                                See it in action
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        {/* Faux browser + extension popover */}
                        <div className="zk-reveal relative">
                            <div className="rounded-3xl border border-zinc-200 bg-white shadow-[0_30px_80px_-30px_rgba(15,15,15,0.18)] overflow-hidden">
                                <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-50 border-b border-zinc-100">
                                    <span className="size-2.5 rounded-full bg-[#FF5F57]" />
                                    <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
                                    <span className="size-2.5 rounded-full bg-[#28C840]" />
                                    <span className="ml-2 text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                                        upwork.com/jobs/Full-Stack-Developer
                                    </span>
                                </div>
                                <div className="p-5 relative">
                                    <div className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-400">
                                        Job listing
                                    </div>
                                    <div className="mt-1.5 font-heading text-lg text-zukvo-ink leading-tight tracking-tight">
                                        Full-Stack Developer for IT Outsourcing Agency
                                    </div>
                                    <div className="mt-3 flex items-center gap-3 flex-wrap">
                                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 text-[11px] font-medium">
                                            <DollarSign className="size-3" /> $3–4 / hr
                                        </span>
                                        <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200 px-2 py-0.5 text-[11px]">
                                            <Star className="size-3 text-amber-500" /> 4.9 client
                                        </span>
                                        <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 text-violet-700 border border-violet-200 px-2 py-0.5 text-[11px]">
                                            <Briefcase className="size-3" /> Complex
                                        </span>
                                    </div>

                                    {/* Floating extension popover */}
                                    <div className="absolute -right-4 md:right-4 -bottom-10 w-[260px] rounded-2xl border border-zinc-200 bg-white shadow-[0_30px_60px_-15px_rgba(99,102,241,0.35)] p-3.5">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1.5">
                                                <span className="inline-flex size-6 items-center justify-center rounded-md bg-gradient-to-br from-violet-600 to-zukvo-500 text-white text-[10px] font-bold">
                                                    Z!
                                                </span>
                                                <span className="font-heading text-violet-600 tracking-tight">
                                                    ZithPort
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <span className="size-6 rounded-md border border-zinc-200 inline-flex items-center justify-center bg-zukvo-500/10">
                                                    <Search className="size-3 text-zukvo-600" />
                                                </span>
                                                <span className="size-6 rounded-md border border-zinc-200 inline-flex items-center justify-center">
                                                    <Save className="size-3 text-zinc-600" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-3 rounded-xl border border-violet-200 bg-violet-50/60 px-3 py-3 text-center">
                                            <div className="text-[11px] text-zinc-600">
                                                Ready when you are.
                                            </div>
                                            <button className="mt-2 w-full rounded-lg bg-gradient-to-r from-zukvo-500 to-violet-500 text-white text-[12px] font-semibold py-2 shadow-[0_8px_24px_-8px_rgba(99,102,241,0.6)]">
                                                Extract Job
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mini stats */}
                <div className="zk-reveal mt-24 grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                        { k: "1 click", v: "Capture & parse" },
                        { k: "0–100", v: "Lead value score" },
                        { k: "Skill match %", v: "vs. your profile" },
                        { k: "Auto-sync", v: "Straight to Leads" },
                    ].map((s, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-zinc-200 bg-white px-5 py-4"
                        >
                            <div className="font-heading text-[18px] text-zukvo-ink tracking-tight">
                                {s.k}
                            </div>
                            <div className="text-[12px] text-zinc-500 mt-0.5">{s.v}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------- SUBMODULE NAV ---------------- */

function SubmoduleNav() {
    return (
        <section
            data-testid="zp-submodule-nav"
            className="relative bg-[#FAFAFA] border-y border-zinc-200/70"
        >
            <div className="mx-auto max-w-7xl px-6 md:px-10 py-5">
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 mr-2 shrink-0">
                        In this module
                    </span>
                    {SUBMODULES.map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            data-testid={`zp-pill-${s.id}`}
                            className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-[12.5px] text-zinc-700 hover:border-violet-500/40 hover:text-violet-600 transition-colors"
                        >
                            <s.icon className="size-3.5" />
                            {s.label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------- EXTRACT ---------------- */

function ExtractSection() {
    return (
        <section
            id="extract"
            data-testid="zp-extract"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                            Step 01 · Extract
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Open any Upwork job. <br /> Hit one button.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            ZithPort sits pinned to your browser toolbar. The moment you land on
                            an Upwork job page, the extract button activates. One tap pulls the
                            title, budget, client rating, description, skills and screening
                            questions into a structured Zukvo lead.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Globe2, t: "Works on every Upwork job URL" },
                                { i: Zap, t: "Sub-second extraction" },
                                { i: FileText, t: "Full description + screening questions" },
                                { i: RefreshCw, t: "Skills sync to your profile" },
                            ].map((b, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2.5 text-[14px] text-zinc-300"
                                >
                                    <b.i className="size-4 text-violet-300" /> {b.t}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-7">
                        <ImageSlot
                            testid="zp-image-empty"
                            src={ZP_EMPTY_IMG}
                            alt="ZithPort empty / extract state"
                            label="ZithPort · ready to extract"
                            chromeUrl="chrome-extension://zithport"
                            caption="Live screenshot — extension idle state with Extract Job CTA."
                            aspect="1/1"
                            className="max-w-[440px] mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- LEAD SCORE ---------------- */

function LeadScoreSection() {
    return (
        <section
            id="score"
            data-testid="zp-score"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-300">
                        <Target className="size-3" /> Step 02 · Lead value
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Every job is scored 0–100.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        ZithPort runs the post through a transparent rubric — budget clarity,
                        client spend history, client rating, description quality and more. You
                        see exactly how the score was built, so you only spend energy on jobs
                        worth bidding on.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7">
                        <ImageSlot
                            testid="zp-image-extracted"
                            src={ZP_EXTRACTED_IMG}
                            alt="Extracted lead with score breakdown"
                            label="Lead value · 70/100 Medium"
                            chromeUrl="chrome-extension://zithport"
                            caption="Live screenshot — extraction success with itemized lead value rubric."
                            aspect="1/1"
                        />
                    </div>
                    <div className="lg:col-span-5 space-y-3">
                        <RubricRow tier="High" range="80–100" color="emerald" desc="Strong budget, established client, detailed brief." />
                        <RubricRow tier="Medium" range="50–79" color="amber" desc="Worth a custom proposal — some gaps to clarify." active />
                        <RubricRow tier="Low" range="0–49" color="rose" desc="Vague brief or thin client history — skip or template." />
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                            <div className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-500">
                                What we score
                            </div>
                            <div className="mt-3 grid grid-cols-2 gap-2.5">
                                {[
                                    ["Budget specified", "+20%"],
                                    ["Spend > $100", "+10%"],
                                    ["Client rating ≥ 4.0", "+20%"],
                                    ["Detailed brief", "+20%"],
                                    ["Hire rate", "+15%"],
                                    ["Country / payment verified", "+15%"],
                                ].map((r, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
                                    >
                                        <span className="text-[12px] text-zinc-300">{r[0]}</span>
                                        <span className="text-[11px] font-mono text-emerald-300">
                                            {r[1]}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function RubricRow({ tier, range, color, desc, active = false }) {
    const colorMap = {
        emerald: {
            border: active ? "border-emerald-400/60" : "border-white/10",
            bg: active ? "bg-emerald-500/[0.06]" : "bg-[#0E0E10]",
            text: "text-emerald-300",
            dot: "bg-emerald-400",
        },
        amber: {
            border: active ? "border-amber-400/60" : "border-white/10",
            bg: active ? "bg-amber-500/[0.06]" : "bg-[#0E0E10]",
            text: "text-amber-300",
            dot: "bg-amber-400",
        },
        rose: {
            border: active ? "border-rose-400/60" : "border-white/10",
            bg: active ? "bg-rose-500/[0.06]" : "bg-[#0E0E10]",
            text: "text-rose-300",
            dot: "bg-rose-400",
        },
    }[color];
    return (
        <div
            className={`rounded-xl border ${colorMap.border} ${colorMap.bg} px-4 py-3 flex items-center gap-4`}
        >
            <span className={`size-2 rounded-full ${colorMap.dot} shrink-0`} />
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <span className={`font-heading text-base text-white tracking-tight`}>
                        {tier}
                    </span>
                    <span className={`text-[11px] font-mono ${colorMap.text}`}>{range}</span>
                </div>
                <div className="text-[12px] text-zinc-400 mt-0.5">{desc}</div>
            </div>
        </div>
    );
}

/* ---------------- SKILL ALIGNMENT ---------------- */

function SkillSection() {
    return (
        <section
            id="skill"
            data-testid="zp-skill"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5 lg:order-2">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-rose-300">
                            Step 03 · Skill alignment
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Know the gap before you write the proposal.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            ZithPort cross-references your synced skills against the job's stack.
                            It surfaces your true expertise matches and the growth opportunities
                            — so you can pitch with confidence or skip jobs that aren't yours.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: CheckCircle2, t: "Expertise matches — pitch your wins", c: "emerald" },
                                { i: AlertTriangle, t: "Growth gaps — know what to study", c: "rose" },
                                { i: Wand2, t: "Match Skills — auto-update your profile", c: "violet" },
                            ].map((b, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2.5 text-[14px] text-zinc-300"
                                >
                                    <b.i
                                        className={`size-4 ${
                                            b.c === "emerald"
                                                ? "text-emerald-300"
                                                : b.c === "rose"
                                                  ? "text-rose-300"
                                                  : "text-violet-300"
                                        }`}
                                    />{" "}
                                    {b.t}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-7 lg:order-1">
                        <ImageSlot
                            testid="zp-image-skill"
                            src={ZP_SKILL_IMG}
                            alt="Skill alignment analysis"
                            label="Skill alignment · gap detected"
                            chromeUrl="chrome-extension://zithport"
                            caption="Live screenshot — expertise match vs. growth opportunities."
                            aspect="1/1"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- SYNC TO LEADS ---------------- */

function SyncSection() {
    return (
        <section
            id="sync"
            data-testid="zp-sync"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                        <Cloud className="size-3" /> Step 04 · Sync
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Save once. Land in your Leads pipeline.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Tap{" "}
                        <span className="text-white font-medium">Save Job &amp; Proposal</span>{" "}
                        and ZithPort syncs the full lead — score, skill report, budget, client
                        rating, description — to your Zukvo Leads module. From there it's a
                        click to a proposal, then a project.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-6">
                        <ImageSlot
                            testid="zp-image-saved"
                            src={ZP_SAVED_IMG}
                            alt="Lead saved successfully"
                            label="Lead saved · synced to Zithspace"
                            chromeUrl="chrome-extension://zithport"
                            caption="Live screenshot — confirmation with Open Dashboard CTA."
                            aspect="1/1"
                        />
                    </div>
                    <div className="lg:col-span-6">
                        {/* Pipeline flow */}
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-6">
                            <div className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-500">
                                The capture pipeline
                            </div>
                            <div className="mt-5 space-y-4">
                                {[
                                    { i: Chrome, t: "Upwork job page", s: "ZithPort detects URL", c: "zinc" },
                                    { i: Search, t: "Extract", s: "Parse all fields in one click", c: "violet" },
                                    { i: Target, t: "Score", s: "Lead value 0–100", c: "amber" },
                                    { i: Sparkles, t: "Skill check", s: "Match vs. profile", c: "rose" },
                                    { i: Cloud, t: "Sync", s: "Zukvo Leads module", c: "emerald" },
                                ].map((s, i, arr) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="flex flex-col items-center">
                                            <span
                                                className={`inline-flex size-9 items-center justify-center rounded-lg border ${
                                                    s.c === "violet"
                                                        ? "bg-violet-500/10 text-violet-300 border-violet-400/30"
                                                        : s.c === "amber"
                                                          ? "bg-amber-500/10 text-amber-300 border-amber-400/30"
                                                          : s.c === "rose"
                                                            ? "bg-rose-500/10 text-rose-300 border-rose-400/30"
                                                            : s.c === "emerald"
                                                              ? "bg-emerald-500/10 text-emerald-300 border-emerald-400/30"
                                                              : "bg-white/5 text-zinc-300 border-white/10"
                                                }`}
                                            >
                                                <s.i className="size-4" />
                                            </span>
                                            {i < arr.length - 1 && (
                                                <span className="w-px flex-1 mt-1 bg-gradient-to-b from-white/15 to-transparent min-h-[18px]" />
                                            )}
                                        </div>
                                        <div className="pt-1 pb-2">
                                            <div className="text-[13.5px] text-white font-medium">
                                                {s.t}
                                            </div>
                                            <div className="text-[12px] text-zinc-500">{s.s}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link
                                to="/products#leads-management"
                                className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] text-emerald-300 hover:text-emerald-200"
                            >
                                See Leads Management <ChevronRight className="size-3.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- SAVED JOBS LIST ---------------- */

function SavedSection() {
    return (
        <section
            id="saved"
            data-testid="zp-saved"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                            Step 05 · Saved jobs
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Your private bid queue, <br /> right in the toolbar.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-xl">
                            Every saved job lives in ZithPort's Saved tab — sortable by score,
                            filtered by sync state, with the original Upwork link one click away.
                            Apply, mark as applied, or delete — and Zukvo updates the lead in
                            place.
                        </p>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                ["Jobs", "2", "indigo"],
                                ["Applied", "0", "emerald"],
                                ["Avg score", "68", "amber"],
                            ].map((s, i) => (
                                <div
                                    key={i}
                                    className="rounded-xl border border-white/10 bg-[#0E0E10] p-4"
                                >
                                    <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                        {s[0]}
                                    </div>
                                    <div
                                        className={`mt-1 font-heading text-2xl tracking-tight ${
                                            s[2] === "indigo"
                                                ? "text-zukvo-300"
                                                : s[2] === "emerald"
                                                  ? "text-emerald-300"
                                                  : "text-amber-300"
                                        }`}
                                    >
                                        {s[1]}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="zk-reveal mt-12">
                    <ImageSlot
                        testid="zp-image-list"
                        src={ZP_LIST_IMG}
                        alt="Saved jobs list"
                        label="Your Saved Jobs — Synced to Zukvo"
                        chromeUrl="chrome-extension://zithport/saved"
                        caption="Live screenshot — saved queue with sync status, score & skill match."
                        aspect="1/1"
                    />
                </div>

                <div className="zk-reveal mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                        { i: Cloud, t: "Synced badge — already in Leads" },
                        { i: Target, t: "Score chip — instant prioritization" },
                        { i: ExternalLink, t: "Open on Upwork — original post" },
                        { i: Save, t: "Mark applied — keeps your queue clean" },
                    ].map((b, i) => (
                        <div
                            key={i}
                            className="rounded-xl border border-white/10 bg-[#0E0E10] p-4 flex items-center gap-3"
                        >
                            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-zukvo-500/10 text-zukvo-300 border border-zukvo-500/20">
                                <b.i className="size-4" />
                            </span>
                            <div className="text-[12.5px] text-zinc-300 leading-snug">{b.t}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------- FLOW / END-TO-END ---------------- */

function FlowSection() {
    return (
        <section
            data-testid="zp-flow"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal text-center max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        End-to-end
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Browser to billable, <br />
                        <span className="text-zinc-500">in under a minute.</span>
                    </h2>
                </div>

                <div className="zk-reveal mt-14 grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                    {[
                        { n: "01", t: "Spot a job", d: "Browsing Upwork like usual", i: Globe2 },
                        { n: "02", t: "Extract", d: "ZithPort parses the post", i: Search },
                        { n: "03", t: "Review score", d: "100-point lead value", i: Target },
                        { n: "04", t: "Sync", d: "Lands in Zukvo Leads", i: Cloud },
                        { n: "05", t: "Convert", d: "Proposal → Project", i: TrendingUp },
                    ].map((s, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5 relative"
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-heading text-3xl text-zinc-700 tracking-tight">
                                    {s.n}
                                </span>
                                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300 border border-violet-400/20">
                                    <s.i className="size-4" />
                                </span>
                            </div>
                            <div className="mt-4 font-heading text-lg text-white tracking-tight">
                                {s.t}
                            </div>
                            <div className="mt-1 text-[12.5px] text-zinc-500 leading-relaxed">
                                {s.d}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
    return (
        <section data-testid="zp-final-cta" className="relative bg-[#0A0A0A] text-white">
            <div className="mx-auto max-w-7xl px-6 md:px-10 pb-20">
                <div
                    className="zk-reveal relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0E0E10] p-10 md:p-16 text-center"
                    style={{
                        backgroundImage:
                            "radial-gradient(60% 80% at 50% 0%, rgba(124,58,237,0.22), transparent 60%)",
                    }}
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                        <Plus className="size-3" /> Add to Chrome
                    </span>
                    <h2 className="mt-6 font-heading font-medium text-3xl md:text-5xl tracking-[-0.03em]">
                        Capture leads while you browse. <br /> Bid only on the ones that pay.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/#start"
                            data-testid="zp-final-cta-primary"
                            className="inline-flex items-center gap-2 rounded-full bg-violet-500 hover:bg-violet-600 transition-colors text-white px-6 py-3.5 text-sm font-medium"
                        >
                            Install ZithPort
                            <ArrowRight className="size-4" />
                        </a>
                        <Link
                            to="/products"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors text-white px-6 py-3.5 text-sm font-medium"
                        >
                            Explore other modules
                            <ChevronRight className="size-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

// eslint-disable-next-line no-unused-vars
const _unused = [LogOut];

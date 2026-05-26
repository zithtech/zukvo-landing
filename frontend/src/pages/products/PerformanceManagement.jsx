import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    LayoutDashboard,
    TrendingUp,
    Ticket,
    Activity,
    AlertTriangle,
    FileText,
    Calendar,
    CheckCircle2,
    Clock3,
    AlertCircle,
    XCircle,
    Pause,
    Play,
    Filter,
    Search,
    ChevronRight,
    Star,
    Briefcase,
    Hash,
    Users,
    Sparkles,
    Award,
    Layers,
    Timer,
    Calculator,
    Percent,
    Eye,
    Target,
    BadgeCheck,
    History,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import ImageSlot from "@/components/ImageSlot";

const SUBMODULES = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "tickets", label: "Ticket Performance", icon: Ticket },
    { id: "score", label: "Score Formula", icon: Calculator },
    { id: "daily", label: "Daily Updates", icon: FileText },
    { id: "escalations", label: "Escalations", icon: AlertTriangle },
    { id: "reports", label: "Reports", icon: TrendingUp },
];

export default function PerformanceManagement() {
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
            data-testid="perf-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink overflow-x-clip"
        >
            <Nav />
            <Hero />
            <SubmoduleNav />
            <Overview />
            <TicketPerformance />
            <ScoreFormula />
            <DailyUpdates />
            <Escalations />
            <Reports />
            <FinalCTA />
            <Footer />
        </main>
    );
}

/* ---------------- HERO ---------------- */

function Hero() {
    return (
        <section
            data-testid="perf-hero"
            className="relative pt-32 md:pt-40 pb-16 md:pb-24 zk-mesh"
        >
            <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_75%)] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                <div className="zk-reveal">
                    <Link
                        to="/products"
                        data-testid="perf-breadcrumb"
                        className="inline-flex items-center gap-1.5 text-[12px] text-zinc-500 hover:text-zukvo-600"
                    >
                        <ArrowLeft className="size-3.5" />
                        All products
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-600">
                            <TrendingUp className="size-3.5" />
                            Performance Management
                        </div>
                        <h1
                            data-testid="perf-headline"
                            className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink"
                        >
                            Transparent growth <br />
                            <span className="text-zinc-500">for every teammate.</span>
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            Tickets, time, daily updates and escalations — auto-pulled and weighted
                            into one transparent score. No spreadsheets. No surprises at review
                            time.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/signup"
                                data-testid="perf-cta-primary"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Performance
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            <a
                                href="#overview"
                                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-medium text-zinc-800 hover:border-zinc-400 transition-colors"
                            >
                                See every feature
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="zk-reveal grid grid-cols-2 gap-3">
                            {[
                                { k: "Score", v: "Weighted, transparent" },
                                { k: "Tickets", v: "Completion · time · quality" },
                                { k: "Updates", v: "BOD + EOD compliance" },
                                { k: "Escalations", v: "Auto-tracked penalties" },
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
                </div>
            </div>
        </section>
    );
}

/* ---------------- SUBMODULE NAV ---------------- */

function SubmoduleNav() {
    return (
        <section
            data-testid="perf-submodule-nav"
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
                            data-testid={`perf-pill-${s.id}`}
                            className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-[12.5px] text-zinc-700 hover:border-emerald-500/40 hover:text-emerald-600 transition-colors"
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

/* ---------------- OVERVIEW ---------------- */

function Overview() {
    return (
        <section
            id="overview"
            data-testid="perf-overview"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                            Overview
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            One screen. The whole teammate.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Pick a member, pick a month — and see attendance, tickets, daily
                            updates and the weighted performance gauge. Generate a clean report in
                            one click.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Award, t: "Performance gauge · weighted total" },
                                { i: Ticket, t: "Ticket completion + timeliness + tracking" },
                                { i: FileText, t: "BOD + EOD daily-update compliance" },
                                { i: AlertTriangle, t: "Escalation penalties · capped" },
                            ].map((b, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2.5 text-[14px] text-zinc-300"
                                >
                                    <b.i className="size-4 text-emerald-300" /> {b.t}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-7">
                        <ImageSlot
                            testid="perf-image-overview"
                            label="Performance Management · Overview"
                            chromeUrl="zukvo.app/hrms/performance"
                            aspect="16/10"
                            caption="Replace with your Performance overview screenshot."
                        />
                    </div>
                </div>

                {/* Top filter row mock */}
                <div className="zk-reveal mt-10 rounded-2xl border border-white/10 bg-[#0E0E10] p-4 flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300 border border-emerald-400/30">
                            <TrendingUp className="size-5" />
                        </span>
                        <div>
                            <div className="text-[13px] text-white font-medium">
                                Performance Management
                            </div>
                            <div className="text-[11px] text-zinc-500">
                                Comprehensive tracking of employee efficiency and engagement
                                metrics.
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap text-[11.5px]">
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-3 py-1.5 text-zinc-200">
                            <span className="inline-flex size-5 items-center justify-center rounded-full bg-amber-500/30 text-amber-200 text-[9px] font-bold">
                                B
                            </span>
                            Bharathi
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-3 py-1.5 text-zinc-200">
                            April
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-3 py-1.5 text-zinc-200">
                            2026
                        </span>
                        <button className="inline-flex items-center gap-1.5 rounded-md bg-zukvo-500 hover:bg-zukvo-600 text-white text-[11.5px] px-3 py-1.5 font-medium">
                            <Filter className="size-3.5" /> Generate Report
                        </button>
                    </div>
                </div>

                <div className="zk-reveal mt-5 grid lg:grid-cols-12 gap-5 items-start">
                    {/* Profile card */}
                    <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                        <div className="flex flex-col items-center text-center">
                            <span className="relative inline-flex size-20 items-center justify-center rounded-full bg-amber-500/30 text-amber-200 border border-amber-400/30 font-heading text-2xl">
                                B
                                <span className="absolute bottom-1 right-1 size-3 rounded-full bg-emerald-400 border-2 border-[#0E0E10]" />
                            </span>
                            <div className="mt-3 font-heading text-xl text-white">Bharathi</div>
                        </div>
                        <div className="mt-5 grid grid-cols-2 gap-2.5 text-[11.5px]">
                            <ProfileMeta icon={Star} k="Grade" v="CTO" tone="indigo" />
                            <ProfileMeta icon={Briefcase} k="Dept" v="Engineering" tone="violet" />
                            <ProfileMeta icon={Users} k="Sub-dept" v="Software Engineer" tone="amber" />
                            <ProfileMeta icon={Hash} k="Position" v="CTO" tone="emerald" />
                        </div>

                        {/* Performance Gauge */}
                        <div className="mt-6 pt-6 border-t border-white/5">
                            <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 text-center font-bold">
                                Performance Gauge
                            </div>
                            <div className="mt-4 flex items-center justify-center">
                                <Gauge value={39} />
                            </div>

                            {/* 3 score row */}
                            <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px]">
                                <ScoreChip k="Ticket Score" v="41.25" tone="emerald" />
                                <ScoreChip k="EOD Penalty" v="-2.25" tone="amber" />
                                <ScoreChip k="Escalation Penalty" v="-0" tone="rose" />
                            </div>
                        </div>

                        {/* Active projects */}
                        <div className="mt-6 pt-6 border-t border-white/5">
                            <div className="flex items-center justify-between">
                                <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                                    Active Projects
                                </div>
                                <span className="text-[11px] text-zukvo-300 hover:text-zukvo-200">
                                    Show More
                                </span>
                            </div>
                            <div className="mt-3 space-y-2">
                                {[
                                    ["Z", "Zukvo", "Member", "8", "indigo"],
                                    ["R", "React Project", "Member", "0", "emerald"],
                                ].map((r, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2"
                                    >
                                        <span
                                            className={`inline-flex size-7 items-center justify-center rounded bg-${r[4] === "indigo" ? "zukvo" : "emerald"}-500/20 text-${r[4] === "indigo" ? "zukvo" : "emerald"}-200 border border-${r[4] === "indigo" ? "zukvo" : "emerald"}-500/30 text-[10px] font-bold`}
                                        >
                                            {r[0]}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-[12.5px] text-zinc-100 truncate">
                                                {r[1]}
                                            </div>
                                            <div className="text-[10.5px] text-zinc-500">
                                                {r[2]}
                                            </div>
                                        </div>
                                        <span className="font-heading text-base text-white">
                                            {r[3]}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right side stats */}
                    <div className="lg:col-span-8 space-y-5">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <TopKpi icon={Layers} k="Total Tickets" v="8" tone="emerald" />
                            <TopKpi icon={Calendar} k="Attendance" v="19" sub="/ 22" tone="indigo" />
                            <TopKpi icon={Activity} k="Daily Updates" v="22" sub="/ 22" tone="amber" />
                            <TopKpi icon={TrendingUp} k="Completion" v="25" sub="%" tone="violet" />
                        </div>

                        {/* Ticket Performance Details preview */}
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                            <div className="flex items-center justify-between mb-4">
                                <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                                    <Layers className="size-3.5 text-emerald-300" /> Ticket
                                    Performance Details
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="inline-flex items-center gap-1.5 rounded-md bg-zukvo-500 text-white text-[11px] px-2.5 py-1">
                                        <Calculator className="size-3" /> Breakdown
                                    </button>
                                    <span className="text-[11px] text-zinc-500">Total: 8</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                <PerfStat icon={CheckCircle2} k="Completed" v="2" ratio="25%" w={25} tone="emerald" />
                                <PerfStat icon={Clock3} k="In Progress" v="0" ratio="0%" w={0} tone="amber" />
                                <PerfStat icon={AlertCircle} k="Pending" v="1" ratio="13%" w={13} tone="rose" />
                                <PerfStat icon={BadgeCheck} k="On Time" v="4" ratio="50%" w={50} tone="emerald" />
                                <PerfStat icon={AlertTriangle} k="Delayed" v="3" ratio="38%" w={38} tone="rose" />
                                <PerfStat icon={XCircle} k="Not Tracked" v="1" ratio="13%" w={13} tone="violet" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProfileMeta({ icon: Icon, k, v, tone }) {
    const toneMap = {
        indigo: "text-zukvo-300",
        violet: "text-violet-300",
        amber: "text-amber-300",
        emerald: "text-emerald-300",
    };
    return (
        <div className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5">
            <div className={`text-[9px] uppercase tracking-[0.2em] inline-flex items-center gap-1 ${toneMap[tone]}`}>
                <Icon className="size-3" /> {k}
            </div>
            <div className="text-[12px] text-zinc-100 mt-0.5 truncate">{v}</div>
        </div>
    );
}

function ScoreChip({ k, v, tone }) {
    const text = {
        emerald: "text-emerald-300",
        amber: "text-amber-300",
        rose: "text-rose-300",
    }[tone];
    return (
        <div className="rounded-md border border-white/10 bg-white/[0.02] py-2">
            <div className="text-[9px] uppercase tracking-[0.18em] text-zinc-500">{k}</div>
            <div className={`font-heading text-base mt-0.5 ${text}`}>{v}</div>
        </div>
    );
}

function Gauge({ value }) {
    const r = 50;
    const c = 2 * Math.PI * r;
    return (
        <div className="relative size-32">
            <svg viewBox="0 0 120 120" className="size-full -rotate-90">
                <circle cx="60" cy="60" r={r} stroke="rgba(255,255,255,0.08)" strokeWidth="8" fill="none" />
                <defs>
                    <linearGradient id="perf-gauge" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#EF4444" />
                    </linearGradient>
                </defs>
                <circle
                    cx="60"
                    cy="60"
                    r={r}
                    stroke="url(#perf-gauge)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={c}
                    strokeDashoffset={c - (value / 100) * c}
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="font-heading text-3xl text-white leading-none">{value}%</div>
                <div className="text-[9px] uppercase tracking-[0.22em] text-zinc-500 mt-1">
                    Overall
                </div>
            </div>
        </div>
    );
}

function TopKpi({ icon: Icon, k, v, sub, tone }) {
    const text = {
        emerald: "text-emerald-300",
        indigo: "text-zukvo-300",
        amber: "text-amber-300",
        violet: "text-violet-300",
    }[tone];
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-4">
            <div className="flex items-center gap-2">
                <span
                    className={`inline-flex size-8 items-center justify-center rounded-md bg-white/5 border border-white/10 ${text}`}
                >
                    <Icon className="size-4" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                    {k}
                </span>
            </div>
            <div className="mt-3 font-heading text-2xl text-white tracking-tight">
                {v}
                {sub && <span className="text-[12px] text-zinc-500 ml-1">{sub}</span>}
            </div>
        </div>
    );
}

function PerfStat({ icon: Icon, k, v, ratio, w, tone }) {
    const text = {
        emerald: "text-emerald-300",
        amber: "text-amber-300",
        rose: "text-rose-300",
        violet: "text-violet-300",
    }[tone];
    const bar = {
        emerald: "bg-emerald-400",
        amber: "bg-amber-400",
        rose: "bg-rose-400",
        violet: "bg-violet-400",
    }[tone];
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
            <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5">
                    <Icon className={`size-3.5 ${text}`} />
                    <span className="text-[10.5px] uppercase tracking-[0.18em] text-zinc-400">
                        {k}
                    </span>
                </div>
                <span className="font-heading text-xl text-white">{v}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-[10.5px] text-zinc-500">
                <span>{ratio} Ratio</span>
            </div>
            <div className="mt-1 h-1 rounded-full bg-white/10 overflow-hidden">
                <div className={`h-full ${bar}`} style={{ width: `${w}%` }} />
            </div>
        </div>
    );
}

/* ---------------- TICKET PERFORMANCE ---------------- */

function TicketPerformance() {
    const rows = [
        ["002-0600", "Analyze free usage options for XL Sheet in product", "6h", "5h 43m", "Dev Complete", "complete", "No Compliance", "rose"],
        ["002-0568", "Logo background removal in settings", "0h", "57m", "Pause", "pause", "NO Tracked Time", "zinc"],
        ["002-0518", "Milestones", "3.5h", "2h 40m", "Pause", "pause", "No Compliance", "rose"],
        ["002-0501", "Reimbursement", "6.5h", "5h 58m", "Pause", "pause", "No Compliance", "rose"],
        ["002-0483", "Interview Scheduling", "3h", "5h 48m", "Pause", "pause", "2h 48m Late", "amber"],
    ];
    return (
        <section
            id="tickets"
            data-testid="perf-tickets"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Ticket Performance
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Every ticket. Every minute. Audited.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        See estimate vs tracked, status and compliance per ticket. Spot the rows
                        that hurt the score before review day — not after.
                    </p>
                </div>

                <div className="zk-reveal mt-12 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                    <div className="grid grid-cols-12 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-zinc-500 border-b border-white/5">
                        <div className="col-span-1">Ticket</div>
                        <div className="col-span-5">Title</div>
                        <div className="col-span-1 text-right">Estimate</div>
                        <div className="col-span-2 text-right">Tracked</div>
                        <div className="col-span-1">Status</div>
                        <div className="col-span-2 text-right">Completion</div>
                    </div>
                    {rows.map((r, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-12 items-center px-5 py-3.5 border-t border-white/5 hover:bg-white/[0.02] transition-colors"
                        >
                            <div className="col-span-1">
                                <span className="inline-flex items-center text-[11px] font-mono rounded-md border border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300 px-2 py-0.5">
                                    {r[0]}
                                </span>
                            </div>
                            <div className="col-span-5 text-[13px] text-zinc-100 truncate">
                                {r[1]}
                            </div>
                            <div className="col-span-1 text-right text-[12px] text-zinc-300">
                                {r[2]}
                            </div>
                            <div
                                className={`col-span-2 text-right text-[13px] font-medium ${
                                    r[3] === "57m" || r[5] === "complete" ? "text-emerald-300" : r[7] === "amber" ? "text-rose-300" : "text-emerald-300"
                                }`}
                            >
                                {r[3]}
                            </div>
                            <div className="col-span-1">
                                <span
                                    className={`inline-flex items-center gap-1 text-[10.5px] rounded-md border px-2 py-0.5 ${
                                        r[5] === "complete"
                                            ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                                            : "border-white/10 bg-white/[0.04] text-zinc-300"
                                    }`}
                                >
                                    {r[5] === "complete" ? (
                                        <CheckCircle2 className="size-3" />
                                    ) : (
                                        <Pause className="size-3" />
                                    )}
                                    {r[4]}
                                </span>
                            </div>
                            <div className="col-span-2 text-right">
                                <span
                                    className={`text-[10.5px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 ${
                                        r[7] === "rose"
                                            ? "border-rose-400/30 bg-rose-500/10 text-rose-300"
                                            : r[7] === "amber"
                                              ? "border-amber-400/30 bg-amber-500/10 text-amber-300"
                                              : "border-white/10 bg-white/[0.04] text-zinc-400"
                                    }`}
                                >
                                    {r[6]}
                                </span>
                            </div>
                        </div>
                    ))}

                    <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between text-[11.5px] text-zinc-500">
                        <span>Showing 5 of 8 tickets</span>
                        <div className="inline-flex items-center gap-1">
                            <ChevronRight className="size-3.5 rotate-180" />
                            <span className="inline-flex size-6 items-center justify-center rounded border border-zukvo-500/30 text-zukvo-300 text-[11px]">
                                1
                            </span>
                            <span className="text-zinc-400">2</span>
                            <ChevronRight className="size-3.5" />
                        </div>
                    </div>
                </div>

                <div className="zk-reveal mt-6">
                    <ImageSlot
                        testid="perf-image-tickets"
                        label="Ticket Performance Details"
                        chromeUrl="zukvo.app/hrms/performance/tickets"
                        aspect="16/9"
                        caption="Replace with your ticket performance screenshot."
                    />
                </div>
            </div>
        </section>
    );
}

/* ---------------- SCORE FORMULA ---------------- */

function ScoreFormula() {
    return (
        <section
            id="score"
            data-testid="perf-score"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-zukvo-500/30 bg-zukvo-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                            <Calculator className="size-3" /> Weighted Score
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            The score, with the math shown.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Three weighted components: Completion (50%), Timeliness (40%),
                            Tracking (10%). Every number on the gauge has a formula behind it — and
                            it's one click away.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Target, t: "Completion · 50% weight" },
                                { i: Timer, t: "Timeliness · 40% weight" },
                                { i: Activity, t: "Tracking quality · 10% weight" },
                                { i: Eye, t: "Formulas visible to everyone" },
                            ].map((b, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2.5 text-[14px] text-zinc-300"
                                >
                                    <b.i className="size-4 text-zukvo-300" /> {b.t}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Drawer mock */}
                    <div className="lg:col-span-7">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                            <div className="px-5 py-4 flex items-center gap-3 border-b border-white/5">
                                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-zukvo-500/15 text-zukvo-200 border border-zukvo-500/30">
                                    <Calculator className="size-5" />
                                </span>
                                <div className="font-heading text-lg text-white tracking-tight">
                                    Ticket Performance Breakdown
                                </div>
                            </div>

                            <div className="p-5 space-y-5">
                                {/* Weighted score */}
                                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                                    <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                                        Weighted Ticket Score
                                    </div>
                                    <div className="mt-2 font-heading text-5xl text-zukvo-300 tracking-tight">
                                        41.25
                                    </div>
                                    <div className="text-[11.5px] text-zinc-500 mt-1">
                                        Calculated from completion, timeliness, and tracking.
                                    </div>
                                </div>

                                <ScoreRow
                                    title="Completion Score"
                                    weight="50%"
                                    pct={25}
                                    color="emerald"
                                    pctText="25%"
                                    formula="Formula: (Completed / Total) × 100"
                                    body={
                                        <>
                                            <span className="text-emerald-300 font-medium">2</span>{" "}
                                            of <span className="text-emerald-300 font-medium">8</span>{" "}
                                            tickets completed.
                                            <div className="mt-1 text-rose-300">
                                                • 6 tickets not completed (75% of total).
                                            </div>
                                            <div className="text-rose-300">
                                                75% × 2 = 150% total reduction from 100%
                                            </div>
                                        </>
                                    }
                                />
                                <ScoreRow
                                    title="Timeliness Score"
                                    weight="40%"
                                    pct={50}
                                    color="amber"
                                    pctText="50%"
                                    formula="Formula: (On-Time / Total) × 100"
                                    body={
                                        <>
                                            <span className="text-amber-300 font-medium">4</span>{" "}
                                            out of <span className="text-amber-300 font-medium">8</span>{" "}
                                            total tickets were on time (Dev Complete).
                                            <div className="mt-1 text-rose-300">
                                                • 4 tickets were delayed, impacting the timeliness
                                                score.
                                            </div>
                                        </>
                                    }
                                />
                                <ScoreRow
                                    title="Tracking Quality"
                                    weight="10%"
                                    pct={87.5}
                                    color="indigo"
                                    pctText="87.5%"
                                    formula="Formula: ((Total - Untracked) / Total) × 100"
                                    body={
                                        <>
                                            <span className="text-zukvo-300 font-medium">7</span>{" "}
                                            out of <span className="text-zukvo-300 font-medium">8</span>{" "}
                                            total tickets had time logs.
                                            <div className="mt-1 text-zukvo-300">
                                                • 1 tickets were untracked, lowering the tracking
                                                quality.
                                            </div>
                                        </>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ScoreRow({ title, weight, pct, color, pctText, formula, body }) {
    const barColor = {
        emerald: "bg-emerald-400",
        amber: "bg-amber-400",
        indigo: "bg-zukvo-400",
    }[color];
    const text = {
        emerald: "text-emerald-300",
        amber: "text-amber-300",
        indigo: "text-zukvo-300",
    }[color];
    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-[13px] text-white font-medium">{title}</div>
                    <div className="text-[10.5px] text-zinc-500">Weight: {weight}</div>
                </div>
                <span className={`font-heading text-xl ${text}`}>{pctText}</span>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div className={`h-full ${barColor}`} style={{ width: `${pct}%` }} />
            </div>
            <div className="mt-3 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-[12px] text-zinc-300">
                {body}
                <div className="mt-2 text-[10.5px] text-zinc-500 font-mono">{formula}</div>
            </div>
        </div>
    );
}

/* ---------------- DAILY UPDATES ---------------- */

function DailyUpdates() {
    const [tab, setTab] = useState("bod");
    return (
        <section
            id="daily"
            data-testid="perf-daily"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Daily Updates
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        BOD + EOD compliance — without the nags.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Beginning-of-day and end-of-day updates are tracked per working day. Misses
                        are weighted, capped, and applied to the score with the formula visible to
                        everyone.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid lg:grid-cols-12 gap-5">
                    {/* Compliance + log */}
                    <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                        <div className="px-5 py-3 border-b border-white/5 inline-flex items-center gap-2 text-[12px] text-zinc-100">
                            <FileText className="size-3.5 text-amber-300" /> Daily Updates Log
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-white/5">
                            <div className="p-5">
                                <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-300 font-bold">
                                    BOD Compliance
                                </div>
                                <div className="mt-2 font-heading text-3xl text-emerald-300">
                                    0 <span className="text-zinc-500 text-base">/ 22</span>
                                </div>
                                <div className="text-[11.5px] text-zinc-500 mt-1">
                                    Total Beginning of Day updates
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300 font-bold">
                                    EOD Compliance
                                </div>
                                <div className="mt-2 font-heading text-3xl text-amber-300">
                                    20 <span className="text-zinc-500 text-base">/ 22</span>
                                </div>
                                <div className="text-[11.5px] text-zinc-500 mt-1">
                                    Total End of Day updates
                                </div>
                            </div>
                        </div>

                        <div className="px-5 py-3 border-t border-white/5">
                            <div className="text-[11px] text-zinc-500 italic">
                                Showing missed updates for working days in the selected period.
                            </div>
                            <div className="mt-3 inline-flex border border-white/10 rounded-md p-0.5 text-[11.5px]">
                                <button
                                    type="button"
                                    onClick={() => setTab("bod")}
                                    className={`px-3 py-1 rounded ${tab === "bod" ? "bg-zukvo-500/15 text-zukvo-200" : "text-zinc-400"}`}
                                >
                                    Missed BOD (22)
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setTab("eod")}
                                    className={`px-3 py-1 rounded ${tab === "eod" ? "bg-zukvo-500/15 text-zukvo-200" : "text-zinc-400"}`}
                                >
                                    Missed EOD (3)
                                </button>
                            </div>
                            <ul className="mt-3 divide-y divide-white/5 border border-white/10 rounded-md overflow-hidden">
                                {(tab === "bod"
                                    ? [
                                          "01 Apr (Wed)",
                                          "02 Apr (Thu)",
                                          "03 Apr (Fri)",
                                          "06 Apr (Mon)",
                                          "07 Apr (Tue)",
                                      ]
                                    : ["27 Apr (Mon)", "29 Apr (Wed)", "30 Apr (Thu)"]).map(
                                    (d, i) => (
                                        <li
                                            key={i}
                                            className="px-3 py-2 flex items-center justify-between text-[12px]"
                                        >
                                            <span className="text-zinc-300">{d}</span>
                                            <span className="text-[10px] uppercase tracking-[0.18em] rounded-full border border-rose-400/30 bg-rose-500/10 text-rose-300 px-2 py-0.5">
                                                Missed
                                            </span>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                    </div>

                    {/* Breakdown drawer mock */}
                    <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                        <div className="px-5 py-4 flex items-center gap-3 border-b border-white/5">
                            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-amber-500/15 text-amber-200 border border-amber-400/30">
                                <FileText className="size-4" />
                            </span>
                            <div className="font-heading text-base text-white tracking-tight">
                                Daily Updates Breakdown
                            </div>
                        </div>
                        <div className="p-5 space-y-4">
                            <div className="rounded-xl border border-amber-400/30 bg-amber-500/[0.05] p-4">
                                <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-400 font-bold">
                                    Total EOD Penalty
                                </div>
                                <div className="mt-2 font-heading text-4xl text-amber-300">
                                    -2.25
                                </div>
                                <div className="text-[11.5px] text-zinc-500 mt-1">
                                    Subtracted from the final performance score.
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="text-[12px] text-white font-medium">
                                        BOD Compliance
                                    </div>
                                    <span className="font-heading text-base text-emerald-300">
                                        0%
                                    </span>
                                </div>
                                <div className="text-[10.5px] text-zinc-500">
                                    Beginning of Day Updates
                                </div>
                                <div className="mt-2 rounded-md border border-emerald-400/30 bg-emerald-500/[0.05] px-3 py-2 text-[12px] text-zinc-300">
                                    <span className="text-emerald-300 font-medium">0</span> out of{" "}
                                    <span className="text-emerald-300 font-medium">22</span> BODs
                                    submitted.
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="text-[12px] text-white font-medium">
                                        EOD Compliance
                                    </div>
                                    <span className="font-heading text-base text-amber-300">
                                        91%
                                    </span>
                                </div>
                                <div className="text-[10.5px] text-zinc-500">
                                    End of Day Updates
                                </div>
                                <div className="mt-2 rounded-md border border-amber-400/30 bg-amber-500/[0.05] px-3 py-2 text-[12px] text-zinc-300 space-y-1">
                                    <div>
                                        <span className="text-amber-300 font-medium">20</span> out
                                        of{" "}
                                        <span className="text-amber-300 font-medium">22</span> EODs
                                        submitted.
                                    </div>
                                    <div className="pt-1 border-t border-amber-400/15 text-rose-300">
                                        • 3 missed EODs
                                    </div>
                                    <div className="text-rose-300">
                                        3 × 0.75 = 2.25 point reduction
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                                    Missed Updates Details
                                </div>
                                <ul className="mt-2 space-y-1.5 text-[11.5px]">
                                    {[
                                        ["BOD", "Apr 30, 2026"],
                                        ["BOD", "Apr 29, 2026"],
                                        ["BOD", "Apr 28, 2026"],
                                        ["BOD", "Apr 27, 2026"],
                                        ["EOD", "Apr 27, 2026"],
                                    ].map((r, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5"
                                        >
                                            <div className="inline-flex items-center gap-2">
                                                <span className="text-[9.5px] uppercase tracking-[0.18em] rounded border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-1.5 py-0.5">
                                                    {r[0]}
                                                </span>
                                                <span className="text-zinc-300">{r[1]}</span>
                                            </div>
                                            <span className="text-[9.5px] uppercase tracking-[0.18em] rounded-full border border-rose-400/30 bg-rose-500/10 text-rose-300 px-2 py-0.5">
                                                Missed
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- ESCALATIONS ---------------- */

function Escalations() {
    return (
        <section
            id="escalations"
            data-testid="perf-escalations"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-400/30 bg-rose-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-rose-300">
                            <AlertTriangle className="size-3" /> Escalations
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Missed expectations — counted fairly.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Escalations represent missed expectations or process deviations. Each
                            one negatively impacts the weighted performance score — capped at -25 —
                            to keep quality high without becoming punitive.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: AlertTriangle, t: "Auto-pulled from Escalation Management" },
                                { i: Calculator, t: "Weighted impact per escalation" },
                                { i: Percent, t: "Capped at -25 total" },
                                { i: BadgeCheck, t: "Excellent-progress signal on zero" },
                            ].map((b, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2.5 text-[14px] text-zinc-300"
                                >
                                    <b.i className="size-4 text-rose-300" /> {b.t}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-7 space-y-5">
                        {/* Drawer mock */}
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                            <div className="px-5 py-4 flex items-center gap-3 border-b border-white/5">
                                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-rose-500/15 text-rose-200 border border-rose-400/30">
                                    <AlertTriangle className="size-4" />
                                </span>
                                <div className="font-heading text-base text-white tracking-tight">
                                    Escalations Breakdown
                                </div>
                            </div>
                            <div className="p-5 space-y-4">
                                <div className="rounded-xl border border-rose-400/30 bg-rose-500/[0.05] p-4">
                                    <div className="text-[10px] uppercase tracking-[0.22em] text-rose-300 font-bold">
                                        Total Escalation Penalty
                                    </div>
                                    <div className="mt-2 font-heading text-4xl text-rose-300">
                                        -0
                                    </div>
                                    <div className="text-[11.5px] text-zinc-500 mt-1">
                                        Subtracted from the final performance score (Max -25).
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-[12px] text-white font-medium">
                                            Escalation Count
                                        </div>
                                        <span className="font-heading text-base text-rose-300">
                                            0
                                        </span>
                                    </div>
                                    <div className="text-[10.5px] text-zinc-500">
                                        Total weighted impact
                                    </div>
                                    <div className="mt-2 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-[12px] text-zinc-300">
                                        <span className="text-rose-300 font-medium">0</span>{" "}
                                        escalations recorded in this period.
                                    </div>
                                </div>

                                <div className="rounded-xl border border-zukvo-500/30 bg-zukvo-500/[0.05] p-4">
                                    <div className="text-[12px] text-white font-medium">
                                        Impact on Professionalism
                                    </div>
                                    <div className="text-[12px] text-zinc-400 mt-1 leading-relaxed">
                                        Escalations represent missed expectations or process
                                        deviations. Each escalation negatively impacts the
                                        weighted performance score to ensure high quality of ticket
                                        execution and collaboration.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Empty state */}
                        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/[0.05] p-5 text-center">
                            <div className="inline-flex size-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-200 border border-emerald-400/30">
                                <CheckCircle2 className="size-6" />
                            </div>
                            <div className="mt-3 font-heading text-xl text-emerald-300 tracking-tight">
                                Excellent Progress!
                            </div>
                            <div className="text-[12.5px] text-zinc-400 mt-1">
                                No escalations have been recorded for{" "}
                                <span className="text-white">Bharathi</span> in this period.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- REPORTS ---------------- */

function Reports() {
    return (
        <section
            id="reports"
            data-testid="perf-reports"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                            Reports
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            One click. Review-ready.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Pick a teammate, a month, and Zukvo bundles the score, ticket
                            breakdown, daily updates and escalations into a polished, shareable
                            report — ready for performance reviews or pay cycles.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Calendar, t: "Month, quarter or custom date range" },
                                { i: Users, t: "Per-teammate or whole-team rollup" },
                                { i: Sparkles, t: "Zai-generated narrative summary" },
                                { i: History, t: "Snapshots saved for review history" },
                            ].map((b, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2.5 text-[14px] text-zinc-300"
                                >
                                    <b.i className="size-4 text-zukvo-300" /> {b.t}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                            <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between flex-wrap gap-2">
                                <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                                    <TrendingUp className="size-3.5 text-zukvo-300" /> Generate
                                    Report
                                </div>
                                <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300 px-2 py-0.5">
                                    Period · Apr 2026
                                </span>
                            </div>
                            <div className="p-5 grid md:grid-cols-3 gap-3 text-[12px]">
                                <FilterPick label="Teammate" value="Bharathi" icon={Users} />
                                <FilterPick label="Month" value="April" icon={Calendar} />
                                <FilterPick label="Year" value="2026" icon={Hash} />
                            </div>
                            <div className="px-5 pb-5">
                                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                                    <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                                        What's in the report
                                    </div>
                                    <ul className="mt-3 grid md:grid-cols-2 gap-2 text-[12.5px] text-zinc-300">
                                        {[
                                            "Overall performance gauge + delta",
                                            "Ticket breakdown · all 6 statuses",
                                            "Weighted score formula breakdown",
                                            "BOD + EOD compliance log",
                                            "Escalation count + penalty",
                                            "Zai narrative summary + signals",
                                        ].map((t, i) => (
                                            <li key={i} className="inline-flex items-center gap-2">
                                                <CheckCircle2 className="size-3.5 text-emerald-300 shrink-0" />
                                                {t}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-4 flex items-center justify-between flex-wrap gap-2">
                                    <span className="inline-flex items-center gap-1.5 text-[11.5px] rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 px-2.5 py-1">
                                        <Sparkles className="size-3" /> Zai summary included
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 text-white px-3 py-1.5 text-[12px]">
                                            Preview
                                        </button>
                                        <button
                                            className="inline-flex items-center gap-1.5 rounded-full text-white text-[12px] font-medium px-4 py-1.5"
                                            style={{
                                                backgroundImage:
                                                    "linear-gradient(135deg, #6366F1, #8B5CF6)",
                                            }}
                                        >
                                            <ArrowRight className="size-3.5" /> Generate Report
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FilterPick({ label, value, icon: Icon }) {
    return (
        <div className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2.5">
            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 inline-flex items-center gap-1">
                <Icon className="size-3" /> {label}
            </div>
            <div className="text-[13px] text-zinc-100 mt-1 inline-flex items-center justify-between w-full">
                <span>{value}</span>
                <ChevronRight className="size-3.5 text-zinc-500 rotate-90" />
            </div>
        </div>
    );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
    return (
        <section data-testid="perf-final-cta" className="relative bg-[#0A0A0A] text-white">
            <div className="mx-auto max-w-7xl px-6 md:px-10 pb-20">
                <div
                    className="zk-reveal relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0E0E10] p-10 md:p-16 text-center"
                    style={{
                        backgroundImage:
                            "radial-gradient(60% 80% at 50% 0%, rgba(16,185,129,0.18), transparent 60%)",
                    }}
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                        <Sparkles className="size-3" /> Get started
                    </span>
                    <h2 className="mt-6 font-heading font-medium text-3xl md:text-5xl tracking-[-0.03em]">
                        Make every review evidence-based.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/signup"
                            data-testid="perf-final-cta-primary"
                            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3.5 text-sm font-medium"
                        >
                            Start free trial
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
const _unused = [Play, Search];

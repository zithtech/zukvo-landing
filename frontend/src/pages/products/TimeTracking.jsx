import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    Timer,
    Play,
    Pause,
    Square,
    StopCircle,
    Clock,
    Activity,
    Users,
    User,
    Briefcase,
    TrendingUp,
    Plus,
    CalendarRange,
    Filter,
    PenLine,
    CheckCircle2,
    Sparkles,
    ChevronRight,
    AlertTriangle,
    BarChart3,
    Hash,
    MousePointerClick,
    ExternalLink,
    FileText,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import ImageSlot from "@/components/ImageSlot";

const TT_MY_IMG =
    "https://customer-assets.emergentagent.com/job_work-nexus-20/artifacts/bjghvprm_image.png";
const TT_START_IMG =
    "https://customer-assets.emergentagent.com/job_work-nexus-20/artifacts/yjjcw5ru_image.png";
const TT_TEAM_IMG =
    "https://customer-assets.emergentagent.com/job_work-nexus-20/artifacts/7fgod7hr_image.png";
const TT_LOG_IMG =
    "https://customer-assets.emergentagent.com/job_work-nexus-20/artifacts/vaqv85zj_image.png";
const TT_TICKET_IMG =
    "https://customer-assets.emergentagent.com/job_work-nexus-20/artifacts/xhlqj0b2_image.png";

const SUBMODULES = [
    { id: "start", label: "Start a timer", icon: Play },
    { id: "controls", label: "Controls", icon: Pause },
    { id: "my", label: "My tracking", icon: User },
    { id: "team", label: "Team tracking", icon: Users },
    { id: "manager", label: "Manager adjust", icon: PenLine },
    { id: "ticket", label: "Ticket deep-dive", icon: Hash },
    { id: "activity", label: "Activity", icon: Activity },
];

export default function TimeTracking() {
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
            data-testid="time-tracking-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink overflow-x-hidden"
        >
            <Nav />
            <Hero />
            <SubmoduleNav />
            <StartTimer />
            <TimerControls />
            <MyTracking />
            <TeamTracking />
            <ManagerAdjust />
            <TicketDeepDive />
            <ActivitySection />
            <FinalCTA />
            <Footer />
        </main>
    );
}

/* ---------------- HERO ---------------- */

function Hero() {
    return (
        <section
            data-testid="tt-hero"
            className="relative pt-32 md:pt-40 pb-16 md:pb-24 zk-mesh"
        >
            <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_75%)] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                <div className="zk-reveal">
                    <Link
                        to="/products"
                        data-testid="tt-breadcrumb"
                        className="inline-flex items-center gap-1.5 text-[12px] text-zinc-500 hover:text-zukvo-600"
                    >
                        <ArrowLeft className="size-3.5" />
                        All products
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-600">
                            <Timer className="size-3.5" />
                            Time Tracking
                        </div>
                        <h1
                            data-testid="tt-headline"
                            className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink"
                        >
                            Real hours. <br />
                            <span className="text-zinc-500">Without the friction.</span>
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            Pick a project, map it to a ticket, and hit Start. Pause when life
                            interrupts, resume when you're back, stop when it's done. Managers see
                            the team's day in real-time and adjust missed entries.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/#start"
                                data-testid="tt-cta-primary"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Time Tracking
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            <a
                                href="#start"
                                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-medium text-zinc-800 hover:border-zinc-400 transition-colors"
                            >
                                See every feature
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="zk-reveal grid grid-cols-2 gap-3">
                            {[
                                { k: "1-tap", v: "Start · Pause · Resume · Stop" },
                                { k: "Project · Ticket", v: "Every entry traceable" },
                                { k: "My · Team", v: "Two views, one engine" },
                                { k: "Backfill", v: "Manager adjustments" },
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
            data-testid="tt-submodule-nav"
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
                            data-testid={`tt-pill-${s.id}`}
                            className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-[12.5px] text-zinc-700 hover:border-zukvo-500/40 hover:text-zukvo-600 transition-colors"
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

/* ---------------- START A TIMER ---------------- */

function StartTimer() {
    return (
        <section
            id="start"
            data-testid="tt-start"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                            Start a timer
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Pick a project. Map a ticket. Hit start.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            One popover from anywhere. Choose the project and the exact ticket
                            you're working on. Add a quick note. Press start — Zukvo logs every
                            second to that ticket.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Briefcase, t: "Multi-project picker" },
                                { i: Hash, t: "Ticket-level mapping" },
                                { i: PenLine, t: "Optional 240-char note" },
                                { i: Sparkles, t: "Globally accessible — header timer" },
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
                            testid="tt-image-start"
                            src={TT_START_IMG}
                            alt="Start a timer popover"
                            label="Start a timer · header popover"
                            chromeUrl="zukvo.app/home"
                            caption="Live screenshot — start-timer popover with project + ticket selectors."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- TIMER CONTROLS ---------------- */

function TimerControls() {
    const [state, setState] = useState("running");
    const states = {
        idle: {
            label: "Ready to track",
            color: "zinc",
            time: "00:00:00",
            badge: "Idle",
            cta: "start",
        },
        running: {
            label: "Live · Running",
            color: "emerald",
            time: "00:04:27",
            badge: "Running",
            cta: "pause",
        },
        paused: {
            label: "Session paused",
            color: "amber",
            time: "00:04:27",
            badge: "Paused",
            cta: "resume",
        },
        stopped: {
            label: "Saved · Stopped",
            color: "violet",
            time: "00:04:27",
            badge: "Logged",
            cta: "start",
        },
    };
    const s = states[state];
    const ringColor = {
        zinc: "stroke-zinc-500",
        emerald: "stroke-emerald-400",
        amber: "stroke-amber-400",
        violet: "stroke-violet-400",
    }[s.color];
    const textColor = {
        zinc: "text-zinc-300",
        emerald: "text-emerald-300",
        amber: "text-amber-300",
        violet: "text-violet-300",
    }[s.color];
    const dotBg = {
        zinc: "bg-zinc-500",
        emerald: "bg-emerald-400",
        amber: "bg-amber-400",
        violet: "bg-violet-400",
    }[s.color];

    return (
        <section
            id="controls"
            data-testid="tt-controls"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Controls
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Start. Pause. Resume. Stop.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        The four primitives every honest tracker needs. Pause when the meeting
                        starts, resume when it ends, stop when it ships — every transition is
                        timestamped.
                    </p>
                </div>

                <div className="zk-reveal mt-10 grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-5">
                        <div
                            className={`relative aspect-square max-w-[440px] mx-auto rounded-3xl border ${
                                s.color === "emerald"
                                    ? "border-emerald-400/30"
                                    : s.color === "amber"
                                      ? "border-amber-400/30"
                                      : s.color === "violet"
                                        ? "border-violet-400/30"
                                        : "border-white/10"
                            } bg-[#0E0E10] flex items-center justify-center overflow-hidden`}
                            style={{
                                backgroundImage:
                                    "radial-gradient(60% 80% at 50% 0%, rgba(99,102,241,0.18), transparent 60%)",
                            }}
                        >
                            <svg viewBox="0 0 280 280" className="w-full h-full">
                                <circle
                                    cx="140"
                                    cy="140"
                                    r="110"
                                    stroke="rgba(255,255,255,0.08)"
                                    strokeWidth="14"
                                    fill="none"
                                />
                                {state !== "idle" && (
                                    <circle
                                        cx="140"
                                        cy="140"
                                        r="110"
                                        className={`${ringColor} ${state === "running" ? "zk-pulse" : ""}`}
                                        strokeWidth="14"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeDasharray="360 691"
                                        transform="rotate(-90 140 140)"
                                    />
                                )}
                                <text
                                    x="140"
                                    y="135"
                                    textAnchor="middle"
                                    dominantBaseline="central"
                                    fill="white"
                                    style={{
                                        fontFamily: "JetBrains Mono",
                                        fontSize: 42,
                                        fontWeight: 500,
                                        letterSpacing: "-1px",
                                    }}
                                >
                                    {s.time}
                                </text>
                                <text
                                    x="140"
                                    y="178"
                                    textAnchor="middle"
                                    fill="rgba(255,255,255,0.55)"
                                    style={{
                                        fontFamily: "Outfit",
                                        fontSize: 11,
                                        letterSpacing: "0.22em",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {s.label}
                                </text>
                            </svg>
                            <span
                                className={`absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] rounded-full border px-2.5 py-1 ${
                                    s.color === "emerald"
                                        ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                                        : s.color === "amber"
                                          ? "border-amber-400/30 bg-amber-500/10 text-amber-300"
                                          : s.color === "violet"
                                            ? "border-violet-400/30 bg-violet-500/10 text-violet-300"
                                            : "border-white/10 bg-white/5 text-zinc-300"
                                }`}
                            >
                                <span className={`size-1.5 rounded-full ${dotBg}`} /> {s.badge}
                            </span>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                            <div className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-500">
                                Try the controls
                            </div>
                            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                                {[
                                    { id: "running", icon: Play, label: "Start", color: "emerald" },
                                    { id: "paused", icon: Pause, label: "Pause", color: "amber" },
                                    { id: "running", icon: Play, label: "Resume", color: "emerald" },
                                    { id: "stopped", icon: Square, label: "Stop", color: "violet" },
                                ].map((b, i) => (
                                    <button
                                        key={i}
                                        data-testid={`tt-action-${b.label.toLowerCase()}`}
                                        onClick={() => setState(b.id)}
                                        className={`group rounded-xl border px-4 py-4 text-center transition-colors ${
                                            state === b.id ||
                                            (b.label === "Resume" && state === "running") ||
                                            (b.label === "Start" && state === "running")
                                                ? b.color === "emerald"
                                                    ? "border-emerald-400/40 bg-emerald-500/10"
                                                    : b.color === "amber"
                                                      ? "border-amber-400/40 bg-amber-500/10"
                                                      : "border-violet-400/40 bg-violet-500/10"
                                                : "border-white/10 bg-white/[0.02] hover:bg-white/[0.06]"
                                        }`}
                                    >
                                        <span
                                            className={`inline-flex size-9 items-center justify-center rounded-lg border ${
                                                b.color === "emerald"
                                                    ? "bg-emerald-500/15 text-emerald-300 border-emerald-400/30"
                                                    : b.color === "amber"
                                                      ? "bg-amber-500/15 text-amber-300 border-amber-400/30"
                                                      : "bg-violet-500/15 text-violet-300 border-violet-400/30"
                                            }`}
                                        >
                                            <b.icon className="size-4" />
                                        </span>
                                        <div className="mt-2.5 text-[13px] text-white font-medium">
                                            {b.label}
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="mt-5 grid grid-cols-3 gap-2">
                                {[
                                    ["Idle", "idle", "zinc"],
                                    ["Running", "running", "emerald"],
                                    ["Paused", "paused", "amber"],
                                    ["Stopped", "stopped", "violet"],
                                ].map((s2, i) => (
                                    <button
                                        key={i}
                                        data-testid={`tt-state-${s2[1]}`}
                                        onClick={() => setState(s2[1])}
                                        className={`rounded-md border px-2.5 py-2 text-[11.5px] transition-colors ${
                                            state === s2[1]
                                                ? "border-zukvo-500/40 bg-zukvo-500/10 text-zukvo-200"
                                                : "border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white"
                                        }`}
                                    >
                                        {s2[0]}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                                <div className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-500">
                                    Active session
                                </div>
                                <div className="mt-2 flex items-center justify-between">
                                    <div>
                                        <div className="text-[13px] text-white">
                                            ZithSpace · RTR Management — Recruitment Suite
                                        </div>
                                        <div className="text-[11px] text-zinc-500 font-mono mt-0.5">
                                            EST · 6h
                                        </div>
                                    </div>
                                    <span className={`font-mono text-[14px] ${textColor}`}>
                                        {s.time}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- MY TRACKING ---------------- */

function MyTracking() {
    return (
        <section
            id="my"
            data-testid="tt-my"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                        My Time Tracking
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Your day, at a glance.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Today's hours, active sessions, weekly progress against your 40-hour goal,
                        and a 7-day activity chart — plus an itemized timeline of every Run, Pause,
                        and Resume from the day.
                    </p>
                </div>

                <div className="zk-reveal mt-12">
                    <ImageSlot
                        testid="tt-image-my"
                        src={TT_MY_IMG}
                        alt="My Time Tracking"
                        label="My Time Tracking — full page"
                        chromeUrl="zukvo.app/work/time-tracking"
                        aspect="16/10"
                        caption="Live screenshot — personal tracking view with KPIs, entries & 7-day activity."
                    />
                </div>

                <div className="zk-reveal mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Kpi icon={Clock} label="Today's hours" value="7h 45m" sub="100% vs yesterday" tone="indigo" />
                    <Kpi icon={Activity} label="Active sessions" value="1" sub="1 running" tone="emerald" />
                    <Kpi icon={CalendarRange} label="This week" value="7h 45m" sub="19% of 40h goal" tone="violet" />
                    <Kpi icon={TrendingUp} label="Daily average" value="1h 06m" sub="1 of 7 active days" tone="amber" />
                </div>

                <div className="zk-reveal mt-6 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                    <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
                        <div>
                            <div className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-500">
                                Activity timeline
                            </div>
                            <div className="font-heading text-base text-white">Sat, May 9, 2026</div>
                        </div>
                        <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors text-white px-3 py-1.5 text-[11.5px]">
                            <StopCircle className="size-3.5" /> Stop all
                        </button>
                    </div>
                    {[
                        {
                            time: "11:11:52 PM — Running",
                            badge: "LIVE",
                            badgeColor: "emerald",
                            desc: "RTR Management — Recruitment Suite",
                            est: "EST: 6h",
                            duration: "00:00:33",
                        },
                        {
                            time: "11:08:10 PM — 11:11:49 PM",
                            badge: "PAUSED",
                            badgeColor: "amber",
                            desc: "RTR Management — Recruitment Suite",
                            est: "EST: 6h",
                            duration: "00:03:39",
                        },
                        {
                            time: "Sat, May 9, 2026",
                            badge: "STOPPED",
                            badgeColor: "violet",
                            desc: "ZithSpace · ZithSpace Admin App",
                            est: "Logged",
                            duration: "7h 40m",
                        },
                    ].map((row, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-12 items-center gap-3 px-5 py-3.5 border-t border-white/5 hover:bg-white/[0.02] transition-colors"
                        >
                            <div className="col-span-1">
                                <span
                                    className={`inline-block size-2 rounded-full ${
                                        row.badgeColor === "emerald"
                                            ? "bg-emerald-400 zk-pulse"
                                            : row.badgeColor === "amber"
                                              ? "bg-amber-400"
                                              : "bg-violet-400"
                                    }`}
                                />
                            </div>
                            <div className="col-span-5">
                                <div className="text-[12px] text-zinc-400 font-mono">{row.time}</div>
                                <div className="mt-1 flex items-center gap-2">
                                    <span
                                        className={`text-[10px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 ${
                                            row.badgeColor === "emerald"
                                                ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                                                : row.badgeColor === "amber"
                                                  ? "border-amber-400/30 bg-amber-500/10 text-amber-300"
                                                  : "border-violet-400/30 bg-violet-500/10 text-violet-300"
                                        }`}
                                    >
                                        {row.badge}
                                    </span>
                                </div>
                            </div>
                            <div className="col-span-4 min-w-0">
                                <div className="text-[13px] text-zinc-200 truncate">{row.desc}</div>
                                <div className="text-[11px] text-zinc-500">{row.est}</div>
                            </div>
                            <div className="col-span-2 text-right">
                                <span className="font-mono text-[13.5px] text-white bg-white/5 border border-white/10 rounded-md px-2.5 py-1">
                                    {row.duration}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Kpi({ icon: Icon, label, value, sub, tone = "indigo" }) {
    const ring = {
        indigo: "before:bg-zukvo-500",
        emerald: "before:bg-emerald-400",
        violet: "before:bg-violet-400",
        amber: "before:bg-amber-400",
    }[tone];
    const text = {
        indigo: "text-zukvo-300",
        emerald: "text-emerald-300",
        violet: "text-violet-300",
        amber: "text-amber-300",
    }[tone];
    return (
        <div
            className={`relative rounded-2xl border border-white/10 bg-[#0E0E10] p-5 overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 ${ring}`}
        >
            <div className="flex items-start justify-between">
                <span
                    className={`inline-flex size-9 items-center justify-center rounded-lg bg-white/5 ${text} border border-white/10`}
                >
                    <Icon className="size-4" />
                </span>
            </div>
            <div className={`mt-4 text-[10.5px] uppercase tracking-[0.22em] ${text}`}>{label}</div>
            <div className="mt-1 font-heading text-3xl text-white tracking-tight">{value}</div>
            <div className="text-[11.5px] text-zinc-500 mt-1">{sub}</div>
        </div>
    );
}

/* ---------------- TEAM TRACKING ---------------- */

function TeamTracking() {
    return (
        <section
            id="team"
            data-testid="tt-team"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5 lg:order-2">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                            Team tracking
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Project managers see the day, live.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Active members, total work hours, project coverage, individual averages.
                            Drill into any teammate's timeline — paused sessions, ticket
                            attribution, daily capacity gauges with idle / goal-reached states.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Users, t: "Active members + idle states" },
                                { i: Clock, t: "Total work hours across the team" },
                                { i: Briefcase, t: "Project coverage across the team" },
                                { i: BarChart3, t: "Daily capacity bars · goal vs actual" },
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
                    <div className="lg:col-span-7 lg:order-1">
                        <ImageSlot
                            testid="tt-image-team"
                            src={TT_TEAM_IMG}
                            alt="Team Tracking"
                            label="Team Tracking — manager view"
                            chromeUrl="zukvo.app/work/time-tracking/team"
                            aspect="16/10"
                            caption="Live screenshot — team tracking with KPIs, activity table & timeline."
                        />
                    </div>
                </div>

                <div className="zk-reveal mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Kpi icon={Users} label="Active members" value="0" sub="8 tracked days in range" tone="emerald" />
                    <Kpi icon={Clock} label="Total work hours" value="60h 48m" sub="across 25 entries" tone="indigo" />
                    <Kpi icon={Briefcase} label="Project coverage" value="1" sub="across the team" tone="amber" />
                    <Kpi icon={TrendingUp} label="Individual avg" value="7h 36m" sub="per active day" tone="violet" />
                </div>

                <div className="zk-reveal mt-6 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                    <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
                        <div>
                            <div className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-500">
                                Team activity · 8 rows
                            </div>
                            <div className="font-heading text-base text-white">
                                Filtered: Priyadharshini · 2026-04-01 → 04-30
                            </div>
                        </div>
                        <Filter className="size-4 text-zinc-500" />
                    </div>
                    <div className="grid grid-cols-12 px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-zinc-500 border-b border-white/5 bg-white/[0.02]">
                        <div className="col-span-3">Day & date</div>
                        <div className="col-span-3">Team member</div>
                        <div className="col-span-1">Tickets</div>
                        <div className="col-span-2">Activity</div>
                        <div className="col-span-2">Daily capacity</div>
                        <div className="col-span-1 text-right">Status</div>
                    </div>
                    {[
                        ["Fri, Apr 10", "Priyadharshini", "2", "6 sessions", "Goal Reached", "8h 32m", "100", "IDLE", "emerald"],
                        ["Thu, Apr 9", "Priyadharshini", "3", "3 sessions", "67% of 6h", "4h 0m", "67", "IDLE", "indigo"],
                    ].map((r, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-12 items-center gap-3 px-5 py-3.5 border-t border-white/5 hover:bg-white/[0.02] transition-colors"
                        >
                            <div className="col-span-3 text-[13px] text-zinc-200">{r[0]}</div>
                            <div className="col-span-3 flex items-center gap-2.5">
                                <span className="size-7 rounded-md bg-gradient-to-br from-zukvo-500/40 to-violet-500/40 text-white text-[10.5px] inline-flex items-center justify-center border border-white/10">
                                    {r[1].slice(0, 1)}
                                </span>
                                <span className="text-[13px] text-zinc-200 truncate">{r[1]}</span>
                            </div>
                            <div className="col-span-1 text-[12.5px] text-zinc-300">{r[2]}</div>
                            <div className="col-span-2">
                                <span className="text-[10px] uppercase tracking-[0.18em] rounded-full border border-white/10 bg-white/5 text-zinc-300 px-2 py-0.5 inline-flex items-center gap-1.5">
                                    <Clock className="size-3" /> {r[3]}
                                </span>
                            </div>
                            <div className="col-span-2">
                                <div className="flex items-center justify-between">
                                    <span
                                        className={`text-[11px] ${
                                            r[8] === "emerald" ? "text-emerald-300" : "text-zinc-500"
                                        }`}
                                    >
                                        {r[4]}
                                    </span>
                                    <span className="text-[12px] text-white font-mono">{r[5]}</span>
                                </div>
                                <div className="mt-1.5 h-1 rounded-full bg-white/5 overflow-hidden">
                                    <div
                                        className={`h-full ${
                                            r[8] === "emerald" ? "bg-emerald-400" : "bg-zukvo-500"
                                        }`}
                                        style={{ width: `${r[6]}%` }}
                                    />
                                </div>
                            </div>
                            <div className="col-span-1 text-right">
                                <span className="text-[10px] uppercase tracking-[0.18em] rounded-full border border-white/10 bg-white/5 text-zinc-300 px-2 py-0.5">
                                    {r[7]}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------- MANAGER ADJUST ---------------- */

function ManagerAdjust() {
    return (
        <section
            id="manager"
            data-testid="tt-manager"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-300">
                        <AlertTriangle className="size-3" /> Manager-only
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        When a teammate forgets, you fix it cleanly.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Project managers can backfill missed entries with an audited{" "}
                        <span className="text-white">Log Time Session</span> — pick the team member,
                        date, projects, multiple tickets, and the time window. Zukvo splits the
                        duration evenly across selected tickets.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7">
                        <ImageSlot
                            testid="tt-image-log"
                            src={TT_LOG_IMG}
                            alt="Log Time Session manager modal"
                            label="Log Time Session · 3 steps"
                            chromeUrl="zukvo.app/work/time-tracking/log"
                            aspect="16/10"
                            caption="Live screenshot — Log Time Session modal for manager backfills."
                        />
                    </div>
                    <div className="lg:col-span-5 space-y-3">
                        <Step
                            n="01"
                            icon={User}
                            title="Who & When"
                            body="Pick the team member and the date you're backfilling for."
                        />
                        <Step
                            n="02"
                            icon={Hash}
                            title="What was worked on"
                            body="Choose one or more projects, then attach as many tickets as belong to the session — duration splits evenly."
                        />
                        <Step
                            n="03"
                            icon={Clock}
                            title="Time window"
                            body="Set start + end. Zukvo computes the total, splits across tickets, and shows you a live preview before committing."
                        />
                        <div className="rounded-xl border border-zukvo-500/30 bg-zukvo-500/5 px-4 py-3 flex items-center gap-2.5">
                            <Sparkles className="size-4 text-zukvo-300" />
                            <span className="text-[13px] text-zinc-200">
                                Audit trail records who created the entry &amp; when.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Step({ n, icon: Icon, title, body }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
            <div className="flex items-center gap-3">
                <span className="font-heading text-2xl text-zinc-600 tracking-tight">{n}</span>
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-zukvo-500/10 text-zukvo-300 border border-zukvo-500/20">
                    <Icon className="size-4" />
                </span>
            </div>
            <div className="mt-3 font-heading text-lg text-white tracking-tight">{title}</div>
            <p className="mt-1 text-[13.5px] text-zinc-400 leading-relaxed">{body}</p>
        </div>
    );
}

/* ---------------- TICKET DEEP-DIVE ---------------- */

function TicketDeepDive() {
    return (
        <section
            id="ticket"
            data-testid="tt-ticket"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
                            <MousePointerClick className="size-3" /> One-click context
                        </span>
                        <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                            Click the ticket. <br />
                            <span className="text-zinc-500">Get the whole story.</span>
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                            Every entry in the Time Tracking activity is a live link. Click the
                            ticket number — managers and members get the full ticket panel right
                            in place, with description, acceptance criteria, planning, and the
                            entire activity timeline. No tab switching. No context loss.
                        </p>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                            <div className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-500">
                                Try it
                            </div>
                            <div className="mt-3 space-y-2">
                                {[
                                    ["[001-0533]", "Notification content Enhancements", "In Progress", "emerald"],
                                    ["[001-0574]", "Invoice UI Updates", "In Progress", "emerald"],
                                    ["[001-0537]", "SOS Alerts From User App", "In Progress", "emerald"],
                                ].map((r, i) => (
                                    <button
                                        key={i}
                                        data-testid={`tt-ticket-link-${i}`}
                                        className="w-full group rounded-xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/40 hover:bg-cyan-500/[0.04] transition-colors px-3.5 py-3 flex items-center gap-3 text-left"
                                    >
                                        <span className="font-mono text-[12px] text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 rounded-md px-2 py-0.5 shrink-0">
                                            {r[0]}
                                        </span>
                                        <span className="text-[12.5px] text-zinc-200 truncate flex-1">
                                            {r[1]}
                                        </span>
                                        <ExternalLink className="size-3.5 text-zinc-500 group-hover:text-cyan-300 transition-colors shrink-0" />
                                    </button>
                                ))}
                            </div>
                            <div className="mt-3 text-[11px] text-zinc-500 leading-relaxed">
                                Same panel everywhere — Time Tracking, Sprint board, Daily Updates.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="zk-reveal mt-12">
                    <ImageSlot
                        testid="tt-image-ticket"
                        src={TT_TICKET_IMG}
                        alt="Ticket detail panel from Time Tracking activity"
                        label="Ticket panel · opened from Time Tracking"
                        chromeUrl="zukvo.app/work/time-tracking → 001-0533"
                        aspect="16/10"
                        caption="Live screenshot — clicking a ticket number opens the full ticket panel without leaving Time Tracking."
                    />
                </div>

                <div className="zk-reveal mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                        { i: FileText, t: "Description & acceptance criteria", c: "cyan" },
                        { i: User, t: "Assignee, reporter & RBAC", c: "violet" },
                        { i: Hash, t: "Tags, priority, story points", c: "amber" },
                        { i: Activity, t: "Activity timeline & status", c: "emerald" },
                    ].map((b, i) => (
                        <div
                            key={i}
                            className="rounded-xl border border-white/10 bg-[#0E0E10] p-4 flex items-center gap-3"
                        >
                            <span
                                className={`inline-flex size-9 items-center justify-center rounded-lg border ${
                                    b.c === "cyan"
                                        ? "bg-cyan-500/10 text-cyan-300 border-cyan-400/20"
                                        : b.c === "violet"
                                          ? "bg-violet-500/10 text-violet-300 border-violet-400/20"
                                          : b.c === "amber"
                                            ? "bg-amber-500/10 text-amber-300 border-amber-400/20"
                                            : "bg-emerald-500/10 text-emerald-300 border-emerald-400/20"
                                }`}
                            >
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

/* ---------------- ACTIVITY ---------------- */

function ActivitySection() {
    const days = [
        ["Sun", 0, 3], ["Mon", 0, 4], ["Tue", 0, 5], ["Wed", 0, 6],
        ["Thu", 0, 7], ["Fri", 0, 8], ["Sat", 7.75, 9],
    ];
    const max = 8;
    return (
        <section
            id="activity"
            data-testid="tt-activity"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                            7-day activity
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Spot the rhythm. <br /> Build the streak.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Every active day pulses on the bar chart. See your best day, daily
                            average, and where the gaps are — and let your team see theirs.
                        </p>
                        <div className="mt-6 grid grid-cols-3 gap-3 max-w-lg">
                            {[
                                ["Total", "7h 45m", "indigo"],
                                ["Daily avg", "1h 6m", "violet"],
                                ["Best day", "Sat", "amber"],
                            ].map((s, i) => (
                                <div
                                    key={i}
                                    className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                                >
                                    <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                        {s[0]}
                                    </div>
                                    <div
                                        className={`mt-1 font-heading text-xl tracking-tight ${
                                            s[2] === "indigo"
                                                ? "text-zukvo-300"
                                                : s[2] === "violet"
                                                  ? "text-violet-300"
                                                  : "text-amber-300"
                                        }`}
                                    >
                                        {s[1]}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-6">
                            <div className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-500 mb-5">
                                Last 7 days · 1 active
                            </div>
                            <div className="flex items-end gap-3 h-56">
                                {days.map((d, i) => {
                                    const h = (d[1] / max) * 100;
                                    const isActive = d[1] > 0;
                                    return (
                                        <div
                                            key={i}
                                            className="flex-1 flex flex-col items-center gap-2"
                                        >
                                            <div className="w-full flex-1 flex items-end">
                                                <div
                                                    className={`w-full rounded-t-md ${
                                                        isActive
                                                            ? "bg-gradient-to-t from-violet-500 to-zukvo-400"
                                                            : "bg-white/5"
                                                    }`}
                                                    style={{ height: isActive ? `${h}%` : "4px" }}
                                                />
                                            </div>
                                            <div className="text-center">
                                                <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                                    {d[0]}
                                                </div>
                                                <div className="text-[11px] text-zinc-400">
                                                    {d[2]}
                                                </div>
                                                <div
                                                    className={`mt-0.5 text-[10px] font-mono ${
                                                        isActive ? "text-zukvo-300" : "text-zinc-600"
                                                    }`}
                                                >
                                                    {isActive ? `${d[1]}h` : "—"}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
    return (
        <section data-testid="tt-final-cta" className="relative bg-[#0A0A0A] text-white">
            <div className="mx-auto max-w-7xl px-6 md:px-10 pb-20">
                <div
                    className="zk-reveal relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0E0E10] p-10 md:p-16 text-center"
                    style={{
                        backgroundImage:
                            "radial-gradient(60% 80% at 50% 0%, rgba(16,185,129,0.18), transparent 60%)",
                    }}
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                        <Plus className="size-3" /> Get started
                    </span>
                    <h2 className="mt-6 font-heading font-medium text-3xl md:text-5xl tracking-[-0.03em]">
                        Track time the way your team actually works.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/#start"
                            data-testid="tt-final-cta-primary"
                            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors text-white px-6 py-3.5 text-sm font-medium"
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
const _icons = [CheckCircle2];

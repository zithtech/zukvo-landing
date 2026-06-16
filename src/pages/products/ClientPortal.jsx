import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    LayoutDashboard,
    Receipt,
    Calendar,
    FileText,
    CalendarRange,
    Flag,
    GitPullRequest,
    CheckCircle2,
    LifeBuoy,
    Rocket,
    Server,
    Users,
    ChevronRight,
    Crown,
    Wifi,
    Hash,
    Search,
    Mail,
    Phone,
    Briefcase,
    Sparkles,
    Activity,
    Globe2,
    KeyRound,
    ShieldCheck,
    Eye,
    EyeOff,
    Plus,
    Filter,
    LayoutGrid,
    List as ListIcon,
    Clock3,
    DollarSign,
    Building2,
    Send,
    Paperclip,
    AlertCircle,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import ImageSlot from "@/components/ImageSlot";
import clientPortalImg from "@/assets/client-portal.png";

const SUBMODULES = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "sprints", label: "Sprints", icon: CalendarRange },
    { id: "milestones", label: "Milestones", icon: Flag },
    { id: "team", label: "Your Team", icon: Users },
    { id: "invoices", label: "Invoices & Docs", icon: Receipt },
    { id: "meetings", label: "Meetings", icon: Calendar },
    { id: "requests", label: "Requests & Support", icon: GitPullRequest },
];

export default function ClientPortal() {
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
            data-testid="portal-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink"
        >
            <SEO />
            <Nav />
            <Hero />
            <SubmoduleNav />
            <Dashboard />
            <SprintsSection />
            <MilestonesSection />
            <TeamSection />
            <InvoicesDocsSection />
            <MeetingsSection />
            <RequestsSection />
            <FinalCTA />
            <Footer />
        </main>
    );
}

/* ---------------- HERO ---------------- */

function Hero() {
    return (
        <section
            data-testid="portal-hero"
            className="relative pt-32 md:pt-40 pb-16 md:pb-24 zk-mesh"
        >
            <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_75%)] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                <div className="zk-reveal">
                    <Link
                        to="/products"
                        data-testid="portal-breadcrumb"
                        className="inline-flex items-center gap-1.5 text-[12px] text-zinc-500 hover:text-zukvo-600"
                    >
                        <ArrowLeft className="size-3.5" />
                        All products
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-violet-600">
                            <LayoutDashboard className="size-3.5" />
                            Client Portal
                        </div>
                        <h1
                            data-testid="portal-headline"
                            className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink"
                        >
                            A branded window <br />
                            <span className="text-zinc-500">into the work.</span>
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            One secure login. Every sprint, milestone, invoice and message — exactly
                            as your client sees it. No extra tools to learn. No screenshots to send.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/signup"
                                data-testid="portal-cta-primary"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Client Portal
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            <a
                                href="#dashboard"
                                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-medium text-zinc-800 hover:border-zinc-400 transition-colors"
                            >
                                See every feature
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="zk-reveal grid grid-cols-2 gap-3">
                            {[
                                { k: "Branded", v: "Your subdomain + theme" },
                                { k: "Live", v: "Sprints & milestones" },
                                { k: "Pay", v: "Invoices & approvals" },
                                { k: "Talk", v: "Meetings · Tickets" },
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
            data-testid="portal-submodule-nav"
            className="relative bg-[#FAFAFA] border-y border-zinc-200/70"
        >
            <div className="mx-auto max-w-7xl px-6 md:px-10 py-5">
                <div className="w-full flex items-center gap-2 overflow-x-auto no-scrollbar">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 mr-2 shrink-0">
                        In this module
                    </span>
                    {SUBMODULES.map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            data-testid={`portal-pill-${s.id}`}
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

/* ---------------- DASHBOARD ---------------- */

function Dashboard() {
    return (
        <section
            id="dashboard"
            data-testid="portal-dashboard"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                            Dashboard
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            One screen. Their entire engagement.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Outstanding balance, the live sprint, milestone delivery and open
                            tickets — pinned at the top. Below, the active sprint progress,
                            milestones and a live activity feed.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: DollarSign, t: "Outstanding · Sprint · Milestones · Tickets" },
                                { i: Activity, t: "Live activity feed from your team" },
                                { i: FileText, t: "Shared documents + Recent invoices" },
                                { i: ShieldCheck, t: "Magic-link sign-in · no passwords" },
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
                            testid="portal-image-dashboard"
                            src={clientPortalImg}
                            alt="Client Portal Dashboard"
                            label="Client Portal · Home"
                            chromeUrl="trademark.zukvo.app"
                            aspect="auto"
                            objectFit="contain"
                            caption="Client portal dashboard home page."
                        />
                    </div>
                </div>

                {/* Top KPI tiles (mirror the right-side ones in the screenshot) */}
                <div className="zk-reveal mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
                    <CompactKpi icon={Receipt} k="Invoices" v="0" tone="emerald" />
                    <CompactKpi icon={CalendarRange} k="Sprints" v="1" tone="indigo" />
                    <CompactKpi icon={Flag} k="Milestones" v="0" tone="violet" />
                    <CompactKpi icon={LifeBuoy} k="Tickets" v="0" tone="rose" />
                </div>

                {/* 4 main KPI cards */}
                <div className="zk-reveal mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Kpi
                        icon={DollarSign}
                        kicker="Outstanding"
                        value="$0"
                        sub="All caught up"
                        tone="emerald"
                    />
                    <Kpi
                        icon={Activity}
                        kicker="Active sprint"
                        value="100%"
                        sub="Pathematic · 1/1"
                        tone="indigo"
                    />
                    <Kpi
                        icon={Flag}
                        kicker="Milestone progress"
                        value="100%"
                        sub="1/1 items delivered"
                        tone="violet"
                    />
                    <Kpi
                        icon={LifeBuoy}
                        kicker="Open tickets"
                        value="0"
                        sub="Inbox is clear"
                        tone="rose"
                    />
                </div>

                {/* Active sprint + recent activity row */}
                <div className="zk-reveal mt-5 grid lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                            <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                                <CalendarRange className="size-3.5 text-violet-300" /> Active Sprint
                            </div>
                            <span className="inline-flex items-center gap-1 text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 px-2 py-0.5">
                                <span className="size-1.5 rounded-full bg-violet-400" /> Active
                            </span>
                        </div>
                        <div className="mt-4 flex items-end justify-between">
                            <div>
                                <div className="font-heading text-2xl text-white tracking-tight">
                                    Landing Page Version-1
                                </div>
                                <div className="text-[12px] text-zinc-500">Pathematic</div>
                            </div>
                            <div className="font-heading text-3xl text-white">
                                100<span className="text-[14px] text-zinc-500">%</span>
                            </div>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                            <div
                                className="h-full bg-emerald-400"
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-[12px]">
                            <MiniStat k="Done" v="1/1" tone="emerald" />
                            <MiniStat k="Blocked" v="0" tone="rose" />
                            <MiniStat k="Points" v="0/0" tone="indigo" />
                            <MiniStat k="Days left" v="0" tone="amber" />
                        </div>

                        {/* Milestones inline strip */}
                        <div className="mt-5 pt-5 border-t border-white/5">
                            <div className="flex items-center justify-between">
                                <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                                    <Flag className="size-3.5 text-violet-300" /> Milestones
                                </div>
                                <span className="text-[11px] text-zinc-500">
                                    100% · 1/1 done
                                </span>
                            </div>
                            <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center gap-2 text-[13px] text-zinc-100">
                                        <CheckCircle2 className="size-3.5 text-emerald-300" />
                                        Pathematic Landing Page - Version 1
                                    </div>
                                    <span className="text-[12px] text-zinc-300">100%</span>
                                </div>
                                <div className="mt-1.5 h-1.5 rounded-full bg-white/10 overflow-hidden">
                                    <div className="h-full bg-emerald-400 w-full" />
                                </div>
                                <div className="mt-1 text-[11px] text-zinc-500">
                                    Pathematic · 1/1 items
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                        <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                            <Activity className="size-3.5 text-violet-300" /> Recent activity
                        </div>
                        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                            <div className="flex items-start gap-2.5">
                                <span className="inline-flex size-7 items-center justify-center rounded-md bg-violet-500/15 text-violet-300 border border-violet-400/30 shrink-0">
                                    <Flag className="size-3.5" />
                                </span>
                                <div className="text-[12.5px] text-zinc-100 flex-1">
                                    <div>
                                        <b>Milestone completed</b> — Pathematic Landing Page -
                                        Version 1
                                    </div>
                                    <div className="text-[11px] text-zinc-500 mt-1">
                                        Milestones · from Zukvo · 22 May 2026, 17:10 · 1d ago
                                    </div>
                                </div>
                                <ChevronRight className="size-4 text-zinc-600" />
                            </div>
                        </div>
                        <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.02] p-3.5 text-[11.5px] text-zinc-500">
                            <div className="inline-flex items-center gap-1.5 text-zinc-300 text-[12px]">
                                <FileText className="size-3.5 text-amber-300" /> Documents
                                <span className="ml-auto text-zukvo-300 inline-flex items-center gap-1">
                                    View all <ArrowRight className="size-3" />
                                </span>
                            </div>
                            <div className="mt-2 text-center text-zinc-500 py-3">
                                No documents shared
                            </div>
                        </div>
                        <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.02] p-3.5 text-[11.5px] text-zinc-500">
                            <div className="inline-flex items-center gap-1.5 text-zinc-300 text-[12px]">
                                <Receipt className="size-3.5 text-emerald-300" /> Recent Invoices
                                <span className="ml-auto text-zukvo-300 inline-flex items-center gap-1">
                                    View all <ArrowRight className="size-3" />
                                </span>
                            </div>
                            <div className="mt-2 text-center text-zinc-500 py-3">
                                No invoices yet
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Kpi({ icon: Icon, kicker, value, sub, tone = "indigo" }) {
    const bar = {
        indigo: "before:bg-zukvo-500",
        emerald: "before:bg-emerald-400",
        amber: "before:bg-amber-400",
        violet: "before:bg-violet-400",
        rose: "before:bg-rose-400",
    }[tone];
    const text = {
        indigo: "text-zukvo-300",
        emerald: "text-emerald-300",
        amber: "text-amber-300",
        violet: "text-violet-300",
        rose: "text-rose-300",
    }[tone];
    return (
        <div
            className={`relative rounded-2xl border border-white/10 bg-[#0E0E10] p-5 overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 ${bar}`}
        >
            <span
                className={`inline-flex size-9 items-center justify-center rounded-lg bg-white/5 ${text} border border-white/10`}
            >
                <Icon className="size-4" />
            </span>
            <div className={`mt-4 text-[10.5px] uppercase tracking-[0.22em] ${text}`}>
                {kicker}
            </div>
            <div className="mt-1 font-heading text-3xl text-white tracking-tight">{value}</div>
            <div className="text-[11.5px] text-zinc-500">{sub}</div>
        </div>
    );
}

function CompactKpi({ icon: Icon, k, v, tone }) {
    const text = {
        indigo: "text-zukvo-300",
        emerald: "text-emerald-300",
        amber: "text-amber-300",
        violet: "text-violet-300",
        rose: "text-rose-300",
    }[tone];
    return (
        <div className="rounded-xl border border-white/10 bg-[#0E0E10] px-4 py-3 flex items-center justify-between">
            <div className="inline-flex items-center gap-2">
                <Icon className={`size-3.5 ${text}`} />
                <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">{k}</span>
            </div>
            <span className={`font-heading text-xl ${text}`}>{v}</span>
        </div>
    );
}

function MiniStat({ k, v, tone }) {
    const text = {
        indigo: "text-zukvo-300",
        emerald: "text-emerald-300",
        amber: "text-amber-300",
        rose: "text-rose-300",
    }[tone];
    return (
        <div className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">
            <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">{k}</div>
            <div className={`font-heading text-xl mt-0.5 ${text}`}>{v}</div>
        </div>
    );
}

/* ---------------- SPRINTS ---------------- */

function SprintsSection() {
    return (
        <section
            id="sprints"
            data-testid="portal-sprints"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-indigo-300">
                            Sprints
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Live sprint progress — without the standup.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Done, blocked, points, days left — and a velocity chart of past sprints.
                            Everything the client needs to feel the work moving, without pinging
                            your PM.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: CheckCircle2, t: "Done · Blocked · Points · Days left" },
                                { i: Activity, t: "Velocity chart of the last 6 sprints" },
                                { i: Eye, t: "Read-only — never accidentally edited" },
                                { i: Sparkles, t: "Auto-pulled from the dev sprint board" },
                            ].map((b, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2.5 text-[14px] text-zinc-300"
                                >
                                    <b.i className="size-4 text-indigo-300" /> {b.t}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                                <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                                    <CalendarRange className="size-3.5 text-violet-300" /> Active
                                    sprint
                                </div>
                                <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                                    On track
                                </span>
                            </div>
                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-heading text-xl text-white tracking-tight">
                                            Landing Page Version-1
                                        </div>
                                        <div className="text-[11.5px] text-zinc-500">
                                            Pathematic · Sprint #7 · 1 day left
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-heading text-2xl text-emerald-300">
                                            100%
                                        </div>
                                        <div className="text-[11px] text-zinc-500">complete</div>
                                    </div>
                                </div>
                                <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                                    <div className="h-full bg-emerald-400 w-full" />
                                </div>
                            </div>

                            {/* Velocity chart */}
                            <div className="mt-5">
                                <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 mb-2">
                                    Velocity · last 6 sprints
                                </div>
                                <div className="flex items-end gap-2 h-32">
                                    {[55, 72, 60, 84, 90, 100].map((h, i) => (
                                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                            <div
                                                className={`w-full rounded-md ${
                                                    i === 5
                                                        ? "bg-emerald-400"
                                                        : "bg-violet-500/60"
                                                }`}
                                                style={{ height: `${h}%` }}
                                            />
                                            <span className="text-[10px] text-zinc-500">
                                                S{i + 2}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Backlog preview */}
                            <div className="mt-5 pt-5 border-t border-white/5">
                                <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 mb-3">
                                    What landed this sprint
                                </div>
                                <ul className="space-y-2">
                                    {[
                                        ["Hero block + CTA buttons", "shipped"],
                                        ["Pricing matrix + plan toggles", "shipped"],
                                        ["Mobile responsive pass", "shipped"],
                                    ].map(([t, s], i) => (
                                        <li
                                            key={i}
                                            className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-[12.5px]"
                                        >
                                            <span className="inline-flex items-center gap-2 text-zinc-200">
                                                <CheckCircle2 className="size-3.5 text-emerald-300" />
                                                {t}
                                            </span>
                                            <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                                                {s}
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

/* ---------------- MILESTONES ---------------- */

function MilestonesSection() {
    const [tab, setTab] = useState("all");
    return (
        <section
            id="milestones"
            data-testid="portal-milestones"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Milestones
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Where every milestone stands, in plain English.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Each milestone gets a status, dates, a short brief and a transparent
                        breakdown of the work behind it — so the client always knows what's
                        delivered and what's next.
                    </p>
                </div>

                <div className="zk-reveal mt-12 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                    {/* Header */}
                    <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between flex-wrap gap-3">
                        <div className="flex items-center gap-3 flex-wrap">
                            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300 border border-violet-400/30">
                                <Flag className="size-4" />
                            </span>
                            <div>
                                <div className="text-[13px] text-white font-medium">Milestones</div>
                                <div className="text-[11px] text-zinc-500">
                                    Where each milestone of your delivery stands today, with a
                                    transparent breakdown.
                                </div>
                            </div>
                        </div>
                        <div className="inline-flex rounded-md border border-white/10 bg-white/[0.02] p-0.5 text-[11.5px]">
                            <span className="px-2.5 py-1.5 rounded-md bg-violet-500/15 text-violet-200">
                                <LayoutGrid className="size-3.5" />
                            </span>
                            <span className="px-2.5 py-1.5 rounded-md text-zinc-500">
                                <ListIcon className="size-3.5" />
                            </span>
                        </div>
                    </div>

                    {/* Tabs + filters */}
                    <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between flex-wrap gap-3">
                        <div className="inline-flex rounded-full border border-white/10 bg-white/[0.02] p-1 text-[11.5px]">
                            {[
                                { id: "all", t: "All", c: 1 },
                                { id: "progress", t: "In progress", c: 0 },
                                { id: "not", t: "Not started", c: 0 },
                                { id: "done", t: "Completed", c: 1 },
                            ].map((x) => (
                                <button
                                    key={x.id}
                                    type="button"
                                    onClick={() => setTab(x.id)}
                                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 transition-colors ${
                                        tab === x.id
                                            ? "bg-violet-500 text-white"
                                            : "text-zinc-400 hover:text-white"
                                    }`}
                                >
                                    {x.t}
                                    {x.c > 0 && (
                                        <span
                                            className={`text-[10px] rounded-full px-1.5 ${
                                                tab === x.id
                                                    ? "bg-white/20 text-white"
                                                    : "bg-white/10 text-zinc-400"
                                            }`}
                                        >
                                            {x.c}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 flex-wrap text-[11.5px]">
                            <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-zinc-400">
                                <Search className="size-3" /> Search milestone or description…
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-zinc-400">
                                <Briefcase className="size-3" /> All projects · 1
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-zinc-400">
                                <Calendar className="size-3" /> From → To
                            </span>
                        </div>
                    </div>

                    {/* Milestone card */}
                    <div className="p-5">
                        <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/[0.04] p-5">
                            <div className="flex items-start justify-between flex-wrap gap-3">
                                <div className="min-w-0 flex-1">
                                    <div className="inline-flex items-center gap-1.5 rounded-md bg-white/[0.05] border border-white/10 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                                        <Briefcase className="size-2.5" /> Pathematic
                                    </div>
                                    <div className="mt-2 flex items-center gap-2 flex-wrap">
                                        <div className="font-heading text-xl text-white tracking-tight">
                                            Pathematic Landing Page - Version 1
                                        </div>
                                        <span className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                                            <CheckCircle2 className="size-3" /> Delivered 1d ago
                                        </span>
                                    </div>
                                </div>
                                <span className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/15 text-emerald-300 px-2.5 py-0.5">
                                    <CheckCircle2 className="size-3" /> Completed
                                </span>
                            </div>

                            <div className="mt-4">
                                <div className="flex items-center justify-between text-[12px] mb-1.5">
                                    <span className="text-zinc-300">1/1 items</span>
                                    <span className="text-zinc-100 font-medium">100%</span>
                                </div>
                                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                                    <div className="h-full bg-emerald-400 w-full" />
                                </div>
                                <div className="mt-2 flex items-center justify-between text-[11.5px] text-zinc-500">
                                    <span className="inline-flex items-center gap-1.5">
                                        <Calendar className="size-3" /> 18 May → 22 May
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 text-emerald-300">
                                        <CheckCircle2 className="size-3" /> Delivered 22 May
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 rounded-md border border-white/10 bg-white/[0.02] p-3 text-[12.5px] text-zinc-300 leading-relaxed">
                                Design and develop the Version 1 Landing Page for Pathematic with a
                                modern, responsive, and conversion-focused UI/UX. The landing page
                                will establish the initial product presence, communicate the core
                                value proposition clearly, and provide a strong foundation for
                                future marketing and product expansion.
                            </div>

                            <div className="mt-4">
                                <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 mb-2 inline-flex items-center gap-1.5">
                                    <ListIcon className="size-3" /> Breakdown
                                </div>
                                <div className="rounded-md border border-emerald-400/30 bg-emerald-500/[0.07] px-3 py-2 inline-flex items-center gap-2 text-[12.5px] text-emerald-200">
                                    <CheckCircle2 className="size-3.5" />
                                    <span className="line-through opacity-80">Frontend</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- TEAM ---------------- */

function TeamSection() {
    const primary = [
        {
            n: "Mithun Ravichandran",
            r: "Project Manager",
            disc: "PM",
            e: "mithun.rav*********@zithmi.com",
            p: "95247*****",
            proj: "Pathematic",
            note: "Project Manager - Gathering client requirement & Delivery",
            avail: "Available · Monday to Friday (11AM - 8PM)",
            avatar: "MR",
            tone: "violet",
        },
        {
            n: "Divya D",
            r: "Project Manager & Business Team",
            disc: "PM",
            e: "divya.dha********@zithmi.com",
            p: "80722*****",
            proj: "Pathematic",
            note: "Project Manager and Managing Business",
            avail: "Available · Mon–Fri (7PM - 10:30PM) & Sat–Sun (11AM - 6PM)",
            avatar: "DD",
            tone: "amber",
        },
    ];
    const wider = [
        {
            n: "Priyadharshini",
            r: "Software Engineer",
            disc: "ENGINEERING",
            e: "priyadh*******@zithmi.com",
            p: "63821*****",
            proj: "Pathematic",
            note: "Specialised in FullStack Development",
            avatar: "P",
            tone: "indigo",
        },
    ];
    return (
        <section
            id="team"
            data-testid="portal-team"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Your Team
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        The faces behind the work.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Who to contact for what, what they do, and when they're available. Primary
                        contacts pinned. Wider team listed below. No more guessing who handles
                        billing vs delivery.
                    </p>
                </div>

                {/* Top stats */}
                <div className="zk-reveal mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Kpi icon={Users} kicker="Team members" value="3" sub="across disciplines" tone="indigo" />
                    <Kpi icon={Crown} kicker="Primary contacts" value="2" sub="go-to people" tone="amber" />
                    <Kpi icon={Wifi} kicker="Available now" value="3" sub="across timezones" tone="emerald" />
                    <Kpi icon={Hash} kicker="Disciplines" value="2" sub="PM · Engineering" tone="violet" />
                </div>

                {/* Filter bar */}
                <div className="zk-reveal mt-6 flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-500 text-white px-3 py-1 text-[11.5px]">
                        All <span className="text-[10px] bg-white/20 rounded-full px-1.5">3</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] text-zinc-300 px-3 py-1 text-[11.5px]">
                        Engineering <span className="text-[10px] text-zinc-500">1</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] text-zinc-300 px-3 py-1 text-[11.5px]">
                        PM <span className="text-[10px] text-zinc-500">2</span>
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[11.5px] text-zinc-400">
                        <Search className="size-3" /> Search name, role, email…
                    </span>
                </div>

                {/* Primary contacts */}
                <div className="zk-reveal mt-6">
                    <div className="inline-flex items-center gap-2 text-[12.5px] text-zinc-100 mb-3">
                        <Crown className="size-3.5 text-amber-300" />
                        <span className="font-medium">Primary contacts</span>
                        <span className="text-[10px] rounded-full border border-white/10 bg-white/5 text-zinc-400 px-1.5">
                            2
                        </span>
                        <span className="text-zinc-500 text-[11.5px]">· Your go-to people</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {primary.map((p, i) => (
                            <PersonCard key={i} p={p} primary />
                        ))}
                    </div>
                </div>

                {/* Wider team */}
                <div className="zk-reveal mt-6">
                    <div className="inline-flex items-center gap-2 text-[12.5px] text-zinc-100 mb-3">
                        <Users className="size-3.5 text-zukvo-300" />
                        <span className="font-medium">Wider team</span>
                        <span className="text-[10px] rounded-full border border-white/10 bg-white/5 text-zinc-400 px-1.5">
                            1
                        </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {wider.map((p, i) => (
                            <PersonCard key={i} p={p} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function PersonCard({ p, primary }) {
    const avatarTone = {
        violet: "bg-violet-500/20 text-violet-200 border-violet-400/30",
        amber: "bg-amber-500/20 text-amber-200 border-amber-400/30",
        indigo: "bg-zukvo-500/20 text-zukvo-200 border-zukvo-500/30",
    };
    const discTone = {
        PM: "bg-amber-500/10 text-amber-300 border-amber-400/30",
        ENGINEERING: "bg-zukvo-500/10 text-zukvo-300 border-zukvo-500/30",
    };
    return (
        <div
            className={`rounded-2xl border p-5 ${
                primary
                    ? "border-amber-400/30 bg-amber-500/[0.04]"
                    : "border-white/10 bg-[#0E0E10]"
            }`}
        >
            <div className="flex items-center gap-3">
                <span
                    className={`inline-flex size-12 items-center justify-center rounded-xl border text-[12px] font-bold ${avatarTone[p.tone]}`}
                >
                    {p.avatar}
                </span>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                        <div className="font-heading text-lg text-white tracking-tight">
                            {p.n}
                        </div>
                        {primary && (
                            <span className="inline-flex items-center gap-1 text-[9.5px] uppercase tracking-[0.18em] rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 px-2 py-0.5">
                                <Crown className="size-2.5" /> Primary
                            </span>
                        )}
                    </div>
                    <div className="text-[12px] text-zinc-400">{p.r}</div>
                    <span
                        className={`inline-flex items-center text-[10px] uppercase tracking-[0.18em] rounded-md border px-1.5 py-0.5 mt-1 ${discTone[p.disc]}`}
                    >
                        {p.disc}
                    </span>
                </div>
            </div>
            <div className="mt-4 space-y-1.5 text-[12.5px]">
                <div className="inline-flex items-center gap-2 text-zukvo-300 truncate">
                    <Mail className="size-3.5 text-zinc-500" /> {p.e}
                </div>
                <div className="inline-flex items-center gap-2 text-zukvo-300">
                    <Phone className="size-3.5 text-zinc-500" /> {p.p}
                </div>
                <div className="inline-flex items-center gap-2 text-zinc-300">
                    <Briefcase className="size-3.5 text-zinc-500" /> {p.proj}
                </div>
            </div>
            <div className="mt-3 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-[12px] text-zinc-300">
                {p.note}
            </div>
            <div className="mt-3 text-[11.5px] inline-flex items-center gap-1.5 text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-400" /> {p.avail}
            </div>
        </div>
    );
}

/* ---------------- INVOICES & DOCS ---------------- */

function InvoicesDocsSection() {
    return (
        <section
            id="invoices"
            data-testid="portal-invoices"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5 w-full min-w-0">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                            Invoices & Documents
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Pay, sign, and download — in one place.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Every invoice, every PDF, every brief or contract — shared with the
                            client and version-controlled. Pay online or download for accounting.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Receipt, t: "Invoices · Pending · Paid · Overdue" },
                                { i: DollarSign, t: "Online payment via Stripe / Razorpay" },
                                { i: FileText, t: "Documents with version history" },
                                { i: ShieldCheck, t: "E-sign for proposals & contracts" },
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

                    <div className="lg:col-span-7 space-y-4 w-full min-w-0">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                            <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
                                <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                                    <Receipt className="size-3.5 text-emerald-300" /> Invoices
                                </div>
                                <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                                    3 total
                                </span>
                            </div>
                            {[
                                ["INV-2026-005", "Phase 1 · landing build", "$4,200", "Paid", "emerald"],
                                ["INV-2026-004", "Sprint 7 · velocity", "$2,800", "Pending", "amber"],
                                ["INV-2026-003", "Discovery", "$1,950", "Paid", "emerald"],
                            ].map(([id, t, amt, st, tone], i) => (
                                <div
                                    key={i}
                                    className="flex flex-col gap-3 sm:grid sm:grid-cols-12 sm:items-center px-5 py-3 border-t border-white/5 hover:bg-white/[0.02] transition-colors"
                                >
                                    <div className="col-span-5 flex items-center justify-between sm:justify-start gap-2 min-w-0">
                                        <div className="flex items-center gap-2 min-w-0">
                                            <span className="inline-flex size-7 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-400/30 shrink-0">
                                                <Receipt className="size-3.5" />
                                            </span>
                                            <div className="min-w-0">
                                                <div className="font-mono text-[12px] text-zukvo-300">
                                                    {id}
                                                </div>
                                                <div className="text-[11px] text-zinc-500 truncate">
                                                    {t}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:hidden text-[13px] text-white font-medium">{amt}</div>
                                    </div>
                                    <div className="hidden sm:block sm:col-span-3 text-[13px] text-white">{amt}</div>
                                    <div className="flex items-center justify-between sm:contents">
                                        <div className="sm:col-span-2">
                                            <span
                                                className={`text-[10px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 inline-flex items-center gap-1 whitespace-nowrap shrink-0 ${
                                                    tone === "emerald"
                                                        ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                                                        : "border-amber-400/30 bg-amber-500/10 text-amber-300"
                                                }`}
                                            >
                                                <span className="size-1 rounded-full bg-current opacity-80" />
                                                {st}
                                            </span>
                                        </div>
                                        <div className="sm:col-span-2 sm:text-right text-[11.5px]">
                                            {st === "Pending" ? (
                                                <button className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1 whitespace-nowrap shrink-0">
                                                    <DollarSign className="size-3" /> Pay
                                                </button>
                                            ) : (
                                                <span className="text-zinc-500 inline-flex items-center gap-1 whitespace-nowrap shrink-0">
                                                    <ArrowRight className="size-3" /> Download
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                            <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
                                <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                                    <FileText className="size-3.5 text-amber-300" /> Documents
                                </div>
                                <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-white/10 bg-white/5 text-zinc-400 px-2 py-0.5">
                                    4 shared
                                </span>
                            </div>
                            {[
                                ["MSA · mutual NDA included", "v2 · 2.4 MB", "Signed", "emerald"],
                                ["SOW · Phase 1", "v1 · 612 KB", "Signed", "emerald"],
                                ["Brand guidelines", "v3 · 18 MB", "Reference", "indigo"],
                                ["Design review notes", "v1 · 240 KB", "Draft", "amber"],
                            ].map(([t, m, st, tone], i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between px-5 py-3 border-t border-white/5"
                                >
                                    <div className="inline-flex items-center gap-2 min-w-0">
                                        <FileText className="size-3.5 text-zinc-500 shrink-0" />
                                        <div className="min-w-0">
                                            <div className="text-[12.5px] text-zinc-200 truncate">
                                                {t}
                                            </div>
                                            <div className="text-[11px] text-zinc-500">{m}</div>
                                        </div>
                                    </div>
                                    <span
                                        className={`text-[10px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 whitespace-nowrap shrink-0 ${
                                            tone === "emerald"
                                                ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                                                : tone === "amber"
                                                  ? "border-amber-400/30 bg-amber-500/10 text-amber-300"
                                                  : "border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300"
                                        }`}
                                    >
                                        {st}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- MEETINGS ---------------- */

function MeetingsSection() {
    return (
        <section
            id="meetings"
            data-testid="portal-meetings"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5 w-full min-w-0">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                            Meetings
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Every kickoff. Every review. Logged.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Upcoming meetings, past notes, attendees, and the recording link.
                            Clients see what was decided — and what they need to weigh in on next.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Calendar, t: "Upcoming · agenda · attendees" },
                                { i: FileText, t: "Notes auto-summarised by Zai" },
                                { i: Sparkles, t: "Decisions and action items pulled out" },
                                { i: Send, t: "Recording link delivered after the call" },
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

                    <div className="lg:col-span-7 space-y-4 w-full min-w-0">
                        <div className="rounded-2xl border border-zukvo-500/30 bg-zukvo-500/[0.04] p-5">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                                <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                                    <Calendar className="size-3.5 text-zukvo-300" /> Upcoming
                                </div>
                                <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-zukvo-500/30 bg-zukvo-500/15 text-zukvo-300 px-2 py-0.5">
                                    in 2 days
                                </span>
                            </div>
                            <div className="mt-3 font-heading text-xl text-white tracking-tight">
                                Sprint 8 · Kickoff
                            </div>
                            <div className="text-[12px] text-zinc-400">
                                Mon, 25 May 2026 · 4:00 PM – 4:30 PM IST
                            </div>
                            <div className="mt-3 inline-flex -space-x-2">
                                {["MR", "DD", "P", "KK"].map((a, i) => (
                                    <span
                                        key={i}
                                        className={`inline-flex size-7 items-center justify-center rounded-full border-2 border-[#0E0E12] text-[10px] font-bold ${
                                            i === 0
                                                ? "bg-violet-500/30 text-violet-200"
                                                : i === 1
                                                  ? "bg-amber-500/30 text-amber-200"
                                                  : i === 2
                                                    ? "bg-zukvo-500/30 text-zukvo-200"
                                                    : "bg-emerald-500/30 text-emerald-200"
                                        }`}
                                    >
                                        {a}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-4 flex items-center gap-2 flex-wrap">
                                <button className="inline-flex items-center gap-1.5 rounded-full bg-zukvo-500 hover:bg-zukvo-600 text-white text-[11.5px] px-3 py-1.5">
                                    <Globe2 className="size-3.5" /> Join meeting
                                </button>
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 text-white text-[11.5px] px-3 py-1.5">
                                    <Calendar className="size-3.5" /> Add to calendar
                                </span>
                            </div>
                        </div>

                        {[
                            [
                                "Design review",
                                "Fri, 22 May · 11:00 AM",
                                "Approved hero variant B, scheduled mobile pass.",
                                "Notes ready",
                            ],
                            [
                                "Sprint 7 · Demo",
                                "Wed, 20 May · 5:00 PM",
                                "Landing page demoed end-to-end. Pricing matrix shipped.",
                                "Recording",
                            ],
                            [
                                "Project kickoff",
                                "Mon, 13 May · 10:00 AM",
                                "Scope agreed: 5 phases, ~14 weeks. Phase 1 starts immediately.",
                                "Notes ready",
                            ],
                        ].map(([t, w, s, a], i) => (
                            <div
                                key={i}
                                className="rounded-2xl border border-white/10 bg-[#0E0E10] p-4"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="font-heading text-base text-white tracking-tight">
                                        {t}
                                    </div>
                                    <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-white/10 bg-white/5 text-zinc-400 px-2 py-0.5">
                                        {w}
                                    </span>
                                </div>
                                <div className="mt-2 text-[12.5px] text-zinc-400">{s}</div>
                                <div className="mt-2 inline-flex items-center gap-1.5 text-[11.5px] text-zukvo-300">
                                    <FileText className="size-3" /> {a} ·{" "}
                                    <ArrowRight className="size-3" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- REQUESTS & SUPPORT (Change Requests · Approvals · Support · Releases · Environments) ---------------- */

function RequestsSection() {
    return (
        <section
            id="requests"
            data-testid="portal-requests"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Requests & Support
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Decisions, deliveries and emergencies — in one place.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Change requests, approvals, support tickets, releases and environments —
                        every operational lever the client can pull, neatly grouped and audited.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid lg:grid-cols-12 gap-5">
                    {/* Change Requests */}
                    <div className="lg:col-span-6 w-full min-w-0 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                        <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
                            <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                                <GitPullRequest className="size-3.5 text-amber-300" /> Change
                                requests
                            </div>
                            <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 text-white text-[11px] px-2.5 py-1">
                                <Plus className="size-3" /> New
                            </button>
                        </div>
                        {[
                            ["CR-014 · Add inventory module to scope", "Submitted by Krishnan · 2d ago", "In review", "amber"],
                            ["CR-013 · Push delivery to Aug 20", "Submitted by Raj · 5d ago", "Approved", "emerald"],
                            ["CR-012 · Swap Stripe → Razorpay", "Submitted by Krishnan · 8d ago", "Approved", "emerald"],
                        ].map(([t, s, st, tone], i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between px-5 py-3 border-t border-white/5"
                            >
                                <div className="min-w-0">
                                    <div className="text-[12.5px] text-zinc-100 truncate">{t}</div>
                                    <div className="text-[11px] text-zinc-500">{s}</div>
                                </div>
                                <span
                                    className={`text-[10px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 ${
                                        tone === "amber"
                                            ? "border-amber-400/30 bg-amber-500/10 text-amber-300"
                                            : "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                                    }`}
                                >
                                    {st}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Approvals */}
                    <div className="lg:col-span-6 w-full min-w-0 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                        <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
                            <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                                <CheckCircle2 className="size-3.5 text-emerald-300" /> Approvals
                            </div>
                            <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 px-2 py-0.5">
                                1 awaiting you
                            </span>
                        </div>
                        {[
                            ["Invoice INV-2026-004 · $2,800", "Sent · awaiting your sign-off", "Awaiting", "amber", true],
                            ["SOW · Phase 2 add-on", "Signed by Divya · 18 May", "Approved", "emerald", false],
                            ["Brand guidelines v3", "Approved · 12 May", "Approved", "emerald", false],
                        ].map(([t, s, st, tone, action], i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between px-5 py-3 border-t border-white/5"
                            >
                                <div className="min-w-0">
                                    <div className="text-[12.5px] text-zinc-100 truncate">{t}</div>
                                    <div className="text-[11px] text-zinc-500">{s}</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span
                                        className={`text-[10px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 ${
                                            tone === "amber"
                                                ? "border-amber-400/30 bg-amber-500/10 text-amber-300"
                                                : "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                                        }`}
                                    >
                                        {st}
                                    </span>
                                    {action && (
                                        <button className="inline-flex items-center gap-1 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] px-2.5 py-1">
                                            Approve
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Support */}
                    <div className="lg:col-span-7 w-full min-w-0 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                        <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
                            <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                                <LifeBuoy className="size-3.5 text-rose-300" /> Support tickets
                            </div>
                            <button className="inline-flex items-center gap-1.5 rounded-full bg-zukvo-500 hover:bg-zukvo-600 text-white text-[11px] px-2.5 py-1">
                                <Plus className="size-3" /> New ticket
                            </button>
                        </div>
                        {[
                            ["TK-208 · Image upload fails > 5MB", "Priority High · Open · 3h ago", "High", "rose", "Open"],
                            ["TK-207 · Pricing toggle highlight", "Priority Med · In progress · 1d ago", "Medium", "amber", "In progress"],
                            ["TK-201 · Add favicon", "Priority Low · Resolved · 4d ago", "Low", "emerald", "Resolved"],
                        ].map(([t, s, p, pTone, st], i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between px-5 py-3 border-t border-white/5"
                            >
                                <div className="min-w-0">
                                    <div className="text-[12.5px] text-zinc-100 truncate inline-flex items-center gap-2">
                                        <AlertCircle
                                            className={`size-3.5 ${
                                                pTone === "rose"
                                                    ? "text-rose-300"
                                                    : pTone === "amber"
                                                      ? "text-amber-300"
                                                      : "text-emerald-300"
                                            }`}
                                        />
                                        {t}
                                    </div>
                                    <div className="text-[11px] text-zinc-500">{s}</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span
                                        className={`text-[10px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 ${
                                            pTone === "rose"
                                                ? "border-rose-400/30 bg-rose-500/10 text-rose-300"
                                                : pTone === "amber"
                                                  ? "border-amber-400/30 bg-amber-500/10 text-amber-300"
                                                  : "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                                        }`}
                                    >
                                        {p}
                                    </span>
                                    <span className="text-[11px] text-zinc-400">{st}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Releases */}
                    <div className="lg:col-span-5 w-full min-w-0 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                        <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
                            <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                                <Rocket className="size-3.5 text-violet-300" /> Releases
                            </div>
                            <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 px-2 py-0.5">
                                v1.3.0 latest
                            </span>
                        </div>
                        {[
                            ["v1.3.0 · Landing Page Version-1", "22 May 2026 · production", true],
                            ["v1.2.0 · Hero block refactor", "18 May 2026 · production", false],
                            ["v1.1.0 · Pricing matrix", "12 May 2026 · production", false],
                        ].map(([t, s, latest], i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between px-5 py-3 border-t border-white/5"
                            >
                                <div className="min-w-0">
                                    <div className="text-[12.5px] text-zinc-100 truncate inline-flex items-center gap-1.5">
                                        <Rocket className="size-3 text-violet-300" /> {t}
                                    </div>
                                    <div className="text-[11px] text-zinc-500">{s}</div>
                                </div>
                                {latest && (
                                    <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                                        Live
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Environments */}
                    <div className="lg:col-span-12 w-full min-w-0 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                        <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
                            <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                                <Server className="size-3.5 text-amber-300" /> Environments
                            </div>
                            <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-white/10 bg-white/5 text-zinc-400 px-2 py-0.5">
                                3 envs
                            </span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-0 divide-x divide-white/5">
                            {[
                                ["Development", "dev.pathematic.app", "Up", "emerald"],
                                ["Staging", "staging.pathematic.app", "Up", "emerald"],
                                ["Production", "pathematic.app", "Up", "emerald"],
                            ].map(([e, u, st, tone], i) => (
                                <div key={i} className="p-5">
                                    <div className="flex items-center justify-between">
                                        <div className="font-heading text-base text-white tracking-tight">
                                            {e}
                                        </div>
                                        <span
                                            className={`inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 ${
                                                tone === "emerald"
                                                    ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                                                    : "border-rose-400/30 bg-rose-500/10 text-rose-300"
                                            }`}
                                        >
                                            <span className="size-1.5 rounded-full bg-current opacity-80" />
                                            {st}
                                        </span>
                                    </div>
                                    <div className="mt-1 text-[12px] text-zukvo-300 truncate">
                                        {u}
                                    </div>
                                    <div className="mt-3 grid grid-cols-2 gap-2 text-[11.5px]">
                                        <div className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5">
                                            <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                                                Latest deploy
                                            </div>
                                            <div className="text-zinc-200 mt-0.5">v1.3.0</div>
                                        </div>
                                        <div className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5">
                                            <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                                                Last check
                                            </div>
                                            <div className="text-zinc-200 mt-0.5">2m ago</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
        <section data-testid="portal-final-cta" className="relative bg-[#0A0A0A] text-white">
            <div className="mx-auto max-w-7xl px-6 md:px-10 pb-20">
                <div
                    className="zk-reveal relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0E0E10] p-10 md:p-16 text-center"
                    style={{
                        backgroundImage:
                            "radial-gradient(60% 80% at 50% 0%, rgba(139,92,246,0.20), transparent 60%)",
                    }}
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                        <Sparkles className="size-3" /> Get started
                    </span>
                    <h2 className="mt-6 font-heading font-medium text-3xl md:text-5xl tracking-[-0.03em]">
                        Give every client a window into the work.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/signup"
                            data-testid="portal-final-cta-primary"
                            className="inline-flex items-center gap-2 rounded-full text-white px-6 py-3.5 text-sm font-medium"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #6366F1, #8B5CF6, #A855F7)",
                            }}
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
const _unused = [Building2, Clock3, KeyRound, EyeOff, Filter, Paperclip];

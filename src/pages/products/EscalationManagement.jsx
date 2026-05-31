import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    LayoutDashboard,
    Siren,
    Settings2,
    Tag,
    Workflow,
    Plus,
    Search,
    Filter,
    Users,
    User,
    AlertTriangle,
    AlertCircle,
    CheckCircle2,
    Clock3,
    Flame,
    FileText,
    Paperclip,
    UploadCloud,
    ChevronDown,
    ChevronRight,
    Pencil,
    Trash2,
    Sparkles,
    Eye,
    EyeOff,
    Ticket,
    Briefcase,
    Bell,
    Lightbulb,
    ShieldCheck,
    Hash,
    Layers,
    GitBranch,
    Activity,
    Flag,
    Palette,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import ImageSlot from "@/components/ImageSlot";

import escaltionImg from "@/assets/escaltion.png";
import escaltionDrawerImg from "@/assets/escaltion-drawer.png";

const SUBMODULES = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "raise", label: "Raise Escalation", icon: Siren },
    { id: "settings", label: "Master Data", icon: Settings2 },
    { id: "categories", label: "Add Category", icon: Tag },
    { id: "workflow", label: "Workflow & SLA", icon: Workflow },
];

export default function EscalationManagement() {
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
            data-testid="esc-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink overflow-x-clip"
        >
            <Nav />
            <Hero />
            <SubmoduleNav />
            <Dashboard />
            <RaiseEscalation />
            <MasterData />
            <NewCategory />
            <WorkflowSection />
            <FinalCTA />
            <Footer />
        </main>
    );
}

/* ---------------- HERO ---------------- */

function Hero() {
    return (
        <section
            data-testid="esc-hero"
            className="relative pt-32 md:pt-40 pb-16 md:pb-24 zk-mesh"
        >
            <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_75%)] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                <div className="zk-reveal">
                    <Link
                        to="/products"
                        data-testid="esc-breadcrumb"
                        className="inline-flex items-center gap-1.5 text-[12px] text-zinc-500 hover:text-zukvo-600"
                    >
                        <ArrowLeft className="size-3.5" />
                        All products
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-600">
                            <Siren className="size-3.5" />
                            Escalations
                        </div>
                        <h1
                            data-testid="esc-headline"
                            className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink"
                        >
                            Quality & performance — <br />
                            <span className="text-zinc-500">never silent.</span>
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            Manual escalations for quality and performance concerns. Raise with
                            evidence, route to technical leads in seconds, resolve against a
                            24-hour review SLA. Categories, priorities and statuses you control.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/signup"
                                data-testid="esc-cta-primary"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Escalations
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
                                { k: "Raise", v: "Evidence + attachments" },
                                { k: "Route", v: "Leads notified instantly" },
                                { k: "SLA", v: "24-hour review built-in" },
                                { k: "Control", v: "Categories · Priorities · Statuses" },
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
            data-testid="esc-submodule-nav"
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
                            data-testid={`esc-pill-${s.id}`}
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

/* ---------------- DASHBOARD ---------------- */

function Dashboard() {
    const [tab, setTab] = useState("all");
    return (
        <section
            id="dashboard"
            data-testid="esc-dashboard"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                            Dashboard
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Every escalation, at a glance.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Active vs resolved vs pending review. High-priority count. Per-user
                            involvement counters. Filter by status, priority or category — and
                            switch views (All / My Involvement / Raised by Me).
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Siren, t: "Active · High Priority · Pending · Resolved" },
                                { i: Filter, t: "Filter by status · priority · category" },
                                { i: User, t: "Three personal views (All · Mine · Raised)" },
                                { i: Eye, t: "Inline action icons per row" },
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
                        <ImageSlot
                            testid="esc-image-dashboard"
                            src={escaltionImg}
                            alt="Escalations dashboard view"
                            label="Escalations · Dashboard"
                            chromeUrl="zukvo.app/work/escalations"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — Escalations dashboard."
                        />
                    </div>
                </div>

                {/* Header bar */}
                <div className="zk-reveal mt-10 rounded-2xl border border-white/10 bg-[#0E0E10] p-4 flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-rose-500/15 text-rose-300 border border-rose-400/30">
                            <Siren className="size-5" />
                        </span>
                        <div>
                            <div className="text-[13px] text-white font-medium">
                                Quality & Performance Escalations
                            </div>
                            <div className="text-[11px] text-zinc-500">
                                Monitor and resolve manual escalations related to deployment
                                quality and team regressions.
                            </div>
                        </div>
                    </div>
                    <button
                        className="inline-flex items-center gap-1.5 rounded-md text-white text-[12px] font-medium px-3 py-1.5"
                        style={{
                            backgroundImage: "linear-gradient(135deg, #6366F1, #3B82F6)",
                        }}
                    >
                        <Plus className="size-3.5" /> Raise Escalation
                    </button>
                </div>

                {/* KPIs */}
                <div className="zk-reveal mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Kpi
                        icon={AlertCircle}
                        kicker="Active escalations"
                        value="1"
                        sub="Across all categories"
                        tone="indigo"
                        legend={[
                            { l: "0 pending", c: "bg-amber-400" },
                            { l: "1 in progress", c: "bg-zukvo-400" },
                            { l: "0 resolved", c: "bg-emerald-400" },
                        ]}
                    />
                    <Kpi
                        icon={Flame}
                        kicker="High priority"
                        value="0"
                        sub="0% of all open"
                        tone="rose"
                        pct={0}
                    />
                    <Kpi
                        icon={Clock3}
                        kicker="Pending reviews"
                        value="0"
                        sub="Awaiting initial triage"
                        tone="amber"
                        chip={{ icon: User, t: "0 involve you" }}
                    />
                    <Kpi
                        icon={CheckCircle2}
                        kicker="Total resolved"
                        value="0"
                        sub="0% completion rate"
                        tone="emerald"
                        pct={0}
                    />
                </div>

                {/* Tabs */}
                <div className="zk-reveal mt-6 inline-flex rounded-md border border-white/10 bg-white/[0.02] p-0.5 text-[12px]">
                    {[
                        { id: "all", t: "All", c: 1, i: LayoutDashboard },
                        { id: "mine", t: "My Involvement", c: 0, i: User },
                        { id: "raised", t: "Raised by Me", c: 0, i: FileText },
                    ].map((x) => (
                        <button
                            key={x.id}
                            type="button"
                            onClick={() => setTab(x.id)}
                            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-colors ${
                                tab === x.id
                                    ? "bg-zukvo-500/15 text-zukvo-200 border-b-2 border-zukvo-400"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            <x.i className="size-3.5" />
                            {x.t}
                            <span
                                className={`text-[10px] rounded-full px-1.5 ${
                                    tab === x.id
                                        ? "bg-zukvo-500/30 text-zukvo-100"
                                        : "bg-white/10 text-zinc-400"
                                }`}
                            >
                                {x.c}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Filter row */}
                <div className="zk-reveal mt-3 rounded-2xl border border-white/10 bg-[#0E0E10] p-3 flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2 flex-wrap text-[11.5px]">
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-zinc-400">
                            <Search className="size-3" /> Search subject, target, proje…
                        </span>
                        {[
                            { i: AlertCircle, l: "Status" },
                            { i: Flame, l: "Priority" },
                            { i: Tag, l: "Category" },
                        ].map((f, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-zinc-300"
                            >
                                <f.i className="size-3" /> {f.l}
                                <ChevronDown className="size-3 text-zinc-500" />
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 text-[11.5px]">
                        <span className="inline-flex rounded-md border border-white/10 bg-white/[0.02] p-0.5">
                            <span className="px-2.5 py-1 rounded bg-white text-zukvo-ink text-[11px]">
                                Recent
                            </span>
                            <span className="px-2.5 py-1 rounded text-[11px] text-zinc-400">
                                Priority
                            </span>
                        </span>
                        <span className="text-zinc-500">1 of 1</span>
                    </div>
                </div>

                {/* Table */}
                <div className="zk-reveal mt-3 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                    <div className="grid grid-cols-12 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-zinc-500 border-b border-white/5">
                        <div className="col-span-3">Subject & category</div>
                        <div className="col-span-2">Target team</div>
                        <div className="col-span-1">Tickets</div>
                        <div className="col-span-1">Priority</div>
                        <div className="col-span-1">Status</div>
                        <div className="col-span-2">Raised by</div>
                        <div className="col-span-1">Raised date</div>
                        <div className="col-span-1 text-right">Action</div>
                    </div>
                    <div className="grid grid-cols-12 items-center px-5 py-4 border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                        <div className="col-span-3 min-w-0">
                            <div className="text-[13px] text-zinc-100 truncate">
                                dfghjkjhgfdsdfgh
                            </div>
                            <div className="mt-1 inline-flex items-center text-[9.5px] uppercase tracking-[0.18em] rounded-md border border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300 px-1.5 py-0.5 font-mono">
                                SKYFALL
                            </div>
                        </div>
                        <div className="col-span-2 inline-flex items-center gap-2">
                            <span className="inline-flex size-7 items-center justify-center rounded-full bg-zukvo-500/30 text-zukvo-100 border border-zukvo-500/40 text-[10px] font-bold">
                                D
                            </span>
                            <span className="text-[12px] text-zinc-300 truncate">
                                DevTestUser1
                            </span>
                        </div>
                        <div className="col-span-1">
                            <span className="inline-flex items-center text-[10.5px] rounded-md border border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300 px-2 py-0.5 font-mono">
                                002-0578
                            </span>
                        </div>
                        <div className="col-span-1">
                            <span className="inline-flex items-center text-[10.5px] uppercase tracking-[0.18em] rounded-md border border-amber-400/30 bg-amber-500/10 text-amber-300 px-2 py-0.5">
                                TEST2
                            </span>
                        </div>
                        <div className="col-span-1">
                            <span className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.18em] text-violet-300">
                                <span className="size-1.5 rounded-full bg-violet-400" /> test8
                            </span>
                        </div>
                        <div className="col-span-2 inline-flex items-center gap-2">
                            <span className="inline-flex size-7 items-center justify-center rounded-full bg-violet-500/30 text-violet-100 border border-violet-400/40 text-[10px] font-bold">
                                A
                            </span>
                            <span className="text-[12px] text-zinc-300 truncate">Abinash</span>
                        </div>
                        <div className="col-span-1 text-[11.5px] text-zinc-500">Apr 14, 2026</div>
                        <div className="col-span-1 text-right">
                            <span className="inline-flex items-center gap-1.5 text-zinc-500">
                                <Pencil className="size-3.5 hover:text-white cursor-pointer" />
                                <Trash2 className="size-3.5 hover:text-rose-300 cursor-pointer" />
                            </span>
                        </div>
                    </div>
                    <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between text-[11.5px] text-zinc-500 flex-wrap gap-2">
                        <span>1–1 of 1</span>
                        <div className="inline-flex items-center gap-1.5">
                            <ChevronRight className="size-3.5 rotate-180" />
                            <span className="inline-flex size-6 items-center justify-center rounded border border-zukvo-500/30 text-zukvo-300 text-[11px]">
                                1
                            </span>
                            <ChevronRight className="size-3.5" />
                            <span className="inline-flex items-center gap-1 ml-2 rounded-md border border-white/10 bg-white/[0.02] px-2 py-0.5">
                                10 / page <ChevronDown className="size-3" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Kpi({ icon: Icon, kicker, value, sub, tone, legend, pct, chip }) {
    const text = {
        indigo: "text-zukvo-300",
        rose: "text-rose-300",
        amber: "text-amber-300",
        emerald: "text-emerald-300",
    }[tone];
    return (
        <div className="relative rounded-2xl border border-white/10 bg-[#0E0E10] p-5 overflow-hidden">
            <div className="flex items-center justify-between">
                <span
                    className={`inline-flex size-9 items-center justify-center rounded-lg bg-white/5 ${text} border border-white/10`}
                >
                    <Icon className="size-4" />
                </span>
                <span className="font-heading text-3xl text-white">{value}</span>
            </div>
            <div className="mt-3 text-[12px] text-zinc-200 font-medium">{kicker}</div>
            <div className="text-[11px] text-zinc-500">{sub}</div>

            {legend && (
                <div className="mt-3">
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden flex">
                        {legend.map((b, i) => (
                            <div
                                key={i}
                                className={`h-full ${b.c}`}
                                style={{ width: `${100 / legend.length}%` }}
                            />
                        ))}
                    </div>
                    <div className="mt-2 flex items-center gap-3 text-[10.5px] text-zinc-500">
                        {legend.map((b, i) => (
                            <span key={i} className="inline-flex items-center gap-1">
                                <span className={`size-1.5 rounded-sm ${b.c}`} /> {b.l}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            {pct !== undefined && (
                <div className="mt-3">
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                            className={`h-full ${
                                tone === "rose"
                                    ? "bg-rose-400"
                                    : tone === "emerald"
                                      ? "bg-emerald-400"
                                      : "bg-zukvo-400"
                            }`}
                            style={{ width: `${pct}%` }}
                        />
                    </div>
                    <div className="mt-1 text-right text-[10.5px] text-zinc-500">{pct}%</div>
                </div>
            )}
            {chip && (
                <div className="mt-3 inline-flex items-center gap-1.5 text-[10.5px] text-zinc-500">
                    <chip.icon className="size-3" /> {chip.t}
                </div>
            )}
        </div>
    );
}

/* ---------------- RAISE ESCALATION ---------------- */

function RaiseEscalation() {
    return (
        <section
            id="raise"
            data-testid="esc-raise"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Raise Escalation
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Three sections. 24-hour SLA. Done.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Team context, issue particulars, evidence & attachments. Submit and
                        technical leads are notified immediately — with a 24-hour review SLA
                        clock running.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-7">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                            {/* Header */}
                            <div
                                className="px-5 py-4 flex items-start gap-3 border-b border-white/5 relative"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(80% 100% at 100% 0%, rgba(139,92,246,0.18), transparent 65%), radial-gradient(60% 100% at 0% 0%, rgba(99,102,241,0.16), transparent 65%)",
                                }}
                            >
                                <span
                                    className="inline-flex size-10 items-center justify-center rounded-xl text-white"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(135deg, #F97316, #EF4444)",
                                    }}
                                >
                                    <Siren className="size-5" />
                                </span>
                                <div>
                                    <div className="font-heading text-lg text-white tracking-tight">
                                        Raise Manual Escalation
                                    </div>
                                    <div className="text-[11.5px] text-zinc-400">
                                        Flag a quality or performance concern. Technical leads
                                        are notified immediately.
                                    </div>
                                </div>
                            </div>

                            {/* SLA strip */}
                            <div className="px-5 py-2 border-b border-white/5 flex items-center gap-4 text-[11.5px]">
                                <span className="inline-flex items-center gap-1.5 text-amber-300">
                                    <Bell className="size-3.5" /> 24 hr review SLA
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-zinc-400">
                                    <Lightbulb className="size-3.5" /> Be specific — add evidence
                                </span>
                            </div>

                            <div className="p-5 space-y-5">
                                <DrawerStep
                                    n="1"
                                    title="Team Context"
                                    sub="Who is this about and what type of issue?"
                                    icon={User}
                                >
                                    <FormField
                                        label="Target team members"
                                        placeholder="Search by name or role…"
                                    />
                                    <FormField label="Category" placeholder="Issue type" />
                                </DrawerStep>

                                <DrawerStep
                                    n="2"
                                    title="Issue Particulars"
                                    sub="Subject, severity, project and detailed context"
                                    icon={AlertTriangle}
                                >
                                    <div className="col-span-full">
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">
                                            Subject
                                        </div>
                                        <div className="rounded-md border border-white/10 bg-black/30 px-3 py-2 flex items-center justify-between text-[12.5px]">
                                            <span className="text-zinc-500">
                                                e.g. Repeated regressions on Employee Profile
                                                deploy
                                            </span>
                                            <span className="text-[10px] text-zinc-500 shrink-0 ml-3">
                                                0 / 140
                                            </span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2.5 col-span-full">
                                        <FormFieldInline
                                            label="Priority"
                                            icon={Flame}
                                            placeholder="Severity"
                                        />
                                        <FormFieldInline
                                            label="Initial status"
                                            icon={Flag}
                                            placeholder="Status"
                                        />
                                        <FormFieldInline
                                            label="Project"
                                            icon={Briefcase}
                                            placeholder="Related project"
                                        />
                                    </div>
                                    <div className="col-span-full">
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1 inline-flex items-center gap-1.5">
                                            <Ticket className="size-3" /> Related tickets
                                            <span className="normal-case tracking-normal text-[10.5px] text-zinc-500">
                                                select a project to load tickets
                                            </span>
                                        </div>
                                        <div className="rounded-md border border-white/10 bg-black/30 px-3 py-2 text-[12.5px] text-zinc-500">
                                            No project selected
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1 inline-flex items-center gap-1.5">
                                            <FileText className="size-3" /> Detailed description
                                        </div>
                                        <div className="rounded-md border border-white/10 bg-black/30 px-3 py-3 text-[12px] text-zinc-500 h-24">
                                            Provide clear evidence of the issues. Mention
                                            specific instances and reproduction steps.
                                        </div>
                                        <div className="mt-1 text-right text-[10px] text-zinc-500">
                                            0 / 2000
                                        </div>
                                    </div>
                                </DrawerStep>

                                <DrawerStep
                                    n="3"
                                    title="Evidence & attachments"
                                    sub="Optional — screenshots, logs, or reference documents"
                                    icon={Paperclip}
                                >
                                    <div className="col-span-full">
                                        <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center">
                                            <UploadCloud className="size-7 text-zukvo-300 mx-auto" />
                                            <div className="mt-2 text-[13px] text-zinc-200">
                                                Drop files here, or{" "}
                                                <span className="text-zukvo-300 underline">
                                                    click to browse
                                                </span>
                                            </div>
                                            <div className="text-[11px] text-zinc-500 mt-0.5">
                                                Screenshots, logs, or any supporting documents
                                            </div>
                                        </div>
                                    </div>
                                </DrawerStep>
                            </div>

                            <div className="px-5 py-3 border-t border-white/5 flex items-center justify-end gap-2">
                                <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 text-white text-[12px] px-4 py-1.5">
                                    Discard
                                </button>
                                <button
                                    className="inline-flex items-center gap-1.5 rounded-full text-white text-[12px] font-medium px-4 py-1.5"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(135deg, #6366F1, #3B82F6)",
                                    }}
                                >
                                    <ArrowRight className="size-3.5" /> Post Escalation
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-5">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                            <div className="text-[11px] uppercase tracking-[0.22em] text-zukvo-300 font-bold">
                                Built into the form
                            </div>
                            <ul className="mt-4 space-y-2.5 text-[13.5px] text-zinc-300">
                                {[
                                    { i: Bell, t: "Technical leads notified instantly" },
                                    { i: Clock3, t: "24-hour review SLA on submit" },
                                    { i: Lightbulb, t: "'Be specific' prompts in every field" },
                                    { i: Hash, t: "Character counters on subject + description" },
                                    { i: Paperclip, t: "Drag-and-drop evidence upload" },
                                ].map((b, i) => (
                                    <li key={i} className="flex items-center gap-2.5">
                                        <b.i className="size-4 text-zukvo-300" /> {b.t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <ImageSlot
                            testid="esc-image-raise"
                            src={escaltionDrawerImg}
                            alt="Raise Manual Escalation drawer"
                            label="Raise Manual Escalation · Drawer"
                            chromeUrl="zukvo.app/work/escalations/new"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[480px] mx-auto"
                            caption="Live screenshot — Raise Manual Escalation drawer."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function DrawerStep({ n, title, sub, icon: Icon, children }) {
    return (
        <div>
            <div className="flex items-start gap-3 pb-3 border-b border-white/5">
                <span className="inline-flex size-9 items-center justify-center rounded-md border border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300 font-bold text-[12px]">
                    {n}
                </span>
                <div className="flex-1">
                    <div className="text-[12.5px] text-white font-medium inline-flex items-center gap-1.5">
                        <Icon className="size-3.5 text-zukvo-300" /> {title}
                    </div>
                    <div className="text-[11.5px] text-zinc-500">{sub}</div>
                </div>
            </div>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2.5">{children}</div>
        </div>
    );
}

function FormField({ label, placeholder, value }) {
    return (
        <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">
                {label}
            </div>
            <div className="rounded-md border border-white/10 bg-black/30 px-3 py-2 text-[12.5px] flex items-center justify-between">
                <span className={value ? "text-zinc-200" : "text-zinc-500"}>
                    {value || placeholder}
                </span>
                <ChevronDown className="size-3.5 text-zinc-500" />
            </div>
        </div>
    );
}

function FormFieldInline({ label, icon: Icon, placeholder }) {
    return (
        <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1 inline-flex items-center gap-1.5">
                {Icon && <Icon className="size-3" />} {label}
            </div>
            <div className="rounded-md border border-white/10 bg-black/30 px-3 py-2 text-[12.5px] text-zinc-500 flex items-center justify-between">
                <span>{placeholder}</span>
                <ChevronDown className="size-3.5 text-zinc-500" />
            </div>
        </div>
    );
}

/* ---------------- MASTER DATA ---------------- */

function MasterData() {
    const [tab, setTab] = useState("cats");
    return (
        <section
            id="settings"
            data-testid="esc-settings"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-zukvo-500/30 bg-zukvo-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                            <Settings2 className="size-3" /> Master Data
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Categories. Priorities. Statuses. Yours to define.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Three master lists power every escalation. Curate the categories
                            that match your domain, weight the priority levels, and design the
                            lifecycle status flow.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Tag, t: "Categories — issue type buckets" },
                                { i: Flame, t: "Priorities — weighted levels" },
                                { i: Flag, t: "Statuses — lifecycle stages" },
                                { i: ShieldCheck, t: "Retire safely without losing history" },
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

                    <div className="lg:col-span-7 space-y-4">
                        {/* Header bar */}
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-4 flex items-center justify-between flex-wrap gap-3">
                            <div className="flex items-center gap-3">
                                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300 border border-violet-400/30">
                                    <Settings2 className="size-5" />
                                </span>
                                <div>
                                    <div className="text-[13px] text-white font-medium">
                                        Escalation Settings
                                    </div>
                                    <div className="text-[11px] text-zinc-500">
                                        Manage the master data: categories, priorities, and
                                        lifecycle statuses.
                                    </div>
                                </div>
                            </div>
                            <button
                                className="inline-flex items-center gap-1.5 rounded-md text-white text-[12px] font-medium px-3 py-1.5"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(135deg, #6366F1, #3B82F6)",
                                }}
                            >
                                <Plus className="size-3.5" /> Add Category
                            </button>
                        </div>

                        {/* 3 KPI cards */}
                        <div className="grid grid-cols-3 gap-3">
                            <MasterKpi
                                icon={Tag}
                                k="Categories"
                                v="2"
                                sub="Issue type buckets"
                                tone="indigo"
                                legend="2 active · 0 retired"
                            />
                            <MasterKpi
                                icon={Flame}
                                k="Priorities"
                                v="3"
                                sub="Avg weight 1"
                                tone="rose"
                                legend="3 active levels"
                            />
                            <MasterKpi
                                icon={Flag}
                                k="Statuses"
                                v="3"
                                sub="Lifecycle stages"
                                tone="emerald"
                                legend="0 default · 2 final · 1 other"
                            />
                        </div>

                        {/* Tabs + table */}
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                            <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
                                <div className="inline-flex rounded-md border border-white/10 bg-white/[0.02] p-0.5 text-[11.5px]">
                                    {[
                                        { id: "cats", t: "Categories", c: 2, i: Tag },
                                        { id: "prio", t: "Priorities", c: 3, i: Flame },
                                        { id: "stat", t: "Statuses", c: 3, i: Flag },
                                    ].map((x) => (
                                        <button
                                            key={x.id}
                                            type="button"
                                            onClick={() => setTab(x.id)}
                                            className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 transition-colors ${
                                                tab === x.id
                                                    ? "bg-zukvo-500/15 text-zukvo-200"
                                                    : "text-zinc-400"
                                            }`}
                                        >
                                            <x.i className="size-3" />
                                            {x.t}
                                            <span
                                                className={`text-[10px] rounded-full px-1.5 ${
                                                    tab === x.id
                                                        ? "bg-zukvo-500/30 text-zukvo-100"
                                                        : "bg-white/10 text-zinc-400"
                                                }`}
                                            >
                                                {x.c}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                                <span className="text-[11px] text-zinc-500">2 categorys</span>
                            </div>
                            <div className="grid grid-cols-12 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-zinc-500 border-b border-white/5">
                                <div className="col-span-9">Category</div>
                                <div className="col-span-3 text-right">Status</div>
                            </div>
                            {[
                                ["High Production Issue", "High Production Issue", "zukvo"],
                                ["Major Blocker", "Major Blocker", "zukvo"],
                            ].map(([t, s, tone], i) => (
                                <div
                                    key={i}
                                    className="grid grid-cols-12 items-center px-5 py-3 border-t border-white/5"
                                >
                                    <div className="col-span-9 flex items-center gap-3">
                                        <span
                                            className={`inline-flex size-2.5 rounded-full ${
                                                tone === "zukvo"
                                                    ? "bg-zukvo-400"
                                                    : "bg-violet-400"
                                            }`}
                                        />
                                        <div>
                                            <div className="text-[13px] text-zinc-100">{t}</div>
                                            <div className="text-[11px] text-zinc-500">{s}</div>
                                        </div>
                                    </div>
                                    <div className="col-span-3 flex items-center justify-end gap-2">
                                        <span className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                                            <span className="size-1.5 rounded-full bg-emerald-400" />
                                            Active
                                        </span>
                                        <Pencil className="size-3.5 text-zinc-500 hover:text-white cursor-pointer" />
                                        <Trash2 className="size-3.5 text-zinc-500 hover:text-rose-300 cursor-pointer" />
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

function MasterKpi({ icon: Icon, k, v, sub, tone, legend }) {
    const text = {
        indigo: "text-zukvo-300",
        rose: "text-rose-300",
        emerald: "text-emerald-300",
    }[tone];
    const bar = {
        indigo: "bg-zukvo-400",
        rose: "bg-rose-400",
        emerald: "bg-emerald-400",
    }[tone];
    return (
        <div className="relative rounded-2xl border border-white/10 bg-[#0E0E10] p-4 overflow-hidden">
            <div className="flex items-center justify-between">
                <span
                    className={`inline-flex size-8 items-center justify-center rounded-md bg-white/5 ${text} border border-white/10`}
                >
                    <Icon className="size-3.5" />
                </span>
                <span className="font-heading text-2xl text-white">{v}</span>
            </div>
            <div className="mt-2 text-[12px] text-zinc-200 font-medium">{k}</div>
            <div className="text-[10.5px] text-zinc-500">{sub}</div>
            <div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
                <div className={`h-full ${bar} w-3/4`} />
            </div>
            <div className="mt-2 text-[10px] text-zinc-500">{legend}</div>
        </div>
    );
}

/* ---------------- NEW CATEGORY ---------------- */

function NewCategory() {
    const [color, setColor] = useState("blue");
    const swatches = [
        { id: "blue", c: "bg-blue-500", hex: "#3B82F6" },
        { id: "indigo", c: "bg-zukvo-500", hex: "#6366F1" },
        { id: "violet", c: "bg-violet-500", hex: "#8B5CF6" },
        { id: "pink", c: "bg-pink-500", hex: "#EC4899" },
        { id: "rose", c: "bg-rose-500", hex: "#F43F5E" },
        { id: "orange", c: "bg-orange-500", hex: "#F97316" },
        { id: "amber", c: "bg-amber-500", hex: "#F59E0B" },
        { id: "yellow", c: "bg-yellow-400", hex: "#FACC15" },
        { id: "lime", c: "bg-lime-500", hex: "#84CC16" },
        { id: "emerald", c: "bg-emerald-500", hex: "#10B981" },
        { id: "teal", c: "bg-teal-500", hex: "#14B8A6" },
        { id: "cyan", c: "bg-cyan-500", hex: "#06B6D4" },
        { id: "zinc", c: "bg-zinc-400", hex: "#A1A1AA" },
    ];
    const active = swatches.find((s) => s.id === color);
    return (
        <section
            id="categories"
            data-testid="esc-categories"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-violet-300">
                            <Tag className="size-3" /> Add Category
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Define an issue type — name it, colour it, ship it.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            A live preview at the top, a 13-colour palette to pick from, and a
                            single toggle to make the new category visible to escalations
                            immediately on save.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Sparkles, t: "Live preview as you type" },
                                { i: Palette, t: "13-color palette + hex code" },
                                { i: Eye, t: "Visibility toggle per category" },
                                { i: ShieldCheck, t: "Audit log of every change" },
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
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                            <div
                                className="px-5 py-4 flex items-center gap-3 border-b border-white/5"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(80% 100% at 100% 0%, rgba(139,92,246,0.18), transparent 65%)",
                                }}
                            >
                                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300 border border-blue-400/30">
                                    <Tag className="size-5" />
                                </span>
                                <div>
                                    <div className="font-heading text-lg text-white tracking-tight">
                                        New Category
                                    </div>
                                    <div className="text-[11.5px] text-zinc-400">
                                        Define an issue type for grouping escalations.
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 space-y-5">
                                {/* Live preview */}
                                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 flex items-center justify-between">
                                    <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                                        Live preview
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.05] text-zinc-300 px-2.5 py-1 text-[11.5px]">
                                        <span className={`size-2 rounded-full ${active.c}`} />
                                        New category
                                    </span>
                                </div>

                                {/* Identity */}
                                <DrawerStep
                                    n="1"
                                    title="Identity"
                                    sub="A clear name everyone can recognise"
                                    icon={LayoutDashboard}
                                >
                                    <div className="col-span-full">
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">
                                            Display name
                                        </div>
                                        <div className="rounded-md border border-white/10 bg-black/30 px-3 py-2 flex items-center justify-between text-[12.5px]">
                                            <span className="text-zinc-500">
                                                e.g. Deployment Failure
                                            </span>
                                            <span className="text-[10px] text-zinc-500 shrink-0 ml-3">
                                                0 / 64
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">
                                            Description (optional)
                                        </div>
                                        <div className="rounded-md border border-white/10 bg-black/30 px-3 py-3 text-[12px] text-zinc-500 h-16">
                                            Briefly describe when this category should be used
                                        </div>
                                        <div className="mt-1 text-right text-[10px] text-zinc-500">
                                            0 / 240
                                        </div>
                                    </div>
                                </DrawerStep>

                                {/* Appearance */}
                                <div>
                                    <div className="flex items-start gap-3 pb-3 border-b border-white/5">
                                        <span className="inline-flex size-9 items-center justify-center rounded-md border border-emerald-400/30 bg-emerald-500/10 text-emerald-300">
                                            <CheckCircle2 className="size-4" />
                                        </span>
                                        <div>
                                            <div className="text-[12.5px] text-white font-medium inline-flex items-center gap-1.5">
                                                <Palette className="size-3.5 text-emerald-300" />
                                                Appearance
                                            </div>
                                            <div className="text-[11.5px] text-zinc-500">
                                                Pick a color & visibility
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
                                        <div className="flex flex-wrap gap-2">
                                            {swatches.map((s) => (
                                                <button
                                                    key={s.id}
                                                    type="button"
                                                    onClick={() => setColor(s.id)}
                                                    className={`size-8 rounded-md ${s.c} relative ring-2 transition-all ${
                                                        color === s.id
                                                            ? "ring-white"
                                                            : "ring-transparent hover:ring-white/30"
                                                    }`}
                                                >
                                                    {color === s.id && (
                                                        <CheckCircle2 className="absolute inset-0 m-auto size-4 text-white" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11.5px] text-zinc-300">
                                            <span className={`size-3 rounded ${active.c}`} />
                                            <span className="font-mono">{active.hex}</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">
                                        <div className="inline-flex items-center gap-2 text-[12.5px] text-zinc-200">
                                            <span className="inline-flex w-7 h-3.5 rounded-full bg-emerald-500/40 justify-end pr-0.5 items-center">
                                                <span className="size-3 rounded-full bg-white" />
                                            </span>
                                            <Eye className="size-3.5 text-emerald-300" /> Visible
                                            to new escalations
                                        </div>
                                    </div>
                                    <div className="mt-3 rounded-md border border-zukvo-500/30 bg-zukvo-500/[0.05] px-3 py-2 text-[11.5px] text-zinc-300 inline-flex items-center gap-1.5">
                                        <AlertCircle className="size-3.5 text-zukvo-300" /> This
                                        item becomes available the moment you save.
                                    </div>
                                </div>
                            </div>

                            <div className="px-5 py-3 border-t border-white/5 flex items-center justify-end gap-2">
                                <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 text-white text-[12px] px-4 py-1.5">
                                    Cancel
                                </button>
                                <button
                                    className="inline-flex items-center gap-1.5 rounded-full text-white text-[12px] font-medium px-4 py-1.5"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(135deg, #6366F1, #3B82F6)",
                                    }}
                                >
                                    <Plus className="size-3.5" /> Create Category
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- WORKFLOW & SLA ---------------- */

function WorkflowSection() {
    const stages = [
        { i: AlertTriangle, t: "Raised", tone: "rose", d: "Form posted, leads notified within seconds" },
        { i: Clock3, t: "In Review", tone: "amber", d: "24-hour SLA clock starts immediately" },
        { i: Workflow, t: "In Progress", tone: "indigo", d: "Owner assigned, mitigation underway" },
        { i: CheckCircle2, t: "Resolved", tone: "emerald", d: "Closed with summary + linked tickets" },
    ];
    const toneMap = {
        rose: "text-rose-300 bg-rose-500/10 border-rose-400/30",
        amber: "text-amber-300 bg-amber-500/10 border-amber-400/30",
        indigo: "text-zukvo-300 bg-zukvo-500/10 border-zukvo-500/30",
        emerald: "text-emerald-300 bg-emerald-500/10 border-emerald-400/30",
    };
    return (
        <section
            id="workflow"
            data-testid="esc-workflow"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Workflow & SLA
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        From "raised" to "resolved" — without the chase.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Every escalation moves through a lifecycle you control. A 24-hour review
                        SLA pings reviewers automatically. Performance penalties auto-apply if an
                        owner misses their commitment.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid grid-cols-1 md:grid-cols-4 gap-3">
                    {stages.map((s, i) => (
                        <div
                            key={s.t}
                            className="relative rounded-2xl border border-white/10 bg-[#0E0E10] p-5"
                        >
                            <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                                Stage {i + 1}
                            </div>
                            <div className="mt-3 inline-flex items-center gap-2.5">
                                <span
                                    className={`inline-flex size-9 items-center justify-center rounded-lg border ${toneMap[s.tone]}`}
                                >
                                    <s.i className="size-4" />
                                </span>
                                <span className="font-heading text-lg text-white tracking-tight">
                                    {s.t}
                                </span>
                            </div>
                            <p className="mt-2 text-[12.5px] text-zinc-400 leading-relaxed">
                                {s.d}
                            </p>
                            {i < stages.length - 1 && (
                                <ChevronRight className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 size-5 text-zinc-700" />
                            )}
                        </div>
                    ))}
                </div>

                {/* SLA + signals row */}
                <div className="zk-reveal mt-10 grid lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-6 rounded-2xl border border-amber-400/30 bg-amber-500/[0.05] p-5">
                        <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-amber-300 font-bold">
                            <Bell className="size-3" /> 24-hour review SLA
                        </div>
                        <div className="mt-3 font-heading text-2xl text-white tracking-tight">
                            Reviewers notified instantly.
                        </div>
                        <p className="mt-2 text-[13px] text-zinc-400 leading-relaxed">
                            The moment an escalation is posted, target team members receive an
                            inline notification + email. A 24-hour clock starts. Missed
                            acknowledgements roll up into the team's performance score.
                        </p>
                        <div className="mt-4 grid grid-cols-3 gap-3 text-center text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                            <div>
                                <div className="font-heading text-2xl text-amber-300">24h</div>
                                <div>Review</div>
                            </div>
                            <div>
                                <div className="font-heading text-2xl text-rose-300">3</div>
                                <div>Auto-pings</div>
                            </div>
                            <div>
                                <div className="font-heading text-2xl text-emerald-300">-2pt</div>
                                <div>Per missed</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                        <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-zukvo-300 font-bold">
                            <Activity className="size-3" /> Ties into the OS
                        </div>
                        <div className="mt-3 font-heading text-2xl text-white tracking-tight">
                            Linked everywhere it should be.
                        </div>
                        <ul className="mt-4 space-y-2.5 text-[13.5px] text-zinc-300">
                            {[
                                { i: Ticket, t: "Attach to related tickets" },
                                {
                                    i: GitBranch,
                                    t: "Drops onto Performance Management as penalty",
                                },
                                { i: Layers, t: "Bucketed by configurable category" },
                                { i: Bell, t: "Notification + email + activity timeline" },
                            ].map((b, i) => (
                                <li key={i} className="flex items-center gap-2.5">
                                    <b.i className="size-4 text-zukvo-300" /> {b.t}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
    return (
        <section data-testid="esc-final-cta" className="relative bg-[#0A0A0A] text-white">
            <div className="mx-auto max-w-7xl px-6 md:px-10 pb-20">
                <div
                    className="zk-reveal relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0E0E10] p-10 md:p-16 text-center"
                    style={{
                        backgroundImage:
                            "radial-gradient(60% 80% at 50% 0%, rgba(99,102,241,0.20), transparent 60%)",
                    }}
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-zukvo-500/30 bg-zukvo-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                        <Sparkles className="size-3" /> Get started
                    </span>
                    <h2 className="mt-6 font-heading font-medium text-3xl md:text-5xl tracking-[-0.03em]">
                        Surface the quality issues. Fix the team friction.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/signup"
                            data-testid="esc-final-cta-primary"
                            className="inline-flex items-center gap-2 rounded-full text-white px-6 py-3.5 text-sm font-medium"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #6366F1, #3B82F6)",
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
const _unused = [EyeOff, Users];

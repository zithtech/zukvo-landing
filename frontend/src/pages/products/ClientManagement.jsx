import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    LayoutDashboard,
    Building2,
    UserPlus,
    Users,
    FolderKanban,
    KeyRound,
    Calendar,
    GitPullRequest,
    CheckCircle2,
    Server,
    LifeBuoy,
    Flag,
    Rocket,
    FileText,
    ShieldCheck,
    DollarSign,
    Landmark,
    Globe2,
    Hash,
    Pencil,
    ExternalLink,
    Filter,
    Search,
    Plus,
    Download,
    ChevronRight,
    AlertTriangle,
    Activity,
    Briefcase,
    MapPin,
    Mail,
    Copy,
    Sparkles,
    Eye,
    EyeOff,
    BadgeCheck,
    Wallet,
    Workflow,
    Settings2,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import ImageSlot from "@/components/ImageSlot";

const SUBMODULES = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "create", label: "Create Client", icon: UserPlus },
    { id: "profile", label: "Client Profile", icon: Building2 },
    { id: "contacts", label: "Contacts & Team", icon: Users },
    { id: "projects", label: "Projects & Approvals", icon: FolderKanban },
    { id: "portal", label: "Portal Access", icon: KeyRound },
    { id: "activity", label: "Activity & Ops", icon: Activity },
];

export default function ClientManagement() {
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
            data-testid="clients-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink overflow-x-clip"
        >
            <Nav />
            <Hero />
            <SubmoduleNav />
            <Dashboard />
            <CreateClient />
            <ClientProfile />
            <ContactsSection />
            <ProjectsSection />
            <PortalSection />
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
            data-testid="clients-hero"
            className="relative pt-32 md:pt-40 pb-16 md:pb-24 zk-mesh"
        >
            <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_75%)] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                <div className="zk-reveal">
                    <Link
                        to="/products"
                        data-testid="clients-breadcrumb"
                        className="inline-flex items-center gap-1.5 text-[12px] text-zinc-500 hover:text-zukvo-600"
                    >
                        <ArrowLeft className="size-3.5" />
                        All products
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-600">
                            <Building2 className="size-3.5" />
                            Client Management
                        </div>
                        <h1
                            data-testid="clients-headline"
                            className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink"
                        >
                            Every client, <br />
                            <span className="text-zinc-500">every detail — one place.</span>
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            Central client records with contacts, projects, billing, compliance,
                            banking, portal access, approvals and a full activity timeline — all on
                            one screen.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/signup"
                                data-testid="clients-cta-primary"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Client Management
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
                                { k: "Setup", v: "26-field guided record" },
                                { k: "Risk", v: "Low / Medium / High" },
                                { k: "Portal", v: "Branded client access" },
                                { k: "Audit", v: "Every change tracked" },
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
            data-testid="clients-submodule-nav"
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
                            data-testid={`clients-pill-${s.id}`}
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
    const rows = [
        ["TR", "Trademark", "CL-000003", "technology", "India", "Direct", "Unassigned", 1, "Low", "PROSPECT", "violet", "emerald"],
        ["P(", "PA (Square) Enterprises", "CL-000002", "Finance & Accounting", "India", "Direct", "Unassigned", 1, "Medium", "ACTIVE", "rose", "emerald"],
        ["JG", "J2B GLOBAL LLC USA", "CL-000001", "IT Recruitment", "USA", "Direct", "Unassigned", 1, "High", "ACTIVE", "amber", "emerald"],
    ];
    const riskTone = {
        Low: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
        Medium: "border-amber-400/30 bg-amber-500/10 text-amber-300",
        High: "border-rose-400/30 bg-rose-500/10 text-rose-300",
    };
    const statusTone = {
        ACTIVE: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
        PROSPECT: "border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300",
    };
    const avatarTone = {
        violet: "bg-violet-500/20 text-violet-200 border-violet-400/30",
        rose: "bg-rose-500/20 text-rose-200 border-rose-400/30",
        amber: "bg-amber-500/20 text-amber-200 border-amber-400/30",
    };

    return (
        <section
            id="dashboard"
            data-testid="clients-dashboard"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                            Dashboard
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Monitor every client entity profile.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Live counts for clients, projects and contract value. Jump straight to a
                            client or project. Filter by risk and status. Export the whole list with
                            one click.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Building2, t: "Total · Projects · Active · Contract value" },
                                { i: Filter, t: "Filter by status, type, risk" },
                                { i: Search, t: "Jump to client or project instantly" },
                                { i: Download, t: "Export ready for accounting" },
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
                            testid="clients-image-dashboard"
                            label="Client Management — Dashboard"
                            chromeUrl="zukvo.app/admin/clients"
                            aspect="16/10"
                            caption="Replace with your Client Management dashboard screenshot."
                        />
                    </div>
                </div>

                {/* KPIs */}
                <div className="zk-reveal mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Kpi
                        icon={Users}
                        kicker="Total clients"
                        value="3"
                        sub="2 active · 1 other"
                        tone="indigo"
                        bar
                    />
                    <Kpi
                        icon={FolderKanban}
                        kicker="Total projects"
                        value="3"
                        sub="Across all clients"
                        tone="violet"
                        bar
                    />
                    <Kpi
                        icon={BadgeCheck}
                        kicker="Active projects"
                        value="2"
                        sub="67% of total"
                        tone="emerald"
                        bar
                    />
                    <Kpi
                        icon={Wallet}
                        kicker="Contract value"
                        value="$8"
                        sub="Avg $2.667 per client"
                        tone="violet"
                        bar
                    />
                </div>

                {/* Filters & nav */}
                <div className="zk-reveal mt-10 rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                        Filters & quick navigation
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-3 justify-between">
                        <div className="inline-flex rounded-full border border-white/10 bg-white/[0.02] p-1 text-[11.5px]">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-zukvo-500 text-white px-3 py-1">
                                <ShieldCheck className="size-3" /> All
                                <span className="text-[10px] rounded-full bg-white/15 px-1.5">3</span>
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-zinc-400">
                                <CheckCircle2 className="size-3" /> Active
                                <span className="text-[10px] text-zinc-500">2</span>
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-zinc-400">
                                <AlertTriangle className="size-3" /> High risk
                                <span className="text-[10px] text-zinc-500">1</span>
                            </span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap text-[11.5px]">
                            <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-zinc-400">
                                <Building2 className="size-3" /> Jump to client…
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-zinc-400">
                                <FolderKanban className="size-3" /> Jump to project…
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-zinc-400">
                                <Sparkles className="size-3" /> Client type
                            </span>
                            <span className="text-zinc-500">Showing 1–3 of 3</span>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="zk-reveal mt-5 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                    <div className="grid grid-cols-12 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-zinc-500 border-b border-white/5">
                        <div className="col-span-4">Client</div>
                        <div className="col-span-1">Type</div>
                        <div className="col-span-2">Account manager</div>
                        <div className="col-span-2">Projects</div>
                        <div className="col-span-1">Risk</div>
                        <div className="col-span-2">Status</div>
                    </div>
                    {rows.map((r, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-12 items-center px-5 py-4 border-t border-white/5 hover:bg-white/[0.02] transition-colors"
                        >
                            <div className="col-span-4 flex items-center gap-3 min-w-0">
                                <span
                                    className={`inline-flex size-9 items-center justify-center rounded-lg border text-[11px] font-bold shrink-0 ${avatarTone[r[10]]}`}
                                >
                                    {r[0]}
                                </span>
                                <div className="min-w-0">
                                    <div className="text-[13px] text-zinc-100 truncate inline-flex items-center gap-1.5">
                                        {r[1]}
                                        <ExternalLink className="size-3 text-zinc-600" />
                                    </div>
                                    <div className="text-[11px] text-zinc-500 inline-flex items-center gap-2">
                                        <span className="font-mono">{r[2]}</span>
                                        <span>·</span>
                                        <span>{r[3]}</span>
                                        <span>·</span>
                                        <span className="inline-flex items-center gap-1">
                                            <Globe2 className="size-3" /> {r[4]}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 px-2 py-0.5">
                                    {r[5]}
                                </span>
                            </div>
                            <div className="col-span-2 text-[12px] text-zinc-400">{r[6]}</div>
                            <div className="col-span-2 text-[12px] text-zinc-300 inline-flex items-center gap-1.5">
                                <span className="inline-flex size-5 items-center justify-center rounded bg-violet-500/15 text-violet-300 border border-violet-400/30">
                                    <FolderKanban className="size-3" />
                                </span>
                                {r[7]} project
                            </div>
                            <div className="col-span-1">
                                <span
                                    className={`text-[10.5px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 inline-flex items-center gap-1 ${riskTone[r[8]]}`}
                                >
                                    <span className="size-1.5 rounded-full bg-current opacity-80" />
                                    {r[8]}
                                </span>
                            </div>
                            <div className="col-span-2 inline-flex items-center gap-2">
                                <span
                                    className={`text-[10.5px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 inline-flex items-center gap-1 ${statusTone[r[9]]}`}
                                >
                                    <span className="size-1.5 rounded-full bg-current opacity-80" />
                                    {r[9]}
                                </span>
                                <Eye className="size-3.5 text-zinc-500 hover:text-zinc-300" />
                                <Settings2 className="size-3.5 text-zinc-500 hover:text-zinc-300" />
                            </div>
                        </div>
                    ))}
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

/* ---------------- CREATE CLIENT ---------------- */

function CreateClient() {
    return (
        <section
            id="create"
            data-testid="clients-create"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Create Client
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        A complete record — in 4 guided steps.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Twenty-six fields, broken into four bite-sized steps. Real-time progress at
                        the top, per-step counters in the sidebar, and a "required-field dot" on
                        every must-have input.
                    </p>
                </div>

                <div className="zk-reveal mt-12 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                    {/* Top bar */}
                    <div className="px-5 py-3.5 border-b border-white/5 flex items-center justify-between flex-wrap gap-3">
                        <div className="flex items-center gap-3">
                            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-zukvo-500/10 text-zukvo-300 border border-zukvo-500/20">
                                <Building2 className="size-4" />
                            </span>
                            <div>
                                <div className="text-[13px] text-white font-medium">
                                    Create New Client
                                </div>
                                <div className="text-[11px] text-zinc-500">
                                    Set up a complete client record with billing, compliance, and
                                    banking details.
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <div className="w-32 h-1.5 rounded-full bg-white/10 overflow-hidden">
                                    <div
                                        className="h-full"
                                        style={{
                                            width: "8%",
                                            backgroundImage:
                                                "linear-gradient(90deg, #6366F1, #8B5CF6)",
                                        }}
                                    />
                                </div>
                                <span className="text-[11px] text-zinc-400">8%</span>
                            </div>
                            <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 text-white text-[11.5px] px-3 py-1.5">
                                Cancel
                            </button>
                            <button
                                className="inline-flex items-center gap-1.5 rounded-full text-white text-[11.5px] font-medium px-3 py-1.5"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(135deg, #6366F1, #8B5CF6, #A855F7)",
                                }}
                            >
                                <Plus className="size-3.5" /> Create Client
                            </button>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12">
                        {/* Stepper sidebar */}
                        <div className="lg:col-span-4 border-r border-white/5 p-5 lg:p-6">
                            <div className="flex items-center justify-between">
                                <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                                    Setup steps
                                </div>
                                <span className="text-[11px] text-zinc-400">
                                    <span className="text-white">2</span>/26
                                </span>
                            </div>
                            <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
                                <div
                                    className="h-full"
                                    style={{
                                        width: "8%",
                                        backgroundImage:
                                            "linear-gradient(90deg, #6366F1, #8B5CF6)",
                                    }}
                                />
                            </div>

                            <div className="mt-6 space-y-2.5">
                                {[
                                    {
                                        n: "1",
                                        i: Building2,
                                        t: "Company Overview",
                                        d: "0/8",
                                        active: true,
                                    },
                                    {
                                        n: "2",
                                        i: ShieldCheck,
                                        t: "Compliance & Finance",
                                        d: "1/8",
                                        w: 12,
                                    },
                                    { n: "3", i: Activity, t: "Operations", d: "1/5", w: 20 },
                                    {
                                        n: "4",
                                        i: Landmark,
                                        t: "Banking Information",
                                        d: "0/5",
                                    },
                                ].map((s) => (
                                    <div
                                        key={s.n}
                                        className={`rounded-xl border p-3 ${
                                            s.active
                                                ? "border-zukvo-500/40 bg-zukvo-500/5"
                                                : "border-white/10 bg-white/[0.02]"
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2.5">
                                                <span
                                                    className={`inline-flex size-7 items-center justify-center rounded-md text-[11px] font-bold ${
                                                        s.active
                                                            ? "bg-zukvo-500 text-white"
                                                            : "bg-white/10 text-zinc-300"
                                                    }`}
                                                >
                                                    {s.n}
                                                </span>
                                                <s.i className="size-3.5 text-zinc-400" />
                                                <span className="text-[13px] text-white">
                                                    {s.t}
                                                </span>
                                            </div>
                                            <span className="text-[10.5px] text-zinc-500">
                                                {s.d}
                                            </span>
                                        </div>
                                        <div className="mt-2 h-1 rounded-full bg-white/5 overflow-hidden">
                                            <div
                                                className="h-full bg-zukvo-500"
                                                style={{
                                                    width: s.active
                                                        ? "10%"
                                                        : `${s.w || 0}%`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 rounded-xl border border-violet-400/30 bg-violet-500/5 p-3 text-[11.5px] text-zinc-300 inline-flex items-center gap-2">
                                <Sparkles className="size-3.5 text-violet-300" /> Required fields
                                have a <span className="size-1.5 rounded-full bg-violet-400" /> dot.
                            </div>
                        </div>

                        {/* Form preview */}
                        <div className="lg:col-span-8 p-5 lg:p-7 space-y-5">
                            <StepCard
                                n="01"
                                tone="indigo"
                                icon={Building2}
                                title="Company Overview"
                                sub="Identity and where they operate. The company name and client type are required."
                            >
                                <div className="grid grid-cols-2 gap-3">
                                    <FormField label="Company Name" placeholder="Acme Corporation" required />
                                    <FormField label="Legal Name" placeholder="Acme Corporation Ltd." />
                                    <FormField label="Client Type" placeholder="Select type" required />
                                    <FormField label="Industry" placeholder="Technology, Healthcare…" />
                                    <FormField label="Company Size" placeholder="Select size" />
                                    <FormField label="Year of Incorporation" placeholder="YYYY" />
                                    <FormField label="Country" placeholder="United States" />
                                    <FormField label="Website" placeholder="https://acme.com" />
                                </div>
                            </StepCard>

                            <StepCard
                                n="02"
                                tone="emerald"
                                icon={ShieldCheck}
                                title="Compliance & Finance"
                                sub="Billing contact, tax registration details, and contract economics"
                            >
                                <FormField label="Billing Contact Email" placeholder="finance@acme.com" full />
                            </StepCard>

                            <StepCard
                                n="04"
                                tone="violet"
                                icon={Landmark}
                                title="Banking Information"
                                sub="Where and how invoice payments will be settled."
                            >
                                <div className="grid grid-cols-2 gap-3">
                                    <FormField label="Bank Name" placeholder="HSBC Bank" />
                                    <FormField label="Account Number" placeholder="•••••••1234" />
                                </div>
                            </StepCard>

                            <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 flex items-center justify-between text-[11.5px]">
                                <span className="inline-flex items-center gap-2 text-emerald-300">
                                    <CheckCircle2 className="size-3.5" /> 2 of 26 fields filled · new client
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-zinc-500">Cancel</span>
                                    <span
                                        className="inline-flex items-center gap-1 rounded-md text-white font-medium px-3 py-1"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(135deg, #6366F1, #8B5CF6)",
                                        }}
                                    >
                                        <Plus className="size-3" /> Create Client
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="zk-reveal mt-6">
                    <ImageSlot
                        testid="clients-image-create"
                        label="Create New Client · Stepper"
                        chromeUrl="zukvo.app/admin/clients/new"
                        aspect="16/10"
                        caption="Replace with your Create Client screenshot."
                    />
                </div>
            </div>
        </section>
    );
}

function StepCard({ n, tone, icon: Icon, title, sub, children }) {
    const toneMap = {
        indigo: "text-zukvo-300 bg-zukvo-500/10 border-zukvo-500/30",
        emerald: "text-emerald-300 bg-emerald-500/10 border-emerald-400/30",
        violet: "text-violet-300 bg-violet-500/10 border-violet-400/30",
    };
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <div className="flex items-start gap-3">
                <span
                    className={`inline-flex size-9 items-center justify-center rounded-md border font-bold text-[11px] ${toneMap[tone]}`}
                >
                    <Icon className="size-4" />
                </span>
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <span className="text-[10.5px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                            {n}
                        </span>
                        <span className="font-heading text-base text-white tracking-tight">
                            {title}
                        </span>
                    </div>
                    <div className="text-[11.5px] text-zinc-500 mt-0.5">{sub}</div>
                </div>
            </div>
            <div className="mt-3">{children}</div>
        </div>
    );
}

function FormField({ label, placeholder, value, full, required }) {
    return (
        <div className={full ? "col-span-full" : ""}>
            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1 inline-flex items-center gap-1">
                {label}
                {required && <span className="size-1 rounded-full bg-violet-400" />}
            </div>
            <div className="rounded-md border border-white/10 bg-black/30 px-3 py-2 text-[12.5px]">
                <span className={value ? "text-zinc-200" : "text-zinc-500"}>
                    {value || placeholder}
                </span>
            </div>
        </div>
    );
}

/* ---------------- CLIENT PROFILE ---------------- */

function ClientProfile() {
    const [activeTab, setActiveTab] = useState("overview");
    const tabs = [
        { id: "overview", label: "Overview", icon: LayoutDashboard, badge: null },
        { id: "contacts", label: "Contacts", icon: Users, badge: "1" },
        { id: "projects", label: "Projects", icon: FolderKanban, badge: "1" },
        { id: "documents", label: "Documents", icon: FileText },
        { id: "portal", label: "Portal Access", icon: KeyRound },
        { id: "meetings", label: "Meetings", icon: Calendar },
        { id: "changes", label: "Change Requests", icon: GitPullRequest },
        { id: "approvals", label: "Approvals", icon: CheckCircle2 },
        { id: "environments", label: "Environments", icon: Server },
        { id: "team", label: "Team", icon: Users },
        { id: "tickets", label: "Support Tickets", icon: LifeBuoy },
        { id: "milestones", label: "Milestones", icon: Flag },
        { id: "releases", label: "Releases", icon: Rocket },
    ];

    return (
        <section
            id="profile"
            data-testid="clients-profile"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Client Profile
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        One profile. Thirteen lenses.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Overview, contacts, projects, documents, portal access, meetings, change
                        requests, approvals, environments, team, support tickets, milestones and
                        releases — every angle on a client, one click away.
                    </p>
                </div>

                <div className="zk-reveal mt-12 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                    {/* Top bar */}
                    <div className="px-5 py-3.5 border-b border-white/5 flex items-center justify-between flex-wrap gap-3">
                        <div className="flex items-center gap-2 text-[12px] text-zinc-400">
                            <ArrowLeft className="size-4 text-zinc-500" />
                            <span className="inline-flex items-center gap-1 text-zinc-500">
                                <Building2 className="size-3.5" /> Clients
                            </span>
                            <ChevronRight className="size-3 text-zinc-700" />
                            <span className="text-zinc-200">Trademark</span>
                        </div>
                        <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 text-white text-[11.5px] px-3 py-1.5">
                            <Pencil className="size-3.5" /> Edit profile
                        </button>
                    </div>

                    <div className="grid lg:grid-cols-12">
                        {/* Sidebar */}
                        <div className="lg:col-span-3 border-r border-white/5 p-3">
                            <div className="space-y-0.5">
                                {tabs.map((t) => {
                                    const active = t.id === activeTab;
                                    return (
                                        <button
                                            key={t.id}
                                            type="button"
                                            onClick={() => setActiveTab(t.id)}
                                            data-testid={`clients-profile-tab-${t.id}`}
                                            className={`w-full text-left flex items-center gap-2.5 rounded-lg px-3 py-2 text-[12.5px] transition-colors ${
                                                active
                                                    ? "bg-zukvo-500/15 text-white border border-zukvo-500/30"
                                                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04] border border-transparent"
                                            }`}
                                        >
                                            <t.icon
                                                className={`size-3.5 ${
                                                    active ? "text-zukvo-300" : "text-zinc-500"
                                                }`}
                                            />
                                            <span className="flex-1">{t.label}</span>
                                            {t.badge && (
                                                <span className="text-[10px] rounded-full border border-white/10 bg-white/5 text-zinc-400 px-1.5 py-0.5">
                                                    {t.badge}
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Main */}
                        <div className="lg:col-span-9 p-5 lg:p-6 space-y-5">
                            {/* Header card */}
                            <div
                                className="relative overflow-hidden rounded-2xl border border-violet-400/30 p-5 md:p-6"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(60% 100% at 0% 0%, rgba(139,92,246,0.32), transparent 65%), radial-gradient(60% 100% at 100% 0%, rgba(99,102,241,0.28), transparent 65%)",
                                    backgroundColor: "#0E0E12",
                                }}
                            >
                                <div className="flex items-center gap-4 flex-wrap">
                                    <span className="inline-flex size-14 items-center justify-center rounded-xl bg-violet-500/20 text-violet-200 border border-violet-400/30 font-heading text-lg">
                                        TR
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-heading text-2xl md:text-3xl text-white tracking-tight">
                                            Trademark
                                        </div>
                                        <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[11.5px] text-zinc-300">
                                            <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono">
                                                <Hash className="size-3 text-zinc-500" />
                                                CL-000003
                                                <Copy className="size-3 text-zinc-500" />
                                            </span>
                                            <span className="inline-flex items-center gap-1">
                                                <Briefcase className="size-3" /> technology
                                            </span>
                                            <span className="inline-flex items-center gap-1">
                                                <Globe2 className="size-3" /> India
                                            </span>
                                            <span className="inline-flex items-center gap-1 text-zukvo-300 hover:text-zukvo-200">
                                                <ExternalLink className="size-3" />{" "}
                                                zithmi.zithspace.com/dashboard
                                            </span>
                                            <span className="inline-flex items-center gap-1">
                                                <Calendar className="size-3" /> Onboarded 23 May 2026
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300 px-2.5 py-0.5">
                                            <span className="size-1.5 rounded-full bg-zukvo-400" />
                                            Prospect
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2.5 py-0.5">
                                            <span className="size-1.5 rounded-full bg-emerald-400" />
                                            Low risk
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 px-2.5 py-0.5">
                                            <Workflow className="size-3" /> Direct
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Stat tiles */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                <ProfileStat icon={Users} kicker="Active contacts" value="1" sub="1 total contacts" tone="violet" />
                                <ProfileStat icon={Briefcase} kicker="Resource allocations" value="0 / 0" sub="Currently engaged" tone="emerald" />
                                <ProfileStat icon={FolderKanban} kicker="Total projects" value="1" sub="Active engagements" tone="amber" />
                                <ProfileStat icon={Wallet} kicker="Projected budget" value="$6" sub="Across all projects" tone="violet" />
                            </div>

                            {/* Detail cards 2x2 */}
                            <div className="grid lg:grid-cols-2 gap-4">
                                <DetailCard
                                    icon={Building2}
                                    title="Corporate Profile"
                                    sub="Legal and corporate identity details"
                                    tone="indigo"
                                >
                                    <ProfileRow icon={Briefcase} k="Legal entity" v="Truck" />
                                    <ProfileRow icon={ShieldCheck} k="Client category" v={<Pill tone="violet">Direct</Pill>} />
                                    <ProfileRow icon={Activity} k="Industry sector" v="technology" />
                                    <ProfileRow icon={Users} k="Company size" v="1-10" />
                                    <ProfileRow icon={Globe2} k="Website" v={<span className="text-zukvo-300 truncate">https://zithmi.zithspace.com/dashboard</span>} />
                                    <ProfileRow icon={FileText} k="Registration no." v="6676868" />
                                </DetailCard>

                                <DetailCard
                                    icon={Activity}
                                    title="Operations & Risk"
                                    sub="Account status, segment, and billing contact"
                                    tone="rose"
                                >
                                    <ProfileRow icon={CheckCircle2} k="Account status" v={<Pill tone="indigo">Prospect</Pill>} />
                                    <ProfileRow icon={AlertTriangle} k="Risk exposure" v={<Pill tone="emerald">Low</Pill>} />
                                    <ProfileRow icon={Sparkles} k="Client segment" v="—" />
                                    <ProfileRow icon={Hash} k="Client code" v={<span className="font-mono">CL-000003</span>} />
                                    <ProfileRow icon={Mail} k="Billing contact" v="dhamodharandivya528@gmail.com" />
                                    <ProfileRow icon={MapPin} k="Billing address" v="H.O.A. Regd. Office 23-25 Belagola Food Industrial Area, Metagalli P.O." />
                                </DetailCard>

                                <DetailCard
                                    icon={ShieldCheck}
                                    title="Compliance & Finance"
                                    sub="Tax, credit, and payment configuration"
                                    tone="emerald"
                                >
                                    <ProfileRow icon={Hash} k="GST / VAT / TAX ID" v="234" />
                                    <ProfileRow icon={Hash} k="PAN (TAX) ID" v="ZEDTG5678K" />
                                    <ProfileRow icon={Hash} k="DUNS number" v="78978908" />
                                    <ProfileRow icon={DollarSign} k="Credit limit" v="$8" />
                                    <ProfileRow icon={Calendar} k="Payment terms" v={<Pill tone="indigo">Net 15</Pill>} />
                                    <ProfileRow icon={DollarSign} k="Default currency" v={<Pill tone="emerald">USD</Pill>} />
                                </DetailCard>

                                <DetailCard
                                    icon={Landmark}
                                    title="Banking Information"
                                    sub="Wire and transfer details for settlements"
                                    tone="violet"
                                    empty
                                >
                                    <ProfileRow icon={Landmark} k="Bank name" v="—" />
                                    <ProfileRow icon={Hash} k="Account number" v="—" />
                                    <ProfileRow icon={Hash} k="IFSC / SWIFT" v="—" />
                                    <ProfileRow icon={Wallet} k="Preferred mode" v="—" />
                                </DetailCard>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="zk-reveal mt-6">
                    <ImageSlot
                        testid="clients-image-profile"
                        label="Client profile · Trademark"
                        chromeUrl="zukvo.app/admin/clients/CL-000003"
                        aspect="16/9"
                        caption="Replace with your Client profile screenshot."
                    />
                </div>
            </div>
        </section>
    );
}

function ProfileStat({ icon: Icon, kicker, value, sub, tone }) {
    const text = {
        indigo: "text-zukvo-300",
        emerald: "text-emerald-300",
        amber: "text-amber-300",
        violet: "text-violet-300",
    }[tone];
    return (
        <div
            className="rounded-xl border border-white/10 bg-white/[0.02] p-4 relative overflow-hidden"
            style={{
                backgroundImage:
                    tone === "violet"
                        ? "radial-gradient(60% 100% at 0% 0%, rgba(139,92,246,0.10), transparent 70%)"
                        : tone === "emerald"
                          ? "radial-gradient(60% 100% at 0% 0%, rgba(16,185,129,0.10), transparent 70%)"
                          : tone === "amber"
                            ? "radial-gradient(60% 100% at 0% 0%, rgba(245,158,11,0.10), transparent 70%)"
                            : "radial-gradient(60% 100% at 0% 0%, rgba(99,102,241,0.10), transparent 70%)",
            }}
        >
            <span
                className={`inline-flex size-8 items-center justify-center rounded-md border border-white/10 bg-white/5 ${text}`}
            >
                <Icon className="size-4" />
            </span>
            <div className={`mt-3 text-[10px] uppercase tracking-[0.22em] ${text}`}>{kicker}</div>
            <div className="mt-0.5 font-heading text-2xl text-white tracking-tight">{value}</div>
            <div className="text-[11px] text-zinc-500 mt-0.5">{sub}</div>
        </div>
    );
}

function DetailCard({ icon: Icon, title, sub, tone, children, empty }) {
    const toneMap = {
        indigo: "text-zukvo-300 bg-zukvo-500/10 border-zukvo-500/30",
        rose: "text-rose-300 bg-rose-500/10 border-rose-400/30",
        emerald: "text-emerald-300 bg-emerald-500/10 border-emerald-400/30",
        violet: "text-violet-300 bg-violet-500/10 border-violet-400/30",
    };
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span
                        className={`inline-flex size-9 items-center justify-center rounded-md border ${toneMap[tone]}`}
                    >
                        <Icon className="size-4" />
                    </span>
                    <div>
                        <div className="font-heading text-base text-white tracking-tight">
                            {title}
                        </div>
                        <div className="text-[11.5px] text-zinc-500">{sub}</div>
                    </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-zinc-400">
                    <Pencil className="size-3" /> Edit
                    <span className="inline-flex items-center w-6 h-3 rounded-full bg-white/10 justify-end pr-0.5">
                        <span className="size-2.5 rounded-full bg-white" />
                    </span>
                </span>
            </div>
            <div className={`mt-4 grid grid-cols-2 gap-3 ${empty ? "opacity-60" : ""}`}>
                {children}
            </div>
        </div>
    );
}

function ProfileRow({ icon: Icon, k, v }) {
    return (
        <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 inline-flex items-center gap-1">
                <Icon className="size-3" /> {k}
            </div>
            <div className="text-[12.5px] text-zinc-200 mt-0.5 truncate">{v}</div>
        </div>
    );
}

function Pill({ children, tone }) {
    const toneMap = {
        indigo: "border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300",
        emerald: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
        violet: "border-violet-400/30 bg-violet-500/10 text-violet-300",
        amber: "border-amber-400/30 bg-amber-500/10 text-amber-300",
    };
    return (
        <span
            className={`inline-flex items-center text-[10px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 ${toneMap[tone]}`}
        >
            {children}
        </span>
    );
}

/* ---------------- CONTACTS & TEAM ---------------- */

function ContactsSection() {
    const contacts = [
        {
            n: "Divya Dhamodharan",
            e: "dhamodharandivya528@gmail.com",
            r: "Primary Contact",
            tone: "violet",
            avatar: "D",
        },
        {
            n: "John Operations",
            e: "ops@trademark.in",
            r: "Operations Lead",
            tone: "indigo",
            avatar: "JO",
        },
        {
            n: "Priya Finance",
            e: "billing@trademark.in",
            r: "Finance",
            tone: "emerald",
            avatar: "PF",
        },
    ];
    const team = [
        { n: "ithyaz", r: "Super Admin", tone: "violet", avatar: "I" },
        { n: "Divya D", r: "Project Manager", tone: "amber", avatar: "D" },
        { n: "Raj K", r: "Engineering Lead", tone: "emerald", avatar: "R" },
    ];
    return (
        <section
            id="contacts"
            data-testid="clients-contacts"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                            Contacts & Team
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            People on both sides of the table.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Track every client-side contact and every internal teammate assigned to
                            the account. Tag roles, primary contact, billing — keep the right
                            person on the right thread.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Users, t: "Unlimited contacts per client" },
                                { i: BadgeCheck, t: "Role tagging — Primary · Billing · Ops" },
                                { i: Mail, t: "Inline email · log every send" },
                                { i: ShieldCheck, t: "Access control per contact" },
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

                    <div className="lg:col-span-7 space-y-4">
                        <PeopleCard title="Client contacts" badge="1 active" rows={contacts} count={1} />
                        <PeopleCard title="Internal team" badge="3 members" rows={team} count={3} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function PeopleCard({ title, badge, rows }) {
    const avatarTone = {
        violet: "bg-violet-500/20 text-violet-200 border-violet-400/30",
        indigo: "bg-zukvo-500/20 text-zukvo-200 border-zukvo-500/30",
        emerald: "bg-emerald-500/20 text-emerald-200 border-emerald-400/30",
        amber: "bg-amber-500/20 text-amber-200 border-amber-400/30",
    };
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
            <div className="px-5 py-3 flex items-center justify-between border-b border-white/5">
                <div className="font-heading text-base text-white tracking-tight">{title}</div>
                <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-white/10 bg-white/5 text-zinc-400 px-2 py-0.5">
                    {badge}
                </span>
            </div>
            {rows.map((p, i) => (
                <div
                    key={i}
                    className="flex items-center justify-between px-5 py-3 border-t border-white/5 first:border-t-0 hover:bg-white/[0.02] transition-colors"
                >
                    <div className="flex items-center gap-3 min-w-0">
                        <span
                            className={`inline-flex size-9 items-center justify-center rounded-full border text-[11px] font-bold ${avatarTone[p.tone]}`}
                        >
                            {p.avatar}
                        </span>
                        <div className="min-w-0">
                            <div className="text-[13px] text-zinc-100 truncate">{p.n}</div>
                            <div className="text-[11px] text-zinc-500 truncate">{p.e || p.r}</div>
                        </div>
                    </div>
                    <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-white/10 bg-white/[0.02] text-zinc-300 px-2 py-0.5">
                        {p.r}
                    </span>
                </div>
            ))}
            <div className="px-5 py-3 border-t border-white/5">
                <button className="inline-flex items-center gap-1.5 text-[11.5px] text-zukvo-300 hover:text-zukvo-200">
                    <Plus className="size-3.5" /> Add {title.toLowerCase().split(" ")[0]}
                </button>
            </div>
        </div>
    );
}

/* ---------------- PROJECTS & APPROVALS ---------------- */

function ProjectsSection() {
    return (
        <section
            id="projects"
            data-testid="clients-projects"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Projects & Approvals
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Every engagement, linked.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        See every project, change request and approval tied to a client. One click
                        opens the project; another shows what's waiting on a sign-off.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-7 space-y-4">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                            <div className="px-5 py-3 flex items-center justify-between border-b border-white/5">
                                <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                                    <FolderKanban className="size-3.5 text-violet-300" /> Linked
                                    projects
                                </div>
                                <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-white/10 bg-white/5 text-zinc-400 px-2 py-0.5">
                                    1 active
                                </span>
                            </div>
                            <div className="px-5 py-4 grid grid-cols-12 items-center gap-3">
                                <div className="col-span-6 flex items-center gap-3">
                                    <span className="inline-flex size-9 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300 border border-violet-400/30">
                                        <Briefcase className="size-4" />
                                    </span>
                                    <div className="min-w-0">
                                        <div className="text-[13px] text-zinc-100 truncate">
                                            Zithmi Dashboard Build
                                        </div>
                                        <div className="text-[11px] text-zinc-500">
                                            CL-000003 · Active · 12 tickets · 5 in progress
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3 text-[12px] text-zinc-300">
                                    <div className="inline-flex items-center gap-1.5">
                                        <span className="size-1.5 rounded-full bg-emerald-400" />
                                        On track
                                    </div>
                                </div>
                                <div className="col-span-3 text-right text-[12px]">
                                    <div className="text-zinc-100">$6 budget</div>
                                    <div className="text-zinc-500 text-[11px]">May → Aug 2026</div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                            <div className="px-5 py-3 flex items-center justify-between border-b border-white/5">
                                <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                                    <GitPullRequest className="size-3.5 text-amber-300" /> Change
                                    requests
                                </div>
                                <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 px-2 py-0.5">
                                    2 open
                                </span>
                            </div>
                            {[
                                ["Scope · Add inventory module", "Submitted by Divya · 2d ago", "review"],
                                ["Timeline · Push delivery to Aug 20", "Submitted by Raj · 5d ago", "approved"],
                            ].map(([t, s, st], i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between px-5 py-3 border-t border-white/5"
                                >
                                    <div>
                                        <div className="text-[12.5px] text-zinc-100">{t}</div>
                                        <div className="text-[11px] text-zinc-500">{s}</div>
                                    </div>
                                    <Pill tone={st === "approved" ? "emerald" : "amber"}>
                                        {st === "approved" ? "Approved" : "In review"}
                                    </Pill>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                            <div className="px-5 py-3 flex items-center justify-between border-b border-white/5">
                                <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                                    <CheckCircle2 className="size-3.5 text-emerald-300" /> Approvals
                                </div>
                                <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                                    1 pending
                                </span>
                            </div>
                            {[
                                ["Invoice INV-2026-005", "$4,200 · Net 15", "Awaiting", "amber"],
                                ["Statement of Work · Phase 2", "Signed · 18 May", "Approved", "emerald"],
                                ["Master Services Agreement", "Signed · 23 May", "Approved", "emerald"],
                            ].map(([t, s, st, tone], i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between px-5 py-3 border-t border-white/5"
                                >
                                    <div className="min-w-0">
                                        <div className="text-[12.5px] text-zinc-100 truncate">
                                            {t}
                                        </div>
                                        <div className="text-[11px] text-zinc-500">{s}</div>
                                    </div>
                                    <Pill tone={tone}>{st}</Pill>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                            <div className="text-[11px] uppercase tracking-[0.22em] text-zukvo-300 font-bold">
                                Documents
                            </div>
                            <div className="mt-3 space-y-2.5 text-[12.5px]">
                                {[
                                    ["MSA · Trademark · Zithtech", "PDF · 2.4MB"],
                                    ["SOW · Phase 1", "PDF · 612KB"],
                                    ["NDA · mutual", "PDF · 384KB"],
                                ].map(([t, m], i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between rounded-md border border-white/10 bg-black/30 px-3 py-2"
                                    >
                                        <span className="inline-flex items-center gap-2 text-zinc-200 truncate">
                                            <FileText className="size-3.5 text-zinc-500" /> {t}
                                        </span>
                                        <span className="text-[11px] text-zinc-500">{m}</span>
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

/* ---------------- PORTAL ACCESS ---------------- */

function PortalSection() {
    return (
        <section
            id="portal"
            data-testid="clients-portal"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                            <KeyRound className="size-3" /> Portal Access
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            A branded window into the work.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Open a branded portal so the client tracks project progress, approves
                            proposals, reviews deliverables, pays invoices and messages the team —
                            without another login to manage.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Globe2, t: "Branded subdomain + theme" },
                                { i: KeyRound, t: "Magic-link sign-in · no passwords" },
                                { i: ShieldCheck, t: "Per-contact role + access control" },
                                { i: Activity, t: "Live progress, milestones, invoices" },
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
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                            <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
                                <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                                    <KeyRound className="size-3.5 text-emerald-300" /> Portal
                                    settings · Trademark
                                </div>
                                <span className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                                    <span className="size-1.5 rounded-full bg-emerald-400" /> Enabled
                                </span>
                            </div>
                            <div className="p-5 space-y-3">
                                <div className="flex items-center justify-between rounded-md border border-white/10 bg-black/30 px-3 py-2.5">
                                    <div className="inline-flex items-center gap-2 text-[12.5px] text-zinc-200">
                                        <Globe2 className="size-3.5 text-zinc-500" /> Subdomain
                                    </div>
                                    <span className="font-mono text-[12px] text-zukvo-300">
                                        trademark.zithmi.app
                                    </span>
                                </div>
                                <div className="flex items-center justify-between rounded-md border border-white/10 bg-black/30 px-3 py-2.5">
                                    <div className="inline-flex items-center gap-2 text-[12.5px] text-zinc-200">
                                        <ShieldCheck className="size-3.5 text-zinc-500" /> Sign-in
                                        mode
                                    </div>
                                    <Pill tone="emerald">Magic link</Pill>
                                </div>

                                {/* Permission grid */}
                                <div className="rounded-md border border-white/10 bg-black/30 p-4">
                                    <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                                        What the client can see
                                    </div>
                                    <div className="mt-3 grid grid-cols-2 gap-2">
                                        {[
                                            ["Projects & milestones", true],
                                            ["Invoices & payments", true],
                                            ["Documents & briefs", true],
                                            ["Time tracking", false],
                                            ["Internal tickets", false],
                                            ["Team profiles", true],
                                        ].map(([t, on], i) => (
                                            <div
                                                key={i}
                                                className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-[12px]"
                                            >
                                                <span className="text-zinc-200 inline-flex items-center gap-1.5">
                                                    {on ? (
                                                        <Eye className="size-3 text-emerald-300" />
                                                    ) : (
                                                        <EyeOff className="size-3 text-zinc-500" />
                                                    )}
                                                    {t}
                                                </span>
                                                <span
                                                    className={`inline-flex items-center w-6 h-3 rounded-full ${
                                                        on
                                                            ? "bg-emerald-500/40 justify-end pr-0.5"
                                                            : "bg-white/10 justify-start pl-0.5"
                                                    }`}
                                                >
                                                    <span className="size-2.5 rounded-full bg-white" />
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Access list */}
                                <div className="rounded-md border border-white/10 bg-black/30">
                                    <div className="px-3 py-2 border-b border-white/5 text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                                        Who has access
                                    </div>
                                    {[
                                        ["Divya Dhamodharan", "Primary · all access", "violet"],
                                        ["John Operations", "Projects & meetings", "indigo"],
                                    ].map(([n, r, tone], i) => (
                                        <div
                                            key={i}
                                            className="flex items-center justify-between px-3 py-2 border-t border-white/5 first:border-t-0"
                                        >
                                            <div className="flex items-center gap-3 min-w-0">
                                                <span
                                                    className={`inline-flex size-7 items-center justify-center rounded-full border text-[10px] font-bold ${
                                                        tone === "violet"
                                                            ? "bg-violet-500/20 text-violet-200 border-violet-400/30"
                                                            : "bg-zukvo-500/20 text-zukvo-200 border-zukvo-500/30"
                                                    }`}
                                                >
                                                    {n.slice(0, 1)}
                                                </span>
                                                <span className="text-[12.5px] text-zinc-200 truncate">
                                                    {n}
                                                </span>
                                            </div>
                                            <span className="text-[11px] text-zinc-500">{r}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- ACTIVITY & OPS ---------------- */

function ActivitySection() {
    const ops = [
        {
            id: "meetings",
            i: Calendar,
            t: "Meetings",
            d: "Auto-recorded kickoffs, status calls and review sessions with attendees and notes.",
            tone: "indigo",
        },
        {
            id: "milestones",
            i: Flag,
            t: "Milestones",
            d: "Phase gates and delivery checkpoints — visible to client portal users.",
            tone: "emerald",
        },
        {
            id: "releases",
            i: Rocket,
            t: "Releases",
            d: "Cut a versioned release on demand. Notes auto-pull from sprint tickets.",
            tone: "violet",
        },
        {
            id: "environments",
            i: Server,
            t: "Environments",
            d: "Dev · Staging · Production endpoints, secrets, and access list per env.",
            tone: "amber",
        },
        {
            id: "tickets",
            i: LifeBuoy,
            t: "Support Tickets",
            d: "Client-raised tickets with SLA timers, owner, priority and channel.",
            tone: "rose",
        },
        {
            id: "documents",
            i: FileText,
            t: "Documents",
            d: "Briefs, contracts, signed PDFs — all version-controlled with audit history.",
            tone: "indigo",
        },
    ];
    const toneMap = {
        indigo: "text-zukvo-300 bg-zukvo-500/10 border-zukvo-500/30",
        emerald: "text-emerald-300 bg-emerald-500/10 border-emerald-400/30",
        violet: "text-violet-300 bg-violet-500/10 border-violet-400/30",
        amber: "text-amber-300 bg-amber-500/10 border-amber-400/30",
        rose: "text-rose-300 bg-rose-500/10 border-rose-400/30",
    };
    return (
        <section
            id="activity"
            data-testid="clients-activity"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Activity & Operations
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Six more lenses on the same client.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Meetings, milestones, releases, environments, support tickets and
                        documents — each is a tab inside the client profile with its own list,
                        filters and audit log.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ops.map((o) => (
                        <div
                            key={o.id}
                            className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5 hover:border-white/20 transition-colors"
                        >
                            <span
                                className={`inline-flex size-10 items-center justify-center rounded-lg border ${toneMap[o.tone]}`}
                            >
                                <o.i className="size-5" />
                            </span>
                            <div className="mt-4 font-heading text-lg text-white tracking-tight">
                                {o.t}
                            </div>
                            <p className="mt-1.5 text-[13px] text-zinc-400 leading-relaxed">
                                {o.d}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Timeline preview */}
                <div className="zk-reveal mt-10 rounded-2xl border border-white/10 bg-[#0E0E10] p-5 md:p-7 relative">
                    <div className="flex items-center justify-between mb-5">
                        <div>
                            <div className="text-[11px] uppercase tracking-[0.22em] text-zukvo-300 font-bold">
                                Activity timeline · Trademark
                            </div>
                            <div className="text-[11.5px] text-zinc-500">
                                Last 7 days · audited
                            </div>
                        </div>
                        <span className="text-[11px] text-zinc-500">6 events</span>
                    </div>
                    <div className="relative pl-6">
                        <div className="absolute left-2.5 top-1 bottom-1 w-px bg-white/10" />
                        <ul className="space-y-3.5">
                            {[
                                ["Onboarded", "ithyaz · 23 May 2026", Plus, "indigo"],
                                ["Project created · Zithmi Dashboard Build", "Divya D · 23 May", Briefcase, "violet"],
                                ["Portal enabled · magic-link", "ithyaz · 24 May", KeyRound, "emerald"],
                                ["MSA signed · trademark", "Divya Dhamodharan · 25 May", CheckCircle2, "emerald"],
                                ["Change request opened · scope", "Raj K · 27 May", GitPullRequest, "amber"],
                                ["Invoice INV-2026-005 sent", "Finance · 28 May", Mail, "indigo"],
                            ].map(([t, s, Icon, tone], i) => (
                                <li key={i} className="relative">
                                    <span
                                        className={`absolute -left-6 top-0 inline-flex size-5 items-center justify-center rounded-full border bg-[#0E0E12] ${toneMap[tone]}`}
                                    >
                                        <Icon className="size-2.5" />
                                    </span>
                                    <div className="text-[12.5px] text-zinc-100">{t}</div>
                                    <div className="text-[11px] text-zinc-500">{s}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="zk-reveal mt-6">
                    <ImageSlot
                        testid="clients-image-activity"
                        label="Client · Activity & operations"
                        chromeUrl="zukvo.app/admin/clients/CL-000003/activity"
                        aspect="16/9"
                        caption="Replace with your Client activity screenshot."
                    />
                </div>
            </div>
        </section>
    );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
    return (
        <section data-testid="clients-final-cta" className="relative bg-[#0A0A0A] text-white">
            <div className="mx-auto max-w-7xl px-6 md:px-10 pb-20">
                <div
                    className="zk-reveal relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0E0E10] p-10 md:p-16 text-center"
                    style={{
                        backgroundImage:
                            "radial-gradient(60% 80% at 50% 0%, rgba(139,92,246,0.18), transparent 60%)",
                    }}
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                        <Sparkles className="size-3" /> Get started
                    </span>
                    <h2 className="mt-6 font-heading font-medium text-3xl md:text-5xl tracking-[-0.03em]">
                        Run every client account from Zukvo.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/signup"
                            data-testid="clients-final-cta-primary"
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
const _unused = [Search, DollarSign];

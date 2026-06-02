import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    KanbanSquare,
    Plus,
    GitBranch,
    Users,
    Crown,
    Trash2,
    UndoDot,
    BarChart3,
    Clock3,
    CalendarDays,
    TrendingUp,
    CheckCircle2,
    PieChart,
    Activity,
    ListChecks,
    Search,
    Filter,
    Layers,
    Sparkles,
    Share2,
    Edit3,
    ChevronRight,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import ImageSlot from "@/components/ImageSlot";

import projectImg from "@/assets/project.png";
import projectOverviewImg from "@/assets/projectoverview.png";
import projectTrashImg from "@/assets/project-trash.png";

const PM_MAIN_IMG = projectImg;
const PM_DETAILS_IMG = projectOverviewImg;

const SUBMODULES = [
    { id: "projects", label: "Projects", icon: KanbanSquare },
    { id: "create", label: "Create", icon: Plus },
    { id: "team", label: "Team", icon: Users },
    { id: "details", label: "Project Details", icon: BarChart3 },
    { id: "sprints", label: "Sprints", icon: GitBranch },
    { id: "contribution", label: "Contribution", icon: Activity },
    { id: "trash", label: "Trash", icon: Trash2 },
];

export default function ProjectManagement() {
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
            data-testid="project-management-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink"
        >
            <SEO />
            <Nav />
            <Hero />
            <SubmoduleNav />
            <MainView />
            <CreateAndViews />
            <TeamSection />
            <ProjectDetails />
            <MetricsSection />
            <SprintsAndContribution />
            <OverallProgress />
            <TrashSection />
            <FinalCTA />
            <Footer />
        </main>
    );
}

/* ---------------- HERO ---------------- */

function Hero() {
    return (
        <section
            data-testid="pm-hero"
            className="relative pt-32 md:pt-40 pb-16 md:pb-24 zk-mesh"
        >
            <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_75%)] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                <div className="zk-reveal">
                    <Link
                        to="/products"
                        data-testid="pm-breadcrumb"
                        className="inline-flex items-center gap-1.5 text-[12px] text-zinc-500 hover:text-zukvo-600"
                    >
                        <ArrowLeft className="size-3.5" />
                        All products
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-600">
                            <KanbanSquare className="size-3.5" />
                            Project Management
                        </div>
                        <h1
                            data-testid="pm-headline"
                            className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink"
                        >
                            Run every project <br />
                            <span className="text-zinc-500">with one source of truth.</span>
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            Plan, staff, sprint, and ship. Zukvo gives every project a leader, a
                            team, a real-time progress meter, and a contribution map — so nothing
                            slips between standups.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/signup"
                                data-testid="pm-cta-primary"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Project Management
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-medium text-zinc-800 hover:border-zinc-400 transition-colors"
                            >
                                See every feature
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="zk-reveal grid grid-cols-2 gap-3">
                            {[
                                { k: "Card · List", v: "Two views, one click" },
                                { k: "Live %", v: "Project-level progress" },
                                { k: "Team map", v: "Lead + members + contribution" },
                                { k: "Restore", v: "Trashed — never lost" },
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
            data-testid="pm-submodule-nav"
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
                            data-testid={`pm-pill-${s.id}`}
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

/* ---------------- MAIN VIEW ---------------- */

function MainView() {
    return (
        <section
            id="projects"
            data-testid="pm-main-view"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Projects · home view
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Every initiative — Card or List.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Switch between a visual card grid and a dense list view. Filter by
                            status, owner, date range. Top-level KPIs always in sight: Total,
                            Active, On Hold, Completed.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: PieChart, t: "Live KPI bar (Total · Active · Hold · Done)" },
                                { i: Filter, t: "Status, manager, and date filters" },
                                { i: Search, t: "Quick search across every project" },
                                { i: Users, t: "Lead avatar + member stack on every card" },
                            ].map((b, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2.5 text-[14px] text-zinc-300"
                                >
                                    <b.i className="size-4 text-zukvo-400" /> {b.t}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-7">
                        <ImageSlot
                            testid="pm-image-main"
                            src={PM_MAIN_IMG}
                            alt="Projects Management home view"
                            label="Projects — main view"
                            chromeUrl="zukvo.app/work/projects"
                            aspect="auto"
                            objectFit="contain"
                            caption="Live screenshot — Projects Management home with KPI bar."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- CREATE + VIEW SWITCHER ---------------- */

function CreateAndViews() {
    const [view, setView] = useState("card");
    return (
        <section
            id="create"
            data-testid="pm-create-views"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Create & view
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Spin up a project. Switch views in a click.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Add a project, assign a Project Lead, invite the team, set a timeline and
                        priority — then choose how you want to see it: rich Card grid or compact
                        List.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
                    {/* Create panel */}
                    <div className="w-full lg:col-span-5">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-6">
                            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-zukvo-300">
                                <Plus className="size-3.5" /> Add Project
                            </div>
                            <div className="mt-4 space-y-2.5 text-[12.5px]">
                                {[
                                    ["Name", "Zukvo"],
                                    ["Code", "#002"],
                                    ["Description", "Manage Projects, Tickets, Clients…"],
                                    ["Project Lead", "Sebastian"],
                                    ["Members", "15 people"],
                                    ["Priority", "Medium"],
                                    ["Status", "Active"],
                                    ["Timeline", "Aug 1, 2025 → Ongoing"],
                                ].map((r, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.02] px-3 py-2"
                                    >
                                        <span className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-500">
                                            {r[0]}
                                        </span>
                                        <span className="text-zinc-200 truncate ml-3 max-w-[60%] text-right">
                                            {r[1]}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-zukvo-500 hover:bg-zukvo-600 transition-colors text-white px-4 py-2 text-[12.5px] font-medium">
                                <Plus className="size-3.5" /> Create project
                            </button>
                        </div>
                    </div>

                    {/* Live view switcher */}
                    <div className="w-full lg:col-span-7">
                        <div className="flex items-center justify-between mb-3">
                            <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                                Live preview
                            </div>
                            <div className="inline-flex rounded-full border border-white/10 bg-[#101014] p-1 text-[11px]">
                                <button
                                    data-testid="pm-view-card"
                                    onClick={() => setView("card")}
                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors ${
                                        view === "card"
                                            ? "bg-white text-zukvo-ink"
                                            : "text-zinc-400 hover:text-white"
                                    }`}
                                >
                                    Card
                                </button>
                                <button
                                    data-testid="pm-view-list"
                                    onClick={() => setView("list")}
                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors ${
                                        view === "list"
                                            ? "bg-white text-zukvo-ink"
                                            : "text-zinc-400 hover:text-white"
                                    }`}
                                >
                                    List
                                </button>
                            </div>
                        </div>
                        {view === "card" ? <CardGrid /> : <ListPreview />}
                    </div>
                </div>
            </div>
        </section>
    );
}

const PROJECTS = [
    {
        code: "EPR",
        name: "PA Square ERP",
        tag: "EPR System",
        desc: "GST Filing, Tax Handling",
        status: "Active",
        priority: "Medium",
        date: "Apr 05",
        timeline: 0,
        lead: "Subhalakshmi",
        members: 2,
    },
    {
        code: "ZIT",
        name: "Zithmate",
        tag: "ZITHMATE",
        desc: "Brand and creator marketplace…",
        status: "Planning",
        priority: "High",
        date: "Mar 30",
        timeline: 0,
        lead: "Sebastian",
        members: 5,
    },
    {
        code: "003",
        name: "Demo Project",
        tag: "003",
        desc: "Used for demo",
        status: "Active",
        priority: "Medium",
        date: "Jan 01 → Jan 31",
        timeline: 100,
        lead: "Admin",
        members: 8,
    },
    {
        code: "002",
        name: "Zukvo",
        tag: "002",
        desc: "Manage Projects, Tickets, Clients…",
        status: "Active",
        priority: "Medium",
        date: "Aug 1 → Ongoing",
        timeline: 52,
        lead: "Sebastian",
        members: 15,
    },
];

function CardGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PROJECTS.map((p, i) => (
                <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-[#0E0E10] p-4"
                >
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2.5">
                            <span className="inline-flex size-8 items-center justify-center rounded-md bg-zukvo-500/10 text-zukvo-300 border border-zukvo-500/20 text-[10.5px] font-mono">
                                {p.code}
                            </span>
                            <div>
                                <div className="text-[13.5px] text-white font-medium">{p.name}</div>
                                <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                    #{p.tag}
                                </div>
                            </div>
                        </div>
                        <StatusPill status={p.status} />
                    </div>
                    <div className="mt-3 text-[12px] text-zinc-400 line-clamp-2">{p.desc}</div>
                    <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                        Timeline · {p.timeline}%
                    </div>
                    <div className="mt-1 h-1 rounded-full bg-white/5 overflow-hidden">
                        <div
                            className={`h-full ${
                                p.timeline === 100 ? "bg-emerald-400" : "bg-zukvo-500"
                            }`}
                            style={{ width: `${Math.max(p.timeline, 2)}%` }}
                        />
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="size-6 rounded-full bg-gradient-to-br from-zukvo-500 to-violet-500 text-white text-[10px] inline-flex items-center justify-center">
                                {p.lead.slice(0, 1)}
                            </span>
                            <div className="text-[11.5px]">
                                <div className="text-zinc-200">{p.lead}</div>
                                <div className="text-zinc-500 text-[10px]">Project Lead</div>
                            </div>
                        </div>
                        <div className="text-[11px] text-zinc-500">{p.members} members</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function ListPreview() {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
            <div className="overflow-x-auto">
                <div className="min-w-[700px]">
                    <div className="grid grid-cols-12 gap-3 px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] text-zinc-500 border-b border-white/5 bg-white/[0.02]">
                        <div className="col-span-1">Code</div>
                        <div className="col-span-3">Project</div>
                        <div className="col-span-2">Lead</div>
                        <div className="col-span-2">Members</div>
                        <div className="col-span-2">Status</div>
                        <div className="col-span-2 text-right">Progress</div>
                    </div>
                    {PROJECTS.map((p, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-12 gap-3 items-center px-4 py-3 border-t border-white/5 hover:bg-white/[0.02] transition-colors"
                        >
                            <div className="col-span-1 font-mono text-[11px] text-zinc-400 whitespace-nowrap">{p.code}</div>
                            <div className="col-span-3 text-[13px] text-zinc-200 truncate whitespace-nowrap">{p.name}</div>
                            <div className="col-span-2 text-[12.5px] text-zinc-300 whitespace-nowrap">{p.lead}</div>
                            <div className="col-span-2 text-[12.5px] text-zinc-400 whitespace-nowrap">{p.members}</div>
                            <div className="col-span-2">
                                <StatusPill status={p.status} />
                            </div>
                            <div className="col-span-2">
                                <div className="flex items-center gap-2">
                                    <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
                                        <div
                                            className={`h-full ${
                                                p.timeline === 100 ? "bg-emerald-400" : "bg-zukvo-500"
                                            }`}
                                            style={{ width: `${Math.max(p.timeline, 2)}%` }}
                                        />
                                    </div>
                                    <span className="text-[11px] text-zinc-400 w-9 text-right whitespace-nowrap">
                                        {p.timeline}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function StatusPill({ status }) {
    const map = {
        Active: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
        Planning: "border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300",
        "On Hold": "border-amber-400/30 bg-amber-500/10 text-amber-300",
        Completed: "border-violet-400/30 bg-violet-500/10 text-violet-300",
    };
    return (
        <span
            className={`inline-flex items-center text-[10px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 ${
                map[status] || "border-white/10 bg-white/5 text-zinc-400"
            }`}
        >
            {status}
        </span>
    );
}

/* ---------------- TEAM ---------------- */

function TeamSection() {
    const members = [
        { n: "Bharathi", r: "Frontend Lead", c: 28 },
        { n: "Subhalakshmi", r: "Full-stack", c: 17 },
        { n: "Mithun", r: "Backend", c: 14 },
        { n: "Divya D", r: "QA Lead", c: 11 },
        { n: "Karthik", r: "Designer", c: 9 },
        { n: "Aravind", r: "DevOps", c: 7 },
    ];
    return (
        <section
            id="team"
            data-testid="pm-team"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Team
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        A Project Lead. <br /> A team that ships together.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Every project has a single owner — the Project Lead — and a roster of
                        contributors. Roles are clear, contribution is visible, and ownership is
                        never ambiguous.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-6">
                            <div className="flex items-start gap-4">
                                <div className="relative">
                                    <span className="size-14 rounded-2xl bg-gradient-to-br from-zukvo-500 to-violet-500 inline-flex items-center justify-center text-white font-heading text-xl">
                                        S
                                    </span>
                                    <span className="absolute -bottom-1 -right-1 size-6 rounded-full bg-amber-400 text-[#0A0A0A] inline-flex items-center justify-center border-2 border-[#0E0E10]">
                                        <Crown className="size-3" />
                                    </span>
                                </div>
                                <div>
                                    <div className="text-[10.5px] uppercase tracking-[0.22em] text-amber-300">
                                        Project Lead
                                    </div>
                                    <div className="font-heading text-xl text-white tracking-tight">
                                        Sebastian
                                    </div>
                                    <div className="text-[12px] text-zinc-500">
                                        Owns scope, sprint cadence and delivery.
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                                {[
                                    ["15", "Members"],
                                    ["6", "Sprints"],
                                    ["52%", "Progress"],
                                ].map((s, i) => (
                                    <div
                                        key={i}
                                        className="rounded-md border border-white/10 bg-white/[0.02] py-2.5"
                                    >
                                        <div className="font-heading text-lg text-white">{s[0]}</div>
                                        <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                                            {s[1]}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                                    Team members · 15
                                </div>
                                <div className="text-[11px] text-zinc-500">Sorted by contribution</div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {members.map((m, i) => (
                                    <div
                                        key={i}
                                        className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-3 flex items-center gap-3"
                                    >
                                        <span className="size-9 rounded-lg bg-gradient-to-br from-zukvo-500/40 to-violet-500/40 text-white text-[12px] inline-flex items-center justify-center border border-white/10">
                                            {m.n.slice(0, 2)}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-[13px] text-zinc-100 truncate">
                                                {m.n}
                                            </div>
                                            <div className="text-[11px] text-zinc-500 truncate">
                                                {m.r}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[12.5px] text-zukvo-300 font-medium">
                                                {m.c}%
                                            </div>
                                            <div className="text-[9.5px] uppercase tracking-[0.2em] text-zinc-500">
                                                Contrib
                                            </div>
                                        </div>
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

/* ---------------- PROJECT DETAILS ---------------- */

function ProjectDetails() {
    return (
        <section
            id="details"
            data-testid="pm-details"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Project details
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            One page. The full picture.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Open any project and see Sprint Summary, Ticket Summary, hours logged,
                            days worked, sprint timeline, team contribution and overall progress —
                            updated as the team moves.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: BarChart3, t: "Sprint Summary · Ticket Summary" },
                                { i: Clock3, t: "Hours Logged · Days Worked · Avg / day" },
                                { i: GitBranch, t: "Sprint cards with timelines" },
                                { i: Activity, t: "Team contribution + Recent activity" },
                                { i: TrendingUp, t: "Live overall project progress" },
                            ].map((b, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2.5 text-[14px] text-zinc-300"
                                >
                                    <b.i className="size-4 text-zukvo-400" /> {b.t}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-7">
                        <ImageSlot
                            testid="pm-image-details"
                            src={PM_DETAILS_IMG}
                            alt="Project details page"
                            label="Project Details — Zukvo #002"
                            chromeUrl="zukvo.app/work/projects/zukvo"
                            aspect="auto"
                            objectFit="contain"
                            caption="Live screenshot — full project details with sprint, ticket and team metrics."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- METRICS ---------------- */

function MetricsSection() {
    return (
        <section
            data-testid="pm-metrics"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Metrics
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Numbers the team trusts.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Every metric on the project page is auto-pulled from sprints, tickets, and
                        time entries — no manual rollups, no stale dashboards.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <MetricBig
                        kicker="Sprint summary"
                        value="6"
                        sub="67% completion"
                        bullets={[
                            ["Completed", "4"],
                            ["In Progress", "1"],
                            ["Not Started", "1"],
                        ]}
                        accent="indigo"
                        icon={GitBranch}
                    />
                    <MetricBig
                        kicker="Ticket summary"
                        value="321"
                        sub="52% completion"
                        bullets={[
                            ["Completed", "167"],
                            ["In Progress", "35"],
                            ["Not Started", "119"],
                        ]}
                        accent="violet"
                        icon={ListChecks}
                    />
                    <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-6">
                        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-zukvo-300">
                            <Crown className="size-3.5" /> Project lead
                        </div>
                        <div className="mt-4 flex items-center gap-3">
                            <span className="size-12 rounded-2xl bg-gradient-to-br from-zukvo-500 to-violet-500 inline-flex items-center justify-center text-white font-heading text-lg">
                                S
                            </span>
                            <div>
                                <div className="font-heading text-lg text-white">Sebastian</div>
                                <div className="text-[12px] text-zinc-500">Owner · 15 members</div>
                            </div>
                        </div>
                        <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                            <div className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-500">
                                Description
                            </div>
                            <div className="mt-2 text-[13px] text-zinc-200">
                                Manage Projects, Tickets, Clients, Attendance, Accounts.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="zk-reveal mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <BigStat
                        icon={Clock3}
                        kicker="Hours logged"
                        value="822.2h"
                        sub="across all sprints"
                        accent="indigo"
                    />
                    <BigStat
                        icon={CalendarDays}
                        kicker="Days worked"
                        value="137d"
                        sub="6h / day average pace"
                        accent="emerald"
                    />
                    <BigStat
                        icon={TrendingUp}
                        kicker="Avg / day"
                        value="6.0h"
                        sub="team working hours per day"
                        accent="violet"
                    />
                </div>
            </div>
        </section>
    );
}

function MetricBig({ kicker, value, sub, bullets, accent = "indigo", icon: Icon }) {
    const accents = {
        indigo: { bar: "bg-zukvo-500", text: "text-zukvo-300" },
        violet: { bar: "bg-violet-500", text: "text-violet-300" },
    };
    const a = accents[accent];
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-6">
            <div className="flex items-start justify-between">
                <span
                    className={`inline-flex size-9 items-center justify-center rounded-lg bg-zukvo-500/10 ${a.text} border border-zukvo-500/20`}
                >
                    <Icon className="size-4" />
                </span>
                <div className="font-heading text-4xl font-medium tracking-tight text-white">
                    {value}
                </div>
            </div>
            <div className={`mt-4 text-[11px] uppercase tracking-[0.22em] ${a.text}`}>
                {kicker}
            </div>
            <div className="text-[12px] text-zinc-500">{sub}</div>
            <div className="mt-3 h-1 rounded-full bg-white/5 overflow-hidden">
                <div className={`h-full ${a.bar}`} style={{ width: "67%" }} />
            </div>
            <div className="mt-4 space-y-1.5 text-[12.5px]">
                {bullets.map((b, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between rounded-md bg-white/[0.02] border border-white/5 px-3 py-1.5"
                    >
                        <span className="text-zinc-400">{b[0]}</span>
                        <span className="text-zinc-100 font-medium">{b[1]}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function BigStat({ icon: Icon, kicker, value, sub, accent = "indigo" }) {
    const accents = {
        indigo: "text-zukvo-300 bg-zukvo-500/10 border-zukvo-500/20",
        emerald: "text-emerald-300 bg-emerald-500/10 border-emerald-400/30",
        violet: "text-violet-300 bg-violet-500/10 border-violet-400/30",
    };
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-6 flex items-center gap-5">
            <span
                className={`inline-flex size-12 items-center justify-center rounded-xl border ${accents[accent]}`}
            >
                <Icon className="size-5" />
            </span>
            <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">{kicker}</div>
                <div className="mt-1 font-heading text-3xl text-white tracking-tight">{value}</div>
                <div className="text-[12px] text-zinc-500">{sub}</div>
            </div>
        </div>
    );
}

/* ---------------- SPRINTS + CONTRIBUTION ---------------- */

function SprintsAndContribution() {
    return (
        <section
            id="contribution"
            data-testid="pm-contribution"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-6">
                    {/* Sprints */}
                    <div id="sprints" className="lg:col-span-5">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5 h-full">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex size-9 items-center justify-center rounded-lg bg-zukvo-500/10 text-zukvo-300 border border-zukvo-500/20">
                                        <GitBranch className="size-4" />
                                    </span>
                                    <div>
                                        <div className="text-[10.5px] uppercase tracking-[0.22em] text-zinc-500">
                                            Sprints
                                        </div>
                                        <div className="font-heading text-lg text-white">6 cycles</div>
                                    </div>
                                </div>
                                <button className="text-[11px] text-zinc-400 inline-flex items-center gap-1.5 border border-white/10 rounded-full px-2.5 py-1 hover:text-white">
                                    Sort
                                </button>
                            </div>

                            <div className="mt-5 space-y-2.5">
                                {[
                                    ["ZithSpace HRMS & Finance", "Jan 5 → Jan 12", "0/0", "active"],
                                    ["ZithSpace HRMS & Finance · Work-2", "Jan 25 → Feb 8", "0/0", "active"],
                                    ["Core — Work, Finance, HRMS", "Feb 9 → Feb 20", "0/0", "active"],
                                    ["Feb Mid Core", "Feb 22 → Mar 5", "12/14", "active"],
                                    ["Freelancer Kit · Cycle-1", "Apr 6 → Apr 13", "56/67", "current"],
                                    ["Release Edge — planning", "TBD", "—", "planning"],
                                ].map((s, i) => (
                                    <div
                                        key={i}
                                        className={`rounded-xl border ${
                                            s[3] === "current"
                                                ? "border-zukvo-500/40 bg-zukvo-500/5"
                                                : "border-white/10 bg-white/[0.02]"
                                        } px-4 py-3`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="text-[13px] text-zinc-200 truncate pr-3">
                                                {s[0]}
                                            </div>
                                            <span
                                                className={`text-[10px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 ${
                                                    s[3] === "current"
                                                        ? "border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300"
                                                        : s[3] === "planning"
                                                          ? "border-amber-400/30 bg-amber-500/10 text-amber-300"
                                                          : "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                                                }`}
                                            >
                                                {s[3] === "current"
                                                    ? "Current"
                                                    : s[3] === "planning"
                                                      ? "Planning"
                                                      : "Active"}
                                            </span>
                                        </div>
                                        <div className="mt-1.5 flex items-center justify-between text-[11px] text-zinc-500">
                                            <span>{s[1]}</span>
                                            <span>{s[2]} tickets</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Team progress */}
                    <div className="lg:col-span-4">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5 h-full">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-zukvo-500/10 text-zukvo-300 border border-zukvo-500/20">
                                    <Users className="size-4" />
                                </span>
                                <div>
                                    <div className="text-[10.5px] uppercase tracking-[0.22em] text-zinc-500">
                                        Team progress
                                    </div>
                                    <div className="font-heading text-lg text-white">
                                        15 contributors
                                    </div>
                                </div>
                            </div>

                            {[
                                {
                                    n: "Bharathi",
                                    c: 28,
                                    tot: 54,
                                    done: 46,
                                    act: 7,
                                    h: "171.7h",
                                },
                                {
                                    n: "Subhalakshmi",
                                    c: 17,
                                    tot: 36,
                                    done: 28,
                                    act: 2,
                                    h: "169.3h",
                                },
                            ].map((m, i) => (
                                <div key={i} className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2.5">
                                            <span className="size-7 rounded-lg bg-gradient-to-br from-zukvo-500/40 to-violet-500/40 text-white text-[10.5px] inline-flex items-center justify-center border border-white/10">
                                                {m.n.slice(0, 2)}
                                            </span>
                                            <div>
                                                <div className="text-[13px] text-zinc-100">
                                                    {m.n}
                                                </div>
                                                <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                                    Contributor
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[14px] text-emerald-300 font-medium">
                                                {m.c}%
                                            </div>
                                            <div className="text-[9.5px] uppercase tracking-[0.2em] text-zinc-500">
                                                Contrib
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2 h-1 rounded-full bg-white/5 overflow-hidden">
                                        <div
                                            className="h-full bg-emerald-400"
                                            style={{ width: `${m.c}%` }}
                                        />
                                    </div>
                                    <div className="mt-3 grid grid-cols-4 gap-1.5 text-center">
                                        {[
                                            ["Total", m.tot, "text-zukvo-300"],
                                            ["Done", m.done, "text-emerald-300"],
                                            ["Active", m.act, "text-amber-300"],
                                            ["Hours", m.h, "text-violet-300"],
                                        ].map((c, j) => (
                                            <div
                                                key={j}
                                                className="rounded-md border border-white/10 bg-[#0A0A0A] py-1.5"
                                            >
                                                <div
                                                    className={`font-heading text-[13px] ${c[2]}`}
                                                >
                                                    {c[1]}
                                                </div>
                                                <div className="text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                                                    {c[0]}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent activity */}
                    <div className="lg:col-span-3">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5 h-full">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-300 border border-amber-400/30">
                                    <Activity className="size-4" />
                                </span>
                                <div>
                                    <div className="text-[10.5px] uppercase tracking-[0.22em] text-zinc-500">
                                        Recent activity
                                    </div>
                                    <div className="font-heading text-lg text-white">
                                        Live feed
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 space-y-3.5">
                                {[
                                    ["Subhalakshmi", "002-0730", "UI changes in hivebug all-bugs page", "2h ago"],
                                    ["Mithun Ravichandran", "002-0734", "Add features in archived page", "3h ago"],
                                    ["Bharathi", "002-0733", "Changes in Documents Hub", "3h ago"],
                                    ["Bharathi", "002-0729", "Freelancer tab in dashboard", "5h ago"],
                                ].map((a, i) => (
                                    <div key={i} className="flex gap-3">
                                        <span className="mt-1 size-1.5 rounded-full bg-amber-400 shrink-0" />
                                        <div className="text-[12.5px] text-zinc-300 leading-snug">
                                            <span className="text-white">{a[0]}</span>{" "}
                                            <span className="text-zinc-500">ticket updated</span>{" "}
                                            <span className="font-mono text-zukvo-300">{a[1]}</span>
                                            <div className="text-[12px] text-zinc-400 mt-0.5">
                                                {a[2]}
                                            </div>
                                            <div className="text-[10.5px] text-zinc-500 mt-0.5">
                                                {a[3]}
                                            </div>
                                        </div>
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

/* ---------------- OVERALL PROGRESS ---------------- */

function OverallProgress() {
    const value = 52;
    return (
        <section
            data-testid="pm-overall-progress"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div
                            className="relative aspect-square max-w-[420px] mx-auto rounded-3xl border border-white/10 bg-[#0E0E10] p-8 flex items-center justify-center overflow-hidden"
                            style={{
                                backgroundImage:
                                    "radial-gradient(60% 80% at 50% 0%, rgba(99,102,241,0.18), transparent 60%)",
                            }}
                        >
                            <ProgressRing value={value} />
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Overall progress
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            One number that tells the truth.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-xl">
                            Zukvo computes overall project progress from sprint completion, ticket
                            outcomes and time logged — weighted by recency. No more "feels like
                            70%" updates in standup.
                        </p>
                        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
                            {[
                                { l: "Sprints", v: "67%" },
                                { l: "Tickets", v: "52%" },
                                { l: "Hours", v: "822h" },
                                { l: "Days", v: "137" },
                            ].map((s, i) => (
                                <div
                                    key={i}
                                    className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                                >
                                    <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                                        {s.l}
                                    </div>
                                    <div className="mt-1 font-heading text-2xl text-white tracking-tight">
                                        {s.v}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-7 flex flex-wrap items-center gap-3 text-[13px]">
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-300">
                                <Share2 className="size-3.5 text-zukvo-400" /> Share project
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-300">
                                <Edit3 className="size-3.5 text-zukvo-400" /> Edit details
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-300">
                                <Sparkles className="size-3.5 text-zukvo-400" /> Insights with Zai
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProgressRing({ value = 52 }) {
    const r = 110;
    const c = 2 * Math.PI * r;
    const off = c - (value / 100) * c;
    return (
        <svg viewBox="0 0 280 280" className="w-full h-full">
            <defs>
                <linearGradient id="pmRing" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
            </defs>
            <circle cx="140" cy="140" r={r} stroke="rgba(255,255,255,0.08)" strokeWidth="14" fill="none" />
            <circle
                cx="140"
                cy="140"
                r={r}
                stroke="url(#pmRing)"
                strokeWidth="14"
                strokeLinecap="round"
                fill="none"
                strokeDasharray={c}
                strokeDashoffset={off}
                transform="rotate(-90 140 140)"
            />
            <text
                x="140"
                y="140"
                textAnchor="middle"
                dominantBaseline="central"
                fill="white"
                style={{ fontFamily: "Outfit", fontSize: 64, fontWeight: 500, letterSpacing: "-2px" }}
            >
                {value}%
            </text>
            <text
                x="140"
                y="180"
                textAnchor="middle"
                fill="rgba(255,255,255,0.5)"
                style={{ fontFamily: "Outfit", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}
            >
                Overall
            </text>
        </svg>
    );
}

/* ---------------- TRASH ---------------- */

function TrashSection() {
    const items = [
        ["Old onboarding kit", "Q3 · 2024", "5d ago"],
        ["RFP draft — Helix Labs", "Sales", "9d ago"],
        ["Internal hackweek", "Internal", "21d ago"],
    ];
    return (
        <section
            id="trash"
            data-testid="pm-trash"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-rose-300">
                            Trash · Restore
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Deleted — but never lost.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Removed projects move to Trash with everything intact — sprints,
                            tickets, members, docs, time entries. Restore in one click.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                "Soft-delete with full context",
                                "30-day recovery window",
                                "Audit trail on every restore",
                                "Permanent purge requires admin",
                            ].map((b) => (
                                <li
                                    key={b}
                                    className="flex items-center gap-2 text-[14px] text-zinc-300"
                                >
                                    <CheckCircle2 className="size-4 text-zukvo-400" /> {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                            <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-rose-300">
                                    <Trash2 className="size-3.5" /> Trash · 3 projects
                                </div>
                                <span className="text-[11px] text-zinc-500">
                                    Auto-purge after 30 days
                                </span>
                            </div>
                            {items.map((it, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between px-5 py-4 border-t border-white/5 hover:bg-white/[0.02] transition-colors"
                                >
                                    <div className="flex items-center gap-3 min-w-0">
                                        <span className="inline-flex size-9 items-center justify-center rounded-lg bg-rose-500/10 text-rose-300 border border-rose-400/30 shrink-0">
                                            <Trash2 className="size-4" />
                                        </span>
                                        <div className="min-w-0">
                                            <div className="text-[13.5px] text-zinc-100 truncate">
                                                {it[0]}
                                            </div>
                                            <div className="text-[11px] text-zinc-500">
                                                {it[1]} · deleted {it[2]}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors text-white px-3 py-1.5 text-[11.5px]">
                                            <UndoDot className="size-3.5" /> Restore
                                        </button>
                                        <button className="text-[11px] text-zinc-500 hover:text-rose-300">
                                            Purge
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-5">
                            <ImageSlot
                                testid="pm-image-trash"
                                src={projectTrashImg}
                                alt="Project Trash & Restore"
                                label="Project Trash & Restore"
                                chromeUrl="zukvo.app/work/projects/trash"
                                aspect="auto"
                                objectFit="contain"
                                caption="Trash and restore bin for deleted projects."
                            />
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
        <section data-testid="pm-final-cta" className="relative bg-[#0A0A0A] text-white">
            <div className="mx-auto max-w-7xl px-6 md:px-10 pb-20">
                <div
                    className="zk-reveal relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0E0E10] p-10 md:p-16 text-center"
                    style={{
                        backgroundImage:
                            "radial-gradient(60% 80% at 50% 0%, rgba(99,102,241,0.18), transparent 60%)",
                    }}
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-zukvo-500/30 bg-zukvo-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                        <Plus className="size-3" /> Get started
                    </span>
                    <h2 className="mt-6 font-heading font-medium text-3xl md:text-5xl tracking-[-0.03em]">
                        Run your next project inside Zukvo.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/signup"
                            data-testid="pm-final-cta-primary"
                            className="inline-flex items-center gap-2 rounded-full bg-zukvo-500 hover:bg-zukvo-600 transition-colors text-white px-6 py-3.5 text-sm font-medium"
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

/* exported lucide kept here for tree-shake */
// eslint-disable-next-line no-unused-vars
const _icons = [Layers];

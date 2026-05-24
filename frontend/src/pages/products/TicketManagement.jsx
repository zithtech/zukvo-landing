import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    Ticket,
    GitBranch,
    Boxes,
    Bug,
    Trash2,
    Archive,
    Settings2,
    Plus,
    Zap,
    Sparkles,
    FileText,
    LayoutList,
    LayoutGrid,
    Share2,
    CheckCircle2,
    Clock,
    ListChecks,
    FolderTree,
    Layers,
    ChevronRight,
    Type,
    Wand2,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import ImageSlot from "@/components/ImageSlot";

const SPRINT_IMG =
    "https://customer-assets.emergentagent.com/job_39f817a0-5131-43e1-a744-33b263e6d84a/artifacts/meqjpr4p_image.png";
const ZAI_IMG =
    "https://customer-assets.emergentagent.com/job_39f817a0-5131-43e1-a744-33b263e6d84a/artifacts/rap6qk77_image.png";
const MAIN_IMG =
    "https://customer-assets.emergentagent.com/job_39f817a0-5131-43e1-a744-33b263e6d84a/artifacts/9vyiu5cd_image.png";

const SUBMODULES = [
    { id: "tickets", label: "Tickets", icon: Ticket },
    { id: "sprint-plans", label: "Sprint Plans", icon: GitBranch },
    { id: "buckets", label: "Buckets", icon: Boxes },
    { id: "bug-list", label: "Bug List", icon: Bug },
    { id: "trash", label: "Trash", icon: Trash2 },
    { id: "archived", label: "Archived", icon: Archive },
    { id: "configurations", label: "Configurations", icon: Settings2 },
];

export default function TicketManagement() {
    useEffect(() => {
        // Reveal observer
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
            data-testid="ticket-management-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink overflow-x-clip"
        >
            <Nav />
            <Hero />
            <SubmoduleNav />
            <MainView />
            <CreationTypes />
            <SprintBacklog />
            <SmartDocs />
            <SprintCompletion />
            <BucketsSection />
            <BugListSection />
            <TrashArchived />
            <ConfigSection />
            <FinalCTA />
            <Footer />
        </main>
    );
}

/* ---------------- HERO ---------------- */

function Hero() {
    return (
        <section
            data-testid="tm-hero"
            className="relative pt-32 md:pt-40 pb-16 md:pb-24 zk-mesh"
        >
            <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_75%)] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                <div className="zk-reveal">
                    <Link
                        to="/products"
                        data-testid="tm-breadcrumb"
                        className="inline-flex items-center gap-1.5 text-[12px] text-zinc-500 hover:text-zukvo-600"
                    >
                        <ArrowLeft className="size-3.5" />
                        All products
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-600">
                            <Ticket className="size-3.5" />
                            Ticket Management
                        </div>
                        <h1
                            data-testid="tm-headline"
                            className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink"
                        >
                            The fastest way <br />
                            to ship work.
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            Tickets, sprints, buckets and bugs — engineered to be keyboard-first
                            and Zai-assisted. Plan a sprint, run it, close it, and ship the next
                            one without leaving Zukvo.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/#start"
                                data-testid="tm-cta-primary"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Ticket Management
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            <a
                                href="#tickets"
                                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-medium text-zinc-800 hover:border-zinc-400 transition-colors"
                            >
                                See every feature
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="zk-reveal grid grid-cols-2 gap-3">
                            {[
                                { k: "3", v: "Creation modes" },
                                { k: "AI", v: "Powered by Zai" },
                                { k: "List + Board", v: "Switch any time" },
                                { k: "QA-grade", v: "Bug list + HiveBug AI" },
                            ].map((s, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-zinc-200 bg-white px-5 py-4"
                                >
                                    <div className="font-heading text-2xl text-zukvo-ink tracking-tight">
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
            data-testid="tm-submodule-nav"
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
                            data-testid={`tm-pill-${s.id}`}
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
        <section id="tickets" data-testid="tm-main-view" className="relative bg-[#0A0A0A] text-white">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Tickets · the home view
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Every piece of work, <br /> in one calm view.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            See active sprint progress, status, priority, assignee and type at a
                            glance. Filter, search and bulk-edit at the speed of thought.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                "Saved filters & views",
                                "Bulk edit + multi-select",
                                "Quick search across every ticket",
                                "Switch between List and Board view",
                            ].map((b) => (
                                <li key={b} className="flex items-center gap-2 text-[14px] text-zinc-300">
                                    <CheckCircle2 className="size-4 text-zukvo-400" /> {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-7">
                        <ImageSlot
                            testid="tm-image-main"
                            src={MAIN_IMG}
                            alt="Ticket Management main view"
                            label="Tickets — main view"
                            chromeUrl="zukvo.app/work/tickets"
                            caption="Replace with your screenshot of the main Tickets list."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- CREATION TYPES ---------------- */

function CreationTypes() {
    const types = [
        {
            id: "manual",
            kicker: "Manual",
            title: "Full control, every field.",
            desc: "Fill out every detail yourself — title, description, type, priority, assignee, estimation, watchers, attachments. Best when you know exactly what you want.",
            icon: Type,
            mock: <ManualMock />,
        },
        {
            id: "instant",
            kicker: "Instant",
            title: "Just the title. Done.",
            desc: "For when you're moving fast — type a title, hit enter, and the ticket lands in the backlog. Refine later.",
            icon: Zap,
            mock: <InstantMock />,
        },
        {
            id: "zai",
            kicker: "Create with Zai",
            title: "Describe it. Zai builds the rest.",
            desc: "Type plain English. Zai writes the title, description, estimation, and a list of suggested subtasks you can create with one click.",
            icon: Wand2,
            featured: true,
            mock: <ZaiMock />,
        },
    ];

    return (
        <section
            id="creation"
            data-testid="tm-creation-types"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28 border-t border-white/5">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Three ways to create
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Manual. Instant. Zai.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Match the creation flow to the moment — full control, frictionless capture,
                        or AI-assisted detail.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {types.map((t) => (
                        <div
                            key={t.id}
                            data-testid={`tm-creation-${t.id}`}
                            className={`relative rounded-2xl p-7 overflow-hidden ${
                                t.featured
                                    ? "zk-trace-border"
                                    : "border border-white/10 bg-[#0E0E10]"
                            }`}
                        >
                            <div className="relative">
                                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-zukvo-500/10 text-zukvo-400 border border-zukvo-500/20">
                                    <t.icon className="size-5" />
                                </span>
                                <div className="mt-5 text-[11px] uppercase tracking-[0.22em] text-zukvo-300">
                                    {t.kicker}
                                </div>
                                <h3 className="mt-2 font-heading font-medium text-2xl tracking-[-0.02em]">
                                    {t.title}
                                </h3>
                                <p className="mt-3 text-[14px] text-zinc-400 leading-relaxed">
                                    {t.desc}
                                </p>
                                <div className="mt-6">{t.mock}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ManualMock() {
    return (
        <div className="rounded-xl border border-white/10 bg-[#101014] p-3 space-y-2 text-[12px]">
            {[
                ["Title", "Refactor auth middleware"],
                ["Type", "Task · P2"],
                ["Assignee", "Bharathi"],
                ["Estimation", "5 pts"],
                ["Sprint", "Cycle 3"],
            ].map((r, i) => (
                <div
                    key={i}
                    className="flex items-center justify-between rounded-md bg-white/5 border border-white/5 px-3 py-2"
                >
                    <span className="text-zinc-500 text-[10.5px] uppercase tracking-[0.2em]">
                        {r[0]}
                    </span>
                    <span className="text-zinc-200 text-[12.5px]">{r[1]}</span>
                </div>
            ))}
        </div>
    );
}

function InstantMock() {
    return (
        <div className="rounded-xl border border-white/10 bg-[#101014] p-4">
            <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                <Zap className="size-3.5 text-amber-400" />
                <span className="uppercase tracking-[0.2em]">Quick add · ⌘N</span>
            </div>
            <div className="mt-3 rounded-md border border-zukvo-500/30 bg-[#0E0E13] px-3 py-3">
                <div className="text-[14px] text-zinc-100">
                    Add empty-state to leads page
                    <span className="ml-1 inline-block w-1 h-4 bg-zukvo-400 align-middle animate-pulse" />
                </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-500">
                <span>Press Enter to create</span>
                <span className="rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em]">
                    Backlog
                </span>
            </div>
        </div>
    );
}

function ZaiMock() {
    return (
        <div className="rounded-xl border border-zukvo-500/30 bg-[#0B0B12] p-4 shadow-[inset_0_0_60px_-20px_rgba(99,102,241,0.35)]">
            <div className="flex items-center gap-2 text-[11px] text-zukvo-300 uppercase tracking-[0.2em]">
                <Sparkles className="size-3.5" />
                Create with Zai
            </div>
            <div className="mt-3 rounded-md bg-white/5 border border-white/10 px-3 py-2.5 text-[13px] text-zinc-300">
                "Build a saved-views feature for tickets"
            </div>
            <div className="mt-3 space-y-2 text-[12.5px]">
                <Row k="Title" v="Saved views for Tickets module" />
                <Row k="Description" v="Persist filter sets per user…" muted />
                <Row k="Estimation" v="8 pts" />
                <div className="rounded-md border border-white/10 bg-white/5 px-3 py-2">
                    <div className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-500 mb-1.5">
                        Suggested subtasks
                    </div>
                    {["Schema + migration", "Save / load API", "Sidebar UI", "Permissions"].map(
                        (s, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 text-[12px] text-zinc-300 py-0.5"
                            >
                                <span className="size-3.5 rounded border border-zukvo-500/40 bg-zukvo-500/10 inline-flex items-center justify-center">
                                    <span className="size-1.5 rounded-sm bg-zukvo-400" />
                                </span>
                                {s}
                            </div>
                        ),
                    )}
                </div>
            </div>
        </div>
    );
}

function Row({ k, v, muted = false }) {
    return (
        <div className="flex items-start gap-2">
            <span className="w-20 text-[10.5px] uppercase tracking-[0.2em] text-zinc-500 mt-0.5">
                {k}
            </span>
            <span className={muted ? "text-zinc-500 text-[12.5px]" : "text-zinc-200 text-[12.5px]"}>
                {v}
            </span>
        </div>
    );
}

/* ---------------- SPRINT vs BACKLOG ---------------- */

function SprintBacklog() {
    const [view, setView] = useState("list");
    return (
        <section
            id="sprint-plans"
            data-testid="tm-sprint-backlog"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 lg:sticky lg:top-28">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Sprint plans · Backlog
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                            Manage the sprint and the backlog from one place.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Drag tickets in and out of sprints, share them with stakeholders, and
                            switch between List and Board view without losing context.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: GitBranch, t: "Add or remove from sprint" },
                                { i: Layers, t: "Backlog grooming with filters" },
                                { i: Share2, t: "Share any ticket via link" },
                                { i: LayoutGrid, t: "List ↔ Board view toggle" },
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
                        <div className="flex items-center justify-between mb-3">
                            <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                                Live preview
                            </div>
                            <div className="inline-flex rounded-full border border-white/10 bg-[#101014] p-1 text-[11px]">
                                <button
                                    data-testid="tm-view-list"
                                    onClick={() => setView("list")}
                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors ${
                                        view === "list"
                                            ? "bg-white text-zukvo-ink"
                                            : "text-zinc-400 hover:text-white"
                                    }`}
                                >
                                    <LayoutList className="size-3.5" /> List
                                </button>
                                <button
                                    data-testid="tm-view-board"
                                    onClick={() => setView("board")}
                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors ${
                                        view === "board"
                                            ? "bg-white text-zukvo-ink"
                                            : "text-zinc-400 hover:text-white"
                                    }`}
                                >
                                    <LayoutGrid className="size-3.5" /> Board
                                </button>
                            </div>
                        </div>
                        {view === "list" ? <ListPreview /> : <BoardPreview />}
                        <div className="mt-6 grid sm:grid-cols-2 gap-4">
                            <ImageSlot
                                testid="tm-image-sprint"
                                src={SPRINT_IMG}
                                alt="Sprint completion"
                                label="Sprint board"
                                chromeUrl="zukvo.app/work/sprint"
                                aspect="16/10"
                            />
                            <ImageSlot
                                testid="tm-image-creation"
                                src={ZAI_IMG}
                                alt="Ticket creation"
                                label="Create ticket"
                                chromeUrl="zukvo.app/work/new"
                                aspect="16/10"
                                objectPosition="top"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ListPreview() {
    const rows = [
        ["002-0731", "Socket impl. · tickets", "In progress", "P2", "indigo"],
        ["002-0729", "Freelancer tab in dashboard", "Dev complete", "P2", "teal"],
        ["002-0727", "Add missing permission · RBAC", "In progress", "P2", "indigo"],
        ["002-0712", "Upgraded Tickets module · QA", "Live", "P3", "emerald"],
        ["002-0707", "Ticket module docs", "In progress", "P2", "indigo"],
    ];
    const tone = {
        indigo: "bg-zukvo-500/10 text-zukvo-300 border-zukvo-500/30",
        teal: "bg-cyan-500/10 text-cyan-300 border-cyan-400/30",
        emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-400/30",
    };
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
            <div className="grid grid-cols-12 px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] text-zinc-500 border-b border-white/5">
                <div className="col-span-2">ID</div>
                <div className="col-span-6">Title</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-1">Pri</div>
                <div className="col-span-1 text-right">·</div>
            </div>
            {rows.map((r, i) => (
                <div
                    key={i}
                    className="grid grid-cols-12 items-center px-4 py-3 border-t border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                    <div className="col-span-2 font-mono text-[12px] text-zinc-400">{r[0]}</div>
                    <div className="col-span-6 text-[13px] text-zinc-200 truncate">{r[1]}</div>
                    <div className="col-span-2">
                        <span
                            className={`inline-flex items-center text-[10px] uppercase tracking-[0.2em] rounded-full border px-2 py-0.5 ${tone[r[4]]}`}
                        >
                            {r[2]}
                        </span>
                    </div>
                    <div className="col-span-1">
                        <span className="rounded bg-amber-500/10 text-amber-300 border border-amber-400/30 px-1.5 py-0.5 text-[10px]">
                            {r[3]}
                        </span>
                    </div>
                    <div className="col-span-1 text-right text-zinc-500 text-[11px]">⋯</div>
                </div>
            ))}
        </div>
    );
}

function BoardPreview() {
    const cols = [
        { t: "Backlog", c: 8, items: ["Saved views", "Empty states", "Bulk archive"] },
        { t: "In progress", c: 4, items: ["Socket impl.", "RBAC matrix"] },
        { t: "Review", c: 2, items: ["Permission audit"] },
        { t: "Done", c: 12, items: ["Sprint modal", "Mail setup"] },
    ];
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-3 grid grid-cols-2 md:grid-cols-4 gap-3">
            {cols.map((c, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <div className="flex items-center justify-between text-[11px] mb-2.5">
                        <span className="text-zinc-300 font-medium">{c.t}</span>
                        <span className="text-zinc-500">{c.c}</span>
                    </div>
                    <div className="space-y-2">
                        {c.items.map((it, j) => (
                            <div
                                key={j}
                                className="rounded-md border border-white/10 bg-[#0A0A0A] px-2.5 py-2 text-[12px] text-zinc-300"
                            >
                                {it}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

/* ---------------- SMART DOCS ---------------- */

function SmartDocs() {
    return (
        <section
            id="smart-docs"
            data-testid="tm-smart-docs"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                            <div className="flex items-center justify-between text-[11px] text-zinc-500">
                                <span className="font-mono">TKT-002-0707 · Ticket module docs</span>
                                <span className="inline-flex items-center gap-1.5 text-zukvo-300">
                                    <Sparkles className="size-3.5" />
                                    Generate with Zai
                                </span>
                            </div>
                            <div className="mt-4 grid sm:grid-cols-3 gap-3">
                                {[
                                    { i: FileText, t: "Scope document", s: "Auto-generated" },
                                    { i: ListChecks, t: "Test scope", s: "QA-ready" },
                                    { i: FolderTree, t: "Linked in Doc Hub", s: "Always synced" },
                                ].map((d, i) => (
                                    <div
                                        key={i}
                                        className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                                    >
                                        <span className="inline-flex size-9 items-center justify-center rounded-lg bg-zukvo-500/10 text-zukvo-300 border border-zukvo-500/20">
                                            <d.i className="size-4" />
                                        </span>
                                        <div className="mt-3 text-[13.5px] text-white font-medium">
                                            {d.t}
                                        </div>
                                        <div className="text-[11px] text-zinc-500">{d.s}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 rounded-xl border border-white/10 bg-[#0A0A0A] p-4">
                                <div className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-500 mb-2">
                                    Generated scope · preview
                                </div>
                                <div className="text-[12.5px] text-zinc-300 space-y-1.5 leading-relaxed">
                                    <p>
                                        <span className="text-white">Objective:</span> Document the
                                        Ticket module for new joiners and external collaborators.
                                    </p>
                                    <p>
                                        <span className="text-white">Out of scope:</span> Visual
                                        redesign, billing changes.
                                    </p>
                                    <p>
                                        <span className="text-white">Acceptance:</span> Linked from
                                        Help Center, reviewed by tech lead.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Smart document creation
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Type once. Get scope, tests, and more.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Inside any ticket, click and describe what you need. Zukvo uses the
                            ticket context to generate scope documents, test scopes, and related
                            docs — all linked into the Document Hub automatically.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                "Context-aware drafting from ticket details",
                                "Scope, test scope, and custom doc types",
                                "Auto-linked to ticket inside Document Hub",
                                "Versioned, shareable (public / private)",
                            ].map((b) => (
                                <li
                                    key={b}
                                    className="flex items-center gap-2.5 text-[14px] text-zinc-300"
                                >
                                    <CheckCircle2 className="size-4 text-zukvo-400" /> {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- SPRINT COMPLETION ---------------- */

function SprintCompletion() {
    const [tab, setTab] = useState("summary");
    return (
        <section
            id="sprint-completion"
            data-testid="tm-sprint-completion"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Sprint completion
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Close out cycles cleanly.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        When you click <em className="not-italic text-white">Complete Sprint</em>,
                        Zukvo opens a guided panel with three tabs — Summary, Pending, Completed —
                        and resolves every loose end before the next cycle begins.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                            <div className="flex items-center gap-1 p-2 border-b border-white/5 bg-white/[0.02]">
                                {["summary", "pending", "completed"].map((t) => (
                                    <button
                                        key={t}
                                        data-testid={`tm-sc-tab-${t}`}
                                        onClick={() => setTab(t)}
                                        className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium capitalize transition-colors ${
                                            tab === t
                                                ? "bg-zukvo-500 text-white"
                                                : "text-zinc-400 hover:text-white"
                                        }`}
                                    >
                                        {t}
                                        <span
                                            className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] ${
                                                tab === t
                                                    ? "bg-white/20"
                                                    : "bg-white/5 text-zinc-500"
                                            }`}
                                        >
                                            {t === "summary" ? "·" : t === "pending" ? "11" : "56"}
                                        </span>
                                    </button>
                                ))}
                            </div>
                            <div className="p-4 min-h-[280px]">
                                {tab === "summary" && <SCSummary />}
                                {tab === "pending" && <SCPending />}
                                {tab === "completed" && <SCCompleted />}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <ImageSlot
                            testid="tm-image-sprint-completion"
                            src={SPRINT_IMG}
                            alt="Sprint completion modal"
                            label="Sprint completion"
                            chromeUrl="zukvo.app/work/sprint/complete"
                            aspect="16/10"
                            caption="The actual Sprint Completion panel inside Zukvo."
                        />
                        <div className="mt-5 grid sm:grid-cols-3 gap-3">
                            {[
                                { i: Boxes, t: "Move to Buckets", s: "Group for next cycle" },
                                { i: Layers, t: "Move to Backlog", s: "Reprioritize later" },
                                { i: Trash2, t: "Delete", s: "If it's no longer needed" },
                            ].map((a, i) => (
                                <div
                                    key={i}
                                    className="rounded-xl border border-white/10 bg-[#0E0E10] p-4"
                                >
                                    <span className="inline-flex size-8 items-center justify-center rounded-lg bg-zukvo-500/10 text-zukvo-300 border border-zukvo-500/20">
                                        <a.i className="size-4" />
                                    </span>
                                    <div className="mt-2.5 text-[13px] text-white font-medium">
                                        {a.t}
                                    </div>
                                    <div className="text-[11.5px] text-zinc-500">{a.s}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SCSummary() {
    return (
        <div className="space-y-3">
            <div className="rounded-xl bg-gradient-to-br from-zukvo-600 to-violet-600 p-4 text-white">
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-80">Sprint focus</div>
                <div className="font-heading text-xl font-medium tracking-tight">
                    Freelancer Kit Release · Cycle-1
                </div>
                <div className="text-[11.5px] opacity-90 mt-1">Apr 6 – Apr 13 · 7 days</div>
                <div className="mt-3 flex items-end gap-2">
                    <span className="font-heading text-3xl font-medium">84%</span>
                    <span className="text-[11px] pb-1 opacity-80">progress</span>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <Stat l="Total" v="67" />
                <Stat l="Done" v="56" />
                <Stat l="Pending" v="11" tone="amber" />
            </div>
        </div>
    );
}
function SCPending() {
    return (
        <div className="space-y-2">
            {["Socket impl. tickets", "Add missing permission · RBAC", "Bulk import bug", "Empty states · leads"].map(
                (t, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.02] px-3 py-2.5"
                    >
                        <span className="text-[13px] text-zinc-200">{t}</span>
                        <span className="text-[10px] uppercase tracking-[0.18em] rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 px-2 py-0.5">
                            Pending
                        </span>
                    </div>
                ),
            )}
            <div className="text-[11.5px] text-zinc-500 pt-2">
                Choose: move to bucket · move to backlog · delete
            </div>
        </div>
    );
}
function SCCompleted() {
    return (
        <div className="space-y-2">
            {["Sprint completion modal", "Mail setup integration", "From-mail config", "Notifications cleanup"].map(
                (t, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.02] px-3 py-2.5"
                    >
                        <span className="text-[13px] text-zinc-200">{t}</span>
                        <span className="text-[10px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                            Done
                        </span>
                    </div>
                ),
            )}
        </div>
    );
}
function Stat({ l, v, tone = "indigo" }) {
    const tones = { indigo: "text-zukvo-300", amber: "text-amber-300" };
    return (
        <div className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2.5">
            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{l}</div>
            <div className={`font-heading text-xl ${tones[tone] || tones.indigo}`}>{v}</div>
        </div>
    );
}

/* ---------------- BUCKETS ---------------- */

function BucketsSection() {
    return (
        <section
            id="buckets"
            data-testid="tm-buckets"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Buckets
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Park work without losing it.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Buckets let you group sprint leftovers, themed initiatives, or long-tail
                            ideas. Pull from a bucket into a future sprint with one drag.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                "Color-coded buckets per theme",
                                "Drag-back into any sprint",
                                "Persistent across cycles",
                                "Surfaces in Sprint Completion",
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
                        <ImageSlot
                            testid="tm-image-buckets"
                            label="Buckets workspace"
                            chromeUrl="zukvo.app/work/buckets"
                            aspect="16/10"
                            caption="Replace with a screenshot of the Buckets view."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- BUG LIST ---------------- */

function BugListSection() {
    return (
        <section
            id="bug-list"
            data-testid="tm-bug-list"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        <Bug className="size-3" /> Bug list · QA workspace
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        A bug tracker QA actually loves.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Maintain dedicated folders per module — like{" "}
                        <span className="text-white font-mono text-[13px] bg-white/5 border border-white/10 rounded px-1.5 py-0.5">
                            Client Module · V1
                        </span>{" "}
                        — and add bugs in seconds. When it's time to ship work, convert bugs into
                        tickets manually or let HiveBug AI do it for you.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-7">
                        <ImageSlot
                            testid="tm-image-buglist"
                            label="Bug list — collections + sheets"
                            chromeUrl="zukvo.app/work/bugs"
                            aspect="16/10"
                            caption="QA workspace — folders on the left, bug sheet on the right."
                        />
                    </div>

                    <div className="lg:col-span-5 space-y-4">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                            <div className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-500">
                                Folder
                            </div>
                            <div className="mt-1 font-heading text-lg text-white">
                                Client Module · V1
                            </div>
                            <div className="mt-3 space-y-1.5">
                                {[
                                    ["Login", "rose", "Critical"],
                                    ["Filters reset on refresh", "amber", "Major"],
                                    ["Empty state cut on mobile", "emerald", "Minor"],
                                    ["Avatar upload stuck", "rose", "Critical"],
                                    ["Tooltip clipping", "amber", "Major"],
                                ].map((b, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between rounded-md bg-white/[0.02] border border-white/5 px-3 py-2"
                                    >
                                        <span className="text-[12.5px] text-zinc-300 truncate">
                                            {b[0]}
                                        </span>
                                        <span
                                            className={`text-[10px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 ${
                                                b[1] === "rose"
                                                    ? "border-rose-400/30 bg-rose-500/10 text-rose-300"
                                                    : b[1] === "amber"
                                                      ? "border-amber-400/30 bg-amber-500/10 text-amber-300"
                                                      : "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                                            }`}
                                        >
                                            {b[2]}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <BugFlow
                                testid="bug-flow-manual"
                                kicker="Manual creation"
                                title="Group or split — your call."
                                desc="QA users craft tickets by severity and type. Combine 5 bugs into one ticket, or create separate tickets per bug."
                                pillIcon={Type}
                            />
                            <BugFlow
                                testid="bug-flow-hivebug"
                                kicker="HiveBug AI"
                                title="One click. Ticket cluster — done."
                                desc="HiveBug analyzes your bug list, clusters related issues, and suggests an optimal ticket layout. Approve in one click."
                                pillIcon={Sparkles}
                                highlight
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function BugFlow({ kicker, title, desc, pillIcon: Icon, highlight = false, testid }) {
    return (
        <div
            data-testid={testid}
            className={`relative rounded-2xl p-5 ${
                highlight
                    ? "zk-trace-border"
                    : "border border-white/10 bg-[#0E0E10]"
            }`}
        >
            <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-zukvo-500/30 bg-zukvo-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-zukvo-300">
                    <Icon className="size-3" /> {kicker}
                </span>
                <div className="mt-3 font-heading text-lg text-white tracking-tight">{title}</div>
                <div className="mt-1.5 text-[13px] text-zinc-400 leading-relaxed">{desc}</div>
            </div>
        </div>
    );
}

/* ---------------- TRASH & ARCHIVED ---------------- */

function TrashArchived() {
    return (
        <section
            data-testid="tm-trash-archived"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid md:grid-cols-2 gap-5">
                    <div id="trash" className="zk-reveal space-y-4">
                        <FeatureCardLight
                            icon={Trash2}
                            kicker="Trash"
                            title="Mistakes are reversible."
                            desc="Deleted tickets land in Trash for 30 days. Restore in one click — context, comments and attachments preserved."
                        />
                        <ImageSlot
                            testid="tm-image-trash"
                            label="Trash — restore in one click"
                            chromeUrl="zukvo.app/work/trash"
                            aspect="16/10"
                        />
                    </div>
                    <div id="archived" className="zk-reveal space-y-4">
                        <FeatureCardLight
                            icon={Archive}
                            kicker="Archived"
                            title="Keep history. Keep it tidy."
                            desc="Archive tickets you don't need in the active view but want to keep for reference. Searchable any time."
                        />
                        <ImageSlot
                            testid="tm-image-archived"
                            label="Archived tickets"
                            chromeUrl="zukvo.app/work/archived"
                            aspect="16/10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureCardLight({ icon: Icon, kicker, title, desc }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-6">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-zukvo-500/10 text-zukvo-300 border border-zukvo-500/20">
                <Icon className="size-5" />
            </span>
            <div className="mt-4 text-[11px] uppercase tracking-[0.22em] text-zukvo-300">
                {kicker}
            </div>
            <div className="mt-2 font-heading text-2xl text-white tracking-tight">{title}</div>
            <p className="mt-2 text-[14px] text-zinc-400 leading-relaxed">{desc}</p>
        </div>
    );
}

/* ---------------- CONFIGURATIONS ---------------- */

function ConfigSection() {
    return (
        <section
            id="configurations"
            data-testid="tm-configurations"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Configurations
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Make Tickets fit your team.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Workspace-level controls for statuses, priorities, ticket types,
                            estimation scales, automations, and Zai prompt templates.
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-2.5 max-w-md">
                            {[
                                "Custom statuses",
                                "Priorities & types",
                                "Estimation scales",
                                "Automations",
                                "Zai prompt presets",
                                "Default views",
                            ].map((c) => (
                                <div
                                    key={c}
                                    className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-[12.5px] text-zinc-300 inline-flex items-center gap-2"
                                >
                                    <ChevronRight className="size-3 text-zukvo-400" />
                                    {c}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <ImageSlot
                            testid="tm-image-configurations"
                            label="Ticket configurations"
                            chromeUrl="zukvo.app/admin/tickets"
                            aspect="16/10"
                        />
                        <div className="mt-5">
                            <ImageSlot
                                testid="tm-image-detail"
                                label="Ticket details panel"
                                chromeUrl="zukvo.app/work/tickets/002-0731"
                                aspect="16/10"
                                caption="Full ticket detail view — replace with your screenshot."
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
        <section data-testid="tm-final-cta" className="relative bg-[#0A0A0A] text-white">
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
                        Run your next sprint inside Zukvo.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/#start"
                            data-testid="tm-final-cta-primary"
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
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

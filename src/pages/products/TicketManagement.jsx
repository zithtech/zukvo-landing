import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
    Maximize2,
    X,
    Repeat,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import ImageSlot from "@/components/ImageSlot";

import ticketSprintImg from "@/assets/ticket-sprint.png";
import ticketCreateWithZaiImg from "@/assets/ticket-create-with-zai.png";
import createTicketZai1Img from "@/assets/createticketZai.png";
import createTicketZai2Img from "@/assets/createticketZai2.png";
import sprintCompletionSummaryImg from "@/assets/sprintcompletionsummary.png";
import sprintCompletionPendingImg from "@/assets/sprintcompletionpending.png";
import sprintCyclesMainImg from "@/assets/sprintcyclesmainpage.png";
import sprintDetailsImg from "@/assets/sprntDetails.png";
import ticketDetailsDrawerImg from "@/assets/ticketdetailsdrawer.png";
import backlogsImg from "@/assets/backlogs.png";
import ticketMainPageNewImg from "@/assets/ticketmainpagenew.png";
import ticketsBoardViewImg from "@/assets/ticketsboardview.png";
import ticketBucketImg from "@/assets/ticket-bucket.png";
import ticketBuglistImg from "@/assets/ticket-buglist.png";
import ticketTrashImg from "@/assets/ticket-trash.png";
import ticketArchiveImg from "@/assets/ticket-archive.png";
import ticketPerformanceImg from "@/assets/ticket-performance.png";
import ticketViewImg from "@/assets/ticket-view.png";

const SPRINT_IMG = ticketSprintImg;
const ZAI_IMG = ticketCreateWithZaiImg;
const MAIN_IMG = ticketMainPageNewImg;
const BOARD_IMG = ticketsBoardViewImg;
const BUCKET_IMG = ticketBucketImg;
const BUGLIST_IMG = ticketBuglistImg;
const TRASH_IMG = ticketTrashImg;
const ARCHIVE_IMG = ticketArchiveImg;
const CONFIG_IMG = ticketPerformanceImg;
const DETAIL_IMG = ticketViewImg;

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
            className="relative bg-[#FAFAFA] text-zukvo-ink"
        >
            <SEO />
            <Nav />
            <Hero />
            <SubmoduleNav />
            <MainView />
            <TicketDetailsBacklog />
            <CreationTypes />
            <SprintBacklog />
            <SmartDocs />
            <SprintPlansDetails />
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
                                href="/signup"
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
                <div className="w-full flex items-center gap-2 overflow-x-auto no-scrollbar">
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
                        {/* Outer wrapper — not clipped, lets the tags hang off the edges */}
                        <div
                            data-testid="tm-image-main"
                            className="relative mx-auto max-w-[760px] px-3 sm:px-6 pt-6 pb-10"
                        >
                            {/* Inner panel — clipped: gradient + glows + main screenshot */}
                            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A12] p-2 sm:p-2.5">
                                {/* Ambient lighting */}
                                <div aria-hidden className="pointer-events-none absolute inset-0">
                                    <div className="absolute top-0 right-0 h-full w-3/5 bg-gradient-to-bl from-zukvo-500/15 via-violet-500/5 to-transparent" />
                                    <div className="absolute bottom-0 left-0 h-3/4 w-3/5 bg-gradient-to-tr from-fuchsia-500/10 via-violet-600/5 to-transparent" />
                                </div>

                                {/* Main screenshot — lifted */}
                                <div className="relative rounded-xl overflow-hidden ring-1 ring-white/[0.12] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                                    <img
                                        src={MAIN_IMG}
                                        alt="Ticket Management main view"
                                        className="block w-full h-auto"
                                    />
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    />
                                </div>
                            </div>

                            {/* Floating: Sprint status pill — hangs off the top-left edge */}
                            <div className="absolute -top-1 left-7 sm:left-12 inline-flex items-center gap-1.5 rounded-full bg-zinc-900/85 backdrop-blur-xl pl-1.5 pr-2.5 py-1 text-white shadow-[0_16px_34px_-12px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.1]">
                                <span className="inline-flex size-4 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
                                    <GitBranch className="size-2.5" />
                                </span>
                                <span className="text-[9.5px] font-semibold tracking-tight whitespace-nowrap">
                                    Sprint 3 · In progress
                                </span>
                            </div>

                            {/* Floating: progress gauge — hangs off the bottom-left edge (sm+) */}
                            <div className="hidden sm:inline-flex absolute -bottom-1 left-6 sm:left-2 items-center gap-2 rounded-xl bg-white/95 backdrop-blur-xl pl-1 pr-3 py-1 shadow-[0_20px_44px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.6)_inset] ring-1 ring-black/[0.04]">
                                <div className="relative shrink-0">
                                    <svg viewBox="0 0 40 40" className="size-7 -rotate-90">
                                        <defs>
                                            <linearGradient id="tm-gauge" x1="0" y1="0" x2="1" y2="1">
                                                <stop offset="0%" stopColor="#10B981" />
                                                <stop offset="100%" stopColor="#6366F1" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="20" cy="20" r="15" fill="none" stroke="rgba(99,102,241,0.14)" strokeWidth="4" />
                                        <circle
                                            cx="20"
                                            cy="20"
                                            r="15"
                                            fill="none"
                                            stroke="url(#tm-gauge)"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeDasharray={`${0.87 * 2 * Math.PI * 15} ${2 * Math.PI * 15}`}
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="font-heading text-[8px] font-bold tracking-tight text-zinc-900 leading-none">
                                            87%
                                        </span>
                                    </div>
                                </div>
                                <div className="leading-tight">
                                    <div className="text-[7.5px] font-bold uppercase tracking-[0.18em] text-zukvo-600">
                                        Sprint done
                                    </div>
                                    <div className="text-[9.5px] font-semibold text-zinc-900 whitespace-nowrap">
                                        23 / 30 tickets
                                    </div>
                                </div>
                            </div>

                            {/* Floating: Board view card — hangs off the bottom-right corner */}
                            <div className="absolute -bottom-2 -right-1 sm:-right-3 w-[38%] max-w-[230px] overflow-hidden rounded-lg bg-[#0E0E10] ring-1 ring-white/[0.16] shadow-[0_30px_60px_-16px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.05)_inset]">
                                <img
                                    src={BOARD_IMG}
                                    alt="Tickets board view"
                                    loading="lazy"
                                    className="block w-full h-auto"
                                />
                                <span className="absolute top-1.5 left-1.5 inline-flex items-center gap-1 rounded-full bg-zukvo-ink/85 backdrop-blur px-1.5 py-0.5 text-white shadow ring-1 ring-white/10">
                                    <LayoutGrid className="size-2.5 text-zukvo-300" />
                                    <span className="text-[8.5px] font-semibold tracking-tight">
                                        Board view
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- TICKET DETAILS & BACKLOG ---------------- */

function TicketDetailsBacklog() {
    return (
        <section
            id="ticket-details"
            data-testid="tm-ticket-details-backlog"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Ticket Details &amp; Backlog
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Every detail in one drawer. Every idea in one backlog.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Open a ticket to see the whole story without losing your place — and keep
                        everything that isn't scheduled yet in a backlog you can pull from anytime.
                    </p>
                </div>

                {/* Ticket detail drawer */}
                <div className="mt-14 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="zk-reveal">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Ticket Detail
                        </div>
                        <h3 className="mt-4 font-heading font-medium text-2xl md:text-[26px] tracking-[-0.02em] text-white">
                            The full picture in a single drawer.
                        </h3>
                        <p className="mt-4 text-[14.5px] text-zinc-400 leading-relaxed max-w-lg">
                            Click any ticket to open a rich detail view — description, planning,
                            estimation, time tracking, comments and attachments — all without leaving
                            your list.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                "Rich description with linked documents",
                                "Core details: assignee, reporter, status, priority, type",
                                "Planning & estimation — story points, sprint, dates",
                                "Built-in time tracking and full activity log",
                                "Comments, attachments, links & timeline tabs",
                            ].map((b) => (
                                <li key={b} className="flex items-start gap-2.5 text-[14px] text-zinc-300">
                                    <CheckCircle2 className="mt-0.5 size-4 text-zukvo-400 shrink-0" />
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <ZaiStepImage
                            src={ticketDetailsDrawerImg}
                            alt="Ticket detail drawer — description, planning, time tracking"
                            badge="Ticket Detail"
                            icon={Ticket}
                        />

                        {/* Floating: Core Details — overlaps the left edge (desktop) */}
                        <div className="hidden lg:block absolute top-12 -left-6 w-[182px] rounded-xl bg-white/95 backdrop-blur-xl p-3 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.6)_inset] ring-1 ring-black/[0.04]">
                            <div className="flex items-center gap-1.5">
                                <span className="inline-flex size-4 items-center justify-center rounded-md bg-gradient-to-br from-zukvo-500 to-violet-600">
                                    <LayoutList className="size-2.5 text-white" />
                                </span>
                                <span className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-zukvo-600">
                                    Core details
                                </span>
                            </div>
                            <div className="mt-2.5 space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <span className="text-[9.5px] text-zinc-500">Assignee</span>
                                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-zinc-900">
                                        <span className="inline-flex size-3.5 items-center justify-center rounded-full bg-amber-400 text-[7px] font-bold text-white">
                                            F
                                        </span>
                                        Fathima
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[9.5px] text-zinc-500">Status</span>
                                    <span className="rounded-full bg-zukvo-500/10 px-1.5 py-0.5 text-[8.5px] font-semibold text-zukvo-600">
                                        Testing
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[9.5px] text-zinc-500">Priority</span>
                                    <span className="rounded-full bg-amber-500/10 px-1.5 py-0.5 text-[8.5px] font-semibold text-amber-600">
                                        High
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Floating: Time Tracked — overlaps the left edge (desktop) */}
                        <div className="hidden lg:block absolute bottom-12 -left-6 w-[158px] rounded-xl bg-white/95 backdrop-blur-xl p-3 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.6)_inset] ring-1 ring-black/[0.04]">
                            <div className="flex items-center gap-1.5">
                                <span className="inline-flex size-4 items-center justify-center rounded-md bg-gradient-to-br from-emerald-500 to-teal-600">
                                    <Clock className="size-2.5 text-white" />
                                </span>
                                <span className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-emerald-600">
                                    Time tracked
                                </span>
                            </div>
                            <div className="mt-2 font-heading text-[18px] font-semibold tracking-tight text-zinc-900 leading-none">
                                07:41:44
                            </div>
                            <div className="mt-1 text-[9px] text-zinc-500">Logged this sprint</div>
                        </div>
                    </div>
                </div>

                {/* Backlog (reversed) */}
                <div className="mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="zk-reveal lg:order-2">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Backlog
                        </div>
                        <h3 className="mt-4 font-heading font-medium text-2xl md:text-[26px] tracking-[-0.02em] text-white">
                            A backlog that never loses an idea.
                        </h3>
                        <p className="mt-4 text-[14.5px] text-zinc-400 leading-relaxed max-w-lg">
                            Every unscheduled ticket lives in one searchable backlog — status, priority
                            and assignee at a glance. Pull anything into a sprint the moment you're ready.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                "All unscheduled tickets in one place",
                                "Status, priority & assignee at a glance",
                                "Paginated for hundreds of tickets",
                                "Pull into any sprint with one action",
                            ].map((b) => (
                                <li key={b} className="flex items-start gap-2.5 text-[14px] text-zinc-300">
                                    <CheckCircle2 className="mt-0.5 size-4 text-zukvo-400 shrink-0" />
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ZaiStepImage
                        src={backlogsImg}
                        alt="Backlog — all unscheduled tickets with status, priority and assignee"
                        badge="Backlog"
                        icon={ListChecks}
                        className="lg:order-1"
                    />
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
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
                    {types.map((t) => (
                        <div
                            key={t.id}
                            data-testid={`tm-creation-${t.id}`}
                            className="relative rounded-2xl p-7 overflow-hidden border border-white/10 bg-[#0E0E10]"
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

                {/* Create with Zai — detailed two-step showcase */}
                <ZaiShowcase />
            </div>
        </section>
    );
}

function ZaiShowcase() {
    return (
        <div className="mt-16 md:mt-24 border-t border-white/5 pt-14 md:pt-20">
            <div className="zk-reveal max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-zukvo-500/30 bg-zukvo-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                    <Sparkles className="size-3" /> Create with Zai · AI-assisted
                </span>
                <h3 className="mt-5 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                    Describe it. Zai builds the entire ticket.
                </h3>
                <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base">
                    The fastest path from idea to a fully-scoped ticket. Type one sentence and Zai
                    writes the title, a structured description, an effort estimate, and a breakdown of
                    subtasks — all ready to review and edit before you create.
                </p>
            </div>

            {/* Step 1 — Describe */}
            <div className="mt-14 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="zk-reveal">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                        <span className="inline-flex size-4 items-center justify-center rounded-full bg-zukvo-500/20 text-zukvo-300 text-[9px]">
                            1
                        </span>
                        Step one
                    </div>
                    <h4 className="mt-4 font-heading font-medium text-2xl md:text-[26px] tracking-[-0.02em] text-white">
                        Describe it in plain English.
                    </h4>
                    <p className="mt-4 text-[14.5px] text-zinc-400 leading-relaxed max-w-lg">
                        Open the <span className="text-zinc-200">Create with Zai</span> panel and type
                        what you need the way you'd say it out loud — "Create a ticket for payment
                        integrations" or "Login button flickers on mobile, fix urgently." No rigid
                        fields, no formatting rules — a single line is enough to get started.
                    </p>
                    <ul className="mt-6 space-y-2.5">
                        {[
                            "One-line brief — no mandatory fields to fill",
                            "Tap an example prompt to see how it works",
                            "Attach files or screenshots for extra context",
                            "Works for features, bugs, and chores alike",
                        ].map((b) => (
                            <li key={b} className="flex items-start gap-2.5 text-[14px] text-zinc-300">
                                <CheckCircle2 className="mt-0.5 size-4 text-zukvo-400 shrink-0" />
                                {b}
                            </li>
                        ))}
                    </ul>
                </div>
                <ZaiStepImage
                    src={createTicketZai1Img}
                    alt="Create with Zai — describe your ticket in plain English"
                    badge="Create with Zai"
                />
            </div>

            {/* Step 2 — Review (reversed) */}
            <div className="mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="zk-reveal lg:order-2">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                        <span className="inline-flex size-4 items-center justify-center rounded-full bg-zukvo-500/20 text-zukvo-300 text-[9px]">
                            2
                        </span>
                        Step two
                    </div>
                    <h4 className="mt-4 font-heading font-medium text-2xl md:text-[26px] tracking-[-0.02em] text-white">
                        Review the AI-built ticket.
                    </h4>
                    <p className="mt-4 text-[14.5px] text-zinc-400 leading-relaxed max-w-lg">
                        Zai returns a complete, structured ticket. You get a clear title, a full
                        description broken into <span className="text-zinc-200">Context, Scope, User
                        Experience</span> and <span className="text-zinc-200">Acceptance Criteria</span>,
                        an estimated total effort, and the work already split into estimated subtasks.
                        Edit anything inline, set priority and assignee, regenerate for a different
                        take, then create.
                    </p>
                    <ul className="mt-6 space-y-2.5">
                        {[
                            "Structured description: Context · Scope · UX · Acceptance criteria",
                            "Auto-estimated total hours (AI / Hybrid / Manual split)",
                            "Subtask breakdown with per-task hour estimates",
                            "Edit, regenerate, or create — all in one click",
                        ].map((b) => (
                            <li key={b} className="flex items-start gap-2.5 text-[14px] text-zinc-300">
                                <CheckCircle2 className="mt-0.5 size-4 text-zukvo-400 shrink-0" />
                                {b}
                            </li>
                        ))}
                    </ul>
                </div>
                <ZaiStepImage
                    src={createTicketZai2Img}
                    alt="Review your ticket — Zai-generated description, estimate, and subtasks"
                    badge="Review your ticket"
                    className="lg:order-1"
                />
            </div>
        </div>
    );
}

function ZaiStepImage({ src, alt, badge, icon: Icon = Sparkles, className = "" }) {
    return (
        <div className={`zk-reveal relative ${className}`}>
            {/* Ambient glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10"
            >
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-zukvo-500/15 via-violet-500/8 to-transparent blur-2xl" />
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0A0A12] p-2 shadow-[0_40px_90px_-24px_rgba(0,0,0,0.7),0_8px_30px_-12px_rgba(99,102,241,0.3)]">
                <div className="relative overflow-hidden rounded-xl ring-1 ring-white/[0.08]">
                    <img src={src} alt={alt} loading="lazy" className="block w-full h-auto" />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                </div>
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-zukvo-ink/85 backdrop-blur px-2.5 py-1 text-white shadow-lg ring-1 ring-white/10">
                    <Icon className="size-3 text-zukvo-300" />
                    <span className="text-[10px] font-semibold tracking-tight">{badge}</span>
                </span>
            </div>
        </div>
    );
}

function SprintPlansDetails() {
    return (
        <section
            id="sprint-plans-details"
            data-testid="tm-sprint-plans-details"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Sprint Plans &amp; Details
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Plan the cycle. Track every detail.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        From a bird's-eye view of every sprint cycle down to a single sprint's
                        burn-down and team contribution — Zukvo gives you both the plan and the proof.
                    </p>
                </div>

                {/* Sprint Cycles — overview */}
                <div className="mt-14 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="zk-reveal">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Sprint Cycles
                        </div>
                        <h3 className="mt-4 font-heading font-medium text-2xl md:text-[26px] tracking-[-0.02em] text-white">
                            Plan and track every cycle in one place.
                        </h3>
                        <p className="mt-4 text-[14.5px] text-zinc-400 leading-relaxed max-w-lg">
                            See active, planned, and shipped cycles at a glance, with live progress and
                            timelines. Search, filter, and spin up a new sprint without leaving the page.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                "Active · Planning · Shipped at a glance",
                                "Live progress + average velocity across cycles",
                                "Timelines with overdue flags",
                                "Plan a new sprint in one click",
                            ].map((b) => (
                                <li key={b} className="flex items-start gap-2.5 text-[14px] text-zinc-300">
                                    <CheckCircle2 className="mt-0.5 size-4 text-zukvo-400 shrink-0" />
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ZaiStepImage
                        src={sprintCyclesMainImg}
                        alt="Sprint Cycles — plan and track every cycle"
                        badge="Sprint Cycles"
                        icon={GitBranch}
                    />
                </div>

                {/* Sprint Detail — deep dive (reversed) */}
                <div className="mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="zk-reveal lg:order-2">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Sprint Detail
                        </div>
                        <h3 className="mt-4 font-heading font-medium text-2xl md:text-[26px] tracking-[-0.02em] text-white">
                            Drill into a single sprint's story.
                        </h3>
                        <p className="mt-4 text-[14.5px] text-zinc-400 leading-relaxed max-w-lg">
                            Open any sprint to see completion, timeline, and priority mix — plus a full
                            team-contribution breakdown and every ticket in flight.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                "Completion %, with Done / Active / To-do counts",
                                "Timeline with pace tracking — behind or on track",
                                "Per-member sprint contribution share",
                                "Every ticket, grouped by status",
                            ].map((b) => (
                                <li key={b} className="flex items-start gap-2.5 text-[14px] text-zinc-300">
                                    <CheckCircle2 className="mt-0.5 size-4 text-zukvo-400 shrink-0" />
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ZaiStepImage
                        src={sprintDetailsImg}
                        alt="Sprint Detail — completion, team contribution, and tickets"
                        badge="Sprint Detail"
                        icon={GitBranch}
                        className="lg:order-1"
                    />
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
                <div className="zk-reveal grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
                    <div className="w-full lg:col-span-5 lg:sticky lg:top-28">
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
                    <div className="w-full lg:col-span-7">
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
                                aspect="auto"
                                objectFit="contain"
                                caption="Live screenshot — active sprint board."
                            />
                            <ImageSlot
                                testid="tm-image-creation"
                                src={ZAI_IMG}
                                alt="Ticket creation"
                                label="Create ticket"
                                chromeUrl="zukvo.app/work/new"
                                aspect="auto"
                                objectFit="contain"
                                caption="Live screenshot — create a ticket with Zai."
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
            <div className="overflow-x-auto">
                <div className="min-w-[800px]">
                    <div className="grid grid-cols-12 gap-3 px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] text-zinc-500 border-b border-white/5 bg-white/[0.02]">
                        <div className="col-span-2">ID</div>
                        <div className="col-span-5">Title</div>
                        <div className="col-span-3">Status</div>
                        <div className="col-span-1">Pri</div>
                        <div className="col-span-1 text-right">·</div>
                    </div>
                    {rows.map((r, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-12 gap-3 items-center px-4 py-3 border-t border-white/5 hover:bg-white/[0.02] transition-colors"
                        >
                            <div className="col-span-2 font-mono text-[12px] text-zinc-400 whitespace-nowrap">{r[0]}</div>
                            <div className="col-span-5 text-[13px] text-zinc-200 truncate whitespace-nowrap">{r[1]}</div>
                            <div className="col-span-3">
                                <span
                                    className={`inline-flex items-center text-[10px] uppercase tracking-[0.2em] rounded-full border px-2 py-0.5 whitespace-nowrap ${tone[r[4]]}`}
                                >
                                    {r[2]}
                                </span>
                            </div>
                            <div className="col-span-1">
                                <span className="rounded bg-amber-500/10 text-amber-300 border border-amber-400/30 px-1.5 py-0.5 text-[10px] whitespace-nowrap">
                                    {r[3]}
                                </span>
                            </div>
                            <div className="col-span-1 text-right text-zinc-500 text-[11px] whitespace-nowrap">⋯</div>
                        </div>
                    ))}
                </div>
            </div>
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
    return (
        <section
            id="sprint-completion"
            data-testid="tm-sprint-completion"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                    {/* Showcase card */}
                    <div className="md:col-span-7 relative rounded-2xl border border-white/10 bg-[#0E0E10] p-7 md:p-8 overflow-hidden">
                        <div className="relative">
                            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400/90">
                                Sprints · Tickets · Buckets · Bugs
                            </div>
                            <h3 className="mt-3 font-heading font-medium text-2xl md:text-[28px] leading-[1.15] tracking-[-0.02em] text-white">
                                A workspace that ships, not just plans.
                            </h3>
                            <p className="mt-3 text-[14.5px] leading-relaxed text-zinc-400 max-w-xl">
                                Sprint cycles, tickets, buckets, bug lists — everything a serious team
                                needs, with optional AI for breakdown and estimation.
                            </p>
                            <CompletionShowcase />
                        </div>
                    </div>

                    {/* Pending ticket actions */}
                    <div className="md:col-span-5">
                        <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0E0E10] p-6 md:p-7">
                            <div
                                aria-hidden
                                className="pointer-events-none absolute -top-24 -right-16 size-64 rounded-full bg-zukvo-500/10 blur-[80px]"
                            />
                            <div
                                aria-hidden
                                className="pointer-events-none absolute -bottom-20 -left-12 size-52 rounded-full bg-violet-500/8 blur-[70px]"
                            />

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

                            <div className="relative mt-5 space-y-2">
                                {COMPLETION_ACTIONS.map((a) => (
                                    <CompletionAction key={a.title} {...a} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const COMPLETION_VIEWS = [
    {
        key: "summary",
        src: sprintCompletionSummaryImg,
        eyebrow: "Sprint review",
        title: "Completion summary",
        sub: "Burn-down, velocity, and what shipped this cycle.",
    },
    {
        key: "pending",
        src: sprintCompletionPendingImg,
        eyebrow: "Carry-over",
        title: "Pending items",
        sub: "Decide what rolls to the next sprint or back to the backlog.",
    },
];

function CompletionShowcase() {
    const [openKey, setOpenKey] = useState(null);
    const open = openKey ? COMPLETION_VIEWS.find((v) => v.key === openKey) : null;

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
            <div className="mt-5 -mx-7 md:-mx-8 -mb-7 md:-mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-white/10 bg-[#0A0A12] p-4 rounded-b-2xl">
                {COMPLETION_VIEWS.map((v) => (
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
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <span
                                aria-hidden
                                className="absolute top-2.5 right-2.5 inline-flex size-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-md text-white ring-1 ring-white/20 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.5)]"
                            >
                                <Maximize2 className="size-3.5" />
                            </span>
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
                            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15 bg-[#0A0A12] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.8),0_8px_30px_-10px_rgba(99,102,241,0.35)]">
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
                                    {COMPLETION_VIEWS.map((v) => (
                                        <button
                                            key={v.key}
                                            type="button"
                                            onClick={() => setOpenKey(v.key)}
                                            className={`px-3 py-1.5 text-[11.5px] font-medium rounded-full transition-all ${
                                                openKey === v.key
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

const COMPLETION_ACTIONS = [
    {
        icon: Trash2,
        title: "Delete pending tickets",
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

function CompletionAction({ icon: Icon, title, desc, grad, ring, shadow }) {
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
                            src={BUCKET_IMG}
                            alt="Buckets workspace"
                            label="Buckets workspace"
                            chromeUrl="zukvo.app/work/buckets"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — Buckets workspace for backlog themes."
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
                            src={BUGLIST_IMG}
                            alt="QA workspace bug list"
                            label="Bug list — collections + sheets"
                            chromeUrl="zukvo.app/work/bugs"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — QA workspace showing collections list and bug details."
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
                            src={TRASH_IMG}
                            alt="Trash list view"
                            label="Trash — restore in one click"
                            chromeUrl="zukvo.app/work/trash"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
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
                            src={ARCHIVE_IMG}
                            alt="Archived tickets view"
                            label="Archived tickets"
                            chromeUrl="zukvo.app/work/archived"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
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
                            src={CONFIG_IMG}
                            alt="Ticket configurations"
                            label="Ticket configurations"
                            chromeUrl="zukvo.app/admin/tickets"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — ticket settings and workspace configurations."
                        />
                        <div className="mt-5">
                            <ImageSlot
                                testid="tm-image-detail"
                                src={DETAIL_IMG}
                                alt="Ticket details panel view"
                                label="Ticket details panel"
                                chromeUrl="zukvo.app/work/tickets/002-0731"
                                aspect="auto"
                                objectFit="contain"
                                className="max-w-[480px] mx-auto"
                                caption="Live screenshot — full ticket detail panel showing subtasks, attachments and log history."
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
                            href="/signup"
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

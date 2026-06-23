import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    Megaphone,
    Sunrise,
    Sunset,
    Plus,
    CheckCircle2,
    Send,
    LayoutGrid,
    List as ListIcon,
    Filter,
    Clock3,
    Briefcase,
    ListChecks,
    AlertTriangle,
    MessageSquare,
    Sparkles,
    Smile,
    Frown,
    Ban,
    CalendarRange,
    User,
    Layers,
    ChevronDown,
    ChevronRight,
    RefreshCcw,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import ImageSlot from "@/components/ImageSlot";

import dailyUpdatesImg from "@/assets/daily-updates-dark.png";
import dailyUpdatesImgLight from "@/assets/daily-updates-light.png";
import viewUpdatesImg from "@/assets/view-updates-dark.png";
import viewUpdatesImgLight from "@/assets/view-updates-light.png";
import submitUpdateImg from "@/assets/submit-updates-dark.png";
import submitUpdateImgLight from "@/assets/submit-updates-light.png";

const DU_OVERVIEW_IMG = dailyUpdatesImg;
const DU_OVERVIEW_IMG_LIGHT = dailyUpdatesImgLight;
const DU_DETAIL_IMG = viewUpdatesImg;
const DU_DETAIL_IMG_LIGHT = viewUpdatesImgLight;
const DU_FORM_IMG = submitUpdateImg;
const DU_FORM_IMG_LIGHT = submitUpdateImgLight;


const SUBMODULES = [
    { id: "overview", label: "Overview", icon: LayoutGrid },
    { id: "bod-eod", label: "BOD · EOD", icon: Sunrise },
    { id: "submit", label: "Submit", icon: Send },
    { id: "multi", label: "Multi-project", icon: Layers },
    { id: "detail", label: "Update detail", icon: ListChecks },
    { id: "feeling", label: "Feeling", icon: Smile },
    { id: "missed", label: "Missed / Manual", icon: AlertTriangle },
    { id: "filters", label: "Filters", icon: Filter },
];

export default function DailyUpdates() {
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
            data-testid="daily-updates-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink"
        >
            <SEO />
            <Nav />
            <Hero />
            <SubmoduleNav />
            <Overview />
            <BodEod />
            <SubmitFlow />
            <MultiProject />
            <UpdateDetail />
            <FeelingTracker />
            <MissedManual />
            <FiltersViews />
            <FinalCTA />
            <Footer />
        </main>
    );
}

/* ---------------- HERO ---------------- */

function Hero() {
    return (
        <section
            data-testid="du-hero"
            className="relative pt-32 md:pt-40 pb-16 md:pb-24 zk-mesh"
        >
            <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_75%)] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                <div className="zk-reveal">
                    <Link
                        to="/products"
                        data-testid="du-breadcrumb"
                        className="inline-flex items-center gap-1.5 text-[12px] text-zinc-500 hover:text-zukvo-600"
                    >
                        <ArrowLeft className="size-3.5" />
                        All products
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-600">
                            <Megaphone className="size-3.5" />
                            Daily Updates
                        </div>
                        <h1
                            data-testid="du-headline"
                            className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink"
                        >
                            Async standups <br />
                            <span className="text-zinc-500">your team will actually do.</span>
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            BOD &amp; EOD updates with project + ticket linking, multiple project
                            entries, mood tracking, and a team overview that shows progress at a
                            glance — so daily standups become a 30-second scroll.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/signup"
                                data-testid="du-cta-primary"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Daily Updates
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
                                { k: "BOD · EOD", v: "Two checkpoints / day" },
                                { k: "Multi-project", v: "Many tickets per entry" },
                                { k: "Mood", v: "Happy · Stressed · Blocked" },
                                { k: "Manual", v: "Backfill missed updates" },
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
            data-testid="du-submodule-nav"
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
                            data-testid={`du-pill-${s.id}`}
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

/* ---------------- OVERVIEW ---------------- */

function Overview() {
    return (
        <section
            id="overview"
            data-testid="du-overview"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center w-full min-w-0">
                    <div className="lg:col-span-5 min-w-0">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Team overview
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Every update, every teammate, in one scroll.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Browse who submitted, who missed, and what shipped. Each card shows
                            hours logged, projects touched, recent tasks, and the BOD or EOD badge
                            — replacing your morning standup with a single dashboard.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Clock3, t: "Hours logged · per teammate" },
                                { i: Briefcase, t: "Projects touched today" },
                                { i: ListChecks, t: "Recent tasks attached to ticket IDs" },
                                { i: AlertTriangle, t: "MISSED badges for accountability" },
                            ].map((b, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2.5 text-[14px] text-zinc-300"
                                >
                                    <b.i className="size-4 text-zukvo-400 shrink-0" /> {b.t}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-7 min-w-0 w-full">
                        <ImageSlot
                            testid="du-image-overview"
                            src={DU_OVERVIEW_IMG}
                            srcLight={DU_OVERVIEW_IMG_LIGHT}
                            alt="Daily Status Updates overview"
                            label="Daily Updates — team overview"
                            chromeUrl="zukvo.app/work/daily-updates"
                            aspect="auto"
                            objectFit="contain"
                            caption="Live screenshot — team overview with EOD / BOD / MISSED badges."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- BOD vs EOD ---------------- */

function BodEod() {
    const [type, setType] = useState("EOD");
    const data = {
        BOD: {
            kicker: "Beginning of Day",
            color: "emerald",
            icon: Sunrise,
            tagline: "Plan the day before it owns you.",
            bullets: [
                "What you'll work on today",
                "Hours you can commit",
                "Blockers expected",
                "Mood check-in",
            ],
        },
        EOD: {
            kicker: "End of Day",
            color: "zukvo",
            icon: Sunset,
            tagline: "Close the day with a clean ledger.",
            bullets: [
                "What you actually shipped",
                "Tickets moved to dev complete / done",
                "Tomorrow's blockers",
                "Mood at sign-off",
            ],
        },
    };
    const d = data[type];
    return (
        <section
            id="bod-eod"
            data-testid="du-bod-eod"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Two checkpoints
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        BOD in the morning. <br /> EOD before sign-off.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Two short check-ins replace a costly daily standup. BOD sets the day's
                        intent. EOD wraps it in fact. Each one carries projects, tickets, hours and
                        mood.
                    </p>
                </div>

                <div className="zk-reveal mt-10 inline-flex rounded-full border border-white/10 bg-[#101014] p-1 text-[12px]">
                    {["BOD", "EOD"].map((t) => (
                        <button
                            key={t}
                            data-testid={`du-bod-eod-tab-${t.toLowerCase()}`}
                            onClick={() => setType(t)}
                            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-medium transition-colors ${
                                type === t
                                    ? t === "BOD"
                                        ? "bg-emerald-500 text-white"
                                        : "bg-zukvo-500 text-white"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            {t === "BOD" ? (
                                <Sunrise className="size-3.5" />
                            ) : (
                                <Sunset className="size-3.5" />
                            )}
                            {t}
                        </button>
                    ))}
                </div>

                <div className="zk-reveal mt-6 grid lg:grid-cols-12 gap-8 items-stretch w-full min-w-0">
                    <div className="lg:col-span-5 min-w-0">
                        <div
                            className={`rounded-2xl border p-6 h-full ${
                                d.color === "emerald"
                                    ? "border-emerald-400/30 bg-emerald-500/5"
                                    : "border-zukvo-500/30 bg-zukvo-500/5"
                            }`}
                        >
                            <span
                                className={`inline-flex size-10 items-center justify-center rounded-xl border ${
                                    d.color === "emerald"
                                        ? "bg-emerald-500/15 text-emerald-300 border-emerald-400/30"
                                        : "bg-zukvo-500/15 text-zukvo-300 border-zukvo-500/30"
                                }`}
                            >
                                <d.icon className="size-5" />
                            </span>
                            <div
                                className={`mt-5 text-[11px] uppercase tracking-[0.22em] ${
                                    d.color === "emerald" ? "text-emerald-300" : "text-zukvo-300"
                                }`}
                            >
                                {d.kicker}
                            </div>
                            <h3 className="mt-2 font-heading text-2xl text-white tracking-tight">
                                {d.tagline}
                            </h3>
                            <ul className="mt-5 space-y-2.5">
                                {d.bullets.map((b) => (
                                    <li
                                        key={b}
                                        className="flex items-center gap-2 text-[14px] text-zinc-200"
                                    >
                                        <CheckCircle2
                                            className={`size-4 shrink-0 ${
                                                d.color === "emerald"
                                                    ? "text-emerald-300"
                                                    : "text-zukvo-300"
                                            }`}
                                        />
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="lg:col-span-7 min-w-0 w-full">
                        <BodEodMock type={type} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function BodEodMock({ type }) {
    const eod = type === "EOD";
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <span className="size-9 rounded-lg bg-gradient-to-br from-zukvo-500 to-violet-500 inline-flex items-center justify-center text-white font-heading">
                        P
                    </span>
                    <div>
                        <div className="text-[13.5px] text-white">Priyadharshini</div>
                        <div className="text-[11px] text-zinc-500">Software Engineer</div>
                    </div>
                </div>
                <span
                    className={`text-[10px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 ${
                        eod
                            ? "border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300"
                            : "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                    }`}
                >
                    {type}
                </span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {[
                    ["Total hours", eod ? "11h 33m" : "8h target", "indigo"],
                    ["Projects", "1", "violet"],
                    ["Tasks", eod ? "3" : "2", "emerald"],
                ].map((s, i) => (
                    <div key={i} className="rounded-md border border-white/10 bg-white/[0.02] py-2.5">
                        <div
                            className={`font-heading text-lg ${
                                s[2] === "indigo"
                                    ? "text-zukvo-300"
                                    : s[2] === "violet"
                                      ? "text-violet-300"
                                      : "text-emerald-300"
                            }`}
                        >
                            {s[1]}
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                            {s[0]}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="size-7 rounded-md bg-violet-500/15 text-violet-300 inline-flex items-center justify-center">
                            <Briefcase className="size-3.5" />
                        </span>
                        <div className="text-[13px] text-white">VDrive</div>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 px-2 py-0.5 text-[10px]">
                        <Clock3 className="size-3" /> {eod ? "11h 33m" : "Plan · 6h"}
                    </span>
                </div>
                <div className="mt-3 text-[10.5px] uppercase tracking-[0.2em] text-zinc-500">
                    {eod ? "Tasks · 3 · achievements" : "Tasks · 2 · planned"}
                </div>
                <div className="mt-2.5 space-y-1.5">
                    {(eod
                        ? [
                              ["001-0574", "Invoice UI updates", "Complete"],
                              ["001-0537", "SOS alerts from user app", "Complete"],
                              ["—", "Backend new branch sync", "Complete"],
                          ]
                        : [
                              ["001-0574", "Invoice UI updates", "Plan"],
                              ["001-0537", "SOS alerts from user app", "Plan"],
                          ]
                    ).map((r, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between rounded-md border border-white/10 bg-[#0A0A0A] px-3 py-2"
                        >
                            <div className="flex items-center gap-2 min-w-0">
                                <span className="font-mono text-[11px] text-zukvo-300 shrink-0">
                                    {r[0]}
                                </span>
                                <span className="text-[12.5px] text-zinc-200 truncate">{r[1]}</span>
                            </div>
                            <span
                                className={`text-[10px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 ${
                                    r[2] === "Complete"
                                        ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                                        : "border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300"
                                }`}
                            >
                                {r[2]}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ---------------- SUBMIT FLOW ---------------- */

function SubmitFlow() {
    return (
        <section
            id="submit"
            data-testid="du-submit"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Submit
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Submit a daily update in 30 seconds.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Pick BOD or EOD. Choose a feeling. Add one or many project entries with
                        tickets, hours, blockers and notes. Done.
                    </p>
                </div>

                <div className="zk-reveal mt-12">
                    <ImageSlot
                        testid="du-image-form"
                        src={DU_FORM_IMG}
                        srcLight={DU_FORM_IMG_LIGHT}
                        alt="Submit Daily Update form"
                        label="Submit daily update"
                        chromeUrl="zukvo.app/work/daily-updates/new"
                        aspect="auto"
                        objectFit="contain"
                        caption="Live screenshot — full submit-update form."
                    />
                </div>

                <div className="zk-reveal mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Step
                        n="01"
                        icon={Sunrise}
                        title="Type & feeling"
                        body="Toggle BOD / EOD. Pick a mood: Happy · Neutral · Stressed · Blocked. Mark Missed Update if you're back-filling a day."
                    />
                    <Step
                        n="02"
                        icon={Briefcase}
                        title="Project entry"
                        body="Add a project. Set a start and end time — total hours auto-compute. Add as many entries as you need."
                    />
                    <Step
                        n="03"
                        icon={ListChecks}
                        title="Tickets, blockers, notes"
                        body="Attach tickets with status. Capture blockers and project-specific comments. Submit — and ship the day."
                    />
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
            <div className="mt-4 font-heading text-lg text-white tracking-tight">{title}</div>
            <p className="mt-1.5 text-[13.5px] text-zinc-400 leading-relaxed">{body}</p>
        </div>
    );
}

/* ---------------- MULTI PROJECT ---------------- */

function MultiProject() {
    return (
        <section
            id="multi"
            data-testid="du-multi"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-start w-full min-w-0">
                    <div className="lg:col-span-5 lg:sticky lg:top-28 min-w-0">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                            Multiple projects
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            One update. <br /> Many projects. Many tickets.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Most days don't fit one project. Add as many project entries as you
                            need, each with its own time window, ticket list and blockers.
                            Total hours roll up automatically.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Plus, t: "Add unlimited project entries" },
                                { i: ListChecks, t: "Multiple tickets per project entry" },
                                { i: Clock3, t: "Auto-calculated total hours" },
                                { i: AlertTriangle, t: "Per-project blockers + notes" },
                            ].map((b, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2.5 text-[14px] text-zinc-300"
                                >
                                    <b.i className="size-4 text-violet-300 shrink-0" /> {b.t}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-7 min-w-0 w-full">
                        <MultiProjectMock />
                    </div>
                </div>
            </div>
        </section>
    );
}

function MultiProjectMock() {
    const entries = [
        {
            n: 1,
            project: "ZithSpace",
            code: "002",
            time: "08-05-2026 03:00 → 09:00",
            hours: "6h",
            tasks: [
                ["TKT-0364", "Leave Management V2 — Architect Changes", "Dev Complete"],
                ["TKT-0312", "Daily updates UX polish", "In progress"],
            ],
        },
        {
            n: 2,
            project: "VDrive",
            code: "001",
            time: "08-05-2026 09:30 → 13:00",
            hours: "3h 30m",
            tasks: [
                ["001-0574", "Invoice UI updates", "Complete"],
                ["001-0537", "SOS alerts from user app", "Complete"],
                ["001-0410", "Search bar refactor", "In review"],
            ],
        },
        {
            n: 3,
            project: "Zukvo",
            code: "Z-LP",
            time: "08-05-2026 14:00 → 16:00",
            hours: "2h",
            tasks: [["Z-LP-007", "Landing page · BidIQ section", "Complete"]],
        },
    ];
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
            <div className="flex items-center justify-between mb-3">
                <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                    Work details · 3 entries
                </div>
                <button className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] transition-colors text-zinc-200 px-3 py-1.5 text-[12px]">
                    <Plus className="size-3.5" /> Add project
                </button>
            </div>

            <div className="space-y-3">
                {entries.map((e, i) => (
                    <div
                        key={i}
                        className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                                <span className="size-7 rounded-md bg-zukvo-500/10 text-zukvo-300 border border-zukvo-500/20 inline-flex items-center justify-center text-[11px] font-mono">
                                    {e.n}
                                </span>
                                <div>
                                    <div className="text-[13px] text-white">{e.project}</div>
                                    <div className="text-[10.5px] text-zinc-500 font-mono">
                                        #{e.code}
                                    </div>
                                </div>
                            </div>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 px-2.5 py-0.5 text-[11px]">
                                <Clock3 className="size-3" /> {e.hours}
                            </span>
                        </div>
                        <div className="mt-2 text-[11px] text-zinc-500">{e.time}</div>
                        <div className="mt-3 space-y-1.5">
                            {e.tasks.map((t, j) => (
                                <div
                                    key={j}
                                    className="flex items-center justify-between rounded-md border border-white/10 bg-[#0A0A0A] px-3 py-2"
                                >
                                    <div className="flex items-center gap-2 min-w-0">
                                        <span className="text-[10px] uppercase tracking-[0.18em] rounded-full border border-white/10 bg-white/5 text-zinc-400 px-2 py-0.5 shrink-0">
                                            Ticket
                                        </span>
                                        <span className="font-mono text-[11px] text-zukvo-300 shrink-0">
                                            {t[0]}
                                        </span>
                                        <span className="text-[12.5px] text-zinc-200 truncate">
                                            {t[1]}
                                        </span>
                                    </div>
                                    <span
                                        className={`text-[10px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 shrink-0 ${
                                            t[2] === "Complete"
                                                ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                                                : t[2] === "Dev Complete"
                                                  ? "border-cyan-400/30 bg-cyan-500/10 text-cyan-300"
                                                  : t[2] === "In review"
                                                    ? "border-violet-400/30 bg-violet-500/10 text-violet-300"
                                                    : "border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300"
                                        }`}
                                    >
                                        {t[2]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl border border-zukvo-500/30 bg-zukvo-500/5 px-4 py-3">
                <div className="text-[11px] uppercase tracking-[0.22em] text-zukvo-300 font-bold">
                    Auto-rolled total
                </div>
                <div className="font-heading text-2xl text-white tracking-tight">11h 30m</div>
            </div>
        </div>
    );
}

/* ---------------- UPDATE DETAIL ---------------- */

function UpdateDetail() {
    return (
        <section
            id="detail"
            data-testid="du-detail"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center w-full min-w-0">
                    <div className="lg:col-span-5 lg:order-2 min-w-0">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Update detail panel
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Drill into any update — fast.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Click any card and a side panel opens with full project-wise details:
                            time window, total hours, mood, tasks &amp; achievements with status —
                            so context is always one click away.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                "Total hours · projects · tasks",
                                "Project-wise time windows",
                                "Tasks & achievements with completion",
                                "Mood badge from submitter",
                            ].map((b) => (
                                <li
                                    key={b}
                                    className="flex items-center gap-2 text-[14px] text-zinc-300"
                                >
                                    <CheckCircle2 className="size-4 text-zukvo-400 shrink-0" /> {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-7 lg:order-1 min-w-0 w-full">
                        <ImageSlot
                            testid="du-image-detail"
                            src={DU_DETAIL_IMG}
                            srcLight={DU_DETAIL_IMG_LIGHT}
                            alt="Daily update detail panel"
                            label="Update detail · side panel"
                            chromeUrl="zukvo.app/work/daily-updates/priyadharshini"
                            aspect="auto"
                            objectFit="contain"
                            caption="Live screenshot — EOD detail panel for Priyadharshini's update."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- FEELING TRACKER ---------------- */

function FeelingTracker() {
    const [feeling, setFeeling] = useState("Stressed");
    const moods = [
        { id: "Happy", icon: Smile, color: "amber", text: "text-amber-300", border: "border-amber-400/30", bg: "bg-amber-500/10" },
        { id: "Neutral", icon: Smile, color: "zinc", text: "text-zinc-300", border: "border-white/15", bg: "bg-white/5" },
        { id: "Stressed", icon: Frown, color: "orange", text: "text-orange-300", border: "border-orange-400/30", bg: "bg-orange-500/10" },
        { id: "Blocked", icon: Ban, color: "rose", text: "text-rose-300", border: "border-rose-400/30", bg: "bg-rose-500/10" },
    ];
    return (
        <section
            id="feeling"
            data-testid="du-feeling"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Mood check
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        How is the team really doing?
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Every update captures a feeling — Happy, Neutral, Stressed or Blocked.
                        Managers see trendlines and intervene before burnout shows up in the
                        velocity chart.
                    </p>
                </div>

                <div className="zk-reveal mt-10 grid lg:grid-cols-12 gap-8 items-center w-full min-w-0">
                    <div className="lg:col-span-7 min-w-0 w-full">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                            <div className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
                                Pick how you feel
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {moods.map((m) => (
                                    <button
                                        key={m.id}
                                        data-testid={`du-feeling-${m.id.toLowerCase()}`}
                                        onClick={() => setFeeling(m.id)}
                                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] border transition-colors ${
                                            feeling === m.id
                                                ? `${m.bg} ${m.text} ${m.border}`
                                                : "bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white"
                                        }`}
                                    >
                                        <m.icon className="size-3.5" />
                                        {m.id}
                                    </button>
                                ))}
                            </div>
                            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                                <div className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-500">
                                    Team feel · this week
                                </div>
                                <div className="mt-3 flex items-end gap-1 h-24">
                                    {[
                                        ["Mon", 6, "amber"],
                                        ["Tue", 7, "amber"],
                                        ["Wed", 4, "zinc"],
                                        ["Thu", 3, "orange"],
                                        ["Fri", 5, "amber"],
                                    ].map((d, i) => {
                                        const h = (d[1] / 8) * 100;
                                        const bar = {
                                            amber: "bg-amber-400",
                                            zinc: "bg-zinc-500",
                                            orange: "bg-orange-400",
                                            rose: "bg-rose-400",
                                        }[d[2]];
                                        return (
                                            <div
                                                key={i}
                                                className="flex-1 flex flex-col items-center gap-1.5"
                                            >
                                                <div
                                                    className={`w-full rounded-t-md ${bar}`}
                                                    style={{ height: `${h}%` }}
                                                />
                                                <div className="text-[10px] text-zinc-500">
                                                    {d[0]}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 min-w-0">
                        <div className="space-y-3">
                            {moods.map((m) => (
                                <div
                                    key={m.id}
                                    className={`rounded-xl border ${
                                        feeling === m.id
                                            ? `${m.border} ${m.bg}`
                                            : "border-white/10 bg-white/[0.02]"
                                    } p-4 flex items-center gap-3`}
                                >
                                    <span
                                        className={`inline-flex size-9 items-center justify-center rounded-lg ${m.bg} ${m.text} border ${m.border}`}
                                    >
                                        <m.icon className="size-4" />
                                    </span>
                                    <div className="flex-1">
                                        <div className="text-[13px] text-white font-medium">
                                            {m.id}
                                        </div>
                                        <div className="text-[11.5px] text-zinc-500">
                                            {m.id === "Happy" && "Energized, on track."}
                                            {m.id === "Neutral" && "Steady — typical day."}
                                            {m.id === "Stressed" && "Stretched — needs support."}
                                            {m.id === "Blocked" && "Stopped — escalate now."}
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

/* ---------------- MISSED / MANUAL ---------------- */

function MissedManual() {
    return (
        <section
            id="missed"
            data-testid="du-missed"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="zk-reveal rounded-2xl border border-rose-400/30 bg-rose-500/5 p-7">
                        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-rose-500/15 text-rose-300 border border-rose-400/30">
                            <AlertTriangle className="size-5" />
                        </span>
                        <div className="mt-5 text-[11px] uppercase tracking-[0.22em] text-rose-300">
                            Missed updates
                        </div>
                        <h3 className="mt-2 font-heading text-2xl text-white tracking-tight">
                            Visible. Not punitive.
                        </h3>
                        <p className="mt-2 text-[14px] text-zinc-400 leading-relaxed">
                            Cards display a <span className="text-rose-300">MISSED</span> badge when
                            no update is submitted. Managers see at a glance — and teammates can
                            backfill manually any time.
                        </p>
                        <div className="mt-5 space-y-2">
                            {[
                                ["Subhalakshmi", "Apr 09"],
                                ["Bharathi", "Apr 09"],
                            ].map((r, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.02] px-3 py-2"
                                >
                                    <div className="flex items-center gap-2.5">
                                        <span className="size-7 rounded-md bg-zukvo-500/15 border border-zukvo-500/30 text-zukvo-300 inline-flex items-center justify-center text-[11px]">
                                            {r[0].slice(0, 1)}
                                        </span>
                                        <span className="text-[13px] text-zinc-200">{r[0]}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] uppercase tracking-[0.18em] rounded-full border border-rose-400/30 bg-rose-500/10 text-rose-300 px-2 py-0.5">
                                            Missed
                                        </span>
                                        <span className="text-[11px] text-zinc-500">{r[1]}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="zk-reveal rounded-2xl border border-zukvo-500/30 bg-zukvo-500/5 p-7">
                        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-zukvo-500/15 text-zukvo-300 border border-zukvo-500/30">
                            <Sparkles className="size-5" />
                        </span>
                        <div className="mt-5 text-[11px] uppercase tracking-[0.22em] text-zukvo-300">
                            Manual updates · backfill
                        </div>
                        <h3 className="mt-2 font-heading text-2xl text-white tracking-tight">
                            Backfill yesterday in 60 seconds.
                        </h3>
                        <p className="mt-2 text-[14px] text-zinc-400 leading-relaxed">
                            Toggle <span className="text-zukvo-300">Missed Update</span> on the
                            submit form, pick the date, and write the update like any other day.
                            History stays clean, audit trail stays honest.
                        </p>
                        <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <CalendarRange className="size-4 text-zukvo-300" />
                                    <span className="text-[12.5px] text-zinc-200">
                                        Friday · May 8, 2026
                                    </span>
                                </div>
                                <span className="inline-flex items-center gap-2 text-[11.5px] text-zinc-300">
                                    Missed Update
                                    <span className="inline-flex items-center w-9 h-5 rounded-full border bg-zukvo-500/30 border-zukvo-500/50 justify-end pr-0.5">
                                        <span className="size-3.5 rounded-full bg-white" />
                                    </span>
                                </span>
                            </div>
                            <div className="mt-3 grid grid-cols-2 gap-2 text-[12.5px]">
                                <div className="rounded-md border border-white/10 bg-[#0A0A0A] px-3 py-2">
                                    <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                                        Type
                                    </div>
                                    <div className="mt-0.5 text-zinc-100">EOD</div>
                                </div>
                                <div className="rounded-md border border-white/10 bg-[#0A0A0A] px-3 py-2">
                                    <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                                        Reason
                                    </div>
                                    <div className="mt-0.5 text-zinc-100">Travel · backfill</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- FILTERS ---------------- */

function FiltersViews() {
    const [view, setView] = useState("cards");
    return (
        <section
            id="filters"
            data-testid="du-filters"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Filters & views
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Slice the feed any way you need.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Date range, project, team member, type. Switch between dense Cards or a
                        compact List view — whichever fits your screen and standup style.
                    </p>
                </div>

                <div className="zk-reveal mt-10 rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                        {[
                            { l: "Date range", v: "2026-04-01 → 2026-04-30", i: CalendarRange },
                            { l: "Project", v: "All Projects", i: Briefcase },
                            { l: "Team member", v: "All Users", i: User },
                            { l: "Type", v: "All", i: Filter },
                        ].map((f, i) => (
                            <div
                                key={i}
                                className="rounded-xl border border-white/10 bg-white/[0.02] p-3"
                            >
                                <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                    {f.l}
                                </div>
                                <div className="mt-2 flex items-center gap-2">
                                    <f.i className="size-3.5 text-zukvo-400" />
                                    <span className="text-[12.5px] text-zinc-200 truncate">
                                        {f.v}
                                    </span>
                                    <ChevronDown className="size-3.5 text-zinc-500 ml-auto" />
                                </div>
                            </div>
                        ))}
                        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 flex flex-col">
                            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                View
                            </div>
                            <div className="mt-2 inline-flex rounded-full border border-white/10 bg-[#0A0A0A] p-1 text-[11px] self-start">
                                <button
                                    data-testid="du-view-cards"
                                    onClick={() => setView("cards")}
                                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full transition-colors ${
                                        view === "cards"
                                            ? "bg-white text-zukvo-ink"
                                            : "text-zinc-400 hover:text-white"
                                    }`}
                                >
                                    <LayoutGrid className="size-3" /> Cards
                                </button>
                                <button
                                    data-testid="du-view-list"
                                    onClick={() => setView("list")}
                                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full transition-colors ${
                                        view === "list"
                                            ? "bg-white text-zukvo-ink"
                                            : "text-zinc-400 hover:text-white"
                                    }`}
                                >
                                    <ListIcon className="size-3" /> List
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">{view === "cards" ? <CardsPreview /> : <ListPreview />}</div>

                    <div className="mt-4 flex items-center gap-2 text-[11.5px] text-zinc-500">
                        <RefreshCcw className="size-3.5" /> Refreshed live · 42 updates this range
                    </div>
                </div>
            </div>
        </section>
    );
}

function CardsPreview() {
    const cards = [
        ["Abinash", "ASE", "EOD", "3h 56m", "1", "OK"],
        ["Priyadharshini", "SE", "EOD", "11h 33m", "1", "OK"],
        ["Divya D", "TM", "EOD", "2h 46m", "1", "OK"],
        ["Bharathi", "ASE", "EOD", "8h 50m", "1", "OK"],
    ];
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {cards.map((c, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="flex items-center justify-between">
                        <span className="size-7 rounded-md bg-gradient-to-br from-zukvo-500/40 to-violet-500/40 text-white text-[10.5px] inline-flex items-center justify-center border border-white/10">
                            {c[0].slice(0, 1)}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.18em] rounded-full border border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300 px-2 py-0.5">
                            {c[2]}
                        </span>
                    </div>
                    <div className="mt-2 text-[12.5px] text-zinc-100 truncate">{c[0]}</div>
                    <div className="text-[10px] text-zinc-500">{c[1]}</div>
                    <div className="mt-3 text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                        Total
                    </div>
                    <div className="font-heading text-base text-white tracking-tight">{c[3]}</div>
                </div>
            ))}
        </div>
    );
}

function ListPreview() {
    return (
        <div className="rounded-xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-12 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500 bg-white/[0.02] border-b border-white/5">
                <div className="col-span-3">Member</div>
                <div className="col-span-2">Type</div>
                <div className="col-span-2">Hours</div>
                <div className="col-span-2">Projects</div>
                <div className="col-span-3">Last task</div>
            </div>
            {[
                ["Abinash", "EOD", "3h 56m", "1", "TKT-0241"],
                ["Priyadharshini", "EOD", "11h 33m", "1", "001-0574"],
                ["Divya D", "EOD", "2h 46m", "1", "002-0571"],
                ["Bharathi", "EOD", "8h 50m", "1", "002-0571"],
            ].map((r, i) => (
                <div
                    key={i}
                    className="grid grid-cols-12 items-center px-4 py-2.5 border-t border-white/5"
                >
                    <div className="col-span-3 text-[12.5px] text-zinc-100">{r[0]}</div>
                    <div className="col-span-2">
                        <span className="text-[10px] uppercase tracking-[0.18em] rounded-full border border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300 px-2 py-0.5">
                            {r[1]}
                        </span>
                    </div>
                    <div className="col-span-2 text-[12.5px] text-white font-medium">{r[2]}</div>
                    <div className="col-span-2 text-[12.5px] text-zinc-400">{r[3]}</div>
                    <div className="col-span-3 font-mono text-[11.5px] text-zukvo-300">{r[4]}</div>
                </div>
            ))}
        </div>
    );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
    return (
        <section data-testid="du-final-cta" className="relative bg-[#0A0A0A] text-white">
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
                        Replace your standup with Daily Updates.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/signup"
                            data-testid="du-final-cta-primary"
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

// eslint-disable-next-line no-unused-vars
const _icons = [MessageSquare];

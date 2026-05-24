import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    Plug,
    Mail,
    Calendar,
    Inbox,
    Send,
    FileText,
    AlertCircle,
    Trash2,
    Archive,
    Pencil,
    Paperclip,
    Search,
    RefreshCcw,
    Settings2,
    Plus,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    GitBranch,
    Timer,
    Ticket,
    Workflow,
    Folder,
    Filter,
    BadgeCheck,
    ShieldCheck,
    Globe2,
    Users,
    Building2,
    Star,
    LayoutGrid,
    Eye,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import ImageSlot from "@/components/ImageSlot";

const SUBMODULES = [
    { id: "integrations", label: "Integrations", icon: Plug },
    { id: "mail", label: "Mail", icon: Mail },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "sync", label: "Two-way Sync", icon: Workflow },
    { id: "folders", label: "Folders & Filters", icon: Folder },
];

export default function MailCalendar() {
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
            data-testid="mc-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink overflow-x-clip"
        >
            <Nav />
            <Hero />
            <SubmoduleNav />
            <Integrations />
            <MailSection />
            <CalendarSection />
            <TwoWaySync />
            <FoldersFilters />
            <FinalCTA />
            <Footer />
        </main>
    );
}

/* ---------------- HERO ---------------- */

function Hero() {
    return (
        <section
            data-testid="mc-hero"
            className="relative pt-32 md:pt-40 pb-16 md:pb-24 zk-mesh"
        >
            <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_75%)] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                <div className="zk-reveal">
                    <Link
                        to="/products"
                        data-testid="mc-breadcrumb"
                        className="inline-flex items-center gap-1.5 text-[12px] text-zinc-500 hover:text-zukvo-600"
                    >
                        <ArrowLeft className="size-3.5" />
                        All products
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-violet-600">
                            <Mail className="size-3.5" />
                            Mail & Calendar
                        </div>
                        <h1
                            data-testid="mc-headline"
                            className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink"
                        >
                            Your inbox + calendar — <br />
                            <span className="text-zinc-500">inside Zukvo.</span>
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            Two-way sync with Gmail, Outlook, Zoho and Apple Calendar. Email threads
                            become tickets. Meetings auto-log to time. No more tab-juggling.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/#start"
                                data-testid="mc-cta-primary"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Mail & Calendar
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            <a
                                href="#integrations"
                                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-medium text-zinc-800 hover:border-zinc-400 transition-colors"
                            >
                                See every feature
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="zk-reveal grid grid-cols-2 gap-3">
                            {[
                                { k: "Connect", v: "Gmail · Outlook · Zoho" },
                                { k: "Inbox", v: "All folders inline" },
                                { k: "Calendar", v: "Multi-source schedule" },
                                { k: "Sync", v: "Email → ticket · Meeting → time" },
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
            data-testid="mc-submodule-nav"
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
                            data-testid={`mc-pill-${s.id}`}
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

/* ---------------- INTEGRATIONS ---------------- */

function Integrations() {
    const [tab, setTab] = useState("all");
    return (
        <section
            id="integrations"
            data-testid="mc-integrations"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Integrations
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Connect once. Sync forever.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Plug Google Workspace, Zoho Workspace or Microsoft 365 into Zukvo with one
                        click. Two-way OAuth. No password handling. Switch accounts any time.
                    </p>
                </div>

                {/* Integrations panel mock */}
                <div className="zk-reveal mt-12 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                    <div className="px-5 py-4 flex items-center justify-between flex-wrap gap-3 border-b border-white/5">
                        <div className="flex items-center gap-3">
                            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-200 border border-violet-400/30">
                                <Plug className="size-5" />
                            </span>
                            <div>
                                <div className="text-[13px] text-white font-medium">
                                    Integrations
                                </div>
                                <div className="text-[11.5px] text-zinc-500">
                                    Connect your favorite tools to Zukvo to streamline your
                                    workflow and sync your schedule.
                                </div>
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11.5px] text-zinc-400">
                            <Search className="size-3" /> Search integrations…
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="px-5 py-3 border-b border-white/5">
                        <div className="inline-flex gap-1 text-[12px]">
                            {[
                                { id: "all", t: "All Integrations" },
                                { id: "connected", t: "Connected" },
                                { id: "disconnected", t: "Disconnected" },
                            ].map((x) => (
                                <button
                                    key={x.id}
                                    type="button"
                                    onClick={() => setTab(x.id)}
                                    className={`px-3 py-1.5 rounded-md transition-colors ${
                                        tab === x.id
                                            ? "bg-zukvo-500/15 text-zukvo-200 border-b-2 border-zukvo-400"
                                            : "text-zinc-400 hover:text-white"
                                    }`}
                                >
                                    {x.t}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="p-5">
                        <div className="text-[12px] text-white font-medium mb-4">
                            Mail & Calendar Integrations
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <IntegrationCard
                                logo={
                                    <span className="font-heading text-2xl bg-gradient-to-br from-blue-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                                        G
                                    </span>
                                }
                                name="Google Workspace"
                                desc="Sync your Google Workspace emails and calendar meetings."
                                state="none"
                            />
                            <IntegrationCard
                                logo={<Calendar className="size-6 text-rose-400" />}
                                name="Zoho Workspace"
                                desc="Manage Zoho emails and events within Zukvo."
                                state="connected"
                                accounts={1}
                            />
                            <IntegrationCard
                                logo={<LayoutGrid className="size-6 text-sky-400" />}
                                name="Microsoft 365"
                                desc="Unified schedule and emails with Microsoft 365."
                                state="none"
                            />
                        </div>
                    </div>
                </div>

                <div className="zk-reveal mt-6">
                    <ImageSlot
                        testid="mc-image-integrations"
                        label="Integrations · Mail & Calendar"
                        chromeUrl="zukvo.app/connect/integrations"
                        aspect="16/9"
                        caption="Replace with your Integrations screenshot."
                    />
                </div>
            </div>
        </section>
    );
}

function IntegrationCard({ logo, name, desc, state, accounts }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 flex flex-col">
            <span className="inline-flex size-10 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                {logo}
            </span>
            <div className="mt-4 font-heading text-lg text-white tracking-tight">{name}</div>
            <p className="mt-1 text-[12.5px] text-zinc-400 leading-relaxed">{desc}</p>

            <div className="mt-5 flex items-center justify-between">
                {state === "connected" ? (
                    <span className="inline-flex items-center gap-1.5 text-[11.5px] text-zinc-300">
                        <Users className="size-3.5" />
                        {accounts} Connected
                        <ChevronRight className="size-3 rotate-90 text-zinc-500" />
                    </span>
                ) : (
                    <span className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 px-2 py-0.5">
                        No accounts
                    </span>
                )}
                {state === "connected" ? (
                    <button className="inline-flex items-center gap-1.5 rounded-md border border-rose-400/30 bg-rose-500/10 text-rose-300 text-[11.5px] px-3 py-1.5 hover:bg-rose-500/20 transition-colors">
                        Disconnect
                    </button>
                ) : (
                    <button className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 text-white text-[11.5px] px-3 py-1.5 hover:bg-white/10 transition-colors">
                        <Plug className="size-3" /> Switch
                    </button>
                )}
            </div>
        </div>
    );
}

/* ---------------- MAIL ---------------- */

function MailSection() {
    const threads = [
        {
            from: "<ithyazeasha@gmail.com>",
            subj: "Customer Onboarding",
            preview: "Hello, Welcome aboard! We are thrilled to partner with you and are fully committed to ensuring your transition is seamless, efficient, and successful fro…",
            date: "May 24",
            a: "IT",
            tone: "rose",
        },
        {
            from: '"pa_square_enterprise"<pa_square_enterprise@zohomail.in>',
            subj: "Proposal for Finance Management System Development - Phase 1",
            preview: "Hi Krishnan, Thank you for sharing the requirements. Based on our discussion, please find the proposed s…",
            date: "Apr 4",
            a: "PS",
            tone: "emerald",
        },
        {
            from: '"pa_square_enterprise"<pa_square_enterprise@zohomail.in>',
            subj: "Minutes of Meeting (MOM) – 28th March",
            preview: "Hi Krishnan, Please find below the Minutes of Meeting (MOM) held on 28th March. This captures the discussion on module scope, i…",
            date: "Mar 30",
            a: "PS",
            tone: "emerald",
        },
        {
            from: '"pa_square_enterprise"<pa_square_enterprise@zohomail.in>',
            subj: "Proposal for Billing & Business Management Web Application for PA Square Enterprise",
            preview: "Dear Krishnan, Greetings from Zithtech. Thank you for the opportunity to work with PA…",
            date: "Mar 9",
            a: "PS",
            tone: "emerald",
        },
        {
            from: '"rajkumar"<rajkumar@j2bglobal.com>',
            subj: "Invoice Submission – VDrive",
            preview: "Dear Raj, Please find attached the invoice for VDrive for the period February 1st 2026 to February 28th 2026. Kindly review the invoice and arra…",
            date: "Mar 3",
            a: "RA",
            tone: "violet",
            attach: true,
        },
        {
            from: '"bharathi"<bharathi@zithmi.com>',
            subj: "Fwd: Timesheet Testing Update",
            preview: 'ithyaz Forwarded message From: Divya Dhamodharan To: "ithyaz" Cc: "Saroja Paramasivam" Date: Mon, 16 Feb 2026 23:54:42 +0530 Subje…',
            date: "Feb 18",
            a: "BH",
            tone: "rose",
            attach: true,
        },
        {
            from: '"josh"<josh@j2bglobal.com>',
            subj: "Statement of Work (SOW)",
            preview: "Dear Josh, Please find attached the Statement of Work (SOW) for your review and confirmation. Kindly go through the document and let us know i…",
            date: "Jan 14",
            a: "JO",
            tone: "rose",
            attach: true,
        },
    ];
    const avatarTone = {
        rose: "bg-rose-500/30 text-rose-100 border-rose-400/40",
        emerald: "bg-emerald-500/30 text-emerald-100 border-emerald-400/40",
        violet: "bg-violet-500/30 text-violet-100 border-violet-400/40",
    };

    return (
        <section
            id="mail"
            data-testid="mc-mail"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                            Mail
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Inbox without leaving Zukvo.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Every folder — Inbox, Sent, Drafts, Spam, Trash, Archive — exactly
                            where you'd expect it. Compose, search, filter by attachment, and
                            convert any thread to a ticket in one click.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Pencil, t: "Compose with attachments + rich text" },
                                { i: Filter, t: "Filter by Unread · Read · Has Attachment" },
                                { i: Search, t: "Full-text search across threads" },
                                { i: Ticket, t: "Convert thread → ticket in one click" },
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
                            <div className="grid grid-cols-12">
                                {/* Folder sidebar */}
                                <div className="col-span-4 border-r border-white/5 p-4 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <span className="inline-flex size-8 items-center justify-center rounded-md bg-violet-500/15 text-violet-200 border border-violet-400/30">
                                            <Mail className="size-4" />
                                        </span>
                                        <div>
                                            <div className="text-[12.5px] text-white font-medium">
                                                Mail
                                            </div>
                                            <div className="text-[10.5px] text-zinc-500">
                                                ithyaz@zithmi.com
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full inline-flex items-center justify-center gap-1.5 rounded-md bg-white text-zukvo-ink text-[11.5px] font-medium px-3 py-1.5">
                                        <Pencil className="size-3.5" /> Compose
                                    </button>
                                    <div>
                                        <div className="text-[9.5px] uppercase tracking-[0.22em] text-zinc-500 font-bold mb-1.5">
                                            Folders
                                        </div>
                                        <ul className="space-y-0.5 text-[12.5px]">
                                            {[
                                                { i: Inbox, t: "Inbox" },
                                                { i: Send, t: "Sent", c: 8, active: true },
                                                { i: FileText, t: "Drafts" },
                                                { i: AlertCircle, t: "Spam" },
                                                { i: Trash2, t: "Trash" },
                                                { i: Archive, t: "Archive" },
                                            ].map((f, i) => (
                                                <li key={i}>
                                                    <div
                                                        className={`flex items-center gap-2 rounded px-2 py-1.5 ${
                                                            f.active
                                                                ? "bg-zukvo-500/15 text-zukvo-200"
                                                                : "text-zinc-400"
                                                        }`}
                                                    >
                                                        <f.i className="size-3.5" />
                                                        <span className="flex-1">{f.t}</span>
                                                        {f.c && (
                                                            <span className="text-[10px] rounded-full bg-zukvo-500/15 text-zukvo-300 px-1.5">
                                                                {f.c}
                                                            </span>
                                                        )}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Thread list */}
                                <div className="col-span-8">
                                    <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2 text-[12px] text-zinc-400">
                                        <Search className="size-3.5" />
                                        <span className="text-zinc-500 flex-1">
                                            Search messages, senders, attachments…
                                        </span>
                                        <RefreshCcw className="size-3.5 text-zinc-500" />
                                    </div>
                                    <div className="px-4 py-2 border-b border-white/5 flex items-center justify-between">
                                        <div>
                                            <span className="font-medium text-white text-[13px]">
                                                Sent
                                            </span>
                                            <span className="text-zinc-500 text-[11.5px] ml-2">
                                                8 threads
                                            </span>
                                        </div>
                                    </div>
                                    <div className="px-4 py-2 border-b border-white/5 flex items-center gap-2 text-[11px]">
                                        {["All", "Unread", "Read", "Has Attachment", "No Attachment"].map(
                                            (t, i) => (
                                                <span
                                                    key={i}
                                                    className={`inline-flex items-center rounded-md px-2 py-0.5 ${
                                                        i === 0
                                                            ? "bg-zukvo-500/15 text-zukvo-200 border border-zukvo-500/30"
                                                            : "text-zinc-400"
                                                    }`}
                                                >
                                                    {t}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                    <div className="max-h-[420px] overflow-hidden">
                                        {threads.slice(0, 6).map((t, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-3 px-4 py-3 border-t border-white/5 hover:bg-white/[0.02] transition-colors"
                                            >
                                                <span
                                                    className={`inline-flex size-8 items-center justify-center rounded border text-[11px] font-bold shrink-0 ${avatarTone[t.tone]}`}
                                                >
                                                    {t.a}
                                                </span>
                                                <div className="min-w-0 flex-1">
                                                    <div className="flex items-center gap-2 justify-between">
                                                        <div className="text-[11.5px] text-zinc-300 truncate">
                                                            {t.from}
                                                        </div>
                                                        <div className="text-[10.5px] text-zinc-500 shrink-0 inline-flex items-center gap-1">
                                                            {t.attach && (
                                                                <Paperclip className="size-3" />
                                                            )}
                                                            {t.date}
                                                        </div>
                                                    </div>
                                                    <div className="text-[12.5px] text-zinc-100 truncate">
                                                        <span className="font-medium">{t.subj}</span>
                                                        <span className="text-zinc-500"> — {t.preview}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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

/* ---------------- CALENDAR ---------------- */

function CalendarSection() {
    return (
        <section
            id="calendar"
            data-testid="mc-calendar"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                            Calendar
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Every schedule, one calendar.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Personal, team, holidays, approved leaves and project milestones —
                            layered on a single calendar. Sync Zoho or Google in one tap. Switch
                            between Day, Week and Month views.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Calendar, t: "5 calendar layers toggleable" },
                                { i: RefreshCcw, t: "Two-way Zoho + Google sync" },
                                { i: LayoutGrid, t: "Day · Week · Month views" },
                                { i: Plus, t: "Click any day to create an event" },
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
                            {/* Header */}
                            <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between flex-wrap gap-3">
                                <div className="flex items-center gap-3">
                                    <span className="font-heading text-lg text-white">
                                        Calendar
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                                        <BadgeCheck className="size-2.5" /> Zoho Calendar
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-[11.5px]">
                                    <button className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.02] text-zinc-300 px-2.5 py-1">
                                        Today
                                    </button>
                                    <button className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.02] text-zinc-400 px-1.5 py-1">
                                        <ChevronLeft className="size-3.5" />
                                    </button>
                                    <span className="text-zinc-300 px-1">May 2026</span>
                                    <button className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.02] text-zinc-400 px-1.5 py-1">
                                        <ChevronRight className="size-3.5" />
                                    </button>
                                    <span className="inline-flex border border-white/10 rounded-md p-0.5 ml-2">
                                        <span className="px-2 py-1 rounded text-[11px] text-zinc-400">
                                            Day
                                        </span>
                                        <span className="px-2 py-1 rounded text-[11px] text-zinc-400">
                                            Week
                                        </span>
                                        <span className="px-2 py-1 rounded text-[11px] bg-zukvo-500/15 text-zukvo-200">
                                            Month
                                        </span>
                                    </span>
                                    <button
                                        className="inline-flex items-center gap-1.5 rounded-md text-white text-[11.5px] font-medium px-3 py-1.5 ml-2"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(135deg, #6366F1, #8B5CF6)",
                                        }}
                                    >
                                        <Plus className="size-3.5" /> New event
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-12">
                                {/* Mini sidebar */}
                                <div className="col-span-5 lg:col-span-4 border-r border-white/5 p-4">
                                    {/* Mini month */}
                                    <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                                        <div className="flex items-center justify-between mb-2 text-[12px]">
                                            <ChevronLeft className="size-3.5 text-zinc-500" />
                                            <span className="text-white">May 2026</span>
                                            <ChevronRight className="size-3.5 text-zinc-500" />
                                        </div>
                                        <div className="grid grid-cols-7 gap-0.5 text-[9px] uppercase tracking-[0.2em] text-zinc-500 text-center mb-1">
                                            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                                                <div key={i}>{d}</div>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-7 gap-0.5 text-center text-[10.5px]">
                                            {Array.from({ length: 35 }).map((_, i) => {
                                                const d = i - 4;
                                                const inMonth = d >= 1 && d <= 31;
                                                const today = d === 24;
                                                return (
                                                    <div
                                                        key={i}
                                                        className={`aspect-square inline-flex items-center justify-center rounded ${
                                                            today
                                                                ? "bg-zukvo-500 text-white font-bold"
                                                                : inMonth
                                                                  ? "text-zinc-300"
                                                                  : "text-zinc-700"
                                                        }`}
                                                    >
                                                        {inMonth ? d : d <= 0 ? 30 + d : d - 31}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className="mt-3 space-y-1.5 text-[11.5px]">
                                        <button className="w-full inline-flex items-center justify-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] text-white px-3 py-1.5">
                                            <RefreshCcw className="size-3.5" /> Sync Zoho
                                        </button>
                                        <button className="w-full inline-flex items-center justify-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] text-white px-3 py-1.5">
                                            <Settings2 className="size-3.5" /> Manage integrations
                                        </button>
                                    </div>

                                    <div className="mt-4">
                                        <div className="text-[9.5px] uppercase tracking-[0.22em] text-zinc-500 font-bold mb-2">
                                            My Calendars
                                        </div>
                                        <ul className="space-y-1.5 text-[12px]">
                                            {[
                                                ["Personal Calendar", "bg-zukvo-500"],
                                                ["Team Calendar", "bg-violet-500"],
                                                ["Company Holidays", "bg-rose-500"],
                                                ["Approved Leaves", "bg-emerald-500"],
                                                ["Project Milestones", "bg-cyan-500"],
                                            ].map(([n, c], i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center gap-2"
                                                >
                                                    <span
                                                        className={`inline-flex size-4 items-center justify-center rounded ${c} text-white text-[8px]`}
                                                    >
                                                        ✓
                                                    </span>
                                                    <span className="text-zinc-300">{n}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Month grid */}
                                <div className="col-span-7 lg:col-span-8 p-3">
                                    <div className="grid grid-cols-7 text-[9.5px] uppercase tracking-[0.22em] text-zinc-500 border-b border-white/5 pb-2 mb-1">
                                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                                            (d, i) => (
                                                <div key={i} className="text-center">
                                                    {d}
                                                </div>
                                            ),
                                        )}
                                    </div>
                                    <div className="grid grid-cols-7 gap-px bg-white/5">
                                        {Array.from({ length: 35 }).map((_, i) => {
                                            // Layout starts Mon 27 Apr → Sun 31 May
                                            const offset = 4; // 27 Apr is at idx 0; 1 May at idx 4
                                            const d = i - offset + 1;
                                            const inMonth = d >= 1 && d <= 31;
                                            const today = d === 24;
                                            return (
                                                <div
                                                    key={i}
                                                    className="bg-[#0E0E10] aspect-[5/4] p-1.5 text-[11px]"
                                                >
                                                    <div
                                                        className={`inline-flex size-6 items-center justify-center rounded-full ${
                                                            today
                                                                ? "bg-zukvo-500 text-white font-bold"
                                                                : inMonth
                                                                  ? "text-zinc-300"
                                                                  : "text-zinc-700"
                                                        }`}
                                                    >
                                                        {inMonth
                                                            ? d
                                                            : d <= 0
                                                              ? 30 + d
                                                              : d - 31}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="mt-3 text-[11.5px] text-zinc-500 inline-flex items-center gap-1.5">
                                        <Calendar className="size-3" /> 0 events this view
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

/* ---------------- TWO-WAY SYNC ---------------- */

function TwoWaySync() {
    return (
        <section
            id="sync"
            data-testid="mc-sync"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Two-way Sync
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Email becomes work. Meetings become hours.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Threads can flip into tickets in one click. Meetings auto-log to time so
                        you never undercount billable hours. Every Zukvo invoice, milestone or
                        proposal can ping a calendar or email automatically.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid md:grid-cols-2 gap-5">
                    {/* Email → Ticket */}
                    <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                        <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-violet-300 font-bold">
                            <Workflow className="size-3" /> Email → Ticket
                        </div>
                        <div className="mt-3 grid grid-cols-12 gap-2 items-center">
                            <div className="col-span-5 rounded-md border border-white/10 bg-white/[0.02] p-3">
                                <div className="inline-flex items-center gap-1.5 text-[10px] text-zinc-500 uppercase tracking-[0.18em]">
                                    <Mail className="size-3 text-violet-300" /> Inbox thread
                                </div>
                                <div className="mt-1.5 text-[12.5px] text-white truncate">
                                    Customer Onboarding
                                </div>
                                <div className="text-[11px] text-zinc-500 truncate">
                                    ithyazeasha@gmail.com · May 24
                                </div>
                            </div>
                            <div className="col-span-2 text-center text-zinc-500">
                                <ChevronRight className="size-5 mx-auto" />
                                <div className="text-[10px] mt-1">Zukvo</div>
                            </div>
                            <div className="col-span-5 rounded-md border border-zukvo-500/30 bg-zukvo-500/[0.05] p-3">
                                <div className="inline-flex items-center gap-1.5 text-[10px] text-zukvo-300 uppercase tracking-[0.18em]">
                                    <Ticket className="size-3" /> ZK-2042 created
                                </div>
                                <div className="mt-1.5 text-[12.5px] text-white truncate">
                                    Customer Onboarding · Phase 1
                                </div>
                                <div className="text-[11px] text-zinc-500 truncate">
                                    Assigned · ithyaz · Onboarding sprint
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-[11.5px] text-zinc-400">
                            One click, subject becomes the ticket title, sender becomes the
                            reporter, attachments come along. Replies stay threaded.
                        </div>
                    </div>

                    {/* Meeting → Time */}
                    <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                        <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-emerald-300 font-bold">
                            <Workflow className="size-3" /> Meeting → Time
                        </div>
                        <div className="mt-3 grid grid-cols-12 gap-2 items-center">
                            <div className="col-span-5 rounded-md border border-white/10 bg-white/[0.02] p-3">
                                <div className="inline-flex items-center gap-1.5 text-[10px] text-zinc-500 uppercase tracking-[0.18em]">
                                    <Calendar className="size-3 text-zukvo-300" /> Calendar event
                                </div>
                                <div className="mt-1.5 text-[12.5px] text-white truncate">
                                    Design review · Pathematic
                                </div>
                                <div className="text-[11px] text-zinc-500 truncate">
                                    Fri · 11:00 AM – 12:00 PM
                                </div>
                            </div>
                            <div className="col-span-2 text-center text-zinc-500">
                                <ChevronRight className="size-5 mx-auto" />
                                <div className="text-[10px] mt-1">Zukvo</div>
                            </div>
                            <div className="col-span-5 rounded-md border border-emerald-400/30 bg-emerald-500/[0.05] p-3">
                                <div className="inline-flex items-center gap-1.5 text-[10px] text-emerald-300 uppercase tracking-[0.18em]">
                                    <Timer className="size-3" /> 1h tracked
                                </div>
                                <div className="mt-1.5 text-[12.5px] text-white truncate">
                                    Pathematic · Design review
                                </div>
                                <div className="text-[11px] text-zinc-500 truncate">
                                    Billable · auto-logged
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-[11.5px] text-zinc-400">
                            Attendees, duration and project map directly to a time entry.
                            Billable/internal inferred from the calendar layer.
                        </div>
                    </div>

                    {/* Zukvo → Calendar */}
                    <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                        <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-cyan-300 font-bold">
                            <Workflow className="size-3" /> Zukvo → Calendar
                        </div>
                        <div className="mt-3 grid grid-cols-12 gap-2 items-center">
                            <div className="col-span-5 rounded-md border border-white/10 bg-white/[0.02] p-3">
                                <div className="inline-flex items-center gap-1.5 text-[10px] text-zinc-500 uppercase tracking-[0.18em]">
                                    <GitBranch className="size-3 text-violet-300" /> Sprint
                                    milestone
                                </div>
                                <div className="mt-1.5 text-[12.5px] text-white truncate">
                                    Phase 2 · Delivery
                                </div>
                                <div className="text-[11px] text-zinc-500 truncate">
                                    Aug 20 · Pathematic
                                </div>
                            </div>
                            <div className="col-span-2 text-center text-zinc-500">
                                <ChevronRight className="size-5 mx-auto" />
                                <div className="text-[10px] mt-1">Calendar</div>
                            </div>
                            <div className="col-span-5 rounded-md border border-cyan-400/30 bg-cyan-500/[0.05] p-3">
                                <div className="inline-flex items-center gap-1.5 text-[10px] text-cyan-300 uppercase tracking-[0.18em]">
                                    <Calendar className="size-3" /> Event pinned
                                </div>
                                <div className="mt-1.5 text-[12.5px] text-white truncate">
                                    Pathematic · Phase 2 ship date
                                </div>
                                <div className="text-[11px] text-zinc-500 truncate">
                                    Project Milestones layer · Aug 20
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Invoice → Email */}
                    <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                        <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-rose-300 font-bold">
                            <Workflow className="size-3" /> Invoice → Email
                        </div>
                        <div className="mt-3 grid grid-cols-12 gap-2 items-center">
                            <div className="col-span-5 rounded-md border border-white/10 bg-white/[0.02] p-3">
                                <div className="inline-flex items-center gap-1.5 text-[10px] text-zinc-500 uppercase tracking-[0.18em]">
                                    <FileText className="size-3 text-emerald-300" /> Invoice
                                    INV-2026-005
                                </div>
                                <div className="mt-1.5 text-[12.5px] text-white truncate">
                                    ₹4,200 · Phase 1
                                </div>
                                <div className="text-[11px] text-zinc-500 truncate">
                                    Status · Ready to send
                                </div>
                            </div>
                            <div className="col-span-2 text-center text-zinc-500">
                                <ChevronRight className="size-5 mx-auto" />
                                <div className="text-[10px] mt-1">Mail</div>
                            </div>
                            <div className="col-span-5 rounded-md border border-violet-400/30 bg-violet-500/[0.05] p-3">
                                <div className="inline-flex items-center gap-1.5 text-[10px] text-violet-300 uppercase tracking-[0.18em]">
                                    <Send className="size-3" /> Sent
                                </div>
                                <div className="mt-1.5 text-[12.5px] text-white truncate">
                                    Re: Invoice for Phase 1
                                </div>
                                <div className="text-[11px] text-zinc-500 truncate">
                                    Tracked open · PDF attached
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- FOLDERS & FILTERS ---------------- */

function FoldersFilters() {
    return (
        <section
            id="folders"
            data-testid="mc-folders"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-300">
                            Folders & Filters
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Stay organised without thinking about it.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Every folder you'd expect — Inbox, Sent, Drafts, Spam, Trash, Archive.
                            Five toggleable calendar layers. Smart filters by attachment, read
                            state, sender — saved as views you can return to.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Folder, t: "6 mail folders, 5 calendar layers" },
                                { i: Filter, t: "Filter by Attachment · Read · Sender" },
                                { i: Eye, t: "Save filtered views per inbox" },
                                { i: ShieldCheck, t: "Privacy: Zukvo never stores email body" },
                            ].map((b, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2.5 text-[14px] text-zinc-300"
                                >
                                    <b.i className="size-4 text-amber-300" /> {b.t}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 gap-3">
                        <FolderTile icon={Inbox} t="Inbox" sub="All incoming" tone="indigo" />
                        <FolderTile icon={Send} t="Sent" sub="8 threads" tone="violet" badge="8" />
                        <FolderTile icon={FileText} t="Drafts" sub="0 in progress" tone="amber" />
                        <FolderTile icon={AlertCircle} t="Spam" sub="Auto-filtered" tone="rose" />
                        <FolderTile icon={Trash2} t="Trash" sub="30-day window" tone="zinc" />
                        <FolderTile icon={Archive} t="Archive" sub="Quietly stored" tone="emerald" />
                    </div>
                </div>

                <div className="zk-reveal mt-10 grid md:grid-cols-5 gap-3">
                    {[
                        ["Personal", "indigo", Building2],
                        ["Team", "violet", Users],
                        ["Holidays", "rose", Star],
                        ["Approved Leaves", "emerald", BadgeCheck],
                        ["Project Milestones", "cyan", GitBranch],
                    ].map(([n, tone, Ic], i) => (
                        <div
                            key={i}
                            className="rounded-xl border border-white/10 bg-[#0E0E10] p-4 flex items-center gap-3"
                        >
                            <span
                                className={`inline-flex size-8 items-center justify-center rounded-md ${
                                    tone === "indigo"
                                        ? "bg-zukvo-500/15 text-zukvo-300 border border-zukvo-500/30"
                                        : tone === "violet"
                                          ? "bg-violet-500/15 text-violet-300 border border-violet-400/30"
                                          : tone === "rose"
                                            ? "bg-rose-500/15 text-rose-300 border border-rose-400/30"
                                            : tone === "emerald"
                                              ? "bg-emerald-500/15 text-emerald-300 border border-emerald-400/30"
                                              : "bg-cyan-500/15 text-cyan-300 border border-cyan-400/30"
                                }`}
                            >
                                <Ic className="size-4" />
                            </span>
                            <div>
                                <div className="text-[12.5px] text-white">{n}</div>
                                <div className="text-[10.5px] text-zinc-500">
                                    Calendar layer
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FolderTile({ icon: Icon, t, sub, tone, badge }) {
    const toneMap = {
        indigo: "bg-zukvo-500/15 text-zukvo-300 border-zukvo-500/30",
        violet: "bg-violet-500/15 text-violet-300 border-violet-400/30",
        amber: "bg-amber-500/15 text-amber-300 border-amber-400/30",
        rose: "bg-rose-500/15 text-rose-300 border-rose-400/30",
        emerald: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
        zinc: "bg-white/5 text-zinc-300 border-white/10",
    };
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-4 flex items-center gap-3">
            <span
                className={`inline-flex size-10 items-center justify-center rounded-lg border ${toneMap[tone]}`}
            >
                <Icon className="size-5" />
            </span>
            <div className="flex-1 min-w-0">
                <div className="text-[13px] text-white font-medium">{t}</div>
                <div className="text-[11px] text-zinc-500">{sub}</div>
            </div>
            {badge && (
                <span className="text-[10px] rounded-full bg-zukvo-500/15 text-zukvo-300 border border-zukvo-500/30 px-2 py-0.5">
                    {badge}
                </span>
            )}
        </div>
    );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
    return (
        <section data-testid="mc-final-cta" className="relative bg-[#0A0A0A] text-white">
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
                        Bring your inbox and calendar home.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/#start"
                            data-testid="mc-final-cta-primary"
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
const _unused = [Globe2];

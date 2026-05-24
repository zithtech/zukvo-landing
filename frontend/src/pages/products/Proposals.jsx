import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    LayoutDashboard,
    FileSignature,
    Wand2,
    Sparkles,
    Eye,
    Mail,
    FilePlus2,
    BookOpen,
    Search,
    Filter,
    User,
    Users,
    Calendar,
    Clock3,
    Send,
    Target,
    TrendingUp,
    Plus,
    Pencil,
    Bot,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Heading1,
    Heading2,
    Heading3,
    List,
    ListOrdered,
    AlignLeft,
    Link2,
    Image as ImageIcon,
    Paperclip,
    RefreshCcw,
    CheckCircle2,
    ChevronRight,
    FileText,
    Layers,
    Hash,
    Globe2,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import ImageSlot from "@/components/ImageSlot";

const SUBMODULES = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "builder", label: "Builder", icon: FilePlus2 },
    { id: "zai-create", label: "Create with Zai", icon: Sparkles },
    { id: "zai-enhance", label: "Enhance with Zai", icon: Wand2 },
    { id: "preview", label: "Live Preview", icon: Eye },
    { id: "mail", label: "Send Email", icon: Mail },
];

export default function Proposals() {
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
            data-testid="proposals-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink overflow-x-clip"
        >
            <Nav />
            <Hero />
            <SubmoduleNav />
            <Dashboard />
            <Builder />
            <ZaiCreate />
            <ZaiEnhance />
            <PreviewSection />
            <MailSection />
            <FinalCTA />
            <Footer />
        </main>
    );
}

/* ---------------- HERO ---------------- */

function Hero() {
    return (
        <section
            data-testid="prop-hero"
            className="relative pt-32 md:pt-40 pb-16 md:pb-24 zk-mesh"
        >
            <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_75%)] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                <div className="zk-reveal">
                    <Link
                        to="/products"
                        data-testid="prop-breadcrumb"
                        className="inline-flex items-center gap-1.5 text-[12px] text-zinc-500 hover:text-zukvo-600"
                    >
                        <ArrowLeft className="size-3.5" />
                        All products
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-600">
                            <FileSignature className="size-3.5" />
                            Proposals
                        </div>
                        <h1
                            data-testid="prop-headline"
                            className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink"
                        >
                            Win more. <br />
                            <span className="text-zinc-500">Write less.</span>
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            Zai drafts on-brand proposals from a single brief. Refine block-by-block,
                            preview in real time, and send a trackable email — all from one builder.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/#start"
                                data-testid="prop-cta-primary"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Proposals
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
                                { k: "Zai", v: "End-to-end builder" },
                                { k: "Enhance", v: "Per-section refinement" },
                                { k: "Preview", v: "Real-time render" },
                                { k: "Send", v: "Trackable email + PDF" },
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
            data-testid="prop-submodule-nav"
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
                            data-testid={`prop-pill-${s.id}`}
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
        ["On-Demand Driver Booking App Development", "Operations Director", "OD", "May 7, 2026", "May 7 · 1:13 PM", "ithyaz", "indigo"],
        ["Taxax", "Divya", "D", "May 5, 2026", "May 6 · 8:33 PM", "Divya D", "violet"],
        ["Professional Website Development and Integrated Payment Systems", "Alex Rivera", "AR", "May 3, 2026", "May 3 · 2:44 PM", "Divya D", "amber"],
    ];
    const avatarTone = {
        indigo: "bg-zukvo-500/20 text-zukvo-300 border-zukvo-500/30",
        violet: "bg-violet-500/20 text-violet-300 border-violet-400/30",
        amber: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    };
    return (
        <section
            id="dashboard"
            data-testid="prop-dashboard"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                            Dashboard
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Every proposal — at a glance.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Track total, draft, sent and win-rate KPIs. Filter by client, creator or
                            status. Send mail or open the builder in one click.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: FileSignature, t: "Total · In Draft · Sent · Win Rate" },
                                { i: Filter, t: "Filter by client, creator, status" },
                                { i: Search, t: "Full-text search across proposals" },
                                { i: Mail, t: "Send mail straight from the row" },
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
                            testid="prop-image-dashboard"
                            label="Proposals — Dashboard"
                            chromeUrl="zukvo.app/work/proposals"
                            aspect="16/10"
                            caption="Replace with your Proposals dashboard screenshot."
                        />
                    </div>
                </div>

                {/* KPIs */}
                <div className="zk-reveal mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Kpi icon={FileSignature} kicker="Total proposals" value="3" sub="7d" tone="indigo" />
                    <Kpi icon={Clock3} kicker="In Draft" value="3" sub="7d" tone="amber" />
                    <Kpi icon={Send} kicker="Sent to clients" value="0" sub="7d" tone="violet" />
                    <Kpi icon={Target} kicker="Win rate" value="0%" sub="7d" tone="emerald" />
                </div>

                {/* List mock */}
                <div className="zk-reveal mt-10 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                    <div className="px-5 py-3 border-b border-white/5 flex flex-wrap items-center gap-2 justify-between">
                        <div className="flex items-center gap-2 text-[12px] text-zinc-400">
                            <Search className="size-3.5" />
                            <span className="text-zinc-500">Search proposals, clients, creators…</span>
                        </div>
                        <div className="flex items-center gap-2 text-[11.5px]">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-zinc-300">
                                <Filter className="size-3" /> Client
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-zinc-300">
                                <User className="size-3" /> Created by
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-zinc-300">
                                All statuses
                            </span>
                            <span className="hidden sm:inline text-zinc-500">3 results</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-zinc-500 border-b border-white/5">
                        <div className="col-span-5">Proposal</div>
                        <div className="col-span-2">Client</div>
                        <div className="col-span-1">Status</div>
                        <div className="col-span-1">Created by</div>
                        <div className="col-span-2">Last updated</div>
                        <div className="col-span-1 text-right">Mail</div>
                    </div>
                    {rows.map((r, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-12 items-center px-5 py-3.5 border-t border-white/5 hover:bg-white/[0.02] transition-colors"
                        >
                            <div className="col-span-5 flex items-center gap-3 min-w-0">
                                <span className="inline-flex size-8 items-center justify-center rounded-lg bg-zukvo-500/10 text-zukvo-300 border border-zukvo-500/20 shrink-0">
                                    <FileSignature className="size-4" />
                                </span>
                                <span className="text-[13px] text-zinc-100 truncate">{r[0]}</span>
                            </div>
                            <div className="col-span-2 flex items-center gap-2 min-w-0">
                                <span
                                    className={`inline-flex size-6 items-center justify-center rounded-full border text-[10px] font-bold ${avatarTone[r[6]]}`}
                                >
                                    {r[2]}
                                </span>
                                <span className="text-[12.5px] text-zinc-300 truncate">{r[1]}</span>
                            </div>
                            <div className="col-span-1">
                                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 px-2 py-0.5">
                                    <span className="size-1.5 rounded-full bg-amber-400" /> Draft
                                </span>
                            </div>
                            <div className="col-span-1 text-[12px] text-zinc-400 truncate">{r[5]}</div>
                            <div className="col-span-2 text-[11.5px] text-zinc-500">{r[4]}</div>
                            <div className="col-span-1 text-right">
                                <span className="inline-flex items-center gap-1 text-[11.5px] text-zukvo-300 hover:text-zukvo-200">
                                    <Mail className="size-3.5" /> Send
                                </span>
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

/* ---------------- BUILDER ---------------- */

function Builder() {
    const sections = [
        { n: "01", label: "Cover" },
        { n: "02", label: "Summary" },
        { n: "03", label: "Scope of Work" },
        { n: "04", label: "Timeline" },
        { n: "05", label: "Pricing", warn: true },
        { n: "06", label: "Signature" },
        { n: "07", label: "Section" },
    ];
    return (
        <section
            id="builder"
            data-testid="prop-builder"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Proposal Builder
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Draft and design your perfect proposal.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Outline + Library on the left, an A4 document in the center, and a side
                        panel that lets Zai create or enhance any section. Auto-saved, exportable
                        to PDF, sendable in one click.
                    </p>
                </div>

                {/* Top action bar mock */}
                <div className="zk-reveal mt-12 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 flex-wrap gap-3">
                        <div className="flex items-center gap-3">
                            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-zukvo-500/10 text-zukvo-300 border border-zukvo-500/20">
                                <FilePlus2 className="size-4" />
                            </span>
                            <div>
                                <div className="text-[13px] text-white font-medium">Proposal Builder</div>
                                <div className="text-[11px] text-zinc-500">Draft and design your perfect proposal</div>
                            </div>
                            <span className="ml-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">
                                <span className="size-1.5 rounded-full bg-emerald-400" /> Auto-saved
                            </span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.02] text-[11.5px] p-0.5">
                                <span className="px-2.5 py-1 rounded-full bg-zukvo-500/15 text-zukvo-300">Top</span>
                                <span className="px-2.5 py-1 text-zinc-400">Left</span>
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[11.5px] text-zinc-300">
                                <Search className="size-3" /> Search & commands
                                <span className="ml-1 inline-flex items-center gap-0.5 text-[9.5px] uppercase tracking-[0.18em] rounded border border-white/10 px-1 py-0.5 text-zinc-500">
                                    ⌘ K
                                </span>
                            </span>
                            <button
                                className="inline-flex items-center gap-1.5 rounded-full text-white text-[12px] font-medium px-3 py-1.5"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(90deg, #6366F1, #8B5CF6 50%, #A855F7)",
                                }}
                            >
                                <Sparkles className="size-3.5" /> Create with Zai
                            </button>
                            <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 text-white text-[12px] px-3 py-1.5">
                                <Eye className="size-3.5" /> Live Preview
                            </button>
                            <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 text-white text-[12px] px-3 py-1.5">
                                <ArrowRight className="size-3.5" /> Export
                            </button>
                            <button className="inline-flex items-center gap-1.5 rounded-full bg-zukvo-ink hover:bg-black text-white text-[12px] font-medium px-3 py-1.5 border border-white/10">
                                Save
                            </button>
                        </div>
                    </div>

                    {/* Section tabs */}
                    <div className="px-4 py-2.5 border-b border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar">
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[11.5px] text-zinc-300 shrink-0">
                            <Layers className="size-3" /> Outline
                            <span className="text-[10px] rounded bg-zukvo-500/15 text-zukvo-300 px-1.5">7</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[11.5px] text-zinc-300 shrink-0">
                            <BookOpen className="size-3" /> Library
                        </span>
                        <span className="text-zinc-700 mx-1">·</span>
                        {sections.map((s) => (
                            <span
                                key={s.n}
                                className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11.5px] shrink-0 ${
                                    s.label === "Section"
                                        ? "border-zukvo-500/40 bg-zukvo-500/10 text-zukvo-200"
                                        : "border-white/10 bg-white/[0.02] text-zinc-300"
                                }`}
                            >
                                <span className="text-zinc-500 text-[10px]">{s.n}</span> {s.label}
                                {s.warn && <span className="size-1.5 rounded-full bg-amber-400" />}
                            </span>
                        ))}
                    </div>

                    {/* Body */}
                    <div className="grid lg:grid-cols-12 gap-0">
                        {/* Document column */}
                        <div className="lg:col-span-8 p-5 lg:p-8 border-r border-white/5">
                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 md:p-7 text-[12px] text-zinc-300">
                                <div className="inline-flex items-center gap-1.5 rounded-full border border-zukvo-500/30 bg-zukvo-500/10 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] text-zukvo-300">
                                    Document · A4
                                </div>
                                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-400/30 px-3 py-1 text-[11px] text-violet-200">
                                    <Sparkles className="size-3" /> Edit in the side panel or use Enhance with Zai to fill this section.
                                </div>
                                <div className="mt-6 grid grid-cols-12 gap-4">
                                    <div className="col-span-3 rounded-md border border-dashed border-white/15 h-16 flex items-center justify-center text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                        Logo
                                    </div>
                                    <div className="col-span-9 text-right text-zinc-400 leading-relaxed">
                                        <div className="font-heading text-base text-white">Your Agency LLC</div>
                                        <div>Your Name · contact@youragency.com</div>
                                        <div>(555) 000-0000 · Your business address</div>
                                    </div>
                                </div>
                                <div className="mt-7 text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                                    Proposal for
                                </div>
                                <div className="font-heading text-2xl md:text-3xl text-white mt-1 tracking-tight">
                                    Proposal Title
                                </div>
                                <div className="text-zinc-400 mt-1 max-w-md">
                                    A short, persuasive summary of what this proposal delivers and why it
                                    matters.
                                </div>
                                <div className="mt-6 grid grid-cols-2 gap-5 text-[11.5px]">
                                    <div>
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                            Prepared for
                                        </div>
                                        <div className="text-zinc-200 mt-1">Client Company</div>
                                        <div className="text-zinc-500">Client contact name</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                            Date
                                        </div>
                                        <div className="text-zinc-200 mt-1">Pick a date</div>
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-3">
                                            Valid until
                                        </div>
                                        <div className="text-zinc-200">Pick an expiry date</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side panel */}
                        <div className="lg:col-span-4 p-5 lg:p-6">
                            <div className="rounded-xl border border-violet-400/30 bg-violet-500/5 p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-[12px] text-violet-200 font-bold">
                                        <Sparkles className="size-3.5" /> Section settings
                                    </div>
                                    <span className="text-[9.5px] uppercase tracking-[0.18em] rounded-full bg-violet-500/20 text-violet-200 border border-violet-400/30 px-2 py-0.5">
                                        Active
                                    </span>
                                </div>

                                <div className="mt-4">
                                    <div className="flex items-center justify-between">
                                        <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                                            Section heading
                                        </div>
                                        <button
                                            className="inline-flex items-center gap-1 rounded-full text-white text-[10.5px] font-medium px-2.5 py-0.5"
                                            style={{
                                                backgroundImage:
                                                    "linear-gradient(90deg, #6366F1, #8B5CF6, #A855F7)",
                                            }}
                                        >
                                            <Sparkles className="size-3" /> Create with Zai
                                        </button>
                                    </div>
                                    <div className="mt-2 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-[12px] text-zinc-500 flex items-center gap-2">
                                        <Pencil className="size-3" /> e.g. Project Background
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <div className="flex items-center justify-between">
                                        <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                                            Main content
                                        </div>
                                        <button
                                            className="inline-flex items-center gap-1 rounded-full text-white text-[10.5px] font-medium px-2.5 py-0.5"
                                            style={{
                                                backgroundImage:
                                                    "linear-gradient(90deg, #6366F1, #8B5CF6, #A855F7)",
                                            }}
                                        >
                                            <Wand2 className="size-3" /> Enhance with Zai
                                        </button>
                                    </div>
                                    {/* Toolbar */}
                                    <div className="mt-2 rounded-md border border-white/10 bg-white/[0.02] px-2 py-1.5 flex flex-wrap items-center gap-1 text-zinc-400">
                                        {[Bold, Italic, Underline, Strikethrough].map((Ic, i) => (
                                            <button key={i} className="size-7 inline-flex items-center justify-center rounded hover:bg-white/5">
                                                <Ic className="size-3.5" />
                                            </button>
                                        ))}
                                        <span className="w-px h-4 bg-white/10 mx-1" />
                                        {[Heading1, Heading2, Heading3].map((Ic, i) => (
                                            <button key={i} className="size-7 inline-flex items-center justify-center rounded hover:bg-white/5">
                                                <Ic className="size-3.5" />
                                            </button>
                                        ))}
                                        <span className="w-px h-4 bg-white/10 mx-1" />
                                        {[List, ListOrdered, AlignLeft, Link2, ImageIcon].map((Ic, i) => (
                                            <button key={i} className="size-7 inline-flex items-center justify-center rounded hover:bg-white/5">
                                                <Ic className="size-3.5" />
                                            </button>
                                        ))}
                                    </div>
                                    <div className="mt-2 h-28 rounded-md border border-white/10 bg-white/[0.02]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="zk-reveal mt-6">
                    <ImageSlot
                        testid="prop-image-builder"
                        label="Proposal Builder · Section editor"
                        chromeUrl="zukvo.app/work/proposals/new"
                        aspect="16/9"
                        caption="Replace with your Proposal Builder screenshot."
                    />
                </div>
            </div>
        </section>
    );
}

/* ---------------- ZAI · CREATE (end-to-end) ---------------- */

function ZaiCreate() {
    return (
        <section
            id="zai-create"
            data-testid="prop-zai-create"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-violet-300">
                            <Sparkles className="size-3" /> Zai · End-to-end builder
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            An entire proposal — from one brief.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Describe the project — scope, dates, budget, terms — and Zai assembles
                            Cover, Summary, Scope, Timeline, Pricing and T&Cs in sequence. Tweak,
                            then ship.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                "Cover · Summary · Scope",
                                "Timeline · Pricing · T&Cs",
                                "Brief presets to start fast",
                                "Custom T&Cs directive per project",
                            ].map((b) => (
                                <li
                                    key={b}
                                    className="flex items-center gap-2 text-[14px] text-zinc-300"
                                >
                                    <CheckCircle2 className="size-4 text-violet-300" /> {b}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Modal mock */}
                    <div className="lg:col-span-7">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
                            <div
                                className="px-5 py-4 flex items-start gap-3 border-b border-white/5"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(120deg, rgba(99,102,241,0.18), rgba(139,92,246,0.18) 50%, rgba(168,85,247,0.18))",
                                }}
                            >
                                <span
                                    className="inline-flex size-10 items-center justify-center rounded-xl text-white"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(135deg, #6366F1, #8B5CF6, #A855F7)",
                                    }}
                                >
                                    <Sparkles className="size-5" />
                                </span>
                                <div>
                                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.18em] text-zinc-300">
                                        Zai · End-to-end builder
                                    </div>
                                    <div className="mt-1 font-heading text-lg md:text-xl text-white tracking-tight">
                                        Create an entire proposal with{" "}
                                        <span className="text-violet-300">Zai</span>
                                    </div>
                                    <div className="text-[11.5px] text-zinc-400 max-w-md">
                                        Describe the project — scope, dates, budget, terms — and Zai
                                        will assemble cover, summary, scope, timeline, pricing and
                                        T&Cs in one go.
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 space-y-4">
                                <div className="rounded-xl border border-violet-400/30 bg-violet-500/5 p-4">
                                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-violet-300 font-bold">
                                        <Sparkles className="size-3" /> Project Brief
                                    </div>
                                    <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
                                        <div className="md:col-span-2 h-24 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-[12px] text-zinc-500">
                                            e.g. "Create proposal for driver booking app with start
                                            date 01/05/2026 and end 23/07/2026 with 5 phases and 3
                                            lakhs budget"
                                        </div>
                                        <button
                                            className="rounded-md text-white font-medium text-[13px] flex items-center justify-center gap-2"
                                            style={{
                                                backgroundImage:
                                                    "linear-gradient(135deg, #6366F1, #8B5CF6, #A855F7)",
                                            }}
                                        >
                                            <Sparkles className="size-4" /> Build with Zai
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold mb-2">
                                        Try one of these
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {[
                                            {
                                                emoji: "🚗",
                                                title: "Driver Booking App",
                                                body: "Create proposal for driver booking app with start date 01/05/2026 and end with 23/07/2026 with 5 phases and 3 lakhs budget with 3 terms. Include rider & driver mobile apps, real-time tracking, payments, ratings, and an admin dashboard.",
                                            },
                                            {
                                                emoji: "🛒",
                                                title: "E-commerce Redesign",
                                                body: "Create proposal for e-commerce redesign over 8 weeks with 4 phases and $25,000 budget covering UI/UX research, design system, Next.js frontend, Stripe & shipping integrations, performance optimization and QA before launch.",
                                            },
                                        ].map((p) => (
                                            <div
                                                key={p.title}
                                                className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="inline-flex items-center gap-2">
                                                        <span className="inline-flex size-8 items-center justify-center rounded-md bg-white/5 border border-white/10 text-base">
                                                            {p.emoji}
                                                        </span>
                                                        <span className="text-[13px] font-medium text-white">
                                                            {p.title}
                                                        </span>
                                                    </div>
                                                    <button className="text-[10px] uppercase tracking-[0.18em] rounded-full border border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300 px-2 py-0.5">
                                                        Use this
                                                    </button>
                                                </div>
                                                <p className="mt-2 text-[11.5px] text-zinc-400 leading-relaxed">
                                                    {p.body}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-zukvo-300 font-bold">
                                        <Sparkles className="size-3" /> Terms & Conditions directive
                                    </div>
                                    <div className="mt-2 text-[12px] text-zinc-300 leading-relaxed">
                                        Add infra cost like server, DB, third party integration and
                                        all other services and integrations based on the project will
                                        be handled by the client side.
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] text-zinc-500">
                                    <span>
                                        Zai will generate Cover · Summary · Scope · Timeline ·
                                        Pricing · T&Cs in sequence.
                                    </span>
                                    <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white px-4 py-1.5 text-[12px]">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="zk-reveal mt-10">
                    <ImageSlot
                        testid="prop-image-zai-create"
                        label="Zai · Create an entire proposal"
                        chromeUrl="zukvo.app/work/proposals/new?zai=1"
                        aspect="16/9"
                        caption="Replace with the Create with Zai screenshot."
                    />
                </div>
            </div>
        </section>
    );
}

/* ---------------- ZAI · ENHANCE (per-section) ---------------- */

function ZaiEnhance() {
    const presets = [
        { e: "💼", t: "Make it professional" },
        { e: "📝", t: "Summarize this" },
        { e: "✏️", t: "Fix grammar & flow" },
        { e: "🎯", t: "Make it more persuasive" },
        { e: "✨", t: "Simplify the language" },
    ];
    return (
        <section
            id="zai-enhance"
            data-testid="prop-zai-enhance"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-violet-300">
                        <Wand2 className="size-3" /> Zai · Smart refinement
                    </div>
                    <h2 className="mt-4 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Enhance every section — block by block.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Tell Zai what to change. It rewrites your block in your voice — precise,
                        persuasive, on-brand. Review the suggestion, then apply.
                    </p>
                </div>

                {/* Modal mock */}
                <div className="zk-reveal mt-12 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
                    <div
                        className="px-5 py-4 flex items-start gap-3 border-b border-white/5"
                        style={{
                            backgroundImage:
                                "linear-gradient(120deg, rgba(99,102,241,0.18), rgba(139,92,246,0.18) 50%, rgba(168,85,247,0.18))",
                        }}
                    >
                        <span
                            className="inline-flex size-10 items-center justify-center rounded-xl text-white"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #6366F1, #8B5CF6, #A855F7)",
                            }}
                        >
                            <Wand2 className="size-5" />
                        </span>
                        <div>
                            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.18em] text-zinc-300">
                                Zai · Smart refinement
                            </div>
                            <div className="mt-1 font-heading text-lg md:text-xl text-white tracking-tight">
                                Enhance with <span className="text-violet-300">Zai</span>
                            </div>
                            <div className="text-[11.5px] text-zinc-400 max-w-md">
                                Tell Zai what to change. It rewrites your block in your voice —
                                precise, persuasive, on-brand.
                            </div>
                        </div>
                    </div>

                    <div className="p-5 space-y-5">
                        {/* Instruction */}
                        <div className="rounded-xl border border-zukvo-500/30 bg-zukvo-500/5 p-4">
                            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-zukvo-300 font-bold">
                                <Wand2 className="size-3" /> Instruction
                            </div>
                            <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div className="md:col-span-2 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2.5 text-[12.5px] text-zinc-200">
                                    Enhance the title
                                </div>
                                <button
                                    className="rounded-md text-white font-medium text-[13px] flex items-center justify-center gap-2"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(135deg, #6366F1, #8B5CF6, #A855F7)",
                                    }}
                                >
                                    <Wand2 className="size-4" /> Enhance with Zai
                                </button>
                            </div>
                            <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px]">
                                <span className="text-zinc-500 uppercase tracking-[0.18em]">Try:</span>
                                {presets.map((p) => (
                                    <span
                                        key={p.t}
                                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-zinc-300"
                                    >
                                        <span>{p.e}</span> {p.t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Compare */}
                        <div className="grid lg:grid-cols-2 gap-4">
                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                                <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold flex items-center gap-1.5">
                                    <span className="size-1.5 rounded-full bg-zinc-500" /> Current
                                </div>
                                <div className="mt-3 rounded-md border border-white/10 bg-black/30 p-3">
                                    <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                        Title
                                    </div>
                                    <div className="text-[14px] text-zinc-200 mt-0.5">
                                        E-Commerce Website
                                    </div>
                                </div>
                                <div className="mt-3 rounded-md border border-white/10 bg-black/30 p-3">
                                    <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                        Project summary
                                    </div>
                                    <div className="text-[12px] text-zinc-500 mt-0.5 font-mono">
                                        &lt;p&gt;&lt;/p&gt;
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-violet-400/30 bg-violet-500/5 p-4 relative">
                                <div className="flex items-center justify-between">
                                    <div className="text-[10px] uppercase tracking-[0.22em] text-violet-200 font-bold flex items-center gap-1.5">
                                        <span className="size-1.5 rounded-full bg-violet-400" /> Zai's
                                        suggestion
                                    </div>
                                    <span className="text-[9.5px] uppercase tracking-[0.18em] rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 px-2 py-0.5">
                                        Ready
                                    </span>
                                </div>
                                <div className="mt-3 rounded-md border border-violet-400/30 bg-black/30 p-3">
                                    <div className="flex items-center justify-between">
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                                            Title
                                        </div>
                                        <span className="text-[9.5px] uppercase tracking-[0.18em] rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 px-2 py-0.5">
                                            Updated by Zai
                                        </span>
                                    </div>
                                    <div className="text-[14px] text-white mt-1">
                                        Custom E-Commerce Platform Development
                                    </div>
                                </div>
                                <div className="mt-3 rounded-md border border-violet-400/30 bg-black/30 p-3">
                                    <div className="flex items-center justify-between">
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                                            Project summary
                                        </div>
                                        <span className="text-[9.5px] uppercase tracking-[0.18em] rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 px-2 py-0.5">
                                            Updated by Zai
                                        </span>
                                    </div>
                                    <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                                        <div className="h-full w-2/3 bg-gradient-to-r from-zukvo-500 to-violet-500" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] text-zinc-500">
                            <span>Review the suggestion. Apply replaces the current content.</span>
                            <div className="flex items-center gap-2">
                                <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white px-4 py-1.5 text-[12px]">
                                    Cancel
                                </button>
                                <button className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors text-white px-4 py-1.5 text-[12px] font-medium">
                                    <CheckCircle2 className="size-3.5" /> Apply Zai's suggestion
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="zk-reveal mt-6">
                    <ImageSlot
                        testid="prop-image-zai-enhance"
                        label="Enhance with Zai · Smart Refinement"
                        chromeUrl="zukvo.app/work/proposals/new?enhance=1"
                        aspect="16/9"
                        caption="Replace with the Enhance with Zai screenshot."
                    />
                </div>
            </div>
        </section>
    );
}

/* ---------------- LIVE PREVIEW ---------------- */

function PreviewSection() {
    return (
        <section
            id="preview"
            data-testid="prop-preview"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                            Live Preview
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            See exactly what your client will see.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            One click flips your builder into a clean, paginated preview — the same
                            view your client gets in their inbox. Edit, refresh, ship.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Eye, t: "Paginated A4 render" },
                                { i: RefreshCcw, t: "Hot reloads on every edit" },
                                { i: Globe2, t: "Mobile-friendly client view" },
                                { i: FileText, t: "1-click export to PDF" },
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
                            testid="prop-image-preview"
                            label="Proposal · Live Preview"
                            chromeUrl="zukvo.app/work/proposals/preview"
                            aspect="16/10"
                            caption="Replace with your Live Preview screenshot."
                        />
                    </div>
                </div>

                {/* Pages strip */}
                <div className="zk-reveal mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        ["Cover", "Page 1"],
                        ["Summary & Scope", "Page 2"],
                        ["Timeline & Pricing", "Page 3"],
                        ["T&Cs & Signature", "Page 4"],
                    ].map(([t, p], i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-white/10 bg-[#0E0E10] p-4 aspect-[3/4] flex flex-col"
                        >
                            <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-300">
                                {p}
                            </div>
                            <div className="mt-2 font-heading text-lg text-white tracking-tight">
                                {t}
                            </div>
                            <div className="mt-3 space-y-1.5 flex-1">
                                {[80, 92, 64, 78, 70].map((w, k) => (
                                    <div
                                        key={k}
                                        className="h-1.5 rounded-full bg-white/10"
                                        style={{ width: `${w}%` }}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------- MAIL ---------------- */

function MailSection() {
    return (
        <section
            id="mail"
            data-testid="prop-mail"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Compose & Send
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Send proposals — beautifully.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Subject and body auto-fill from the proposal. AI Writing Assistant polishes
                        tone or fixes grammar. PDF attaches itself. One click and it's gone.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-7">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                            {/* Header */}
                            <div className="px-5 py-4 flex items-start justify-between gap-3 border-b border-white/5">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.22em] text-zukvo-300 font-bold">
                                        <span className="size-1.5 rounded-full bg-zukvo-400" />
                                        New message
                                    </div>
                                    <div className="mt-1 font-heading text-lg text-white tracking-tight">
                                        Compose Email
                                    </div>
                                    <div className="text-[11.5px] text-zinc-500">
                                        Send a personalized proposal to{" "}
                                        <span className="text-zinc-300">Operations Director</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[11px] text-zinc-400 hidden sm:block">
                                        Operations Director
                                    </span>
                                    <span className="inline-flex size-9 items-center justify-center rounded-full bg-zukvo-500/20 text-zukvo-200 border border-zukvo-500/30 text-[12px] font-bold">
                                        O
                                    </span>
                                </div>
                            </div>

                            {/* Recipients */}
                            <div className="p-5 border-b border-white/5">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2 text-[12px] text-zinc-300">
                                        <span className="text-[10.5px] uppercase tracking-[0.22em] text-zukvo-300 font-bold">
                                            01
                                        </span>
                                        Recipients
                                    </div>
                                    <span className="text-[10px] uppercase tracking-[0.18em] rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 px-2 py-0.5">
                                        Required
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <Field label="From" placeholder="Sender email" icon={User} />
                                    <Field
                                        label="To"
                                        placeholder="client@example.com"
                                        icon={Hash}
                                    />
                                    <Field
                                        label="Subject"
                                        placeholder=""
                                        value="Proposal for On-Demand Driver Booking App Development"
                                        icon={Pencil}
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="p-5">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2 text-[12px] text-zinc-300">
                                        <span className="text-[10.5px] uppercase tracking-[0.22em] text-zukvo-300 font-bold">
                                            02
                                        </span>
                                        Message
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 px-2 py-0.5">
                                        <Sparkles className="size-3" /> AI template
                                    </span>
                                </div>

                                <div className="rounded-xl border border-violet-400/30 bg-violet-500/5 p-3 flex items-center gap-3">
                                    <span
                                        className="inline-flex size-9 items-center justify-center rounded-lg text-white"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(135deg, #6366F1, #8B5CF6, #A855F7)",
                                        }}
                                    >
                                        <Bot className="size-4" />
                                    </span>
                                    <div className="flex-1">
                                        <div className="text-[12.5px] text-white font-medium">
                                            AI Writing Assistant
                                        </div>
                                        <div className="text-[11px] text-zinc-400">
                                            Polish tone, expand detail, or fix grammar in one click.
                                        </div>
                                    </div>
                                    <button
                                        className="inline-flex items-center gap-1.5 rounded-md text-white text-[11.5px] font-medium px-3 py-1.5"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(135deg, #6366F1, #8B5CF6)",
                                        }}
                                    >
                                        <Wand2 className="size-3.5" /> Enhance content
                                    </button>
                                    <button className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 text-white text-[11.5px] px-3 py-1.5">
                                        Correct grammar
                                    </button>
                                </div>

                                {/* Toolbar */}
                                <div className="mt-3 rounded-md border border-white/10 bg-white/[0.02] px-2 py-1.5 flex flex-wrap items-center gap-1 text-zinc-400">
                                    {[Bold, Italic, Underline, Strikethrough].map((Ic, i) => (
                                        <button key={i} className="size-7 inline-flex items-center justify-center rounded hover:bg-white/5">
                                            <Ic className="size-3.5" />
                                        </button>
                                    ))}
                                    <span className="w-px h-4 bg-white/10 mx-1" />
                                    {[Heading1, Heading2, Heading3, List, ListOrdered, AlignLeft, Link2, ImageIcon].map(
                                        (Ic, i) => (
                                            <button key={i} className="size-7 inline-flex items-center justify-center rounded hover:bg-white/5">
                                                <Ic className="size-3.5" />
                                            </button>
                                        ),
                                    )}
                                </div>

                                <div className="mt-3 rounded-md border border-white/10 bg-white/[0.02] p-4 text-[13px] text-zinc-200 leading-relaxed space-y-2">
                                    <div>Hi Operations Director,</div>
                                    <div>
                                        I'm reaching out regarding the On-Demand Driver Booking App
                                        Development project. Please find the proposal attached.
                                    </div>
                                    <div>Best regards,</div>
                                    <div className="text-zinc-400">ithyaz</div>
                                </div>

                                <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
                                    <span className="inline-flex items-center gap-1.5 text-[11.5px] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2.5 py-1">
                                        <Paperclip className="size-3" /> 1 attachment ready
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white px-4 py-1.5 text-[12px]">
                                            Cancel
                                        </button>
                                        <button
                                            className="inline-flex items-center gap-1.5 rounded-full text-white text-[12px] font-medium px-4 py-1.5"
                                            style={{
                                                backgroundImage:
                                                    "linear-gradient(135deg, #6366F1, #8B5CF6)",
                                            }}
                                        >
                                            <Send className="size-3.5" /> Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-5">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                            <div className="text-[11px] uppercase tracking-[0.22em] text-zukvo-300 font-bold">
                                What's automated
                            </div>
                            <ul className="mt-4 space-y-2.5 text-[13.5px] text-zinc-300">
                                {[
                                    { i: Pencil, t: "Subject auto-fills from proposal title" },
                                    { i: User, t: "Recipient picks up the client's contact" },
                                    { i: Paperclip, t: "Final PDF attaches itself" },
                                    { i: Bot, t: "AI Writing Assistant polishes tone or grammar" },
                                    { i: Send, t: "Tracked open & read receipts" },
                                ].map((b, i) => (
                                    <li key={i} className="flex items-center gap-2.5">
                                        <b.i className="size-4 text-zukvo-300" /> {b.t}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <ImageSlot
                            testid="prop-image-mail"
                            label="Compose Email · Send proposal"
                            chromeUrl="zukvo.app/work/proposals/send"
                            aspect="16/10"
                            caption="Replace with the Compose Email screenshot."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Field({ label, value, placeholder, icon: Icon }) {
    return (
        <div className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2.5">
            <span className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.2em] text-zinc-500 w-16 shrink-0">
                {Icon ? <Icon className="size-3" /> : null}
                {label}
            </span>
            <span className={`text-[13px] flex-1 truncate ${value ? "text-zinc-200" : "text-zinc-500"}`}>
                {value || placeholder}
            </span>
        </div>
    );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
    return (
        <section data-testid="prop-final-cta" className="relative bg-[#0A0A0A] text-white">
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
                        Draft your next proposal with Zai.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/#start"
                            data-testid="prop-final-cta-primary"
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
const _unused = [Users, Calendar, TrendingUp, Plus, useState];

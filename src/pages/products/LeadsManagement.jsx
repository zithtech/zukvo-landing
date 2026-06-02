import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    LayoutDashboard,
    UserPlus,
    Zap,
    Sparkles,
    FileText,
    Mail,
    Activity,
    History,
    FileSignature,
    Flame,
    TrendingUp,
    Target,
    DollarSign,
    Briefcase,
    Calendar,
    Globe2,
    MapPin,
    Phone,
    Star,
    ShieldCheck,
    AlertTriangle,
    Eye,
    Pencil,
    Plus,
    Filter,
    Search,
    Layers,
    Hash,
    User,
    Bot,
    Send,
    CheckCircle2,
    ChevronRight,
    ChevronDown,
    Rocket,
    Paperclip,
    ExternalLink,
    Clock3,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import ImageSlot from "@/components/ImageSlot";

import leadspageImg from "@/assets/leadspage.png";
import newleadImg from "@/assets/newlead.png";
import bidiqImg from "@/assets/bidiq.png";
import leadDetailViewImg from "@/assets/lead-detail-view.png";
import leadProposalImg from "@/assets/lead-proposal.png";
import leadsTimelineImg from "@/assets/leads-timeline.png";

const SUBMODULES = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "create", label: "Create Lead", icon: UserPlus },
    { id: "bidiq", label: "BidIQ Intelligence", icon: Zap },
    { id: "details", label: "Lead Detail", icon: FileText },
    { id: "proposal", label: "Connect to Proposal", icon: FileSignature },
    { id: "mail", label: "Send Mail", icon: Mail },
    { id: "timeline", label: "Timeline", icon: History },
];

export default function LeadsManagement() {
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
            data-testid="leads-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink"
        >
            <SEO />
            <Nav />
            <Hero />
            <SubmoduleNav />
            <Dashboard />
            <CreateLead />
            <BidIQSection />
            <LeadDetail />
            <ProposalLink />
            <MailSection />
            <TimelineSection />
            <FinalCTA />
            <Footer />
        </main>
    );
}

/* ---------------- HERO ---------------- */

function Hero() {
    return (
        <section
            data-testid="leads-hero"
            className="relative pt-32 md:pt-40 pb-16 md:pb-24 zk-mesh"
        >
            <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_75%)] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                <div className="zk-reveal">
                    <Link
                        to="/products"
                        data-testid="leads-breadcrumb"
                        className="inline-flex items-center gap-1.5 text-[12px] text-zinc-500 hover:text-zukvo-600"
                    >
                        <ArrowLeft className="size-3.5" />
                        All products
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-600">
                            <Sparkles className="size-3.5" />
                            Leads Management
                        </div>
                        <h1
                            data-testid="leads-headline"
                            className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink"
                        >
                            A pipeline <br />
                            <span className="text-zinc-500">that actually closes.</span>
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            Capture leads from Zithport, score them with BidIQ AI, generate proposals
                            in one click, and run every opportunity through a pipeline built for
                            freelance work.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/signup"
                                data-testid="leads-cta-primary"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Leads Management
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
                                { k: "Capture", v: "Zithport · manual · CSV" },
                                { k: "BidIQ", v: "AI verdict in seconds" },
                                { k: "Connect", v: "Lead → proposal in 1 click" },
                                { k: "Track", v: "Timeline of every change" },
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
            data-testid="leads-submodule-nav"
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
                            data-testid={`leads-pill-${s.id}`}
                            className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-[12.5px] text-zinc-700 hover:border-amber-500/40 hover:text-amber-600 transition-colors"
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
            data-testid="leads-dashboard"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-300">
                            Dashboard
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Track, manage and convert every opportunity.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Live KPIs across leads, conversions, and pipeline rate. Filter by status,
                            platform, workflow, or creator. Search every record in one keystroke.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Layers, t: "Total · New today · Hot · Pipeline Rate" },
                                { i: Filter, t: "Filter by status, platform, workflow" },
                                { i: Search, t: "Full-text search across leads" },
                                { i: Zap, t: "Inline BidIQ, Proposal & Mail actions" },
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
                    <div className="lg:col-span-7">
                        <ImageSlot
                            testid="leads-image-dashboard"
                            src={leadspageImg}
                            alt="Leads Management Dashboard"
                            label="Leads Management — Dashboard"
                            chromeUrl="zukvo.app/work/leads"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — Leads Management dashboard and opportunity tracking."
                        />
                    </div>
                </div>

                {/* KPIs */}
                <div className="zk-reveal mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Kpi icon={Layers} kicker="Total Leads" value="1" sub="0 added · last 7 days" tone="indigo" />
                    <Kpi icon={Zap} kicker="New Today" value="0" sub="No new leads today" tone="amber" />
                    <Kpi icon={Flame} kicker="Hot Leads" value="0" sub="0% of pipeline · 1 clients" tone="rose" />
                    <Kpi icon={Target} kicker="Pipeline Rate" value="0%" sub="Leads with proposals out" tone="emerald" />
                </div>

                {/* List mock */}
                <div className="zk-reveal mt-10 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                    <div className="px-5 py-3 border-b border-white/5 flex flex-wrap items-center gap-2 justify-between">
                        <div className="flex items-center gap-2 flex-wrap text-[11.5px] text-zinc-400">
                            <Filter className="size-3.5 text-zinc-500" /> Filters
                            {["Status", "Platform", "Workflow", "Created by", "Mail Status"].map(
                                (f) => (
                                    <span
                                        key={f}
                                        className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-zinc-300 whitespace-nowrap shrink-0"
                                    >
                                        {f} <ChevronDown className="size-3 text-zinc-500" />
                                    </span>
                                ),
                            )}
                        </div>
                        <span className="text-[11.5px] text-zinc-500">1 of 1</span>
                    </div>
                    <div className="overflow-x-auto w-full no-scrollbar">
                        <div style={{ minWidth: "1150px" }}>
                            <div className="grid grid-cols-12 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-zinc-500 border-b border-white/5">
                                <div className="col-span-3">Lead</div>
                                <div className="col-span-1">Platform</div>
                                <div className="col-span-1">Status</div>
                                <div className="col-span-2">BidIQ</div>
                                <div className="col-span-2">Proposal</div>
                                <div className="col-span-2">Mail</div>
                                <div className="col-span-1 text-right">Created</div>
                            </div>
                            <div className="grid grid-cols-12 items-center px-5 py-4 border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                                <div className="col-span-3 flex items-center gap-3 min-w-0">
                                    <span className="inline-flex size-9 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 shrink-0 text-[11px] font-bold">
                                        JD
                                    </span>
                                    <div className="min-w-0">
                                        <div className="text-[13px] text-zinc-100 truncate inline-flex items-center gap-1.5">
                                            E-Commerce Web Application
                                            <CheckCircle2 className="size-3.5 text-emerald-300" />
                                        </div>
                                        <div className="text-[11px] text-zinc-500">John Doe · 1w ago</div>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                                        Upwork
                                    </span>
                                </div>
                                <div className="col-span-1">
                                    <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300 px-2 py-0.5">
                                        Open
                                    </span>
                                </div>
                                <div className="col-span-2 text-[12px] text-emerald-300 inline-flex items-center gap-1.5">
                                    <Eye className="size-3.5" /> View BidIQ
                                </div>
                                <div className="col-span-2 text-[12px] text-violet-300 inline-flex items-center gap-1.5">
                                    <Sparkles className="size-3.5" /> Generate
                                </div>
                                <div className="col-span-2 text-[12px] text-zukvo-300 inline-flex items-center gap-1.5">
                                    <Mail className="size-3.5" /> Send Mail
                                </div>
                                <div className="col-span-1 text-right text-[12px] text-zinc-400 inline-flex items-center justify-end gap-1.5 ml-auto">
                                    <span className="inline-flex size-6 items-center justify-center rounded-full bg-zukvo-500/20 text-zukvo-200 border border-zukvo-500/30 text-[10px] font-bold">
                                        S
                                    </span>
                                    Sebastian
                                </div>
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

/* ---------------- CREATE LEAD ---------------- */

function CreateLead() {
    return (
        <section
            id="create"
            data-testid="leads-create"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Create Lead
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        New leads — captured in under a minute.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Four quick sections — client, job, platform, docs. AI distills the job
                        description into actionable insight. Auto-saved as you type, so nothing is
                        ever lost.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-7">
                        {/* Drawer mock */}
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                            <div className="px-5 py-4 flex items-start gap-3 border-b border-white/5">
                                <span
                                    className="inline-flex size-10 items-center justify-center rounded-xl text-white"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(135deg, #6366F1, #8B5CF6, #A855F7)",
                                    }}
                                >
                                    <Sparkles className="size-5" />
                                </span>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <div className="font-heading text-lg text-white tracking-tight">
                                            New Lead Entry
                                        </div>
                                        <span className="inline-flex items-center gap-1 rounded-full bg-zukvo-500/15 text-zukvo-200 border border-zukvo-500/30 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.18em]">
                                            <Sparkles className="size-2.5" /> AI-ready
                                        </span>
                                    </div>
                                    <div className="text-[11.5px] text-zinc-500">
                                        4 quick sections — client, job, platform & docs. Takes under
                                        a minute.
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 space-y-4">
                                <DrawerCard n="01" tone="indigo" icon={User} title="Client information" sub="Who you're pitching — contact, location, and trust signals">
                                    <div className="grid grid-cols-2 gap-2.5">
                                        <FormField label="Client Name" placeholder="e.g. John Doe" value="Alex Sterling" />
                                        <FormField label="Email" placeholder="john@example.com" value="al***@nexuscorp.com" />
                                        <FormField label="Phone" placeholder="+1 234…" value="+91 98*** **210" />
                                        <FormField label="Location" placeholder="City, Country" value="Chennai, India" />
                                        <FormField label="Client Rating" placeholder="e.g. 4.9/5" value="5.0/5" />
                                        <FormField label="Total Spend" placeholder="e.g. $10k+" value="$50k+" />
                                    </div>
                                </DrawerCard>

                                <DrawerCard n="02" tone="amber" icon={Briefcase} title="Job specification" sub="Scope, skills, and budget — what success looks like">
                                    <FormField label="Job Title" placeholder="e.g. Senior Frontend Engineer" value="Lead Full Stack Engineer for Zukvo App" full />
                                    <div className="mt-2 rounded-md border border-zukvo-500/30 bg-zukvo-500/5 px-3 py-2.5">
                                        <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-zukvo-300 font-bold">
                                            <Sparkles className="size-3" /> AI Intelligence Summary
                                        </div>
                                        <div className="mt-1.5 text-[11.5px] text-zinc-200">
                                            The client needs a highly scalable full stack web application built with React and Node.js. 
                                            Strong emphasis on responsive design, performance optimization, and AWS deployment.
                                        </div>
                                    </div>
                                    <div className="mt-2 grid grid-cols-3 gap-2.5">
                                        <FormField label="Duration" placeholder="e.g. 3 Months" value="6 Months" />
                                        <FormField label="Hourly ($)" placeholder="" value="45" />
                                        <FormField label="Budget ($)" placeholder="e.g. 5000" value="12000" />
                                    </div>
                                </DrawerCard>

                                <DrawerCard n="03" tone="emerald" icon={Globe2} title="Platform & status" sub="Where this came from and where it sits in your pipeline">
                                    <div className="grid grid-cols-2 gap-2.5">
                                        <FormField label="Platform" value="Direct Entry" options={["Upwork", "Direct Entry", "LinkedIn", "Referral", "Website Form"]} />
                                        <FormField label="Current Status" placeholder="Select status" value="Lead Captured" options={["Lead Captured", "In Review", "Proposal Sent", "Negotiation", "Closed Won", "Closed Lost"]} />
                                        <FormField label="Posted On" value="2026-06-01" />
                                        <FormField label="Next Action" placeholder="Select action" value="Generate Proposal" options={["Generate Proposal", "Send Email", "Schedule Call", "Follow Up"]} />
                                    </div>
                                    <FormField label="Job Link" placeholder="https://…" value="https://zukvo.com/projects/full-stack-app" full />
                                </DrawerCard>

                                <DrawerCard n="04" tone="rose" icon={Paperclip} title="Supporting documents" sub="Briefs, mockups, or contract drafts shared by the client" optional>
                                    <button className="w-full inline-flex items-center justify-center gap-1.5 rounded-md border border-dashed border-white/15 bg-white/[0.02] px-3 py-3 text-[12px] text-zinc-400 hover:text-white">
                                        <Plus className="size-3.5" /> Add Supporting Document
                                    </button>
                                </DrawerCard>
                            </div>

                            <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between flex-wrap gap-3">
                                <span className="inline-flex items-center gap-1.5 text-[11.5px] text-emerald-300">
                                    <CheckCircle2 className="size-3.5" /> Auto-saved to your secure
                                    workspace
                                </span>
                                <div className="flex items-center gap-2">
                                    <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white px-4 py-1.5 text-[12px]">
                                        Cancel
                                    </button>
                                    <button
                                        className="inline-flex items-center gap-1.5 rounded-full text-white text-[12px] font-medium px-4 py-1.5"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(135deg, #6366F1, #8B5CF6, #A855F7)",
                                        }}
                                    >
                                        Create Lead <ArrowRight className="size-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-5">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                            <div className="text-[11px] uppercase tracking-[0.22em] text-amber-300 font-bold">
                                What you get
                            </div>
                            <ul className="mt-4 space-y-2.5 text-[13.5px] text-zinc-300">
                                {[
                                    { i: Sparkles, t: "AI intelligence summary from any brief" },
                                    { i: ShieldCheck, t: "Trust signals · verified payment/phone" },
                                    { i: Globe2, t: "Platform tagging · Upwork · Direct · Referral" },
                                    { i: Paperclip, t: "Attach briefs, mockups, contracts" },
                                    { i: Activity, t: "Auto-saves to your secure workspace" },
                                ].map((b, i) => (
                                    <li key={i} className="flex items-center gap-2.5">
                                        <b.i className="size-4 text-amber-300" /> {b.t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <ImageSlot
                            testid="leads-image-create"
                            src={newleadImg}
                            alt="Create Lead drawer form"
                            label="New Lead Entry · Drawer"
                            chromeUrl="zukvo.app/work/leads/new"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[440px] mx-auto"
                            caption="Live screenshot — new lead creation and AI intelligence summary."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function DrawerCard({ n, tone, icon: Icon, title, sub, children, optional }) {
    const toneMap = {
        indigo: "text-zukvo-300 bg-zukvo-500/10 border-zukvo-500/30",
        amber: "text-amber-300 bg-amber-500/10 border-amber-400/30",
        emerald: "text-emerald-300 bg-emerald-500/10 border-emerald-400/30",
        rose: "text-rose-300 bg-rose-500/10 border-rose-400/30",
    };
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 w-full max-w-full min-w-0">
            <div className="flex items-center gap-3">
                <span
                    className={`inline-flex size-8 items-center justify-center rounded-md text-[11px] font-bold shrink-0 ${toneMap[tone]}`}
                >
                    {n}
                </span>
                <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[12px] uppercase tracking-[0.18em] font-bold text-white">
                        <span className="flex items-center gap-1.5 min-w-0">
                            <Icon className="size-3.5 text-zinc-400 shrink-0" />
                            <span className="break-words">{title}</span>
                        </span>
                        {optional && (
                            <span className="text-[9.5px] tracking-[0.18em] rounded-full border border-white/10 bg-white/5 text-zinc-400 px-2 py-0.5 normal-case font-medium shrink-0">
                                Optional
                            </span>
                        )}
                    </div>
                    <div className="text-[11.5px] text-zinc-500 mt-0.5 normal-case tracking-normal">
                        {sub}
                    </div>
                </div>
            </div>
            <div className="mt-3 w-full max-w-full min-w-0">{children}</div>
        </div>
    );
}

function FormField({ label, placeholder, value, full, options }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(value);

    useEffect(() => {
        if (value !== selected) setSelected(value);
    }, [value]);

    return (
        <div className={`relative ${full ? "col-span-full mt-2" : ""}`}>
            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">
                {label}
            </div>
            {options ? (
                <>
                    <div 
                        className="rounded-md border border-white/10 bg-black/30 px-3 py-2 text-[12.5px] flex items-center justify-between cursor-pointer hover:bg-black/40 transition-colors"
                        onClick={() => setOpen(!open)}
                    >
                        <span className={selected ? "text-zinc-200" : "text-zinc-500"}>
                            {selected || placeholder}
                        </span>
                        <ChevronDown className={`size-3.5 text-zinc-500 transition-transform ${open ? 'rotate-180' : ''}`} />
                    </div>
                    {open && (
                        <>
                            <div className="fixed inset-0 z-10" onClick={() => setOpen(false)}></div>
                            <div className="absolute z-20 w-full mt-1 rounded-md border border-white/10 bg-[#1E1E22] shadow-xl max-h-48 overflow-y-auto">
                                {options.map(opt => (
                                    <div 
                                        key={opt} 
                                        className="px-3 py-2.5 text-[12.5px] text-zinc-300 hover:bg-white/10 cursor-pointer transition-colors"
                                        onClick={() => { setSelected(opt); setOpen(false); }}
                                    >
                                        {opt}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </>
            ) : (
                <div className="rounded-md border border-white/10 bg-black/30 px-3 py-2 text-[12.5px] flex items-center justify-between">
                    <input 
                        type="text"
                        className="bg-transparent border-none outline-none w-full text-zinc-200 placeholder:text-zinc-500"
                        placeholder={placeholder}
                        value={selected || ""}
                        onChange={(e) => setSelected(e.target.value)}
                    />
                </div>
            )}
        </div>
    );
}

/* ---------------- BIDIQ ---------------- */

function BidIQSection() {
    return (
        <section
            id="bidiq"
            data-testid="leads-bidiq"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-start w-full min-w-0">
                    <div className="lg:col-span-5 w-full min-w-0">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-amber-300">
                            <Zap className="size-3" /> BidIQ · Intelligence
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            An AI verdict on every lead.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Win rate, client quality and budget fit — distilled into one score and a
                            short reasoning. Reality gap shows how the post compares to market.
                            Risk signals flag where to push back.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Target, t: "Win-rate, client quality & budget fit" },
                                { i: TrendingUp, t: "Reality gap · post vs market truth" },
                                { i: AlertTriangle, t: "Risk signals · variance, scope creep" },
                                { i: DollarSign, t: "Anchor + suggested bid recommendation" },
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

                    <div className="lg:col-span-7 space-y-4 w-full min-w-0">
                        {/* Verdict card */}
                        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/[0.04] p-5 w-full max-w-full min-w-0">
                            <div className="flex items-center gap-5 flex-wrap">
                                <ScoreRing score={76} />
                                <div className="flex-1 min-w-0">
                                    <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                                        <Sparkles className="size-2.5" /> AI Verdict
                                    </div>
                                    <div className="mt-1 font-heading text-2xl text-white tracking-tight">
                                        Worth Applying
                                    </div>
                                    <div className="text-[12px] text-zinc-400">
                                        Strong client signals — apply within 4h.
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-6 text-right text-[12px]">
                                    <div>
                                        <div className="text-[9.5px] uppercase tracking-[0.18em] text-zinc-500">
                                            Win Rate
                                        </div>
                                        <div className="font-heading text-xl text-emerald-300 mt-0.5">
                                            76%
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-[9.5px] uppercase tracking-[0.18em] text-zinc-500">
                                            Client Quality
                                        </div>
                                        <div className="font-heading text-xl text-emerald-300 mt-0.5">
                                            96
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-[9.5px] uppercase tracking-[0.18em] text-zinc-500">
                                            Budget Fit
                                        </div>
                                        <div className="font-heading text-xl text-emerald-300 mt-0.5">
                                            10
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reality gap */}
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5 w-full max-w-full min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div>
                                    <div className="text-[11px] uppercase tracking-[0.22em] text-rose-300 font-bold">
                                        Reality gap
                                    </div>
                                    <div className="text-[11.5px] text-zinc-500 leading-normal">
                                        What the client posted vs what the work actually needs
                                    </div>
                                </div>
                                <span className="self-start sm:self-center text-[9.5px] uppercase tracking-[0.18em] rounded-full border border-rose-400/30 bg-rose-500/10 text-rose-300 px-2.5 py-0.5 whitespace-nowrap">
                                    High Reality Gap
                                </span>
                            </div>
                            <div className="mt-4 rounded-xl border border-white/10 overflow-x-auto w-full max-w-full min-w-0 no-scrollbar">
                                <div className="min-w-[420px]">
                                    <div className="grid grid-cols-12 px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] text-zinc-500 bg-white/[0.02] border-b border-white/5">
                                        <div className="col-span-4">Metric</div>
                                        <div className="col-span-3">Client posted</div>
                                        <div className="col-span-3">Market reality</div>
                                        <div className="col-span-2 text-right">∆</div>
                                    </div>
                                    {[
                                        [DollarSign, "Budget", "$500", "$1,540", "+208%", "rose"],
                                        [Clock3, "Timeline", "3", "2-2 wk", "+85%", "rose"],
                                        [User, "Team size", "1 dev", "1 devs", "+1", "indigo"],
                                        [History, "Revisions", "2 rd", "10 rd", "+400%", "rose"],
                                    ].map(([Ic, k, a, b, d, t], i) => (
                                        <div
                                            key={i}
                                            className="grid grid-cols-12 items-center px-4 py-3 border-t border-white/5"
                                        >
                                            <div className="col-span-4 inline-flex items-center gap-2 text-[12.5px] text-zinc-200">
                                                <Ic className="size-3.5 text-zinc-500" /> {k}
                                            </div>
                                            <div className="col-span-3 text-[12.5px] text-zinc-300">
                                                {a}
                                            </div>
                                            <div className="col-span-3 text-[12.5px] text-white">
                                                {b}
                                            </div>
                                            <div className="col-span-2 text-right">
                                                <span
                                                    className={`text-[10.5px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 ${
                                                        t === "rose"
                                                            ? "border-rose-400/30 bg-rose-500/10 text-rose-300"
                                                            : "border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300"
                                                    }`}
                                                >
                                                    {d}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-4 rounded-xl border border-zukvo-500/30 bg-zukvo-500/5 p-3 flex items-start gap-2.5 w-full max-w-full min-w-0">
                                <TrendingUp className="size-4 text-zukvo-300 mt-0.5 shrink-0" />
                                <div className="text-[12.5px] text-zinc-300">
                                    <span className="text-[10px] uppercase tracking-[0.22em] text-zukvo-300 font-bold block mb-0.5">
                                        Recommendation
                                    </span>
                                    Quote around <b className="text-white">$0.5k</b> for the full
                                    project to align with market rate.
                                </div>
                            </div>
                        </div>

                        {/* Effort + Risk row */}
                        <div className="grid md:grid-cols-2 gap-4 w-full min-w-0">
                            <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5 w-full max-w-full min-w-0">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-[11px] uppercase tracking-[0.22em] text-amber-300 font-bold">
                                            Effort estimation
                                        </div>
                                        <div className="text-[11.5px] text-zinc-500">
                                            Total hours by skill tier
                                        </div>
                                    </div>
                                    <span className="text-[9.5px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                                        Easy
                                    </span>
                                </div>
                                <div className="mt-4 space-y-3 text-[12.5px]">
                                    {[
                                        ["Beginner", "63-77 hrs", "rose", 90],
                                        ["Intermediate", "50-63 hrs", "amber", 70],
                                        ["Expert", "39-50 hrs", "emerald", 55],
                                    ].map(([t, h, c, w], i) => (
                                        <div key={i}>
                                            <div className="flex items-center justify-between">
                                                <span className="text-zinc-300">{t}</span>
                                                <span className="text-zinc-100">{h}</span>
                                            </div>
                                            <div className="mt-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                                                <div
                                                    className={`h-full ${
                                                        c === "rose"
                                                            ? "bg-rose-400"
                                                            : c === "amber"
                                                              ? "bg-amber-400"
                                                              : "bg-emerald-400"
                                                    }`}
                                                    style={{ width: `${w}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                                        Baseline total
                                    </span>
                                    <span className="font-heading text-xl text-white">55 hrs</span>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5 w-full max-w-full min-w-0">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-[11px] uppercase tracking-[0.22em] text-rose-300 font-bold">
                                            Risk signals
                                        </div>
                                        <div className="text-[11.5px] text-zinc-500">
                                            What might go wrong
                                        </div>
                                    </div>
                                    <span className="text-[9.5px] uppercase tracking-[0.18em] rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 px-2 py-0.5">
                                        1 flagged
                                    </span>
                                </div>
                                <div className="mt-4 rounded-xl border border-amber-400/30 bg-amber-500/5 p-3 w-full max-w-full min-w-0">
                                    <div className="flex items-center justify-between">
                                        <div className="inline-flex items-center gap-2 text-[12.5px] text-zinc-100">
                                            <DollarSign className="size-3.5 text-amber-300" />
                                            Budget variance
                                        </div>
                                        <span className="text-[9.5px] uppercase tracking-[0.18em] rounded-full border border-amber-400/30 bg-amber-500/15 text-amber-300 px-2 py-0.5">
                                            Med
                                        </span>
                                    </div>
                                    <div className="text-[11.5px] text-zinc-400 mt-1">
                                        Client budget is 208% below market average.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Budget + Competition */}
                        <div className="grid md:grid-cols-2 gap-4 w-full min-w-0">
                            <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5 w-full max-w-full min-w-0">
                                <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-300 font-bold">
                                    Budget reality check
                                </div>
                                <div className="text-[11.5px] text-zinc-500">
                                    What to quote, anchored to market
                                </div>
                                <div className="mt-4 space-y-2.5 text-[12.5px]">
                                    <ProgressRow label="Client budget" value="$500" w={42} color="bg-amber-400" />
                                    <ProgressRow label="Suggested bid" value="$450" w={38} color="bg-emerald-400" />
                                </div>
                                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px]">
                                    <span className="rounded-md border border-rose-400/30 bg-rose-500/10 text-rose-300 py-1.5">
                                        Underpriced
                                    </span>
                                    <span className="rounded-md border border-amber-400/30 bg-amber-500/10 text-amber-300 py-1.5">
                                        Fair
                                    </span>
                                    <span className="rounded-md border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 py-1.5">
                                        High value
                                    </span>
                                </div>
                                <div className="mt-3 text-[11.5px] text-zinc-400 inline-flex items-center gap-1.5">
                                    <Target className="size-3.5 text-emerald-300" /> Anchor at{" "}
                                    <b className="text-white">$525</b> for Phase 1 to leave
                                    negotiation room.
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5 w-full max-w-full min-w-0">
                                <div className="text-[11px] uppercase tracking-[0.22em] text-amber-300 font-bold">
                                    Competition
                                </div>
                                <div className="text-[11.5px] text-zinc-500">
                                    How your bid stacks
                                </div>
                                <div className="mt-4 grid grid-cols-2 gap-3">
                                    <div className="rounded-md border border-white/10 bg-white/[0.02] p-3">
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                            Avg. Bid
                                        </div>
                                        <div className="font-heading text-2xl text-white mt-0.5">
                                            $425
                                        </div>
                                        <div className="text-[11px] text-zinc-500">
                                            across 35 bidders
                                        </div>
                                    </div>
                                    <div className="rounded-md border border-white/10 bg-white/[0.02] p-3">
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                            Skill match
                                        </div>
                                        <div className="font-heading text-2xl text-emerald-300 mt-0.5">
                                            100%
                                        </div>
                                        <div className="text-[11px] text-zinc-500">8 matched</div>
                                    </div>
                                </div>
                                <div className="mt-3 rounded-md border border-zukvo-500/30 bg-zukvo-500/5 p-2.5 text-[11.5px] text-zinc-300 inline-flex items-center gap-1.5">
                                    <Zap className="size-3 text-zukvo-300" /> Bid near{" "}
                                    <b className="text-white">$425</b> to remain competitive while
                                    preserving margin.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="zk-reveal mt-10">
                    <ImageSlot
                        testid="leads-image-bidiq"
                        src={bidiqImg}
                        alt="BidIQ Intelligence verdict report"
                        label="BidIQ · Lead intelligence report"
                        chromeUrl="zukvo.app/work/leads/bidiq/lead-1"
                        aspect="auto"
                        objectFit="contain"
                        className="max-w-[800px] mx-auto"
                        caption="Live screenshot — BidIQ AI intelligence analysis and budget-reality-gap estimation."
                    />
                </div>
            </div>
        </section>
    );
}

function ScoreRing({ score = 76 }) {
    const circumference = 2 * Math.PI * 36;
    const offset = circumference - (score / 100) * circumference;
    return (
        <div className="relative size-24 shrink-0">
            <svg viewBox="0 0 80 80" className="size-full -rotate-90">
                <circle cx="40" cy="40" r="36" stroke="rgba(255,255,255,0.08)" strokeWidth="6" fill="none" />
                <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="#10B981"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="font-heading text-2xl text-white leading-none">{score}</div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">/ 100</div>
            </div>
        </div>
    );
}

function ProgressRow({ label, value, w, color }) {
    return (
        <div>
            <div className="flex items-center justify-between">
                <span className="text-zinc-300">{label}</span>
                <span className="text-zinc-100">{value}</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div className={`h-full ${color}`} style={{ width: `${w}%` }} />
            </div>
        </div>
    );
}

/* ---------------- LEAD DETAIL ---------------- */

function LeadDetail() {
    return (
        <section
            id="details"
            data-testid="leads-detail"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Lead detail
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        One page. Every signal.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Job description, required skills, project timeline, internal notes and mail
                        history — all on a single scroll. Win probability, client trust and
                        financial breakdown stay pinned in the right rail.
                    </p>
                </div>

                {/* Detail mock */}
                <div className="zk-reveal mt-12 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                    {/* Top action bar */}
                    <div className="px-5 py-3.5 border-b border-white/5 flex items-center justify-between flex-wrap gap-3">
                        <div className="flex items-center gap-2 text-[12px] text-zinc-400 min-w-0">
                            <ArrowLeft className="size-4 text-zinc-500" />
                            <span className="inline-flex items-center gap-1 text-zinc-500">
                                <Layers className="size-3.5" /> Leads
                            </span>
                            <ChevronRight className="size-3 text-zinc-700" />
                            <span className="text-zinc-200 truncate">E-Commerce Web Application</span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em]">
                                <span className="size-1.5 rounded-full bg-zukvo-400" /> Open
                            </span>
                            <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 text-white text-[11.5px] px-3 py-1.5">
                                <ExternalLink className="size-3.5" /> Open on Upwork
                            </button>
                            <button
                                className="inline-flex items-center gap-1.5 rounded-full text-white text-[11.5px] font-medium px-3 py-1.5"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(135deg, #6366F1, #8B5CF6, #A855F7)",
                                }}
                            >
                                <Rocket className="size-3.5" /> Initialize Project
                            </button>
                            <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 text-white text-[11.5px] px-3 py-1.5">
                                <History className="size-3.5" /> View Timeline
                            </button>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 w-full min-w-0">
                        {/* Main */}
                        <div className="lg:col-span-8 p-5 lg:p-7 lg:border-r border-white/5 space-y-5 w-full min-w-0">
                            <div>
                                <div className="flex items-center gap-2 flex-wrap text-[11px] text-zinc-500">
                                    <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                                        Upwork
                                    </span>
                                    <span className="inline-flex items-center gap-1">
                                        <Calendar className="size-3" /> Posted 8 days ago
                                    </span>
                                    <span className="inline-flex items-center gap-1">
                                        <Clock3 className="size-3" /> 3
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-white/[0.02] text-zinc-400 px-2 py-0.5">
                                        <Activity className="size-3" /> Cold · 35
                                    </span>
                                </div>
                                <h3 className="mt-3 font-heading text-2xl md:text-3xl text-white tracking-tight">
                                    E-Commerce Web Application
                                </h3>
                            </div>

                            {/* KPI cards */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {[
                                    [DollarSign, "Budget", "500", "emerald"],
                                    [Target, "Win Probability", "35%", "violet"],
                                    [TrendingUp, "Skill Match", "40%", "cyan"],
                                    [Briefcase, "Job Type", "Hourly", "amber"],
                                ].map(([Ic, k, v, c], i) => (
                                    <div
                                        key={i}
                                        className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5"
                                    >
                                        <div className="flex items-center gap-2">
                                            <span
                                                className={`inline-flex size-7 items-center justify-center rounded-md border bg-white/5 ${
                                                    c === "emerald"
                                                        ? "text-emerald-300 border-emerald-400/30"
                                                        : c === "violet"
                                                          ? "text-violet-300 border-violet-400/30"
                                                          : c === "cyan"
                                                            ? "text-cyan-300 border-cyan-400/30"
                                                            : "text-amber-300 border-amber-400/30"
                                                }`}
                                            >
                                                <Ic className="size-3.5" />
                                            </span>
                                            <span className="text-[9.5px] uppercase tracking-[0.2em] text-zinc-500">
                                                {k}
                                            </span>
                                        </div>
                                        <div className="mt-2 font-heading text-2xl text-white">
                                            {v}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Job description */}
                            <Card title="Job description" sub="No summary provided for this opportunity." icon={FileText} tone="indigo" />

                            {/* Skills + Timeline */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                                            <Layers className="size-3.5 text-zukvo-300" /> Required
                                            skills
                                        </div>
                                        <span className="text-[10px] text-zinc-500">8</span>
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {[
                                            "React",
                                            "Node",
                                            "PostgreSQL",
                                            "Typescript",
                                            "Javascript",
                                            "HTML",
                                            "CSS",
                                            "Socket.io",
                                        ].map((s) => (
                                            <span
                                                key={s}
                                                className="text-[11px] rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-0.5 text-zinc-300"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                                    <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                                        <Calendar className="size-3.5 text-violet-300" /> Project
                                        timeline
                                    </div>
                                    <div className="mt-3 grid grid-cols-2 gap-3 text-[12px]">
                                        <Field k="Posted on" v="May 15, 2026" />
                                        <Field k="Duration" v="3" />
                                        <Field k="Start date" v="Pending" />
                                        <Field k="End date" v="Pending" />
                                    </div>
                                </div>
                            </div>

                            {/* Internal notes + Mail history */}
                            <Card title="Internal notes" sub="No notes recorded. Add context for your team." icon={Pencil} tone="zinc" />
                            <Card title="Mailing history" sub="No emails sent yet." icon={Mail} tone="zinc" empty />
                        </div>

                        {/* Right rail */}
                        <div className="lg:col-span-4 p-5 lg:p-6 space-y-4 w-full min-w-0">
                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                                <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                                    About the client
                                </div>
                                <div className="mt-3 flex items-center gap-3">
                                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 text-[12px] font-bold">
                                        JD
                                    </span>
                                    <div>
                                        <div className="font-heading text-base text-white tracking-tight">
                                            John Doe
                                        </div>
                                        <div className="text-[11.5px] text-zinc-400 inline-flex items-center gap-2">
                                            <MapPin className="size-3" /> Texas, America
                                            <span className="inline-flex items-center gap-1">
                                                <Star className="size-3 text-amber-300" /> 4.5/5
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 space-y-1.5 text-[12px]">
                                    <div className="inline-flex items-center gap-2 text-zinc-300">
                                        <Mail className="size-3.5 text-zinc-500" />{" "}
                                        john.doe*********@acme.com
                                    </div>
                                    <div className="inline-flex items-center gap-2 text-zinc-300">
                                        <Phone className="size-3.5 text-zinc-500" /> +1 (555) ***-****
                                    </div>
                                </div>
                                <div className="mt-3 flex gap-2">
                                    <span className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                                        <ShieldCheck className="size-3" /> Payment
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                                        <ShieldCheck className="size-3" /> Phone
                                    </span>
                                </div>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-violet-300 font-bold">
                                    <Sparkles className="size-3" /> Win probability
                                </div>
                                <div className="mt-3 flex items-center gap-4">
                                    <div className="relative size-20 shrink-0">
                                        <svg viewBox="0 0 80 80" className="size-full -rotate-90">
                                            <circle cx="40" cy="40" r="32" stroke="rgba(255,255,255,0.08)" strokeWidth="6" fill="none" />
                                            <circle
                                                cx="40"
                                                cy="40"
                                                r="32"
                                                stroke="#8B5CF6"
                                                strokeWidth="6"
                                                strokeLinecap="round"
                                                fill="none"
                                                strokeDasharray={2 * Math.PI * 32}
                                                strokeDashoffset={2 * Math.PI * 32 * (1 - 0.35)}
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <div className="font-heading text-xl text-white leading-none">
                                                35<span className="text-[10px]">%</span>
                                            </div>
                                            <div className="text-[8.5px] uppercase tracking-[0.2em] text-zinc-500">
                                                predicted
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2 flex-1 min-w-0 text-[11.5px]">
                                        <div className="flex items-center justify-between">
                                            <span className="text-zinc-500 uppercase tracking-[0.18em] text-[9.5px]">
                                                Competition
                                            </span>
                                            <span className="rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 px-2 py-0.5 text-[9.5px] uppercase">
                                                Medium
                                            </span>
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-zinc-500 uppercase tracking-[0.18em] text-[9.5px]">
                                                    Skill match
                                                </span>
                                                <span className="text-zinc-200">40%</span>
                                            </div>
                                            <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                                                <div className="h-full bg-violet-400 w-2/5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                                <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-300 font-bold">
                                    Financial breakdown
                                </div>
                                <div className="mt-3 grid grid-cols-2 gap-3 text-[12px]">
                                    <Field k="Budget" v="500" />
                                    <Field k="Total client spend" v="10K" />
                                    <Field k="Rate" v="$30.00" />
                                    <Field k="Job type" v="Hourly" />
                                </div>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                                <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                                    Documents
                                </div>
                                <div className="mt-3 flex items-center justify-between rounded-md border border-white/10 bg-black/30 px-3 py-2 text-[12px]">
                                    <span className="inline-flex items-center gap-2 text-zinc-200 truncate">
                                        <FileText className="size-3.5 text-zinc-500" /> On-Demand
                                        Driver Booking App Dev…
                                    </span>
                                    <ExternalLink className="size-3.5 text-zinc-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="zk-reveal mt-6">
                    <ImageSlot
                        testid="leads-image-detail"
                        src={leadDetailViewImg}
                        alt="Lead detail view"
                        label="Lead detail · One-page view"
                        chromeUrl="zukvo.app/work/leads/lead-1"
                        aspect="auto"
                        objectFit="contain"
                        className="max-w-[800px] mx-auto"
                        caption="Live screenshot — full lead detailed overview and history panel."
                    />
                </div>
            </div>
        </section>
    );
}

function Card({ title, sub, icon: Icon, tone, empty }) {
    const toneMap = {
        indigo: "text-zukvo-300",
        zinc: "text-zinc-400",
    };
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                <Icon className={`size-3.5 ${toneMap[tone]}`} /> {title}
            </div>
            <div
                className={`mt-3 text-[12.5px] text-zinc-500 ${
                    empty
                        ? "rounded-md border border-dashed border-white/10 px-4 py-6 text-center"
                        : ""
                }`}
            >
                {empty && <Mail className="size-4 text-zinc-600 inline mr-1.5" />}
                {sub}
            </div>
        </div>
    );
}

function Field({ k, v }) {
    return (
        <div>
            <div className="text-[9.5px] uppercase tracking-[0.2em] text-zinc-500">{k}</div>
            <div className="text-zinc-100 mt-0.5">{v}</div>
        </div>
    );
}

/* ---------------- PROPOSAL CONNECTION ---------------- */

function ProposalLink() {
    return (
        <section
            id="proposal"
            data-testid="leads-proposal-link"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center w-full min-w-0">
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-violet-300">
                            <FileSignature className="size-3" /> Lead → Proposal
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            From lead to proposal — one click.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Hit "Generate" on any lead row. Zai picks up the brief, skills, budget
                            and timeline — and assembles a full proposal that links back to the
                            originating lead.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Sparkles, t: "Zai uses the lead's brief as input" },
                                { i: FileSignature, t: "Full proposal generated in seconds" },
                                {
                                    i: ExternalLink,
                                    t: "Bi-directional link between lead and proposal",
                                },
                                { i: Send, t: "Send via email straight from the proposal" },
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

                    <div className="lg:col-span-7 w-full min-w-0">
                        {/* Flow mock */}
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5 w-full max-w-full min-w-0">
                            <div className="flex flex-col md:flex-row items-stretch gap-3">
                                <FlowStage
                                    icon={Layers}
                                    chip="Lead"
                                    title="E-Commerce Web App"
                                    sub="Upwork · Open"
                                    tone="indigo"
                                />
                                <FlowArrow />
                                <FlowStage
                                    icon={Sparkles}
                                    chip="Generate"
                                    title="Zai assembles"
                                    sub="Cover · Scope · Pricing"
                                    tone="violet"
                                    glow
                                />
                                <FlowArrow />
                                <FlowStage
                                    icon={FileSignature}
                                    chip="Proposal"
                                    title="Draft ready"
                                    sub="412 words · 4 pages"
                                    tone="emerald"
                                />
                            </div>

                            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.02] p-4 w-full max-w-full min-w-0">
                                <div className="flex items-center justify-between flex-wrap gap-2 min-w-0">
                                    <div className="flex items-center gap-2 text-[12px] text-zinc-200 min-w-0">
                                        <FileSignature className="size-3.5 text-violet-300 shrink-0" />
                                        <span className="truncate">On-Demand Driver Booking App Development</span>
                                    </div>
                                    <span className="text-[10px] uppercase tracking-[0.18em] rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 px-2 py-0.5">
                                        Draft
                                    </span>
                                </div>
                                <div className="mt-2 flex items-center justify-between flex-wrap gap-2 text-[11.5px] text-zinc-500">
                                    <span>
                                        Linked to lead{" "}
                                        <span className="text-zinc-300">
                                            E-Commerce Web Application
                                        </span>{" "}
                                        · created just now
                                    </span>
                                    <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 text-white px-3 py-1 text-[11.5px] hover:bg-white/10">
                                        Open proposal <ChevronRight className="size-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <ImageSlot
                                testid="leads-image-proposal"
                                src={leadProposalImg}
                                alt="Lead proposal creation"
                                label="Lead · Generate proposal"
                                chromeUrl="zukvo.app/work/leads/lead-1/proposal"
                                aspect="auto"
                                objectFit="contain"
                                className="max-w-[800px] mx-auto"
                                caption="Live screenshot — generating a proposal directly linked to lead specification."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FlowStage({ icon: Icon, chip, title, sub, tone, glow }) {
    const toneMap = {
        indigo: "text-zukvo-300 bg-zukvo-500/10 border-zukvo-500/30",
        violet: "text-violet-300 bg-violet-500/10 border-violet-400/30",
        emerald: "text-emerald-300 bg-emerald-500/10 border-emerald-400/30",
    };
    return (
        <div
            className={`flex-1 min-w-0 rounded-xl border bg-[#0E0E12] p-4 ${
                glow
                    ? "border-violet-400/30 shadow-[0_0_0_4px_rgba(139,92,246,0.08)]"
                    : "border-white/10"
            }`}
        >
            <div className="flex items-center justify-between">
                <span
                    className={`inline-flex size-8 items-center justify-center rounded-md border ${toneMap[tone]}`}
                >
                    <Icon className="size-4" />
                </span>
                <span
                    className={`text-[9.5px] uppercase tracking-[0.22em] rounded-full border px-2 py-0.5 ${toneMap[tone]}`}
                >
                    {chip}
                </span>
            </div>
            <div className="mt-3 text-[13px] text-white font-medium">{title}</div>
            <div className="text-[11px] text-zinc-500 mt-0.5">{sub}</div>
        </div>
    );
}

function FlowArrow() {
    return (
        <div className="self-center text-zinc-600 rotate-90 md:rotate-0">
            <ChevronRight className="size-4" />
        </div>
    );
}

/* ---------------- MAIL ---------------- */

function MailSection() {
    return (
        <section
            id="mail"
            data-testid="leads-mail"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center w-full min-w-0">
                    <div className="lg:col-span-5 w-full min-w-0">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-zukvo-500/30 bg-zukvo-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                            <Mail className="size-3" /> Send Mail
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Reach out — without leaving the lead.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Send a personalized message in seconds. Subject, recipient and
                            attachment auto-fill from the lead. AI Writing Assistant polishes tone
                            or fixes grammar in one click.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Pencil, t: "Subject auto-fills from lead title" },
                                { i: User, t: "Recipient picks up the client's contact" },
                                { i: Paperclip, t: "Proposal PDF attaches itself" },
                                { i: Bot, t: "AI polishes tone or grammar" },
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

                    <div className="lg:col-span-7 w-full min-w-0">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden w-full max-w-full min-w-0">
                            <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-zukvo-300 font-bold">
                                        <span className="size-1.5 rounded-full bg-zukvo-400" /> New
                                        message
                                    </div>
                                    <div className="mt-1 font-heading text-lg text-white tracking-tight">
                                        Compose · Lead outreach
                                    </div>
                                    <div className="text-[11.5px] text-zinc-500">
                                        Sending to{" "}
                                        <span className="text-zinc-300">John Doe</span> ·
                                        john.doe*********@acme.com
                                    </div>
                                </div>
                                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 px-2 py-0.5">
                                    <Sparkles className="size-3" /> AI template
                                </span>
                            </div>
                            <div className="p-5 space-y-3 text-[12.5px]">
                                <FormField
                                    label="To"
                                    value="john.doe*********@acme.com"
                                    full
                                />
                                <FormField
                                    label="Subject"
                                    value="Re: E-Commerce Web Application"
                                    full
                                />
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
                                            Polish tone, expand detail, or fix grammar.
                                        </div>
                                    </div>
                                    <button
                                        className="inline-flex items-center gap-1.5 rounded-md text-white text-[11.5px] font-medium px-3 py-1.5"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(135deg, #6366F1, #8B5CF6)",
                                        }}
                                    >
                                        <Sparkles className="size-3.5" /> Enhance
                                    </button>
                                </div>
                                <div className="rounded-md border border-white/10 bg-white/[0.02] p-4 text-[13px] text-zinc-200 leading-relaxed space-y-2 w-full max-w-full min-w-0">
                                    <div>Hi John,</div>
                                    <div>
                                        Thanks for posting the E-Commerce Web Application — I'd love
                                        to walk you through how I'd approach scope, timeline and
                                        delivery for a project like this.
                                    </div>
                                    <div>Best regards,</div>
                                    <div className="text-zinc-400">Sebastian</div>
                                </div>
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                    <span className="inline-flex items-center gap-1.5 text-[11.5px] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2.5 py-1">
                                        <Paperclip className="size-3" /> Proposal.pdf ready
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 text-white px-3 py-1.5 text-[12px]">
                                            Cancel
                                        </button>
                                        <button
                                            className="inline-flex items-center gap-1.5 rounded-full text-white text-[12px] font-medium px-4 py-1.5"
                                            style={{
                                                backgroundImage:
                                                    "linear-gradient(135deg, #6366F1, #8B5CF6)",
                                            }}
                                        >
                                            <Send className="size-3.5" /> Send
                                        </button>
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

/* ---------------- TIMELINE ---------------- */

function TimelineSection() {
    const events = [
        {
            t: "Lead created",
            sub: "Sebastian · just now",
            i: Plus,
            tone: "indigo",
        },
        {
            t: "BidIQ verdict: Worth Applying · 76",
            sub: "AI · 3s after creation",
            i: Sparkles,
            tone: "emerald",
        },
        {
            t: "Status changed · Open → Proposal Ready",
            sub: "Zai · auto-transition",
            i: Activity,
            tone: "amber",
        },
        {
            t: "Proposal generated",
            sub: "412 words · linked to lead",
            i: FileSignature,
            tone: "violet",
        },
        {
            t: "Email sent to John Doe",
            sub: "Subject: Re: E-Commerce Web Application",
            i: Mail,
            tone: "indigo",
        },
        {
            t: "Email opened",
            sub: "Tracked open · 14m ago",
            i: Eye,
            tone: "emerald",
        },
    ];
    const toneMap = {
        indigo: "text-zukvo-300 bg-zukvo-500/10 border-zukvo-500/30",
        emerald: "text-emerald-300 bg-emerald-500/10 border-emerald-400/30",
        amber: "text-amber-300 bg-amber-500/10 border-amber-400/30",
        violet: "text-violet-300 bg-violet-500/10 border-violet-400/30",
    };
    return (
        <section
            id="timeline"
            data-testid="leads-timeline"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Activity timeline
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Every change — instantly visible.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Status moves, AI verdicts, proposal generations, email opens — captured
                        with author + timestamp. Click any event to jump to that exact view.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid lg:grid-cols-12 gap-6 items-start w-full min-w-0">
                    <div className="lg:col-span-7 w-full min-w-0">
                        <div className="relative rounded-2xl border border-white/10 bg-[#0E0E10] p-5 md:p-7 w-full max-w-full min-w-0">
                            <div className="absolute left-9 md:left-10 top-7 bottom-7 w-px bg-white/10" />
                            <ul className="space-y-4">
                                {events.map((e, i) => (
                                    <li key={i} className="relative pl-12 md:pl-14 min-w-0">
                                        <span
                                            className={`absolute left-0 top-0 inline-flex size-9 items-center justify-center rounded-full border bg-[#0E0E12] ${toneMap[e.tone]}`}
                                        >
                                            <e.i className="size-4" />
                                        </span>
                                        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 w-full max-w-full min-w-0">
                                            <div className="text-[13px] text-white break-words">{e.t}</div>
                                            <div className="text-[11.5px] text-zinc-500 mt-0.5 break-words">
                                                {e.sub}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-5 w-full min-w-0">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5 w-full max-w-full min-w-0">
                            <div className="text-[11px] uppercase tracking-[0.22em] text-zukvo-300 font-bold">
                                What's logged
                            </div>
                            <ul className="mt-4 space-y-2.5 text-[13.5px] text-zinc-300">
                                {[
                                    { i: Activity, t: "Status transitions" },
                                    { i: Sparkles, t: "BidIQ verdicts + score changes" },
                                    { i: FileSignature, t: "Proposal creation & updates" },
                                    { i: Mail, t: "Emails sent · opened · clicked" },
                                    { i: Pencil, t: "Notes added by anyone on the team" },
                                ].map((b, i) => (
                                    <li key={i} className="flex items-center gap-2.5">
                                        <b.i className="size-4 text-zukvo-300" /> {b.t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <ImageSlot
                            testid="leads-image-timeline"
                            src={leadsTimelineImg}
                            alt="Lead activity timeline"
                            label="Lead · Activity timeline"
                            chromeUrl="zukvo.app/work/leads/lead-1/timeline"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — full audit trail and history of lead updates."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
    return (
        <section data-testid="leads-final-cta" className="relative bg-[#0A0A0A] text-white">
            <div className="mx-auto max-w-7xl px-6 md:px-10 pb-20">
                <div
                    className="zk-reveal relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0E0E10] p-10 md:p-16 text-center"
                    style={{
                        backgroundImage:
                            "radial-gradient(60% 80% at 50% 0%, rgba(245,158,11,0.18), transparent 60%)",
                    }}
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-300">
                        <Sparkles className="size-3" /> Get started
                    </span>
                    <h2 className="mt-6 font-heading font-medium text-3xl md:text-5xl tracking-[-0.03em]">
                        Capture · Score · Convert.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/signup"
                            data-testid="leads-final-cta-primary"
                            className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors text-white px-6 py-3.5 text-sm font-medium"
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
const _unused = [Hash, useState];

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    ArrowUp,
    ArrowDown,
    LayoutDashboard,
    Landmark,
    Plus,
    PieChart,
    Activity,
    FileText,
    Wallet,
    Calculator,
    TrendingUp,
    TrendingDown,
    Filter,
    Search,
    Calendar,
    Users,
    Tag,
    Hash,
    ChevronDown,
    ChevronRight,
    Pencil,
    Trash2,
    Sparkles,
    Download,
    Receipt,
    CheckCircle2,
    DollarSign,
    BarChart3,
    Layers,
    Eye,
    BadgeCheck,
    Briefcase,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import ImageSlot from "@/components/ImageSlot";

import accountsImg from "@/assets/accounts.png";

const SUBMODULES = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "ledger", label: "Transactions Ledger", icon: Landmark },
    { id: "add", label: "Add Transaction", icon: Plus },
    { id: "breakdown", label: "Category Breakdown", icon: PieChart },
    { id: "activity", label: "Recent Activity", icon: Activity },
    { id: "reports", label: "Reports & Export", icon: Download },
];

export default function Accounts() {
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
            data-testid="accounts-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink overflow-x-clip"
        >
            <SEO />
            <Nav />
            <Hero />
            <SubmoduleNav />
            <Dashboard />
            <Ledger />
            <AddTransaction />
            <Breakdown />
            <RecentActivity />
            <Reports />
            <FinalCTA />
            <Footer />
        </main>
    );
}

/* ---------------- HERO ---------------- */

function Hero() {
    return (
        <section
            data-testid="accounts-hero"
            className="relative pt-32 md:pt-40 pb-16 md:pb-24 zk-mesh"
        >
            <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_75%)] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                <div className="zk-reveal">
                    <Link
                        to="/products"
                        data-testid="accounts-breadcrumb"
                        className="inline-flex items-center gap-1.5 text-[12px] text-zinc-500 hover:text-zukvo-600"
                    >
                        <ArrowLeft className="size-3.5" />
                        All products
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-600">
                            <Calculator className="size-3.5" />
                            Accounts
                        </div>
                        <h1
                            data-testid="accounts-headline"
                            className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink"
                        >
                            A ledger your <br />
                            <span className="text-zinc-500">accountant will love.</span>
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            Track every credit and debit, group by category, audit by member, export
                            in every format your accountant asks for. Live balance, live activity,
                            live month performance.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/signup"
                                data-testid="accounts-cta-primary"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Accounts
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
                                { k: "Credits", v: "Inflow tracked live" },
                                { k: "Debits", v: "Categorised + member-attributed" },
                                { k: "Net", v: "Always-on balance" },
                                { k: "Export", v: "CSV · PDF · accountant-ready" },
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
            data-testid="accounts-submodule-nav"
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
                            data-testid={`accounts-pill-${s.id}`}
                            className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-[12.5px] text-zinc-700 hover:border-emerald-500/40 hover:text-emerald-600 transition-colors"
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
            data-testid="accounts-dashboard"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                            Dashboard
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            The cashflow story, at a glance.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Total credits, total debits, net balance and this-month performance —
                            pinned at the top. The transactions ledger sits right below, filterable
                            by type, category, member and date.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: TrendingUp, t: "Inflow + outflow with live counters" },
                                { i: Wallet, t: "Net balance with 34 total activity" },
                                { i: Filter, t: "Type · Category · Member · Date filters" },
                                { i: PieChart, t: "Breakdown + Recent Activity drawers" },
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
                            testid="accounts-image-dashboard"
                            src={accountsImg}
                            alt="Accounts Management Dashboard"
                            label="Accounts Management · Dashboard"
                            chromeUrl="zukvo.app/finance/accounts"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — company accounts management ledger and KPIs."
                        />
                    </div>
                </div>

                {/* Action header */}
                <div className="zk-reveal mt-10 rounded-2xl border border-white/10 bg-[#0E0E10] p-4 flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300 border border-violet-400/30">
                            <Landmark className="size-5" />
                        </span>
                        <div>
                            <div className="text-[13px] text-white font-medium">
                                Accounts Management
                            </div>
                            <div className="text-[11px] text-zinc-500">
                                Track company income, expenses, and transaction lifecycle.
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-[11.5px]">
                        <button className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 text-white px-3 py-1.5">
                            <FileText className="size-3.5" /> Recent Activity
                        </button>
                        <button className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 text-white px-3 py-1.5">
                            <PieChart className="size-3.5" /> Breakdown
                        </button>
                        <button
                            className="inline-flex items-center gap-1.5 rounded-md text-white text-[12px] font-medium px-3 py-1.5"
                            style={{
                                backgroundImage: "linear-gradient(135deg, #6366F1, #3B82F6)",
                            }}
                        >
                            <Plus className="size-3.5" /> Add Transaction
                        </button>
                    </div>
                </div>

                {/* KPIs */}
                <div className="zk-reveal mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <BigKpi
                        kicker="Total credits"
                        value="₹13,63,798.60"
                        sub="14 transactions"
                        pill="INFLOW"
                        tone="emerald"
                        icon={ArrowUp}
                    />
                    <BigKpi
                        kicker="Total debits"
                        value="₹1,51,554.86"
                        sub="20 transactions"
                        pill="OUTFLOW"
                        tone="rose"
                        icon={ArrowDown}
                    />
                    <BigKpi
                        kicker="Net balance"
                        value="₹12,12,243.74"
                        sub="34 total activity"
                        pill="LIVE"
                        tone="indigo"
                        icon={Wallet}
                    />
                    <BigKpi
                        kicker="This month"
                        value="₹11,97,559.20"
                        sub="Current month performance"
                        pill="MAY 2026"
                        tone="violet"
                        icon={Calendar}
                    />
                </div>
            </div>
        </section>
    );
}

function BigKpi({ kicker, value, sub, pill, tone, icon: Icon }) {
    const toneMap = {
        emerald: {
            iconBg: "bg-emerald-500/15 border-emerald-400/30 text-emerald-300",
            pill: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
            bar: "bg-emerald-400",
            valueText: "text-emerald-300",
        },
        rose: {
            iconBg: "bg-rose-500/15 border-rose-400/30 text-rose-300",
            pill: "border-rose-400/30 bg-rose-500/10 text-rose-300",
            bar: "bg-rose-400",
            valueText: "text-rose-300",
        },
        indigo: {
            iconBg: "bg-zukvo-500/15 border-zukvo-500/30 text-zukvo-300",
            pill: "border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300",
            bar: "bg-zukvo-400",
            valueText: "text-zukvo-300",
        },
        violet: {
            iconBg: "bg-violet-500/15 border-violet-400/30 text-violet-300",
            pill: "border-violet-400/30 bg-violet-500/10 text-violet-300",
            bar: "bg-violet-400",
            valueText: "text-violet-300",
        },
    }[tone];
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5 relative overflow-hidden">
            <div className="flex items-start justify-between">
                <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                    {kicker}
                </div>
                <span
                    className={`inline-flex size-8 items-center justify-center rounded-md border ${toneMap.iconBg}`}
                >
                    <Icon className="size-4" />
                </span>
            </div>
            <div className={`mt-3 font-heading text-2xl md:text-[26px] text-white tracking-tight`}>
                {value}
            </div>
            <div className="mt-2 flex items-center justify-between gap-2 flex-wrap">
                <span className="text-[11.5px] text-zinc-500">{sub}</span>
                <span
                    className={`inline-flex items-center text-[9.5px] uppercase tracking-[0.22em] rounded-full border px-2 py-0.5 ${toneMap.pill}`}
                >
                    {pill}
                </span>
            </div>
            <div className="mt-3 h-1 rounded-full bg-white/5 overflow-hidden">
                <div className={`h-full ${toneMap.bar} w-2/3`} />
            </div>
        </div>
    );
}

/* ---------------- LEDGER ---------------- */

function Ledger() {
    const rows = [
        ["May 02, 2026", "12:00 AM", "DEBIT", "-₹2,100.00", "ithyaz", "N/A", "HOSTINGER-SERVER", "Hostinger Server cost for Zukvo", "rose", "ithyaz"],
        ["May 01, 2026", "03:49 PM", "DEBIT", "-₹3,044.40", "ithyaz", "N/A", "ZOHO-SUBSCRIPTION", "Zoho Workplace Subscription - 20 Users", "rose", "ithyaz"],
        ["Apr 14, 2026", "12:00 AM", "DEBIT", "-₹4,067.46", "ithyaz", "N/A", "ACT-FIBERNET", "Office Wifif Bill", "rose", "ithyaz"],
        ["Dec 28, 2025", "12:00 AM", "DEBIT", "-₹642.00", "Admin User", "N/A", "OFFICE EXPENSE", "Godrej Aer Room Refiller - 3", "amber", "A"],
        ["Dec 02, 2025", "04:52 PM", "DEBIT", "-₹3,245.00", "Admin User", "N/A", "EXPENSE", "Assets & Parcel Charges for Priyadharshini", "rose", "A"],
        ["Dec 02, 2025", "04:33 PM", "DEBIT", "-₹3,653.00", "Admin User", "N/A", "OFFICE EXPENSE", "Zoho Workplace Subscription", "amber", "A"],
        ["Dec 01, 2025", "04:31 PM", "CREDIT", "+₹10,000.00", "Abiraham Immanvel", "N/A", "OFFICE EXPENSE", "Office Advance out of 90,000", "amber", "A"],
        ["Dec 01, 2025", "12:00 AM", "DEBIT", "-₹7,000.00", "Admin User", "N/A", "SALARY", "Salary for Priyadharshini", "emerald", "A"],
        ["Nov 25, 2025", "12:00 AM", "DEBIT", "-₹2,719.00", "Admin User", "N/A", "OFFICE EXPENSE", "Wall Sticker Sheet", "amber", "A"],
    ];
    const catTone = {
        amber: "bg-amber-500/15 text-amber-300 border-amber-400/30",
        rose: "bg-rose-500/15 text-rose-300 border-rose-400/30",
        emerald: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
        zinc: "bg-white/5 text-zinc-300 border-white/10",
    };
    const avatarTone = (a) =>
        a === "ithyaz"
            ? "bg-zukvo-500/30 text-zukvo-100 border-zukvo-500/40"
            : "bg-amber-500/30 text-amber-100 border-amber-400/40";
    return (
        <section
            id="ledger"
            data-testid="accounts-ledger"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Transactions Ledger
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Every entry. Every detail. Auditable.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Date, type, amount, member, category, description — and inline actions to
                        edit or delete. Filter by anything. Page through hundreds of entries
                        without ever leaving the table.
                    </p>
                </div>

                {/* Filter row */}
                <div className="zk-reveal mt-10 rounded-2xl border border-white/10 bg-[#0E0E10] p-3 flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2 flex-wrap text-[11.5px]">
                        <span className="inline-flex items-center gap-1.5 rounded-md bg-zukvo-500/15 border border-zukvo-500/30 text-zukvo-300 px-2.5 py-1.5 font-medium">
                            <Filter className="size-3" /> Filters
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-zinc-400">
                            <Search className="size-3" /> Search…
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-zinc-300">
                            <span className="inline-flex w-7 h-3.5 rounded-full bg-zukvo-500/40 justify-end pr-0.5 items-center">
                                <span className="size-3 rounded-full bg-white" />
                            </span>
                            This Month
                        </span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap text-[11.5px]">
                        {[
                            { i: Tag, l: "Type" },
                            { i: Layers, l: "Category" },
                            { i: Users, l: "Member" },
                            { i: Calendar, l: "Date range" },
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
                </div>

                {/* Table */}
                <div className="zk-reveal mt-5 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                    <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
                        <div className="inline-flex items-center gap-2 text-[12px] text-zinc-100">
                            <FileText className="size-3.5 text-zukvo-300" /> Transactions Ledger
                        </div>
                        <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-white/10 bg-white/5 text-zinc-400 px-2 py-0.5">
                            29 entries
                        </span>
                    </div>
                    <div className="grid grid-cols-12 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-zinc-500 border-b border-white/5">
                        <div className="col-span-2">Date</div>
                        <div className="col-span-1">Type</div>
                        <div className="col-span-2">Amount</div>
                        <div className="col-span-2">Member</div>
                        <div className="col-span-2">Category</div>
                        <div className="col-span-2">Description</div>
                        <div className="col-span-1 text-right">Actions</div>
                    </div>
                    {rows.map((r, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-12 items-center px-5 py-3.5 border-t border-white/5 hover:bg-white/[0.02] transition-colors"
                        >
                            <div className="col-span-2">
                                <div className="text-[12.5px] text-zinc-100">{r[0]}</div>
                                <div className="text-[10.5px] text-zinc-500">{r[1]}</div>
                            </div>
                            <div className="col-span-1">
                                <span
                                    className={`inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] rounded-md border px-2 py-0.5 ${
                                        r[2] === "DEBIT"
                                            ? "border-rose-400/30 bg-rose-500/10 text-rose-300"
                                            : "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                                    }`}
                                >
                                    {r[2] === "DEBIT" ? (
                                        <ArrowDown className="size-2.5" />
                                    ) : (
                                        <ArrowUp className="size-2.5" />
                                    )}
                                    {r[2]}
                                </span>
                            </div>
                            <div
                                className={`col-span-2 text-[13px] font-medium font-mono ${
                                    r[2] === "DEBIT" ? "text-rose-300" : "text-emerald-300"
                                }`}
                            >
                                {r[3]}
                            </div>
                            <div className="col-span-2 flex items-center gap-2 min-w-0">
                                <span
                                    className={`inline-flex size-7 items-center justify-center rounded-full border text-[10px] font-bold shrink-0 ${avatarTone(r[9])}`}
                                >
                                    {r[9] === "ithyaz" ? "i" : "A"}
                                </span>
                                <div className="min-w-0">
                                    <div className="text-[12.5px] text-zinc-100 truncate">
                                        {r[4]}
                                    </div>
                                    <div className="text-[10.5px] text-zinc-500">{r[5]}</div>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <span
                                    className={`inline-flex items-center text-[10px] uppercase tracking-[0.18em] rounded-md border px-2 py-0.5 ${catTone[r[8]]}`}
                                >
                                    {r[6]}
                                </span>
                            </div>
                            <div className="col-span-2 text-[12.5px] text-zinc-300 truncate">
                                {r[7]}
                            </div>
                            <div className="col-span-1 text-right">
                                <span className="inline-flex items-center gap-1.5 text-zinc-500">
                                    <Pencil className="size-3.5 hover:text-white cursor-pointer" />
                                    <Trash2 className="size-3.5 hover:text-rose-300 cursor-pointer" />
                                </span>
                            </div>
                        </div>
                    ))}
                    <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between text-[11.5px] text-zinc-500 flex-wrap gap-2">
                        <span>1–10 of 29 transactions</span>
                        <div className="inline-flex items-center gap-1.5">
                            <ChevronRight className="size-3.5 rotate-180" />
                            <span className="inline-flex size-6 items-center justify-center rounded border border-zukvo-500/30 text-zukvo-300 text-[11px]">
                                1
                            </span>
                            <span className="text-zinc-400">2</span>
                            <span className="text-zinc-400">3</span>
                            <ChevronRight className="size-3.5" />
                            <span className="inline-flex items-center gap-1 ml-2 rounded-md border border-white/10 bg-white/[0.02] px-2 py-0.5">
                                10 / page
                                <ChevronDown className="size-3" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- ADD TRANSACTION ---------------- */

function AddTransaction() {
    return (
        <section
            id="add"
            data-testid="accounts-add"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-zukvo-500/30 bg-zukvo-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                            <Plus className="size-3" /> Add Transaction
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            New entries — in three quick sections.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Basics, attribution, details. Pick credit or debit, the amount, the
                            member it's for, the category — then add a clear description. Saved
                            with timestamp and member context.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: TrendingUp, t: "Credit or debit — money movement direction" },
                                { i: DollarSign, t: "Amount in your default currency" },
                                { i: Users, t: "Attribute to a member" },
                                { i: Tag, t: "Category for downstream breakdown" },
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
                            <div className="px-5 py-4 flex items-center gap-3 border-b border-white/5">
                                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-zukvo-500/15 text-zukvo-200 border border-zukvo-500/30">
                                    <Plus className="size-5" />
                                </span>
                                <div>
                                    <div className="font-heading text-lg text-white tracking-tight">
                                        New Transaction
                                    </div>
                                    <div className="text-[11.5px] text-zinc-500">
                                        Record a new income or expense entry
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 space-y-5">
                                <DrawerStep
                                    n="01"
                                    title="Transaction Basics"
                                    sub="Specify the direction and value of money movement"
                                >
                                    <FormField
                                        label="Transaction Type"
                                        placeholder="Select type"
                                        required
                                    />
                                    <FormField label="Amount" placeholder="₹" required />
                                </DrawerStep>

                                <DrawerStep
                                    n="02"
                                    title="Attribution"
                                    sub="Who and what this transaction is for"
                                >
                                    <FormField
                                        label="Member"
                                        placeholder="Select member"
                                        required
                                    />
                                    <FormField
                                        label="Category"
                                        placeholder="Select category"
                                        required
                                    />
                                    <FormField
                                        label="Transaction Date"
                                        value="2026-05-24"
                                        required
                                    />
                                </DrawerStep>

                                <DrawerStep
                                    n="03"
                                    title="Details"
                                    sub="Add a clear description and any additional context"
                                >
                                    <FormField
                                        label="Description"
                                        placeholder="e.g. Server cost for May…"
                                        full
                                    />
                                </DrawerStep>
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
                                    <Plus className="size-3.5" /> Add Transaction
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function DrawerStep({ n, title, sub, children }) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <div className="flex items-start gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-md border border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300 font-bold text-[11px]">
                    {n}
                </span>
                <div>
                    <div className="font-heading text-base text-white tracking-tight">{title}</div>
                    <div className="text-[11.5px] text-zinc-500">{sub}</div>
                </div>
            </div>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2.5">{children}</div>
        </div>
    );
}

function FormField({ label, placeholder, value, full, required }) {
    return (
        <div className={full ? "col-span-full" : ""}>
            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1 inline-flex items-center gap-1">
                {required && <span className="text-rose-300">*</span>}
                {label}
            </div>
            <div className="rounded-md border border-white/10 bg-black/30 px-3 py-2 text-[12.5px] flex items-center justify-between">
                <span className={value ? "text-zinc-200" : "text-zinc-500"}>
                    {value || placeholder}
                </span>
                {!value && <ChevronDown className="size-3.5 text-zinc-500" />}
            </div>
        </div>
    );
}

/* ---------------- CATEGORY BREAKDOWN ---------------- */

function Breakdown() {
    const cats = [
        { id: "01", t: "Client Payment", v: "₹12,47,603.60", count: "5 transactions", pct: 82.3, color: "violet" },
        { id: "02", t: "Office Expense", v: "₹2,45,193.00", count: "22 transactions", pct: 16.2, color: "amber" },
        { id: "03", t: "Salary", v: "₹7,000.00", count: "1 transaction", pct: 0.5, color: "emerald" },
        { id: "04", t: "ACT-Fibernet", v: "₹4,067.46", count: "1 transaction", pct: 0.3, color: "zinc" },
        { id: "05", t: "Expense", v: "₹3,245.00", count: "1 transaction", pct: 0.2, color: "rose" },
        { id: "06", t: "Zoho-Subscription", v: "₹3,044.40", count: "1 transaction", pct: 0.3, color: "indigo" },
    ];
    const toneMap = {
        violet: { dot: "bg-violet-400", bar: "bg-violet-400", text: "text-violet-300" },
        amber: { dot: "bg-amber-400", bar: "bg-amber-400", text: "text-amber-300" },
        emerald: { dot: "bg-emerald-400", bar: "bg-emerald-400", text: "text-emerald-300" },
        zinc: { dot: "bg-zinc-400", bar: "bg-zinc-400", text: "text-zinc-300" },
        rose: { dot: "bg-rose-400", bar: "bg-rose-400", text: "text-rose-300" },
        indigo: { dot: "bg-zukvo-400", bar: "bg-zukvo-400", text: "text-zukvo-300" },
    };
    return (
        <section
            id="breakdown"
            data-testid="accounts-breakdown"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-violet-300">
                            <PieChart className="size-3" /> Category Breakdown
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Where the money goes — sorted by volume.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            See total volume across every category at a glance. A stacked bar shows
                            the top contributors. Each row shows transaction count and percentage
                            of total — sorted to surface what matters.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: BarChart3, t: "Total volume + transaction count" },
                                { i: PieChart, t: "Distribution across all categories" },
                                { i: Filter, t: "Click a category to filter the ledger" },
                                { i: Sparkles, t: "Auto-sorted by volume" },
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
                            <div className="px-5 py-4 flex items-center gap-3 border-b border-white/5">
                                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-200 border border-violet-400/30">
                                    <PieChart className="size-5" />
                                </span>
                                <div>
                                    <div className="font-heading text-lg text-white tracking-tight">
                                        Category Breakdown
                                    </div>
                                    <div className="text-[11.5px] text-zinc-500">
                                        Distribution of transactions by category
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 space-y-5">
                                {/* Total volume card */}
                                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                                            Total volume
                                        </div>
                                        <span className="text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 px-2 py-0.5">
                                            9 categories
                                        </span>
                                    </div>
                                    <div className="mt-2 flex items-baseline justify-between flex-wrap gap-2">
                                        <div className="font-heading text-3xl text-white tracking-tight">
                                            ₹15,15,353.46
                                        </div>
                                        <div className="text-[11.5px] text-zinc-500">
                                            34 transactions
                                        </div>
                                    </div>
                                    {/* Stacked bar */}
                                    <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden flex">
                                        <div className="h-full bg-violet-400" style={{ width: "82.3%" }} />
                                        <div className="h-full bg-amber-400" style={{ width: "16.2%" }} />
                                        <div className="h-full bg-emerald-400" style={{ width: "0.5%" }} />
                                        <div className="h-full bg-zinc-400" style={{ width: "0.3%" }} />
                                    </div>
                                    <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] text-zinc-400">
                                        <span className="inline-flex items-center gap-1.5">
                                            <span className="size-1.5 rounded-full bg-violet-400" />{" "}
                                            Client Payment
                                        </span>
                                        <span className="inline-flex items-center gap-1.5">
                                            <span className="size-1.5 rounded-full bg-amber-400" />{" "}
                                            Office Expense
                                        </span>
                                        <span className="inline-flex items-center gap-1.5">
                                            <span className="size-1.5 rounded-full bg-emerald-400" />{" "}
                                            Salary
                                        </span>
                                        <span className="inline-flex items-center gap-1.5">
                                            <span className="size-1.5 rounded-full bg-zinc-400" />{" "}
                                            ACT-Fibernet
                                        </span>
                                        <span className="text-zinc-500">+5 More</span>
                                    </div>
                                </div>

                                {/* By category */}
                                <div>
                                    <div className="flex items-center justify-between mb-3 text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                                        <span>By Category</span>
                                        <span>Sorted by volume</span>
                                    </div>
                                    <div className="space-y-2.5">
                                        {cats.map((c) => (
                                            <div
                                                key={c.id}
                                                className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 relative overflow-hidden"
                                            >
                                                <span
                                                    className={`absolute left-0 top-0 bottom-0 w-1 ${toneMap[c.color].bar}`}
                                                />
                                                <div className="flex items-center justify-between flex-wrap gap-1">
                                                    <div className="inline-flex items-center gap-2">
                                                        <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                                                            {c.id}
                                                        </span>
                                                        <span
                                                            className={`size-1.5 rounded-full ${toneMap[c.color].dot}`}
                                                        />
                                                        <span className="text-[12.5px] uppercase tracking-[0.18em] text-white font-medium">
                                                            {c.t}
                                                        </span>
                                                    </div>
                                                    <span className="font-mono text-[13px] text-white">
                                                        {c.v}
                                                    </span>
                                                </div>
                                                <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
                                                    <div
                                                        className={`h-full ${toneMap[c.color].bar}`}
                                                        style={{ width: `${c.pct}%` }}
                                                    />
                                                </div>
                                                <div className="mt-2 flex items-center justify-between text-[11px]">
                                                    <span className="text-zinc-500 inline-flex items-center gap-1">
                                                        <FileText className="size-3" /> {c.count}
                                                    </span>
                                                    <span className={`${toneMap[c.color].text}`}>
                                                        {c.pct}% of total
                                                    </span>
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

/* ---------------- RECENT ACTIVITY ---------------- */

function RecentActivity() {
    const events = [
        {
            t: "sharing",
            who: "Fathima Farkana",
            avatar: "F",
            color: "violet",
            d: "May 19, 2026",
            amt: "+₹100.00",
            tags: ["OFFICE-RENT SHARE"],
            sign: "credit",
        },
        {
            t: "Payment received for invoice INV-2026-002",
            who: "Divya D",
            avatar: "D",
            color: "indigo",
            d: "May 17, 2026",
            amt: "+₹0.60",
            tags: ["CLIENT PAYMENT", "Invoice"],
            sign: "credit",
        },
        {
            t: "Payment received for invoice INV-2026-001",
            who: "Divya D",
            avatar: "D",
            color: "indigo",
            d: "May 17, 2026",
            amt: "+₹6,47,716.00",
            tags: ["CLIENT PAYMENT", "Invoice"],
            sign: "credit",
        },
        {
            t: "Payment received for invoice INV-2025-098",
            who: "Divya D",
            avatar: "D",
            color: "indigo",
            d: "May 17, 2026",
            amt: "+₹98,098.00",
            tags: ["CLIENT PAYMENT", "Invoice"],
            sign: "credit",
        },
        {
            t: "Payment received for invoice INV-2025-097",
            who: "Divya D",
            avatar: "D",
            color: "indigo",
            d: "May 17, 2026",
            amt: "+₹4,56,789.00",
            tags: ["CLIENT PAYMENT", "Invoice"],
            sign: "credit",
        },
        {
            t: "Office Wifif Bill",
            who: "ithyaz",
            avatar: "i",
            color: "zukvo",
            d: "Apr 14, 2026",
            amt: "-₹4,067.46",
            tags: ["ACT-FIBERNET"],
            sign: "debit",
        },
        {
            t: "Hostinger Server cost for Zukvo",
            who: "ithyaz",
            avatar: "i",
            color: "zukvo",
            d: "May 02, 2026",
            amt: "-₹2,100.00",
            tags: ["HOSTINGER-SERVER"],
            sign: "debit",
        },
    ];
    const avatarTone = {
        violet: "bg-violet-500/30 text-violet-100 border-violet-400/40",
        indigo: "bg-zukvo-500/30 text-zukvo-100 border-zukvo-500/40",
        zukvo: "bg-cyan-500/30 text-cyan-100 border-cyan-400/40",
    };
    return (
        <section
            id="activity"
            data-testid="accounts-activity"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                            <Activity className="size-3" /> Recent Activity
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Latest transaction events — across the team.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            See who logged what and when, with category tags and amount sign at a
                            glance. Tied back to invoices, shares, subscriptions — every entry
                            traceable to its source.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: BadgeCheck, t: "Inflows on the left, debits on the right" },
                                { i: Receipt, t: "Linked invoices with one click" },
                                { i: Tag, t: "Category tags inline for every entry" },
                                { i: Eye, t: "Read-only audit-friendly view" },
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
                            <div className="px-5 py-4 flex items-center gap-3 border-b border-white/5">
                                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-200 border border-emerald-400/30">
                                    <FileText className="size-5" />
                                </span>
                                <div>
                                    <div className="font-heading text-lg text-white tracking-tight">
                                        Recent Activity
                                    </div>
                                    <div className="text-[11.5px] text-zinc-500">
                                        Latest transaction events across the team
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 space-y-4">
                                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                                    <span>Latest transactions</span>
                                    <span>10 entries</span>
                                </div>

                                <div className="space-y-2.5">
                                    {events.map((e, i) => (
                                        <div
                                            key={i}
                                            className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 relative overflow-hidden"
                                        >
                                            <span
                                                className={`absolute left-0 top-0 bottom-0 w-1 ${
                                                    e.sign === "credit"
                                                        ? "bg-emerald-400"
                                                        : "bg-rose-400"
                                                }`}
                                            />
                                            <div className="flex items-start gap-3">
                                                <span
                                                    className={`inline-flex size-8 items-center justify-center rounded-md border shrink-0 ${
                                                        e.sign === "credit"
                                                            ? "bg-emerald-500/15 border-emerald-400/30 text-emerald-300"
                                                            : "bg-rose-500/15 border-rose-400/30 text-rose-300"
                                                    }`}
                                                >
                                                    {e.sign === "credit" ? (
                                                        <ArrowUp className="size-3.5" />
                                                    ) : (
                                                        <ArrowDown className="size-3.5" />
                                                    )}
                                                </span>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                                        <div className="text-[13px] text-white truncate">
                                                            {e.t}
                                                        </div>
                                                        <span
                                                            className={`font-mono text-[13px] font-medium ${
                                                                e.sign === "credit"
                                                                    ? "text-emerald-300"
                                                                    : "text-rose-300"
                                                            }`}
                                                        >
                                                            {e.amt}
                                                        </span>
                                                    </div>
                                                    <div className="mt-1 flex items-center gap-2 flex-wrap text-[11px] text-zinc-500">
                                                        <span className="inline-flex items-center gap-1.5">
                                                            <span
                                                                className={`inline-flex size-5 items-center justify-center rounded-full border text-[9px] font-bold ${avatarTone[e.color]}`}
                                                            >
                                                                {e.avatar}
                                                            </span>
                                                            {e.who}
                                                        </span>
                                                        <span>·</span>
                                                        <span>{e.d}</span>
                                                        {e.tags.map((tg, k) => (
                                                            <span
                                                                key={k}
                                                                className={`inline-flex items-center text-[9.5px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 ${
                                                                    tg === "Invoice"
                                                                        ? "border-violet-400/30 bg-violet-500/10 text-violet-300"
                                                                        : tg.includes("CLIENT")
                                                                          ? "border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300"
                                                                          : "border-white/10 bg-white/[0.04] text-zinc-300"
                                                                }`}
                                                            >
                                                                {tg}
                                                            </span>
                                                        ))}
                                                    </div>
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
        </section>
    );
}

/* ---------------- REPORTS ---------------- */

function Reports() {
    return (
        <section
            id="reports"
            data-testid="accounts-reports"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Reports & Export
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Every format your accountant asks for.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Pick a period, pick categories, pick members — and export in CSV, PDF or a
                        ready-to-import Tally / Zoho Books format. Reconciliation snapshots saved
                        per quarter.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <ReportCard
                        icon={Download}
                        t="CSV export"
                        d="All transactions in a flat CSV — open in Excel, Sheets, or import into your accounting tool."
                        tone="emerald"
                    />
                    <ReportCard
                        icon={FileText}
                        t="PDF statement"
                        d="Polished, branded PDF with totals, breakdown and the full ledger — sharable with your CA."
                        tone="indigo"
                    />
                    <ReportCard
                        icon={Calculator}
                        t="Tally / Zoho Books"
                        d="Ready-to-import format with mapped categories, member attribution and dates intact."
                        tone="violet"
                    />
                    <ReportCard
                        icon={BarChart3}
                        t="Monthly P&L"
                        d="Auto-generated profit-and-loss with category roll-ups and month-over-month deltas."
                        tone="amber"
                    />
                    <ReportCard
                        icon={CheckCircle2}
                        t="Reconciliation snapshot"
                        d="Lock a quarter's ledger as an immutable snapshot — never accidentally edited again."
                        tone="rose"
                    />
                    <ReportCard
                        icon={Briefcase}
                        t="Per-member statement"
                        d="Break down every credit and debit by member — useful for reimbursements and audits."
                        tone="zukvo"
                    />
                </div>

                <div className="zk-reveal mt-10 rounded-2xl border border-white/10 bg-[#0E0E10] p-5 md:p-7 flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
                            <Download className="size-5" />
                        </span>
                        <div>
                            <div className="font-heading text-lg text-white tracking-tight">
                                Export the May 2026 ledger
                            </div>
                            <div className="text-[12px] text-zinc-500">
                                34 transactions · 9 categories · ₹15,15,353.46 total volume
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 text-white px-3 py-1.5 text-[12px]">
                            <Hash className="size-3.5" /> CSV
                        </button>
                        <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 text-white px-3 py-1.5 text-[12px]">
                            <FileText className="size-3.5" /> PDF
                        </button>
                        <button
                            className="inline-flex items-center gap-1.5 rounded-full text-white text-[12px] font-medium px-4 py-1.5"
                            style={{
                                backgroundImage: "linear-gradient(135deg, #6366F1, #3B82F6)",
                            }}
                        >
                            <Download className="size-3.5" /> Export ledger
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ReportCard({ icon: Icon, t, d, tone }) {
    const toneMap = {
        emerald: "text-emerald-300 bg-emerald-500/10 border-emerald-400/30",
        indigo: "text-zukvo-300 bg-zukvo-500/10 border-zukvo-500/30",
        violet: "text-violet-300 bg-violet-500/10 border-violet-400/30",
        amber: "text-amber-300 bg-amber-500/10 border-amber-400/30",
        rose: "text-rose-300 bg-rose-500/10 border-rose-400/30",
        zukvo: "text-cyan-300 bg-cyan-500/10 border-cyan-400/30",
    };
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5 hover:border-white/20 transition-colors">
            <span
                className={`inline-flex size-10 items-center justify-center rounded-lg border ${toneMap[tone]}`}
            >
                <Icon className="size-5" />
            </span>
            <div className="mt-3 font-heading text-lg text-white tracking-tight">{t}</div>
            <p className="mt-1.5 text-[13px] text-zinc-400 leading-relaxed">{d}</p>
        </div>
    );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
    return (
        <section data-testid="accounts-final-cta" className="relative bg-[#0A0A0A] text-white">
            <div className="mx-auto max-w-7xl px-6 md:px-10 pb-20">
                <div
                    className="zk-reveal relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0E0E10] p-10 md:p-16 text-center"
                    style={{
                        backgroundImage:
                            "radial-gradient(60% 80% at 50% 0%, rgba(16,185,129,0.18), transparent 60%)",
                    }}
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                        <Sparkles className="size-3" /> Get started
                    </span>
                    <h2 className="mt-6 font-heading font-medium text-3xl md:text-5xl tracking-[-0.03em]">
                        Make your books the source of truth.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/signup"
                            data-testid="accounts-final-cta-primary"
                            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3.5 text-sm font-medium"
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
const _unused = [TrendingDown];

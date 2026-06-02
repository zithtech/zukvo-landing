import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    LayoutDashboard,
    Receipt,
    FilePlus2,
    LayoutTemplate,
    Users,
    Settings2,
    Trash2,
    UndoDot,
    TrendingUp,
    AlertCircle,
    Clock3,
    CheckCircle2,
    Plus,
    Download,
    Upload,
    Mail,
    Eye,
    Send,
    DollarSign,
    Building2,
    Globe2,
    Hash,
    Type,
    ToggleRight,
    GripVertical,
    Sparkles,
    Calendar,
    Pencil,
    ChevronRight,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import ImageSlot from "@/components/ImageSlot";

import invoiceDashboardImg from "@/assets/invoice-dashboard.png";
import invoiceCreateImg from "@/assets/invoice-create.png";
import invoiceTemplateImg from "@/assets/invoice-template.png";
import invoiceCustomerImg from "@/assets/invoice-customer.png";
import invoicesListImg from "@/assets/invoices.png";
import invoiceTrashImg from "@/assets/invoice-trash.png";

const INV_DASH_IMG = invoiceDashboardImg;
const INV_CREATE_IMG = invoiceCreateImg;
const INV_TEMPLATE_IMG = invoiceTemplateImg;
const INV_CUSTOMERS_IMG = invoiceCustomerImg;
const INV_LIST_IMG = invoicesListImg;
const INV_TRASH_IMG = invoiceTrashImg;

const SUBMODULES = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "invoices", label: "Invoices", icon: Receipt },
    { id: "create", label: "Create", icon: FilePlus2 },
    { id: "templates", label: "Templates", icon: LayoutTemplate },
    { id: "customers", label: "Customers", icon: Users },
    { id: "settings", label: "Settings", icon: Settings2 },
    { id: "trash", label: "Trash", icon: Trash2 },
];

export default function Invoice() {
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
            data-testid="invoice-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink"
        >
            <SEO />
            <Nav />
            <Hero />
            <SubmoduleNav />
            <Dashboard />
            <InvoicesList />
            <CreateInvoice />
            <Templates />
            <Customers />
            <SettingsSection />
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
            data-testid="inv-hero"
            className="relative pt-32 md:pt-40 pb-16 md:pb-24 zk-mesh"
        >
            <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_75%)] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                <div className="zk-reveal">
                    <Link
                        to="/products"
                        data-testid="inv-breadcrumb"
                        className="inline-flex items-center gap-1.5 text-[12px] text-zinc-500 hover:text-zukvo-600"
                    >
                        <ArrowLeft className="size-3.5" />
                        All products
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-600">
                            <Receipt className="size-3.5" />
                            Invoice
                        </div>
                        <h1
                            data-testid="inv-headline"
                            className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink"
                        >
                            Polished invoices, <br />
                            <span className="text-zinc-500">sent in seconds.</span>
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            Build invoices from custom templates, import existing clients as
                            customers, send branded PDFs, and track every payment — all from a
                            single dashboard.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/signup"
                                data-testid="inv-cta-primary"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Invoice
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
                                { k: "Custom", v: "Field-based templates" },
                                { k: "Import", v: "Active clients → customers" },
                                { k: "Dashboard", v: "Revenue, calendar, status" },
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
            data-testid="inv-submodule-nav"
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
                            data-testid={`inv-pill-${s.id}`}
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
    return (
        <section
            id="dashboard"
            data-testid="inv-dashboard"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                            Dashboard
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Money in, at a glance.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Revenue trend, pending balance, overdue alerts, and an activity calendar
                            — every signal you need to keep cashflow on track.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Receipt, t: "Total · Revenue · Pending · Overdue KPIs" },
                                { i: TrendingUp, t: "Monthly revenue line chart" },
                                { i: Calendar, t: "Invoice calendar — created vs received" },
                                { i: Mail, t: "Email history at one click" },
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
                            testid="inv-image-dashboard"
                            src={INV_DASH_IMG}
                            alt="Invoice Dashboard"
                            label="Invoice — Dashboard"
                            chromeUrl="zukvo.app/finance/invoice"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — Invoice dashboard with KPIs, revenue & calendar."
                        />
                    </div>
                </div>

                {/* KPI restate */}
                <div className="zk-reveal mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Kpi icon={Receipt} kicker="Total invoices" value="142" sub="all time" tone="indigo" />
                    <Kpi icon={DollarSign} kicker="Total revenue" value="$48.2k" sub="paid balance" tone="emerald" />
                    <Kpi icon={Clock3} kicker="Pending" value="$12.4k" sub="awaiting payment" tone="amber" />
                    <Kpi icon={AlertCircle} kicker="Overdue" value="$5.4k" sub="past due date" tone="rose" />
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
        rose: "before:bg-rose-400",
    }[tone];
    const text = {
        indigo: "text-zukvo-300",
        emerald: "text-emerald-300",
        amber: "text-amber-300",
        rose: "text-rose-300",
    }[tone];
    return (
        <div
            className={`relative rounded-2xl border border-white/10 bg-[#0E0E10] p-5 overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 ${bar}`}
        >
            <div className="flex items-start justify-between">
                <span
                    className={`inline-flex size-9 items-center justify-center rounded-lg bg-white/5 ${text} border border-white/10`}
                >
                    <Icon className="size-4" />
                </span>
            </div>
            <div className={`mt-4 text-[10.5px] uppercase tracking-[0.22em] ${text}`}>
                {kicker}
            </div>
            <div className="mt-1 font-heading text-3xl text-white tracking-tight">{value}</div>
            <div className="text-[11.5px] text-zinc-500">{sub}</div>
        </div>
    );
}

/* ---------------- INVOICES LIST ---------------- */

function InvoicesList() {
    const rows = [
        ["INV-2026-005", "Northwind Studios", "May 7, 2026", "May 31", "$4,200.00", "Paid", "emerald"],
        ["INV-2026-004", "Pixelhaus", "May 3, 2026", "May 27", "$2,800.00", "Pending", "amber"],
        ["INV-2026-003", "Helix Labs", "Apr 30, 2026", "May 14", "$5,480.00", "Overdue", "rose"],
        ["INV-2026-002", "Loop & Co", "Apr 28, 2026", "May 12", "$1,950.00", "Sent", "indigo"],
        ["INV-2026-001", "J2B Global LLC USA", "May 7, 2026", "May 31", "$5.00", "Pending", "amber"],
    ];
    const tone = {
        emerald: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
        amber: "border-amber-400/30 bg-amber-500/10 text-amber-300",
        rose: "border-rose-400/30 bg-rose-500/10 text-rose-300",
        indigo: "border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300",
    };
    return (
        <section
            id="invoices"
            data-testid="inv-list"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Invoices
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Every invoice, every status.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Filter by status, customer, or date range. Send, duplicate, void, or download
                        a PDF in one click.
                    </p>
                </div>

                <div className="zk-reveal mt-12 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                    <div className="overflow-x-auto w-full">
                        <div style={{ minWidth: "1000px" }}>
                            <div className="grid grid-cols-12 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-zinc-500 border-b border-white/5">
                                <div className="col-span-2">Invoice</div>
                                <div className="col-span-3">Customer</div>
                                <div className="col-span-2">Date</div>
                                <div className="col-span-2">Due</div>
                                <div className="col-span-1 text-right">Amount</div>
                                <div className="col-span-2 text-right">Status</div>
                            </div>
                            {rows.map((r, i) => (
                                <div
                                    key={i}
                                    className="grid grid-cols-12 items-center px-5 py-3.5 border-t border-white/5 hover:bg-white/[0.02] transition-colors"
                                >
                                    <div className="col-span-2 font-mono text-[12.5px] text-zukvo-300">
                                        {r[0]}
                                    </div>
                                    <div className="col-span-3 text-[13px] text-zinc-200 truncate">
                                        {r[1]}
                                    </div>
                                    <div className="col-span-2 text-[12.5px] text-zinc-400">{r[2]}</div>
                                    <div className="col-span-2 text-[12.5px] text-zinc-400">{r[3]}</div>
                                    <div className="col-span-1 text-right text-[13px] text-white font-medium">
                                        {r[4]}
                                    </div>
                                    <div className="col-span-2 text-right">
                                        <span
                                            className={`inline-flex items-center text-[10px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 ${tone[r[6]]}`}
                                        >
                                            {r[5]}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="zk-reveal mt-5">
                    <ImageSlot
                        testid="inv-image-list"
                        src={INV_LIST_IMG}
                        alt="Invoices list view"
                        label="Invoices — list view"
                        chromeUrl="zukvo.app/finance/invoice/all"
                        aspect="auto"
                        objectFit="contain"
                        className="max-w-[800px] mx-auto"
                        caption="Live screenshot — list of all invoices and their status."
                    />
                </div>
            </div>
        </section>
    );
}

/* ---------------- CREATE INVOICE ---------------- */

function CreateInvoice() {
    return (
        <section
            id="create"
            data-testid="inv-create"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Create
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        From blank to billed in 60 seconds.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Pick the issuer, the customer, a template, then add line items. Tax-inclusive
                        toggles, multi-currency, customer notes and terms — all built in.
                    </p>
                </div>

                <div className="zk-reveal mt-12">
                    <ImageSlot
                        testid="inv-image-create"
                        src={INV_CREATE_IMG}
                        alt="Create invoice page"
                        label="Create new invoice"
                        chromeUrl="zukvo.app/finance/invoice/new"
                        aspect="auto"
                        objectFit="contain"
                        className="max-w-[800px] mx-auto"
                        caption="Live screenshot — full invoice creation experience."
                    />
                </div>

                {/* 3 steps */}
                <div className="zk-reveal mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Step
                        n="01"
                        icon={Building2}
                        title="From + Bill to"
                        body="Choose your business as the issuer and the customer being billed. Addresses + Tax IDs auto-populate."
                    />
                    <Step
                        n="02"
                        icon={LayoutTemplate}
                        title="Template & details"
                        body="Pick a template, set invoice number, type, issue & due date, currency. Multi-currency supported."
                    />
                    <Step
                        n="03"
                        icon={Send}
                        title="Line items & summary"
                        body="Add rows, set tax-inclusive, attach notes & terms. Submit for approval, save draft, or send."
                    />
                </div>

                {/* Action bar mock */}
                <div className="zk-reveal mt-8 rounded-2xl border border-white/10 bg-[#0E0E10] p-4 flex flex-wrap items-center gap-3 justify-between">
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-[12px] text-zukvo-300">INV-2026-002</span>
                        <span className="inline-flex items-center text-[10px] uppercase tracking-[0.18em] rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 px-2 py-0.5">
                            Draft
                        </span>
                        <span className="text-[12px] text-zinc-500">Template · Standard</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                        {[
                            { i: Eye, t: "Preview" },
                            { i: Pencil, t: "Save draft" },
                            { i: Send, t: "Submit for approval", primary: true },
                        ].map((b, i) => (
                            <button
                                key={i}
                                className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-medium whitespace-nowrap transition-colors ${
                                    b.primary
                                        ? "bg-zukvo-500 hover:bg-zukvo-600 text-white"
                                        : "border border-white/15 bg-white/5 hover:bg-white/10 text-white"
                                }`}
                            >
                                <b.i className="size-3.5" />
                                {b.t}
                            </button>
                        ))}
                    </div>
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

/* ---------------- TEMPLATES ---------------- */

function Templates() {
    return (
        <section
            id="templates"
            data-testid="inv-templates"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                            Templates
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Custom fields. Your billing, your way.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Build invoice templates from scratch — name them, define billing type,
                            and design the line-item table column by column with custom labels,
                            keys, types and required flags.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Hash, t: "Custom keys per column" },
                                { i: Type, t: "Field types — Text · Number · Currency · Date" },
                                { i: ToggleRight, t: "Required toggles & visibility rules" },
                                { i: GripVertical, t: "Drag to reorder, set as default" },
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
                        <ImageSlot
                            testid="inv-image-templates"
                            src={INV_TEMPLATE_IMG}
                            alt="Invoice templates"
                            label="Templates · Create new template"
                            chromeUrl="zukvo.app/finance/invoice/templates"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — template builder with custom fields."
                        />
                    </div>
                </div>

                {/* Template field builder mock */}
                <div className="zk-reveal mt-12 rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                        <div className="text-[11px] uppercase tracking-[0.2em] text-violet-300 font-bold">
                            Invoice structure · columns of the line items table
                        </div>
                        <button className="inline-flex items-center gap-1.5 rounded-full bg-zukvo-500 hover:bg-zukvo-600 transition-colors text-white px-3 py-1.5 text-[12px] font-medium w-fit">
                            <Plus className="size-3.5" /> Add field
                        </button>
                    </div>

                    <div className="overflow-x-auto w-full rounded-xl border border-white/10">
                        <div style={{ minWidth: "800px" }} className="overflow-hidden">
                            <div className="grid grid-cols-12 px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] text-zinc-500 bg-white/[0.02] border-b border-white/5">
                                <div className="col-span-1"></div>
                                <div className="col-span-3">Label</div>
                                <div className="col-span-3">Key</div>
                                <div className="col-span-3">Type</div>
                                <div className="col-span-2 text-right">Required</div>
                            </div>
                            {[
                                ["Item Name", "item_name", "Text", true, "sys"],
                                ["Description", "description", "Text", false, ""],
                                ["Quantity", "quantity", "Number", true, "sys"],
                                ["Price", "price", "Currency", true, "sys"],
                                ["Amount", "amount", "Computed", false, "sys"],
                                ["Hours (custom)", "hours", "Number", false, ""],
                            ].map((r, i) => (
                                <div
                                    key={i}
                                    className="grid grid-cols-12 items-center px-4 py-2.5 border-t border-white/5"
                                >
                                    <div className="col-span-1">
                                        <GripVertical className="size-4 text-zinc-600" />
                                    </div>
                                    <div className="col-span-3">
                                        <div className="text-[12.5px] text-zinc-100">{r[0]}</div>
                                    </div>
                                    <div className="col-span-3">
                                        <div className="text-[12px] font-mono text-zinc-400">{r[1]}</div>
                                    </div>
                                    <div className="col-span-3">
                                        <span className="text-[10.5px] uppercase tracking-[0.2em] rounded-full border border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300 px-2 py-0.5">
                                            {r[2]}
                                        </span>
                                    </div>
                                    <div className="col-span-2 text-right">
                                        <div className="inline-flex items-center gap-2">
                                            <span
                                                className={`inline-flex items-center w-9 h-5 rounded-full border ${
                                                    r[3]
                                                        ? "bg-zukvo-500/30 border-zukvo-500/50 justify-end pr-0.5"
                                                        : "bg-white/5 border-white/10 justify-start pl-0.5"
                                                }`}
                                            >
                                                <span className="size-3.5 rounded-full bg-white" />
                                            </span>
                                            {r[4] && (
                                                <span className="text-[9.5px] uppercase tracking-[0.2em] rounded-md border border-white/10 bg-white/5 text-zinc-400 px-1.5 py-0.5">
                                                    {r[4]}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3 text-[12px] text-zinc-500">
                            <span className="inline-flex items-center gap-1.5">
                                <span className="size-1.5 rounded-full bg-emerald-400" /> Active
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <Sparkles className="size-3 text-violet-300" /> Set as default
                            </span>
                        </div>
                        <button className="inline-flex items-center gap-1.5 rounded-full bg-violet-500 hover:bg-violet-600 transition-colors text-white px-4 py-1.5 text-[12.5px] font-medium w-fit">
                            Save template
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- CUSTOMERS ---------------- */

function Customers() {
    const [tab, setTab] = useState("import");
    return (
        <section
            id="customers"
            data-testid="inv-customers"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Customers
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Add new — or import who you already know.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Create a new customer from scratch, or import active clients straight from
                        the Admin client list — taxes, contacts, and codes carry over.
                    </p>
                </div>

                <div className="zk-reveal mt-10 w-full overflow-x-auto no-scrollbar">
                    <div className="inline-flex rounded-full border border-white/10 bg-[#101014] p-1 text-[11.5px]">
                        <button
                            data-testid="inv-customers-tab-import"
                            onClick={() => setTab("import")}
                            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                                tab === "import"
                                    ? "bg-zukvo-500 text-white"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            <Download className="size-3.5" /> Import from clients
                        </button>
                        <button
                            data-testid="inv-customers-tab-new"
                            onClick={() => setTab("new")}
                            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                                tab === "new"
                                    ? "bg-emerald-500 text-white"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            <Plus className="size-3.5" /> Add new customer
                        </button>
                    </div>
                </div>

                <div className="zk-reveal mt-6 grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5">
                        {tab === "import" ? <ImportPanel /> : <NewCustomerPanel />}
                    </div>
                    <div className="lg:col-span-7">
                        <ImageSlot
                            testid="inv-image-customers"
                            src={INV_CUSTOMERS_IMG}
                            alt="Import clients as customers"
                            label="Customers · Import from active clients"
                            chromeUrl="zukvo.app/finance/invoice/customers"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[480px] mx-auto"
                            caption="Live screenshot — Import clients as customers modal."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ImportPanel() {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-zukvo-300 font-bold">
                <Upload className="size-3.5" /> Import clients as customers
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-[12px]">
                {[
                    ["Total clients", "2", "indigo"],
                    ["Available", "1", "emerald"],
                    ["Already added", "1", "rose"],
                ].map((s, i) => (
                    <div
                        key={i}
                        className="rounded-md border border-white/10 bg-white/[0.02] py-3"
                    >
                        <div
                            className={`font-heading text-2xl ${
                                s[2] === "emerald"
                                    ? "text-emerald-300"
                                    : s[2] === "rose"
                                      ? "text-rose-300"
                                      : "text-zukvo-300"
                            }`}
                        >
                            {s[1]}
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-0.5">
                            {s[0]}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 flex items-center gap-2 text-[12px] text-zinc-400">
                <span className="text-zinc-500">Search</span>
                <span className="font-mono text-zinc-500 truncate">company, code, email, tax ID…</span>
            </div>

            <div className="mt-3 rounded-xl border border-zukvo-500/30 bg-zukvo-500/5 px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span className="size-9 rounded-lg bg-blue-500/15 text-blue-300 inline-flex items-center justify-center font-heading shrink-0">
                        K
                    </span>
                    <div className="min-w-0">
                        <div className="text-[13px] text-zinc-100 truncate">
                            Kaynes Technology India Limited
                        </div>
                        <div className="text-[11.5px] text-zinc-500 truncate">
                            dhamodharandivya528@gmail.com
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 sm:ml-auto shrink-0 pl-12 sm:pl-0">
                    <span className="font-mono text-[11px] text-zinc-400">CL-000002</span>
                    <span className="text-[10px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                        Active
                    </span>
                </div>
            </div>

            <button className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-zukvo-500 hover:bg-zukvo-600 transition-colors text-white px-4 py-1.5 text-[12.5px] font-medium">
                <Download className="size-3.5" /> Import clients
            </button>
        </div>
    );
}

function NewCustomerPanel() {
    return (
        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/5 p-5 shadow-[inset_0_0_60px_-20px_rgba(16,185,129,0.25)]">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-emerald-300 font-bold">
                <Plus className="size-3.5" /> Add new customer
            </div>
            <div className="mt-4 space-y-2.5 text-[12.5px]">
                {[
                    ["Company", "J2B Global LLC USA"],
                    ["Code", "CL-000003"],
                    ["Tax ID", "1213232323232323"],
                    ["Email", "billing@j2b.global"],
                    ["Address", "Ram Nagar south 8th street, Madippakkam, Chennai"],
                    ["Currency", "USD · US Dollar"],
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
            <button className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors text-white px-4 py-1.5 text-[12.5px] font-medium">
                <CheckCircle2 className="size-3.5" /> Save customer
            </button>
        </div>
    );
}

/* ---------------- SETTINGS ---------------- */

function SettingsSection() {
    const [tab, setTab] = useState("general");
    return (
        <section
            id="settings"
            data-testid="inv-settings"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Settings
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Make Invoice yours.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Three groups: General config, Invoice format (numbering, tax, currency), and
                        Payment info — banks, gateways, and payout rules.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-4">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-2">
                            {[
                                { id: "general", label: "General config", icon: Settings2 },
                                { id: "format", label: "Invoice format", icon: Hash },
                                { id: "payment", label: "Payment info", icon: DollarSign },
                            ].map((t) => (
                                <button
                                    key={t.id}
                                    data-testid={`inv-settings-tab-${t.id}`}
                                    onClick={() => setTab(t.id)}
                                    className={`w-full text-left flex items-center gap-3 rounded-xl px-4 py-3 transition-colors ${
                                        tab === t.id
                                            ? "bg-zukvo-500/15 border border-zukvo-500/30"
                                            : "border border-transparent hover:bg-white/[0.02]"
                                    }`}
                                >
                                    <span
                                        className={`inline-flex size-9 items-center justify-center rounded-lg border ${
                                            tab === t.id
                                                ? "bg-zukvo-500/15 text-zukvo-300 border-zukvo-500/30"
                                                : "bg-white/5 text-zinc-300 border-white/10"
                                        }`}
                                    >
                                        <t.icon className="size-4" />
                                    </span>
                                    <div>
                                        <div className="text-[13px] text-white font-medium">
                                            {t.label}
                                        </div>
                                        <div className="text-[11px] text-zinc-500">
                                            {t.id === "general"
                                                ? "Brand, contact, defaults"
                                                : t.id === "format"
                                                  ? "Numbering, tax, currency"
                                                  : "Banks, gateways, terms"}
                                        </div>
                                    </div>
                                    <ChevronRight className="ml-auto size-4 text-zinc-500" />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-8">
                        {tab === "general" && <GeneralSettings />}
                        {tab === "format" && <FormatSettings />}
                        {tab === "payment" && <PaymentSettings />}
                    </div>
                </div>
            </div>
        </section>
    );
}

function SettingsCard({ children, title }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-zukvo-300 font-bold">
                {title}
            </div>
            <div className="mt-4 space-y-2.5 text-[12.5px]">{children}</div>
        </div>
    );
}

function SettingsRow({ k, v, badge }) {
    return (
        <div className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.02] px-3 py-2.5">
            <span className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-500">{k}</span>
            <div className="flex items-center gap-2">
                <span className="text-zinc-200 text-right max-w-[260px] truncate">{v}</span>
                {badge && (
                    <span className="text-[10px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                        {badge}
                    </span>
                )}
            </div>
        </div>
    );
}

function GeneralSettings() {
    return (
        <SettingsCard title="General · brand & defaults">
            <SettingsRow k="Business name" v="Zithtech" />
            <SettingsRow k="Logo" v="zithtech-logo.svg" badge="Uploaded" />
            <SettingsRow k="Email from" v="billing@zithtech.com" />
            <SettingsRow k="Default template" v="Standard" />
            <SettingsRow k="Default currency" v="USD · US Dollar" />
            <SettingsRow k="Approval workflow" v="Owner → Lead" badge="On" />
        </SettingsCard>
    );
}
function FormatSettings() {
    return (
        <SettingsCard title="Invoice format · numbering, tax, currency">
            <SettingsRow k="Number format" v="INV-{YYYY}-{####}" />
            <SettingsRow k="Next number" v="002" />
            <SettingsRow k="Tax mode" v="Tax-inclusive" badge="On" />
            <SettingsRow k="Default tax %" v="18%" />
            <SettingsRow k="Date format" v="MMM D, YYYY" />
            <SettingsRow k="Multi-currency" v="USD · INR · EUR" badge="3" />
        </SettingsCard>
    );
}
function PaymentSettings() {
    return (
        <SettingsCard title="Payment info · banks, gateways, terms">
            <SettingsRow k="Bank account" v="Chase · ****4231" />
            <SettingsRow k="UPI" v="zithtech@okhdfc" />
            <SettingsRow k="Stripe" v="acct_1Pq…42b" badge="Live" />
            <SettingsRow k="Razorpay" v="rzp_live_…" badge="Live" />
            <SettingsRow k="Default terms" v="Net 14 · 1.5% late / mo" />
            <SettingsRow k="Reminders" v="-3d, +1d, +7d, +14d" badge="Auto" />
        </SettingsCard>
    );
}

/* ---------------- TRASH ---------------- */

function TrashSection() {
    const items = [
        ["INV-2025-118", "Loop & Co", "Voided", "5d ago", "$1,250"],
        ["INV-2025-099", "Helix Labs", "Deleted draft", "12d ago", "$3,800"],
        ["INV-2025-072", "Pixelhaus", "Deleted draft", "21d ago", "$2,100"],
    ];
    return (
        <section
            id="trash"
            data-testid="inv-trash"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-rose-300">
                            Trash · Restore
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Voided or deleted — recoverable.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Voided invoices and deleted drafts move to Trash with their full
                            history. Restore in one click — line items, customer, dates and template
                            preserved.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                "30-day recovery window",
                                "Audit trail on every restore",
                                "Permanent purge requires admin",
                                "Voided invoices keep number history",
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
                                    <Trash2 className="size-3.5" /> Trash · 3 items
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
                                            <Receipt className="size-4" />
                                        </span>
                                        <div className="min-w-0">
                                            <div className="font-mono text-[12.5px] text-zinc-100">
                                                {it[0]}
                                            </div>
                                            <div className="text-[11px] text-zinc-500">
                                                {it[1]} · {it[2]} · {it[3]}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[12.5px] text-zinc-300 font-medium">
                                            {it[4]}
                                        </span>
                                        <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors text-white px-3 py-1.5 text-[11.5px]">
                                            <UndoDot className="size-3.5" /> Restore
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-5">
                            <ImageSlot
                                testid="inv-image-trash"
                                src={INV_TRASH_IMG}
                                alt="Invoice Trash list"
                                label="Invoice Trash"
                                chromeUrl="zukvo.app/finance/invoice/trash"
                                aspect="auto"
                                objectFit="contain"
                                className="max-w-[800px] mx-auto"
                                caption="Live screenshot — deleted invoices list with restore option."
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
        <section data-testid="inv-final-cta" className="relative bg-[#0A0A0A] text-white">
            <div className="mx-auto max-w-7xl px-6 md:px-10 pb-20">
                <div
                    className="zk-reveal relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0E0E10] p-10 md:p-16 text-center"
                    style={{
                        backgroundImage:
                            "radial-gradient(60% 80% at 50% 0%, rgba(16,185,129,0.18), transparent 60%)",
                    }}
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                        <Plus className="size-3" /> Get started
                    </span>
                    <h2 className="mt-6 font-heading font-medium text-3xl md:text-5xl tracking-[-0.03em]">
                        Send your next invoice from Zukvo.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/signup"
                            data-testid="inv-final-cta-primary"
                            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors text-white px-6 py-3.5 text-sm font-medium"
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
const _icons = [Globe2];

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    Wallet,
    LayoutDashboard,
    FileText,
    Banknote,
    CheckCircle2,
    Settings,
    ShieldCheck,
    Target,
    Receipt,
    Tags,
    DollarSign,
    BarChart3
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import ImageSlot from "@/components/ImageSlot";

import dashboardDark from "@/assets/reimbursement-dashboard-dark.png";
import dashboardLight from "@/assets/reimbursement-dashboard-light.png";
import myclaimsDark from "@/assets/reimburesemt-myclaims-dark.png";
import myclaimsLight from "@/assets/reimburesemt-myclaims-light.png";
import advanceDark from "@/assets/reimburesement-advance-dark.png";
import advanceLight from "@/assets/reimbursement-advance-light.png";
import approvalDark from "@/assets/reimbursement-approval-dark.png";
import approvalLight from "@/assets/reimbursement-approval-light.png";
import budgetDark from "@/assets/reimbursement-budget-dark.png";
import budgetLight from "@/assets/reimbursement-budget-light.png";
import categoriesDark from "@/assets/reimbursement-categories-dark.png";
import categoriesLight from "@/assets/reimbursement-categories-light.png";

const SUBMODULES = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "my-claims", label: "My Claims", icon: FileText },
    { id: "advances", label: "Advances", icon: Banknote },
    { id: "approvals", label: "Approvals", icon: CheckCircle2 },
    { id: "budgets", label: "Budgets", icon: Target },
    { id: "categories", label: "Categories", icon: Tags },
];

export default function Reimbursement() {
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
            { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
        );
        targets.forEach((t) => obs.observe(t));
        return () => obs.disconnect();
    }, []);

    return (
        <main
            data-testid="reimbursement-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink"
        >
            <SEO />
            <Nav />
            <Hero />
            <SubmoduleNav />
            <DashboardSection />
            <MyClaimsSection />
            <AdvancesSection />
            <ApprovalsSection />
            <BudgetsSection />
            <CategoriesSection />
            <FinalCTA />
            <Footer />
        </main>
    );
}

/* ---------------- HERO ---------------- */

function Hero() {
    return (
        <section
            data-testid="reimbursement-hero"
            className="relative pt-32 md:pt-40 pb-16 md:pb-24 zk-mesh"
        >
            <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_75%)] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                <div className="zk-reveal">
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-1.5 text-[12px] text-zinc-500 hover:text-zukvo-600"
                    >
                        <ArrowLeft className="size-3.5" />
                        All products
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-violet-600">
                            <Wallet className="size-3.5" />
                            Reimbursement
                        </div>
                        <h1 className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink">
                            Expense claims. <br />
                            <span className="text-zinc-500">Approved in clicks.</span>
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            Submit, approve, and settle expense claims without spreadsheets. Streamline your policies, manage employee advances, and track departmental budgets automatically.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/signup"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Reimbursement
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
                                { k: "Smart Claims", v: "Quick receipt capture" },
                                { k: "Advances", v: "Manage pre-approved funds" },
                                { k: "Budgets", v: "Track spend by department" },
                                { k: "Policies", v: "Automated rule enforcement" },
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
            data-testid="reimbursement-submodule-nav"
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

function DashboardSection() {
    return (
        <section
            id="dashboard"
            data-testid="reimbursement-dashboard"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                            Dashboard
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Total visibility into expenses.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Monitor overall company spend, pending claims, and active advances from a single unified dashboard.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: BarChart3, t: "Expense trends by month & category" },
                                { i: Wallet, t: "Total outstanding advances" },
                                { i: CheckCircle2, t: "Pending approval queue" },
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
                        <div className="relative max-w-[800px] mx-auto">
                            <ImageSlot
                                testid="reimbursement-image-dashboard"
                                label="Reimbursement Dashboard"
                                chromeUrl="zukvo.app/reimbursement"
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                                caption="Live screenshot — Reimbursement dashboard overview."
                                src={dashboardDark}
                                srcLight={dashboardLight}
                            />
                        </div>
                    </div>
                </div>

                {/* KPI restate */}
                <div className="zk-reveal mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Kpi icon={Receipt} kicker="Total Claims" value="342" sub="this month" tone="indigo" />
                    <Kpi icon={DollarSign} kicker="Total Reimbursed" value="$18.5k" sub="this month" tone="emerald" />
                    <Kpi icon={CheckCircle2} kicker="Pending Approvals" value="28" sub="awaiting review" tone="amber" />
                    <Kpi icon={Target} kicker="Budget Usage" value="82%" sub="of allocated budget" tone="rose" />
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

/* ---------------- MY CLAIMS ---------------- */

function MyClaimsSection() {
    return (
        <section
            id="my-claims"
            data-testid="reimbursement-claims"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
                            My Claims
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Submit expenses effortlessly.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Employees can submit claims, attach receipts via our web portal, and track their payout status in real time.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: FileText, t: "Quick receipt capture & parsing" },
                                { i: Banknote, t: "Automatic policy checks" },
                                { i: CheckCircle2, t: "Real-time status tracking" },
                            ].map((b, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2.5 text-[14px] text-zinc-300"
                                >
                                    <b.i className="size-4 text-cyan-300" /> {b.t}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-7">
                        <ImageSlot
                            testid="reimbursement-image-claims"
                            label="My Claims"
                            chromeUrl="zukvo.app/reimbursement/claims"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — Submitting and reviewing personal claims."
                            src={myclaimsDark}
                            srcLight={myclaimsLight}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- ADVANCES ---------------- */

function AdvancesSection() {
    return (
        <section
            id="advances"
            data-testid="reimbursement-advances"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <ImageSlot
                            testid="reimbursement-image-advances"
                            label="Advances"
                            chromeUrl="zukvo.app/reimbursement/advances"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — Requesting and tracking salary or expense advances."
                            src={advanceDark}
                            srcLight={advanceLight}
                        />
                    </div>
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                            Advances
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Manage upfront requests.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Allow employees to request cash advances for upcoming trips or purchases. Track settlements and automatically reconcile them with future expense claims.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Banknote, t: "Request and manage Advances" },
                                { i: Receipt, t: "Automated reconciliation" },
                                { i: DollarSign, t: "Clear settlement tracking" },
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
                </div>
            </div>
        </section>
    );
}

/* ---------------- APPROVALS ---------------- */

function ApprovalsSection() {
    return (
        <section
            id="approvals"
            data-testid="reimbursement-approvals"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-300">
                            Approvals
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Review claims instantly.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Managers and finance teams can review submitted claims, check attached receipts, and approve payouts with one click.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: CheckCircle2, t: "Multi-tier Approval workflows" },
                                { i: FileText, t: "Inline receipt verification" },
                                { i: Wallet, t: "Batch payout processing" },
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
                            testid="reimbursement-image-approvals"
                            label="Approvals"
                            chromeUrl="zukvo.app/reimbursement/approvals"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — Reviewing and approving expense claims."
                            src={approvalDark}
                            srcLight={approvalLight}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- BUDGETS ---------------- */

function BudgetsSection() {
    return (
        <section
            id="budgets"
            data-testid="reimbursement-budgets"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <ImageSlot
                            testid="reimbursement-image-budgets"
                            label="Budgets"
                            chromeUrl="zukvo.app/reimbursement/budgets"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — Departmental budget tracking."
                            src={budgetDark}
                            srcLight={budgetLight}
                        />
                    </div>
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
                            Budgets
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Keep spending on track.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Empower your finance team to set and monitor department-level budgets to prevent overspending before it happens.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Target, t: "Set and track departmental Budgets" },
                                { i: BarChart3, t: "Detailed payout and variance reports" },
                                { i: ShieldCheck, t: "Over-budget alerts" },
                            ].map((b, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2.5 text-[14px] text-zinc-300"
                                >
                                    <b.i className="size-4 text-cyan-300" /> {b.t}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- CATEGORIES & POLICIES ---------------- */

function CategoriesSection() {
    return (
        <section
            id="categories"
            data-testid="reimbursement-categories"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-rose-300">
                            Categories
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Automate your expense rules.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Define exact claim categories and set spending limits with hard policies. No more manual compliance checks.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Tags, t: "Custom expense categories" },
                                { i: ShieldCheck, t: "Automated limit enforcement" },
                                { i: Target, t: "Role-based spending caps" },
                            ].map((b, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2.5 text-[14px] text-zinc-300"
                                >
                                    <b.i className="size-4 text-rose-300" /> {b.t}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-7">
                        <ImageSlot
                            testid="reimbursement-image-categories"
                            label="Categories & Policies"
                            chromeUrl="zukvo.app/reimbursement/categories"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — Setting up categories and policies."
                            src={categoriesDark}
                            srcLight={categoriesLight}
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
        <section className="relative bg-[#0A0A0A] text-white border-t border-white/5 pb-24 md:pb-32">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                <div className="zk-reveal rounded-3xl bg-gradient-to-br from-[#121214] to-[#0A0A0C] border border-white/10 p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
                        style={{
                            backgroundImage: "radial-gradient(circle at 50% 0%, rgba(139,92,246,0.2) 0%, transparent 60%)",
                        }}
                    />
                    <h2 className="relative font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em] max-w-2xl mx-auto">
                        Ready to automate your expenses?
                    </h2>
                    <p className="relative mt-5 text-zinc-400 text-[16px] md:text-lg max-w-xl mx-auto">
                        Say goodbye to spreadsheets and manual receipt checks. Let Zukvo manage your reimbursements.
                    </p>
                    <div className="relative mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/signup"
                            className="inline-flex items-center gap-2 rounded-full bg-white text-zinc-900 px-8 py-4 text-[15px] font-medium hover:bg-zinc-100 transition-colors"
                        >
                            Try Reimbursement for free
                            <ArrowRight className="size-4" />
                        </a>
                        <Link
                            to="/contact-sales"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-[15px] font-medium text-white hover:bg-white/10 hover:border-white/30 transition-colors"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    CalendarDays,
    LayoutDashboard,
    CalendarPlus,
    CheckCircle2,
    Landmark,
    Settings2,
    Tags,
    ShieldCheck,
    Building,
    Settings,
    Users,
    Clock,
    Plane,
    CalendarClock,
    FileEdit,
    Banknote
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import ImageSlot from "@/components/ImageSlot";

import dashboardDark from "@/assets/leave-dashboard-dark.png";
import dashboardLight from "@/assets/leave-dashboard-light.png";
import applyDark from "@/assets/leave-apply-dark.png";
import applyLight from "@/assets/leave-apply-light.png";
import approvalDark from "@/assets/leave-approval-dark.png";
import approvalLight from "@/assets/leave-approval-light.png";
import adjustmentDark from "@/assets/leave-adjustment-dark.png";
import adjustmentLight from "@/assets/leave-adjustment-light.png";
import typeDark from "@/assets/leave-type-dark.png";
import typeLight from "@/assets/leave-type-light.png";
import configDark from "@/assets/leave-configuration-dark.png";
import configLight from "@/assets/leave-configuration-light.png";
import govtDark from "@/assets/leave-govt-dark.png";
import govtLight from "@/assets/leave-govt-light.png";

const SUBMODULES = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "apply", label: "Apply Leave", icon: CalendarPlus },
    { id: "approvals", label: "Leave Approvals", icon: CheckCircle2 },
    { id: "adjustments", label: "Leave Adjustment", icon: Settings2 },
    { id: "types", label: "Leave Types", icon: Tags },
    { id: "configuration", label: "Configuration & Policies", icon: Settings },
    { id: "holidays", label: "Government Holidays", icon: Landmark },
];

export default function LeaveAttendance() {
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
            data-testid="leave-attendance-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink"
        >
            <SEO />
            <Nav />
            <Hero />
            <SubmoduleNav />
            <DashboardSection />
            <ApplyLeaveSection />
            <LeaveApprovalsSection />
            <LeaveAdjustmentSection />
            <LeaveTypesSection />
            <ConfigurationSection />
            <HolidaysSection />
            <FinalCTA />
            <Footer />
        </main>
    );
}

/* ---------------- HERO ---------------- */

function Hero() {
    return (
        <section
            data-testid="leave-hero"
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
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-indigo-600">
                            <CalendarDays className="size-3.5" />
                            Leave Management
                        </div>
                        <h1 className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink">
                            Time off, simplified. <br />
                            <span className="text-zinc-500">For everyone.</span>
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            Empower your team to manage their own time off while you automate policies, track balances, and stay compliant with government holidays.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/signup"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Leaves Free
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
                                { k: "1-Click Apply", v: "Request time off instantly" },
                                { k: "Custom Policies", v: "Tailor rules to your org" },
                                { k: "Live Balances", v: "Always know who's away" },
                                { k: "Holidays", v: "Built-in calendar sync" },
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
            data-testid="leave-submodule-nav"
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
            data-testid="leave-dashboard"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-indigo-300">
                            Dashboard
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Who's out today?
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Get a real-time view of your entire organization's availability. See who is on leave, upcoming time off, and pending requests in one glance.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Clock, t: "Real-time employee status" },
                                { i: CalendarPlus, t: "Upcoming leave schedules" },
                                { i: CheckCircle2, t: "Quick approval access" },
                            ].map((b, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2.5 text-[14px] text-zinc-300"
                                >
                                    <b.i className="size-4 text-indigo-300" /> {b.t}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-7 w-full min-w-0">
                        <div className="relative max-w-[800px] mx-auto">
                            <ImageSlot
                                testid="leave-image-dashboard"
                                label="Leave Dashboard"
                                chromeUrl="zukvo.app/leaves"
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                                caption="Live screenshot — Leave and attendance dashboard."
                                src={dashboardDark}
                                srcLight={dashboardLight}
                            />
                        </div>
                    </div>
                </div>

                {/* KPI restate */}
                <div className="zk-reveal mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Kpi icon={Users} kicker="On Leave Today" value="12" sub="employees absent" tone="indigo" />
                    <Kpi icon={CheckCircle2} kicker="Pending Requests" value="5" sub="awaiting action" tone="amber" />
                    <Kpi icon={Plane} kicker="Upcoming" value="28" sub="approved leaves this month" tone="emerald" />
                    <Kpi icon={CalendarClock} kicker="Comp-Offs" value="4" sub="requests pending" tone="rose" />
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

/* ---------------- APPLY LEAVE ---------------- */

function ApplyLeaveSection() {
    return (
        <section
            id="apply"
            data-testid="leave-apply"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
                            Apply Leave
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Request time off in seconds.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Employees can easily check their balances, select dates, and submit leave requests directly from their portal.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: CalendarPlus, t: "Simple date selection" },
                                { i: Plane, t: "Real-time balance checks" },
                                { i: CalendarClock, t: "Half-day and hourly requests" },
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
                            testid="leave-image-apply"
                            label="Apply Leave"
                            chromeUrl="zukvo.app/leaves/apply"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — Employee leave application."
                            src={applyDark}
                            srcLight={applyLight}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- LEAVE APPROVALS ---------------- */

function LeaveApprovalsSection() {
    return (
        <section
            id="approvals"
            data-testid="leave-approvals"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <ImageSlot
                            testid="leave-image-approvals"
                            label="Leave Approvals"
                            chromeUrl="zukvo.app/leaves/approvals"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — Reviewing and approving leave requests."
                            src={approvalDark}
                            srcLight={approvalLight}
                        />
                    </div>
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                            Leave Approvals
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Approve without bottlenecks.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            A seamless experience for managers to review and approve leave requests. Check overlapping schedules and balances before approving.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: CalendarPlus, t: "Self-serve Apply Leave portal" },
                                { i: CheckCircle2, t: "Multi-level Approvals & routing" },
                                { i: Users, t: "Conflict checking across teams" },
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

/* ---------------- LEAVE ADJUSTMENTS ---------------- */

function LeaveAdjustmentSection() {
    return (
        <section
            id="adjustments"
            data-testid="leave-adjustment"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-300">
                            Leave Adjustments
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Manual corrections, logged perfectly.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Easily adjust employee leave balances, add comp-offs, or correct historical data without messing up your ledger.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Settings2, t: "Manual balance corrections" },
                                { i: CalendarClock, t: "Credit and debit days instantly" },
                                { i: FileEdit, t: "Detailed audit trails for HR" },
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
                            testid="leave-image-adjust"
                            label="Leave Adjustments"
                            chromeUrl="zukvo.app/leaves/adjustments"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — Adjusting employee leave balances."
                            src={adjustmentDark}
                            srcLight={adjustmentLight}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- LEAVE TYPES ---------------- */

function LeaveTypesSection() {
    return (
        <section
            id="types"
            data-testid="leave-types"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <ImageSlot
                            testid="leave-image-types"
                            label="Leave Types"
                            chromeUrl="zukvo.app/leaves/types"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — Defining custom leave types."
                            src={typeDark}
                            srcLight={typeLight}
                        />
                    </div>
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-rose-300">
                            Leave Types
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Tailor to your org.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Define unlimited custom leave types (Sick, Casual, Maternity, Comp-off) and set exactly how they behave, accrue, and encash.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Tags, t: "Unlimited custom leave types" },
                                { i: Building, t: "Department-specific leave rules" },
                                { i: Banknote, t: "Leave encashment settings" },
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
                </div>
            </div>
        </section>
    );
}


/* ---------------- CONFIGURATION ---------------- */

function ConfigurationSection() {
    return (
        <section
            id="configuration"
            data-testid="leave-configuration"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                            Configuration & Policies
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Your rules, automated.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Define accrual rules, carry-forward policies, and global settings. The system automatically enforces them, so you don't have to.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: ShieldCheck, t: "Complex Leave Policies & accruals" },
                                { i: Settings, t: "Global Configuration settings" },
                                { i: CalendarDays, t: "Carry-forward and expiry logic" },
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
                            testid="leave-image-config"
                            label="Configuration & Policies"
                            chromeUrl="zukvo.app/leaves/configuration"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — Configuring leave rules."
                            src={configDark}
                            srcLight={configLight}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- HOLIDAYS ---------------- */

function HolidaysSection() {
    return (
        <section
            id="holidays"
            data-testid="leave-holidays"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Holidays
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Stay locally compliant.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Manage regional public holidays and ensure your organization's calendars are always up to date across different locations.
                    </p>
                </div>

                <div className="zk-reveal mt-12">
                    <ImageSlot
                        testid="leave-image-holidays"
                        label="Government Holidays"
                        chromeUrl="zukvo.app/leaves/holidays"
                        aspect="auto"
                        objectFit="contain"
                        className="max-w-[800px] mx-auto"
                        caption="Live screenshot — Public holiday calendar."
                        src={govtDark}
                        srcLight={govtLight}
                    />
                </div>

                {/* Steps */}
                <div className="zk-reveal mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Step
                        icon={Building}
                        title="Government Holidays"
                        body="View and manage the default set of regional holidays based on your company's operating locations."
                    />
                    <Step
                        icon={CalendarPlus}
                        title="Add Custom Holidays"
                        body="Easily add custom company-wide days off or modify existing government holidays as needed."
                    />
                </div>
            </div>
        </section>
    );
}

function Step({ icon: Icon, title, body }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
            <div className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-zukvo-500/10 text-zukvo-300 border border-zukvo-500/20">
                    <Icon className="size-4" />
                </span>
            </div>
            <div className="mt-4 font-heading text-lg text-white tracking-tight">{title}</div>
            <p className="mt-1.5 text-[13.5px] text-zinc-400 leading-relaxed">{body}</p>
        </div>
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
                            backgroundImage: "radial-gradient(circle at 50% 0%, rgba(99,102,241,0.2) 0%, transparent 60%)",
                        }}
                    />
                    <h2 className="relative font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em] max-w-2xl mx-auto">
                        Ready to streamline time off?
                    </h2>
                    <p className="relative mt-5 text-zinc-400 text-[16px] md:text-lg max-w-xl mx-auto">
                        Give your employees a transparent view of their balances while maintaining total control over policies.
                    </p>
                    <div className="relative mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/signup"
                            className="inline-flex items-center gap-2 rounded-full bg-white text-zinc-900 px-8 py-4 text-[15px] font-medium hover:bg-zinc-100 transition-colors"
                        >
                            Try Leaves for free
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

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    Clock,
    LayoutDashboard,
    Fingerprint,
    CheckCircle2,
    BarChart3,
    History,
    Users,
    Settings,
    MapPin
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import ImageSlot from "@/components/ImageSlot";

import dashboardDark from "@/assets/attandance-dashboard-dark.png";
import dashboardLight from "@/assets/attandance-dashboard-light.png";
import clockinDark from "@/assets/attandance-clockin-dark.png";
import clockinLight from "@/assets/attandance-colckin-light.png";
import manageDark from "@/assets/attandance-manage-dark.png";
import manageLight from "@/assets/attandance-manage-light.png";

const SUBMODULES = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "clock-in-out", label: "Clock In / Out", icon: Clock },
    { id: "manage-attendance", label: "Manage Attendance", icon: Users },
];

export default function ClockInOut() {
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
            data-testid="clock-in-out-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink"
        >
            <SEO />
            <Nav />
            <Hero />
            <SubmoduleNav />
            <DashboardSection />
            <TimeTrackingSection />
            <ManageAttendanceSection />
            <FinalCTA />
            <Footer />
        </main>
    );
}

/* ---------------- HERO ---------------- */

function Hero() {
    return (
        <section
            data-testid="clock-hero"
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
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-600">
                            <Clock className="size-3.5" />
                            Attendance
                        </div>
                        <h1 className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink">
                            Time tracking. <br />
                            <span className="text-zinc-500">Accurate to the second.</span>
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            Allow your team to clock in and out effortlessly. Track working hours, monitor overtime, and automate attendance logs with precision.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/signup"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Attendance Free
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
                                { k: "1-Click Clock In", v: "Easy access for everyone" },
                                { k: "Geofencing", v: "Location-based tracking" },
                                { k: "Live Dashboard", v: "See who's online now" },
                                { k: "Auto Reports", v: "Attendance sheets generated" },
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
            data-testid="clock-submodule-nav"
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
            data-testid="clock-dashboard"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                            Dashboard
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Who's working today?
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Get a real-time overview of your entire workforce. Track who is clocked in, late arrivals, and total hours worked across the organization.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Users, t: "Real-time presence indicators" },
                                { i: BarChart3, t: "Daily attendance summaries" },
                                { i: Clock, t: "Overtime and deficit tracking" },
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
                    <div className="lg:col-span-7 w-full min-w-0">
                        <div className="relative max-w-[800px] mx-auto">
                            <ImageSlot
                                testid="clock-image-dashboard"
                                label="Attendance Dashboard"
                                chromeUrl="zukvo.app/attendance"
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                                caption="Live screenshot — Attendance dashboard overview."
                                src={dashboardDark}
                                srcLight={dashboardLight}
                            />
                        </div>
                    </div>
                </div>

                {/* KPI restate */}
                <div className="zk-reveal mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Kpi icon={CheckCircle2} kicker="Present Today" value="114" sub="employees active" tone="emerald" />
                    <Kpi icon={Clock} kicker="Late Arrivals" value="8" sub="clocked in past 9am" tone="amber" />
                    <Kpi icon={History} kicker="Avg Hours" value="7.8h" sub="daily average" tone="indigo" />
                    <Kpi icon={Users} kicker="Absentees" value="3" sub="not clocked in" tone="rose" />
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

/* ---------------- TIME TRACKING ---------------- */

function TimeTrackingSection() {
    return (
        <section
            id="clock-in-out"
            data-testid="clock-time-tracking"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <ImageSlot
                            testid="clock-image-tracking"
                            label="Clock In & Out"
                            chromeUrl="zukvo.app/attendance/clock"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — Clocking in and out."
                            src={clockinDark}
                            srcLight={clockinLight}
                        />
                    </div>
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                            Time Tracking
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Frictionless entry.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Enable employees to clock their hours securely from any device. Implement geofencing to ensure time is logged only from authorized locations.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Fingerprint, t: "1-Click Secure Clock In/Out" },
                                { i: MapPin, t: "Geofenced location tracking" },
                                { i: History, t: "Detailed daily timesheets" },
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
                </div>
            </div>
        </section>
    );
}

/* ---------------- MANAGE ATTENDANCE ---------------- */

function ManageAttendanceSection() {
    return (
        <section
            id="manage-attendance"
            data-testid="clock-manage-attendance"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Manage Attendance
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Total control for HR.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Review detailed attendance logs, manage discrepancies, approve regularization requests, and export data directly to payroll.
                    </p>
                </div>

                <div className="zk-reveal mt-12">
                    <ImageSlot
                        testid="clock-image-manage"
                        label="Manage Attendance"
                        chromeUrl="zukvo.app/attendance/manage"
                        aspect="auto"
                        objectFit="contain"
                        className="max-w-[800px] mx-auto"
                        caption="Live screenshot — HR attendance management."
                        src={manageDark}
                        srcLight={manageLight}
                    />
                </div>

                {/* Steps */}
                <div className="zk-reveal mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Step
                        icon={Settings}
                        title="Regularization"
                        body="Allow employees to request adjustments for missed punches or forgotten check-outs, subject to manager approval."
                    />
                    <Step
                        icon={BarChart3}
                        title="Payroll Export"
                        body="Automatically calculate total workable hours and sync them with your Zukvo Payroll cycles without manual data entry."
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
                            backgroundImage: "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.2) 0%, transparent 60%)",
                        }}
                    />
                    <h2 className="relative font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em] max-w-2xl mx-auto">
                        Ready to automate your timesheets?
                    </h2>
                    <p className="relative mt-5 text-zinc-400 text-[16px] md:text-lg max-w-xl mx-auto">
                        Get perfect accuracy on working hours and simplify your payroll process entirely.
                    </p>
                    <div className="relative mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/signup"
                            className="inline-flex items-center gap-2 rounded-full bg-white text-zinc-900 px-8 py-4 text-[15px] font-medium hover:bg-zinc-100 transition-colors"
                        >
                            Try Attendance for free
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

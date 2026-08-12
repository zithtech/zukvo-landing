import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    Calendar,
    Clock,
    Activity,
    Users,
    User,
    Briefcase,
    TrendingUp,
    Plus,
    CalendarRange,
    Filter,
    PenLine,
    CheckCircle2,
    Sparkles,
    ChevronRight,
    AlertTriangle,
    BarChart3,
    Hash,
    MousePointerClick,
    ExternalLink,
    FileText,
    Moon,
    Sun,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import ImageSlot from "@/components/ImageSlot";


import dashboardImg from "@/assets/timesheet-dashboard-dark.png";
import dashboardImgLight from "@/assets/timesheet-dashboard-light.png";
import myTimesheetImg from "@/assets/mytimesheet-dark.png";
import myTimesheetImgLight from "@/assets/mytimesheet-light.png";
import submitTimesheetImg from "@/assets/submittimeshhet-dark.png";
import submitTimesheetImgLight from "@/assets/submittimesheet-light.png";
import approveTimesheetImg from "@/assets/approve-timesheet-dark.png";
import approveTimesheetImgLight from "@/assets/approve-timesheet-light.png";
import teamTimesheetImg from "@/assets/team-timeshhet-dark.png";
import teamTimesheetImgLight from "@/assets/team-timesheet-light.png";

const SUBMODULES = [
    { id: "dashboard", label: "Dashboard", icon: Activity },
    { id: "my-timesheet", label: "My Timesheet", icon: User },
    { id: "submit", label: "Submit Timesheet", icon: Plus },
    { id: "team", label: "Team Timesheet", icon: Users },
    { id: "approve", label: "Approve Timesheet", icon: CheckCircle2 },
];

export default function Timesheet() {
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
            data-testid="timesheet-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink"
        >
            <SEO />
            <Nav />
            <Hero />
            <SubmoduleNav />
            <DashboardOverview />
            <MyTimesheet />
            <SubmitTimesheet />
            <TeamTimesheet />
            <ApproveTimesheet />
            <FinalCTA />
            <Footer />
        </main>
    );
}

/* ---------------- HERO ---------------- */

function Hero() {
    return (
        <section
            data-testid="timesheet-hero"
            className="relative pt-32 md:pt-40 pb-16 md:pb-24 zk-mesh"
        >
            <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_75%)] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                <div className="zk-reveal">
                    <Link
                        to="/products"
                        data-testid="timesheet-breadcrumb"
                        className="inline-flex items-center gap-1.5 text-[12px] text-zinc-500 hover:text-zukvo-600"
                    >
                        <ArrowLeft className="size-3.5" />
                        All products
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-600">
                            <Calendar className="size-3.5" />
                            Timesheet
                        </div>
                        <h1
                            data-testid="timesheet-headline"
                            className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink"
                        >
                            Track hours. <br />
                            <span className="text-zinc-500">Simplify team hours.</span>
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            Log hours daily, weekly, or by project. Managers can review, approve,
                            and ensure accurate time logging. Keep everyone on the
                            same page with clear, traceable timesheets.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/signup"
                                data-testid="timesheet-cta-primary"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Get Started
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            <a
                                href="/signup"
                                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-medium text-zinc-800 hover:border-zinc-400 transition-colors"
                            >
                                See every feature
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="zk-reveal grid grid-cols-2 gap-3">
                            {[
                                { k: "Daily & Weekly", v: "Flexible entry modes" },
                                { k: "Project based", v: "Accurate cost tracking" },
                                { k: "Approvals", v: "Manager reviews" },
                                { k: "Export", v: "Easy data exports" },
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
            data-testid="timesheet-submodule-nav"
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
                            data-testid={`timesheet-pill-${s.id}`}
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

/* ---------------- DASHBOARD OVERVIEW ---------------- */
function DashboardOverview() {
    return (
        <section id="dashboard" data-testid="timesheet-dashboard" className="relative bg-[#0A0A0A] text-white">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300 mb-6">
                            <Activity className="size-3.5" /> Dashboard
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            Bird's-eye view of your time.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            See your total logged hours, upcoming submission deadlines, and pending approvals at a glance. Understand where your time goes across projects.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Real-time activity stats</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Track your daily and weekly progress instantly from your dashboard.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Weekly breakdown</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Analyze where your time is being spent across different projects.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Approval statuses</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Stay on top of what has been approved and what requires your attention.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal">
                        <ImageSlot
                            testid="timesheet-image-dashboard"
                            src={dashboardImg}
                            srcLight={dashboardImgLight}
                            alt="Timesheet Dashboard"
                            label="Timesheet Dashboard"
                            chromeUrl="zukvo.app/timesheet/dashboard"
                            aspect="auto"
                            objectFit="contain"
                            className="mx-auto w-full"
                            caption="Live screenshot — overall timesheet dashboard with summaries."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- MY TIMESHEET ---------------- */
function MyTimesheet() {
    return (
        <section id="my-timesheet" data-testid="timesheet-my" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-300 mb-6">
                            <User className="size-3.5" /> My Timesheet
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            Your personal logbook.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            View all your past and present entries. Quickly see what has been approved, what's pending, and edit unsubmitted timesheets easily.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Historical logs</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Access your complete history of logged hours and past timesheets.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Edit entries</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Make quick adjustments to any unsubmitted entries before final approval.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal order-2 lg:order-1">
                        <ImageSlot
                            testid="timesheet-image-my"
                            src={myTimesheetImg}
                            srcLight={myTimesheetImgLight}
                            alt="My Timesheet"
                            label="My Timesheet — full page"
                            chromeUrl="zukvo.app/timesheet/my-timesheet"
                            aspect="auto"
                            objectFit="contain"
                            className="mx-auto w-full"
                            caption="Live screenshot — personal timesheet history and active log."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- SUBMIT TIMESHEET ---------------- */
function SubmitTimesheet() {
    return (
        <section id="submit" data-testid="timesheet-submit" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-300 mb-6">
                            <Plus className="size-3.5" /> Submit Timesheet
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            Frictionless data entry.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            Fill out your hours for the week in seconds. Duplicate past weeks, assign hours directly to projects or specific tasks, and hit submit.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Duplicate past weeks</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Save time by instantly duplicating your common work schedules.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Project mapping</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Assign your hours specifically to the active projects you are working on.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal">
                        <ImageSlot
                            testid="timesheet-image-submit"
                            src={submitTimesheetImg}
                            srcLight={submitTimesheetImgLight}
                            alt="Submit Timesheet"
                            label="Submit Timesheet view"
                            chromeUrl="zukvo.app/timesheet/submit"
                            aspect="auto"
                            objectFit="contain"
                            className="mx-auto w-full"
                            caption="Live screenshot — easy data entry and submission flow."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- TEAM TIMESHEET ---------------- */
function TeamTimesheet() {
    return (
        <section id="team" data-testid="timesheet-team" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300 mb-6">
                            <Users className="size-3.5" /> Team Timesheet
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            See the whole picture.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            Monitor your entire team's timesheets in one consolidated view. See who has submitted their hours, who's missing, and aggregate time spent across various initiatives.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Consolidated view</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Easily track the completion and submission status of your entire team in one place.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Aggregate time</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Understand total resource allocation and aggregate time spent across initiatives.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal order-2 lg:order-1">
                        <ImageSlot
                            testid="timesheet-image-team"
                            src={teamTimesheetImg}
                            srcLight={teamTimesheetImgLight}
                            alt="Team Timesheet"
                            label="Team Timesheet — manager view"
                            chromeUrl="zukvo.app/timesheet/team"
                            aspect="auto"
                            objectFit="contain"
                            className="mx-auto w-full"
                            caption="Live screenshot — team tracking with activity and status."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- APPROVE TIMESHEET ---------------- */
function ApproveTimesheet() {
    return (
        <section id="approve" data-testid="timesheet-approve" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-rose-300 mb-6">
                            <CheckCircle2 className="size-3.5" /> Approve Timesheet
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            Review and lock hours.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            Streamlined approval workflows for managers. Review pending timesheets, reject with comments, or approve them to lock hours for the period.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Manager workflows</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Dedicated interface for managers to review and action on timesheet requests quickly.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Lock verified hours</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Secure your records by locking verified hours for billing and payroll.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal">
                        <ImageSlot
                            testid="timesheet-image-approve"
                            src={approveTimesheetImg}
                            srcLight={approveTimesheetImgLight}
                            alt="Approve Timesheet"
                            label="Approve Timesheet view"
                            chromeUrl="zukvo.app/timesheet/approve"
                            aspect="auto"
                            objectFit="contain"
                            className="mx-auto w-full"
                            caption="Live screenshot — streamlined approval workflow."
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
        <section className="relative bg-[#0A0A0A] text-white">
            <div className="mx-auto max-w-7xl px-6 md:px-10 pb-20 pt-10">
                <div
                    className="zk-reveal relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0E0E10] p-10 md:p-16 text-center"
                    style={{
                        backgroundImage:
                            "radial-gradient(60% 80% at 50% 0%, rgba(99,102,241,0.18), transparent 60%)",
                    }}
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-zukvo-500/30 bg-zukvo-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                        Get started
                    </span>
                    <h2 className="mt-6 font-heading font-medium text-3xl md:text-5xl tracking-[-0.03em]">
                        Start tracking your time today.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/signup"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-zukvo-500 hover:bg-zukvo-600 transition-colors text-white px-6 py-3.5 text-sm font-medium"
                        >
                            Try Timesheet Free
                            <ArrowRight className="size-4" />
                        </a>
                        <a
                            href="/products"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors text-white px-6 py-3.5 text-sm font-medium"
                        >
                            Explore other modules
                            <ArrowRight className="size-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

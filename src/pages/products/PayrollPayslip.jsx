import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    Banknote,
    Settings,
    Layers,
    Calendar,
    Landmark,
    CheckCircle2,
    FileText,
    Users,
    PlayCircle,
    Scale,
    Wallet
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import ImageSlot from "@/components/ImageSlot";

// Imports for 11 pairs of images
import pfDark from "@/assets/payroll-statutory-PF-dark.png";
import pfLight from "@/assets/payroll-statutory-PF-light.png";
import esiDark from "@/assets/payroll-statutory-ESI-dark.png";
import esiLight from "@/assets/payroll-statutory-ESI-light.png";
import ptDark from "@/assets/payroll-Professional Tax-dark.png";
import ptLight from "@/assets/payroll-Professional Tax-light.png";

import approvalDark from "@/assets/payroll-approval-dark.png";
import approvalLight from "@/assets/payroll-approval-light.png";
import bankDark from "@/assets/payroll-bank&distribution-dark.png";
import bankLight from "@/assets/payroll-bank&distribution-light.png";
import runDark from "@/assets/payroll-runpayroll-dark.png";
import runLight from "@/assets/payroll-runpayroll-light.png";

import componentDark from "@/assets/payroll-component-dark.png";
import componentLight from "@/assets/payroll-component-light.png";
import structureDark from "@/assets/payroll-structure-dark.png";
import structureLight from "@/assets/payroll-structure-light.png";

import setupDark from "@/assets/payroll-employee-pay-setup-dark.png";
import setupLight from "@/assets/payroll-employee-pay-setup-light.png";
import scheduleDark from "@/assets/payroll-pay-schudule-dark.png";
import scheduleLight from "@/assets/payroll-pay-schudule-light.png";

import payslipDark from "@/assets/payroll-payslip-template-dark.png";
import payslipLight from "@/assets/payroll-payslip-template-light.png";

const SUBMODULES = [
    { id: "setup", label: "Setup", icon: Settings },
    { id: "structures", label: "Structures", icon: Layers },
    { id: "compliance", label: "Compliance", icon: Landmark },
    { id: "payslips", label: "Payslips & Bank", icon: FileText },
    { id: "run-payroll", label: "Run Payroll", icon: PlayCircle },
];

export default function PayrollPayslip() {
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
            data-testid="payroll-payslip-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink"
        >
            <SEO />
            <Nav />
            <Hero />
            <SubmoduleNav />
            <SetupSection />
            <StructuresSection />
            <ComplianceSection />
            <PayslipsSection />
            <RunPayrollSection />
            <FinalCTA />
            <Footer />
        </main>
    );
}

/* ---------------- TABS COMPONENT ---------------- */

function ImageTabs({ tabs, accent = "zukvo" }) {
    const [active, setActive] = useState(0);

    const glowColors = {
        violet: "from-violet-500/20 to-purple-500/20",
        emerald: "from-emerald-500/20 to-teal-500/20",
        amber: "from-amber-500/20 to-orange-500/20",
        rose: "from-rose-500/20 to-pink-500/20",
        cyan: "from-cyan-500/20 to-blue-500/20",
        zukvo: "from-zukvo-500/20 to-indigo-500/20",
    };

    return (
        <div className="flex flex-col gap-8 w-full max-w-full">
            <div className="flex justify-center w-full">
                <div className="inline-flex p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner overflow-x-auto no-scrollbar max-w-full">
                    {tabs.map((t, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`relative whitespace-nowrap px-6 py-2.5 rounded-full text-[13.5px] font-medium transition-all duration-300 ${
                                active === i 
                                ? 'bg-white text-zinc-900 shadow-md' 
                                : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                            }`}
                        >
                            {t.tabLabel}
                        </button>
                    ))}
                </div>
            </div>
            <div className="relative w-full max-w-full">
                <div className={`absolute -inset-2 bg-gradient-to-r ${glowColors[accent]} blur-2xl opacity-60 rounded-3xl transition-all duration-700`} />
                <div className="relative animate-in fade-in zoom-in-[0.98] duration-500 w-full" key={active}>
                    <ImageSlot
                        testid={tabs[active].testid}
                        label={tabs[active].label}
                        chromeUrl={tabs[active].chromeUrl}
                        aspect="auto"
                        objectFit="contain"
                        caption={tabs[active].caption}
                        src={tabs[active].src}
                        srcLight={tabs[active].srcLight}
                    />
                </div>
            </div>
        </div>
    );
}

/* ---------------- HERO ---------------- */

function Hero() {
    return (
        <section
            data-testid="payroll-hero"
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
                            <Banknote className="size-3.5" />
                            Payroll & Payslip
                        </div>
                        <h1 className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink">
                            Automated Payroll. <br />
                            <span className="text-zinc-500">Zero headaches.</span>
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            From components and structures to statutory compliance, manage every aspect of your compensation effortlessly. Calculate salaries, process bank disbursements, and generate payslips automatically.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/signup"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Payroll
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            <a
                                href="#setup"
                                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-medium text-zinc-800 hover:border-zinc-400 transition-colors"
                            >
                                See every feature
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="zk-reveal grid grid-cols-2 gap-3">
                            {[
                                { k: "Salary Components", v: "The building blocks of pay" },
                                { k: "Salary Structures", v: "Reusable templates for grades" },
                                { k: "Statutory Rules", v: "Mandatory PF & ESI configs" },
                                { k: "Approval Workflows", v: "Accountability & sign-offs" },
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
            data-testid="payroll-submodule-nav"
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

/* ---------------- SETUP ---------------- */

function SetupSection() {
    return (
        <section
            id="setup"
            data-testid="payroll-setup"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                            Setup
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Schedules & Employee Pay Setup.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Define <strong>when</strong> payroll runs and <strong>who</strong> runs together using Pay Schedules and Groups. Then, use Employee Pay Setup to stamp a real number onto a real person, applying a salary structure at their specific CTC.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Calendar, t: "Pay Schedules: payroll calendars" },
                                { i: Users, t: "Pay Groups: buckets of employees" },
                                { i: Settings, t: "Employee Setup: lock in agreed salary" },
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
                        <ImageTabs accent="violet" tabs={[
                            {
                                tabLabel: "Employee Pay Setup",
                                testid: "payroll-image-setup-employee",
                                label: "Employee Pay Setup",
                                chromeUrl: "zukvo.app/payroll/setup/employee",
                                caption: "Turn a template into a person's pay by locking in their CTC.",
                                src: setupDark,
                                srcLight: setupLight
                            },
                            {
                                tabLabel: "Pay Schedules",
                                testid: "payroll-image-setup-schedule",
                                label: "Pay Schedules & Groups",
                                chromeUrl: "zukvo.app/payroll/setup/schedule",
                                caption: "Model real-world pay cycles precisely.",
                                src: scheduleDark,
                                srcLight: scheduleLight
                            }
                        ]} />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- STRUCTURES ---------------- */

function StructuresSection() {
    return (
        <section
            id="structures"
            data-testid="payroll-structures"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <ImageTabs accent="emerald" tabs={[
                            {
                                tabLabel: "Salary Structures",
                                testid: "payroll-image-structures",
                                label: "Salary Structures",
                                chromeUrl: "zukvo.app/payroll/structures",
                                caption: "A sentence: a meaningful, reusable arrangement of words.",
                                src: structureDark,
                                srcLight: structureLight
                            },
                            {
                                tabLabel: "Salary Components",
                                testid: "payroll-image-components",
                                label: "Salary Components",
                                chromeUrl: "zukvo.app/payroll/components",
                                caption: "The vocabulary: building blocks from which all salaries are constructed.",
                                src: componentDark,
                                srcLight: componentLight
                            }
                        ]} />
                    </div>
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                            Structures
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Components & Structures.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            <strong>Components</strong> are the library of building blocks with rules (taxable, PF/ESI). <strong>Structures</strong> are where components are assembled into reusable templates (grades). 
                            Define a grade once, and automate the maths for any CTC level.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Layers, t: "Components: standardized pay elements" },
                                { i: Settings, t: "Structures: templates for pay scales" },
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

/* ---------------- COMPLIANCE ---------------- */

function ComplianceSection() {
    return (
        <section
            id="compliance"
            data-testid="payroll-compliance"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-300">
                            Compliance
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Statutory rules & obligations.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            These aren't company-invented numbers — they're legal obligations. Centralize rates, thresholds, and rules prescribed by the government for Provident Fund (PF) and Employee State Insurance (ESI) so they're applied uniformly.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Landmark, t: "Provident Fund (PF): retirement savings" },
                                { i: Scale, t: "ESI: medical/health insurance" },
                                { i: FileText, t: "Professional Tax: regional contributions" },
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
                        <ImageTabs accent="amber" tabs={[
                            {
                                tabLabel: "Provident Fund",
                                testid: "payroll-image-pf",
                                label: "Statutory PF",
                                chromeUrl: "zukvo.app/payroll/pf",
                                caption: "Mandatory retirement-savings scheme.",
                                src: pfDark,
                                srcLight: pfLight
                            },
                            {
                                tabLabel: "ESI",
                                testid: "payroll-image-esi",
                                label: "Statutory ESI",
                                chromeUrl: "zukvo.app/payroll/esi",
                                caption: "Medical/health-insurance scheme.",
                                src: esiDark,
                                srcLight: esiLight
                            },
                            {
                                tabLabel: "Professional Tax",
                                testid: "payroll-image-pt",
                                label: "Professional Tax",
                                chromeUrl: "zukvo.app/payroll/pt",
                                caption: "Regional statutory contributions.",
                                src: ptDark,
                                srcLight: ptLight
                            }
                        ]} />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- PAYSLIPS & BANK ---------------- */

function PayslipsSection() {
    return (
        <section
            id="payslips"
            data-testid="payroll-payslips"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <ImageTabs accent="rose" tabs={[
                            {
                                tabLabel: "Payslip Template",
                                testid: "payroll-image-payslips",
                                label: "Payslip Template",
                                chromeUrl: "zukvo.app/payroll/payslips",
                                caption: "A branded, consistent, legal/financial document.",
                                src: payslipDark,
                                srcLight: payslipLight
                            },
                            {
                                tabLabel: "Bank Settings",
                                testid: "payroll-image-bank",
                                label: "Bank Settings & Disbursement",
                                chromeUrl: "zukvo.app/payroll/bank",
                                caption: "Define the source account and disbursement format.",
                                src: bankDark,
                                srcLight: bankLight
                            }
                        ]} />
                    </div>
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-rose-300">
                            Payslips & Bank
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            The outputs of payroll.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Control what the employee receives and how the money is sent. Standardize payslip appearance, control disclosures, and match your bank's exact format so disbursement files import cleanly.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: FileText, t: "Payslip Template: standard formatting" },
                                { i: Wallet, t: "Bank Settings: disbursement formatting" },
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

/* ---------------- RUN PAYROLL ---------------- */

function RunPayrollSection() {
    return (
        <section
            id="run-payroll"
            data-testid="payroll-run"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
                            Run Payroll
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Compute & Approve.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            <strong>Run Payroll</strong> is the event — generating the month's salaries in one action by pulling frozen salary breakdowns and applying real-world adjustments. <br /><br />
                            <strong>Approval Workflows</strong> enforce accountability via sign-off chains to prevent errors before money moves.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: PlayCircle, t: "Produce a single reviewable register" },
                                { i: CheckCircle2, t: "Enforce multi-step sign-off chains" },
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
                        <ImageTabs accent="cyan" tabs={[
                            {
                                tabLabel: "Run Payroll",
                                testid: "payroll-image-run",
                                label: "Run Payroll",
                                chromeUrl: "zukvo.app/payroll/run",
                                caption: "Produce the salary register for the month.",
                                src: runDark,
                                srcLight: runLight
                            },
                            {
                                tabLabel: "Approval Workflows",
                                testid: "payroll-image-approval",
                                label: "Approval Workflows",
                                chromeUrl: "zukvo.app/payroll/approvals",
                                caption: "Ordered list of approval steps.",
                                src: approvalDark,
                                srcLight: approvalLight
                            }
                        ]} />
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
                            backgroundImage: "radial-gradient(circle at 50% 0%, rgba(99,102,241,0.2) 0%, transparent 60%)",
                        }}
                    />
                    <h2 className="relative font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em] max-w-2xl mx-auto">
                        Ready to simplify your compensation cycles?
                    </h2>
                    <p className="relative mt-5 text-zinc-400 text-[16px] md:text-lg max-w-xl mx-auto">
                        Get started with Zukvo Payroll today and experience error-free processing.
                    </p>
                    <div className="relative mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/signup"
                            className="inline-flex items-center gap-2 rounded-full bg-white text-zinc-900 px-8 py-4 text-[15px] font-medium hover:bg-zinc-100 transition-colors"
                        >
                            Try Payroll for free
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

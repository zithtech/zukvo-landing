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
    const [theme, setTheme] = useState("light");

    return (
        <section
            id="setup"
            data-testid="payroll-setup"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300 mb-6">
                            <Settings className="size-3.5" /> Setup
                        </div>
                        <h2 className="font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Schedules & Employee Pay Setup.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Define <strong>when</strong> payroll runs and <strong>who</strong> runs together using Pay Schedules and Groups. Then, use Employee Pay Setup to stamp a real number onto a real person, applying a salary structure at their specific CTC.
                        </p>
                        
                        <div className="mt-8 space-y-4">
                            {[
                                { i: Calendar, t: "Pay Schedules: payroll calendars", d: "Model real-world pay cycles precisely." },
                                { i: Users, t: "Pay Groups: buckets of employees", d: "Group employees seamlessly based on pay cycles." },
                                { i: Settings, t: "Employee Setup: lock in agreed salary", d: "Turn a template into a person's pay by locking in their CTC." },
                            ].map((b, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 size-4.5 text-violet-400 shrink-0" />
                                    <div>
                                        <span className="text-[14.5px] font-medium text-white block">{b.t}</span>
                                        <span className="text-[13.5px] text-zinc-400 block mt-0.5">{b.d}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="lg:col-span-7 relative zk-reveal">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <ImageSlot
                                src={setupDark}
                                srcLight={setupLight}
                                alt="Employee Pay Setup"
                                label="Employee Pay Setup"
                                chromeUrl="zukvo.app/payroll/setup/employee"
                                caption="Turn a template into a person's pay by locking in their CTC."
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                                theme={theme}
                                onThemeChange={setTheme}
                            />
                            <FloatingImage 
                                src={theme === "light" ? scheduleLight : scheduleDark} 
                                className="-bottom-8 -left-6 w-[55%] max-w-[320px] z-10" 
                                alt="Pay Schedules" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- STRUCTURES ---------------- */

function StructuresSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section
            id="structures"
            data-testid="payroll-structures"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-7 relative zk-reveal order-2 lg:order-1">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <ImageSlot
                                src={structureDark}
                                srcLight={structureLight}
                                alt="Salary Structures"
                                label="Salary Structures"
                                chromeUrl="zukvo.app/payroll/structures"
                                caption="A sentence: a meaningful, reusable arrangement of words."
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                                theme={theme}
                                onThemeChange={setTheme}
                            />
                            <FloatingImage 
                                src={theme === "light" ? componentLight : componentDark} 
                                className="-top-8 -right-6 w-[55%] max-w-[320px] z-10" 
                                alt="Salary Components" 
                            />
                        </div>
                    </div>
                    
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300 mb-6">
                            <Layers className="size-3.5" /> Structures
                        </div>
                        <h2 className="font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Components & Structures.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            <strong>Components</strong> are the library of building blocks with rules (taxable, PF/ESI). <strong>Structures</strong> are where components are assembled into reusable templates (grades). 
                            Define a grade once, and automate the maths for any CTC level.
                        </p>
                        
                        <div className="mt-8 space-y-4">
                            {[
                                { t: "Components: standardized pay elements", d: "The vocabulary: building blocks from which all salaries are constructed." },
                                { t: "Structures: templates for pay scales", d: "A meaningful, reusable arrangement of components." },
                            ].map((b, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 size-4.5 text-emerald-400 shrink-0" />
                                    <div>
                                        <span className="text-[14.5px] font-medium text-white block">{b.t}</span>
                                        <span className="text-[13.5px] text-zinc-400 block mt-0.5">{b.d}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- COMPLIANCE ---------------- */

function ComplianceSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section
            id="compliance"
            data-testid="payroll-compliance"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-300 mb-6">
                            <Landmark className="size-3.5" /> Compliance
                        </div>
                        <h2 className="font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Statutory rules & obligations.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            These aren't company-invented numbers — they're legal obligations. Centralize rates, thresholds, and rules prescribed by the government for Provident Fund (PF) and Employee State Insurance (ESI) so they're applied uniformly.
                        </p>
                        
                        <div className="mt-8 space-y-4">
                            {[
                                { t: "Provident Fund (PF): retirement savings", d: "Mandatory retirement-savings scheme mapped directly to basic salaries." },
                                { t: "ESI: medical/health insurance", d: "Ensure compliance with statutory medical health insurance rules." },
                                { t: "Professional Tax: regional contributions", d: "Easily manage state-specific professional tax rules across your organization." },
                            ].map((b, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 size-4.5 text-amber-400 shrink-0" />
                                    <div>
                                        <span className="text-[14.5px] font-medium text-white block">{b.t}</span>
                                        <span className="text-[13.5px] text-zinc-400 block mt-0.5">{b.d}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="lg:col-span-7 relative zk-reveal">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <ImageSlot
                                src={pfDark}
                                srcLight={pfLight}
                                alt="Statutory PF"
                                label="Statutory PF"
                                chromeUrl="zukvo.app/payroll/pf"
                                caption="Mandatory retirement-savings scheme."
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                                theme={theme}
                                onThemeChange={setTheme}
                            />
                            <FloatingImage 
                                src={theme === "light" ? esiLight : esiDark} 
                                className="-bottom-8 -left-6 w-[45%] max-w-[280px] z-10" 
                                alt="Statutory ESI" 
                            />
                            <FloatingImage 
                                src={theme === "light" ? ptLight : ptDark} 
                                className="-top-8 -right-6 w-[45%] max-w-[280px] z-10" 
                                alt="Professional Tax" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- PAYSLIPS & BANK ---------------- */

function PayslipsSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section
            id="payslips"
            data-testid="payroll-payslips"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-7 relative zk-reveal order-2 lg:order-1">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <ImageSlot
                                src={payslipDark}
                                srcLight={payslipLight}
                                alt="Payslip Template"
                                label="Payslip Template"
                                chromeUrl="zukvo.app/payroll/payslips"
                                caption="A branded, consistent, legal/financial document."
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                                theme={theme}
                                onThemeChange={setTheme}
                            />
                            <FloatingImage 
                                src={theme === "light" ? bankLight : bankDark} 
                                className="-bottom-8 -right-6 w-[55%] max-w-[320px] z-10" 
                                alt="Bank Settings" 
                            />
                        </div>
                    </div>
                    
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-rose-300 mb-6">
                            <FileText className="size-3.5" /> Payslips & Bank
                        </div>
                        <h2 className="font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            The outputs of payroll.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Control what the employee receives and how the money is sent. Standardize payslip appearance, control disclosures, and match your bank's exact format so disbursement files import cleanly.
                        </p>
                        
                        <div className="mt-8 space-y-4">
                            {[
                                { t: "Payslip Template: standard formatting", d: "Ensure brand consistency across all financial output documents." },
                                { t: "Bank Settings: disbursement formatting", d: "Define the source account and auto-generate clean disbursement formats." },
                            ].map((b, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 size-4.5 text-rose-400 shrink-0" />
                                    <div>
                                        <span className="text-[14.5px] font-medium text-white block">{b.t}</span>
                                        <span className="text-[13.5px] text-zinc-400 block mt-0.5">{b.d}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- RUN PAYROLL ---------------- */

function RunPayrollSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section
            id="run-payroll"
            data-testid="payroll-run"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300 mb-6">
                            <PlayCircle className="size-3.5" /> Run Payroll
                        </div>
                        <h2 className="font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Compute & Approve.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            <strong>Run Payroll</strong> is the event — generating the month's salaries in one action by pulling frozen salary breakdowns and applying real-world adjustments. <br /><br />
                            <strong>Approval Workflows</strong> enforce accountability via sign-off chains to prevent errors before money moves.
                        </p>
                        
                        <div className="mt-8 space-y-4">
                            {[
                                { t: "Produce a single reviewable register", d: "Produce the salary register for the month." },
                                { t: "Enforce multi-step sign-off chains", d: "Ordered list of approval steps for foolproof sign-offs." },
                            ].map((b, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 size-4.5 text-cyan-400 shrink-0" />
                                    <div>
                                        <span className="text-[14.5px] font-medium text-white block">{b.t}</span>
                                        <span className="text-[13.5px] text-zinc-400 block mt-0.5">{b.d}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="lg:col-span-7 relative zk-reveal">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <ImageSlot
                                src={runDark}
                                srcLight={runLight}
                                alt="Run Payroll"
                                label="Run Payroll"
                                chromeUrl="zukvo.app/payroll/run"
                                caption="Produce the salary register for the month."
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                                theme={theme}
                                onThemeChange={setTheme}
                            />
                            <FloatingImage 
                                src={theme === "light" ? approvalLight : approvalDark} 
                                className="-bottom-8 -left-6 w-[55%] max-w-[320px] z-10" 
                                alt="Approval Workflows" 
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

// ---------------- Helpers ----------------
function FloatingImage({ src, alt, className }) {
    return (
        <div className={`absolute rounded-xl ring-1 ring-white/[0.12] shadow-2xl bg-[#0E0E10] overflow-hidden group hover:z-50 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] ${className}`}>
            <img src={src} className="block w-full h-auto" alt={alt} />
        </div>
    );
}

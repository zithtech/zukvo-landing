import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    Users,
    Settings2,
    Sparkles,
    CheckCircle2,
    Moon,
    Sun,
    UserPlus,
    DoorOpen,
    ClipboardCheck,
    CreditCard,
    Mail,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import ImageSlot from "@/components/ImageSlot";

import allMembersDark from "@/assets/employee-onboarding-dark.png";
import allMembersLight from "@/assets/employee-onboarding-light.png";
import addEmployeeDark from "@/assets/create-employee-dark.png";
import addEmployeeLight from "@/assets/create-employee-light.png";
import memberDetailDark from "@/assets/employee-detailview-dark.png";
import memberDetailLight from "@/assets/employee-detailview-light.png";
import invitesDark from "@/assets/employee-invites-dark.png";
import invitesLight from "@/assets/employee-invites-light.png";
import createInviteDark from "@/assets/employee-create-invites-dark.png";
import createInviteLight from "@/assets/employee-create-invites-light.png";

const SUBMODULES = [
    { id: "onboarding", label: "Onboarding", icon: UserPlus },
    { id: "profiles", label: "Profiles", icon: Users },
    { id: "invites", label: "Invites", icon: Mail },
    { id: "exit-requests", label: "Exit Requests", icon: DoorOpen },
    { id: "clearance", label: "Clearance", icon: ClipboardCheck },
    { id: "configurations", label: "Configurations", icon: Settings2 },
];

export default function OnboardingExit() {
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
            data-testid="onboarding-exit-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink"
        >
            <SEO />
            <Nav />
            <Hero />
            <SubmoduleNav />
            
            <EmployeeOnboardingSection />
            <EmployeeProfilesSection />
            <InvitesSection />
            <ExitRequestsSection />
            <ClearanceSection />
            <SettingsSection />
            
            <FinalCTA />
            <Footer />
        </main>
    );
}

/* ---------------- 1. Hero ---------------- */
function Hero() {
    return (
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 zk-mesh">
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
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-600">
                            <DoorOpen className="size-3.5" />
                            Onboarding & Exit
                        </div>
                        <h1 className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink">
                            From Day One <br />
                            to the Final Day.
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            Self-serve employee invites, 4-step department clearances, automated FNF settlements, and deeply configurable policies — engineered for a flawless employee lifecycle.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/signup"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Onboarding & Exit
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            <a
                                href="#onboarding"
                                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-medium text-zinc-800 hover:border-zinc-400 transition-colors"
                            >
                                See every feature
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="zk-reveal grid grid-cols-2 gap-3">
                            {[
                                { k: "Invites", v: "Self-serve onboarding" },
                                { k: "4-Step", v: "Department clearance" },
                                { k: "F&F", v: "Locked until cleared" },
                                { k: "Policies", v: "Position-based rules" },
                            ].map((s, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-zinc-200 bg-white px-5 py-4"
                                >
                                    <div className="font-heading text-2xl text-zukvo-ink tracking-tight">
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

function SubmoduleNav() {
    return (
        <section className="relative bg-[#FAFAFA] border-y border-zinc-200/70">
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

/* ---------------- 2. Onboarding ---------------- */
function EmployeeOnboardingSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section id="onboarding" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <Users className="size-3.5" /> Team Directory
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            The master directory.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            A unified directory of all active members. Filter and search your entire team securely from one master view, and add new employees directly.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Centralized Roster</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Filter and search your entire team securely from one master view.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Manual Onboarding</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Add new employees using a comprehensive 6-part drawer mapping their details.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Security & Sync</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Every team member stays perfectly synced with your central employee directory.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-6 relative zk-reveal">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <ImageSlot
                                src={allMembersDark}
                                srcLight={allMembersLight}
                                alt="Onboarded Members Directory"
                                label="Team Directory"
                                chromeUrl="zukvo.app/work"
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                                theme={theme}
                                onThemeChange={setTheme}
                            />
                            <FloatingImage src={theme === "light" ? addEmployeeLight : addEmployeeDark} className="-bottom-8 -left-6 w-[55%] max-w-[320px] z-10" alt="Add Employee" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- 3. Employee Profiles ---------------- */
function EmployeeProfilesSection() {
    return (
        <section id="profiles" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <UserPlus className="size-3.5" /> Employee Profiles
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            Deep detail views.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            Click any employee for a rich, centralized detail drawer containing everything HR needs to know about that team member.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Personal & Employment</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Quickly access their personal information, role, and employment history.</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Assets & Documents</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Track assigned assets and securely store all their onboarding documents.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal order-2 lg:order-1">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <ImageSlot
                                src={memberDetailDark}
                                srcLight={memberDetailLight}
                                alt="Employee Profile"
                                label="Employee Profile"
                                chromeUrl="zukvo.app/work"
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- 4. Invites Dashboard ---------------- */
function InvitesSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section id="invites" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <Mail className="size-3.5" /> Invite Tracking
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            Self-serve onboarding.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            Monitor all pending invites on a dedicated dashboard. Generate secure public links for new hires, letting them fill out their own profile securely.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Track pending onboarding</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">See who has submitted their data and who is still pending directly from the dashboard.</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Zero manual data entry</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">HR simply cross-verifies the submission and clicks complete to officially onboard them.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <ImageSlot
                                src={invitesDark}
                                srcLight={invitesLight}
                                alt="Invites Dashboard"
                                label="Invites Dashboard"
                                chromeUrl="zukvo.app/work"
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                                theme={theme}
                                onThemeChange={setTheme}
                            />
                            
                            <FloatingImage src={theme === "light" ? createInviteLight : createInviteDark} className="-bottom-8 -right-6 w-[55%] max-w-[320px] z-10" alt="Create Invite" />
                            <StatusInviteWidget className="-top-4 -left-4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- 5. Exit Requests ---------------- */
function ExitRequestsSection() {
    return (
        <section id="exit-requests" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <DoorOpen className="size-3.5" /> Exit Requests
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            Smooth transitions, <br /> started right.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            Employees have a dedicated portal to initiate their exit. They select their reason, propose a last working day, and submit the request directly into the managerial workflow.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Centralized 'All Requests' dashboard</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Managers and HR monitor the queue of all resignations across the company.</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Dedicated manager approval interface</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Each resignation moves to an Approval Page where leaders can review, counter, or accept.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal order-2 lg:order-1">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <ImageSlot
                                src={null}
                                srcLight={null}
                                alt="My Requests & Approval Page Placeholder"
                                label="Exit Requests"
                                chromeUrl="zukvo.app/work"
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- 6. Clearance & FNF ---------------- */
function ClearanceSection() {
    return (
        <section id="clearance" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <ClipboardCheck className="size-3.5" /> Clearance & Settlement
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            4 pillars of clearance.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            Every departure requires clearance from IT, Finance, Admin, and HR. Full and Final (FNF) settlements are strictly gated until all clearances have been explicitly approved.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Department-specific checklists</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Ensure assets are returned, accounts reconciled, and access revoked.</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Structured Exit Interview</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Capture structured feedback from departing employees directly in the HR workflow.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <ImageSlot
                                src={null}
                                srcLight={null}
                                alt="4-Step Clearance & FNF Settlement Placeholder"
                                label="Clearance Dashboard"
                                chromeUrl="zukvo.app/work"
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- 7. Configurations ---------------- */
function SettingsSection() {
    return (
        <section id="configurations" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <Settings2 className="size-3.5" /> Configurations
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            Your policies, coded in.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            The entire lifecycle engine is configurable to match your company handbook, from probation lengths to multi-tier approvers.
                        </p>
                        
                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Configurable Notice Periods</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Set exit policies dynamically based on role, department, and probation status.</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Custom Approval Workflows</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Define multi-stage approvers and custom clearance checklists per department.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-6 relative zk-reveal order-2 lg:order-1">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <ImageSlot
                                src={null}
                                srcLight={null}
                                alt="Notice Periods & Engine Settings Placeholder"
                                label="Engine Settings"
                                chromeUrl="zukvo.app/work"
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

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
                        Start them right. Close them clean.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/signup"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-zukvo-500 hover:bg-zukvo-600 transition-colors text-white px-6 py-3.5 text-sm font-medium"
                        >
                            Get started with Onboarding & Exit
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

// ---------------- Helpers ----------------
function FloatingImage({ src, alt, className }) {
    return (
        <div className={`absolute rounded-xl ring-1 ring-white/[0.12] shadow-2xl bg-[#0E0E10] overflow-hidden group hover:z-50 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] ${className}`}>
            <img src={src} className="block w-full h-auto" alt={alt} />
        </div>
    );
}

function StatusInviteWidget({ className }) {
    return (
        <div className={`absolute z-30 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0E0E10] p-3 shadow-2xl backdrop-blur-md hover:z-50 transition-all duration-500 hover:scale-[1.03] ${className}`}>
            <div className="size-2.5 rounded-full bg-emerald-500" />
            <span className="text-[14px] font-medium text-slate-300">Invite Sent</span>
            <ArrowRight className="size-3.5 text-slate-500" />
            <span className="text-[14px] font-bold text-emerald-500">Submitted</span>
        </div>
    );
}

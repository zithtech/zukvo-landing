import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    Users,
    Briefcase,
    Settings2,
    Sparkles,
    CheckCircle2,
    Moon,
    Sun,
    LayoutDashboard,
    UserCircle,
    UserPlus,
    CheckSquare,
    Archive,
    Calendar,
    Globe,
    UploadCloud,
    SlidersHorizontal,
    Mail,
    FileText,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import ImageSlot from "@/components/ImageSlot";

import dashboardDark from "@/assets/openings-dashboard-dark.png";
import dashboardLight from "@/assets/openings-dashboard-light.png";
import allOpeningsDark from "@/assets/openings-dark.png";
import allOpeningsLight from "@/assets/openings-light.png";
import createOpeningDark from "@/assets/create-openings-dark.png";
import createOpeningLight from "@/assets/create-openings-light.png";
import openingDetailDark from "@/assets/openings-detailview-dark.png";
import openingDetailLight from "@/assets/openings-detailview-light.png";
import approvalsDark from "@/assets/openings-approvals-dark.png";
import approvalsLight from "@/assets/openings-approvals-light.png";
import candidateConfigDark from "@/assets/candidate-configuration-dark.png";
import candidateConfigLight from "@/assets/candidate-configuration-light.png";
import createCandidateDark from "@/assets/create-candidate-dark.png";
import createCandidateLight from "@/assets/create-candidate-light.png";
import candidateDetailDark from "@/assets/candidate-detail-view-dark.png";
import candidateDetailLight from "@/assets/candidate-detail-view-light.png";
import readyToCloseDark from "@/assets/opening-readytoclose-dark.png";
import readyToCloseLight from "@/assets/opening-readytoclose-light.png";
import archiveDark from "@/assets/openings-archive-dark.png";
import archiveLight from "@/assets/openings-archive-light.png";
import settingsDark from "@/assets/openings-settings-dark.png";
import settingsLight from "@/assets/openings-settings-light.png";
import hotspotOpeningsDark from "@/assets/hotspot-openings-dark.png";
import hotspotOpeningsLight from "@/assets/hotspot-openings-light.png";
import hotspotApplyDark from "@/assets/hotspot-apply-dark.png";
import hotspotApplyLight from "@/assets/hotspot-apply-light.png";

// Placeholder Constants
const SUBMODULES = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "openings", label: "Openings", icon: Briefcase },
    { id: "candidates", label: "Candidates", icon: UserCircle },
    { id: "approvals", label: "Approvals", icon: CheckSquare },
    { id: "settings", label: "Settings", icon: Settings2 },
];

export default function OpeningManagement() {
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
            data-testid="opening-management-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink"
        >
            <SEO />
            <Nav />
            <Hero />
            <SubmoduleNav />
            
            <DashboardSection />
            <OpeningsCreationSection />
            <OpeningDetailsApprovalSection />
            <HotspotSection />
            <CandidateCaptureSection />
            <CandidateEvaluationSection />
            <HiringClosingSection />
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
                            <Users className="size-3.5" />
                            Opening Management
                        </div>
                        <h1 className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink">
                            The fastest way <br />
                            to scale your team.
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            From the initial requisition to the final offer. Openings, candidates, structured evaluations, and approval workflows — engineered to be frictionless and Zai-assisted.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/signup"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Opening Management
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
                                { k: "AI Data", v: "Auto resume extraction" },
                                { k: "Calendars", v: "Integrated scheduling" },
                                { k: "Custom", v: "Role-specific rounds" },
                                { k: "Workflows", v: "Approval routing" },
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

/* ---------------- 2. Dashboard ---------------- */
function DashboardSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section id="dashboard" className="relative bg-[#0A0A0A] text-white">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <LayoutDashboard className="size-3.5" /> Dashboard
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            Your hiring pulse, <br /> at a glance.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            Start your day with a clear view of all active openings, total candidates in pipeline, pending approvals, and upcoming interviews across the entire workspace.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Workspace-wide metrics</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Track active pipelines health overview across all departments instantly.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Pending approval actions</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Clear visibility into pending approval actions for hiring managers.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Today's schedule</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">See today's scheduled interviews seamlessly integrated with your calendar.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-6 relative zk-reveal">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <ImageSlot theme={theme} onThemeChange={setTheme}
                                src={dashboardDark}
                                srcLight={dashboardLight}
                                alt="Dashboard View"
                                label="Dashboard View"
                                chromeUrl="zukvo.app/openings"
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

/* ---------------- 3. Openings & Creation ---------------- */
function OpeningsCreationSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section id="openings" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <Briefcase className="size-3.5" /> Openings & Creation
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            One source of truth for every open role.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            See every opening mapped out beautifully. When it's time to hire, creating a role is streamlined into a single, unified drawer. 
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">All Openings Directory</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Track the status of every role — drafted, pending approval, active, or closed. Filter by department, hiring manager, or location instantly.</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Create Drawer + Zai AI</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Open the creation drawer, input the basics, and let AI turn rough bullet points into a polished, market-ready job description.</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Structured Requirements</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Define structured requirements and responsibilities, saving hours of manual writing.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal order-2 lg:order-1">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <ImageSlot theme={theme} onThemeChange={setTheme}
                                src={createOpeningDark}
                                srcLight={createOpeningLight}
                                alt="Create Opening"
                                label="Create Opening"
                                chromeUrl="zukvo.app/openings"
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                            />
                            
                            <FloatingImage src={theme === 'light' ? allOpeningsLight : allOpeningsDark} className="-bottom-8 -left-6 w-[55%] max-w-[320px] z-10" alt="All Openings" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- 4. Opening Details & Approvals ---------------- */
function OpeningDetailsApprovalSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section id="approvals" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <CheckSquare className="size-3.5" /> Details & Approvals
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            Review, approve, and go live.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            Inside the detailed view of any opening, hiring managers can finalize details, set compensation bands, and submit the requisition to leadership for sign-off.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Dedicated Approvals</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Reviewers get a dedicated Approval Page to grant headcount before an opening can be posted.</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Internal & External Posting</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Once approved, post the opening Internally for team referrals, or Externally to your public careers page.</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Automated Tracking</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Track posting duration and metrics automatically right from the detailed view.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <ImageSlot theme={theme} onThemeChange={setTheme}
                                src={openingDetailDark}
                                srcLight={openingDetailLight}
                                alt="Opening Details"
                                label="Opening Details"
                                chromeUrl="zukvo.app/openings"
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                            />
                            
                            <FloatingImage src={theme === 'light' ? approvalsLight : approvalsDark} className="-bottom-8 -right-6 w-[55%] max-w-[320px] z-10" alt="Approvals" />
                            <StatusApprovalWidget className="-top-4 -left-4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- 5. Hotspot Internal Postings ---------------- */
function HotspotSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section id="hotspot" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <Globe className="size-3.5" /> Internal Postings
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            The Company Hotspot.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            When an opening is posted internally, it automatically appears on the Hotspot page. Every employee in your workspace can view the roles that are currently open.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Grow from within</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Employees can apply directly for internal moves or easily refer external candidates for the role.</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Real-time visibility</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Provide real-time visibility on open roles across the company, fueling your hiring pipeline.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal order-2 lg:order-1">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <ImageSlot theme={theme} onThemeChange={setTheme}
                                src={hotspotOpeningsDark}
                                srcLight={hotspotOpeningsLight}
                                alt="Hotspot Postings"
                                label="Hotspot Postings"
                                chromeUrl="zukvo.app/openings"
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                            />
                            
                            <FloatingImage src={theme === 'light' ? hotspotApplyLight : hotspotApplyDark} className="-bottom-8 -right-6 w-[55%] max-w-[320px] z-10" alt="Apply or Refer" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- 6. Candidate Configuration & Capture ---------------- */
function CandidateCaptureSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section id="candidates" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <UserCircle className="size-3.5" /> Pipeline & Capture
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            Configure the rounds. <br /> Capture the talent.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            Not all roles are hired the same way. Configure custom evaluation rounds (e.g., Technical Screen, Culture Fit) specific to the opening.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">AI-powered profile creation</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Add candidates by simply uploading their resume—our AI extracts all the details instantly to build their profile.</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Zero manual data entry</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Auto-populate candidate profiles seamlessly so they enter your custom pipeline immediately.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <ImageSlot theme={theme} onThemeChange={setTheme}
                                src={createCandidateDark}
                                srcLight={createCandidateLight}
                                alt="Create Candidate"
                                label="Create Candidate"
                                chromeUrl="zukvo.app/openings"
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                            />
                            
                            <FloatingImage src={theme === 'light' ? candidateConfigLight : candidateConfigDark} className="-bottom-8 -left-6 w-[55%] max-w-[320px] z-10" alt="Candidate Config" />
                            <SkillMatchWidget className="-top-4 -right-4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- 7. Candidate Evaluation ---------------- */
function CandidateEvaluationSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <UserPlus className="size-3.5" /> Candidate Evaluation
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            View, schedule, and score.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            Everything you need to interview and evaluate a candidate, directly from their rich profile view. A command center for every applicant.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Document Collection</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Collect documents manually or by sending a secure public link directly to the candidate.</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Direct integrations</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Book interviews with calendar integrations and send emails directly from the profile.</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Structured Scoring</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Evaluate marks specifically for configured rounds, keeping feedback organized and objective.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal order-2 lg:order-1">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <ImageSlot theme={theme} onThemeChange={setTheme}
                                src={candidateDetailDark}
                                srcLight={candidateDetailLight}
                                alt="Candidate Details"
                                label="Candidate Details"
                                chromeUrl="zukvo.app/openings"
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                            />
                            <InterviewRoundWidget className="-bottom-4 -left-4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- 8. Hiring, Closing & Archiving ---------------- */
function HiringClosingSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <Archive className="size-3.5" /> Hiring & Archiving
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            Close the loop.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            When an offer is accepted, the opening automatically shifts to the "Ready to Close" stage. Managers can review the final hire details before officially closing the requisition.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Securely stored history</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Once closed, the opening and all associated candidate data are securely moved to the Archive.</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Maintain clean workspace</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Keep historical records completely accessible for future reference while keeping your active board clear.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <ImageSlot theme={theme} onThemeChange={setTheme}
                                src={readyToCloseDark}
                                srcLight={readyToCloseLight}
                                alt="Ready To Close"
                                label="Ready To Close"
                                chromeUrl="zukvo.app/openings"
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                            />
                            
                            <FloatingImage src={theme === 'light' ? archiveLight : archiveDark} className="-bottom-8 -right-6 w-[55%] max-w-[320px] z-10" alt="Archive" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- 9. Settings & Workflows ---------------- */
function SettingsSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section id="settings" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <Settings2 className="size-3.5" /> Configurations
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            Built to match your rules.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            Admins maintain total control over the hiring engine. Set up strict approval workflows before an opening goes live, and manage the duration (days) for external job postings.
                        </p>
                    </div>
                    
                    <div className="lg:col-span-6 relative zk-reveal order-2 lg:order-1">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <ImageSlot theme={theme} onThemeChange={setTheme}
                                src={settingsDark}
                                srcLight={settingsLight}
                                alt="Settings"
                                label="Settings"
                                chromeUrl="zukvo.app/openings"
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
                        Stop guessing. Start hiring perfectly.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/signup"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-zukvo-500 hover:bg-zukvo-600 transition-colors text-white px-6 py-3.5 text-sm font-medium"
                        >
                            Get started with Opening Management
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

function StatusApprovalWidget({ className }) {
    return (
        <div className={`absolute z-30 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0E0E10] p-3 shadow-2xl backdrop-blur-md hover:z-50 transition-all duration-500 hover:scale-[1.03] ${className}`}>
            <div className="size-2.5 rounded-full bg-emerald-500" />
            <span className="text-[14px] font-medium text-slate-300">Pending Approval</span>
            <ArrowRight className="size-3.5 text-slate-500" />
            <span className="text-[14px] font-bold text-emerald-500">Approved</span>
        </div>
    );
}

function InterviewRoundWidget({ className }) {
    return (
        <div className={`absolute z-30 flex flex-col rounded-xl border border-white/10 bg-[#0E0E10] px-4 py-3 shadow-2xl backdrop-blur-md hover:z-50 transition-all duration-500 hover:scale-[1.03] ${className}`}>
            <span className="text-[15px] font-bold text-slate-100 tracking-wide">Technical Interview II</span>
            <span className="text-[13px] text-slate-400 mt-1">Aug 11, 2026 at 09:00:00 (Online)</span>
        </div>
    );
}

function SkillMatchWidget({ className }) {
    return (
        <div className={`absolute z-30 flex items-center justify-center rounded-xl border border-white/10 bg-[#0E0E10] p-3 shadow-2xl backdrop-blur-md hover:z-50 transition-all duration-500 hover:scale-[1.03] ${className}`}>
            <div className="relative flex size-14 items-center justify-center">
                <svg className="size-full -rotate-90 transform" viewBox="0 0 36 36">
                    <path
                        className="stroke-[#1C2028]"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        strokeWidth="4"
                    />
                    <path
                        className="stroke-blue-500"
                        strokeDasharray="64, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute flex items-center justify-center">
                    <span className="text-[15px] font-bold text-blue-500">64%</span>
                </div>
            </div>
        </div>
    );
}

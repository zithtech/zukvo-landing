import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    ShieldCheck,
    ListChecks,
    FlaskConical,
    Activity,
    Bug,
    Sparkles,
    CheckCircle2,
    Moon,
    Sun,
    Settings2,
    LayoutGrid,
    Search,
    PlayCircle,
    FolderTree,
    FolderGit2,
    CheckSquare,
    Link2,
    XCircle,
    Ban,
    X,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";

import allScopesDark from "@/assets/QA-scope-dark.png";
import allScopesLight from "@/assets/QA-scope-light.png";
import createScopeDark from "@/assets/QA-create-scope-dark.png";
import createScopeLight from "@/assets/QA-create-scope-light.png";
import scopeDetailDark from "@/assets/QA-scope-detailview-dark.png";
import scopeDetailLight from "@/assets/QA-scope-detailview-light.png";
// import scopeApprovalDark from "@/assets/QA-scope-approval-dark.png";
// import scopeApprovalLight from "@/assets/QA-scope-approval-light.png";
// import scopeSettingsDark from "@/assets/Qa-scope-settings-dark.png";
// import scopeSettingsLight from "@/assets/QA-scope-setting-light.png";

// import allTestCasesDark from "@/assets/Qa-testcase-dark.png";
// import allTestCasesLight from "@/assets/QA-testcase-light.png";
import createTestCaseDark from "@/assets/Qa-create-testcase-dark.png";
import createTestCaseLight from "@/assets/QA-create-testcase-light.png";
import multiModuleCreateDark from "@/assets/QA-create-moduletestcase-dark.png";
import multiModuleCreateLight from "@/assets/QA-create-moduletestcase-light.png";
import allModuleDetailDark from "@/assets/QA-all-module-testcase-dark.png";
import allModuleDetailLight from "@/assets/QA-all-module-testcase-light.png";

import allSuitesDark from "@/assets/QA-suite-dark.png";
import allSuitesLight from "@/assets/QA-suite-light.png";
import createSuiteDark from "@/assets/QA-create-suite-dark.png";
import createSuiteLight from "@/assets/QA-create-suite-light.png";
import suiteDetailDark from "@/assets/QA-detailview-linkedcase-dark.png";
import suiteDetailLight from "@/assets/QA-detailview-linkedcase-light.png";

// import allRunsDark from "@/assets/QA-runs-dark.png";
// import allRunsLight from "@/assets/QA-runs-light.png";
import createRunDark from "@/assets/QA-create-run-dark.png";
import createRunLight from "@/assets/QA-create-run-light.png";
import runDetailDark from "@/assets/QA-detailview-dark.png";
import runDetailLight from "@/assets/QA-detailview-light.png";

import bugListDark from "@/assets/QA-buglist-dark.png";
import bugListLight from "@/assets/QA-buglist-light.png";
import addToBugListDark from "@/assets/QA-addtobuglist-dark.png";
import addToBugListLight from "@/assets/QA-addtobuglist-light.png";
import createBugAsTicketDark from "@/assets/QA-create-bugastickets-dark.png";
import createBugAsTicketLight from "@/assets/QA-create-bugastickets-light.png";
import ticketBugListDark from "@/assets/ticket-buglist-dark.png";
import ticketBugListLight from "@/assets/ticket-buglist-light.png";

import submissionDark from "@/assets/QA-submission-dark.png";
import submissionLight from "@/assets/QA-submission-light.png";
import createSubmissionDark from "@/assets/QA-create-submission-dark.png";
import createSubmissionLight from "@/assets/QA-create-submission-light.png";
import viewSubmissionDark from "@/assets/QA-view submission-dark.png";
import viewSubmissionLight from "@/assets/QA-view submission-light.png";

const SUBMODULES = [
    { id: "scopes", label: "Scopes", icon: FolderTree },
    { id: "test-cases", label: "Test Cases", icon: ListChecks },
    { id: "suites", label: "Suites", icon: FolderGit2 },
    { id: "runs", label: "Runs", icon: PlayCircle },
    { id: "bug-list", label: "Bug List", icon: Bug },
    { id: "sign-off", label: "Sign-off", icon: CheckSquare },
];

const LightboxContext = React.createContext(null);

export default function QaWorkspace() {
    const [selectedImage, setSelectedImage] = useState(null);

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
        <LightboxContext.Provider value={setSelectedImage}>
            <main
                data-testid="qa-workspace-page"
                className="relative bg-[#FAFAFA] text-zukvo-ink"
            >
            <SEO />
            <Nav />
            <Hero />
            <SubmoduleNav />
            
            <ScopesSection />
            <TestCasesSection />
            <SuitesSection />
            <RunsSection />
            <BugListSection />
            <SignOffSection />
            
            <FinalCTA />
            <Footer />
            <Lightbox selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
        </main>
        </LightboxContext.Provider>
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
                            <ShieldCheck className="size-3.5" />
                            QA Workspace
                        </div>
                        <h1 className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink">
                            The ultimate <br />
                            testing engine.
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            Build comprehensive test scopes, generate AI-powered test cases, and execute runs seamlessly. Find bugs instantly, convert them into engineering tickets, and manage formal QA submissions and sign-offs.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/signup"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try QA Workspace
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            <a
                                href="#scopes"
                                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-medium text-zinc-800 hover:border-zinc-400 transition-colors"
                            >
                                See every feature
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-5 lg:pl-10">
                        <div className="zk-reveal relative mt-10 lg:mt-0">
                            {/* Line connecting the steps */}
                            <div className="absolute left-[23px] top-6 bottom-6 w-px bg-gradient-to-b from-zukvo-500/50 via-violet-500/50 to-transparent" />
                            
                            <div className="space-y-6 relative">
                                {[
                                    { step: "01", title: "Build Scopes", desc: "Define what needs testing.", color: "bg-zukvo-50 text-zukvo-600 border-zukvo-200" },
                                    { step: "02", title: "Write Cases", desc: "Draft steps manually or with AI.", color: "bg-violet-50 text-violet-600 border-violet-200" },
                                    { step: "03", title: "Create Suites", desc: "Group cases for execution.", color: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200" },
                                    { step: "04", title: "Execute Runs", desc: "Run suites and log passes/fails.", color: "bg-indigo-50 text-indigo-600 border-indigo-200" },
                                    { step: "05", title: "Route Tickets", desc: "Convert bugs into dev tickets.", color: "bg-blue-50 text-blue-600 border-blue-200" },
                                    { step: "06", title: "QA Sign-off", desc: "Manage formal test approvals.", color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
                                ].map((s, i) => (
                                    <div key={i} className="flex gap-5 relative group cursor-default">
                                        <div className={`relative z-10 flex size-[46px] shrink-0 items-center justify-center rounded-2xl border ${s.color} shadow-sm font-heading text-sm font-bold transition-all duration-300 group-hover:scale-110 group-hover:shadow-md bg-white`}>
                                            <div className={`absolute inset-0 rounded-2xl opacity-10 ${s.color.split(' ')[0]}`} />
                                            {s.step}
                                        </div>
                                        <div className="pt-2 flex-1">
                                            <div className="font-semibold text-[15.5px] text-zinc-900 group-hover:text-zukvo-600 transition-colors leading-none">{s.title}</div>
                                            <div className="text-[13.5px] text-zinc-500 mt-1.5 leading-relaxed">{s.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
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

/* ---------------- 2. Scopes ---------------- */
function ScopesSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section id="scopes" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <ShieldCheck className="size-3.5" /> Scopes
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            The complete test engine.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            A robust, structured approach to defining exactly what gets tested. Every scope is built using a comprehensive form that leaves zero room for ambiguity.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">The Master Directory</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">A centralized view of every testing scope. See priorities, owners, and current execution statuses instantly across your workspace.</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Comprehensive Scope Builder</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">The 'Create Scope' flow captures it all. Define everything from linked PRDs and Zai-enhanced definitions to strict Acceptance Criteria.</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Everything in one place</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Dive into a rich Detailed Scope View. See every linked test case, suite, run, and attachment mapped out cleanly before a single test.</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Track, approve, configure</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Route any scope to managers via the dedicated Approvals Page. Maintain total control over priorities, statuses, and custom environments.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            {/* Main central image */}
                            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A12] p-2 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)]">
                                <ThemeToggle theme={theme} setTheme={setTheme} />
                                <div aria-hidden className="pointer-events-none absolute inset-0">
                                    <div className="absolute top-0 right-0 h-full w-3/5 bg-gradient-to-bl from-zukvo-500/15 via-violet-500/5 to-transparent" />
                                </div>
                                <div className="relative rounded-xl overflow-hidden ring-1 ring-white/[0.12]">
                                    <ZoomableImage src={theme === 'light' ? scopeDetailLight : scopeDetailDark} className="block w-full h-auto" alt="Scope Details" />
                                </div>
                            </div>
                            
                            {/* Floating images */}
                            <FloatingImage src={theme === 'light' ? allScopesLight : allScopesDark} className="-bottom-6 -left-6 w-[48%] max-w-[280px] z-10" alt="All Scopes" />
                            <FloatingImage src={theme === 'light' ? createScopeLight : createScopeDark} className="-top-10 -right-6 w-[45%] max-w-[260px] z-10" alt="Create Scope" />
                            <ScopeReadinessWidget className="-top-4 -left-10" />
                            {/* <FloatingImage src={theme === 'light' ? scopeApprovalLight : scopeApprovalDark} className="-bottom-12 -right-2 w-[40%] max-w-[240px] z-20" alt="Scope Approvals" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- 3. Test Cases ---------------- */
function TestCasesSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section id="test-cases" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <ListChecks className="size-3.5" /> Test Cases
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            Write cases in seconds.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            Ditch the spreadsheets. Our dedicated creation drawers and AI tools let you write, map, and organize thousands of test cases frictionlessly.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Test Cases Dashboard</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Access the master directory of all test cases. Quickly search, filter, and view the status of every single case written across the workspace.</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Structured Generation Flow</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Easily draft new cases using our dedicated creation drawers. Every test case is explicitly mapped to steps, expected results, and parent modules.</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Scale your testing with AI</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Need to test complex workflows spanning multiple modules? Leverage our AI engine to generate explicit steps and expected results instantly.</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Deep visibility into every step</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Dive into the rich detail view for any module test case. Review the specific test steps, expected results, and module associations cleanly.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal order-2 lg:order-1">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A12] p-2 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)]">
                                <ThemeToggle theme={theme} setTheme={setTheme} />
                                <div aria-hidden className="pointer-events-none absolute inset-0">
                                    <div className="absolute top-0 right-0 h-full w-3/5 bg-gradient-to-bl from-zukvo-500/15 via-violet-500/5 to-transparent" />
                                </div>
                                <div className="relative rounded-xl overflow-hidden ring-1 ring-white/[0.12]">
                                    <ZoomableImage src={theme === 'light' ? allModuleDetailLight : allModuleDetailDark} className="block w-full h-auto" alt="Test Case Details" />
                                </div>
                            </div>
                            {/* <FloatingImage src={theme === 'light' ? allTestCasesLight : allTestCasesDark} className="-bottom-8 -left-6 w-[48%] max-w-[280px] z-10" alt="All Test Cases" /> */}
                            <FloatingImage src={theme === 'light' ? createTestCaseLight : createTestCaseDark} className="-top-8 -right-4 w-[30%] max-w-[180px] z-10" alt="Create Test Case" />
                            <FloatingImage src={theme === 'light' ? multiModuleCreateLight : multiModuleCreateDark} className="-bottom-10 -left-6 w-[30%] max-w-[180px] z-20" alt="Multi-Module Create" />
                            <CreateWithZaiWidget className="-top-2 -left-2" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- 4. Suites ---------------- */
function SuitesSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section id="suites" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <FlaskConical className="size-3.5" /> Suites
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            Grouped for execution.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            Once your test cases are defined, bundle them into executable suites for regression, smoke testing, and targeted feature validation.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Organize your testing cycles</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Group related test cases together into a formal Suite. Browse the 'All Suites' page to see every active test cycle and its overall status.</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Curate your cases</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Easily create a new suite and handpick exactly which test cases belong inside before triggering a test run.</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Everything bundled together</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Open the detailed view of any suite to see a complete directory of its linked cases, ready to be executed as a unified run.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A12] p-2 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)]">
                                <ThemeToggle theme={theme} setTheme={setTheme} />
                                <div aria-hidden className="pointer-events-none absolute inset-0">
                                    <div className="absolute top-0 right-0 h-full w-3/5 bg-gradient-to-bl from-zukvo-500/15 via-violet-500/5 to-transparent" />
                                </div>
                                <div className="relative rounded-xl overflow-hidden ring-1 ring-white/[0.12]">
                                    <ZoomableImage src={theme === 'light' ? suiteDetailLight : suiteDetailDark} className="block w-full h-auto" alt="Suite Details" />
                                </div>
                            </div>
                            
                            <FloatingImage src={theme === 'light' ? allSuitesLight : allSuitesDark} className="-bottom-8 -left-6 w-[48%] max-w-[280px] z-10" alt="All Suites" />
                            <FloatingImage src={theme === 'light' ? createSuiteLight : createSuiteDark} className="-top-8 -right-4 w-[30%] max-w-[180px] z-10" alt="Create Suite" />
                            
                            <StatusChipsWidget className="-bottom-4 -right-4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- 5. Runs ---------------- */
function RunsSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section id="runs" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <Activity className="size-3.5" /> Runs
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            Execute with precision.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            It's time to test. Generate runs from your suites, assign testers, and start marching through every case step by step.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Track testing progress</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Monitor all active and completed test runs. See exactly how many cases have passed, failed, or are currently blocked across every cycle.</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Trigger executions instantly</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Generate new test runs directly from your suites. Assign specific testers, set environments, and initialize the execution cycle.</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Execute case by case</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Inside the detailed view of a single run, testers execute cases step by step, explicitly marking them as Pass, Fail, or Blocked.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal order-2 lg:order-1">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A12] p-2 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)]">
                                <ThemeToggle theme={theme} setTheme={setTheme} />
                                <div aria-hidden className="pointer-events-none absolute inset-0">
                                    <div className="absolute top-0 right-0 h-full w-3/5 bg-gradient-to-bl from-zukvo-500/15 via-violet-500/5 to-transparent" />
                                </div>
                                <div className="relative rounded-xl overflow-hidden ring-1 ring-white/[0.12]">
                                    <ZoomableImage src={theme === 'light' ? runDetailLight : runDetailDark} className="block w-full h-auto" alt="Execution View" />
                                </div>
                            </div>
                            {/* <FloatingImage src={theme === 'light' ? allRunsLight : allRunsDark} className="-bottom-8 -left-6 w-[48%] max-w-[280px] z-10" alt="All Runs" /> */}
                            <FloatingImage src={theme === 'light' ? createRunLight : createRunDark} className="-top-8 -right-4 w-[30%] max-w-[180px] z-10" alt="Create Run" />
                            <ExecuteButtonWidget className="-bottom-2 -left-2" />
                            
                            <ExecuteRunInfoWidget className="-bottom-6 -right-6" />
                            <StatsChipsWidget className="-top-4 -left-6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- 6. Bug List ---------------- */
function BugListSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section id="bug-list" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal">
                        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300 mb-6">
                            <Bug className="size-3.5" /> Bug List & Ticketing
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            Capture chaos. Ship solutions.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            When testing uncovers an issue, log it instantly. Organize failures, verify bugs, and seamlessly convert them into engineering tickets.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Log failures instantly</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">When a test case fails during a run, testers can immediately log the bug. Capture exactly what went wrong, attach screenshots, and route it.</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Organized by module</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Maintain dedicated folders per module to keep failures perfectly organized and accessible before they become engineering tickets.</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Push to engineering</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">When a bug is verified, convert it into an engineering ticket manually, or let our AI tools draft the ticket title and steps to reproduce.</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Centralized issue tracker</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Every converted bug appears in the unified Buglist View, clearly tagged and assigned. Developers can see precisely what needs fixing.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A12] p-2 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)]">
                                <ThemeToggle theme={theme} setTheme={setTheme} />
                                <div aria-hidden className="pointer-events-none absolute inset-0">
                                    <div className="absolute top-0 right-0 h-full w-3/5 bg-gradient-to-bl from-zukvo-500/15 via-violet-500/5 to-transparent" />
                                </div>
                                <div className="relative rounded-xl overflow-hidden ring-1 ring-white/[0.12]">
                                    <ZoomableImage src={theme === 'light' ? ticketBugListLight : ticketBugListDark} className="block w-full h-auto" alt="Ticket Buglist" />
                                </div>
                            </div>
                            
                            <FloatingImage src={theme === 'light' ? addToBugListLight : addToBugListDark} className="-bottom-8 -left-6 w-[48%] max-w-[280px] z-10" alt="Bug Capture" />
                            <FloatingImage src={theme === 'light' ? createBugAsTicketLight : createBugAsTicketDark} className="-top-8 -right-6 w-[45%] max-w-[260px] z-10" alt="Ticket Conversion" />
                            {/* <FloatingImage src={theme === 'light' ? bugListLight : bugListDark} className="-bottom-12 -right-2 w-[40%] max-w-[240px] z-20" alt="Bug Directory" /> */}
                            
                            <BugListWidget className="-top-4 -left-8" />
                            <TicketLinkWidget className="-top-2 -right-6" />
                            <AddFailedCasesWidget className="-bottom-4 -right-4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ---------------- Helpers ----------------
function ThemeToggle({ theme, setTheme }) {
    return (
        <div className="absolute top-4 right-8 z-20 flex items-center p-0.5 rounded-full bg-white/5 border border-white/10 shadow-sm backdrop-blur-md">
            <div 
                className="absolute inset-y-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-gradient-to-r from-zukvo-500 to-violet-500 shadow-sm transition-transform duration-300 ease-out"
                style={{ transform: theme === 'light' ? 'translateX(100%)' : 'translateX(0)' }}
            />
            <button onClick={() => setTheme("dark")} className={`relative z-10 p-1.5 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
                <Moon className="size-3.5" />
            </button>
            <button onClick={() => setTheme("light")} className={`relative z-10 p-1.5 rounded-full transition-colors duration-300 ${theme === 'light' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
                <Sun className="size-3.5" />
            </button>
        </div>
    );
}
function FloatingImage({ src, alt, className }) {
    const setSelectedImage = React.useContext(LightboxContext);
    return (
        <div 
            className={`absolute rounded-xl ring-1 ring-white/[0.12] shadow-2xl bg-[#0E0E10] overflow-hidden group hover:z-50 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] cursor-pointer ${className}`}
            onClick={() => setSelectedImage?.(src)}
        >
            <img src={src} className="block w-full h-auto" alt={alt} />
        </div>
    );
}

function ZoomableImage({ src, alt, className }) {
    const setSelectedImage = React.useContext(LightboxContext);
    return (
        <img 
            src={src} 
            className={`cursor-pointer hover:opacity-95 transition-opacity ${className}`} 
            alt={alt} 
            onClick={() => setSelectedImage?.(src)} 
        />
    );
}

function Lightbox({ selectedImage, onClose }) {
    if (!selectedImage) return null;
    return (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8" 
            onClick={onClose}
        >
            <button 
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors" 
                onClick={onClose}
            >
                <X className="size-8" />
            </button>
            <img 
                src={selectedImage} 
                className="max-w-[85vw] max-h-[85vh] object-contain rounded-xl shadow-[0_0_100px_rgba(0,0,0,0.5)]" 
                onClick={(e) => e.stopPropagation()} 
                alt="Expanded View" 
            />
        </div>
    );
}

function FloatingWidget({ className, children }) {
    return (
        <div className={`absolute rounded-xl border border-white/10 bg-[#0A0A12] shadow-2xl z-30 flex items-center p-3 gap-3 backdrop-blur-md hover:z-50 transition-all duration-500 hover:scale-[1.03] ${className}`}>
            {children}
        </div>
    );
}

function ScopeReadinessWidget({ className }) {
    return (
        <FloatingWidget className={`px-4 py-3 ${className}`}>
            <div className="relative flex items-center justify-center size-[48px] shrink-0">
                <svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 36 36">
                    <path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                    <path className="text-blue-500" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
                <span className="text-[12px] font-bold text-white relative z-10">100%</span>
            </div>
            <div>
                <div className="text-[14px] font-bold text-white tracking-wide">Scope readiness</div>
                <div className="text-[12px] font-medium text-zinc-400 mt-0.5 tracking-wide">12/12 sections complete</div>
            </div>
        </FloatingWidget>
    );
}

function CreateWithZaiWidget({ className }) {
    return (
        <div className={`absolute z-30 rounded-lg border border-blue-500/30 bg-[#0F172A]/80 px-3.5 py-1.5 flex items-center gap-2 shadow-xl backdrop-blur-md hover:z-50 transition-all duration-500 hover:scale-[1.03] ${className}`}>
            <Sparkles className="size-4 text-blue-400" />
            <span className="text-[14px] font-semibold text-blue-200">Create with Zai</span>
        </div>
    );
}

function BugListWidget({ className }) {
    return (
        <FloatingWidget className={`px-4 py-3 gap-3.5 ${className}`}>
            <div className="flex items-center justify-center size-9 shrink-0">
                <Bug className="size-6 text-white stroke-[1.5]" />
            </div>
            <div>
                <div className="text-[16px] font-bold text-white leading-tight tracking-wide">Bug List</div>
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">QA SPACE</div>
            </div>
        </FloatingWidget>
    );
}

function TicketLinkWidget({ className }) {
    return (
        <div className={`absolute z-30 flex flex-col gap-1.5 hover:z-50 transition-all duration-500 hover:scale-[1.03] ${className}`}>
            <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest pl-1">TICKET</div>
            <div className="rounded-lg border border-white/10 bg-[#0A0A12] px-3.5 py-2 flex items-center gap-2 shadow-xl backdrop-blur-md">
                <Link2 className="size-4 text-zinc-400" />
                <span className="text-[14px] font-mono font-medium text-zinc-300 tracking-wider">002-1302</span>
            </div>
        </div>
    );
}

function ExecuteButtonWidget({ className }) {
    return (
        <div className={`absolute z-30 rounded-lg bg-blue-500 px-4 py-2.5 flex items-center gap-2.5 shadow-xl shadow-blue-500/20 hover:z-50 transition-all duration-500 hover:scale-[1.03] ${className}`}>
            <PlayCircle className="size-5 text-white stroke-[2.5]" />
            <span className="text-[15px] font-bold text-white tracking-wide">Execute</span>
        </div>
    );
}

function StatusChipsWidget({ className }) {
    return (
        <div className={`absolute z-30 flex items-center gap-2 bg-[#0A0A12] border border-white/10 rounded-xl p-1.5 shadow-2xl backdrop-blur-md hover:z-50 transition-all duration-500 hover:scale-[1.03] ${className}`}>
            <div className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-zinc-300">
                <CheckCircle2 className="size-3.5" /> <span className="text-[13px] font-medium tracking-wide">Pass</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-zinc-300">
                <XCircle className="size-3.5" /> <span className="text-[13px] font-medium tracking-wide">Fail</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-zinc-300">
                <Ban className="size-3.5" /> <span className="text-[13px] font-medium tracking-wide">Blocked</span>
            </div>
        </div>
    );
}

function StatsChipsWidget({ className }) {
    return (
        <div className={`absolute z-30 flex items-center gap-2 hover:z-50 transition-all duration-500 hover:scale-[1.03] ${className}`}>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0A0A12] px-3 py-2 shadow-2xl backdrop-blur-md">
                <div className="size-2 rounded-full bg-emerald-500" />
                <span className="text-[13px] font-medium text-white tracking-wide">Passed</span>
                <span className="flex size-5 items-center justify-center rounded-full bg-white/5 text-[11px] font-semibold text-zinc-400">0</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0A0A12] px-3 py-2 shadow-2xl backdrop-blur-md">
                <div className="size-2 rounded-full bg-rose-500" />
                <span className="text-[13px] font-medium text-white tracking-wide">Failed</span>
                <span className="flex size-5 items-center justify-center rounded-full bg-white/5 text-[11px] font-semibold text-zinc-400">0</span>
            </div>
        </div>
    );
}

function ApprovedWidget({ className }) {
    return (
        <div className={`absolute z-30 flex items-center gap-2 rounded-full border border-emerald-900/50 bg-[#022c22]/80 px-4 py-1.5 shadow-xl backdrop-blur-md hover:z-50 transition-all duration-500 hover:scale-[1.03] ${className}`}>
            <div className="size-2 rounded-full bg-emerald-500" />
            <span className="text-[14px] font-bold text-emerald-500 tracking-wide">Approved</span>
        </div>
    );
}

function ExecuteRunInfoWidget({ className }) {
    return (
        <div className={`absolute z-30 rounded-xl border border-blue-100 bg-[#f8fafc] p-4 shadow-xl hover:z-50 transition-all duration-500 hover:scale-[1.03] ${className}`}>
            <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">THIS RUN WILL EXECUTE</div>
            <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-slate-900">22</span>
                <span className="text-[13px] text-slate-500 tracking-wide">cases from <span className="font-semibold text-slate-900">Login & Logout - End-to-End Testing</span></span>
            </div>
        </div>
    );
}

function AddFailedCasesWidget({ className }) {
    return (
        <div className={`absolute z-30 flex items-center gap-3 rounded-xl border border-white/10 bg-[#0A0A12] p-3 shadow-2xl backdrop-blur-md hover:z-50 transition-all duration-500 hover:scale-[1.03] ${className}`}>
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-rose-950/40 border border-rose-900/30">
                <Bug className="size-5 text-rose-500" />
            </div>
            <div>
                <div className="text-[15px] font-bold text-white tracking-wide">Add failed cases to a bug list</div>
                <div className="text-[12px] text-zinc-400 mt-0.5 tracking-wide">Each selected case becomes a bug —</div>
            </div>
        </div>
    );
}

/* ---------------- 7. Sign-Off & Approvals ---------------- */
function SignOffSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section id="sign-off" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <CheckSquare className="size-3.5" /> Sign-off & Approval
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            Formal reporting & QA sign-off.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            Finalize your testing cycles with complete confidence. Move seamlessly from the last executed run through formal QA reviews and stakeholder sign-offs, keeping all data fully versioned and transparent.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Formal reporting & Sign-off</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">The tester submits formal reporting of completed testing. Submissions move through clear statuses: Submitted, Retesting, Ready for Sign-off, QA Signed Off, and finally Approved.</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">The "Send Back" workflow</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Returns the submission to QA with a required reason. It asks for more work—it is not a rejection of the testing, and nothing that was already recorded is deleted.</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-zukvo-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Retesting & Version History</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">QA updates the submission based on the reviewer's reason, links any new retest runs, and submits again. This creates a new version, so the earlier figures remain in the history.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal order-2 lg:order-1">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A12] p-2 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)]">
                                <ThemeToggle theme={theme} setTheme={setTheme} />
                                <div aria-hidden className="pointer-events-none absolute inset-0">
                                    <div className="absolute top-0 right-0 h-full w-3/5 bg-gradient-to-bl from-zukvo-500/15 via-violet-500/5 to-transparent" />
                                </div>
                                <div className="relative rounded-xl overflow-hidden ring-1 ring-white/[0.12]">
                                    <ZoomableImage src={theme === 'light' ? viewSubmissionLight : viewSubmissionDark} className="block w-full h-auto" alt="View Submission" />
                                </div>
                            </div>
                            
                            <FloatingImage src={theme === 'light' ? createSubmissionLight : createSubmissionDark} className="-bottom-8 -left-6 w-[48%] max-w-[280px] z-10" alt="Create Submission" />
                            <FloatingImage src={theme === 'light' ? submissionLight : submissionDark} className="-top-8 -right-6 w-[45%] max-w-[260px] z-10" alt="Submissions List" />
                            
                            <ApprovedWidget className="-top-2 -left-2" />
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
                        End-to-end quality assurance.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/signup"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-zukvo-500 hover:bg-zukvo-600 transition-colors text-white px-6 py-3.5 text-sm font-medium"
                        >
                            Start testing with QA Workspace
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


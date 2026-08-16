import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, PenTool, LayoutTemplate, Layers, Moon, Sun, Sparkles, FileText, CheckCircle2, X } from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";

const LightboxContext = React.createContext(null);

import categoriesLight from "@/assets/docsuite-categories-light.png";
import categoriesDark from "@/assets/docsuite-categories-dark.png";
import templateBuilderLight from "@/assets/doc-suite-templatebuilder-light.png";
import templateBuilderDark from "@/assets/Doc-suite-templatebuilder-dark.png";
import createTemplateLight from "@/assets/docsuite-create-template-light.png";
import createTemplateDark from "@/assets/docsuite-create-template-dark.png";
import createTemplateAiLight from "@/assets/docsuite-create-template-ai-light.png";
import createTemplateAiDark from "@/assets/docsuite-create-template-ai-dark.png";
import templateViewLight from "@/assets/docsuite-template-view-light.png";

import formatsDark from "@/assets/docsuite-customformats-dark.png";
import formatsLight from "@/assets/docsuite-customformats-light.png";
import createFormatLight from "@/assets/docsuite-create-formate-light.png";
import composerDark from "@/assets/docsuite-letter-composer-dark.png";
import composerLight from "@/assets/docsuite-letter-composer-light.png";
import createComposerDark from "@/assets/docsuite-create-letter-composer-dark.png";
import createComposerLight from "@/assets/docsuite-create-letter-composer-light.png";
import generatedDark from "@/assets/docsuite-generatedrecords-dark.png";
import generatedLight from "@/assets/docsuite-generatedrecords-light.png";

const SUBMODULES = [
    { id: "template-engine", label: "Template Engine", icon: LayoutTemplate },
    { id: "formats-engine", label: "Formats Engine", icon: Layers },
    { id: "letter-generation", label: "Letter Generation", icon: FileText },
];

export default function DocSuite() {
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
            { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
        );
        targets.forEach((t) => obs.observe(t));
        return () => obs.disconnect();
    }, []);

    return (
        <LightboxContext.Provider value={setSelectedImage}>
        <main className="min-h-screen bg-white selection:bg-zukvo-500/20 selection:text-zukvo-900 font-sans overflow-x-hidden">
            <SEO
                title="Doc Suite | Zukvo"
                description="Design intelligent templates and seamlessly generate perfect letters on demand."
            />
            <Nav />

            {/* 1. Hero Section */}
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
                            <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50/50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600">
                                <FileText className="size-3.5" />
                                Intelligent Documents
                            </div>
                            <h1 className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink">
                                Letters & docs built <br className="hidden md:block" /> for scale.
                            </h1>
                            <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                                Define master categories, design smart templates with placeholders, and generate perfect letters and documentation on demand. 
                            </p>
                            <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                                <a
                                    href="/signup"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                                >
                                    Try Doc Suite
                                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                                </a>
                                <a
                                    href="#template-engine"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-medium text-zinc-800 hover:border-zinc-400 transition-colors"
                                >
                                    See every feature
                                </a>
                            </div>
                        </div>
                        <div className="lg:col-span-5">
                            <div className="zk-reveal grid grid-cols-2 gap-3">
                                {[
                                    { k: "Smart", v: "Variables & placeholders" },
                                    { k: "AI", v: "Powered by Zai" },
                                    { k: "Formats", v: "Custom margins & styles" },
                                    { k: "Unlimited", v: "Letter generations" },
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

            {/* Sticky Subnav */}
            <div className="sticky top-16 z-40 w-full bg-white/80 backdrop-blur-xl border-y border-zinc-200/80 shadow-sm hidden md:block">
                <div className="mx-auto max-w-7xl px-6 md:px-10 h-14 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 mr-2 shrink-0">
                            In this module
                        </span>
                        {SUBMODULES.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-[12.5px] text-zinc-700 hover:border-blue-500/40 hover:text-blue-600 transition-colors"
                            >
                                <s.icon className="size-3.5" />
                                {s.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sections */}
            <TemplateEngineSection />
            <FormatsEngineSection />
            <LetterGenerationSection />
            <FinalCTA />
            
            <Footer />
            <Lightbox selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
        </main>
        </LightboxContext.Provider>
    );
}

// ---------------- Helpers ----------------
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

function CreateWithZaiWidget({ className }) {
    return (
        <div className={`absolute z-30 rounded-lg border border-blue-500/30 bg-[#0F172A]/80 px-3.5 py-1.5 flex items-center gap-2 shadow-xl backdrop-blur-md hover:z-50 transition-all duration-500 hover:scale-[1.03] ${className}`}>
            <Sparkles className="size-4 text-blue-400" />
            <span className="text-[14px] font-semibold text-blue-200">Create with Zai</span>
        </div>
    );
}


function FormatIntegrityWidget({ className }) {
    return (
        <div className={`absolute z-30 flex items-center gap-3 rounded-xl border border-white/10 bg-[#0A0A12] p-3 shadow-2xl backdrop-blur-md hover:z-50 transition-all duration-500 hover:scale-[1.03] ${className}`}>
            <div className="relative flex size-10 shrink-0 items-center justify-center">
                <svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 36 36">
                    <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="3"
                    />
                    <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3"
                        strokeDasharray="100, 100"
                    />
                </svg>
                <Layers className="size-4 text-emerald-500" />
            </div>
            <div>
                <div className="text-[15px] font-bold text-white leading-tight tracking-wide">Format Applied</div>
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">100% SYNC</div>
            </div>
        </div>
    );
}

function StatusChipsWidget({ className }) {
    return (
        <div className={`absolute z-30 flex items-center gap-2 bg-[#0A0A12] border border-white/10 rounded-xl p-1.5 shadow-2xl backdrop-blur-md hover:z-50 transition-all duration-500 hover:scale-[1.03] ${className}`}>
            <div className="flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-emerald-400">
                <CheckCircle2 className="size-3.5" /> <span className="text-[13px] font-medium tracking-wide">Generated</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-zinc-300">
                <FileText className="size-3.5" /> <span className="text-[13px] font-medium tracking-wide">Draft</span>
            </div>
        </div>
    );
}

/* ---------------- 1. Template Engine ---------------- */
function TemplateEngineSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section id="template-engine" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <LayoutTemplate className="size-3.5" /> Template Engine
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            Design once, generate infinitely.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            Define letter types and build out dynamic templates leveraging variables, multiple layout formats, and complete version control.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-blue-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Organize your letters</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Start by defining master categories like Offer Letters or Exit Notices so the team always finds what they need.</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-blue-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Master Directory</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Access all templates, filter by category, and track versions from one central view.</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-blue-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Manual & AI Creation</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Create templates manually with precise layout fields, or leverage Zai AI to instantly draft the perfect template structure.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A12] p-2 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)]">
                                <div aria-hidden className="pointer-events-none absolute inset-0">
                                    <div className="absolute top-0 right-0 h-full w-3/5 bg-gradient-to-bl from-blue-500/15 via-violet-500/5 to-transparent" />
                                </div>
                                <div className="relative rounded-xl overflow-hidden ring-1 ring-white/[0.12]">
                                    <div className="absolute top-2 right-2 z-20 flex items-center p-0.5 rounded-full bg-black/40 border border-white/10 shadow-inner">
                                        <div 
                                            className="absolute inset-y-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-gradient-to-r from-blue-500 to-violet-500 shadow-sm transition-transform duration-300 ease-out"
                                            style={{ transform: theme === 'light' ? 'translateX(100%)' : 'translateX(0)' }}
                                        />
                                        <button onClick={() => setTheme("dark")} className={`relative z-10 p-1.5 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
                                            <Moon className="size-3.5" />
                                        </button>
                                        <button onClick={() => setTheme("light")} className={`relative z-10 p-1.5 rounded-full transition-colors duration-300 ${theme === 'light' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
                                            <Sun className="size-3.5" />
                                        </button>
                                    </div>
                                    <ZoomableImage src={theme === 'light' ? templateBuilderLight : templateBuilderDark} className="block w-full h-auto" alt="Template Builder" />
                                </div>
                            </div>
                            
                            <FloatingImage src={theme === 'light' ? categoriesLight : categoriesDark} className="-bottom-6 -left-6 w-[30%] max-w-[180px] z-10" alt="Categories" />
                            <FloatingImage src={theme === 'light' ? createTemplateLight : createTemplateDark} className="-bottom-6 -right-6 w-[32%] max-w-[190px] z-20" alt="Manual Template Generation" />
                            <FloatingImage src={theme === 'light' ? createTemplateAiLight : createTemplateAiDark} className="-top-8 -right-4 w-[25%] max-w-[160px] z-10" alt="AI Template Generation" />
                            <CreateWithZaiWidget className="top-10 -right-10" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

/* ---------------- 2. Formats Engine ---------------- */
function FormatsEngineSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section id="formats-engine" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <Layers className="size-3.5" /> Formats Engine
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            Standardize your structure.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            Manage all your core structures from the Formats page. View the universally applied formats that your templates will inherit for consistency across the organization.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-blue-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Global aesthetic control</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Ensure every document follows your brand guidelines by centralizing core formatting logic.</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-blue-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Design your letterhead</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Build out custom headers, footers, typography sets, and margins to apply instantly while building any template.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal order-2 lg:order-1">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A12] p-2 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)]">
                                <div aria-hidden className="pointer-events-none absolute inset-0">
                                    <div className="absolute top-0 right-0 h-full w-3/5 bg-gradient-to-bl from-blue-500/15 via-violet-500/5 to-transparent" />
                                </div>
                                <div className="relative rounded-xl overflow-hidden ring-1 ring-white/[0.12]">
                                    <div className="absolute top-2 right-2 z-20 flex items-center p-0.5 rounded-full bg-black/40 border border-white/10 shadow-inner">
                                        <div 
                                            className="absolute inset-y-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-gradient-to-r from-blue-500 to-violet-500 shadow-sm transition-transform duration-300 ease-out"
                                            style={{ transform: theme === 'light' ? 'translateX(100%)' : 'translateX(0)' }}
                                        />
                                        <button onClick={() => setTheme("dark")} className={`relative z-10 p-1.5 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
                                            <Moon className="size-3.5" />
                                        </button>
                                        <button onClick={() => setTheme("light")} className={`relative z-10 p-1.5 rounded-full transition-colors duration-300 ${theme === 'light' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
                                            <Sun className="size-3.5" />
                                        </button>
                                    </div>
                                    <ZoomableImage src={theme === 'light' ? formatsLight : formatsDark} className="block w-full h-auto" alt="All Formats Dashboard" />
                                </div>
                            </div>
                            
                            {/* We only have one createFormat image in DocSuite, so we use it for both themes */}
                            <FloatingImage src={createFormatLight} className="-bottom-8 -left-6 w-[40%] max-w-[220px] z-10" alt="Create Format Layout" />
                            <FormatIntegrityWidget className="-top-4 -left-4" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

/* ---------------- 3. Letter Generation ---------------- */
function LetterGenerationSection() {
    const [theme, setTheme] = useState("light");

    return (
        <section id="letter-generation" className="relative bg-[#0A0A0A] text-white border-t border-white/5">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 zk-reveal">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300 mb-6">
                            <FileText className="size-3.5" /> Letter Generation
                        </div>
                        <h2 className="font-heading font-medium text-4xl md:text-[42px] tracking-[-0.03em] text-white leading-tight">
                            From template to final draft.
                        </h2>
                        <p className="mt-5 text-[15px] text-zinc-400 leading-relaxed max-w-lg">
                            Access the main composer dashboard to see all in-progress letter drafts. Pick a template, start drafting, and resume work whenever you're ready.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-blue-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Data Entry</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Select a template and enter values for the smart placeholders. Preview the exact layout side-by-side.</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-blue-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Live Preview</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Visualize your document updating in real-time before choosing to save the draft or generate the final PDF.</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 size-4.5 text-blue-400 shrink-0" />
                                <div>
                                    <span className="text-[14.5px] font-medium text-white block">Generated Records</span>
                                    <span className="text-[13.5px] text-zinc-400 block mt-0.5">Generated letters are immutable and automatically saved to a searchable, permanent archive.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative zk-reveal">
                        <div className="relative mx-auto w-full max-w-[600px] px-8 py-16">
                            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A12] p-2 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)]">
                                <div aria-hidden className="pointer-events-none absolute inset-0">
                                    <div className="absolute top-0 right-0 h-full w-3/5 bg-gradient-to-bl from-blue-500/15 via-violet-500/5 to-transparent" />
                                </div>
                                <div className="relative rounded-xl overflow-hidden ring-1 ring-white/[0.12]">
                                    <div className="absolute top-2 right-2 z-20 flex items-center p-0.5 rounded-full bg-black/40 border border-white/10 shadow-inner">
                                        <div 
                                            className="absolute inset-y-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-gradient-to-r from-blue-500 to-violet-500 shadow-sm transition-transform duration-300 ease-out"
                                            style={{ transform: theme === 'light' ? 'translateX(100%)' : 'translateX(0)' }}
                                        />
                                        <button onClick={() => setTheme("dark")} className={`relative z-10 p-1.5 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
                                            <Moon className="size-3.5" />
                                        </button>
                                        <button onClick={() => setTheme("light")} className={`relative z-10 p-1.5 rounded-full transition-colors duration-300 ${theme === 'light' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
                                            <Sun className="size-3.5" />
                                        </button>
                                    </div>
                                    <ZoomableImage src={theme === 'light' ? composerLight : composerDark} className="block w-full h-auto" alt="Letter Composer Dashboard" />
                                </div>
                            </div>
                            
                            <FloatingImage src={theme === 'light' ? createComposerLight : createComposerDark} className="-bottom-8 -left-6 w-[35%] max-w-[200px] z-10" alt="Compose Letter Entry" />
                            <FloatingImage src={theme === 'light' ? generatedLight : generatedDark} className="-top-8 -right-6 w-[35%] max-w-[200px] z-10" alt="Generated Letters Archive" />
                            <FloatingImage src={templateViewLight} className="-bottom-8 -right-4 w-[35%] max-w-[200px] z-20" alt="Live Preview" />
                            <StatusChipsWidget className="-top-2 -left-2" />
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
                        Stop typing. Start generating.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/signup"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-zukvo-500 hover:bg-zukvo-600 transition-colors text-white px-6 py-3.5 text-sm font-medium"
                        >
                            Get started with Doc Suite
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

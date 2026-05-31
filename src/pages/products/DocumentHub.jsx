import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    FolderTree,
    FilePlus2,
    Wand2,
    Type,
    Sparkles,
    Globe2,
    Lock,
    Share2,
    Clock,
    History,
    Star,
    Trash2,
    Link2,
    CheckCircle2,
    PanelLeftClose,
    LayoutPanelLeft,
    Heading1,
    List,
    Quote,
    Code2,
    AlertTriangle,
    Folder,
    File as FileIcon,
    ChevronRight,
    Plus,
    UndoDot,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import ImageSlot from "@/components/ImageSlot";

import documentImg from "@/assets/document.png";
import docViewImg from "@/assets/doc-view.png";
import docManualCreationImg from "@/assets/doc-manual-creation.png";
import docZaiCreationImg from "@/assets/doc-zai-creation.png";
import docPublicLinkImg from "@/assets/doc-public-link.png";
import docVersionHistoryImg from "@/assets/doc-version-history.png";
import docLinkTicketImg from "@/assets/doc-link-ticket.png";

const HUB_MAIN_IMG = documentImg;
const HUB_EDITOR_IMG = docViewImg;
const HUB_MANUAL_CREATION_IMG = docManualCreationImg;
const HUB_ZAI_CREATION_IMG = docZaiCreationImg;
const HUB_PUBLIC_LINK_IMG = docPublicLinkImg;
const HUB_VERSION_HISTORY_IMG = docVersionHistoryImg;
const HUB_LINK_TICKET_IMG = docLinkTicketImg;

const SUBMODULES = [
    { id: "hubs", label: "Hubs", icon: FolderTree },
    { id: "creation", label: "Creation", icon: FilePlus2 },
    { id: "editor", label: "Editor", icon: LayoutPanelLeft },
    { id: "zai-enhance", label: "Zai Enhance", icon: Wand2 },
    { id: "sharing", label: "Sharing", icon: Share2 },
    { id: "history", label: "History", icon: History },
    { id: "starred-trash", label: "Starred & Trash", icon: Star },
    { id: "ticket-linking", label: "Ticket Linking", icon: Link2 },
];

export default function DocumentHub() {
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
            data-testid="document-hub-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink overflow-x-clip"
        >
            <Nav />
            <Hero />
            <SubmoduleNav />
            <MainView />
            <Anatomy />
            <CreationTypes />
            <EditorSection />
            <ZaiEnhance />
            <SharingSection />
            <HistorySection />
            <StarredTrash />
            <TicketLinking />
            <FinalCTA />
            <Footer />
        </main>
    );
}

/* ---------------- HERO ---------------- */

function Hero() {
    return (
        <section
            data-testid="dh-hero"
            className="relative pt-32 md:pt-40 pb-16 md:pb-24 zk-mesh"
        >
            <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_75%)] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                <div className="zk-reveal">
                    <Link
                        to="/products"
                        data-testid="dh-breadcrumb"
                        className="inline-flex items-center gap-1.5 text-[12px] text-zinc-500 hover:text-zukvo-600"
                    >
                        <ArrowLeft className="size-3.5" />
                        All products
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-violet-600">
                            <FolderTree className="size-3.5" />
                            Document Hub
                        </div>
                        <h1
                            data-testid="dh-headline"
                            className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink"
                        >
                            One hub. Every doc. <br />
                            <span className="text-zinc-500">Always linked.</span>
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            Spin up dedicated Hubs, group folders, write rich docs and
                            sub-documents, and share publicly or privately. Auto-saved, versioned,
                            and linked to the tickets that produced them.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/signup"
                                data-testid="dh-cta-primary"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Document Hub
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            <a
                                href="#hubs"
                                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-medium text-zinc-800 hover:border-zinc-400 transition-colors"
                            >
                                See every feature
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="zk-reveal grid grid-cols-2 gap-3">
                            {[
                                { k: "Auto-save", v: "Never lose a keystroke" },
                                { k: "Versioned", v: "Restore any change" },
                                { k: "Public · Private", v: "Granular sharing" },
                                { k: "Zai-powered", v: "Inline AI enhance" },
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
            data-testid="dh-submodule-nav"
            className="relative bg-[#FAFAFA] border-y border-zinc-200/70"
        >
            <div className="mx-auto max-w-7xl px-6 md:px-10 py-5">
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 mr-2 shrink-0">
                        In this module
                    </span>
                    {SUBMODULES.map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            data-testid={`dh-pill-${s.id}`}
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

/* ---------------- MAIN VIEW ---------------- */

function MainView() {
    return (
        <section id="hubs" data-testid="dh-main-view" className="relative bg-[#0A0A0A] text-white">
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Hubs · the home view
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Every doc, accounted for.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            See every Hub at a glance — total docs, project link, contributors,
                            visibility, and timestamps. Filter by project, ticket, owner or date.
                            Star the ones that matter most.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                "Hubs · folders · documents · sub-docs",
                                "Project + ticket attribution per row",
                                "Public / Private visibility flag",
                                "Star, search, filter, restore",
                            ].map((b) => (
                                <li
                                    key={b}
                                    className="flex items-center gap-2 text-[14px] text-zinc-300"
                                >
                                    <CheckCircle2 className="size-4 text-zukvo-400" /> {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-7">
                        <ImageSlot
                            testid="dh-image-main"
                            src={HUB_MAIN_IMG}
                            alt="Document Hub main view"
                            label="Document Hub — main view"
                            chromeUrl="zukvo.app/work/document-hub"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — Document Hub main listing."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- ANATOMY (Hubs > Folders > Docs > Sub-docs) ---------------- */

function Anatomy() {
    return (
        <section
            data-testid="dh-anatomy"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Anatomy
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Structure that scales with the work.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Create as many Hubs as you need. Inside every Hub, organize Folders,
                        Documents, and Sub-documents — without losing the link back to the project
                        or ticket they belong to.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 space-y-3">
                        {[
                            {
                                i: FolderTree,
                                t: "Hubs",
                                s: "Top-level workspaces — one per team, project or knowledge area.",
                            },
                            {
                                i: Folder,
                                t: "Folders",
                                s: "Group related docs inside a Hub. Nest as deep as you need.",
                            },
                            {
                                i: FileIcon,
                                t: "Documents",
                                s: "Rich text docs with blocks, attachments and linked tickets.",
                            },
                            {
                                i: FilePlus2,
                                t: "Sub-documents",
                                s: "Children of a doc — for sections, appendices and deep dives.",
                            },
                        ].map((x, i) => (
                            <div
                                key={i}
                                className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5 flex items-start gap-4"
                            >
                                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-zukvo-500/10 text-zukvo-300 border border-zukvo-500/20 shrink-0">
                                    <x.i className="size-5" />
                                </span>
                                <div>
                                    <div className="font-heading text-lg text-white tracking-tight">
                                        {x.t}
                                    </div>
                                    <div className="mt-1 text-[13.5px] text-zinc-400 leading-relaxed">
                                        {x.s}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-7">
                        <TreePreview />
                    </div>
                </div>
            </div>
        </section>
    );
}

function TreePreview() {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5 font-mono text-[13px]">
            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
                Release Kit · VDrive
            </div>
            <ul className="space-y-1 text-zinc-300">
                <TreeNode icon={FolderTree} label="Release Kit (Hub)" depth={0} accent />
                <TreeNode icon={Folder} label="Mobile Release" depth={1} />
                <TreeNode icon={FileIcon} label="Play Store Requirements" depth={2} active />
                <TreeNode icon={FileIcon} label="↳ Account Setup" depth={3} muted sub />
                <TreeNode icon={FileIcon} label="↳ Legal & Documentation" depth={3} muted sub />
                <TreeNode icon={FileIcon} label="Apple Store Requirements" depth={2} />
                <TreeNode icon={Folder} label="Onboarding" depth={1} />
                <TreeNode icon={FileIcon} label="Welcome guide" depth={2} />
                <TreeNode icon={FileIcon} label="FAQ — public" depth={2} pub />
            </ul>
        </div>
    );
}

function TreeNode({ icon: Icon, label, depth = 0, accent, active, muted, sub, pub }) {
    return (
        <li
            className={`flex items-center gap-2 py-1 ${
                active ? "text-white" : muted ? "text-zinc-500" : "text-zinc-300"
            }`}
            style={{ paddingLeft: `${depth * 18}px` }}
        >
            <Icon
                className={`size-4 ${
                    accent
                        ? "text-zukvo-300"
                        : active
                          ? "text-zukvo-300"
                          : sub
                            ? "text-zinc-600"
                            : "text-zinc-400"
                }`}
            />
            <span className="truncate">{label}</span>
            {active && (
                <span className="ml-auto text-[10px] uppercase tracking-[0.18em] rounded-full border border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300 px-2 py-0.5">
                    Open
                </span>
            )}
            {pub && (
                <span className="ml-auto text-[10px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                    Public
                </span>
            )}
        </li>
    );
}

/* ---------------- CREATION TYPES ---------------- */

function CreationTypes() {
    return (
        <section
            id="creation"
            data-testid="dh-creation-types"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Two ways to create
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Manual. Or with Zai.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Spin up a Hub by hand for full control, or describe what you need and let
                        Zai scaffold the structure, folders and starter docs in one click.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* Manual */}
                    <div
                        data-testid="dh-creation-manual"
                        className="relative rounded-2xl border border-white/10 bg-[#0E0E10] p-7 overflow-hidden"
                    >
                        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-zukvo-500/10 text-zukvo-400 border border-zukvo-500/20">
                            <Type className="size-5" />
                        </span>
                        <div className="mt-5 text-[11px] uppercase tracking-[0.22em] text-zukvo-300">
                            Manual creation
                        </div>
                        <h3 className="mt-2 font-heading font-medium text-2xl tracking-[-0.02em]">
                            Set up the structure your way.
                        </h3>
                        <p className="mt-3 text-[14px] text-zinc-400 leading-relaxed">
                            Name the Hub, pick a project, set visibility, add folders and docs as
                            you go.
                        </p>
                        <div className="mt-6 rounded-xl border border-white/10 bg-[#101014] p-4 space-y-2 text-[12.5px]">
                            {[
                                ["Hub name", "Release Kit"],
                                ["Project", "VDrive · 001"],
                                ["Visibility", "Private"],
                                ["Owner", "ithyaz"],
                            ].map((r, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between rounded-md bg-white/[0.02] border border-white/5 px-3 py-2"
                                >
                                    <span className="text-zinc-500 text-[10.5px] uppercase tracking-[0.2em]">
                                        {r[0]}
                                    </span>
                                    <span className="text-zinc-200">{r[1]}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Create with Zai */}
                    <div
                        data-testid="dh-creation-zai"
                        className="relative rounded-2xl zk-trace-border p-7 overflow-hidden"
                    >
                        <div className="relative">
                            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-zukvo-500/10 text-zukvo-400 border border-zukvo-500/20">
                                <Wand2 className="size-5" />
                            </span>
                            <div className="mt-5 text-[11px] uppercase tracking-[0.22em] text-zukvo-300">
                                Create with Zai
                            </div>
                            <h3 className="mt-2 font-heading font-medium text-2xl tracking-[-0.02em]">
                                Describe it. Zai scaffolds it.
                            </h3>
                            <p className="mt-3 text-[14px] text-zinc-400 leading-relaxed">
                                One line, Zai builds the Hub, suggested folders and starter
                                documents — ready for you to extend.
                            </p>
                            <div className="mt-6 rounded-xl border border-zukvo-500/30 bg-[#0B0B12] p-4 shadow-[inset_0_0_60px_-20px_rgba(99,102,241,0.35)]">
                                <div className="flex items-center gap-2 text-[11px] text-zukvo-300 uppercase tracking-[0.2em]">
                                    <Sparkles className="size-3.5" />
                                    Prompt
                                </div>
                                <div className="mt-2.5 rounded-md bg-white/5 border border-white/10 px-3 py-2 text-[13px] text-zinc-300">
                                    "Create a hub for our mobile release with Play Store and Apple
                                    Store requirements"
                                </div>
                                <div className="mt-3 grid grid-cols-2 gap-2 text-[12.5px]">
                                    {[
                                        ["Hub", "Mobile Release"],
                                        ["Folders", "2 generated"],
                                        ["Documents", "5 starter"],
                                        ["Linked", "Project · TKT"],
                                    ].map((r, i) => (
                                        <div
                                            key={i}
                                            className="rounded-md border border-white/10 bg-white/5 px-3 py-2"
                                        >
                                            <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                                                {r[0]}
                                            </div>
                                            <div className="mt-0.5 text-zinc-100">{r[1]}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image slots — creation page + creation types */}
                <div className="zk-reveal mt-10 grid md:grid-cols-2 gap-5">
                    <ImageSlot
                        testid="dh-image-creation-page"
                        src={HUB_MANUAL_CREATION_IMG}
                        alt="Hub manual creation page"
                        label="Hub creation page"
                        chromeUrl="zukvo.app/work/document-hub/new"
                        aspect="auto"
                        objectFit="contain"
                        caption="Live screenshot — manual hub creation form."
                    />
                    <ImageSlot
                        testid="dh-image-creation-types"
                        src={HUB_ZAI_CREATION_IMG}
                        alt="AI creation mode"
                        label="Manual vs Create-with-Zai"
                        chromeUrl="zukvo.app/work/document-hub/new?mode=zai"
                        aspect="auto"
                        objectFit="contain"
                        caption="Live screenshot — AI-powered hub creation prompt."
                    />
                </div>
            </div>
        </section>
    );
}

/* ---------------- EDITOR ---------------- */

function EditorSection() {
    return (
        <section
            id="editor"
            data-testid="dh-editor"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5 lg:order-2">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            The editor
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            A modern writing surface — fast & expressive.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Block-based editor with rich text, headings, lists, callouts, code,
                            tables and embeds. Drag to reorder, slash to insert, and Zai is one
                            click away on every selection.
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-2.5">
                            {[
                                { i: Heading1, t: "Headings & blocks" },
                                { i: List, t: "Bulleted / numbered" },
                                { i: Quote, t: "Callouts & quotes" },
                                { i: Code2, t: "Code & embeds" },
                                { i: AlertTriangle, t: "Inline warnings" },
                                { i: PanelLeftClose, t: "Foldable sidebar" },
                            ].map((b, i) => (
                                <div
                                    key={i}
                                    className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-[12.5px] text-zinc-300 inline-flex items-center gap-2"
                                >
                                    <b.i className="size-3.5 text-zukvo-400" />
                                    {b.t}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-7 lg:order-1">
                        <ImageSlot
                            testid="dh-image-editor"
                            src={HUB_EDITOR_IMG}
                            alt="Document Hub editor"
                            label="Document editor"
                            chromeUrl="zukvo.app/work/document-hub/play-store"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[800px] mx-auto"
                            caption="Live screenshot — block-based document editor with sidebar."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- ZAI ENHANCE ---------------- */

function ZaiEnhance() {
    return (
        <section
            id="zai-enhance"
            data-testid="dh-zai-enhance"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Inline Zai enhance
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Polish, shorten, expand — without leaving the line.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Highlight any block and Zai offers contextual actions: improve writing,
                            simplify, summarize, translate, or extend. Apply, undo, or refine — all
                            inline.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                "Improve · simplify · expand",
                                "Tone shifts: formal / casual / direct",
                                "Translate any block",
                                "One-click undo on every change",
                            ].map((b) => (
                                <li
                                    key={b}
                                    className="flex items-center gap-2 text-[14px] text-zinc-300"
                                >
                                    <CheckCircle2 className="size-4 text-zukvo-400" /> {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-7">
                        <EnhanceMock />
                    </div>
                </div>
            </div>
        </section>
    );
}

function EnhanceMock() {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-6">
            <div className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-500">
                Selection · Account Setup
            </div>
            <div className="mt-3 rounded-lg border border-zukvo-500/40 bg-zukvo-500/5 p-4 text-[13.5px] leading-relaxed text-zinc-200">
                Create a Google Play Console account with a business domain email — not a personal
                Gmail. Costs $25 one-time. Identity verification takes about 48 hours.
            </div>
            <div className="mt-3 inline-flex items-center gap-1 rounded-full border border-zukvo-500/30 bg-[#0B0B12] p-1 shadow-[0_10px_30px_-10px_rgba(99,102,241,0.55)]">
                {[
                    { i: Sparkles, t: "Improve" },
                    { i: List, t: "Bullet" },
                    { i: Quote, t: "Summarize" },
                    { i: Code2, t: "Translate" },
                ].map((b, i) => (
                    <button
                        key={i}
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11.5px] transition-colors ${
                            i === 0
                                ? "bg-zukvo-500 text-white"
                                : "text-zinc-400 hover:text-white"
                        }`}
                    >
                        <b.i className="size-3.5" />
                        {b.t}
                    </button>
                ))}
            </div>
            <div className="mt-5 rounded-lg border border-emerald-400/30 bg-emerald-500/5 p-4 text-[13.5px] leading-relaxed text-zinc-200">
                <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-300 mb-1.5">
                    Zai · improved
                </div>
                Set up a Google Play Console account using a business domain email (personal Gmail
                accounts aren't supported). Pay the one-time $25 fee, then complete identity
                verification — typically resolved within 48 hours.
            </div>
            <div className="mt-3 flex items-center gap-2">
                <button className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors text-white px-3.5 py-1.5 text-[12px] font-medium">
                    <CheckCircle2 className="size-3.5" /> Apply
                </button>
                <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors text-white px-3.5 py-1.5 text-[12px] font-medium">
                    <UndoDot className="size-3.5" /> Undo
                </button>
            </div>
        </div>
    );
}

/* ---------------- SHARING ---------------- */

function SharingSection() {
    const [tab, setTab] = useState("public");
    return (
        <section
            id="sharing"
            data-testid="dh-sharing"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Sharing
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Share a doc — or the whole Hub.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Granular access controls at every level. Keep things private to the team,
                        invite specific clients, or generate a public link for anyone with the URL.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 space-y-4">
                        <div className="inline-flex rounded-full border border-white/10 bg-[#101014] p-1 text-[11.5px]">
                            <button
                                data-testid="dh-share-tab-public"
                                onClick={() => setTab("public")}
                                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-colors ${
                                    tab === "public"
                                        ? "bg-emerald-500 text-white"
                                        : "text-zinc-400 hover:text-white"
                                }`}
                            >
                                <Globe2 className="size-3.5" /> Public access
                            </button>
                            <button
                                data-testid="dh-share-tab-private"
                                onClick={() => setTab("private")}
                                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-colors ${
                                    tab === "private"
                                        ? "bg-zukvo-500 text-white"
                                        : "text-zinc-400 hover:text-white"
                                }`}
                            >
                                <Lock className="size-3.5" /> Private access
                            </button>
                        </div>

                        {tab === "public" ? <PublicCard /> : <PrivateCard />}

                        <div className="grid grid-cols-2 gap-3">
                            <SubFeature
                                icon={Share2}
                                t="Share specific docs"
                                s="Per-doc visibility — even within a private Hub."
                            />
                            <SubFeature
                                icon={FolderTree}
                                t="Share entire Hubs"
                                s="One link, everything inside it inherits the rule."
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-5">
                        <ImageSlot
                            testid="dh-image-public-share"
                            src={HUB_PUBLIC_LINK_IMG}
                            alt="Public share configuration"
                            label="Public share configuration"
                            chromeUrl="zukvo.app/work/document-hub/share"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[480px] mx-auto"
                            caption="Live screenshot — sharing controls and public link generator."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function PublicCard() {
    return (
        <div className="rounded-2xl border border-emerald-400/30 bg-[#0B0F0D] p-5 shadow-[inset_0_0_60px_-20px_rgba(16,185,129,0.25)]">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-emerald-300">
                <Globe2 className="size-3.5" /> Public link
            </div>
            <div className="mt-3 rounded-md bg-white/5 border border-white/10 px-3 py-2 font-mono text-[12.5px] text-zinc-200 truncate">
                zukvo.app/d/release-kit?p=public
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[12.5px]">
                {[
                    ["Anyone with link", "View"],
                    ["Index in search", "No"],
                    ["Allow comments", "Yes"],
                    ["Expiry", "30 days"],
                ].map((r, i) => (
                    <div
                        key={i}
                        className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2"
                    >
                        <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                            {r[0]}
                        </div>
                        <div className="mt-0.5 text-zinc-100">{r[1]}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function PrivateCard() {
    return (
        <div className="rounded-2xl border border-zukvo-500/30 bg-[#0B0B12] p-5 shadow-[inset_0_0_60px_-20px_rgba(99,102,241,0.35)]">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-zukvo-300">
                <Lock className="size-3.5" /> Private — invitation only
            </div>
            <div className="mt-4 space-y-2">
                {[
                    ["ithyaz", "Owner", "violet"],
                    ["Bharathi", "Editor", "indigo"],
                    ["Subhalakshmi", "Editor", "indigo"],
                    ["Divya D", "Viewer", "zinc"],
                ].map((r, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.02] px-3 py-2"
                    >
                        <span className="text-[12.5px] text-zinc-200">{r[0]}</span>
                        <span
                            className={`text-[10px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 ${
                                r[2] === "violet"
                                    ? "border-violet-400/30 bg-violet-500/10 text-violet-300"
                                    : r[2] === "indigo"
                                      ? "border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300"
                                      : "border-white/10 bg-white/5 text-zinc-400"
                            }`}
                        >
                            {r[1]}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SubFeature({ icon: Icon, t, s }) {
    return (
        <div className="rounded-xl border border-white/10 bg-[#0E0E10] p-4">
            <span className="inline-flex size-8 items-center justify-center rounded-lg bg-zukvo-500/10 text-zukvo-300 border border-zukvo-500/20">
                <Icon className="size-4" />
            </span>
            <div className="mt-3 text-[13px] text-white font-medium">{t}</div>
            <div className="text-[11.5px] text-zinc-500 leading-relaxed mt-0.5">{s}</div>
        </div>
    );
}

/* ---------------- HISTORY / VERSIONS ---------------- */

function HistorySection() {
    return (
        <section
            id="history"
            data-testid="dh-history"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 lg:sticky lg:top-28">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Auto-save · History
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Every keystroke. Every version.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Auto-save runs as you type. The full edit history is one click away —
                            preview any version, compare changes, and restore in a tap if something
                            went sideways.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Clock, t: "Real-time auto-save" },
                                { i: History, t: "Versioned change log" },
                                { i: UndoDot, t: "Restore any prior version" },
                                { i: CheckCircle2, t: "Author + timestamp on every change" },
                            ].map((b, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2.5 text-[14px] text-zinc-300"
                                >
                                    <b.i className="size-4 text-zukvo-400" /> {b.t}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-7 space-y-5">
                        <HistoryMock />
                        <ImageSlot
                            testid="dh-image-history"
                            src={HUB_VERSION_HISTORY_IMG}
                            alt="Version history panel"
                            label="Version history panel"
                            chromeUrl="zukvo.app/work/document-hub/history"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[480px] mx-auto"
                            caption="Live screenshot — document version history and rollback panel."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function HistoryMock() {
    const versions = [
        { v: "v18", t: "2m ago", a: "ithyaz", c: "Improved Account Setup wording (Zai)", current: true },
        { v: "v17", t: "12m ago", a: "Bharathi", c: "Added DUNS warning callout" },
        { v: "v16", t: "3h ago", a: "Subhalakshmi", c: "Restructured Legal section" },
        { v: "v15", t: "Yesterday", a: "ithyaz", c: "Initial Play Store outline" },
    ];
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
            <div className="flex items-center justify-between text-[11px] text-zinc-500">
                <span className="uppercase tracking-[0.2em]">Play Store Requirements</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-300">
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                    Saved
                </span>
            </div>
            <div className="mt-4 space-y-2">
                {versions.map((v, i) => (
                    <div
                        key={i}
                        className={`rounded-xl border ${
                            v.current
                                ? "border-zukvo-500/40 bg-zukvo-500/5"
                                : "border-white/10 bg-white/[0.02]"
                        } px-4 py-3 flex items-center gap-4`}
                    >
                        <div className="font-mono text-[12px] text-zinc-400 w-12 shrink-0">
                            {v.v}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-[13px] text-zinc-200 truncate">{v.c}</div>
                            <div className="text-[11px] text-zinc-500 mt-0.5">
                                {v.a} · {v.t}
                            </div>
                        </div>
                        {v.current ? (
                            <span className="text-[10px] uppercase tracking-[0.18em] rounded-full border border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300 px-2 py-0.5">
                                Current
                            </span>
                        ) : (
                            <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors text-white px-2.5 py-1 text-[11px]">
                                <UndoDot className="size-3" /> Restore
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ---------------- STARRED & TRASH ---------------- */

function StarredTrash() {
    return (
        <section
            id="starred-trash"
            data-testid="dh-starred-trash"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="zk-reveal rounded-2xl border border-white/10 bg-[#0E0E10] p-7">
                        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-300 border border-amber-400/30">
                            <Star className="size-5" />
                        </span>
                        <div className="mt-5 text-[11px] uppercase tracking-[0.22em] text-amber-300">
                            Starred
                        </div>
                        <h3 className="mt-2 font-heading text-2xl text-white tracking-tight">
                            Pin the Hubs that matter.
                        </h3>
                        <p className="mt-2 text-[14px] text-zinc-400 leading-relaxed">
                            Star important Hubs to surface them at the top of your sidebar — fast
                            access, every time.
                        </p>
                        <div className="mt-5 space-y-2 text-[12.5px]">
                            {["Release Kit", "Onboarding", "Brand voice"].map((s, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2.5 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2"
                                >
                                    <Star className="size-3.5 text-amber-300 fill-amber-300" />
                                    <span className="text-zinc-200">{s}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="zk-reveal rounded-2xl border border-white/10 bg-[#0E0E10] p-7">
                        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-300 border border-rose-400/30">
                            <Trash2 className="size-5" />
                        </span>
                        <div className="mt-5 text-[11px] uppercase tracking-[0.22em] text-rose-300">
                            Trash · Restore
                        </div>
                        <h3 className="mt-2 font-heading text-2xl text-white tracking-tight">
                            Mistakes are reversible.
                        </h3>
                        <p className="mt-2 text-[14px] text-zinc-400 leading-relaxed">
                            Deleted Hubs land in Trash. Restore in one click — folders, docs, links
                            and history all come back intact.
                        </p>
                        <div className="mt-5 space-y-2 text-[12.5px]">
                            {[
                                ["Old onboarding kit", "2d ago"],
                                ["Q1 retro notes", "5d ago"],
                                ["Draft RFP", "12d ago"],
                            ].map((r, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.02] px-3 py-2"
                                >
                                    <span className="text-zinc-300">{r[0]}</span>
                                    <span className="text-[11px] text-zinc-500">{r[1]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- TICKET LINKING ---------------- */

function TicketLinking() {
    return (
        <section
            id="ticket-linking"
            data-testid="dh-ticket-linking"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Ticket linking
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Docs that know the work they belong to.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Link tickets to any document so reviewers, QA and clients can trace
                            scope, decisions and outcomes back to the work that produced them.
                        </p>
                        <div className="mt-6 space-y-2">
                            {[
                                ["TKT-002-0731", "Socket implementation"],
                                ["TKT-002-0707", "Ticket module documentation"],
                                ["TKT-002-0627", "Document hub · public share"],
                            ].map((r, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2"
                                >
                                    <Link2 className="size-3.5 text-zukvo-400 shrink-0" />
                                    <span className="font-mono text-[11.5px] text-zukvo-300">
                                        {r[0]}
                                    </span>
                                    <span className="text-[12.5px] text-zinc-300 truncate">
                                        {r[1]}
                                    </span>
                                    <ChevronRight className="size-3.5 text-zinc-500 ml-auto" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <ImageSlot
                            testid="dh-image-ticket-linking"
                            src={HUB_LINK_TICKET_IMG}
                            alt="Ticket linking inside a Hub"
                            label="Ticket linking inside a Hub"
                            chromeUrl="zukvo.app/work/document-hub/release-kit"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[480px] mx-auto"
                            caption="Live screenshot — links panel showing associated project tickets."
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
        <section data-testid="dh-final-cta" className="relative bg-[#0A0A0A] text-white">
            <div className="mx-auto max-w-7xl px-6 md:px-10 pb-20">
                <div
                    className="zk-reveal relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0E0E10] p-10 md:p-16 text-center"
                    style={{
                        backgroundImage:
                            "radial-gradient(60% 80% at 50% 0%, rgba(99,102,241,0.18), transparent 60%)",
                    }}
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-zukvo-500/30 bg-zukvo-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                        <Plus className="size-3" /> Get started
                    </span>
                    <h2 className="mt-6 font-heading font-medium text-3xl md:text-5xl tracking-[-0.03em]">
                        Bring your knowledge home.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/signup"
                            data-testid="dh-final-cta-primary"
                            className="inline-flex items-center gap-2 rounded-full bg-zukvo-500 hover:bg-zukvo-600 transition-colors text-white px-6 py-3.5 text-sm font-medium"
                        >
                            Start free trial
                            <ArrowRight className="size-4" />
                        </a>
                        <Link
                            to="/products"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors text-white px-6 py-3.5 text-sm font-medium"
                        >
                            Explore other modules
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowLeft,
    LayoutDashboard,
    UsersRound,
    UserPlus,
    Eye,
    Settings2,
    Crown,
    Star,
    User,
    Users,
    Hash,
    Mail,
    Search,
    Filter,
    Plus,
    Pencil,
    Trash2,
    ChevronRight,
    ChevronDown,
    Sparkles,
    ShieldCheck,
    Lightbulb,
    CheckCircle2,
    LayoutGrid,
    List as ListIcon,
    Activity,
    Archive,
    XCircle,
    BadgeCheck,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import ImageSlot from "@/components/ImageSlot";
import squardImg from "@/assets/squard-dark.png";
import squardImgLight from "@/assets/squard-light.png";
import squardCreateImg from "@/assets/squard-create-dark.png";
import squardCreateImgLight from "@/assets/squard-create-light.png";
import squardStructureImg from "@/assets/squard-structure.png";

const SUBMODULES = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "create", label: "Create Squad", icon: UserPlus },
    { id: "overview", label: "Squad Overview", icon: Eye },
    { id: "manage", label: "Manage Squad", icon: Settings2 },
    { id: "roles", label: "Roles & Hierarchy", icon: Crown },
];

const ALL_USERS = [
    { name: "Bharathi Murugan", email: "bharathi.mu*******@zithmi.com", role: "Frontend Lead", avatar: "BM" },
    { name: "Sebastian Vance", email: "sebastian.vance@zithmi.com", role: "Backend Lead", avatar: "SV" },
    { name: "Charlotte Dupont", email: "charlotte.du*******@zithmi.com", role: "Product Manager", avatar: "CD" },
    { name: "Liam Gallagher", email: "liam.ga*******@zithmi.com", role: "UI/UX Designer", avatar: "LG" },
    { name: "Hans Müller", email: "hans.mueller@zithmi.com", role: "QA Engineer", avatar: "HM" },
    { name: "Yuki Tanaka", email: "yuki.tanaka@zithmi.com", role: "DevOps Engineer", avatar: "YT" },
    { name: "Sofia Rodriguez", email: "sofia.rodriguez@zithmi.com", role: "Full Stack Engineer", avatar: "SR" },
];

export default function Squads() {
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
            data-testid="squads-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink"
        >
            <SEO />
            <Nav />
            <Hero />
            <SubmoduleNav />
            <Dashboard />
            <CreateSquad />
            <SquadOverview />
            <ManageSquad />
            <RolesHierarchy />
            <FinalCTA />
            <Footer />
        </main>
    );
}

/* ---------------- HERO ---------------- */

function Hero() {
    return (
        <section
            data-testid="squads-hero"
            className="relative pt-32 md:pt-40 pb-16 md:pb-24 zk-mesh"
        >
            <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_75%)] pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                <div className="zk-reveal">
                    <Link
                        to="/products"
                        data-testid="squads-breadcrumb"
                        className="inline-flex items-center gap-1.5 text-[12px] text-zinc-500 hover:text-zukvo-600"
                    >
                        <ArrowLeft className="size-3.5" />
                        All products
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                    <div className="lg:col-span-7">
                        <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-violet-600">
                            <UsersRound className="size-3.5" />
                            Squads
                        </div>
                        <h1
                            data-testid="squads-headline"
                            className="zk-reveal mt-5 font-heading font-medium text-[42px] sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink"
                        >
                            Organize by outcome, <br />
                            <span className="text-zinc-500">not org chart.</span>
                        </h1>
                        <p className="zk-reveal mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                            Create cross-functional squads with a clear leadership hierarchy. Heads
                            own the squad, sub-heads assist, members contribute — shared workspaces,
                            shared metrics, rotating leads.
                        </p>
                        <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/signup"
                                data-testid="squads-cta-primary"
                                className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-zukvo-600 transition-colors"
                            >
                                Try Squads
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
                                { k: "Hierarchy", v: "Head · Sub-Head · Member" },
                                { k: "Setup", v: "3-step guided creation" },
                                { k: "Allocate", v: "Mix across projects" },
                                { k: "Rotate", v: "Leadership without disruption" },
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
            data-testid="squads-submodule-nav"
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
                            data-testid={`squads-pill-${s.id}`}
                            className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-[12.5px] text-zinc-700 hover:border-violet-500/40 hover:text-violet-600 transition-colors"
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

function Dashboard() {
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [squadFilter, setSquadFilter] = useState("All Squads");
    const [squadOpen, setSquadOpen] = useState(false);
    const [memberFilter, setMemberFilter] = useState("All Members");
    const [memberOpen, setMemberOpen] = useState(false);

    const squadOptions = ["All Squads", "Zithtech Core Squad", "Zithtech Frontend Squad", "Mobile App Squad"];
    const memberOptions = ["All Members", "Bharathi Murugan", "Sebastian Vance", "Charlotte Dupont", "Liam Gallagher", "Hans Müller", "Yuki Tanaka"];

    return (
        <section
            id="dashboard"
            data-testid="squads-dashboard"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                            Dashboard
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Every squad, every member — one screen.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Live counts for squads, leadership and members. Filter by status, jump
                            to a squad, view or manage in one click. Issue badge alerts you if a
                            squad is missing a head.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: UsersRound, t: "Total · Active · Leadership · Members" },
                                { i: Filter, t: "Filter by status · squads · members" },
                                { i: Eye, t: "View read-only details inline" },
                                { i: Settings2, t: "Manage members + roles in a drawer" },
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
                    <div className="lg:col-span-7 w-full min-w-0">
                        <div className="relative max-w-[800px] mx-auto">
                            <ImageSlot
                                testid="squads-image-dashboard"
                                src={squardImg}
                                srcLight={squardImgLight}
                                alt="Squad Management Dashboard"
                                label="Squad Management · Dashboard"
                                chromeUrl="zukvo.app/work/squads"
                                aspect="auto"
                                objectFit="contain"
                                className="w-full"
                                caption="Squad management dashboard view."
                            />

                            {/* Floating Card: Squad Structure */}
                            <div className="absolute z-20 -right-8 top-20 w-[240px] hidden xl:block zk-reveal rounded-xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border border-white/10 ring-1 ring-white/5 hover:-translate-y-2 transition-transform duration-500" style={{ animationDelay: "150ms" }}>
                                <img src={squardStructureImg} alt="Squad Structure" className="w-full h-auto block" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* KPIs */}
                <div className="zk-reveal mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Kpi
                        icon={UsersRound}
                        kicker="Total squads"
                        value="1"
                        sub="Across all teams"
                        tone="indigo"
                        bar={[
                            { label: "1 active", color: "bg-emerald-400" },
                            { label: "0 inactive", color: "bg-zinc-500" },
                            { label: "0 archived", color: "bg-amber-400" },
                        ]}
                    />
                    <Kpi
                        icon={CheckCircle2}
                        kicker="Active squads"
                        value="1"
                        sub="100% of total"
                        tone="emerald"
                        pct={100}
                    />
                    <Kpi
                        icon={Crown}
                        kicker="Leadership"
                        value="2"
                        sub="Heads + Sub-Heads"
                        tone="amber"
                        bar={[
                            { label: "1 heads", color: "bg-emerald-400" },
                            { label: "1 sub-heads", color: "bg-amber-400" },
                        ]}
                    />
                    <Kpi
                        icon={Users}
                        kicker="Total members"
                        value="3"
                        sub="4 assignments"
                        tone="violet"
                        meta="Avg 4 per squad"
                    />
                </div>

                {/* Filter row */}
                <div className="zk-reveal mt-5 rounded-2xl border border-white/10 bg-[#0E0E10] p-4 flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3 flex-wrap text-[11.5px]">
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-zinc-400 max-w-[200px]">
                            <Search className="size-3 shrink-0" />
                            <input
                                type="text"
                                className="bg-transparent border-none outline-none text-zinc-200 placeholder:text-zinc-500 text-[11px] w-full"
                                placeholder="Search by name or code…"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </span>
                        <span className="inline-flex rounded-md border border-white/10 bg-white/[0.02] p-0.5 text-[11.5px]">
                            {["All", "Active", "Inactive", "Archived"].map((st) => (
                                <button
                                    key={st}
                                    type="button"
                                    onClick={() => setStatusFilter(st)}
                                    className={`px-2.5 py-1 rounded-md transition-colors ${
                                        statusFilter === st
                                            ? "bg-violet-500/15 text-violet-200"
                                            : "text-zinc-400 hover:text-white"
                                    }`}
                                >
                                    {st === "All" ? "All" : (
                                        <span className="inline-flex items-center gap-1">
                                            <span className={`size-1.5 rounded-full ${
                                                st === "Active" ? "bg-emerald-400" : st === "Inactive" ? "bg-rose-400" : "bg-amber-400"
                                            }`} /> {st}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </span>
                        <div className="relative">
                            <span 
                                onClick={() => { setSquadOpen(!squadOpen); setMemberOpen(false); }}
                                className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-zinc-300 cursor-pointer hover:bg-white/5 transition-colors"
                            >
                                <UsersRound className="size-3" /> {squadFilter}
                                <ChevronDown className={`size-3 text-zinc-500 transition-transform ${squadOpen ? 'rotate-180' : ''}`} />
                            </span>
                            {squadOpen && (
                                <>
                                    <div className="fixed inset-0 z-10" onClick={() => setSquadOpen(false)} />
                                    <div className="absolute z-20 w-44 mt-1 rounded-md border border-white/10 bg-[#1E1E22] shadow-xl">
                                        {squadOptions.map(opt => (
                                            <div 
                                                key={opt} 
                                                className="px-3 py-2 text-[11.5px] text-zinc-300 hover:bg-white/10 cursor-pointer transition-colors"
                                                onClick={() => { setSquadFilter(opt); setSquadOpen(false); }}
                                            >
                                                {opt}
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="relative">
                            <span 
                                onClick={() => { setMemberOpen(!memberOpen); setSquadOpen(false); }}
                                className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-zinc-300 cursor-pointer hover:bg-white/5 transition-colors"
                            >
                                <Users className="size-3" /> {memberFilter}
                                <ChevronDown className={`size-3 text-zinc-500 transition-transform ${memberOpen ? 'rotate-180' : ''}`} />
                            </span>
                            {memberOpen && (
                                <>
                                    <div className="fixed inset-0 z-10" onClick={() => setMemberOpen(false)} />
                                    <div className="absolute z-20 w-48 mt-1 rounded-md border border-white/10 bg-[#1E1E22] shadow-xl max-h-48 overflow-y-auto">
                                        {memberOptions.map(opt => (
                                            <div 
                                                key={opt} 
                                                className="px-3 py-2 text-[11.5px] text-zinc-300 hover:bg-white/10 cursor-pointer transition-colors"
                                                onClick={() => { setMemberFilter(opt); setMemberOpen(false); }}
                                            >
                                                {opt}
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[11px] text-zinc-500">1 of 1</span>
                        <span className="inline-flex rounded-md border border-white/10 bg-white/[0.02] p-0.5">
                            <span className="px-2 py-1 rounded bg-white text-zukvo-ink">
                                <LayoutGrid className="size-3.5" />
                            </span>
                            <span className="px-2 py-1 text-zinc-500">
                                <ListIcon className="size-3.5" />
                            </span>
                        </span>
                    </div>
                </div>

                {/* Squad card mock */}
                <div className="zk-reveal mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <SquadCard />
                    <SquadCardPlaceholder text="Zithtech Frontend Squad" code="ZITHTECH_FRONTEND" />
                    <SquadCardPlaceholder text="Mobile App Squad" code="MOBILE_APP" />
                </div>
            </div>
        </section>
    );
}

function Kpi({ icon: Icon, kicker, value, sub, tone, bar, pct, meta }) {
    const text = {
        indigo: "text-zukvo-300",
        emerald: "text-emerald-300",
        amber: "text-amber-300",
        violet: "text-violet-300",
    }[tone];
    const barColor = {
        indigo: "before:bg-zukvo-500",
        emerald: "before:bg-emerald-400",
        amber: "before:bg-amber-400",
        violet: "before:bg-violet-400",
    }[tone];
    return (
        <div
            className={`relative rounded-2xl border border-white/10 bg-[#0E0E10] p-5 overflow-hidden before:absolute before:left-0 before:right-0 before:bottom-0 before:h-0.5 ${barColor}`}
        >
            <div className="flex items-center justify-between">
                <span
                    className={`inline-flex size-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 ${text}`}
                >
                    <Icon className="size-4" />
                </span>
                <span className="font-heading text-3xl text-white">{value}</span>
            </div>
            <div className="mt-3 text-[12px] text-zinc-200 font-medium">{kicker}</div>
            <div className="text-[11px] text-zinc-500">{sub}</div>

            {bar && (
                <div className="mt-3">
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden flex">
                        {bar.map((b, i) => (
                            <div key={i} className={`h-full ${b.color}`} style={{ width: `${100 / bar.length}%` }} />
                        ))}
                    </div>
                    <div className="mt-2 flex items-center gap-3 text-[10.5px]">
                        {bar.map((b, i) => (
                            <span key={i} className="inline-flex items-center gap-1 text-zinc-500">
                                <span className={`size-1.5 rounded-sm ${b.color}`} /> {b.label}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            {pct !== undefined && (
                <div className="mt-3">
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-emerald-400" style={{ width: `${pct}%` }} />
                    </div>
                    <div className="mt-1 text-right text-[10.5px] text-zinc-500">{pct}%</div>
                </div>
            )}
            {meta && (
                <div className="mt-3 inline-flex items-center gap-1.5 text-[10.5px] text-zinc-500">
                    <Users className="size-3" /> {meta}
                </div>
            )}
        </div>
    );
}

function SquadCard() {
    return (
        <div className="relative rounded-2xl border border-white/10 bg-[#0E0E10] p-5 overflow-hidden">
            <div
                aria-hidden
                className="absolute top-0 inset-x-0 h-0.5"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, #6366F1, #8B5CF6, #A855F7)",
                }}
            />
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <span
                        className="inline-flex size-10 items-center justify-center rounded-lg text-white font-heading"
                        style={{
                            backgroundImage: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                        }}
                    >
                        Z
                    </span>
                    <div>
                        <div className="font-heading text-lg text-white tracking-tight">
                            Zithtech Core Squad
                        </div>
                        <div className="text-[11px] text-zinc-500 inline-flex items-center gap-2">
                            <span className="font-mono rounded border border-white/10 bg-white/5 px-1 py-0.5">
                                ZITHTECH_CORE
                            </span>
                            <span>·</span>
                            <span className="inline-flex items-center gap-1">
                                <Users className="size-3" /> 4 members
                            </span>
                        </div>
                    </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.18em] rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                    <span className="size-1.5 rounded-full bg-emerald-400" /> Active
                </span>
            </div>

            <div className="mt-4 h-1.5 rounded-full bg-white/10 overflow-hidden flex">
                <div className="h-full bg-emerald-400 w-1/4" />
                <div className="h-full bg-amber-400 w-1/4" />
                <div className="h-full bg-zukvo-400 w-2/4" />
            </div>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10.5px]">
                <Counter icon={Crown} v="1" k="Heads" tone="emerald" />
                <Counter icon={Star} v="1" k="Sub-Heads" tone="amber" />
                <Counter icon={Users} v="2" k="Members" tone="indigo" />
            </div>

            <div className="mt-4 inline-flex -space-x-2">
                {[
                    ["BM", "bg-emerald-500/30 text-emerald-100 border-emerald-400/40"],
                    ["CD", "bg-amber-500/30 text-amber-100 border-amber-400/40"],
                    ["LG", "bg-zukvo-500/30 text-zukvo-100 border-zukvo-500/40"],
                    ["HM", "bg-cyan-500/30 text-cyan-100 border-cyan-400/40"],
                ].map((a, i) => (
                    <span
                        key={i}
                        className={`inline-flex size-7 items-center justify-center rounded-full border-2 border-[#0E0E10] text-[10px] font-bold ${a[1]}`}
                    >
                        {a[0]}
                    </span>
                ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
                <button className="inline-flex items-center justify-center gap-1.5 rounded-md border border-white/15 bg-white/5 text-white text-[12px] py-2">
                    <Eye className="size-3.5" /> View
                </button>
                <button
                    className="inline-flex items-center justify-center gap-1.5 rounded-md text-white text-[12px] py-2 font-medium"
                    style={{
                        backgroundImage: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                    }}
                >
                    <Settings2 className="size-3.5" /> Manage
                </button>
            </div>
        </div>
    );
}

function SquadCardPlaceholder({ text, code }) {
    return (
        <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.01] p-5 flex flex-col items-center justify-center text-center min-h-[240px]">
            <span className="inline-flex size-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-zinc-500">
                <Plus className="size-5" />
            </span>
            <div className="mt-3 font-heading text-base text-zinc-300 tracking-tight">
                {text}
            </div>
            <div className="text-[10.5px] text-zinc-500 font-mono mt-0.5">{code}</div>
            <div className="text-[11px] text-zinc-600 mt-2">Add a squad to start tracking</div>
        </div>
    );
}

function Counter({ icon: Icon, v, k, tone }) {
    const text = {
        emerald: "text-emerald-300",
        amber: "text-amber-300",
        indigo: "text-zukvo-300",
    }[tone];
    return (
        <div className="rounded-md border border-white/10 bg-white/[0.02] py-1.5 px-2 text-center">
            <div className={`inline-flex items-center gap-1 ${text} text-[10px] uppercase tracking-[0.08em] sm:tracking-[0.18em] font-bold`}>
                <Icon className="size-2.5" /> {v} {k}
            </div>
        </div>
    );
}

/* ---------------- CREATE SQUAD ---------------- */

function CreateSquad() {
    const [squadName, setSquadName] = useState("Zithtech Frontend Squad");
    const [squadCode, setSquadCode] = useState("ZITHTECH_FRONTEND");
    const [selectedHeads, setSelectedHeads] = useState([
        { name: "Bharathi Murugan", email: "bharathi.mu*******@zithmi.com", role: "Frontend Lead", avatar: "BM" }
    ]);
    const [selectedSubHeads, setSelectedSubHeads] = useState([
        { name: "Charlotte Dupont", email: "charlotte.du*******@zithmi.com", role: "Product Manager", avatar: "CD" }
    ]);
    const [selectedMembers, setSelectedMembers] = useState([
        { name: "Liam Gallagher", email: "liam.ga*******@zithmi.com", role: "UI/UX Designer", avatar: "LG" },
        { name: "Hans Müller", email: "hans.mueller@zithmi.com", role: "QA Engineer", avatar: "HM" }
    ]);

    const isSelected = (u) => {
        return (
            selectedHeads.some((x) => x.email === u.email) ||
            selectedSubHeads.some((x) => x.email === u.email) ||
            selectedMembers.some((x) => x.email === u.email)
        );
    };

    const availableUsers = ALL_USERS.filter((u) => !isSelected(u));

    const handleSelectHead = (u) => setSelectedHeads([...selectedHeads, u]);
    const handleRemoveHead = (u) => setSelectedHeads(selectedHeads.filter((x) => x.email !== u.email));

    const handleSelectSubHead = (u) => setSelectedSubHeads([...selectedSubHeads, u]);
    const handleRemoveSubHead = (u) => setSelectedSubHeads(selectedSubHeads.filter((x) => x.email !== u.email));

    const handleSelectMember = (u) => setSelectedMembers([...selectedMembers, u]);
    const handleRemoveMember = (u) => setSelectedMembers(selectedMembers.filter((x) => x.email !== u.email));

    const handleReset = () => {
        setSquadName("");
        setSquadCode("");
        setSelectedHeads([]);
        setSelectedSubHeads([]);
        setSelectedMembers([]);
    };

    return (
        <section
            id="create"
            data-testid="squads-create"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Create Squad
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Spin up a new squad — in three guided steps.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Identity, leadership, members. A clear hierarchy explainer walks new
                        admins through how heads, sub-heads and contributors compose a squad.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid lg:grid-cols-12 gap-6 items-start w-full min-w-0">
                    <div className="lg:col-span-7 w-full min-w-0">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden w-full max-w-full min-w-0">
                            {/* Header */}
                            <div className="px-5 py-4 flex items-center gap-3 border-b border-white/5">
                                <span
                                    className="inline-flex size-10 items-center justify-center rounded-xl text-white shrink-0"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(135deg, #6366F1, #8B5CF6, #A855F7)",
                                    }}
                                >
                                    <UsersRound className="size-5" />
                                </span>
                                <div className="min-w-0">
                                    <div className="font-heading text-lg text-white tracking-tight truncate">
                                        Create Squad
                                    </div>
                                    <div className="text-[11.5px] text-zinc-500 truncate">
                                        Define a new project team and assign leadership.
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 space-y-5">
                                {/* Live summary card */}
                                <div
                                    className="rounded-xl p-4 border border-white/10 relative overflow-hidden"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(80% 100% at 100% 0%, rgba(139,92,246,0.18), transparent 65%), radial-gradient(60% 100% at 0% 0%, rgba(99,102,241,0.18), transparent 65%)",
                                        backgroundColor: "#0E0E14",
                                    }}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex size-10 items-center justify-center rounded-lg bg-white/5 text-zinc-500 border border-white/10">
                                            <UsersRound className="size-5 text-zukvo-300" />
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <div className={`font-heading text-lg tracking-tight truncate ${squadName ? 'text-white' : 'text-zinc-500'}`}>
                                                {squadName || "New squad name"}
                                            </div>
                                            <div className="mt-1 flex items-center gap-2 text-[11px]">
                                                <span className="font-mono rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-zinc-400">
                                                    {squadCode || "SQUAD_CODE"}
                                                </span>
                                                <span className="inline-flex items-center gap-1.5 rounded-full border border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300 px-2 py-0.5">
                                                    <span className="size-1.5 rounded-full bg-zukvo-400" />{" "}
                                                    Draft
                                                </span>
                                                <span className="inline-flex items-center gap-1 text-zinc-400">
                                                    <Users className="size-3" /> {selectedHeads.length + selectedSubHeads.length + selectedMembers.length} members
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 grid grid-cols-3 gap-3 text-center text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.22em] text-zinc-400">
                                        <div>
                                            <div className="font-heading text-2xl text-emerald-300">
                                                {selectedHeads.length}
                                            </div>
                                            <div>Heads</div>
                                        </div>
                                        <div>
                                            <div className="font-heading text-2xl text-amber-300">
                                                {selectedSubHeads.length}
                                            </div>
                                            <div>Sub-Heads</div>
                                        </div>
                                        <div>
                                            <div className="font-heading text-2xl text-zukvo-300">
                                                {selectedMembers.length}
                                            </div>
                                            <div>Members</div>
                                        </div>
                                    </div>
                                </div>

                                {/* 3-step stepper */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <Step n="1" t="Identity" sub="Name & Code" active={!squadName || !squadCode} />
                                    <Step n="2" t="Leadership" sub="Heads (REQ.)" active={(squadName && squadCode) && selectedHeads.length === 0} />
                                    <Step n="3" t="Members" sub="Optional" active={(squadName && squadCode) && selectedHeads.length > 0} />
                                </div>

                                {/* How squads are structured */}
                                <div className="rounded-xl border border-amber-400/30 bg-amber-500/[0.05] p-4">
                                    <div className="inline-flex items-center gap-1.5 text-[12px] text-amber-200 font-medium">
                                        <Lightbulb className="size-3.5 text-amber-300" /> How
                                        squads are structured
                                    </div>
                                    <div className="text-[11.5px] text-zinc-400 mt-1.5">
                                        Squads have a leadership hierarchy. Each role defines
                                        visibility and approval scope across projects.
                                    </div>
                                    <div className="mt-3 flex flex-wrap items-center gap-2">
                                        <RoleChip dot="emerald" t="Head — owns the squad" />
                                        <RoleChip dot="amber" t="Sub-Head — assists leadership" />
                                        <RoleChip dot="indigo" t="Member — contributes" />
                                    </div>
                                </div>

                                {/* Squad Identity */}
                                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                                    <div className="inline-flex items-center gap-2 text-[12px] text-white font-medium">
                                        <UsersRound className="size-3.5 text-zukvo-300" /> Squad
                                        Identity
                                    </div>
                                    <div className="text-[11.5px] text-zinc-500 mt-0.5">
                                        A clear name and unique code so this squad is easy to find
                                        and reference.
                                    </div>
                                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        <FormField
                                            label="Squad Name"
                                            placeholder="e.g. Frontend Team"
                                            required
                                            value={squadName}
                                            onChange={(e) => {
                                                setSquadName(e.target.value);
                                                setSquadCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "_").replace(/_+/g, "_"));
                                            }}
                                        />
                                        <FormField
                                            label="Squad Code"
                                            placeholder="FRONTEND_TEAM"
                                            required
                                            value={squadCode}
                                            onChange={(e) => setSquadCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "_").replace(/_+/g, "_"))}
                                        />
                                    </div>
                                </div>

                                {/* Squad Heads */}
                                <RoleSection
                                    icon={Crown}
                                    tone="emerald"
                                    title="Squad Heads"
                                    sub="Select one or more leads who own this squad."
                                    placeholder="Search and assign heads…"
                                    required
                                    selectedUsers={selectedHeads}
                                    onSelect={handleSelectHead}
                                    onRemove={handleRemoveHead}
                                    availableUsers={availableUsers}
                                />
                                <RoleSection
                                    icon={Star}
                                    tone="amber"
                                    title="Sub-Heads"
                                    sub="Deputies who assist the heads. Optional but recommended for larger squads."
                                    placeholder="Search and assign sub-heads…"
                                    selectedUsers={selectedSubHeads}
                                    onSelect={handleSelectSubHead}
                                    onRemove={handleRemoveSubHead}
                                    availableUsers={availableUsers}
                                />
                                <RoleSection
                                    icon={Users}
                                    tone="indigo"
                                    title="Members"
                                    sub="Contributors who are part of this squad. You can add more later."
                                    placeholder="Search and add members…"
                                    selectedUsers={selectedMembers}
                                    onSelect={handleSelectMember}
                                    onRemove={handleRemoveMember}
                                    availableUsers={availableUsers}
                                />
                            </div>

                            <div className="px-5 py-3 border-t border-white/5 flex items-center justify-end gap-2">
                                <button 
                                    onClick={handleReset}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 text-white text-[12px] px-4 py-1.5"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        alert(`Squad "${squadName || 'Draft Squad'}" successfully created!`);
                                        handleReset();
                                    }}
                                    className="inline-flex items-center gap-1.5 rounded-full text-white text-[12px] font-medium px-4 py-1.5"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(135deg, #6366F1, #8B5CF6)",
                                    }}
                                >
                                    <Plus className="size-3.5" /> Create Squad
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-5">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] p-5">
                            <div className="text-[11px] uppercase tracking-[0.22em] text-violet-300 font-bold">
                                What guided setup gives you
                            </div>
                            <ul className="mt-4 space-y-2.5 text-[13.5px] text-zinc-300">
                                {[
                                    { i: UsersRound, t: "Identity (name + code) — required" },
                                    { i: Crown, t: "At least one head — required" },
                                    { i: Star, t: "Sub-heads recommended for larger squads" },
                                    { i: Users, t: "Members can be added now or later" },
                                    { i: Sparkles, t: "Live summary updates as you fill" },
                                ].map((b, i) => (
                                    <li key={i} className="flex items-center gap-2.5">
                                        <b.i className="size-4 text-violet-300" /> {b.t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <ImageSlot
                            testid="squads-image-create"
                            src={squardCreateImg}
                            srcLight={squardCreateImgLight}
                            alt="Create Squad drawer"
                            label="Create Squad · Drawer"
                            chromeUrl="zukvo.app/work/squads/new"
                            aspect="auto"
                            objectFit="contain"
                            className="max-w-[480px] mx-auto"
                            caption="Live screenshot — Create Squad drawer."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Step({ n, t, sub, active }) {
    return (
        <div
            className={`rounded-md border p-3 ${
                active
                    ? "border-zukvo-500/40 bg-zukvo-500/5"
                    : "border-white/10 bg-white/[0.02]"
            }`}
        >
            <div className="flex items-center gap-2">
                <span
                    className={`inline-flex size-6 items-center justify-center rounded-full text-[10px] font-bold ${
                        active ? "bg-zukvo-500 text-white" : "bg-white/10 text-zinc-400"
                    }`}
                >
                    {n}
                </span>
                <span className={`text-[12px] font-medium ${active ? "text-white" : "text-zinc-300"}`}>
                    {t}
                </span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 mt-1.5">
                {sub}
            </div>
        </div>
    );
}

function RoleChip({ dot, t }) {
    const dots = {
        emerald: "bg-emerald-400",
        amber: "bg-amber-400",
        indigo: "bg-zukvo-400",
    };
    return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[11px] text-zinc-300 px-2.5 py-1">
            <span className={`size-1.5 rounded-full ${dots[dot]}`} /> {t}
        </span>
    );
}

function RoleSection({ icon: Icon, tone, title, sub, placeholder, required, selectedUsers = [], onSelect, onRemove, availableUsers = [] }) {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const toneMap = {
        emerald: "text-emerald-300 bg-emerald-500/10 border-emerald-400/30",
        amber: "text-amber-300 bg-amber-500/10 border-amber-400/30",
        indigo: "text-zukvo-300 bg-zukvo-500/10 border-zukvo-500/30",
    };

    const filteredUsers = availableUsers.filter((u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.role.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 relative">
            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                    <span
                        className={`inline-flex size-8 items-center justify-center rounded-md border ${toneMap[tone]}`}
                    >
                        <Icon className="size-3.5" />
                    </span>
                    <div>
                        <div className="text-[12.5px] text-white font-medium inline-flex items-center gap-1.5">
                            {title}
                            {required && (
                                <span className="text-[10px] text-rose-300 uppercase tracking-[0.18em]">
                                    Required
                                </span>
                            )}
                        </div>
                        <div className="text-[11.5px] text-zinc-500">{sub}</div>
                    </div>
                </div>
                <span className="font-heading text-base text-zinc-500">{selectedUsers.length}</span>
            </div>
            
            <div className="relative mt-3">
                <div 
                    onClick={() => setOpen(true)}
                    className="rounded-md border border-white/10 bg-black/30 px-3 py-2 text-[12.5px] flex flex-wrap items-center gap-1.5 min-w-0 hover:bg-black/40 transition-colors cursor-text"
                >
                    {selectedUsers.map((u) => (
                        <span
                            key={u.email}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 pl-1.5 pr-2 py-0.5 text-[11.5px] text-zinc-200"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span className="size-5 rounded-full bg-white/10 text-white text-[9px] font-bold inline-flex items-center justify-center">
                                {u.avatar}
                            </span>
                            <span>{u.name}</span>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onRemove(u);
                                }}
                                className="text-zinc-500 hover:text-white transition-colors ml-0.5"
                            >
                                <XCircle className="size-3.5" />
                            </button>
                        </span>
                    ))}
                    <input
                        type="text"
                        className="bg-transparent border-none outline-none text-zinc-200 placeholder:text-zinc-500 text-[12.5px] flex-1 min-w-[120px]"
                        placeholder={selectedUsers.length > 0 ? "" : placeholder}
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setOpen(true);
                        }}
                        onFocus={() => setOpen(true)}
                    />
                    <ChevronDown 
                        className={`size-3.5 text-zinc-500 shrink-0 transition-transform cursor-pointer ${open ? 'rotate-180' : ''}`} 
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpen(!open);
                        }}
                    />
                </div>

                {open && (
                    <>
                        <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
                        <div className="absolute z-20 w-full mt-1 rounded-md border border-white/10 bg-[#1E1E22] shadow-xl max-h-48 overflow-y-auto">
                            {filteredUsers.length === 0 ? (
                                <div className="px-3 py-2 text-[12.5px] text-zinc-500 italic text-left">
                                    No users found
                                </div>
                            ) : (
                                filteredUsers.map((u) => (
                                    <div 
                                        key={u.email} 
                                        className="px-3 py-2 text-[12.5px] text-zinc-300 hover:bg-white/10 cursor-pointer transition-colors flex items-center gap-2"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onSelect(u);
                                            setSearch("");
                                            setOpen(false);
                                        }}
                                    >
                                        <span className="size-5 rounded-full bg-white/10 text-white text-[9px] font-bold inline-flex items-center justify-center">
                                            {u.avatar}
                                        </span>
                                        <div className="flex-1 min-w-0 text-left">
                                            <div className="text-[12px] text-zinc-200 font-medium truncate">{u.name}</div>
                                            <div className="text-[10px] text-zinc-500 truncate">{u.email} · {u.role}</div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

function FormField({ label, placeholder, value, full, required, onChange }) {
    return (
        <div className={full ? "col-span-full" : "min-w-0"}>
            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1 inline-flex items-center gap-1">
                {required && <span className="text-rose-300">*</span>}
                {label}
            </div>
            {onChange ? (
                <input
                    type="text"
                    className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-[12.5px] text-zinc-200 outline-none focus:border-violet-500/50 bg-black/40 transition-colors"
                    placeholder={placeholder}
                    value={value || ""}
                    onChange={onChange}
                />
            ) : (
                <div className="rounded-md border border-white/10 bg-black/30 px-3 py-2 text-[12.5px] truncate">
                    <span className={`${value ? "text-zinc-200" : "text-zinc-500"} truncate block`}>
                        {value || placeholder}
                    </span>
                </div>
            )}
        </div>
    );
}

/* ---------------- SQUAD OVERVIEW ---------------- */

function SquadOverview() {
    const [tab, setTab] = useState("all");
    const [overviewSearch, setOverviewSearch] = useState("");

    const overviewMembers = [
        { name: "Bharathi Murugan", email: "bharathi.mu*******@zithmi.com", role: "Frontend Lead", avatar: "BM", type: "heads", tone: "emerald", pinned: "head" },
        { name: "Charlotte Dupont", email: "charlotte.du*******@zithmi.com", role: "Product Manager", avatar: "CD", type: "subs", tone: "amber", pinned: "sub" },
        { name: "Liam Gallagher", email: "liam.ga*******@zithmi.com", role: "UI/UX Designer", avatar: "LG", type: "members", tone: "indigo" },
        { name: "Hans Müller", email: "hans.mueller@zithmi.com", role: "QA Engineer", avatar: "HM", type: "members", tone: "cyan" },
    ];

    const filteredOverviewMembers = overviewMembers.filter(m => {
        if (tab !== "all" && m.type !== tab) return false;
        if (overviewSearch) {
            const query = overviewSearch.toLowerCase();
            return (
                m.name.toLowerCase().includes(query) ||
                m.role.toLowerCase().includes(query) ||
                m.email.toLowerCase().includes(query)
            );
        }
        return true;
    });

    const headsList = filteredOverviewMembers.filter(m => m.type === "heads");
    const subsList = filteredOverviewMembers.filter(m => m.type === "subs");
    const membersList = filteredOverviewMembers.filter(m => m.type === "members");

    return (
        <section
            id="overview"
            data-testid="squads-overview"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-start w-full min-w-0">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                            Squad Overview
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            See the whole squad at a glance.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            Open the read-only overview to see who leads, who assists, and who
                            contributes — with role-tagged designations and contact details. Jump
                            into Manage to make changes.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: BadgeCheck, t: "Led by · clearly attributed at the top" },
                                { i: Search, t: "Search by name, designation, or email" },
                                { i: Crown, t: "Filter by Heads · Sub-Heads · Members" },
                                { i: ShieldCheck, t: "Read-only · safe to share with stakeholders" },
                            ].map((b, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2.5 text-[14px] text-zinc-300"
                                >
                                    <b.i className="size-4 text-zukvo-300" /> {b.t}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Overview drawer mock */}
                    <div className="lg:col-span-7 w-full min-w-0">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden w-full max-w-full min-w-0">
                            <div className="px-5 py-4 flex items-center gap-3 border-b border-white/5">
                                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-zukvo-500/15 text-zukvo-200 border border-zukvo-500/30 shrink-0">
                                    <Eye className="size-5" />
                                </span>
                                <div className="min-w-0">
                                    <div className="font-heading text-lg text-white tracking-tight truncate">
                                        Squad Overview
                                    </div>
                                    <div className="text-[11.5px] text-zinc-500 truncate">
                                        Read-only details and members
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 space-y-5">
                                {/* Header card */}
                                <div
                                    className="relative overflow-hidden rounded-2xl border border-white/10 p-5"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(60% 100% at 100% 0%, rgba(139,92,246,0.20), transparent 70%), radial-gradient(60% 100% at 0% 0%, rgba(99,102,241,0.20), transparent 70%)",
                                        backgroundColor: "#0E0E14",
                                    }}
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <span
                                                className="inline-flex size-12 items-center justify-center rounded-xl text-white font-heading text-lg"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(135deg, #6366F1, #8B5CF6)",
                                                }}
                                            >
                                                Z
                                            </span>
                                            <div>
                                                <div className="font-heading text-xl text-white tracking-tight">
                                                    Zithtech Core Squad
                                                </div>
                                                <div className="mt-1 flex items-center gap-2 flex-wrap text-[11px]">
                                                    <span className="font-mono rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-zinc-300">
                                                        ZITHTECH_CORE
                                                    </span>
                                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                                                        <span className="size-1.5 rounded-full bg-emerald-400" />{" "}
                                                        Active
                                                    </span>
                                                    <span className="inline-flex items-center gap-1 text-zinc-400">
                                                        <Users className="size-3" /> {overviewMembers.length} members
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                                            Led by
                                            <span className="inline-flex size-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-100 border border-emerald-400/30 text-[10px] font-bold">
                                                BM
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-[9px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.22em] text-zinc-500">
                                        <div>
                                            <div className="font-heading text-2xl text-zukvo-300">
                                                {overviewMembers.length}
                                            </div>
                                            <div>Total</div>
                                        </div>
                                        <div>
                                            <div className="font-heading text-2xl text-emerald-300">
                                                1
                                            </div>
                                            <div>Heads</div>
                                        </div>
                                        <div>
                                            <div className="font-heading text-2xl text-amber-300">
                                                1
                                            </div>
                                            <div>Sub-Heads</div>
                                        </div>
                                        <div>
                                            <div className="font-heading text-2xl text-violet-300">
                                                2
                                            </div>
                                            <div>Members</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Search */}
                                <div className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 flex items-center gap-2 w-full text-[12px]">
                                    <Search className="size-3.5 text-zinc-500 shrink-0" />
                                    <input
                                        type="text"
                                        className="bg-transparent border-none outline-none w-full text-zinc-200 placeholder:text-zinc-500 text-[12px]"
                                        placeholder="Search by name, designation, or email…"
                                        value={overviewSearch}
                                        onChange={(e) => setOverviewSearch(e.target.value)}
                                    />
                                </div>

                                {/* Tabs */}
                                <div className="overflow-x-auto w-full no-scrollbar">
                                    <div className="inline-flex rounded-full border border-white/10 bg-white/[0.02] p-1 text-[11.5px] min-w-max">
                                        {[
                                            { id: "all", t: "All", c: 4 },
                                            { id: "heads", t: "Heads", c: 1, icon: Crown },
                                            { id: "subs", t: "Sub-Heads", c: 1, icon: Star },
                                            { id: "members", t: "Members", c: 2, icon: Users },
                                        ].map((x) => (
                                            <button
                                                key={x.id}
                                                type="button"
                                                onClick={() => setTab(x.id)}
                                                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 transition-colors ${
                                                    tab === x.id
                                                        ? "bg-white text-zukvo-ink"
                                                        : "text-zinc-400 hover:text-white"
                                                }`}
                                            >
                                                {x.icon && <x.icon className="size-3" />}
                                                {x.t}
                                                <span
                                                    className={`text-[10px] rounded-full px-1.5 ${
                                                        tab === x.id
                                                            ? "bg-zukvo-500/15 text-zukvo-700"
                                                            : "bg-white/10 text-zinc-400"
                                                    }`}
                                                >
                                                    {x.c}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Member groups */}
                                <div className="space-y-4">
                                    {headsList.length > 0 && (
                                        <div>
                                            <GroupHeader icon={Crown} tone="emerald" t="Heads" n={headsList.length} />
                                            <div className="space-y-2">
                                                {headsList.map(m => (
                                                    <MemberRow key={m.email} tone={m.tone} a={m.avatar} n={m.name} d={m.role} pinned={m.pinned} />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {subsList.length > 0 && (
                                        <div>
                                            <GroupHeader icon={Star} tone="amber" t="Sub-Heads" n={subsList.length} />
                                            <div className="space-y-2">
                                                {subsList.map(m => (
                                                    <MemberRow key={m.email} tone={m.tone} a={m.avatar} n={m.name} d={m.role} pinned={m.pinned} />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {membersList.length > 0 && (
                                        <div>
                                            <GroupHeader icon={Users} tone="indigo" t="Members" n={membersList.length} />
                                            <div className="grid md:grid-cols-2 gap-2.5">
                                                {membersList.map(m => (
                                                    <MemberRow key={m.email} tone={m.tone} a={m.avatar} n={m.name} d={m.role} />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {filteredOverviewMembers.length === 0 && (
                                        <div className="text-center py-6 text-zinc-500 text-[13px] italic">
                                            No squad members found matching filters.
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="px-5 py-3 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11.5px] text-zinc-500">
                                <span className="inline-flex items-center gap-1.5">
                                    <Users className="size-3.5" /> {overviewMembers.length} members
                                </span>
                                <div className="flex items-center justify-end gap-2 w-full sm:w-auto">
                                    <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 text-white px-3 py-1.5 text-[12px]">
                                        Close
                                    </button>
                                    <button
                                        className="inline-flex items-center gap-1.5 rounded-full text-white text-[12px] font-medium px-4 py-1.5"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(135deg, #6366F1, #8B5CF6)",
                                        }}
                                    >
                                        <Settings2 className="size-3.5" /> Manage Squad
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function GroupHeader({ icon: Icon, tone, t, n }) {
    const text = {
        emerald: "text-emerald-300",
        amber: "text-amber-300",
        indigo: "text-zukvo-300",
    }[tone];
    return (
        <div className="mb-2 flex items-center gap-2 w-full">
            <Icon className={`size-3.5 ${text}`} />
            <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-300 font-bold">
                {t}
            </span>
            <span className="text-[10px] rounded-full border border-white/10 bg-white/5 text-zinc-400 px-1.5">
                {n}
            </span>
            <span className="flex-1 h-px bg-white/5" />
        </div>
    );
}

function MemberRow({ tone, a, n, d, pinned }) {
    const avatarTone = {
        emerald: "bg-emerald-500/30 text-emerald-100 border-emerald-400/40",
        amber: "bg-amber-500/30 text-amber-100 border-amber-400/40",
        indigo: "bg-zukvo-500/30 text-zukvo-100 border-zukvo-500/40",
        cyan: "bg-cyan-500/30 text-cyan-100 border-cyan-400/40",
    }[tone];
    const ring = pinned
        ? pinned === "head"
            ? "ring-1 ring-emerald-500/40 border-l-2 border-l-emerald-400"
            : "ring-1 ring-amber-500/40 border-l-2 border-l-amber-400"
        : "";
    return (
        <div
            className={`flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 ${ring}`}
        >
            <span
                className={`relative inline-flex size-9 items-center justify-center rounded-full border text-[12px] font-bold ${avatarTone}`}
            >
                {a}
                {pinned && (
                    <span
                        className={`absolute -bottom-0.5 -right-0.5 inline-flex size-3.5 items-center justify-center rounded-full border-2 border-[#0E0E14] ${
                            pinned === "head" ? "bg-emerald-400" : "bg-amber-400"
                        }`}
                    >
                        {pinned === "head" ? (
                            <Crown className="size-2 text-emerald-950" />
                        ) : (
                            <Star className="size-2 text-amber-950" />
                        )}
                    </span>
                )}
            </span>
            <div className="min-w-0 text-left">
                <div className="text-[13px] text-zinc-100 truncate">{n}</div>
                <div className="text-[11px] text-zinc-500 truncate">{d}</div>
            </div>
        </div>
    );
}

/* ---------------- MANAGE SQUAD ---------------- */

function ManageSquad() {
    const [name, setName] = useState("Zithtech Core Squad");
    const [code, setCode] = useState("ZITHTECH_CORE");
    const [status, setStatus] = useState("Active");
    const [statusOpen, setStatusOpen] = useState(false);
    const [addMemberOpen, setAddMemberOpen] = useState(false);

    const [members, setMembers] = useState([
        { name: "Bharathi Murugan", email: "bharathi.mu*******@zithmi.com", role: "Frontend Lead", avatar: "BM", tone: "emerald", badge: "Head", badgeTone: "emerald" },
        { name: "Charlotte Dupont", email: "charlotte.du*******@zithmi.com", role: "Product Manager", avatar: "CD", tone: "amber", badge: "Sub-Head", badgeTone: "amber" },
        { name: "Liam Gallagher", email: "liam.ga*******@zithmi.com", role: "UI/UX Designer", avatar: "LG", tone: "indigo", badge: "Member", badgeTone: "indigo" },
    ]);

    const handleRemove = (email) => {
        setMembers(members.filter(m => m.email !== email));
    };

    const isMemberSelected = (u) => {
        return members.some(m => m.email === u.email);
    };

    const availableToManage = ALL_USERS.filter(u => !isMemberSelected(u));
    const statusOptions = ["Active", "Inactive", "Archived"];

    const countHeads = members.filter(m => m.badge === "Head").length;
    const countSubHeads = members.filter(m => m.badge === "Sub-Head").length;
    const countMembersOnly = members.filter(m => m.badge === "Member").length;

    return (
        <section
            id="manage"
            data-testid="squads-manage"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal grid lg:grid-cols-12 gap-10 items-start w-full min-w-0">
                    <div className="lg:col-span-5">
                        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                            Manage Squad
                        </div>
                        <h2 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                            Edit identity. Move members. Change status.
                        </h2>
                        <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-md">
                            One drawer to rename a squad, swap heads, promote a member, or archive
                            the whole thing. Every change is audit-logged so you always know who
                            made what.
                        </p>
                        <ul className="mt-6 space-y-2.5">
                            {[
                                { i: Pencil, t: "Edit name + code" },
                                { i: UserPlus, t: "Add or remove members inline" },
                                { i: Crown, t: "Reassign Head / Sub-Head / Member" },
                                { i: Archive, t: "Active · Inactive · Archived status" },
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

                    <div className="lg:col-span-7 w-full min-w-0">
                        <div className="rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden w-full max-w-full min-w-0">
                            <div className="px-5 py-4 flex items-center gap-3 border-b border-white/5">
                                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-200 border border-violet-400/30 shrink-0">
                                    <Settings2 className="size-5" />
                                </span>
                                <div className="min-w-0">
                                    <div className="font-heading text-lg text-white tracking-tight truncate">
                                        Manage Squad
                                    </div>
                                    <div className="text-[11.5px] text-zinc-500 truncate">
                                        Configuring {name}
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 space-y-5">
                                {/* Squad header chip */}
                                <div
                                    className="rounded-xl border border-white/10 p-4 flex items-center gap-3"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(80% 100% at 100% 0%, rgba(139,92,246,0.16), transparent 65%)",
                                        backgroundColor: "#0E0E14",
                                    }}
                                >
                                    <span
                                        className="inline-flex size-10 items-center justify-center rounded-lg text-white font-heading"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(135deg, #6366F1, #8B5CF6)",
                                        }}
                                    >
                                        {name ? name.charAt(0).toUpperCase() : "V"}
                                    </span>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="font-heading text-lg text-white">
                                            {name || "Draft Squad"}
                                        </span>
                                        <span className="font-mono rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[11px] text-zinc-300">
                                            {code || "CODE"}
                                        </span>
                                        <span className={`inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 ${
                                            status === "Active" ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300" :
                                            status === "Inactive" ? "border-rose-400/30 bg-rose-500/10 text-rose-300" :
                                            "border-amber-400/30 bg-amber-500/10 text-amber-300"
                                        }`}>
                                            <span className={`size-1.5 rounded-full ${
                                                status === "Active" ? "bg-emerald-400" : status === "Inactive" ? "bg-rose-400" : "bg-amber-400"
                                            }`} />{" "}
                                            {status}
                                        </span>
                                    </div>
                                </div>

                                {/* Identity */}
                                <div>
                                    <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                                        <UsersRound className="size-3" /> Squad Identity
                                    </div>
                                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <FormField 
                                            label="Squad Name" 
                                            value={name} 
                                            required 
                                            onChange={(e) => {
                                                setName(e.target.value);
                                                setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "_").replace(/_+/g, "_"));
                                            }}
                                        />
                                        <FormField 
                                            label="Squad Code" 
                                            value={code} 
                                            required 
                                            onChange={(e) => setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "_").replace(/_+/g, "_"))}
                                        />
                                    </div>
                                </div>

                                {/* Composition */}
                                <div>
                                    <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                                        <User className="size-3" /> Composition
                                    </div>
                                    <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-[9px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.22em] text-zinc-400">
                                        {[
                                            [members.length.toString(), "Total", "text-white"],
                                            [countHeads.toString(), "Heads", "text-emerald-300"],
                                            [countSubHeads.toString(), "Sub-Heads", "text-amber-300"],
                                            [countMembersOnly.toString(), "Members", "text-zukvo-300"],
                                        ].map((s, i) => (
                                            <div
                                                key={i}
                                                className="rounded-lg border border-white/10 bg-white/[0.02] py-3"
                                            >
                                                <div className={`font-heading text-2xl ${s[2]}`}>
                                                    {s[0]}
                                                </div>
                                                <div>{s[1]}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Members */}
                                <div>
                                    <div className="flex items-center justify-between mb-2 relative">
                                        <div className="text-[12px] text-white font-medium">
                                            Members
                                        </div>
                                        <div className="relative">
                                            <button 
                                                onClick={() => setAddMemberOpen(!addMemberOpen)}
                                                className="inline-flex items-center gap-1.5 rounded-md bg-zukvo-500 hover:bg-zukvo-600 text-white text-[11.5px] px-3 py-1.5 font-medium"
                                            >
                                                <UserPlus className="size-3.5" /> Add Member
                                            </button>
                                            {addMemberOpen && (
                                                <>
                                                    <div className="fixed inset-0 z-10" onClick={() => setAddMemberOpen(false)} />
                                                    <div className="absolute right-0 z-20 w-56 mt-1 rounded-md border border-white/10 bg-[#1E1E22] shadow-xl max-h-48 overflow-y-auto">
                                                        {availableToManage.length === 0 ? (
                                                            <div className="px-3 py-2 text-[12.5px] text-zinc-500 italic text-left">
                                                                No users available
                                                            </div>
                                                        ) : (
                                                            availableToManage.map((u) => (
                                                                <div 
                                                                    key={u.email} 
                                                                    className="px-3 py-2 text-[12.5px] text-zinc-300 hover:bg-white/10 cursor-pointer transition-colors flex items-center gap-2 text-left"
                                                                    onClick={() => {
                                                                        setMembers([...members, {
                                                                            name: u.name,
                                                                            email: u.email,
                                                                            role: u.role,
                                                                            avatar: u.avatar,
                                                                            tone: "indigo",
                                                                            badge: "Member",
                                                                            badgeTone: "indigo"
                                                                        }]);
                                                                        setAddMemberOpen(false);
                                                                    }}
                                                                >
                                                                    <span className="size-5 rounded-full bg-white/10 text-white text-[9px] font-bold inline-flex items-center justify-center">
                                                                        {u.avatar}
                                                                    </span>
                                                                    <div className="flex-1 min-w-0">
                                                                        <div className="text-[12px] text-zinc-200 font-medium truncate">{u.name}</div>
                                                                        <div className="text-[10px] text-zinc-500 truncate">{u.role}</div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        )}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        {members.map(m => (
                                            <MemberEditRow
                                                key={m.email}
                                                tone={m.tone}
                                                a={m.avatar}
                                                n={m.name}
                                                d={m.role}
                                                e={m.email}
                                                badge={m.badge}
                                                badgeTone={m.badgeTone}
                                                onDelete={() => handleRemove(m.email)}
                                            />
                                        ))}
                                        {members.length === 0 && (
                                            <div className="text-center py-6 text-zinc-500 text-[13px] italic border border-dashed border-white/10 rounded-xl">
                                                No squad members left. Add members to composition.
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Status */}
                                <div>
                                    <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                                        <Star className="size-3" /> Status
                                    </div>
                                    <div className="relative mt-2">
                                        <div 
                                            onClick={() => setStatusOpen(!statusOpen)}
                                            className="rounded-md border border-white/10 bg-black/30 px-3 py-2.5 inline-flex items-center justify-between w-full text-[12.5px] cursor-pointer hover:bg-black/40 transition-colors"
                                        >
                                            <span className="inline-flex items-center gap-2 text-zinc-200">
                                                <span className={`size-1.5 rounded-full ${
                                                    status === "Active" ? "bg-emerald-400" : status === "Inactive" ? "bg-rose-400" : "bg-amber-400"
                                                }`} />{" "}
                                                {status}
                                            </span>
                                            <ChevronDown className={`size-3.5 text-zinc-500 transition-transform ${statusOpen ? 'rotate-180' : ''}`} />
                                        </div>
                                        {statusOpen && (
                                            <>
                                                <div className="fixed inset-0 z-10" onClick={() => setStatusOpen(false)} />
                                                <div className="absolute z-20 w-full mt-1 rounded-md border border-white/10 bg-[#1E1E22] shadow-xl">
                                                    {statusOptions.map(opt => (
                                                        <div 
                                                            key={opt} 
                                                            className="px-3 py-2 text-[12.5px] text-zinc-300 hover:bg-white/10 cursor-pointer transition-colors flex items-center gap-2"
                                                            onClick={() => { setStatus(opt); setStatusOpen(false); }}
                                                        >
                                                            <span className={`size-1.5 rounded-full ${
                                                                opt === "Active" ? "bg-emerald-400" : opt === "Inactive" ? "bg-rose-400" : "bg-amber-400"
                                                            }`} />
                                                            {opt}
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="px-5 py-3 border-t border-white/5 flex items-center justify-end gap-2">
                                <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 text-white text-[12px] px-4 py-1.5">
                                    Cancel
                                </button>
                                <button
                                    onClick={() => alert(`Changes to squad "${name}" successfully saved!`)}
                                    className="inline-flex items-center gap-1.5 rounded-full text-white text-[12px] font-medium px-4 py-1.5"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(135deg, #6366F1, #8B5CF6)",
                                    }}
                                >
                                    <CheckCircle2 className="size-3.5" /> Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MemberEditRow({ tone, a, n, d, e, badge, badgeTone, onDelete }) {
    const avatarTone = {
        emerald: "bg-emerald-500/30 text-emerald-100 border-emerald-400/40",
        amber: "bg-amber-500/30 text-amber-100 border-amber-400/40",
        indigo: "bg-zukvo-500/30 text-zukvo-100 border-zukvo-500/40",
    }[tone];
    const badgeToneMap = {
        emerald: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
        amber: "border-amber-400/30 bg-amber-500/10 text-amber-300",
        indigo: "border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300",
    }[badgeTone];
    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2.5">
            <div className="flex items-center gap-3 min-w-0">
                <span
                    className={`inline-flex size-9 items-center justify-center rounded-full border text-[12px] font-bold ${avatarTone} shrink-0`}
                >
                    {a}
                </span>
                <div className="min-w-0 flex-1 text-left">
                    <div className="text-[13px] text-zinc-100 truncate">{n}</div>
                    {d && <div className="text-[11px] text-zinc-500 truncate">{d}</div>}
                    <div className="text-[11px] text-zinc-500 flex items-center gap-1 min-w-0">
                        <Mail className="size-2.5 shrink-0" />
                        <span className="truncate">{e}</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto border-t border-white/5 pt-2.5 sm:border-t-0 sm:pt-0">
                <span
                    className={`text-[10px] uppercase tracking-[0.18em] rounded-full border px-2 py-0.5 ${badgeToneMap}`}
                >
                    {badge}
                </span>
                <div className="flex items-center gap-2">
                    <button className="text-zinc-500 hover:text-white p-1">
                        <Pencil className="size-3.5" />
                    </button>
                    <button 
                        onClick={onDelete}
                        className="text-rose-400 hover:text-rose-300 p-1"
                    >
                        <Trash2 className="size-3.5" />
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ---------------- ROLES & HIERARCHY ---------------- */

function RolesHierarchy() {
    const roles = [
        {
            icon: Crown,
            tone: "emerald",
            t: "Head",
            sub: "Owns the squad",
            d: "Approves changes, picks sub-heads, sets the squad's direction. Visible on every project the squad touches.",
            bullets: ["Owns roster", "Approves new members", "Picks rotation"],
        },
        {
            icon: Star,
            tone: "amber",
            t: "Sub-Head",
            sub: "Assists leadership",
            d: "Deputy who can act in the head's absence. Optional but recommended for squads with 5+ members or multi-project scope.",
            bullets: ["Acts in head's absence", "Coordinates members", "Helps approvals"],
        },
        {
            icon: Users,
            tone: "indigo",
            t: "Member",
            sub: "Contributes",
            d: "The squad's contributors. Mix of disciplines — engineers, designers, PMs — assigned to the work the squad owns.",
            bullets: ["Cross-functional", "Multi-project", "Rotatable in/out"],
        },
    ];
    const toneMap = {
        emerald: {
            ring: "ring-emerald-400/30",
            text: "text-emerald-300",
            bg: "bg-emerald-500/10 border-emerald-400/30",
        },
        amber: {
            ring: "ring-amber-400/30",
            text: "text-amber-300",
            bg: "bg-amber-500/10 border-amber-400/30",
        },
        indigo: {
            ring: "ring-zukvo-500/30",
            text: "text-zukvo-300",
            bg: "bg-zukvo-500/10 border-zukvo-500/30",
        },
    };
    return (
        <section
            id="roles"
            data-testid="squads-roles"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-28">
                <div className="zk-reveal max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        Roles & Hierarchy
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                        Three roles. Clear ownership.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-relaxed text-[15px] md:text-base max-w-2xl">
                        Heads own. Sub-heads assist. Members contribute. Each role defines what
                        someone can see, edit and approve across every project the squad touches.
                    </p>
                </div>

                <div className="zk-reveal mt-12 grid md:grid-cols-3 gap-4">
                    {roles.map((r) => (
                        <div
                            key={r.t}
                            className={`relative rounded-2xl border border-white/10 bg-[#0E0E10] p-5 ring-1 ${toneMap[r.tone].ring}`}
                        >
                            <span
                                className={`inline-flex size-10 items-center justify-center rounded-lg border ${toneMap[r.tone].bg}`}
                            >
                                <r.icon className={`size-5 ${toneMap[r.tone].text}`} />
                            </span>
                            <div className={`mt-3 text-[10px] uppercase tracking-[0.22em] font-bold ${toneMap[r.tone].text}`}>
                                {r.sub}
                            </div>
                            <div className="font-heading text-2xl text-white tracking-tight mt-0.5">
                                {r.t}
                            </div>
                            <p className="mt-2 text-[13px] text-zinc-400 leading-relaxed">
                                {r.d}
                            </p>
                            <ul className="mt-4 space-y-1.5">
                                {r.bullets.map((b) => (
                                    <li
                                        key={b}
                                        className="inline-flex items-center gap-2 text-[12px] text-zinc-300"
                                    >
                                        <CheckCircle2
                                            className={`size-3.5 ${toneMap[r.tone].text}`}
                                        />
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Hierarchy diagram */}
                <div className="zk-reveal mt-10 rounded-2xl border border-white/10 bg-[#0E0E10] p-5 md:p-8">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                        Hierarchy at a glance
                    </div>
                    <div className="mt-6 flex flex-col items-center gap-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 px-4 py-2 text-[12px]">
                            <Crown className="size-3.5" />
                            <span>Head — owns the squad</span>
                        </div>
                        <div className="w-px h-6 bg-white/10" />
                        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 px-4 py-2 text-[12px]">
                            <Star className="size-3.5" />
                            <span>Sub-Head — assists leadership</span>
                        </div>
                        <div className="w-px h-6 bg-white/10" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 w-full">
                            {[
                                "Member · Engineer",
                                "Member · Designer",
                                "Member · PM",
                                "Member · QA",
                            ].map((m) => (
                                <span
                                    key={m}
                                    className="inline-flex items-center gap-2 rounded-full border border-zukvo-500/30 bg-zukvo-500/10 text-zukvo-300 px-4 py-2 text-[11.5px]"
                                >
                                    <Users className="size-3" /> {m}
                                </span>
                            ))}
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
        <section data-testid="squads-final-cta" className="relative bg-[#0A0A0A] text-white">
            <div className="mx-auto max-w-7xl px-6 md:px-10 pb-20">
                <div
                    className="zk-reveal relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0E0E10] p-10 md:p-16 text-center"
                    style={{
                        backgroundImage:
                            "radial-gradient(60% 80% at 50% 0%, rgba(139,92,246,0.20), transparent 60%)",
                    }}
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                        <Sparkles className="size-3" /> Get started
                    </span>
                    <h2 className="mt-6 font-heading font-medium text-3xl md:text-5xl tracking-[-0.03em]">
                        Build squads around outcomes.
                    </h2>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/signup"
                            data-testid="squads-final-cta-primary"
                            className="inline-flex items-center gap-2 rounded-full text-white px-6 py-3.5 text-sm font-medium"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #6366F1, #8B5CF6, #A855F7)",
                            }}
                        >
                            Start free trial
                            <ArrowRight className="size-4" />
                        </a>
                        <Link
                            to="/products"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors text-white px-6 py-3.5 text-sm font-medium"
                        >
                            Explore other modules
                            <ChevronRight className="size-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

// eslint-disable-next-line no-unused-vars
const _unused = [XCircle, Hash, Activity];

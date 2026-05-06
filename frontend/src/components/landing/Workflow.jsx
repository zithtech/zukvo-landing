import React from "react";
import {
    FolderTree, FileLock2, Link2, Trash2, Receipt, Calculator,
    Timer, Megaphone, KanbanSquare, ListChecks,
} from "lucide-react";

const ROWS = [
    {
        eyebrow: "Document Hub",
        title: "Docs that talk to your tickets.",
        body: "Public/private share, link any doc to tickets or projects, AI-assisted drafting, soft-delete trash, and full version trails.",
        bullets: [
            { icon: FolderTree, text: "Workspace-wide hub" },
            { icon: FileLock2, text: "Public / private share" },
            { icon: Link2, text: "Ticket linking" },
            { icon: Trash2, text: "Trash & restore" },
        ],
        align: "left",
        mock: <DocMock />,
    },
    {
        eyebrow: "Finance Suite",
        title: "Invoices, accounts, time — handled.",
        body: "Run the money side of your business without spreadsheets. Generate invoices from tracked time, reconcile accounts, and ship reports clients love.",
        bullets: [
            { icon: Receipt, text: "Polished invoices" },
            { icon: Calculator, text: "Accounts & ledgers" },
            { icon: Timer, text: "Time tracking" },
            { icon: ListChecks, text: "Daily updates" },
        ],
        align: "right",
        mock: <FinanceMock />,
    },
    {
        eyebrow: "Project Management · RBAC",
        title: "Built for solo, shaped for teams.",
        body: "Granular roles, client portals, sprints with backlog grooming, kanban buckets, and a bug list module that actually gets bugs closed.",
        bullets: [
            { icon: KanbanSquare, text: "Sprints + Buckets" },
            { icon: Megaphone, text: "Daily standups" },
            { icon: ListChecks, text: "Bug list module" },
            { icon: FileLock2, text: "RBAC — fine-grained" },
        ],
        align: "left",
        mock: <PMMock />,
    },
];

export default function Workflow() {
    return (
        <section
            id="workflow"
            data-testid="workflow-section"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 space-y-28 md:space-y-40">
                {ROWS.map((r, i) => (
                    <div
                        key={i}
                        data-testid={`workflow-row-${i}`}
                        className={`zk-reveal grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center ${
                            r.align === "right" ? "lg:[&>*:first-child]:order-2" : ""
                        }`}
                    >
                        <div className="lg:col-span-5">
                            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                                {r.eyebrow}
                            </div>
                            <h3 className="mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em] text-white">
                                {r.title}
                            </h3>
                            <p className="mt-5 text-[15px] md:text-base text-zinc-400 leading-relaxed max-w-lg">
                                {r.body}
                            </p>
                            <ul className="mt-7 grid grid-cols-2 gap-3 max-w-md">
                                {r.bullets.map((b, j) => (
                                    <li
                                        key={j}
                                        className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5"
                                    >
                                        <b.icon className="size-4 text-zukvo-400" />
                                        <span className="text-[13px] text-zinc-300">
                                            {b.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:col-span-7">{r.mock}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function CardShell({ children }) {
    return (
        <div className="relative rounded-2xl border border-white/10 bg-[#101014] p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            {children}
        </div>
    );
}

function DocMock() {
    const docs = [
        { name: "Northwind — SOW Q2.pdf", tag: "Client", date: "Apr 12" },
        { name: "Sprint Cycle 3 — Scope brief", tag: "Internal", date: "Apr 10" },
        { name: "Brand voice guide v2", tag: "Public", date: "Apr 08" },
        { name: "API design — auth flow", tag: "Linked · TKT-002-0731", date: "Apr 06" },
        { name: "Loom recap — onboarding call", tag: "Private", date: "Apr 03" },
    ];
    return (
        <CardShell>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                    <FolderTree className="size-3.5 text-zukvo-400" /> Document Hub
                </div>
                <div className="text-[11px] text-zinc-500 font-mono">5 / 124</div>
            </div>
            <div className="mt-4 divide-y divide-white/5 rounded-xl border border-white/10 overflow-hidden">
                {docs.map((d, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between px-4 py-3 hover:bg-white/[0.03] transition-colors"
                    >
                        <div className="flex items-center gap-3 min-w-0">
                            <span className="inline-flex size-7 items-center justify-center rounded-md bg-zukvo-500/10 text-zukvo-300 border border-zukvo-500/20 shrink-0">
                                <FileLock2 className="size-3.5" />
                            </span>
                            <span className="text-[13px] text-zinc-200 truncate">{d.name}</span>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-zukvo-300/80 border border-zukvo-500/20 rounded-full px-2 py-0.5">
                                {d.tag}
                            </span>
                            <span className="text-[11px] text-zinc-500 font-mono">{d.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </CardShell>
    );
}

function FinanceMock() {
    return (
        <CardShell>
            <div className="grid grid-cols-3 gap-3">
                <Stat label="Outstanding" value="$12,480" tone="amber" />
                <Stat label="Paid · 30d" value="$31,200" tone="emerald" />
                <Stat label="Tracked" value="142h" tone="indigo" />
            </div>
            <div className="mt-5 rounded-xl border border-white/10 overflow-hidden">
                <div className="grid grid-cols-12 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500 bg-white/[0.02]">
                    <div className="col-span-5">Invoice</div>
                    <div className="col-span-3">Client</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-2 text-right">Amount</div>
                </div>
                {[
                    ["INV-0241", "Northwind", "Paid", "$4,200", "emerald"],
                    ["INV-0240", "Pixelhaus", "Sent", "$2,800", "indigo"],
                    ["INV-0239", "Helix Labs", "Overdue", "$5,480", "rose"],
                    ["INV-0238", "Loop & Co", "Draft", "$1,950", "zinc"],
                ].map((r, i) => (
                    <div
                        key={i}
                        className="grid grid-cols-12 px-4 py-3 text-[13px] border-t border-white/5 items-center"
                    >
                        <div className="col-span-5 font-mono text-zinc-300">{r[0]}</div>
                        <div className="col-span-3 text-zinc-400">{r[1]}</div>
                        <div className="col-span-2">
                            <span
                                className={`text-[10px] uppercase tracking-[0.2em] rounded-full px-2 py-0.5 border ${
                                    {
                                        emerald: "text-emerald-300 border-emerald-400/30 bg-emerald-500/10",
                                        indigo: "text-zukvo-300 border-zukvo-500/30 bg-zukvo-500/10",
                                        rose: "text-rose-300 border-rose-400/30 bg-rose-500/10",
                                        zinc: "text-zinc-400 border-white/10 bg-white/5",
                                    }[r[4]]
                                }`}
                            >
                                {r[2]}
                            </span>
                        </div>
                        <div className="col-span-2 text-right text-white font-medium">{r[3]}</div>
                    </div>
                ))}
            </div>
        </CardShell>
    );
}

function Stat({ label, value, tone = "indigo" }) {
    const tones = {
        indigo: "text-zukvo-300",
        emerald: "text-emerald-300",
        amber: "text-amber-300",
    };
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">{label}</div>
            <div className={`mt-1 font-heading text-2xl font-medium ${tones[tone]}`}>
                {value}
            </div>
        </div>
    );
}

function PMMock() {
    const cols = [
        { title: "Backlog", count: 12, items: ["Auth refactor", "Editor toolbar", "Empty states"] },
        { title: "In progress", count: 5, items: ["BidIQ scoring v2", "Doc share links"] },
        { title: "Review", count: 3, items: ["RBAC matrix", "Client portal nav"] },
        { title: "Done", count: 28, items: ["Sprint complete modal", "Time tracker chip"] },
    ];
    return (
        <CardShell>
            <div className="flex items-center justify-between mb-4">
                <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                    Sprint · Cycle 3
                </div>
                <div className="text-[11px] text-zinc-500">5 days left</div>
            </div>
            <div className="grid grid-cols-4 gap-3">
                {cols.map((c, i) => (
                    <div
                        key={i}
                        className="rounded-xl border border-white/10 bg-white/[0.02] p-3"
                    >
                        <div className="flex items-center justify-between text-[11px]">
                            <span className="text-zinc-300 font-medium">{c.title}</span>
                            <span className="text-zinc-500">{c.count}</span>
                        </div>
                        <div className="mt-3 space-y-2">
                            {c.items.map((it, j) => (
                                <div
                                    key={j}
                                    className="rounded-md border border-white/10 bg-[#0E0E10] px-2.5 py-2 text-[12px] text-zinc-300"
                                >
                                    {it}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </CardShell>
    );
}

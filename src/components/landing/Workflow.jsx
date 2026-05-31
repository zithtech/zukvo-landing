import React from "react";
import { FolderTree, FileLock2, Link2, Trash2 } from "lucide-react";

import docHubMainImg from "@/assets/docHubmain.png";
import docTicketsImg from "@/assets/docTicketsattach.png";

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
];

export default function Workflow() {
    return (
        <section
            id="workflow"
            data-testid="workflow-section"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-20 space-y-16 md:space-y-20">
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

function DocMock() {
    return (
        <div className="relative pb-10 pr-4 md:pb-12 md:pr-6">
            {/* Ambient glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-12 left-1/4 size-72 rounded-full bg-zukvo-500/15 blur-[90px]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 right-1/4 size-56 rounded-full bg-violet-500/12 blur-[80px]"
            />

            {/* Main image — full */}
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/[0.12] shadow-[0_40px_90px_-24px_rgba(0,0,0,0.7),0_8px_30px_-12px_rgba(99,102,241,0.3)]">
                <img
                    src={docHubMainImg}
                    alt="Zukvo Document Hub"
                    className="block w-full h-auto"
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
                />
            </div>

            {/* Overlapping image — bottom-right, lifted above */}
            <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-[56%] overflow-hidden rounded-xl ring-1 ring-white/[0.16] shadow-[0_36px_70px_-16px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.04)_inset]">
                <img
                    src={docTicketsImg}
                    alt="Document linked to tickets"
                    className="block w-full h-auto"
                />
                {/* Floating link badge */}
                <span className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-zukvo-ink/85 backdrop-blur px-2 py-1 text-white shadow-lg ring-1 ring-white/10">
                    <Link2 className="size-3 text-zukvo-300" />
                    <span className="text-[9.5px] font-semibold tracking-tight">Linked to ticket</span>
                </span>
            </div>
        </div>
    );
}


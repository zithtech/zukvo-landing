import React from "react";
import { Twitter, Github, Linkedin } from "lucide-react";
import ZukvoLogo from "@/components/ZukvoLogo";

const COLS = [
    {
        title: "Product",
        links: ["Features", "Workflow", "Pricing", "Zithport extension", "Changelog"],
    },
    {
        title: "Company",
        links: ["About", "Customers", "Careers", "Press kit", "Contact"],
    },
    {
        title: "Resources",
        links: ["Docs", "Help center", "API", "Status", "Security"],
    },
    {
        title: "Legal",
        links: ["Privacy", "Terms", "DPA", "Cookies"],
    },
];

export default function Footer() {
    return (
        <footer
            data-testid="site-footer"
            className="relative bg-[#0A0A0A] text-white border-t border-white/10"
        >
            <div className="mx-auto max-w-7xl px-6 md:px-10 pt-20 pb-10">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
                    <div className="col-span-2">
                        <ZukvoLogo variant="dark" size={30} />
                        <p className="mt-5 text-[14px] text-zinc-400 leading-relaxed max-w-sm">
                            The work OS for freelancers, teams and companies. Capture, qualify,
                            ship — all in one place.
                        </p>
                        <div className="mt-6 flex items-center gap-2">
                            {[Twitter, Github, Linkedin].map((I, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    data-testid={`footer-social-${i}`}
                                    className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 text-zinc-300 hover:text-white hover:border-zukvo-500/40 transition-colors"
                                    aria-label="Social"
                                >
                                    <I className="size-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                    {COLS.map((c) => (
                        <div key={c.title}>
                            <div className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
                                {c.title}
                            </div>
                            <ul className="mt-4 space-y-2.5">
                                {c.links.map((l) => (
                                    <li key={l}>
                                        <a
                                            href="#"
                                            className="text-[13.5px] text-zinc-300 hover:text-white transition-colors"
                                        >
                                            {l}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-zinc-500">
                    <div data-testid="footer-copyright">
                        © {new Date().getFullYear()} Zukvo Labs. All rights reserved.
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-emerald-400" /> All systems
                        operational
                    </div>
                </div>

                {/* Massive wordmark */}
                <div className="mt-10 select-none pointer-events-none" data-testid="footer-bigmark">
                    <div
                        className="font-heading font-semibold tracking-[-0.06em] leading-none text-transparent"
                        style={{
                            fontSize: "clamp(80px, 18vw, 320px)",
                            WebkitTextStroke: "1px rgba(255,255,255,0.18)",
                            backgroundImage:
                                "linear-gradient(180deg, rgba(99,102,241,0.18), transparent 70%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                        }}
                    >
                        ZUKVO
                    </div>
                </div>
            </div>
        </footer>
    );
}

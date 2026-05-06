import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ZukvoLogo from "@/components/ZukvoLogo";

const LINKS = [
    { label: "Features", href: "#features" },
    { label: "Workflow", href: "#workflow" },
    { label: "For", href: "#audiences" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="site-nav"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "py-3" : "py-5"
            }`}
        >
            <div className="mx-auto max-w-7xl px-5 md:px-8">
                <div
                    className={`flex items-center justify-between rounded-full border transition-all duration-300 ${
                        scrolled
                            ? "border-zinc-200/80 bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(15,15,15,0.08)] px-3 pl-5 py-2"
                            : "border-transparent bg-transparent px-3 pl-5 py-2"
                    }`}
                >
                    <a href="#" className="shrink-0" data-testid="nav-logo-link">
                        <ZukvoLogo variant="light" size={28} />
                    </a>

                    <nav className="hidden md:flex items-center gap-1">
                        {LINKS.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                data-testid={`nav-link-${l.label.toLowerCase()}`}
                                className="px-3 py-2 text-[13px] font-medium text-zinc-700 hover:text-zukvo-600 transition-colors"
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-2">
                        <a
                            href="#login"
                            data-testid="nav-signin-link"
                            className="px-4 py-2 text-[13px] font-medium text-zinc-700 hover:text-zukvo-ink"
                        >
                            Sign in
                        </a>
                        <a
                            href="#start"
                            data-testid="nav-cta-button"
                            className="group inline-flex items-center gap-1.5 rounded-full bg-zukvo-ink text-white px-4 py-2 text-[13px] font-medium hover:bg-zukvo-600 transition-colors"
                        >
                            Get Zukvo
                            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>

                    <button
                        data-testid="nav-mobile-toggle"
                        onClick={() => setOpen((s) => !s)}
                        className="md:hidden inline-flex items-center justify-center size-9 rounded-full border border-zinc-200 bg-white"
                        aria-label="Toggle menu"
                    >
                        {open ? <X className="size-4" /> : <Menu className="size-4" />}
                    </button>
                </div>

                {open && (
                    <div
                        data-testid="nav-mobile-panel"
                        className="md:hidden mt-2 rounded-2xl bg-white border border-zinc-200 p-3 shadow-lg"
                    >
                        {LINKS.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="block px-3 py-2 text-sm text-zinc-700 hover:text-zukvo-600"
                            >
                                {l.label}
                            </a>
                        ))}
                        <a
                            href="#start"
                            className="mt-2 block text-center rounded-full bg-zukvo-ink text-white px-4 py-2 text-sm font-medium"
                        >
                            Get Zukvo
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}

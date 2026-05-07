import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ZukvoLogo from "@/components/ZukvoLogo";
import { PRODUCTS } from "@/data/products";

const LINKS = [
    { label: "Features", href: "/#features" },
    { label: "Workflow", href: "/#workflow" },
    { label: "For", href: "/#audiences" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setProductsOpen(false);
        setOpen(false);
    }, [location.pathname]);

    return (
        <header
            data-testid="site-nav"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
        >
            <div className="mx-auto max-w-7xl px-5 md:px-8">
                <div
                    className={`flex items-center justify-between rounded-full border transition-all duration-300 ${
                        scrolled
                            ? "border-zinc-200/80 bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(15,15,15,0.08)] px-3 pl-5 py-2"
                            : "border-transparent bg-transparent px-3 pl-5 py-2"
                    }`}
                >
                    <Link to="/" className="shrink-0" data-testid="nav-logo-link">
                        <ZukvoLogo variant="light" size={28} />
                    </Link>

                    <nav className="hidden md:flex items-center gap-1">
                        {/* Products mega dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setProductsOpen(true)}
                            onMouseLeave={() => setProductsOpen(false)}
                        >
                            <button
                                data-testid="nav-products-trigger"
                                onClick={() => setProductsOpen((s) => !s)}
                                className="inline-flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-zinc-700 hover:text-zukvo-600 transition-colors"
                            >
                                Products
                                <ChevronDown
                                    className={`size-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            {productsOpen && (
                                <div
                                    data-testid="nav-products-menu"
                                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px] max-w-[92vw]"
                                >
                                    <div className="rounded-2xl border border-zinc-200 bg-white shadow-[0_20px_60px_-20px_rgba(15,15,15,0.18)] p-3">
                                        <div className="grid grid-cols-2 gap-1">
                                            {PRODUCTS.map((p) => (
                                                <Link
                                                    key={p.slug}
                                                    to={
                                                        p.slug === "ticket-management" ||
                                                        p.slug === "document-hub"
                                                            ? `/products/${p.slug}`
                                                            : `/products#${p.slug}`
                                                    }
                                                    data-testid={`nav-product-${p.slug}`}
                                                    className="flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-zinc-50 transition-colors group"
                                                >
                                                    <span className="mt-0.5 inline-flex size-8 items-center justify-center rounded-lg bg-zukvo-500/10 text-zukvo-600 border border-zukvo-500/20 shrink-0 group-hover:bg-zukvo-500 group-hover:text-white transition-colors">
                                                        <p.icon className="size-4" />
                                                    </span>
                                                    <div className="min-w-0">
                                                        <div className="text-[13.5px] font-medium text-zukvo-ink">
                                                            {p.name}
                                                        </div>
                                                        <div className="text-[11.5px] text-zinc-500 leading-snug truncate">
                                                            {p.tagline}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="mt-2 flex items-center justify-between rounded-xl bg-zinc-50 border border-zinc-200 px-4 py-3">
                                            <div className="text-[12px] text-zinc-600">
                                                Explore every module, side by side.
                                            </div>
                                            <Link
                                                to="/products"
                                                data-testid="nav-products-explore"
                                                className="inline-flex items-center gap-1.5 rounded-full bg-zukvo-ink text-white px-3.5 py-1.5 text-[12px] font-medium hover:bg-zukvo-600 transition-colors"
                                            >
                                                Browse all
                                                <ArrowUpRight className="size-3.5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

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
                            href="/#start"
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
                        className="md:hidden mt-2 rounded-2xl bg-white border border-zinc-200 p-3 shadow-lg max-h-[80vh] overflow-y-auto"
                    >
                        <Link
                            to="/products"
                            onClick={() => setOpen(false)}
                            className="block px-3 py-2 text-sm font-medium text-zukvo-ink"
                        >
                            Products
                        </Link>
                        <div className="grid grid-cols-1 gap-0.5 pl-3 border-l border-zinc-200 ml-3 mb-1">
                            {PRODUCTS.map((p) => (
                                <Link
                                    key={p.slug}
                                    to={`/products#${p.slug}`}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-2 px-3 py-1.5 text-[13px] text-zinc-600 hover:text-zukvo-600"
                                >
                                    <p.icon className="size-3.5" />
                                    {p.name}
                                </Link>
                            ))}
                        </div>
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
                            href="/#start"
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

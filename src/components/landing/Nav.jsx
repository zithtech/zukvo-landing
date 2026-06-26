import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import mainLogo from "@/assets/mainLogo.png";
import whiteLogo from "@/assets/zukvowhitelogo.png";
import ZukvoWordmark from "@/components/ZukvoWordmark";
import { PRODUCTS } from "@/data/products";

const DARK_BG_ROUTES = new Set(["/contact-sales"]);

const LINKS = [
    { label: "Features", href: "/#features" },
    { label: "For", href: "/#audiences" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
    { label: "About", href: "/about" },
];

const isPageRoute = (href) => href.startsWith("/") && !href.includes("#");

const READY_SLUGS = new Set([
    "ticket-management",
    "document-hub",
    "project-management",
    "invoice",
    "daily-updates",
    "time-tracking",
    "zithport",
    "proposals",
    "leads-management",
    "client-management",
    "client-portal",
    "performance-management",
    "squads",
    "accounts",
    "mail-calendar",
    "escalation-management",
]);

const INTRO_STORAGE_KEY = "zk_logo_intro_played";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window === "undefined") return false;
        return window.matchMedia("(max-width: 1023px)").matches;
    });
    const [playIntro] = useState(() => {
        if (typeof window === "undefined") return false;
        try {
            return !window.sessionStorage.getItem(INTRO_STORAGE_KEY);
        } catch {
            return true;
        }
    });
    const location = useLocation();

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 1023px)");
        const onChange = (e) => setIsMobile(e.matches);
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);
    const onDarkBg = DARK_BG_ROUTES.has(location.pathname) && !scrolled;
    const logoSrc = onDarkBg ? whiteLogo : mainLogo;

    const isLinkActive = (href) => {
        if (isPageRoute(href)) return location.pathname === href;
        if (href.startsWith("/#")) {
            if (location.pathname !== "/") return false;
            const hash = href.split("#")[1]; // e.g. "features"
            if (activeSection) {
                return activeSection === hash;
            }
            return location.hash === "#" + hash;
        }
        return false;
    };
    const productsActive =
        location.pathname === "/products" || location.pathname.startsWith("/products/");
    const contactSalesActive = location.pathname === "/contact-sales";

    useEffect(() => {
        const sectionIds = ["features", "audiences", "pricing", "faq"];

        const handleScroll = () => {
            // Update scrolled header state
            setScrolled(window.scrollY > 12);

            if (location.pathname !== "/") {
                setActiveSection("");
                return;
            }

            // Top-of-page reset
            if (window.scrollY < 100) {
                setActiveSection("");
                return;
            }

            const scrollPosition = window.scrollY + window.innerHeight / 3;
            let currentSection = "";

            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const top = rect.top + window.scrollY;
                    const height = rect.height;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        currentSection = id;
                        break;
                    }
                }
            }

            // Fallback: if not in any specific range but scrolled down, find the closest one
            if (!currentSection) {
                let minDistance = Infinity;
                let closestId = "";
                for (const id of sectionIds) {
                    const el = document.getElementById(id);
                    if (el) {
                        const rect = el.getBoundingClientRect();
                        const top = rect.top + window.scrollY;
                        const distance = Math.abs(scrollPosition - top);
                        if (distance < minDistance) {
                            minDistance = distance;
                            closestId = id;
                        }
                    }
                }
                currentSection = closestId;
            }

            setActiveSection(currentSection);
        };

        // Attach scroll listener
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Run immediately on path/scroll change
        handleScroll();

        // Defer another check to ensure DOM has rendered
        const timeoutId = setTimeout(handleScroll, 100);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        };
    }, [location.pathname]);

    useEffect(() => {
        if (!playIntro) return;
        try {
            window.sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
        } catch {
            /* sessionStorage unavailable — intro will replay; acceptable */
        }
    }, [playIntro]);

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
                    className={`flex items-center justify-between rounded-full border transition-all duration-300 ${scrolled
                        ? "border-zinc-200/80 bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(15,15,15,0.08)] px-3 pl-5 py-2"
                        : "border-transparent bg-transparent px-3 pl-5 py-2"
                        }`}
                >
                    <Link to="/" className="flex items-center gap-2 md:gap-2.5 min-w-0 shrink" data-testid="nav-logo-link">
                        <span className={`inline-flex ${playIntro ? "zk-logo-runner" : ""}`}>
                            {playIntro && (
                                <span className="zk-logo-wind" aria-hidden="true">
                                    <span className="zk-logo-wisp" style={{ "--zk-wisp-top": "22%", "--zk-wisp-width": "44px", "--zk-wisp-delay": "0.05s" }} />
                                    <span className="zk-logo-wisp" style={{ "--zk-wisp-top": "38%", "--zk-wisp-width": "78px", "--zk-wisp-delay": "0.35s" }} />
                                    <span className="zk-logo-wisp zk-logo-wisp--alt" style={{ "--zk-wisp-top": "52%", "--zk-wisp-width": "92px", "--zk-wisp-delay": "0.18s" }} />
                                    <span className="zk-logo-wisp" style={{ "--zk-wisp-top": "68%", "--zk-wisp-width": "60px", "--zk-wisp-delay": "0.48s" }} />
                                    <span className="zk-logo-wisp zk-logo-wisp--alt" style={{ "--zk-wisp-top": "84%", "--zk-wisp-width": "50px", "--zk-wisp-delay": "0.22s" }} />
                                </span>
                            )}
                            <span className={`inline-flex ${playIntro ? "zk-logo-stride" : ""}`}>
                                <img
                                    src={logoSrc}
                                    alt="Zukvo"
                                    width={isMobile ? 32 : 36}
                                    height={isMobile ? 32 : 36}
                                    style={{
                                        width: isMobile ? 32 : 36,
                                        height: isMobile ? 32 : 36,
                                        objectFit: "contain",
                                    }}
                                    className="inline-block select-none"
                                    draggable="false"
                                />
                            </span>
                        </span>
                        <ZukvoWordmark
                            size={isMobile ? 17 : 22}
                            variant={onDarkBg ? "dark" : "light"}
                            autoShowDelay={playIntro ? 2650 : 0}
                            autoShowDuration={2000}
                        />
                    </Link>

                    <nav className="hidden lg:flex items-center gap-1">
                        {/* Products mega dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setProductsOpen(true)}
                            onMouseLeave={() => setProductsOpen(false)}
                        >
                            <button
                                data-testid="nav-products-trigger"
                                onClick={() => setProductsOpen((s) => !s)}
                                className={`relative inline-flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors ${productsActive
                                    ? "text-zukvo-600"
                                    : onDarkBg
                                        ? "text-zinc-300 hover:text-white"
                                        : "text-zinc-700 hover:text-zukvo-600"
                                    }`}
                            >
                                Products
                                <ChevronDown
                                    className={`size-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                                />
                                {productsActive && (
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-zukvo-500"
                                    />
                                )}
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
                                                        READY_SLUGS.has(p.slug)
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

                        {LINKS.map((l) => {
                            const active = isLinkActive(l.href);
                            const cls = `relative px-3 py-2 text-[13px] font-medium transition-colors ${active
                                ? "text-zukvo-600"
                                : onDarkBg
                                    ? "text-zinc-300 hover:text-white"
                                    : "text-zinc-700 hover:text-zukvo-600"
                                }`;
                            return isPageRoute(l.href) ? (
                                <Link
                                    key={l.label}
                                    to={l.href}
                                    data-testid={`nav-link-${l.label.toLowerCase()}`}
                                    className={cls}
                                >
                                    {l.label}
                                    {active && (
                                        <span
                                            aria-hidden="true"
                                            className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-zukvo-500"
                                        />
                                    )}
                                </Link>
                            ) : (
                                <a
                                    key={l.label}
                                    href={l.href}
                                    data-testid={`nav-link-${l.label.toLowerCase()}`}
                                    className={cls}
                                >
                                    {l.label}
                                    {active && (
                                        <span
                                            aria-hidden="true"
                                            className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-zukvo-500"
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </nav>

                    <div className="hidden lg:flex items-center gap-2">
                        <a
                            href={`${import.meta.env.VITE_APP_URL || "https://app.zukvo.com"}/login`}
                            data-testid="nav-signin-link"
                            className={`px-4 py-2 text-[13px] font-medium transition-colors ${onDarkBg
                                ? "text-zinc-300 hover:text-white"
                                : "text-zinc-700 hover:text-zukvo-ink"
                                }`}
                        >
                            Sign in
                        </a>
                        <a
                            href="/signup"
                            data-testid="nav-cta-button"
                            className={`group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${onDarkBg
                                ? "bg-white/10 text-white hover:bg-white/20 border border-white/15"
                                : "bg-zukvo-ink text-white hover:bg-zukvo-600"
                                }`}
                        >
                            Get Zukvo
                            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                        <Link
                            to="/contact-sales"
                            data-testid="nav-contact-sales"
                            aria-current={contactSalesActive ? "page" : undefined}
                            className={`group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${contactSalesActive
                                ? "bg-zukvo-500 text-white border border-zukvo-500 hover:bg-zukvo-600"
                                : "border border-zinc-300 bg-white/70 backdrop-blur text-zukvo-ink hover:border-zukvo-500/40 hover:bg-white"
                                }`}
                        >
                            Contact Sales
                            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>

                    <button
                        data-testid="nav-mobile-toggle"
                        onClick={() => setOpen((s) => !s)}
                        className={`lg:hidden shrink-0 inline-flex items-center justify-center size-9 rounded-full border transition-colors ${onDarkBg
                            ? "border-white/20 bg-white/5 text-white hover:bg-white/10"
                            : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"
                            }`}
                        aria-label="Toggle menu"
                    >
                        {open ? <X className="size-4" /> : <Menu className="size-4" />}
                    </button>
                </div>

                {open && (
                    <div
                        data-testid="nav-mobile-panel"
                        className="lg:hidden mt-2 rounded-2xl bg-white border border-zinc-200 p-3 shadow-lg max-h-[80vh] overflow-y-auto"
                    >
                        <Link
                            to="/products"
                            onClick={() => setOpen(false)}
                            className={`block px-3 py-2 text-sm font-medium rounded-md ${productsActive
                                ? "text-zukvo-600 bg-zukvo-500/10"
                                : "text-zukvo-ink"
                                }`}
                        >
                            Products
                        </Link>
                        <div className="grid grid-cols-1 gap-0.5 pl-3 border-l border-zinc-200 ml-3 mb-1">
                            {PRODUCTS.map((p) => (
                                <Link
                                    key={p.slug}
                                    to={
                                        READY_SLUGS.has(p.slug)
                                            ? `/products/${p.slug}`
                                            : `/products#${p.slug}`
                                    }
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-2 px-3 py-1.5 text-[13px] text-zinc-600 hover:text-zukvo-600"
                                >
                                    <p.icon className="size-3.5" />
                                    {p.name}
                                </Link>
                            ))}
                        </div>
                        {LINKS.map((l) => {
                            const active = isLinkActive(l.href);
                            const cls = `block px-3 py-2 text-sm rounded-md ${active
                                ? "text-zukvo-600 bg-zukvo-500/10 font-medium"
                                : "text-zinc-700 hover:text-zukvo-600"
                                }`;
                            return isPageRoute(l.href) ? (
                                <Link
                                    key={l.label}
                                    to={l.href}
                                    onClick={() => setOpen(false)}
                                    className={cls}
                                >
                                    {l.label}
                                </Link>
                            ) : (
                                <a
                                    key={l.label}
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className={cls}
                                >
                                    {l.label}
                                </a>
                            );
                        })}
                        <a
                            href="/signup"
                            className="mt-2 block text-center rounded-full bg-zukvo-ink text-white px-4 py-2 text-sm font-medium"
                        >
                            Get Zukvo
                        </a>
                        <Link
                            to="/contact-sales"
                            onClick={() => setOpen(false)}
                            className={`mt-2 block text-center rounded-full px-4 py-2 text-sm font-medium ${contactSalesActive
                                ? "bg-zukvo-500 text-white border border-zukvo-500"
                                : "border border-zinc-300 bg-white text-zukvo-ink"
                                }`}
                        >
                            Contact Sales
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}

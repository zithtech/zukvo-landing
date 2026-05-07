import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import { PRODUCTS } from "@/data/products";

const READY = new Set(["ticket-management"]);

export default function ProductsIndex() {
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
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
        );
        targets.forEach((t) => obs.observe(t));
        return () => obs.disconnect();
    }, []);

    // group by kicker
    const groups = PRODUCTS.reduce((acc, p) => {
        (acc[p.kicker] ||= []).push(p);
        return acc;
    }, {});

    return (
        <main
            data-testid="products-index-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink overflow-x-hidden"
        >
            <Nav />
            <section className="relative pt-32 md:pt-40 pb-16 zk-mesh">
                <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_75%)] pointer-events-none" />
                <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                    <div className="zk-reveal max-w-3xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-600">
                            Products
                        </span>
                        <h1 className="mt-5 font-heading font-medium text-5xl md:text-7xl tracking-[-0.04em] leading-[1.02]">
                            One product. <br />
                            Fourteen modules.
                        </h1>
                        <p className="mt-6 text-[16.5px] md:text-lg text-zinc-600 leading-relaxed max-w-2xl">
                            Each Zukvo module is built to stand alone — and to compose into a single
                            workflow when you need them together. Click any tile for the deep dive.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative bg-[#0A0A0A] text-white">
                <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 space-y-16">
                    {Object.entries(groups).map(([kicker, items]) => (
                        <div key={kicker} className="zk-reveal">
                            <div className="flex items-end justify-between mb-6">
                                <div>
                                    <div className="text-[11px] uppercase tracking-[0.22em] text-zukvo-400 font-bold">
                                        {kicker}
                                    </div>
                                    <div className="mt-2 font-heading text-2xl md:text-3xl text-white tracking-tight">
                                        {items.length} {items.length === 1 ? "module" : "modules"}
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {items.map((p) => {
                                    const ready = READY.has(p.slug);
                                    const Card = (
                                        <div
                                            data-testid={`product-card-${p.slug}`}
                                            className={`group relative h-full rounded-2xl border border-white/10 bg-[#0E0E10] p-6 hover:border-zukvo-500/40 transition-colors ${
                                                ready ? "" : "opacity-80"
                                            }`}
                                        >
                                            <div className="flex items-start justify-between">
                                                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-zukvo-500/10 text-zukvo-300 border border-zukvo-500/20 group-hover:bg-zukvo-500 group-hover:text-white transition-colors">
                                                    <p.icon className="size-5" />
                                                </span>
                                                {ready ? (
                                                    <ArrowUpRight className="size-4 text-zinc-500 group-hover:text-white transition-colors" />
                                                ) : (
                                                    <span className="text-[10px] uppercase tracking-[0.2em] rounded-full border border-white/10 bg-white/5 text-zinc-400 px-2 py-0.5">
                                                        Soon
                                                    </span>
                                                )}
                                            </div>
                                            <div className="mt-5 font-heading text-xl text-white tracking-tight">
                                                {p.name}
                                            </div>
                                            <div className="mt-1.5 text-[13px] text-zukvo-300/90">
                                                {p.tagline}
                                            </div>
                                            <p className="mt-3 text-[13.5px] text-zinc-400 leading-relaxed line-clamp-3">
                                                {p.description}
                                            </p>
                                        </div>
                                    );
                                    return ready ? (
                                        <Link
                                            key={p.slug}
                                            to={`/products/${p.slug}`}
                                            className="block h-full"
                                        >
                                            {Card}
                                        </Link>
                                    ) : (
                                        <div key={p.slug} className="h-full">
                                            {Card}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    <div className="zk-reveal rounded-3xl border border-white/10 bg-[#0E0E10] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
                        <div>
                            <div className="text-[11px] uppercase tracking-[0.22em] text-zukvo-400 font-bold">
                                Featured this week
                            </div>
                            <h2 className="mt-3 font-heading text-3xl md:text-4xl tracking-tight">
                                Ticket Management — the deep dive.
                            </h2>
                            <p className="mt-2 text-zinc-400 max-w-xl text-[14.5px]">
                                Three creation modes, sprint completion flows, smart docs, and a QA
                                workspace with HiveBug AI.
                            </p>
                        </div>
                        <Link
                            to="/products/ticket-management"
                            data-testid="products-feature-cta"
                            className="inline-flex items-center gap-2 rounded-full bg-zukvo-500 hover:bg-zukvo-600 px-5 py-3 text-sm font-medium text-white transition-colors"
                        >
                            Explore Ticket Management
                            <ArrowRight className="size-4" />
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

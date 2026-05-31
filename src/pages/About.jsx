import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import { ZMark } from "@/components/ZukvoLogo";
import zithtechLogo from "@/assets/zithtechlogo.png";

export default function About() {
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
            data-testid="about-page"
            className="relative bg-[#FAFAFA] text-zukvo-ink overflow-x-clip"
        >
            <SEO />
            <Nav />

            {/* Hero */}
            <section
                data-testid="about-hero"
                className="relative pt-32 md:pt-40 pb-16 md:pb-20 zk-mesh"
            >
                <div className="absolute inset-0 zk-dot-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_75%)] pointer-events-none" />
                <div className="relative mx-auto max-w-4xl px-6 md:px-10 text-center">
                    <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zukvo-600">
                        <Sparkles className="size-3.5" />
                        About
                    </div>
                    <h1
                        data-testid="about-headline"
                        className="zk-reveal mt-6 font-heading font-medium text-[40px] sm:text-5xl md:text-6xl tracking-[-0.04em] leading-[1.02] text-zukvo-ink"
                    >
                        About <span className="text-zukvo-500">Zukvo</span>.
                    </h1>
                    <p className="zk-reveal mt-6 text-[15.5px] md:text-[17px] text-zinc-600 leading-relaxed max-w-2xl mx-auto">
                        The Work OS for freelancers, teams and companies — built to replace the
                        scattered stack with one calm place to run real work.
                    </p>
                </div>
            </section>

            {/* Built by Zithtech */}
            <section
                data-testid="about-zithtech"
                className="relative bg-[#0A0A0A] text-white overflow-hidden"
            >
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none opacity-70"
                    style={{
                        backgroundImage:
                            "radial-gradient(50% 60% at 20% 10%, rgba(139,92,246,0.10), transparent 60%), radial-gradient(40% 50% at 80% 80%, rgba(99,102,241,0.10), transparent 60%)",
                    }}
                />
                <div className="relative mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-24 text-center">
                    <div className="zk-reveal text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                        Built by
                    </div>
                    <h2
                        className="zk-reveal mt-3 inline-flex items-center justify-center gap-3 md:gap-4 font-heading font-medium tracking-[-0.04em] text-white"
                        style={{ fontSize: "clamp(40px, 7vw, 72px)" }}
                    >
                        <img
                            src={zithtechLogo}
                            alt="Zithtech"
                            className="inline-block select-none object-contain"
                            style={{ height: "0.9em", width: "auto" }}
                            draggable="false"
                        />
                        Zithtech.
                    </h2>
                    <p className="zk-reveal mt-7 mx-auto max-w-2xl text-[16px] md:text-[19px] text-zinc-300 leading-relaxed italic">
                        “We build digital products and custom software that turn ideas into
                        scalable realities.”
                    </p>
                    <div className="zk-reveal mt-9 flex justify-center">
                        <a
                            href="https://www.zithtech.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="about-zithtech-link"
                            className="group inline-flex items-center gap-2 rounded-full bg-white text-zukvo-ink px-5 py-2.5 text-[13.5px] font-medium hover:bg-zinc-100 transition-colors"
                        >
                            Visit zithtech.com
                            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Flagship product */}
            <section data-testid="about-flagship" className="relative bg-[#FAFAFA]">
                <div className="mx-auto max-w-3xl px-6 md:px-10 py-20 md:py-24 text-center">
                    <div className="zk-reveal inline-flex items-center justify-center">
                        <ZMark size={56} />
                    </div>
                    <h3
                        data-testid="about-flagship-headline"
                        className="zk-reveal mt-6 font-heading font-medium text-3xl md:text-5xl tracking-[-0.03em] text-zukvo-ink"
                    >
                        Zukvo is our{" "}
                        <span className="text-zukvo-500">flagship product</span>.
                    </h3>
                    <p className="zk-reveal mt-5 text-[14.5px] md:text-[15.5px] text-zinc-600 leading-relaxed max-w-xl mx-auto">
                        Born from the same hands that ship custom software at Zithtech, Zukvo
                        carries forward the same craft, opinion and care — distilled into one
                        place to run modern work.
                    </p>
                    <div className="zk-reveal mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            to="/products"
                            data-testid="about-explore-link"
                            className="group inline-flex items-center gap-2 rounded-full bg-zukvo-ink text-white px-5 py-2.5 text-[13.5px] font-medium hover:bg-zukvo-600 transition-colors"
                        >
                            Explore Zukvo
                            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

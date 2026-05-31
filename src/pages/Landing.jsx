import React, { useEffect } from "react";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import FeaturesBento from "@/components/landing/FeaturesBento";
import Workflow from "@/components/landing/Workflow";
import Audiences from "@/components/landing/Audiences";
import Pricing from "@/components/landing/Pricing";
import ComingSoon from "@/components/landing/ComingSoon";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Landing() {
    useEffect(() => {
        // Global reveal observer for all .zk-reveal items on the page
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
        <main data-testid="landing-page" className="relative bg-[#FAFAFA] text-zukvo-ink overflow-x-clip">
            <Nav />
            <Hero />
            <SocialProof />
            <FeaturesBento />
            <Workflow />
            <Audiences />
            <Pricing />
            <ComingSoon />
            <FAQ />
            <FinalCTA />
            <Footer />
        </main>
    );
}

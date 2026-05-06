import React from "react";
import { ArrowRight } from "lucide-react";
import { ZMark } from "@/components/ZukvoLogo";

export default function FinalCTA() {
    return (
        <section
            id="start"
            data-testid="final-cta-section"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 pb-12">
                <div
                    className="zk-reveal relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0E0E10] p-10 md:p-16 text-center"
                    style={{
                        backgroundImage:
                            "radial-gradient(60% 80% at 50% 0%, rgba(99,102,241,0.18), transparent 60%)",
                    }}
                >
                    <div className="flex justify-center">
                        <ZMark size={56} />
                    </div>
                    <h2 className="mt-7 font-heading font-medium text-4xl md:text-6xl tracking-[-0.03em] text-white">
                        Stop juggling tabs.
                        <br />
                        <span className="text-zukvo-400">Start running a real business.</span>
                    </h2>
                    <p className="mt-5 max-w-2xl mx-auto text-zinc-400 text-[15px] md:text-base leading-relaxed">
                        14 days free. No card. Cancel anytime — but you won't.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                            href="#trial"
                            data-testid="final-cta-primary"
                            className="group inline-flex items-center gap-2 rounded-full bg-zukvo-500 hover:bg-zukvo-600 transition-colors text-white px-6 py-3.5 text-sm font-medium"
                        >
                            Start free trial
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                        </a>
                        <a
                            href="#contact"
                            data-testid="final-cta-secondary"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors text-white px-6 py-3.5 text-sm font-medium"
                        >
                            Talk to sales
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

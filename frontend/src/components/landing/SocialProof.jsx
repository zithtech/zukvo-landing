import React from "react";

const LOGOS = [
    "Northwind", "Loop & Co", "Pixelhaus", "Stratus Labs", "Helix",
    "Frame.io", "Atelier", "Quantum", "Forge Studio", "Verge",
    "Numina", "BlueRiver",
];

export default function SocialProof() {
    return (
        <section
            data-testid="social-proof-section"
            className="relative bg-[#0A0A0A] text-white overflow-hidden"
        >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 pt-8 pb-10">
                <p
                    data-testid="social-proof-label"
                    className="zk-reveal text-center text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-400"
                >
                    Trusted by independent operators & growing studios
                </p>

                <div className="zk-reveal mt-8 relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                    <div className="zk-marquee flex w-max gap-14">
                        {[...LOGOS, ...LOGOS].map((name, i) => (
                            <span
                                key={i}
                                className="text-zinc-500 hover:text-white transition-colors font-heading text-2xl tracking-tight whitespace-nowrap"
                                style={{
                                    fontStyle: i % 3 === 0 ? "italic" : "normal",
                                    fontWeight: i % 2 === 0 ? 600 : 400,
                                }}
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

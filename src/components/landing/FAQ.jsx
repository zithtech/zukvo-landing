import React, { useState } from "react";
import { Plus } from "lucide-react";

const ITEMS = [
    {
        q: "What is Zithport, and is it free?",
        a: "Zithport is the Zukvo browser extension. It captures job postings from any board (Upwork, Contra, LinkedIn, Niche sites) and saves them as structured Leads inside Zukvo. It's included on every plan — including the free trial.",
    },
    {
        q: "How does BidIQ decide whether I should bid?",
        a: "BidIQ scores each lead across fit, competitive density, pricing band, and risk. It uses your past wins, your skill graph, and the lead's signals (budget, length, posting age) to produce a 0–100 verdict and a recommended action.",
    },
    {
        q: "Can I bring an existing client list with me?",
        a: "Yes. Import clients via CSV during onboarding, or connect from common tools. You can also convert any Lead into a Client + Project with a single click.",
    },
    {
        q: "Does Zukvo work for non-freelance teams too?",
        a: "Absolutely. Companies use Zukvo as their internal work OS — RBAC, project management, sprints, document hub, and finance suite are all production-ready.",
    },
    {
        q: "Is there a free plan?",
        a: "Solo Freelancer starts free for 14 days, no card required. After the trial, you can stay on a generous free tier or upgrade as you grow.",
    },
    {
        q: "How is data kept private?",
        a: "Public/private sharing is enforced at the document and project level, with full audit trails on Company plan. Your data never trains shared AI models.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState(0);
    return (
        <section
            id="faq"
            data-testid="faq-section"
            className="relative bg-[#0A0A0A] text-white"
        >
            <div className="relative mx-auto max-w-5xl px-6 md:px-10 py-14 md:py-20">
                <div className="zk-reveal grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-5">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                            FAQ
                        </span>
                        <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl tracking-[-0.03em]">
                            Common questions, clear answers.
                        </h2>
                        <p className="mt-5 text-zinc-400 text-[15px] leading-relaxed">
                            Still curious? Reach out — we read every message.
                        </p>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#0E0E10] overflow-hidden">
                            {ITEMS.map((it, i) => (
                                <button
                                    key={i}
                                    data-testid={`faq-item-${i}`}
                                    onClick={() => setOpen(open === i ? -1 : i)}
                                    className="w-full text-left"
                                >
                                    <div className="flex items-start justify-between gap-6 px-6 py-5">
                                        <span className="font-heading font-medium text-[16px] md:text-[17px] text-white">
                                            {it.q}
                                        </span>
                                        <Plus
                                            className={`size-4 text-zukvo-400 mt-1 shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""
                                                }`}
                                        />
                                    </div>
                                    <div
                                        className={`grid transition-all duration-300 ease-out ${open === i
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="px-6 pb-5 -mt-1 text-[14px] text-zinc-400 leading-relaxed">
                                                {it.a}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

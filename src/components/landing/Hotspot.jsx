import React from "react";
import { Briefcase, Newspaper, Calendar, FileText, Bell, MessageSquare, ArrowRight, Rss } from "lucide-react";

export default function Hotspot() {
    return (
        <section
            id="hotspot"
            data-testid="hotspot-section"
            className="relative bg-[#0A0A0A] text-white overflow-hidden"
        >
            {/* Subtle dot grid */}
            <div className="absolute inset-0 zk-dot-grid opacity-30 pointer-events-none [mask-image:radial-gradient(60%_50%_at_50%_30%,black,transparent_75%)]" />

            <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-16">
                {/* Heading */}
                <div className="max-w-3xl">
                    <span className="zk-reveal inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-300 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                        <Rss className="size-2.5 text-zukvo-400" />
                        Community Hotspot
                    </span>
                    <h2
                        className="zk-reveal mt-4 font-heading font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em] drop-shadow-sm"
                    >
                        Stay connected with what's happening.
                    </h2>
                    <p className="zk-reveal mt-3 text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
                        Discover internal openings, catch up on the latest circulation, and read our most recent knowledge base articles.
                    </p>
                </div>

                {/* Bento grid */}
                <div className="zk-reveal mt-10 grid grid-cols-1 md:grid-cols-12 gap-4">
                    
                    {/* Internal Openings */}
                    <div className="md:col-span-5 relative group rounded-2xl border border-white/10 bg-gradient-to-b from-[#0E0E10] to-[#0A0A0A] p-5 md:p-6 overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.05)]">
                        {/* Glow effect */}
                        <div aria-hidden className="absolute -top-24 -left-12 size-48 rounded-full bg-zukvo-500/10 blur-[60px] pointer-events-none" />

                        <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Careers
                        </div>
                        <h3 className="mt-2 font-heading font-medium text-xl md:text-2xl leading-[1.15] tracking-[-0.02em]">
                            Internal Openings
                        </h3>
                        <p className="mt-2 text-[13px] leading-relaxed text-zinc-400">
                            Explore new opportunities and grow your career with us. Apply internally before they go public.
                        </p>

                        <div className="mt-5 space-y-2.5 relative z-10">
                            <JobCard title="Senior Frontend Engineer" dept="Engineering" type="Remote" />
                            <JobCard title="Product Designer" dept="Design" type="Hybrid" />
                            <JobCard title="Growth Marketer" dept="Marketing" type="Remote" />
                        </div>
                    </div>

                    {/* Circulation */}
                    <div className="md:col-span-7 relative group rounded-2xl border border-zukvo-500/30 bg-[#0A0A12] p-5 md:p-6 overflow-hidden transition-all duration-300 hover:border-zukvo-500/50 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.2)]">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -inset-px rounded-2xl"
                            style={{
                                background:
                                    "radial-gradient(80% 100% at 100% 0%, rgba(99,102,241,0.15), transparent 70%)",
                            }}
                        />
                        <div aria-hidden className="absolute -bottom-16 -right-12 size-56 rounded-full bg-violet-500/15 blur-[70px] pointer-events-none" />

                        <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Circulation
                        </div>
                        <h3 className="mt-2 font-heading font-medium text-xl md:text-2xl leading-[1.15] tracking-[-0.02em]">
                            Updates & Announcements
                        </h3>
                        <p className="mt-2 text-[13px] leading-relaxed text-zinc-400">
                            Everything you need to know, straight from the source.
                        </p>

                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                            <CirculationCard icon={Calendar} title="Events" desc="Upcoming team building and workshops" color="text-amber-400" bg="bg-amber-500/10" border="border-amber-400/20" glow="shadow-[0_0_15px_-3px_rgba(251,191,36,0.15)]" />
                            <CirculationCard icon={FileText} title="Policies" desc="Latest company guidelines and rules" color="text-emerald-400" bg="bg-emerald-500/10" border="border-emerald-400/20" glow="shadow-[0_0_15px_-3px_rgba(52,211,153,0.15)]" />
                            <CirculationCard icon={Bell} title="Announcements" desc="Important updates from leadership" color="text-zukvo-400" bg="bg-zukvo-500/10" border="border-zukvo-400/20" glow="shadow-[0_0_15px_-3px_rgba(99,102,241,0.15)]" />
                            <CirculationCard icon={MessageSquare} title="Note" desc="Quick notes and team shoutouts" color="text-rose-400" bg="bg-rose-500/10" border="border-rose-400/20" glow="shadow-[0_0_15px_-3px_rgba(244,63,94,0.15)]" />
                        </div>
                    </div>

                    {/* Blogs */}
                    <div className="md:col-span-12 relative group rounded-2xl border border-white/10 bg-[#0E0E10] p-5 md:p-6 overflow-hidden transition-all duration-300 hover:border-white/20">
                        {/* Subtle top gradient line */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />

                        <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-zukvo-400">
                            Knowledge Base
                        </div>
                        <h3 className="mt-2 font-heading font-medium text-xl md:text-2xl leading-[1.15] tracking-[-0.02em]">
                            Latest Insights
                        </h3>

                        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <BlogCard
                                category="Engineering"
                                title="How we scaled our architecture to handle 10x traffic"
                                date="Aug 10, 2026"
                                readTime="5 min"
                            />
                            <BlogCard
                                category="Design"
                                title="The evolution of our design system"
                                date="Aug 05, 2026"
                                readTime="4 min"
                            />
                            <BlogCard
                                category="Culture"
                                title="Why async communication works for us"
                                date="Jul 28, 2026"
                                readTime="6 min"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function JobCard({ title, dept, type }) {
    return (
        <div className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] hover:shadow-[0_4px_20px_-5px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 cursor-pointer backdrop-blur-sm">
            <div>
                <div className="text-[13px] font-semibold text-white group-hover:text-zukvo-300 transition-colors">{title}</div>
                <div className="mt-1 flex items-center gap-1.5 text-[11px] text-zinc-400">
                    <span>{dept}</span>
                    <span className="size-1 rounded-full bg-zinc-600" />
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-1.5 py-0.5 text-[9px] uppercase tracking-wider">{type}</span>
                </div>
            </div>
            <span className="inline-flex size-7 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-all duration-300 group-hover:bg-zukvo-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:rotate-[-45deg]">
                <ArrowRight className="size-3.5" />
            </span>
        </div>
    );
}

function CirculationCard({ icon: Icon, title, desc, color, bg, border, glow }) {
    return (
        <div className={`flex flex-col rounded-xl border ${border} ${bg} ${glow} p-4 transition-all duration-300 hover:-translate-y-1 hover:brightness-110 cursor-pointer backdrop-blur-md`}>
            <span className={`inline-flex size-8 items-center justify-center rounded-lg bg-black/20 ${color} shadow-inner border border-white/5`}>
                <Icon className="size-4" />
            </span>
            <div className="mt-3 text-[14px] font-semibold text-white">{title}</div>
            <div className="mt-1 text-[12px] text-zinc-400 leading-relaxed">{desc}</div>
        </div>
    );
}

function BlogCard({ category, title, date, readTime }) {
    return (
        <div className="group cursor-pointer rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1 backdrop-blur-sm">
            <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-zukvo-400 flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-zukvo-500 animate-pulse" />
                {category}
            </div>
            <div className="mt-2.5 text-[14px] font-semibold leading-snug text-white group-hover:text-zukvo-300 transition-colors">
                {title}
            </div>
            <div className="mt-4 flex items-center gap-2.5 text-[11px] text-zinc-400">
                <span>{date}</span>
                <span className="size-1 rounded-full bg-zinc-600" />
                <span className="flex items-center gap-1.5">
                    <Calendar className="size-3" />
                    {readTime}
                </span>
            </div>
        </div>
    );
}

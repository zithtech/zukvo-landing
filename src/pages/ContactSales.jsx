import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    ArrowRight,
    CalendarCheck,
    Sparkles,
    ShieldCheck,
    Headphones,
    ArrowLeftRight,
    CheckCircle2,
    Mail,
    Clock,
    Lock,
    Star,
} from "lucide-react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import { ZMark } from "@/components/ZukvoLogo";

const VALUE_PROPS = [
    {
        icon: CalendarCheck,
        title: "Walkthrough tailored to your stack",
        sub: "Built around your actual tools, team shape and current workflow — no canned demo.",
    },
    {
        icon: Sparkles,
        title: "Pricing & deployment, mapped out",
        sub: "Self-serve, team, or enterprise — with the deployment path that matches your security needs.",
    },

    {
        icon: Headphones,
        title: "Dedicated onboarding lead",
        sub: "One human guides you from kickoff through the first 90 days. No ticket queue.",
    },
];

const SIZES = [
    "Just me",
    "2 – 10",
    "11 – 50",
    "51 – 200",
    "201 – 1,000",
    "1,000+",
];

const USE_CASES = [
    "Run our agency / freelance practice",
    "Manage clients & deliverables",
    "Replace our current PM tool",
    "Centralise sales & invoicing",
    "Evaluate for the whole org",
    "Something else",
];

export default function ContactSales() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        size: "",
        useCase: "",
        phoneNumber: "",
        description: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

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

    const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5001";
            const response = await axios.post(
                `${apiUrl}/api/public/web-inquiry/submit`,
                form,
                {
                    headers: {
                        'x-web-inquiry-key': import.meta.env.VITE_WEB_INQUIRY_KEY || '59664/secretkey/zithmi'
                    }
                }
            );
            if (response.data && response.data.success) {
                setSubmitted(true);
            } else {
                setError(response.data?.message || "Something went wrong. Please try again.");
            }
        } catch (err) {
            console.error("Form submission error:", err);
            setError(
                err.response?.data?.message ||
                "Unable to reach the server. Please check your connection and try again."
            );
        } finally {
            setLoading(false);
        }
    };

    const isValid =
        form.firstName.trim() &&
        form.lastName.trim() &&
        form.email.trim() &&
        form.company.trim() &&
        form.size;

    return (
        <main
            data-testid="contact-sales-page"
            className="relative bg-[#0A0A0A] text-white overflow-x-clip"
        >
            <SEO />
            <Nav />

            {/* Ambient mesh + dot grid */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none opacity-90"
                style={{
                    backgroundImage:
                        "radial-gradient(55% 60% at 15% 5%, rgba(139,92,246,0.18), transparent 60%), radial-gradient(50% 60% at 85% 15%, rgba(99,102,241,0.16), transparent 60%), radial-gradient(40% 50% at 50% 95%, rgba(16,185,129,0.08), transparent 60%)",
                }}
            />
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[60vh] pointer-events-none opacity-[0.08]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
                    backgroundSize: "28px 28px",
                    maskImage:
                        "linear-gradient(to bottom, black, transparent 90%)",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, black, transparent 90%)",
                }}
            />

            {/* Hero */}
            <section
                data-testid="cs-hero"
                className="relative pt-28 md:pt-36 pb-10 md:pb-14"
            >
                <div className="relative mx-auto max-w-4xl px-6 md:px-10 text-center">
                    <div className="zk-reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Talk to sales
                    </div>
                    <h1
                        data-testid="cs-headline"
                        className="zk-reveal mt-6 font-heading font-medium tracking-[-0.04em] text-white leading-[1.02]"
                        style={{ fontSize: "clamp(34px, 5.5vw, 64px)" }}
                    >
                        Let's run Zukvo{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #A78BFA, #6366F1, #34D399)",
                            }}
                        >
                            for your team.
                        </span>
                    </h1>
                    <p className="zk-reveal mt-5 mx-auto max-w-2xl text-[14.5px] md:text-[16px] text-zinc-400 leading-relaxed">
                        Tell us a little about your team — ours will reach out shortly with
                        the right next steps.
                    </p>

                </div>
            </section>

            {/* Form area */}
            <section data-testid="cs-form-area" className="relative pb-24 md:pb-28">
                <div className="relative mx-auto max-w-6xl px-6 md:px-10">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                        {/* Left column — value props + trust */}
                        <div className="lg:col-span-5 space-y-5">
                            {/* What you'll get */}
                            <div
                                data-testid="cs-value-card"
                                className="zk-reveal rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur p-6 md:p-7"
                            >
                                <div className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-violet-300">
                                    What you'll walk away with
                                </div>
                                <ul className="mt-5 space-y-4">
                                    {VALUE_PROPS.map((v) => (
                                        <li key={v.title} className="flex items-start gap-3">
                                            <span className="mt-0.5 inline-flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-violet-300 shrink-0">
                                                <v.icon className="size-4" />
                                            </span>
                                            <div className="min-w-0">
                                                <div className="text-[13.5px] font-medium text-white">
                                                    {v.title}
                                                </div>
                                                <div className="mt-0.5 text-[12.5px] text-zinc-400 leading-relaxed">
                                                    {v.sub}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Direct Contact info */}
                            <div
                                data-testid="cs-testimonial-card"
                                className="zk-reveal relative overflow-hidden rounded-2xl border border-white/10 bg-[#0E0E10] p-6 md:p-7"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(60% 80% at 100% 0%, rgba(99,102,241,0.18), transparent 60%)",
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    <ZMark size={22} variant="dark" />
                                    <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                                        Point of Contact
                                    </span>
                                </div>
                                <div className="mt-6 space-y-4">
                                    <div className="flex items-start gap-3">
                                        <span className="inline-flex size-9 items-center justify-center rounded-full bg-violet-500/25 text-violet-200 text-[11px] font-bold border border-violet-400/30 shrink-0">
                                            DD
                                        </span>
                                        <div className="flex flex-col">
                                            <div className="text-[14px] text-zinc-200 font-medium">Divya Dhamodharan</div>
                                            <a href="tel:+918072255742" className="text-[13px] text-zinc-400 hover:text-violet-300 mt-1 transition-colors">
                                                +91 80722 55742
                                            </a>
                                        </div>
                                    </div>
                                    <div className="h-px bg-white/5 w-full my-2"></div>
                                    <div className="flex items-start gap-3">
                                        <span className="inline-flex size-9 items-center justify-center rounded-full bg-emerald-500/25 text-emerald-200 text-[11px] font-bold border border-emerald-400/30 shrink-0">
                                            MR
                                        </span>
                                        <div className="flex flex-col">
                                            <div className="text-[14px] text-zinc-200 font-medium">Mithun Ravichandran</div>
                                            <a href="tel:+919524715360" className="text-[13px] text-zinc-400 hover:text-violet-300 mt-1 transition-colors">
                                                +91 95247 15360
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Trust strip */}
                            <div className="zk-reveal flex flex-wrap items-center justify-between gap-3 px-2 text-[11.5px] text-zinc-500">
                                <span className="inline-flex items-center gap-1.5">
                                    <ShieldCheck className="size-3.5 text-emerald-400" /> SOC 2
                                    Type II
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <Lock className="size-3.5 text-zukvo-300" /> GDPR ready
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <span className="size-1.5 rounded-full bg-emerald-400" />{" "}
                                    99.99% uptime
                                </span>
                            </div>
                        </div>

                        {/* Right column — form card */}
                        <div className="lg:col-span-7">
                            <div
                                data-testid="cs-form-card"
                                className="zk-reveal relative rounded-3xl border border-zinc-200 bg-white text-zukvo-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)] overflow-hidden"
                            >
                                {/* Soft top gradient stripe */}
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-x-0 top-0 h-px"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(90deg, transparent, rgba(99,102,241,0.55), transparent)",
                                    }}
                                />
                                <div className="p-6 md:p-9">
                                    <div className="flex items-center justify-between gap-4 flex-wrap">
                                        <div>
                                            <div className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-zukvo-600">
                                                Step 1 of 2 · About you
                                            </div>
                                            <h2 className="mt-2 font-heading font-medium text-2xl md:text-[28px] tracking-[-0.02em] text-zukvo-ink">
                                                Tell us where to start
                                            </h2>
                                        </div>
                                        <div className="hidden md:inline-flex items-center gap-1.5 text-[11.5px] text-zinc-500">
                                            <span className="inline-block size-1.5 rounded-full bg-emerald-500" />
                                            Takes about 30 seconds
                                        </div>
                                    </div>

                                    {!submitted ? (
                                        <form
                                            data-testid="cs-form"
                                            className="mt-7 space-y-5"
                                            onSubmit={onSubmit}
                                        >
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <Field
                                                    id="firstName"
                                                    label="First name"
                                                    placeholder="Ada"
                                                    value={form.firstName}
                                                    onChange={update("firstName")}
                                                    required
                                                />
                                                <Field
                                                    id="lastName"
                                                    label="Last name"
                                                    placeholder="Lovelace"
                                                    value={form.lastName}
                                                    onChange={update("lastName")}
                                                    required
                                                />
                                            </div>
                                            <Field
                                                id="email"
                                                type="email"
                                                label="Work email"
                                                placeholder="you@company.com"
                                                value={form.email}
                                                onChange={update("email")}
                                                required
                                            />
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <Field
                                                    id="company"
                                                    label="Company"
                                                    placeholder="Acme Studio"
                                                    value={form.company}
                                                    onChange={update("company")}
                                                    required
                                                />
                                                <Field
                                                    id="phoneNumber"
                                                    type="tel"
                                                    label="Phone number"
                                                    placeholder="+1 (555) 000-0000"
                                                    value={form.phoneNumber}
                                                    onChange={update("phoneNumber")}
                                                />
                                            </div>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <Select
                                                    id="size"
                                                    label="Team size"
                                                    value={form.size}
                                                    onChange={update("size")}
                                                    options={SIZES}
                                                    required
                                                />
                                                <Select
                                                    id="useCase"
                                                    label="Primary use case"
                                                    value={form.useCase}
                                                    onChange={update("useCase")}
                                                    options={USE_CASES}
                                                />
                                            </div>
                                            <Field
                                                id="description"
                                                type="textarea"
                                                label="How can we help?"
                                                placeholder="Tell us about your project, timeline, or any specific requirements..."
                                                value={form.description}
                                                onChange={update("description")}
                                            />

                                            {error && (
                                                <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-4 text-[13px] text-rose-600 flex items-start gap-2.5">
                                                    <span className="font-semibold shrink-0">Error:</span>
                                                    <span>{error}</span>
                                                </div>
                                            )}

                                            <div className="pt-2">
                                                <button
                                                    type="submit"
                                                    disabled={!isValid || loading}
                                                    data-testid="cs-submit"
                                                    className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-zukvo-ink text-white px-6 py-3.5 text-[14px] font-medium transition-all hover:bg-zukvo-600 disabled:opacity-40 disabled:cursor-not-allowed"
                                                >
                                                    {loading ? "Sending..." : "Continue"}
                                                    {!loading && <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />}
                                                </button>
                                                <p className="mt-4 text-[11.5px] text-zinc-500 inline-flex items-center gap-1.5">
                                                    <Lock className="size-3" />
                                                    We never share your information. Read our{" "}
                                                    <a
                                                        href="#privacy"
                                                        className="underline underline-offset-2 hover:text-zukvo-600"
                                                    >
                                                        privacy policy
                                                    </a>
                                                    .
                                                </p>
                                            </div>
                                        </form>
                                    ) : (
                                        <div
                                            data-testid="cs-thanks"
                                            className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-8 text-center"
                                        >
                                            <span className="inline-flex size-12 items-center justify-center rounded-full bg-emerald-500 text-white">
                                                <CheckCircle2 className="size-6" />
                                            </span>
                                            <h3 className="mt-5 font-heading font-medium text-2xl md:text-3xl tracking-[-0.02em] text-zukvo-ink">
                                                Thanks, {form.firstName || "there"} — we're on it.
                                            </h3>
                                            <p className="mt-3 max-w-md mx-auto text-[14px] text-zinc-600 leading-relaxed">
                                                A Zukvo specialist will reach out at{" "}
                                                <span className="font-medium text-zukvo-ink">
                                                    {form.email}
                                                </span>{" "}
                                                within one business hour with a few times that
                                                work.
                                            </p>
                                            <div className="mt-6 inline-flex items-center gap-1.5 text-[11.5px] text-zinc-500">
                                                <Mail className="size-3.5 text-zukvo-500" />
                                                Watch for an email from{" "}
                                                <span className="text-zukvo-ink">
                                                    sales@zukvo.com
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Footer hairline inside card */}
                                <div className="border-t border-zinc-100 px-6 md:px-9 py-4 flex items-center justify-between text-[11.5px] text-zinc-500">
                                    <span className="inline-flex items-center gap-1.5">
                                        <ShieldCheck className="size-3.5 text-emerald-500" />
                                        Encrypted in transit · stored at rest
                                    </span>
                                    <span className="hidden sm:inline">Built by Zukvo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function Field({ id, label, type = "text", placeholder, value, onChange, required }) {
    return (
        <label htmlFor={id} className="block">
            <span className="block text-[12px] font-medium text-zinc-600 mb-1.5">
                {label}
                {required && <span className="text-rose-500 ml-0.5">*</span>}
            </span>
            {type === "textarea" ? (
                <textarea
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    rows={4}
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-[14px] text-zukvo-ink placeholder:text-zinc-400 outline-none transition-all focus:border-zukvo-500/60 focus:ring-4 focus:ring-zukvo-500/15 hover:border-zinc-300 resize-y"
                />
            ) : (
                <input
                    id={id}
                    name={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-[14px] text-zukvo-ink placeholder:text-zinc-400 outline-none transition-all focus:border-zukvo-500/60 focus:ring-4 focus:ring-zukvo-500/15 hover:border-zinc-300"
                />
            )}
        </label>
    );
}

function Select({ id, label, value, onChange, options, required }) {
    return (
        <label htmlFor={id} className="block">
            <span className="block text-[12px] font-medium text-zinc-600 mb-1.5">
                {label}
                {required && <span className="text-rose-500 ml-0.5">*</span>}
            </span>
            <div className="relative">
                <select
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className="appearance-none w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 pr-10 text-[14px] text-zukvo-ink outline-none transition-all focus:border-zukvo-500/60 focus:ring-4 focus:ring-zukvo-500/15 hover:border-zinc-300"
                >
                    <option value="" disabled>
                        Choose an option
                    </option>
                    {options.map((o) => (
                        <option key={o} value={o}>
                            {o}
                        </option>
                    ))}
                </select>
                <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-zinc-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 8l4 4 4-4" />
                </svg>
            </div>
        </label>
    );
}
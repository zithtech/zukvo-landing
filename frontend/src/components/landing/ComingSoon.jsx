import React from "react";
import {
    Sparkles,
    Clock,
    CalendarCheck,
    Wallet,
    Receipt,
    UserPlus,
    Briefcase,
    ClipboardList,
    Telescope,
} from "lucide-react";

const PRODUCTS = [
    {
        icon: Clock,
        title: "Clock In & Clock Out System",
        body: "Simple in/out punches with location & device context.",
    },
    {
        icon: CalendarCheck,
        title: "Leave & Attendance Management",
        body: "Policies, approvals, balances, and holiday calendars in one place.",
    },
    {
        icon: Wallet,
        title: "Payroll & Payslip Management",
        body: "Auto-calculated runs with tax-ready payslips your team can download.",
    },
    {
        icon: Receipt,
        title: "Reimbursement",
        body: "Submit, approve, and settle expense claims without spreadsheets.",
    },
    {
        icon: UserPlus,
        title: "Employee Onboarding & Exit",
        body: "Structured journeys from offer letter through final settlement.",
    },
    {
        icon: Briefcase,
        title: "Candidates Pipeline & Management",
        body: "Track applicants, schedule interviews, and decide together.",
    },
    {
        icon: ClipboardList,
        title: "Timesheet",
        body: "Project-level time entries that flow into billing & payroll.",
    },
    {
        icon: Telescope,
        title: "Power Research",
        body: "Advanced competitor analysis — turn insights into runnable workflows.",
    },
];

export default function ComingSoon() {
    return (
        <section
            id="coming-soon"
            data-testid="coming-soon-section"
            className="relative bg-[#0A0A0A] text-white border-t border-white/5"
        >
            <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 py-14 md:py-20">
                <div className="zk-reveal text-center max-w-2xl mx-auto">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-300">
                        <Sparkles className="size-3 text-zukvo-400" /> Coming soon
                    </span>
                    <h2 className="mt-5 font-heading font-medium text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em]">
                        What's next on the roadmap.
                    </h2>
                    <p className="mt-4 text-zinc-400 text-base md:text-lg leading-relaxed">
                        A people-ops + research suite shipping into Zukvo over the coming releases.
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {PRODUCTS.map((p) => (
                        <div
                            key={p.title}
                            data-testid={`coming-soon-${p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
                            className="zk-reveal relative rounded-2xl border border-white/10 bg-[#0E0E10] p-5 md:p-6 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <span className="absolute top-3.5 right-3.5 inline-flex items-center gap-1 rounded-full bg-zukvo-500/10 text-zukvo-300 border border-zukvo-500/30 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.22em]">
                                Soon
                            </span>
                            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white">
                                <p.icon className="size-5" />
                            </span>
                            <h3 className="mt-4 pr-12 font-heading font-medium text-lg md:text-xl tracking-[-0.01em] text-white">
                                {p.title}
                            </h3>
                            <p className="mt-2 text-[13px] text-zinc-400 leading-relaxed">
                                {p.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

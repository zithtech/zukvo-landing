import React from "react";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import ZukvoLogo from "@/components/ZukvoLogo";
import SEO from "@/components/SEO";

export default function PendingApproval() {
    return (
        <main className="min-h-screen bg-[#FAFAFA] text-zukvo-ink flex flex-col items-center justify-center px-6">
            <SEO />
            <Link to="/" className="mb-10">
                <ZukvoLogo variant="light" size={30} />
            </Link>

            <div className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-8 md:p-10 shadow-[0_30px_80px_-40px_rgba(15,15,15,0.15)] text-center">
                <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/30">
                    <Clock className="size-7 text-amber-600" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-medium text-zukvo-ink">
                    Pending Approval
                </h2>
                <p className="mt-4 text-[15px] text-zinc-500 leading-relaxed">
                    Thank you. Your request for a custom plan has been submitted successfully.
                </p>
                <div className="mt-6 p-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-left">
                    <p className="text-[13px] text-zinc-600">
                        Our Sales Team is reviewing your requirements and will contact you shortly to finalize your setup. Once approved, you will receive an email with instructions to access your dashboard.
                    </p>
                </div>
                
                <Link to="/" className="mt-8 inline-block text-[14px] text-zukvo-600 font-medium hover:text-zukvo-700 underline underline-offset-4 decoration-zukvo-500/30 hover:decoration-zukvo-600 transition-colors">
                    Return to home
                </Link>
            </div>
        </main>
    );
}

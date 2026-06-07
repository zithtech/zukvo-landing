import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle, XCircle, Loader2, ArrowRight } from "lucide-react";
import axios from "axios";
import ZukvoLogo from "@/components/ZukvoLogo";
import SEO from "@/components/SEO";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";
const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:3005";

export default function VerifyEmail() {
    const [searchParams] = useSearchParams();
    const [status, setStatus] = useState("loading"); // loading | success | error
    const [setupStatus, setSetupStatus] = useState("idle"); // idle | loading | error
    const [setupError, setSetupError] = useState("");
    const [verifyData, setVerifyData] = useState(null);
    const [token, setToken] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        const t = searchParams.get("token");
        if (!t) {
            setErrorMsg("No verification token found in the link.");
            setStatus("error");
            return;
        }
        setToken(t);

        axios
            .get(`${API_URL}/api/landing/verify-email`, { params: { token: t } })
            .then((res) => {
                setVerifyData(res.data);
                setStatus("success");
            })
            .catch((err) => {
                const msg = err?.response?.data?.error || "Verification failed. The link may have expired.";
                setErrorMsg(msg);
                setStatus("error");
            });
    }, []);

    const handleSetupWorkspace = async () => {
        setSetupStatus("loading");
        setSetupError("");
        try {
            const res = await axios.post(`${API_URL}/api/landing/complete-registration`, { token });
            const { tenantSubdomain, email } = res.data;
            const appUrl = new URL(APP_URL);
            window.location.href = `${appUrl.protocol}//${tenantSubdomain}.${appUrl.host}/login?email=${encodeURIComponent(email)}`;
        } catch (err) {
            const msg = err?.response?.data?.error || "Something went wrong. Please try again.";
            setSetupError(msg);
            setSetupStatus("error");
        }
    };

    return (
        <main className="min-h-screen bg-[#FAFAFA] text-zukvo-ink flex flex-col items-center justify-center px-6">
            <SEO />
            <Link to="/" className="mb-10">
                <ZukvoLogo variant="light" size={30} />
            </Link>

            <div className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-8 md:p-10 shadow-[0_30px_80px_-40px_rgba(15,15,15,0.15)] text-center">
                {status === "loading" && (
                    <>
                        <Loader2 className="mx-auto size-10 animate-spin text-zukvo-500 mb-4" />
                        <h2 className="font-heading text-2xl font-medium text-zukvo-ink">
                            Verifying your email…
                        </h2>
                        <p className="mt-2 text-[13.5px] text-zinc-500">Just a moment.</p>
                    </>
                )}

                {status === "success" && (
                    <>
                        <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30">
                            <CheckCircle className="size-7 text-emerald-600" />
                        </div>
                        <h2 className="font-heading text-2xl md:text-3xl font-medium text-zukvo-ink">
                            Email verified!
                        </h2>
                        <p className="mt-3 text-[14px] text-zinc-500 leading-relaxed">
                            {verifyData?.alreadyVerified
                                ? "Your email was already verified."
                                : `Welcome, ${verifyData?.name || ""}! Your email has been verified.`}
                        </p>

                        {setupError && (
                            <p className="mt-4 text-[13px] text-rose-600 bg-rose-50 border border-rose-200 rounded-xl px-3.5 py-2.5">
                                {setupError}
                            </p>
                        )}

                        <button
                            type="button"
                            onClick={handleSetupWorkspace}
                            disabled={setupStatus === "loading"}
                            className="mt-6 group inline-flex items-center justify-center gap-2 w-full rounded-xl text-white text-[14px] font-medium px-5 py-3.5 shadow-[0_15px_40px_-15px_rgba(99,102,241,0.55)] transition-all hover:shadow-[0_18px_50px_-15px_rgba(99,102,241,0.65)] disabled:opacity-70 disabled:cursor-not-allowed"
                            style={{ backgroundImage: "linear-gradient(135deg, #6366F1, #8B5CF6, #A855F7)" }}
                        >
                            {setupStatus === "loading" ? (
                                <><Loader2 className="size-4 animate-spin" /> Setting up…</>
                            ) : (
                                <>Set up your workspace <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" /></>
                            )}
                        </button>
                        <p className="mt-4 text-[12px] text-zinc-400">
                            You'll be taken to Zukov to complete your workspace setup.
                        </p>
                    </>
                )}

                {status === "error" && (
                    <>
                        <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-rose-500/10 border border-rose-500/30">
                            <XCircle className="size-7 text-rose-600" />
                        </div>
                        <h2 className="font-heading text-2xl font-medium text-zukvo-ink">
                            Verification failed
                        </h2>
                        <p className="mt-3 text-[14px] text-zinc-500 leading-relaxed">
                            {errorMsg}
                        </p>
                        <Link
                            to="/signup"
                            className="mt-7 group inline-flex items-center justify-center gap-2 w-full rounded-xl border border-zinc-200 bg-white text-zukvo-ink text-[14px] font-medium px-5 py-3.5 hover:border-zinc-300 hover:bg-zinc-50 transition-colors"
                        >
                            Back to sign up
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </>
                )}
            </div>
        </main>
    );
}

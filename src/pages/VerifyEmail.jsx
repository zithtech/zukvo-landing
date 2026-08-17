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
            
        // Load Razorpay Script
        if (!document.getElementById("razorpay-checkout-js")) {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.id = "razorpay-checkout-js";
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);

    const handleSetupWorkspace = async () => {
        setSetupStatus("loading");
        setSetupError("");
        try {
            const res = await axios.post(`${API_URL}/api/landing/complete-registration`, { token });
            const { tenantSubdomain, email, decision } = res.data;
            const appUrl = new URL(APP_URL);
            const redirectUrl = `${appUrl.protocol}//${tenantSubdomain}.${appUrl.host}/login?email=${encodeURIComponent(email)}`;

            if (decision?.action === 'PAYMENT_REQUIRED') {
                const options = {
                    key: decision.key || decision.data?.key || "rzp_test_mock_key", // Fallback if env missing
                    name: "Zukvo",
                    description: "Subscription Payment",
                    handler: async function (response) {
                        try {
                            const verifyRes = await axios.post(`http://localhost:5000/api/payments/verify`, {
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                                razorpay_subscription_id: response.razorpay_subscription_id
                            });
                            if (verifyRes.data.success) {
                                window.location.href = redirectUrl;
                            } else {
                                setSetupError("Payment verification failed.");
                                setSetupStatus("error");
                            }
                        } catch (err) {
                            console.error("Verification failed", err);
                            setSetupError("Error verifying payment with Admin.");
                            setSetupStatus("error");
                        }
                    },
                    prefill: {
                        name: verifyData?.name || "",
                        email: verifyData?.email || email || "",
                    },
                    theme: { color: "#6366F1" }
                };

                if (decision.subscription_id) {
                    options.subscription_id = decision.subscription_id;
                } else if (decision.data?.orderId) {
                    options.order_id = decision.data.orderId;
                    options.amount = decision.data.amount;
                    options.currency = decision.data.currency;
                }

                const rzp1 = new window.Razorpay(options);
                rzp1.on('payment.failed', function (response){
                    setSetupError(`Payment failed: ${response.error.description}`);
                    setSetupStatus("error");
                });
                rzp1.open();
            } else if (decision?.action === 'PENDING_APPROVAL') {
                window.location.href = '/pending-approval';
            } else if (decision?.action === 'API_ERROR') {
                setSetupError(`Payment setup failed: ${decision.message || 'Please contact support'}`);
                setSetupStatus("error");
            } else {
                // For TRIAL_STARTED, FREE_ACTIVATED, DOWNGRADE_SCHEDULED
                window.location.href = redirectUrl;
            }
        } catch (err) {
            console.error("Complete Registration Error:", err);
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
                            You'll be taken to Zukvo to complete your workspace setup.
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

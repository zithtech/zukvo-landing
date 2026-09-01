import React, { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle, XCircle, Loader2, ArrowRight } from "lucide-react";
import axios from "axios";
import ZukvoLogo from "@/components/ZukvoLogo";
import SEO from "@/components/SEO";
import { API_URL, buildLoginUrl } from "@/lib/workspace";

/**
 * Verify the emailed link and open the workspace.
 *
 * This page used to stop halfway: it verified the address, announced "Email
 * verified!", and then waited for a click on "Set up your workspace" before
 * doing the rest. That click carried no decision — there was nothing to choose
 * and nothing to read — so it was one more screen between a customer and the
 * product they had already paid attention to.
 *
 * Now verification and provisioning run as one step on load. The only case that
 * still needs a click is payment: Razorpay's checkout must be opened from a
 * user gesture or the browser blocks it, so that button stays.
 */
export default function VerifyEmail() {
    const [searchParams] = useSearchParams();
    // working | payment | error
    const [status, setStatus] = useState("working");
    const [errorMsg, setErrorMsg] = useState("");
    const [name, setName] = useState("");
    /** Set only when Razorpay must be opened by hand. Calling it starts checkout. */
    const [openCheckout, setOpenCheckout] = useState(null);

    // React 18 StrictMode runs effects twice in development, and
    // complete-registration is not idempotent — a second call answers 409. Guard
    // it so a dev-only double render cannot present a real customer with
    // "Account already created".
    const started = useRef(false);

    useEffect(() => {
        if (started.current) return;
        started.current = true;

        const token = searchParams.get("token");
        if (!token) {
            setErrorMsg("No verification token found in the link.");
            setStatus("error");
            return;
        }

        // Razorpay is only needed on the payment branch, but the script has to be
        // in flight before that branch is reached or the button would have
        // nothing to open.
        if (!document.getElementById("razorpay-checkout-js")) {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.id = "razorpay-checkout-js";
            script.async = true;
            document.head.appendChild(script);
        }

        (async () => {
            try {
                const verified = await axios.get(`${API_URL}/api/landing/verify-email`, {
                    params: { token },
                });
                setName(verified.data?.name || "");

                const res = await axios.post(
                    `${API_URL}/api/landing/complete-registration`,
                    { token }
                );
                const { tenantSubdomain, email, accessToken, decision } = res.data;

                // Clicking the link sent to this mailbox already proved control of
                // the address, and the password was chosen minutes ago on the
                // signup form — so the backend mints a session here and the
                // workspace opens signed in, the same way the Google/Microsoft
                // signups do. The ?email= form is the fallback for a backend that
                // mints no token.
                //
                // Via the shared builder rather than assembled here: this used to
                // prefix the slug onto VITE_APP_URL's host verbatim, so an app
                // served at app.zukvo.com sent people to acme.app.zukvo.com.
                const redirectUrl = accessToken
                    ? buildLoginUrl(tenantSubdomain, accessToken)
                    : buildLoginUrl(tenantSubdomain, null, email);

                if (decision?.action === "PAYMENT_REQUIRED") {
                    setOpenCheckout(() => () => startCheckout({
                        decision,
                        redirectUrl,
                        prefillName: verified.data?.name || "",
                        prefillEmail: verified.data?.email || email || "",
                        onError: (message) => {
                            setErrorMsg(message);
                            setStatus("error");
                        },
                    }));
                    setStatus("payment");
                    return;
                }

                if (decision?.action === "PENDING_APPROVAL") {
                    window.location.href = "/pending-approval";
                    return;
                }

                if (decision?.action === "API_ERROR") {
                    setErrorMsg(
                        `Your workspace was created, but billing setup failed: ${
                            decision.message || "please contact support"
                        }`
                    );
                    setStatus("error");
                    return;
                }

                // TRIAL_STARTED, FREE_ACTIVATED, DOWNGRADE_SCHEDULED.
                window.location.href = redirectUrl;
            } catch (err) {
                console.error("Verify / complete registration failed:", err);
                const msg =
                    err?.response?.data?.error ||
                    "Verification failed. The link may have expired.";
                // An account that already exists is a success from the customer's
                // side, not a failure — say so rather than showing a raw 409.
                setErrorMsg(
                    /already (created|exists)/i.test(msg)
                        ? "This workspace has already been created. Please sign in from your workspace URL."
                        : msg
                );
                setStatus("error");
            }
        })();
    }, []);

    return (
        <main className="min-h-screen bg-[#FAFAFA] text-zukvo-ink flex flex-col items-center justify-center px-6">
            <SEO />
            <Link to="/" className="mb-10">
                <ZukvoLogo variant="light" size={30} />
            </Link>

            <div className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-8 md:p-10 shadow-[0_30px_80px_-40px_rgba(15,15,15,0.15)] text-center">
                {status === "working" && (
                    <>
                        <Loader2 className="mx-auto size-10 animate-spin text-zukvo-500 mb-4" />
                        <h2 className="font-heading text-2xl font-medium text-zukvo-ink">
                            Setting up your workspace
                        </h2>
                        <p className="mt-2 text-[13.5px] text-zinc-500">
                            Verifying your email and getting everything ready. This only takes a moment.
                        </p>
                    </>
                )}

                {status === "payment" && (
                    <>
                        <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30">
                            <CheckCircle className="size-7 text-emerald-600" />
                        </div>
                        <h2 className="font-heading text-2xl md:text-3xl font-medium text-zukvo-ink">
                            One last step
                        </h2>
                        <p className="mt-3 text-[14px] text-zinc-500 leading-relaxed">
                            {name ? `Thanks, ${name.split(" ")[0]}. ` : ""}
                            Complete your payment and your workspace opens straight away.
                        </p>

                        <button
                            type="button"
                            onClick={() => openCheckout && openCheckout()}
                            className="mt-6 group inline-flex items-center justify-center gap-2 w-full rounded-xl text-white text-[14px] font-medium px-5 py-3.5 shadow-[0_15px_40px_-15px_rgba(99,102,241,0.55)] transition-all hover:shadow-[0_18px_50px_-15px_rgba(99,102,241,0.65)]"
                            style={{ backgroundImage: "linear-gradient(135deg, #6366F1, #8B5CF6, #A855F7)" }}
                        >
                            Complete payment
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                        </button>
                    </>
                )}

                {status === "error" && (
                    <>
                        <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-rose-500/10 border border-rose-500/30">
                            <XCircle className="size-7 text-rose-600" />
                        </div>
                        <h2 className="font-heading text-2xl font-medium text-zukvo-ink">
                            We hit a snag
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

/**
 * Open Razorpay for a PAYMENT_REQUIRED decision and, once the charge verifies
 * with the Admin control plane, forward into the new workspace.
 */
function startCheckout({ decision, redirectUrl, prefillName, prefillEmail, onError }) {
    const options = {
        key: decision.key || decision.data?.key || "rzp_test_mock_key", // Fallback if env missing
        name: "Zukvo",
        description: "Subscription Payment",
        handler: async function (response) {
            try {
                // Was hardcoded to localhost:5000 — which meant payment
                // verification only ever worked on one developer's machine, and
                // broke outright when Admin moved port.
                const adminApiUrl = import.meta.env.VITE_ADMIN_API_URL || "http://localhost:4001";
                const verifyRes = await axios.post(`${adminApiUrl}/api/payments/verify`, {
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                    razorpay_subscription_id: response.razorpay_subscription_id,
                });
                if (verifyRes.data.success) {
                    window.location.href = redirectUrl;
                } else {
                    onError("Payment verification failed.");
                }
            } catch (err) {
                console.error("Verification failed", err);
                onError("Error verifying payment with Admin.");
            }
        },
        prefill: { name: prefillName, email: prefillEmail },
        theme: { color: "#6366F1" },
    };

    if (decision.subscription_id) {
        options.subscription_id = decision.subscription_id;
    } else if (decision.data?.orderId) {
        options.order_id = decision.data.orderId;
        options.amount = decision.data.amount;
        options.currency = decision.data.currency;
    }

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", (response) =>
        onError(`Payment failed: ${response.error.description}`)
    );
    rzp.open();
}

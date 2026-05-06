import React from "react";

/**
 * ZukvoLogo — geometric "Z" mark with a diagonal electric cut + wordmark.
 * Variant: "light" (dark text on light bg) or "dark" (light text on dark bg).
 */
export default function ZukvoLogo({ variant = "light", showWordmark = true, size = 28 }) {
    const text = variant === "dark" ? "text-white" : "text-zukvo-ink";
    return (
        <div className="inline-flex items-center gap-2.5 select-none" data-testid="zukvo-logo">
            <ZMark size={size} />
            {showWordmark && (
                <span
                    className={`font-heading font-semibold tracking-tight ${text}`}
                    style={{ fontSize: size * 0.78, letterSpacing: "-0.04em" }}
                >
                    Zukvo
                </span>
            )}
        </div>
    );
}

export function ZMark({ size = 28 }) {
    return (
        <span
            className="relative inline-flex items-center justify-center rounded-[8px] overflow-hidden"
            style={{
                width: size,
                height: size,
                background: "linear-gradient(135deg,#6366F1 0%,#8B5CF6 100%)",
                boxShadow:
                    "0 6px 20px -6px rgba(99,102,241,0.55), inset 0 0 0 1px rgba(255,255,255,0.18)",
            }}
            aria-hidden="true"
        >
            <svg viewBox="0 0 24 24" width={size * 0.62} height={size * 0.62}>
                <path
                    d="M5 5 H19 L7 19 H19"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.4"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                />
                <path
                    d="M14 4 L11 11 L14.6 11 L11 20"
                    fill="none"
                    stroke="rgba(255,255,255,0.85)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </span>
    );
}

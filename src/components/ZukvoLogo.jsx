import React from "react";
import logoLight from "@/assets/mainLogo.png";
import logoDark from "@/assets/zukvowhitelogo.png";

/**
 * ZukvoLogo — running-figure mark with "Zukvo" briefcase.
 * Variant: "light" (for light bg, dark mark) or "dark" (for dark bg, white mark).
 * The logo image already includes the "Zukvo" wordmark inside the briefcase, so showWordmark defaults to false.
 */
export default function ZukvoLogo({ variant = "light", showWordmark = false, size = 28 }) {
    const text = variant === "dark" ? "text-white" : "text-zukvo-ink";
    return (
        <div className="inline-flex items-center gap-2.5 select-none" data-testid="zukvo-logo">
            <ZMark size={size} variant={variant} />
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

export function ZMark({ size = 28, variant = "light" }) {
    const src = variant === "dark" ? logoDark : logoLight;
    return (
        <img
            src={src}
            alt="Zukvo"
            width={size}
            height={size}
            style={{
                width: size,
                height: size,
                objectFit: "contain",
            }}
            className="inline-block select-none rounded-md"
            draggable="false"
            aria-hidden="true"
        />
    );
}

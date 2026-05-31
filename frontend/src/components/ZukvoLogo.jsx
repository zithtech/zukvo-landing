import React from "react";
import logoSrc from "@/assets/mainLogo.png";

/**
 * ZukvoLogo — running-figure mark with "Zukvo" briefcase.
 * Variant: "light" (dark bg-friendly: figure stays black) or "dark" (inverts to white on dark bg).
 * The logo image already includes the "Zukvo" wordmark inside the briefcase, so showWordmark defaults to false.
 */
export default function ZukvoLogo({ variant = "light", showWordmark = false, size = 28 }) {
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
        <img
            src={logoSrc}
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

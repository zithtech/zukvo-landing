import React, { useEffect, useState } from "react";

const PARTS = [
    { letter: "Z", rest: "en" },
    { letter: "u", rest: "nified" },
    { letter: "k", rest: "it", connector: "for" },
    { letter: "v", rest: "irtual" },
    { letter: "o", rest: "perations" },
];

/**
 * Animated "Zukvo" wordmark.
 * On hover each letter jumps (staggered) and the full word — Zen Unified Kit Virtual Operations — fans out.
 * If autoShowDelay is set (ms), the meaning auto-expands once on mount after that delay and collapses after autoShowDuration ms.
 */
export default function ZukvoWordmark({
    size = 22,
    variant = "light",
    className = "",
    autoShowDelay = 0,
    autoShowDuration = 2000,
}) {
    const color = variant === "dark" ? "text-white" : "text-zukvo-ink";
    const [autoShowing, setAutoShowing] = useState(false);

    useEffect(() => {
        if (!autoShowDelay) return undefined;
        const showT = setTimeout(() => setAutoShowing(true), autoShowDelay);
        const hideT = setTimeout(
            () => setAutoShowing(false),
            autoShowDelay + autoShowDuration,
        );
        return () => {
            clearTimeout(showT);
            clearTimeout(hideT);
        };
    }, [autoShowDelay, autoShowDuration]);

    return (
        <span
            tabIndex={0}
            data-testid="zukvo-wordmark"
            aria-label="Zukvo — Zen Unified Kit for Virtual Operations"
            className={`zk-zukvo-wordmark font-heading font-semibold tracking-tight outline-none ${color} ${autoShowing ? "is-showing" : ""} ${className}`}
            style={{ fontSize: size, letterSpacing: "-0.03em" }}
        >
            {PARTS.map((p, i) => (
                <React.Fragment key={i}>
                    <span className="zk-zukvo-part">
                        <span
                            className="zk-zukvo-letter"
                            style={{ animationDelay: `${i * 70}ms` }}
                        >
                            {p.letter}
                        </span>
                        <span className="zk-zukvo-rest">{p.rest}</span>
                    </span>
                    {p.connector && (
                        <span className="zk-zukvo-connector">{p.connector}</span>
                    )}
                </React.Fragment>
            ))}
        </span>
    );
}

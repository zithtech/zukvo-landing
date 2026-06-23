import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";

/**
 * ImageSlot — styled placeholder frame for product screenshots.
 * Renders a macOS-style browser chrome with caption.
 * Pass `src` to use a real image; otherwise a labeled placeholder is shown.
 * Pass `srcLight` to enable an attractive dark/light theme toggle.
 */
export default function ImageSlot({
    src,
    srcLight,
    alt = "",
    label,
    caption,
    aspect = "16/9",
    objectPosition = "top",
    objectFit = "cover",
    className = "",
    chromeUrl = "zukvo.app",
    testid,
}) {
    const [theme, setTheme] = useState("light");
    const currentSrc = theme === "light" && srcLight ? srcLight : src;

    return (
        <figure
            data-testid={testid}
            className={`relative rounded-2xl border border-white/10 bg-zukvo-ink/95 p-2 md:p-2.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6),0_0_0_1px_rgba(99,102,241,0.12)] ${className}`}
        >
            <div className="flex items-center justify-between px-2.5 py-1">
                <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="size-2.5 rounded-full bg-[#28C840]" />
                    <span className="ml-3 text-[10px] uppercase tracking-[0.2em] text-zinc-500 truncate">
                        {chromeUrl}
                    </span>
                </div>
                {srcLight && (
                    <div className="relative flex items-center p-0.5 rounded-full bg-black/40 border border-white/10 shadow-inner">
                        <div 
                            className="absolute inset-y-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-gradient-to-r from-zukvo-500 to-violet-500 shadow-sm transition-transform duration-300 ease-out"
                            style={{ transform: theme === 'light' ? 'translateX(100%)' : 'translateX(0)' }}
                        />
                        <button
                            onClick={() => setTheme("dark")}
                            className={`relative z-10 p-1.5 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                            aria-label="Dark theme"
                        >
                            <Moon className="size-3.5" />
                        </button>
                        <button
                            onClick={() => setTheme("light")}
                            className={`relative z-10 p-1.5 rounded-full transition-colors duration-300 ${theme === 'light' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                            aria-label="Light theme"
                        >
                            <Sun className="size-3.5" />
                        </button>
                    </div>
                )}
            </div>
            <div
                className="overflow-hidden rounded-[10px] border border-white/5 bg-[#0E0E10] relative"
                style={aspect && aspect !== "auto" ? { aspectRatio: aspect } : {}}
            >
                {currentSrc ? (
                    <img
                        key={theme}
                        src={currentSrc}
                        alt={alt}
                        loading="lazy"
                        className={`block w-full animate-in fade-in duration-500 ${aspect && aspect !== "auto" ? "h-full" : "h-auto"}`}
                        style={{ objectPosition, objectFit }}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* dot grid */}
                        <div
                            className="absolute inset-0 opacity-40"
                            style={{
                                backgroundImage:
                                    "radial-gradient(rgba(99,102,241,0.22) 1px, transparent 1px)",
                                backgroundSize: "26px 26px",
                            }}
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "radial-gradient(50% 60% at 50% 40%, rgba(99,102,241,0.18), transparent 60%)",
                            }}
                        />
                        <div className="relative text-center px-6">
                            <div className="inline-flex items-center gap-1.5 rounded-full border border-zukvo-500/30 bg-zukvo-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-zukvo-300">
                                <span className="size-1.5 rounded-full bg-zukvo-400 zk-pulse" />
                                Image slot
                            </div>
                            <div className="mt-3 font-heading text-xl md:text-2xl text-white tracking-tight">
                                {label}
                            </div>
                            <div className="mt-1.5 text-[12px] text-zinc-500 max-w-md mx-auto">
                                Drop your screenshot here — replace the{" "}
                                <code className="font-mono text-zukvo-300">src</code> on this slot.
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {caption && (
                <figcaption className="mt-2.5 px-1 text-[12px] text-zinc-500">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}

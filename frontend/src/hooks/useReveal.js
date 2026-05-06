import { useEffect, useRef } from "react";

/**
 * Adds 'is-visible' class to the element when it scrolls into view.
 * Use with the .zk-reveal CSS class.
 */
export default function useReveal(options = {}) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const targets = el.matches?.(".zk-reveal")
            ? [el]
            : Array.from(el.querySelectorAll?.(".zk-reveal") || []);
        if (targets.length === 0) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("is-visible");
                        obs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px", ...options },
        );
        targets.forEach((t) => obs.observe(t));
        return () => obs.disconnect();
    }, [options]);
    return ref;
}

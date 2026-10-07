"use client";

import { useEffect, useState } from "react";
import type { PracticeArea } from "@/data/practices";

/**
 * Sticky vertical index for the practice-areas page. Highlights whichever
 * section is currently in view; one IntersectionObserver, no scroll handler.
 */
export default function PracticeNav({ areas }: { areas: PracticeArea[] }) {
  const [active, setActive] = useState(areas[0]?.slug ?? "");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const sections = areas
      .map((a) => document.getElementById(a.slug))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const first = areas.find((a) => visible.has(a.slug));
        if (first) setActive(first.slug);
      },
      { rootMargin: "-25% 0px -60% 0px" },
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [areas]);

  return (
    <nav aria-label="Practice areas" className="lg:sticky lg:top-[calc(var(--nav-h)+3rem)]">
      <p className="eyebrow text-gold">The Practice</p>
      <ol className="mt-6 border-t border-line">
        {areas.map((area) => {
          const on = active === area.slug;
          return (
            <li key={area.slug}>
              <a
                href={`#${area.slug}`}
                aria-current={on ? "true" : undefined}
                className="group flex items-baseline gap-4 border-b border-line py-3.5 transition-colors duration-400"
              >
                <span className={`eyebrow text-[0.625rem] transition-colors duration-400 ${on ? "text-gold" : "text-charcoal-muted/60"}`}>
                  {area.index}
                </span>
                <span
                  className={`text-[0.875rem] leading-snug transition-colors duration-400 ${
                    on ? "text-burgundy" : "text-charcoal-muted group-hover:text-burgundy"
                  }`}
                >
                  {area.title}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

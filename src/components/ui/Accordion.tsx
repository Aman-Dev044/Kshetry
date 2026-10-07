"use client";

import { useId, useState } from "react";

export type AccordionItem = { q: string; a: string };

/**
 * Keyboard-accessible disclosure list. Answers stay in the DOM so they remain
 * crawlable and findable with the browser's own find-in-page.
 */
export default function Accordion({ items, defaultOpen = -1 }: { items: AccordionItem[]; defaultOpen?: number }) {
  const [open, setOpen] = useState(defaultOpen);
  const base = useId();

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${base}-panel-${i}`;
        const buttonId = `${base}-button-${i}`;

        return (
          <div key={item.q} className="border-b border-line">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span
                  className={`display text-[1.125rem] leading-snug transition-colors duration-500 sm:text-[1.25rem] ${
                    isOpen ? "text-burgundy" : "text-burgundy-deep group-hover:text-burgundy"
                  }`}
                >
                  {item.q}
                </span>
                <span aria-hidden className="relative mt-2 block h-3 w-3 shrink-0">
                  <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-gold" />
                  <span
                    className={`absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-gold transition-transform duration-500 ease-[var(--ease-editorial)] ${
                      isOpen ? "scale-y-0" : "scale-y-100"
                    }`}
                  />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid transition-[grid-template-rows] duration-500 ease-[var(--ease-editorial)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="body-copy max-w-3xl pb-7 pr-10 text-[0.9375rem] leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

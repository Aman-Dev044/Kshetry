import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import type { LegalSection } from "@/data/legal";

const RELATED = [
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
];

/**
 * Two-column legal document: a sticky clause index beside the prose.
 * Section numbering follows the firm's own drafting.
 */
export default function LegalDocument({
  sections,
  currentPath,
  note,
}: {
  sections: LegalSection[];
  currentPath: string;
  note?: string;
}) {
  return (
    <div className="bg-white py-20 lg:py-28">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <aside className="lg:col-span-4 xl:col-span-3">
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+3rem)]">
            <nav aria-label="Clauses">
              <h2 className="eyebrow text-gold">Contents</h2>
              <ol className="mt-5 max-h-[60vh] overflow-y-auto border-t border-line pr-2">
                {sections.map((section) => (
                  <li key={section.n}>
                    <a
                      href={`#clause-${section.n}`}
                      className="group flex items-baseline gap-3 border-b border-line py-2.5"
                    >
                      <span className="eyebrow w-5 shrink-0 text-[0.5625rem] text-charcoal-muted/60">{section.n}</span>
                      <span className="text-[0.8125rem] leading-snug text-charcoal-muted transition-colors duration-400 group-hover:text-burgundy">
                        {section.heading}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <nav aria-label="Related policies" className="mt-10">
              <h2 className="eyebrow text-gold">Related</h2>
              <ul className="mt-5 flex flex-col gap-2.5 border-t border-line pt-5">
                {RELATED.filter((r) => r.href !== currentPath).map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="text-[0.875rem] text-charcoal-muted transition-colors duration-400 hover:text-burgundy"
                    >
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        <div className="lg:col-span-8 lg:col-start-5">
          {note && (
            <p className="mb-12 border-l-2 border-gold bg-ivory px-6 py-5 text-[0.875rem] leading-relaxed text-charcoal/80">
              {note}
            </p>
          )}

          {sections.map((section, i) => (
            <Reveal
              key={section.n}
              as="section"
              delay={Math.min(i, 3) * 50}
              className="scroll-mt-[calc(var(--nav-h)+3rem)] border-t border-line py-10 first:border-t-0 first:pt-0"
            >
              <div id={`clause-${section.n}`} className="scroll-mt-[calc(var(--nav-h)+3rem)]">
                <div className="flex items-baseline gap-4">
                  <span className="eyebrow text-[0.625rem] text-gold">{section.n}</span>
                  <h2 className="display display-sm text-burgundy-deep">{section.heading}</h2>
                </div>

                <div className="mt-5 flex flex-col gap-4">
                  {section.body.map((block, j) =>
                    block.kind === "sub" ? (
                      <h3 key={j} className="eyebrow mt-3 text-[0.5625rem] text-burgundy">
                        {block.text}
                      </h3>
                    ) : (
                      <p key={j} className="body-copy max-w-3xl text-[0.9375rem] leading-relaxed">
                        {block.text}
                      </p>
                    ),
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { PRACTICES } from "@/data/site";

/**
 * Six editorial rows rather than fifteen small cards. Hover floods the row in
 * burgundy and brings its sub-practices forward — all of it CSS-driven, so the
 * interaction costs nothing on scroll.
 */
export default function PracticeAreas() {
  return (
    <section id="practice" className="bg-ivory py-24 lg:py-36">
      <div className="shell">
        <SectionHead
          eyebrow="Our Practice"
          title="Integrated legal counsel for complex matters."
          copy="Our capability is organised around the shape of the matter — advisory, contentious, transactional and regulatory — rather than around departments."
        />
      </div>

      <div className="mt-16 border-t border-line lg:mt-20">
        {PRACTICES.map((practice, i) => (
          <Reveal key={practice.index} delay={i * 60}>
            <Link href="/practice-areas" className="group relative block border-b border-line">
              <span
                aria-hidden
                className="absolute inset-0 origin-bottom scale-y-0 bg-burgundy transition-transform duration-[650ms] ease-[var(--ease-editorial)] group-hover:scale-y-100 group-focus-visible:scale-y-100"
              />

              {/* Ghosted numeral — the "related graphic" that arrives on hover */}
              <span
                aria-hidden
                className="display pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 translate-x-6 text-[7rem] leading-none text-ivory/10 opacity-0 transition-all duration-[750ms] ease-[var(--ease-editorial)] group-hover:translate-x-0 group-hover:opacity-100 lg:block xl:right-14"
              >
                {practice.index}
              </span>

              <div className="shell relative flex flex-col gap-5 py-9 transition-colors duration-500 lg:flex-row lg:items-center lg:gap-10 lg:py-11">
                <span className="eyebrow w-10 shrink-0 text-gold transition-colors duration-500">
                  {practice.index}
                </span>

                <h3 className="display display-md shrink-0 text-burgundy-deep transition-colors duration-500 group-hover:text-ivory lg:w-[22rem] xl:w-[26rem]">
                  {practice.title}
                </h3>

                <div className="min-w-0 flex-1 lg:pr-28">
                  <p className="body-copy max-w-xl text-[0.9375rem] transition-colors duration-500 group-hover:text-ivory/75">
                    {practice.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                    {practice.items.map((item) => (
                      <li
                        key={item}
                        className="eyebrow text-[0.625rem] text-charcoal-muted transition-colors duration-500 group-hover:text-gold-light"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <svg
                  width="17"
                  height="9"
                  viewBox="0 0 17 9"
                  fill="none"
                  aria-hidden
                  className="hidden shrink-0 text-gold transition-all duration-500 ease-[var(--ease-editorial)] group-hover:translate-x-1.5 group-hover:text-ivory lg:block"
                >
                  <path d="M0 4.5h15M11.4 1 15 4.5 11.4 8" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="shell mt-14">
        <ArrowLink href="/practice-areas">View All Practice Areas</ArrowLink>
      </div>
    </section>
  );
}

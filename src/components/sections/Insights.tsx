import Link from "next/link";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { FEATURED_INSIGHT, INSIGHTS } from "@/data/site";

export default function Insights() {
  return (
    <section id="insights" className="bg-white py-24 lg:py-36">
      <div className="shell">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            eyebrow="Selected Insights"
            title="Perspectives on law, business and a changing world."
            className="lg:max-w-2xl"
          />
          <Reveal delay={200} className="shrink-0">
            <ArrowLink href="/insights">All Insights</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-14">
          {/* Featured */}
          <Reveal className="lg:col-span-6">
            <Link href="/insights" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-ivory">
                {/* Abstract editorial graphic — placeholder for firm photography */}
                <div
                  aria-hidden
                  className="absolute inset-0 transition-transform duration-[1.2s] ease-[var(--ease-editorial)] group-hover:scale-[1.04]"
                  style={{
                    background:
                      "radial-gradient(55% 55% at 22% 18%, rgba(200,161,90,.34) 0%, rgba(200,161,90,0) 68%), linear-gradient(142deg, #6f1028 0%, #3b0718 58%, #2a0411 100%)",
                  }}
                />
                <svg
                  aria-hidden
                  viewBox="0 0 400 300"
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                >
                  {[...Array(7)].map((_, i) => (
                    <line
                      key={i}
                      x1={-60 + i * 72}
                      y1={320}
                      x2={120 + i * 72}
                      y2={-20}
                      stroke="#c8a15a"
                      strokeWidth={0.6}
                      opacity={0.28}
                    />
                  ))}
                  <circle cx="300" cy="90" r="54" fill="none" stroke="#c8a15a" strokeWidth="0.8" opacity="0.45" />
                  <circle cx="300" cy="90" r="88" fill="none" stroke="#c8a15a" strokeWidth="0.6" opacity="0.22" />
                </svg>

                <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
                  <span className="eyebrow text-gold">{FEATURED_INSIGHT.category}</span>
                  <p className="display display-md mt-3 text-ivory">{FEATURED_INSIGHT.series}</p>
                </div>

                <span className="eyebrow absolute right-6 top-6 border border-gold/40 px-3 py-1.5 text-gold-light">
                  Featured
                </span>
              </div>

              <h3 className="display display-sm mt-7 text-burgundy-deep transition-colors duration-500 group-hover:text-burgundy">
                {FEATURED_INSIGHT.title}
              </h3>
              <p className="body-copy mt-4 max-w-xl text-[0.9375rem]">{FEATURED_INSIGHT.excerpt}</p>
              <p className="eyebrow mt-6 text-[0.625rem] text-charcoal-muted">
                {FEATURED_INSIGHT.date} · {FEATURED_INSIGHT.readingTime}
              </p>
            </Link>
          </Reveal>

          {/* Latest */}
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="border-t border-line">
              {INSIGHTS.map((item, i) => (
                <Reveal key={item.index} delay={i * 80}>
                  <Link href="/insights" className="group block border-b border-line py-7">
                    <div className="flex items-center gap-4">
                      <span className="eyebrow text-[0.625rem] text-gold">{item.index}</span>
                      <span className="eyebrow text-[0.625rem] text-charcoal-muted">{item.category}</span>
                      <span className="ml-auto text-[0.625rem] uppercase tracking-[0.18em] text-charcoal-muted/70">
                        {item.readingTime}
                      </span>
                    </div>
                    <h3 className="display mt-3 text-[1.3125rem] leading-snug text-burgundy-deep transition-colors duration-500 group-hover:text-burgundy">
                      {item.title}
                    </h3>
                    <p className="body-copy mt-2 text-[0.875rem] leading-relaxed">{item.excerpt}</p>
                    <span className="mt-4 flex h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-x-100" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";
import InsightsExplorer from "@/components/sections/InsightsExplorer";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/site/PageHero";
import NewsletterForm from "@/components/forms/NewsletterForm";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, graph, itemListSchema, webPageSchema } from "@/lib/schema";
import { ARTICLES, EDITORIAL_SERIES, INSIGHTS_DISCLAIMER, QUICK_READS } from "@/data/pages";
import { FEATURED_INSIGHT } from "@/data/site";

const TRAIL = [{ name: "Insights", path: "/insights" }];

const DESCRIPTION =
  "Legal analysis and commentary on developments shaping businesses across India, the UAE, the UK, the US and Thailand — from Kshetry & Co. Insights.";

export const metadata: Metadata = pageMetadata({
  title: "Insights",
  description: DESCRIPTION,
  path: "/insights",
  keywords: [
    "legal insights India",
    "cross-border legal commentary",
    "UAE business law updates",
    "construction EPC contract risk",
    "real estate transaction law",
    "AI corporate risk legal",
  ],
});

export default function InsightsPage() {
  return (
    <>
      <JsonLd
        json={graph(
          webPageSchema({ name: "Insights", description: DESCRIPTION, path: "/insights" }),
          breadcrumbSchema(TRAIL),
          itemListSchema({
            name: "Kshetry & Co. Insights",
            items: ARTICLES.map((a) => ({ name: a.title, url: absoluteUrl(`/insights#${a.slug}`) })),
          }),
          ...ARTICLES.map((a) => articleSchema(a)),
        )}
      />

      <PageHero
        eyebrow="Insights"
        title={
          <>
            Perspectives on law, business
            <span className="block text-burgundy">and a changing world.</span>
          </>
        }
        lede="Kshetry & Co. Insights translates complex legal developments into practical perspectives — from emerging regulatory frameworks and cross-border transactions to disputes, contracts, real estate, technology and international business."
        trail={TRAIL}
      />

      {/* Featured */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell">
          <Reveal className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <h2 className="eyebrow text-burgundy">Featured Insight</h2>
          </Reveal>

          <Reveal delay={100} className="mt-10">
            <article className="group grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 transition-transform duration-[1.2s] ease-[var(--ease-editorial)] group-hover:scale-[1.03]"
                    style={{
                      background:
                        "radial-gradient(55% 55% at 22% 18%, rgba(200,161,90,.34) 0%, rgba(200,161,90,0) 68%), linear-gradient(142deg, #6f1028 0%, #3b0718 58%, #2a0411 100%)",
                    }}
                  />
                  <svg
                    aria-hidden
                    viewBox="0 0 400 250"
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    {Array.from({ length: 7 }, (_, i) => (
                      <line
                        key={i}
                        x1={-60 + i * 72}
                        y1={270}
                        x2={120 + i * 72}
                        y2={-20}
                        stroke="#c8a15a"
                        strokeWidth={0.6}
                        opacity={0.26}
                      />
                    ))}
                  </svg>
                  <span className="eyebrow absolute right-6 top-6 border border-gold/40 px-3 py-1.5 text-gold-light">
                    Editorial Series
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <p className="eyebrow text-gold">{FEATURED_INSIGHT.series}</p>
                <h3 className="display display-md mt-5 text-burgundy-deep">{FEATURED_INSIGHT.title}</h3>
                <p className="lede mt-6">{FEATURED_INSIGHT.excerpt}</p>
                <p className="eyebrow mt-7 text-[0.625rem] text-charcoal-muted">
                  {FEATURED_INSIGHT.date} · {FEATURED_INSIGHT.readingTime}
                </p>
                <div className="mt-8">
                  <ArrowLink href="/insights">Read Featured Insight</ArrowLink>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Explore / filters */}
      <section id="explore" className="scroll-mt-[calc(var(--nav-h)+2rem)] bg-ivory py-20 lg:py-28">
        <div className="shell">
          <Reveal className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <h2 className="eyebrow text-burgundy">Explore Our Insights</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="display display-md mt-7 max-w-2xl text-burgundy-deep">
              Filter by practice area, jurisdiction and year.
            </p>
          </Reveal>

          <Reveal delay={160} className="mt-12">
            <InsightsExplorer />
          </Reveal>
        </div>
      </section>

      {/* Editorial series */}
      <section className="bg-white py-24 lg:py-32">
        <div className="shell">
          <Reveal className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <h2 className="eyebrow text-burgundy">Editorial Series</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="display display-md mt-7 max-w-3xl text-burgundy-deep">
              Longer-form commentary from a legal and commercial perspective.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {EDITORIAL_SERIES.map((series, i) => (
              <Reveal key={series.title} delay={Math.min(i, 5) * 60} className="group bg-white p-7 lg:p-8">
                <h3 className="display text-[1.3125rem] text-burgundy-deep transition-colors duration-500 group-hover:text-burgundy">
                  {series.title}
                </h3>
                <p className="body-copy mt-3 text-[0.875rem] leading-relaxed">{series.copy}</p>
                <span className="mt-6 flex h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-x-100" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quick reads */}
      <section className="bg-ivory py-24 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <h2 className="eyebrow text-burgundy">Quick Legal Briefs</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="display display-md mt-7 text-burgundy-deep">60-second answers to recurring questions.</p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <dl className="border-t border-line">
              {QUICK_READS.map((brief, i) => (
                <Reveal key={brief.title} delay={i * 60} className="group border-b border-line py-5">
                  <dt className="display text-[1.125rem] text-burgundy-deep transition-colors duration-500 group-hover:text-burgundy">
                    {brief.title}
                  </dt>
                  <dd className="body-copy mt-1.5 text-[0.875rem]">{brief.copy}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative overflow-hidden bg-burgundy text-ivory">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 120% at 85% 0%, rgba(200,161,90,.22) 0%, rgba(111,16,40,0) 60%), linear-gradient(180deg, #6f1028 0%, #3b0718 100%)",
          }}
        />
        <div className="shell relative grid gap-10 py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-6">
            <Reveal className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <h2 className="eyebrow text-gold">Legal Intelligence</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="display display-lg mt-7 text-ivory">Stay informed.</p>
            </Reveal>
            <Reveal delay={140}>
              <p className="lede mt-6 max-w-lg text-gold-light/75">
                Receive selected legal updates, practical briefings, international perspectives and firm editorials
                directly in your inbox.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={160}>
              <NewsletterForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-ivory py-14">
        <div className="shell">
          <h2 className="eyebrow text-charcoal-muted">Disclaimer</h2>
          <p className="body-copy mt-4 max-w-4xl text-[0.8125rem] leading-relaxed">{INSIGHTS_DISCLAIMER}</p>
        </div>
      </section>
    </>
  );
}

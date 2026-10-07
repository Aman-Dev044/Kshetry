import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/site/PageHero";
import PracticeNav from "@/components/sections/PracticeNav";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, itemListSchema, webPageSchema } from "@/lib/schema";
import { PRACTICE_AREAS, PRACTICE_CLOSING } from "@/data/practices";

const TRAIL = [{ name: "Practice Areas", path: "/practice-areas" }];

const DESCRIPTION =
  "Twelve practice areas — corporate and commercial advisory, cross-border transactions, real estate and construction, disputes, regulatory and private client.";

export const metadata: Metadata = pageMetadata({
  title: "Practice Areas",
  description: DESCRIPTION,
  path: "/practice-areas",
  keywords: [
    "law firm practice areas",
    "corporate commercial advisory",
    "cross-border transactions",
    "EPC FIDIC construction law",
    "arbitration dispute resolution India",
    "UAE GCC business advisory",
    "regulatory compliance corporate governance",
    "NRI private client advisory",
  ],
});

export default function PracticeAreasPage() {
  return (
    <>
      <JsonLd
        json={graph(
          webPageSchema({ name: "Practice Areas", description: DESCRIPTION, path: "/practice-areas" }),
          breadcrumbSchema(TRAIL),
          itemListSchema({
            name: "Kshetry & Co. Practice Areas",
            items: PRACTICE_AREAS.map((p) => ({ name: p.title, url: absoluteUrl(`/practice-areas#${p.slug}`) })),
          }),
        )}
      />

      <PageHero
        eyebrow="Practice Areas"
        title={
          <>
            Legal capability built
            <span className="block text-burgundy">around complexity.</span>
          </>
        }
        lede="Our capability is organised around the shape of the matter — advisory, contentious, transactional and regulatory — rather than around departments."
        trail={TRAIL}
      />

      <div className="bg-white py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 xl:col-span-3">
            <PracticeNav areas={PRACTICE_AREAS} />
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            {PRACTICE_AREAS.map((area, i) => (
              <Reveal
                key={area.slug}
                as="article"
                delay={Math.min(i, 3) * 60}
                className="scroll-mt-[calc(var(--nav-h)+3rem)] border-t border-line py-12 first:border-t-0 first:pt-0 lg:py-14"
              >
                <div id={area.slug} className="scroll-mt-[calc(var(--nav-h)+3rem)]">
                  <div className="flex items-baseline gap-5">
                    <span className="display text-[2.25rem] leading-none text-gold-light">{area.index}</span>
                    <h2 className="display display-md text-burgundy-deep">{area.title}</h2>
                  </div>

                  <p className="lede mt-6 max-w-3xl">{area.detail}</p>

                  <h3 className="eyebrow mt-9 text-gold">Representative Work</h3>
                  <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                    {area.services.map((service) => (
                      <li key={service} className="flex items-baseline gap-3">
                        <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-gold" />
                        <span className="text-[0.9375rem] text-charcoal/80">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Closing statement */}
      <section className="relative overflow-hidden bg-burgundy text-ivory">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 120% at 85% 0%, rgba(200,161,90,.22) 0%, rgba(111,16,40,0) 60%), linear-gradient(180deg, #6f1028 0%, #3b0718 100%)",
          }}
        />
        <div className="shell relative py-24 lg:py-32">
          <Reveal className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <h2 className="eyebrow text-gold">In Closing</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="display display-lg mt-7 max-w-4xl text-ivory">{PRACTICE_CLOSING.title}</p>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede mt-7 max-w-3xl text-gold-light/75">{PRACTICE_CLOSING.copy}</p>
          </Reveal>
          <Reveal delay={240} className="mt-11 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="light">
              Discuss a Matter
            </Button>
            <Button href="/insights" variant="ghost" className="text-gold-light hover:text-gold">
              Read Our Insights
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

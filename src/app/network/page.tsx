import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import WorldMap from "@/components/map/WorldMap";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/site/PageHero";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, itemListSchema, webPageSchema } from "@/lib/schema";
import { NETWORK_PAGE } from "@/data/pages";
import { NETWORK } from "@/data/site";

const TRAIL = [{ name: "Our Network", path: "/network" }];

const DESCRIPTION =
  "Kshetry & Co. works across India, the UAE, the UK, the US and Thailand, supported by a network of qualified local counsel and professional advisers.";

export const metadata: Metadata = pageMetadata({
  title: "Our Network",
  description: DESCRIPTION,
  path: "/network",
  keywords: [
    "law firm India UAE UK US Thailand",
    "international legal network",
    "Dubai law firm India",
    "cross-border legal counsel",
    "Kolkata Delhi Mumbai Bengaluru law firm",
  ],
});

export default function NetworkPage() {
  return (
    <>
      <JsonLd
        json={graph(
          webPageSchema({ name: "Our Network", description: DESCRIPTION, path: "/network" }),
          breadcrumbSchema(TRAIL),
          itemListSchema({
            name: "Kshetry & Co. International Footprint",
            items: NETWORK.map((n) => ({ name: n.country, url: absoluteUrl(`/network#${n.id}`) })),
          }),
        )}
      />

      <PageHero
        eyebrow="Our Network"
        title={
          <>
            Local knowledge.
            <span className="block text-gold-light">Global perspective.</span>
          </>
        }
        lede={NETWORK_PAGE.lede}
        trail={TRAIL}
        tone="dark"
      >
        <p className="eyebrow text-gold/80">India · UAE · UK · US · Thailand</p>
      </PageHero>

      {/* The map */}
      <section className="relative overflow-hidden bg-burgundy-deep pb-24 text-ivory lg:pb-32">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, #2d0512 0%, #3b0718 40%, #2a0411 100%)" }}
        />
        <div className="shell relative">
          <h2 className="sr-only">Our international footprint</h2>
          <Reveal>
            <WorldMap tone="dark" variant="network" />
          </Reveal>

          <Reveal delay={120} className="mt-12 grid gap-10 border-t border-gold/20 pt-10 lg:grid-cols-12">
            <p className="lede text-gold-light/75 lg:col-span-7">{NETWORK_PAGE.copy}</p>
            <dl className="grid grid-cols-2 gap-6 lg:col-span-4 lg:col-start-9">
              <div>
                <dt className="eyebrow text-gold">Offices</dt>
                <dd className="mt-2 text-[0.9375rem] text-gold-light/70">India · UAE</dd>
              </div>
              <div>
                <dt className="eyebrow text-gold">Network Locations</dt>
                <dd className="mt-2 text-[0.9375rem] text-gold-light/70">UK · US · Thailand</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Location detail */}
      <section className="bg-white py-24 lg:py-32">
        <div className="shell">
          <Reveal className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <h2 className="eyebrow text-burgundy">Our International Footprint</h2>
          </Reveal>

          <div className="mt-14 border-t border-line">
            {NETWORK.map((node, i) => (
              <Reveal
                key={node.id}
                as="article"
                delay={Math.min(i, 3) * 70}
                className="border-b border-line py-12 lg:py-14"
              >
                <div
                  id={node.id}
                  className="grid scroll-mt-[calc(var(--nav-h)+3rem)] gap-8 lg:grid-cols-12 lg:gap-14"
                >
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-4">
                      <span className="eyebrow text-[0.625rem] text-gold">{node.code}</span>
                      <span className="eyebrow border border-line px-3 py-1 text-[0.5625rem] text-charcoal-muted">
                        {node.kind === "office" ? "Office" : "Network Location"}
                      </span>
                    </div>
                    <h3 className="display display-md mt-5 text-burgundy-deep">{node.country}</h3>
                    <p className="eyebrow mt-4 text-gold">{node.heading}</p>
                  </div>

                  <div className="lg:col-span-7 lg:col-start-6">
                    <p className="lede">{node.blurb}</p>
                    <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
                      {node.places.map((place) => (
                        <li key={place} className="flex items-center gap-2.5">
                          <span aria-hidden className="h-1 w-1 rotate-45 bg-gold" />
                          <span className="eyebrow text-[0.625rem] text-charcoal-muted">{place}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond physical offices */}
      <section className="bg-ivory py-24 lg:py-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal className="flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />
                <h2 className="eyebrow text-burgundy">Beyond Physical Offices</h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="display display-lg mt-7 text-burgundy-deep">{NETWORK_PAGE.beyondOffices.title}</p>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={120}>
                <p className="lede">{NETWORK_PAGE.beyondOffices.copy}</p>
              </Reveal>
            </div>
          </div>

          <div className="mt-16 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {NETWORK_PAGE.beyondOffices.pillars.map((pillar, i) => (
              <Reveal
                key={pillar.title}
                delay={i * 80}
                className="border-b border-line py-10 pr-8 lg:py-12 lg:pr-10 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-line lg:[&:not(:first-child)]:pl-10"
              >
                <span className="display text-[2.5rem] leading-none text-gold-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="eyebrow mt-5 text-burgundy">{pillar.title}</h3>
                <p className="body-copy mt-3 text-[0.9375rem] leading-relaxed">{pillar.copy}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-14 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">Contact the Relevant Office</Button>
            <Button href="/practice-areas" variant="outline">
              View Practice Areas
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

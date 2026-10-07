import type { Metadata } from "next";
import ArrowLink from "@/components/ui/ArrowLink";
import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/site/PageHero";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { ABOUT } from "@/data/pages";
import { DEFINING, STATS } from "@/data/site";

const TRAIL = [{ name: "About", path: "/about" }];

const DESCRIPTION =
  "Founded in 2009, Kshetry & Co. is a full-service law firm combining legal depth with commercial understanding across India, the UAE, the UK, the US and Thailand.";

export const metadata: Metadata = pageMetadata({
  title: "About the Firm",
  description: DESCRIPTION,
  path: "/about",
  keywords: [
    "about Kshetry & Co.",
    "Indian law firm since 2009",
    "cross-border legal practice",
    "international law firm India",
    "full-service law firm",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        json={graph(
          webPageSchema({ name: "About the Firm", description: DESCRIPTION, path: "/about" }),
          breadcrumbSchema(TRAIL),
        )}
      />

      <PageHero
        eyebrow="About Kshetry & Co."
        title={
          <>
            Law. Strategy.
            <span className="block text-burgundy">Perspective.</span>
          </>
        }
        lede={ABOUT.lede}
        trail={TRAIL}
      />

      {/* A full-width burgundy band stands in for the architectural hero visual */}
      <div
        aria-hidden
        className="relative h-40 overflow-hidden sm:h-56 lg:h-72"
        style={{
          background:
            "radial-gradient(60% 140% at 20% 0%, rgba(200,161,90,.3) 0%, rgba(200,161,90,0) 60%), linear-gradient(120deg, #6f1028 0%, #3b0718 60%, #2a0411 100%)",
        }}
      >
        <svg viewBox="0 0 1200 300" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          {Array.from({ length: 16 }, (_, i) => (
            <line key={i} x1={i * 80} y1={320} x2={i * 80 + 220} y2={-20} stroke="#c8a15a" strokeWidth="0.7" opacity="0.2" />
          ))}
        </svg>
      </div>

      {/* Our approach */}
      <section className="bg-white py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <h2 className="eyebrow text-burgundy">Our Approach</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="display display-md mt-7 text-burgundy-deep">
                Legal depth, with the client&rsquo;s objective in view.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {ABOUT.approach.copy.map((para, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className={i === 0 ? "lede" : "body-copy mt-6"}>{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The journey */}
      <section className="bg-ivory py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <h2 className="eyebrow text-burgundy">The Journey</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="display display-md mt-7 text-burgundy-deep">Built in India. Evolving across borders.</p>
            </Reveal>
            <Reveal delay={160} className="mt-10 border-t border-line pt-6">
              <p className="display text-[3.5rem] leading-none text-burgundy">2009</p>
              <p className="eyebrow mt-3 text-charcoal-muted">Year Established</p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {ABOUT.journey.map((para, i) => (
              <Reveal key={i} delay={i * 70}>
                <p className={i === 0 ? "lede" : "body-copy mt-6"}>{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What defines us */}
      <section className="bg-white py-24 lg:py-32">
        <div className="shell">
          <Reveal className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <h2 className="eyebrow text-burgundy">What Defines Us</h2>
          </Reveal>

          <div className="mt-12 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {DEFINING.map((item, i) => (
              <Reveal
                key={item.index}
                delay={i * 80}
                className="group relative border-b border-line py-10 pr-8 lg:py-12 lg:pr-10 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-line lg:[&:not(:first-child)]:pl-10"
              >
                <span className="display text-[2.75rem] leading-none text-gold-light transition-colors duration-700 group-hover:text-gold">
                  {item.index}
                </span>
                <h3 className="eyebrow mt-6 text-burgundy">{item.title}</h3>
                <p className="body-copy mt-3 text-[0.9375rem] leading-relaxed">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* From complexity to action */}
      <section className="relative overflow-hidden bg-burgundy-deep py-24 text-ivory lg:py-32">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 90% at 25% 15%, rgba(111,16,40,.65) 0%, rgba(59,7,24,0) 65%), linear-gradient(180deg, #3b0718 0%, #2a0411 100%)",
          }}
        />
        <div className="shell relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <h2 className="eyebrow text-gold">Why Clients Come to Us</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="display display-lg mt-7 text-ivory">
                From legal complexity
                <span className="block text-gold-light">to informed action.</span>
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {ABOUT.moments.copy.map((para, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className={`${i === 0 ? "lede" : "body-copy mt-6"} text-gold-light/75`}>{para}</p>
              </Reveal>
            ))}
            <Reveal delay={280} className="mt-10">
              <ArrowLink href="/practice-areas" tone="light">
                Explore Our Practice
              </ArrowLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="bg-ivory py-20 lg:py-24">
        <div className="shell">
          <h2 className="sr-only">The firm at a glance</h2>
          <div className="grid gap-y-12 border-y border-line py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-14">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80} className="lg:px-6 lg:first:pl-0">
                <p className="display text-[clamp(2.75rem,4.5vw,3.75rem)] leading-none text-burgundy">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="eyebrow mt-4 text-charcoal-muted">{stat.label}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-14 flex flex-col gap-4 sm:flex-row">
            <Button href="/network">Explore Our Network</Button>
            <Button href="/contact" variant="outline">
              Start a Conversation
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

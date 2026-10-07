import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/site/PageHero";
import { pageMetadata } from "@/lib/seo";
import { ORG_ID, breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { AWARDS, FOUNDER, RECOGNITION_PAGE } from "@/data/pages";
import { PRESS, STATS } from "@/data/site";

const TRAIL = [{ name: "Awards & Recognition", path: "/recognition" }];

const DESCRIPTION =
  "Awards and professional recognition for Kshetry & Co. and its leadership — Forbes India, Global Business Excellence Awards and Asian Excellence Awards.";

export const metadata: Metadata = pageMetadata({
  title: "Awards & Recognition",
  description: DESCRIPTION,
  path: "/recognition",
  keywords: [
    "law firm awards India",
    "Forbes India visionary lawyer",
    "Asian Excellence Awards legal",
    "Global Business Excellence Awards",
    "Rajjesh Kshetryy",
  ],
});

/** Years that carry a dated award, in display order. */
const TIMELINE = AWARDS.filter((a) => a.year !== "—");
const FEATURES = AWARDS.filter((a) => a.year === "—");

export default function RecognitionPage() {
  return (
    <>
      <JsonLd
        json={graph(
          webPageSchema({ name: "Awards & Recognition", description: DESCRIPTION, path: "/recognition" }),
          breadcrumbSchema(TRAIL),
          {
            "@type": "Person",
            name: FOUNDER.name,
            jobTitle: FOUNDER.role,
            description: FOUNDER.bio,
            worksFor: { "@id": ORG_ID },
            award: AWARDS.map((a) => `${a.title} — ${a.org}`),
          },
        )}
      />

      <PageHero
        eyebrow="Recognition"
        title={
          <>
            Recognition of
            <span className="block text-burgundy">professional excellence.</span>
          </>
        }
        lede={RECOGNITION_PAGE.lede}
        trail={TRAIL}
      />

      {/* Intro */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <h2 className="eyebrow text-burgundy">Our Legacy</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="display display-md mt-7 text-burgundy-deep">{RECOGNITION_PAGE.legacy.title}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            {RECOGNITION_PAGE.intro.map((para, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className={i === 0 ? "lede" : "body-copy mt-6"}>{para}</p>
              </Reveal>
            ))}
            {RECOGNITION_PAGE.legacy.copy.map((para, i) => (
              <Reveal key={`l${i}`} delay={160 + i * 60}>
                <p className="body-copy mt-6">{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="bg-ivory py-16 lg:py-20">
        <div className="shell">
          <h2 className="sr-only">At a glance</h2>
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
        </div>
      </section>

      {/* The visionary */}
      <section className="relative overflow-hidden bg-burgundy-deep py-24 text-ivory lg:py-32">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 90% at 80% 15%, rgba(111,16,40,.6) 0%, rgba(59,7,24,0) 62%), linear-gradient(180deg, #3b0718 0%, #2a0411 100%)",
          }}
        />
        <div className="shell relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <h2 className="eyebrow text-gold">The Visionary</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="display display-lg mt-7 text-ivory">{FOUNDER.name}</p>
            </Reveal>
            <Reveal delay={140}>
              <p className="eyebrow mt-4 text-gold-light/70">{FOUNDER.role}</p>
            </Reveal>
            <Reveal delay={220}>
              <p className="display mt-10 text-[1.5rem] leading-snug text-gold-light/60 italic">
                &ldquo;{FOUNDER.line}&rdquo;
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={120}>
              <p className="lede text-gold-light/75">{FOUNDER.bio}</p>
            </Reveal>
            <Reveal delay={200}>
              <p className="body-copy mt-6 text-gold-light/65">{FOUNDER.vision}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <h2 className="eyebrow text-burgundy">Recognition &amp; Honours</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="display display-md mt-7 text-burgundy-deep">Selected distinctions.</p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ol className="relative border-l border-line pl-8 lg:pl-10">
              {TIMELINE.map((award, i) => (
                <Reveal key={`${award.year}-${award.title}`} as="li" delay={i * 70} className="group relative pb-10 last:pb-0">
                  <span className="absolute -left-[2.0625rem] top-2 h-1.5 w-1.5 rotate-45 bg-gold transition-all duration-500 group-hover:scale-150 group-hover:bg-burgundy lg:-left-[2.5625rem]" />
                  <span className="eyebrow text-gold">{award.year}</span>
                  <h3 className="display display-sm mt-2 text-burgundy-deep transition-colors duration-500 group-hover:text-burgundy">
                    {award.title}
                  </h3>
                  <p className="eyebrow mt-2 text-[0.625rem] text-charcoal-muted">
                    {award.org} · {award.category}
                  </p>
                  <p className="body-copy mt-3 max-w-xl text-[0.875rem] leading-relaxed">{award.note}</p>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={200} className="mt-14">
              <h3 className="eyebrow text-gold">Features &amp; Editorial Recognition</h3>
              <div className="mt-6 grid gap-px bg-line sm:grid-cols-2">
                {FEATURES.map((award) => (
                  <div key={award.title} className="bg-white p-6">
                    <h4 className="display text-[1.125rem] text-burgundy-deep">{award.title}</h4>
                    <p className="eyebrow mt-2 text-[0.5625rem] text-charcoal-muted">{award.org}</p>
                    <p className="body-copy mt-3 text-[0.8125rem] leading-relaxed">{award.note}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal className="border-y border-line bg-ivory py-6">
        <Marquee items={PRESS} durationSeconds={42} />
      </Reveal>

      {/* Gallery placeholder */}
      <section className="bg-ivory py-24 lg:py-28">
        <div className="shell">
          <Reveal className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <h2 className="eyebrow text-burgundy">The Awards Gallery</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="display display-md mt-7 max-w-2xl text-burgundy-deep">Moments that mark the journey.</p>
          </Reveal>
          <Reveal delay={140}>
            <p className="lede mt-6 max-w-2xl">
              Recognition becomes meaningful when viewed as part of the journey behind it. Our gallery brings together
              selected moments from award ceremonies, professional events and platforms through which the work of the
              firm and its leadership has been acknowledged.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Forbes India — Visionary Recognition",
              "Global Business Excellence Awards — House of Commons, London",
              "Asian Excellence Awards — 2024",
            ].map((caption, i) => (
              <Reveal key={caption} delay={i * 80}>
                <figure>
                  {/* Awaiting the firm's own ceremony photography */}
                  <div
                    aria-hidden
                    className="relative aspect-[4/3] overflow-hidden"
                    style={{
                      background:
                        "radial-gradient(55% 60% at 28% 22%, rgba(200,161,90,.3) 0%, rgba(200,161,90,0) 68%), linear-gradient(142deg, #6f1028 0%, #3b0718 60%, #2a0411 100%)",
                    }}
                  >
                    <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                      <circle cx="300" cy="90" r="52" fill="none" stroke="#c8a15a" strokeWidth="0.8" opacity="0.35" />
                      <circle cx="300" cy="90" r="86" fill="none" stroke="#c8a15a" strokeWidth="0.6" opacity="0.18" />
                    </svg>
                  </div>
                  <figcaption className="eyebrow mt-4 text-[0.5625rem] text-charcoal-muted">{caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-14 flex flex-col gap-4 sm:flex-row">
            <Button href="/about">About the Firm</Button>
            <Button href="/contact" variant="outline">
              Begin the Conversation
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

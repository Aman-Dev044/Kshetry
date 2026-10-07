import type { Metadata } from "next";
import ArrowLink from "@/components/ui/ArrowLink";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";
import ApplicationForm from "@/components/forms/ApplicationForm";
import NewsletterForm from "@/components/forms/NewsletterForm";
import JobBoard from "@/components/sections/JobBoard";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/site/PageHero";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph, jobPostingSchema, webPageSchema } from "@/lib/schema";
import {
  APPLICATION_PROCESS,
  CAREERS_FAQ,
  CAREERS_PAGE,
  CAREER_VALUES,
  VACANCIES,
  WHY_KSHETRY,
} from "@/data/pages";

const TRAIL = [{ name: "Careers", path: "/careers" }];

const DESCRIPTION =
  "Legal and professional careers at Kshetry & Co. — current openings, early careers, experienced hires and specialist roles across five jurisdictions.";

export const metadata: Metadata = pageMetadata({
  title: "Careers",
  description: DESCRIPTION,
  path: "/careers",
  keywords: [
    "law firm jobs India",
    "legal careers Dubai",
    "associate lawyer vacancy",
    "legal internship India",
    "law firm recruitment UAE",
  ],
});

export default function CareersPage() {
  return (
    <>
      <JsonLd
        json={graph(
          webPageSchema({ name: "Careers", description: DESCRIPTION, path: "/careers" }),
          breadcrumbSchema(TRAIL),
          ...VACANCIES.map((v) => jobPostingSchema(v)),
          faqSchema(CAREERS_FAQ),
        )}
      />

      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build your practice.
            <span className="block text-gold-light">Expand your perspective.</span>
          </>
        }
        lede={CAREERS_PAGE.lede}
        trail={TRAIL}
        tone="dark"
      >
        <p className="lede max-w-3xl text-gold-light/70">{CAREERS_PAGE.intro}</p>
      </PageHero>

      {/* Why Kshetry & Co. */}
      <section className="bg-white py-24 lg:py-32">
        <div className="shell">
          <Reveal className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <h2 className="eyebrow text-burgundy">Why Kshetry &amp; Co.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="display display-lg mt-7 max-w-3xl text-burgundy-deep">A different kind of legal career.</p>
          </Reveal>

          <div className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {WHY_KSHETRY.map((item, i) => (
              <Reveal key={item.title} delay={Math.min(i, 5) * 60} className="group bg-white p-7 lg:p-8">
                <span className="display text-[2rem] leading-none text-gold-light transition-colors duration-700 group-hover:text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-5 text-[1.25rem] text-burgundy-deep">{item.title}</h3>
                <p className="body-copy mt-3 text-[0.875rem] leading-relaxed">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we value */}
      <section className="bg-ivory py-24 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <h2 className="eyebrow text-burgundy">What We Value</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="display display-md mt-7 text-burgundy-deep">Law without borders.</p>
            </Reveal>
            <Reveal delay={140}>
              <p className="body-copy mt-6 text-[0.9375rem]">
                Our people are expected to understand not only the law, but the environment in which the law operates.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <dl className="border-t border-line">
              {CAREER_VALUES.map((value, i) => (
                <Reveal key={value.title} as="div" delay={i * 70} className="flex items-baseline gap-5 border-b border-line py-5">
                  <span className="eyebrow w-8 shrink-0 text-[0.625rem] text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <dt className="display text-[1.25rem] text-burgundy-deep">{value.title}</dt>
                    <dd className="body-copy mt-1 text-[0.875rem]">{value.copy}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Current openings */}
      <section id="openings" className="scroll-mt-[calc(var(--nav-h)+2rem)] bg-white py-24 lg:py-32">
        <div className="shell">
          <Reveal className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <h2 className="eyebrow text-burgundy">Current Openings</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="display display-lg mt-7 max-w-3xl text-burgundy-deep">Find where you belong.</p>
          </Reveal>

          <Reveal delay={160} className="mt-12">
            <JobBoard />
          </Reveal>
        </div>
      </section>

      {/* Application process */}
      <section className="relative overflow-hidden bg-burgundy-deep py-24 text-ivory lg:py-32">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 90% at 20% 10%, rgba(111,16,40,.6) 0%, rgba(59,7,24,0) 62%), linear-gradient(180deg, #3b0718 0%, #2a0411 100%)",
          }}
        />
        <div className="shell relative">
          <Reveal className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <h2 className="eyebrow text-gold">Application Process</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="display display-lg mt-7 max-w-3xl text-ivory">A considered approach to recruitment.</p>
          </Reveal>

          <ol className="mt-14 grid gap-px bg-gold/15 sm:grid-cols-2 lg:grid-cols-3">
            {APPLICATION_PROCESS.map((step, i) => (
              <Reveal key={step.step} as="li" delay={Math.min(i, 5) * 60} className="bg-burgundy-deep p-7 lg:p-8">
                <span className="display text-[2rem] leading-none text-gold/70">{step.step}</span>
                <h3 className="display mt-5 text-[1.25rem] text-ivory">{step.title}</h3>
                <p className="body-copy mt-3 text-[0.875rem] leading-relaxed text-gold-light/65">{step.copy}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={240}>
            <p className="mt-10 text-[0.8125rem] text-gold-light/50">
              Recruitment stages may vary depending on the position, jurisdiction and nature of the engagement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* General application */}
      <section id="apply" className="scroll-mt-[calc(var(--nav-h)+2rem)] bg-ivory py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <h2 className="eyebrow text-burgundy">Introduce Yourself</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="display display-md mt-7 text-burgundy-deep">
                Not every opportunity begins with a published vacancy.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="body-copy mt-6 text-[0.9375rem]">
                We welcome applications from professionals whose experience, jurisdictional expertise or specialist
                capabilities may be relevant to the firm&rsquo;s future requirements.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-9">
              <ArrowLink href="/network">Explore Our Network</ArrowLink>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={120}>
              <ApplicationForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Careers FAQ */}
      <section className="bg-white py-24 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <h2 className="eyebrow text-burgundy">Careers FAQ</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="display display-md mt-7 text-burgundy-deep">Before you apply.</p>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={120}>
              <Accordion items={CAREERS_FAQ} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Career intelligence */}
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
              <h2 className="eyebrow text-gold">Career Intelligence</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="display display-lg mt-7 text-ivory">Stay connected.</p>
            </Reveal>
            <Reveal delay={140}>
              <p className="lede mt-6 max-w-lg text-gold-light/75">
                Receive selected opportunities, legal publications, professional updates and career-related
                announcements.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={160}>
              <NewsletterForm list="careers" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="bg-ivory py-14">
        <div className="shell">
          <h2 className="eyebrow text-charcoal-muted">Recruitment Notice</h2>
          <p className="body-copy mt-4 max-w-4xl text-[0.8125rem] leading-relaxed">{CAREERS_PAGE.footerNote}</p>
        </div>
      </section>
    </>
  );
}

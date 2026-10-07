import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/site/PageHero";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph, webPageSchema } from "@/lib/schema";
import { FAQS } from "@/data/pages";

const TRAIL = [{ name: "FAQs", path: "/faqs" }];

const DESCRIPTION =
  "Common questions about Kshetry & Co. — services, jurisdictions, making an enquiry, fees and engagement, disputes, careers and website information.";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description: DESCRIPTION,
  path: "/faqs",
  keywords: [
    "law firm FAQ",
    "legal enquiry process",
    "advocate client relationship",
    "legal fees India",
    "cross-border legal services questions",
  ],
});

const ALL_ITEMS = FAQS.flatMap((group) => group.items);

export default function FaqsPage() {
  return (
    <>
      <JsonLd
        json={graph(
          webPageSchema({ name: "Frequently Asked Questions", description: DESCRIPTION, path: "/faqs" }),
          breadcrumbSchema(TRAIL),
          faqSchema(ALL_ITEMS),
        )}
      />

      <PageHero
        eyebrow="FAQs"
        title={
          <>
            Frequently asked
            <span className="block text-burgundy">questions.</span>
          </>
        }
        lede="Practical answers about how the firm works, how to make an enquiry, and what information published on this website does and does not mean."
        trail={TRAIL}
      >
        <nav aria-label="FAQ sections" className="flex flex-wrap gap-2">
          {FAQS.map((group) => (
            <a
              key={group.group}
              href={`#${slug(group.group)}`}
              className="eyebrow border border-line px-4 py-2.5 text-[0.5625rem] text-charcoal-muted transition-colors duration-400 hover:border-gold hover:text-burgundy"
            >
              {group.group}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="bg-white py-20 lg:py-28">
        <div className="shell">
          {FAQS.map((group, i) => (
            <section
              key={group.group}
              id={slug(group.group)}
              className="scroll-mt-[calc(var(--nav-h)+2rem)] grid gap-10 border-t border-line py-14 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-16"
            >
              <div className="lg:col-span-4">
                <Reveal className="lg:sticky lg:top-[calc(var(--nav-h)+3rem)]">
                  <span className="eyebrow text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="display display-sm mt-4 text-burgundy-deep">{group.group}</h2>
                  <p className="eyebrow mt-4 text-[0.5625rem] text-charcoal-muted">
                    {group.items.length} {group.items.length === 1 ? "Question" : "Questions"}
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <Reveal delay={80}>
                  <Accordion items={group.items} />
                </Reveal>
              </div>
            </section>
          ))}
        </div>
      </div>

      <section className="relative overflow-hidden bg-burgundy text-ivory">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 120% at 85% 0%, rgba(200,161,90,.22) 0%, rgba(111,16,40,0) 60%), linear-gradient(180deg, #6f1028 0%, #3b0718 100%)",
          }}
        />
        <div className="shell relative py-20 lg:py-24">
          <Reveal>
            <h2 className="display display-lg max-w-3xl text-ivory">
              Still have a question
              <span className="block text-gold-light">about your matter?</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lede mt-7 max-w-2xl text-gold-light/75">
              An answer here may provide context, but every legal matter is fact-specific. For advice concerning your
              particular circumstances, speak with the appropriate team.
            </p>
          </Reveal>
          <Reveal delay={180} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="light">
              Contact Our Team
            </Button>
            <Button href="/practice-areas" variant="ghost" className="text-gold-light hover:text-gold">
              View Practice Areas
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

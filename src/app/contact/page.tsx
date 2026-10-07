import type { Metadata } from "next";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";
import EnquiryForm from "@/components/forms/EnquiryForm";
import OfficeSelector from "@/components/sections/OfficeSelector";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/site/PageHero";
import { pageMetadata } from "@/lib/seo";
import { ORG_ID, breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";

const TRAIL = [{ name: "Contact", path: "/contact" }];

const DESCRIPTION =
  "Contact Kshetry & Co. for legal advice, transactional assistance, dispute representation or cross-border advisory support across five jurisdictions.";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: DESCRIPTION,
  path: "/contact",
  keywords: [
    "contact law firm India",
    "legal enquiry UAE",
    "cross-border legal advice contact",
    "Kshetry & Co. contact",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        json={graph(
          {
            "@type": "ContactPage",
            "@id": "#contactpage",
            name: "Contact Kshetry & Co.",
            description: DESCRIPTION,
            about: { "@id": ORG_ID },
          },
          webPageSchema({ name: "Contact", description: DESCRIPTION, path: "/contact" }),
          breadcrumbSchema(TRAIL),
        )}
      />

      <PageHero
        eyebrow="Contact Kshetry &amp; Co."
        title={
          <>
            Let&rsquo;s discuss
            <span className="block text-burgundy">your matter.</span>
          </>
        }
        lede="Whether you require legal advice, transactional assistance, dispute representation or cross-border advisory support, our team can direct your enquiry to the appropriate practice."
        trail={TRAIL}
      />

      {/* Office selector */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell">
          <Reveal className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <h2 className="eyebrow text-burgundy">Our Offices</h2>
          </Reveal>

          <Reveal delay={100} className="mt-12">
            <OfficeSelector />
          </Reveal>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquire" className="scroll-mt-[calc(var(--nav-h)+2rem)] bg-ivory py-20 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <h2 className="eyebrow text-burgundy">Start a Conversation</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="display display-md mt-7 text-burgundy-deep">
                Tell us about the matter.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="body-copy mt-6 text-[0.9375rem]">
                Please provide sufficient information for the firm to understand the nature of your enquiry. Your
                message will be directed to the relevant jurisdictional or practice-area team.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-9">
              <ArrowLink href="/faqs">Read Our FAQs</ArrowLink>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={120}>
              <EnquiryForm />
            </Reveal>
          </div>
        </div>
      </section>

    </>
  );
}

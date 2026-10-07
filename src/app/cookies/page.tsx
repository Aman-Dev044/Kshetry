import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/site/PageHero";
import LegalDocument from "@/components/site/LegalDocument";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { LEGAL_DOCS } from "@/data/legal";

const PATH = "/cookies";
const TITLE = "Cookie Policy";
const TRAIL = [{ name: TITLE, path: PATH }];

const DESCRIPTION =
  "How Kshetry & Co. uses cookies, analytics and similar technologies on this website, and how they relate to the firm's wider Privacy Policy.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

/**
 * The specification covers cookies inside the Privacy Policy rather than as a
 * standalone document. This page therefore presents those clauses verbatim and
 * points to the full policy, so the two can never drift apart.
 */
const COOKIE_HEADINGS = ["Cookies and Similar Technologies", "Analytics", "Third-party Websites", "Social Media"];

export default function CookiesPage() {
  const sections = LEGAL_DOCS.privacy.sections.filter((s) =>
    COOKIE_HEADINGS.some((h) => s.heading.toLowerCase() === h.toLowerCase()),
  );

  return (
    <>
      <JsonLd
        json={graph(
          webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
          breadcrumbSchema(TRAIL),
        )}
      />

      <PageHero
        eyebrow="Legal"
        title={
          <>
            Cookie
            <span className="block text-burgundy">policy.</span>
          </>
        }
        lede="How this website uses cookies, analytics and similar technologies, and what that means for the information collected about your visit."
        trail={TRAIL}
      />

      <LegalDocument
        sections={sections}
        currentPath={PATH}
        note="These clauses are reproduced from the firm's Privacy Policy, which governs the handling of all personal information. Read the full Privacy Policy for retention periods, international transfers and your rights."
      />
    </>
  );
}

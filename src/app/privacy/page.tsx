import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/site/PageHero";
import LegalDocument from "@/components/site/LegalDocument";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { LEGAL_DOCS } from "@/data/legal";

const PATH = "/privacy";
const TITLE = "Privacy Policy";
const TRAIL = [{ name: TITLE, path: PATH }];

const DESCRIPTION =
  "How Kshetry & Co. collects, uses, discloses, retains and protects personal information, including cookies, data transfers, retention and your privacy rights.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function Page() {
  const doc = LEGAL_DOCS.privacy;

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
            Privacy
            <span className="block text-burgundy">policy.</span>
          </>
        }
        lede="How Kshetry &amp; Co. collects, uses, discloses, retains and protects personal information across the jurisdictions in which it operates."
        trail={TRAIL}
      />

      <LegalDocument sections={doc.sections} currentPath={PATH} />
    </>
  );
}

import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/site/PageHero";
import LegalDocument from "@/components/site/LegalDocument";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { LEGAL_DOCS } from "@/data/legal";

const PATH = "/terms";
const TITLE = "Terms of Use";
const TRAIL = [{ name: TITLE, path: PATH }];

const DESCRIPTION =
  "Terms & Conditions governing access to and use of the Kshetry & Co. website, including intellectual property, liability, governing law and jurisdiction.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function Page() {
  const doc = LEGAL_DOCS.terms;

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
            Terms
            <span className="block text-burgundy">of use.</span>
          </>
        }
        lede="These Terms &amp; Conditions govern your access to and use of the website operated by Kshetry &amp; Co."
        trail={TRAIL}
      />

      <LegalDocument sections={doc.sections} currentPath={PATH} />
    </>
  );
}

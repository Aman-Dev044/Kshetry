import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/site/PageHero";
import LegalDocument from "@/components/site/LegalDocument";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { LEGAL_DOCS } from "@/data/legal";

const PATH = "/disclaimer";
const TITLE = "Website Disclaimer";
const TRAIL = [{ name: TITLE, path: PATH }];

const DESCRIPTION =
  "The Kshetry & Co. website disclaimer: general information only, no solicitation or advertisement, and no advocate-client relationship from use of this site.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function Page() {
  const doc = LEGAL_DOCS.disclaimer;

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
            Website
            <span className="block text-burgundy">disclaimer.</span>
          </>
        }
        lede="This website is published for general information. It is not an advertisement or solicitation, and accessing it does not create an advocate-client relationship."
        trail={TRAIL}
      />

      <LegalDocument sections={doc.sections} currentPath={PATH} />
    </>
  );
}

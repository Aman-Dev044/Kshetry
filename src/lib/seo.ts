import type { Metadata } from "next";

/**
 * Single source of truth for everything crawlers and social cards read.
 * Set NEXT_PUBLIC_SITE_URL at deploy time; the default is the production host.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kshetryandco.com").replace(/\/$/, "");

export const SITE_NAME = "Kshetry & Co.";
export const SITE_TAGLINE = "Legal Solutions Beyond Borders";
export const SITE_LOCALE = "en_IN";

export const SITE_DESCRIPTION =
  "Kshetry & Co. — legal, transactional, regulatory and strategic advisory across India, the UAE, the UK, the US and Thailand. Legal Solutions Beyond Borders.";

/** Jurisdictions the firm serves — reused in metadata and structured data. */
export const AREAS_SERVED = ["India", "United Arab Emirates", "United Kingdom", "United States", "Thailand"];

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageSeo = {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/practice-areas". Drives the canonical URL. */
  path: string;
  keywords?: string[];
  /** Defaults to the site-wide OG image generated at /opengraph-image. */
  image?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  noIndex?: boolean;
};

/**
 * Builds a complete, canonical-correct Metadata object for a page.
 * Titles flow through the `%s · Kshetry & Co.` template in the root layout.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image,
  type = "website",
  publishedTime,
  noIndex = false,
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ?? `${url === SITE_URL ? SITE_URL : url}/opengraph-image`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: type === "profile" ? "profile" : type,
      url,
      title: `${title} · ${SITE_NAME}`,
      description,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${title} — ${SITE_NAME}` }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
        },
  };
}

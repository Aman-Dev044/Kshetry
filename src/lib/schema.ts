import { AREAS_SERVED, SITE_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl } from "./seo";
import { PRACTICE_AREAS } from "@/data/practices";
import { FOUNDER } from "@/data/pages";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Json = Record<string, any>;

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * LegalService describes the firm itself. Address and telephone are
 * deliberately omitted until the client supplies verified office details —
 * publishing a guessed postal address would poison the local-SEO signal.
 */
export function organizationSchema(): Json {
  return {
    "@type": ["LegalService", "Organization"],
    "@id": ORG_ID,
    name: SITE_NAME,
    alternateName: "Kshetry and Co.",
    legalName: "Kshetry & Co.",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    slogan: "Legal Solutions Beyond Borders",
    foundingDate: "2009",
    logo: { "@type": "ImageObject", url: absoluteUrl("/icon"), width: 64, height: 64 },
    image: absoluteUrl("/opengraph-image"),
    areaServed: AREAS_SERVED.map((name) => ({ "@type": "Country", name })),
    knowsAbout: PRACTICE_AREAS.map((p) => p.title),
    founder: {
      "@type": "Person",
      name: FOUNDER.name,
      jobTitle: FOUNDER.role,
      worksFor: { "@id": ORG_ID },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Practice Areas",
      itemListElement: PRACTICE_AREAS.map((p) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: p.title, description: p.summary, url: absoluteUrl(`/practice-areas#${p.slug}`) },
      })),
    },
  };
}

export function websiteSchema(): Json {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function webPageSchema(opts: { name: string; description: string; path: string }): Json {
  return {
    "@type": "WebPage",
    "@id": `${absoluteUrl(opts.path)}#webpage`,
    url: absoluteUrl(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

export function faqSchema(items: { q: string; a: string }[]): Json {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function itemListSchema(opts: { name: string; items: { name: string; url: string }[] }): Json {
  return {
    "@type": "ItemList",
    name: opts.name,
    numberOfItems: opts.items.length,
    itemListElement: opts.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function jobPostingSchema(job: {
  id: string;
  title: string;
  summary: string;
  city: string;
  location: string;
  type: string;
  experience: string;
  posted: string;
}): Json {
  const EMPLOYMENT: Record<string, string> = {
    "Full-Time": "FULL_TIME",
    Consultant: "CONTRACTOR",
    Internship: "INTERN",
  };

  return {
    "@type": "JobPosting",
    title: job.title,
    description: `${job.summary} Experience: ${job.experience}.`,
    datePosted: job.posted,
    employmentType: EMPLOYMENT[job.type] ?? "OTHER",
    hiringOrganization: { "@id": ORG_ID },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: job.city, addressCountry: job.location },
    },
    directApply: true,
    url: absoluteUrl(`/careers#${job.id}`),
  };
}

export function articleSchema(article: {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  category: string;
  year: string;
}): Json {
  return {
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    articleSection: article.category,
    datePublished: `${article.year}-01-01`,
    author: { "@type": "Organization", name: article.author },
    publisher: { "@id": ORG_ID },
    isAccessibleForFree: true,
    url: absoluteUrl(`/insights#${article.slug}`),
  };
}

/** Wraps graph nodes in a single @graph document — one script tag per page. */
export function graph(...nodes: Json[]): string {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes });
}

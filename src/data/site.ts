export const SITE = {
  name: "Kshetry & Co.",
  kicker: "Law Firm",
  tagline: "Legal Solutions Beyond Borders",
  established: 2009,
  year: 2026,
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Our Network", href: "/network" },
  { label: "Awards & Recognition", href: "/recognition" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const JURISDICTIONS = [
  "India",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Thailand",
  "Global Practices",
] as const;

/* ------------------------------------------------------------------
   Network nodes — lon/lat drive the map animation directly.
------------------------------------------------------------------ */
export type NetworkNode = {
  id: string;
  code: string;
  country: string;
  city: string;
  lon: number;
  lat: number;
  kind: "office" | "network";
  heading: string;
  blurb: string;
  places: string[];
  /** Which side the label sits on, to keep type clear of the landmass. */
  anchor: "left" | "right";
  /** Vertical nudge for the label, in map units, so labels never collide. */
  labelDy?: number;
};

export const NETWORK: NetworkNode[] = [
  {
    id: "in",
    code: "IND",
    country: "India",
    city: "Kolkata",
    lon: 88.36,
    lat: 22.57,
    kind: "office",
    heading: "Our Foundational Jurisdiction",
    blurb:
      "The Indian practice forms the foundation of the firm’s legal and advisory capability — litigation, corporate and commercial matters, real estate, contracts, regulatory advisory and dispute resolution.",
    places: ["Kolkata", "Delhi", "Mumbai", "Bengaluru"],
    anchor: "right",
    labelDy: -5,
  },
  {
    id: "ae",
    code: "UAE",
    country: "United Arab Emirates",
    city: "Dubai",
    lon: 55.27,
    lat: 25.2,
    kind: "office",
    heading: "Our Middle East Platform",
    blurb:
      "The UAE forms an important part of the firm’s international outlook — corporate and commercial advisory, real estate, construction, contracts, regulatory matters and India–UAE business interests.",
    places: ["Dubai", "Free Zone jurisdictions"],
    anchor: "left",
    labelDy: -4,
  },
  {
    id: "uk",
    code: "UK",
    country: "United Kingdom",
    city: "London",
    lon: -0.13,
    lat: 51.51,
    kind: "network",
    heading: "Our UK Presence",
    blurb:
      "The UK forms part of the firm’s developing international platform for matters involving businesses, professionals, investors and clients with UK-connected interests.",
    places: ["London", "UK Network"],
    anchor: "left",
  },
  {
    id: "us",
    code: "USA",
    country: "United States",
    city: "New York",
    lon: -74.01,
    lat: 40.71,
    kind: "network",
    heading: "Our US Presence",
    blurb:
      "Our US presence supports cross-border commercial and advisory requirements involving US-connected businesses, investors and private clients.",
    places: ["New York", "US Network"],
    anchor: "left",
  },
  {
    id: "th",
    code: "THA",
    country: "Thailand",
    city: "Bangkok",
    lon: 100.5,
    lat: 13.75,
    kind: "network",
    heading: "Our Southeast Asian Presence",
    blurb:
      "Thailand is a developing component of the firm’s Southeast Asian network, connecting South Asia and Southeast Asia across commercial interests.",
    places: ["Bangkok", "Thailand Network"],
    anchor: "right",
    labelDy: 7,
  },
];

/** Route order for the travelling arrows: USA -> UK -> UAE -> India -> Thailand. */
export const ROUTE: string[] = ["us", "uk", "ae", "in", "th"];

/* ------------------------------------------------------------------
   Practice areas — six homepage categories
------------------------------------------------------------------ */
export type Practice = {
  index: string;
  title: string;
  summary: string;
  items: string[];
};

export const PRACTICES: Practice[] = [
  {
    index: "01",
    title: "Advisory",
    summary:
      "Counsel across the corporate lifecycle — from establishment and structuring to governance and strategic decision-making.",
    items: ["Corporate Advisory", "Strategic Legal Advisory", "Private Client Advisory"],
  },
  {
    index: "02",
    title: "Litigation",
    summary:
      "Strategic assistance in civil, commercial and contractual disputes, developed around the commercial context of the matter.",
    items: ["Civil Litigation", "Criminal Litigation", "Commercial Litigation"],
  },
  {
    index: "03",
    title: "Transactions",
    summary:
      "Transaction structuring with careful consideration of legal, regulatory and commercial risk across jurisdictions.",
    items: ["Corporate Transactions", "Mergers & Acquisitions", "Investments", "Real Estate Transactions"],
  },
  {
    index: "04",
    title: "Regulatory",
    summary:
      "Regulatory obligations, governance frameworks and legal risk — understood and managed in a structured manner.",
    items: ["Regulatory Compliance", "Corporate Governance", "Employment", "Licensing"],
  },
  {
    index: "05",
    title: "Construction & Infrastructure",
    summary:
      "Project documentation and contractual allocation of risk across construction and infrastructure engagements.",
    items: ["EPC Contracts", "FIDIC", "Construction Advisory", "Procurement"],
  },
  {
    index: "06",
    title: "Cross-Border",
    summary:
      "Matters involving multiple jurisdictions — investments, joint ventures, collaborations and international arrangements.",
    items: ["India–UAE Advisory", "GCC Business Advisory", "NRI Services", "International Transactions"],
  },
];

/* ------------------------------------------------------------------
   What defines us
------------------------------------------------------------------ */
export const DEFINING = [
  {
    index: "01",
    title: "Clarity",
    copy: "Complex legal issues translated into practical options.",
  },
  {
    index: "02",
    title: "Cross-Border Perspective",
    copy: "Understanding how legal, regulatory and commercial environments interact across jurisdictions.",
  },
  {
    index: "03",
    title: "Discretion",
    copy: "A confidential and considered approach to sensitive matters.",
  },
  {
    index: "04",
    title: "Commercial Thinking",
    copy: "Advice designed to understand not only the law, but the objective behind the matter.",
  },
];

/* ------------------------------------------------------------------
   Insights
------------------------------------------------------------------ */
export const FEATURED_INSIGHT = {
  series: "Beyond the Black Letter",
  category: "Editorial Series",
  title: "Legal developments. Commercial consequences. Strategic perspective.",
  excerpt:
    "Our flagship editorial series examines important developments through a broader lens — looking beyond what the law says to consider what it may mean for businesses, investors, founders, institutions and decision-makers.",
  readingTime: "9 min read",
  date: "March 2026",
};

export const INSIGHTS = [
  {
    index: "01",
    category: "Legal Update",
    title: "The New Architecture of Cross-Border Business",
    excerpt:
      "How businesses are navigating contracts, regulatory obligations, risk allocation and jurisdictional complexity in an increasingly connected marketplace.",
    readingTime: "5 min read",
  },
  {
    index: "02",
    category: "UAE & GCC",
    title: "Doing Business in the UAE: Legal Considerations Beyond Incorporation",
    excerpt:
      "A practical look at structuring, contracts, regulatory compliance, commercial relationships and ongoing legal risk.",
    readingTime: "7 min read",
  },
  {
    index: "03",
    category: "Construction & EPC",
    title: "Contract Risk in Major Projects: Where Disputes Often Begin",
    excerpt:
      "Examining scope, variations, payment mechanisms, extensions of time, delays, claims and dispute-resolution provisions.",
    readingTime: "8 min read",
  },
  {
    index: "04",
    category: "Real Estate",
    title: "The Legal Anatomy of a Real Estate Transaction",
    excerpt:
      "From title and due diligence to documentation, representations, warranties, closing obligations and post-completion risk.",
    readingTime: "6 min read",
  },
];

/* ------------------------------------------------------------------
   Recognition
------------------------------------------------------------------ */
export const STATS = [
  { value: 17, suffix: "+", label: "Years of Legal Practice" },
  { value: 5000, suffix: "+", label: "Cases Solved" },
  { value: 5, suffix: "", label: "International Locations" },
  { value: 8, suffix: "+", label: "Awards & Recognitions" },
];

export const RECOGNITION = [
  {
    year: "2026",
    title: "40 Under 40",
    org: "Asia Inc. 500 — 2026 Edition",
    note: "Emerging leadership, commercial acumen and transformative professional impact within the Asian business environment.",
  },
  {
    year: "2025",
    title: "Visionary Leader in Law & Social Service",
    org: "Global Business Excellence Awards",
    note: "Presented at the House of Commons, London — leadership in law and contributions to social service.",
  },
  {
    year: "2024",
    title: "Best Legal Consultant",
    org: "Asian Excellence Awards",
    note: "Professional achievement and distinction in the field of strategic legal consulting.",
  },
  {
    year: "2024",
    title: "Excellence in Civil Litigation",
    org: "Asian Excellence Awards",
    note: "Advocacy and strategic handling of complex civil litigation matters.",
  },
];

export const PRESS = [
  "Forbes India",
  "ABP Live",
  "Asia Inc. 500",
  "The Entrepreneurs of India",
  "Global Business Excellence Awards",
];

/* ------------------------------------------------------------------
   Footer
------------------------------------------------------------------ */
export const FOOTER_COLUMNS = [
  {
    title: "Firm",
    links: [
      { label: "About", href: "/about" },
      { label: "Practice Areas", href: "/practice-areas" },
      { label: "Our Network", href: "/network" },
      { label: "Awards & Recognition", href: "/recognition" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "Careers", href: "/careers" },
      { label: "FAQs", href: "/faqs" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Global",
    links: [
      { label: "India", href: "/network#in" },
      { label: "UAE", href: "/network#ae" },
      { label: "UK", href: "/network#uk" },
      { label: "USA", href: "/network#us" },
      { label: "Thailand", href: "/network#th" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

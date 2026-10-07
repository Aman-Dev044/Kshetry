/* ==================================================================
   Page-level content: about, network, recognition, insights, careers,
   contact and FAQs. Copy is the firm's own, from the specification.
   ================================================================== */

/* ---------------------------- ABOUT ---------------------------- */

export const ABOUT = {
  eyebrow: "About Kshetry & Co.",
  title: "Law. Strategy. Perspective.",
  lede: "A journey built on legal depth, commercial understanding and global perspective.",
  journey: [
    "Founded in 2009, Kshetry & Co. has evolved as a full-service legal practice with a growing international outlook, combining the traditions of rigorous legal practice with the demands of an increasingly interconnected commercial world.",
    "From its foundation, the firm has been shaped by a simple conviction: effective legal counsel must do more than interpret the law — it must provide clarity, protect interests and enable decisive action. Over the years, this philosophy has informed the firm's work across civil and criminal litigation, corporate and commercial law, real estate, immigration, regulatory compliance, dispute resolution and cross-border advisory.",
    "Kshetry & Co. serves a diverse clientele comprising businesses, investors, entrepreneurs, professionals, institutions and private individuals, advising them on matters where legal complexity, commercial considerations and strategic decision-making converge. The firm's practice encompasses both contentious and non-contentious work, from protecting a client's position in a dispute to structuring transactions, negotiating contractual arrangements, assessing legal exposure and navigating regulatory requirements.",
    "As the nature of business and investment has become increasingly international, so too has the perspective of the firm. Kshetry & Co. approaches cross-border matters with an appreciation of the legal, regulatory and commercial considerations that arise when interests extend beyond a single jurisdiction.",
  ],
  approach: {
    title: "Our Approach",
    copy: [
      "Kshetry & Co. was established with a simple premise: sophisticated legal advice should combine legal depth with a clear understanding of the client's commercial and strategic objectives.",
      "Our work brings together legal analysis, transactional thinking, regulatory awareness and practical problem-solving. We advise across a range of sectors and jurisdictions, supporting clients through individual legal matters as well as complex, multi-dimensional engagements.",
      "Our approach is collaborative, discreet and commercially conscious.",
    ],
  },
  moments: {
    title: "From Legal Complexity to Informed Action.",
    copy: [
      "Clients rarely approach counsel without reason. They come to a law firm at moments that may have significant consequences — a business decision requiring legal protection, a transaction demanding careful structuring, a contract whose implications require closer examination, a regulatory issue that cannot be overlooked, or a dispute in which the right strategy may materially affect the outcome.",
      "Our approach begins with understanding the matter in its entirety: the facts, the legal framework, the commercial context, the risks involved and the client's underlying objectives. We then examine the available legal and strategic pathways and translate that analysis into advice that is clear, actionable and commercially conscious.",
      "Today, Kshetry & Co. continues to develop its practice with an increasingly global perspective while remaining grounded in the fundamentals of professional legal service — integrity, discretion, diligence, sound legal analysis and accountability to the client.",
    ],
  },
} as const;

/* --------------------------- NETWORK --------------------------- */

export const NETWORK_PAGE = {
  eyebrow: "Our Network",
  title: "Local knowledge. Global perspective.",
  lede: "Kshetry & Co. has established a physical presence across key jurisdictions, creating a foundation for an increasingly connected international legal practice.",
  copy: "The firm's international platform is designed to bring together jurisdictional knowledge, legal expertise and professional relationships, enabling Kshetry & Co. to develop a coordinated approach to matters involving multiple markets.",
  beyondOffices: {
    title: "A Network Designed Around the Matter",
    copy: "A physical office is only one element of an international legal practice. For matters requiring jurisdiction-specific advice, Kshetry & Co. may work with appropriately qualified local counsel, consultants, specialists and professional advisers, depending on the nature and requirements of the engagement.",
    pillars: [
      { title: "Legal Analysis", copy: "Understanding the applicable legal framework." },
      { title: "Jurisdictional Expertise", copy: "Identifying where local expertise is required." },
      { title: "Cross-Border Coordination", copy: "Connecting the relevant elements of an international matter." },
      { title: "Commercial Execution", copy: "Keeping legal advice aligned with the client's practical objectives." },
    ],
  },
} as const;

/* ------------------------- RECOGNITION ------------------------- */

export const FOUNDER = {
  name: "Advocate Rajjesh Kshetryy",
  role: "Founder & Managing Director",
  bio: "Advocate Rajjesh Kshetryy has built his professional journey around advocacy, strategic legal thinking and an expanding vision for an internationally oriented legal practice. With more than 17 years of legal experience, his work has encompassed litigation, advisory and complex legal matters, including representation and proceedings before the Supreme Court and High Courts of India.",
  vision:
    "His vision for Kshetry & Co. extends beyond conventional legal practice — to create a platform capable of addressing the increasingly interconnected legal and commercial requirements of businesses, entrepreneurs, investors and individuals.",
  line: "A Practice Built on Vision. A Reputation Built Over Time.",
} as const;

export const RECOGNITION_PAGE = {
  eyebrow: "Recognition",
  title: "Recognition of professional excellence.",
  lede: "Recognition earned through purpose, performance and professional excellence.",
  intro: [
    "At Kshetry & Co., recognition is regarded not simply as an accolade, but as a reflection of the standards to which the firm holds itself.",
    "Our journey has been shaped by the trust of clients, the complexity of the matters entrusted to us, and a continuing commitment to thoughtful advocacy, strategic legal counsel and professional integrity. Recognition across legal, business and international platforms forms part of that journey.",
  ],
  legacy: {
    title: "Built in India. Evolving Across Borders.",
    copy: [
      "Since its establishment in 2009, Kshetry & Co. has grown from its Indian roots into an increasingly international legal practice serving clients with domestic and cross-border requirements.",
      "The firm's experience encompasses contentious and non-contentious matters, including litigation, corporate and commercial advisory, real estate, construction, contracts, regulatory matters and international business concerns.",
      "As the firm continues to expand its international platform, its guiding principle remains unchanged: to pursue excellence in law while remaining grounded in the realities of the client, the matter and the objective.",
    ],
  },
} as const;

export type Award = {
  year: string;
  title: string;
  org: string;
  category: string;
  note: string;
};

export const AWARDS: Award[] = [
  {
    year: "2026",
    title: "Asia Inc. 500 — 40 Under 40",
    org: "Asia Inc. 500",
    category: "Emerging Leadership",
    note: "Recognition acknowledging emerging leadership, commercial acumen and transformative professional impact within the Asian business environment.",
  },
  {
    year: "2025",
    title: "Visionary Leader in Law & Social Service",
    org: "Global Business Excellence Awards",
    category: "Leadership",
    note: "Recognition presented at the House of Commons, London, associated with leadership in law and contributions to social service.",
  },
  {
    year: "2024",
    title: "Best Legal Consultant",
    org: "Asian Excellence Awards",
    category: "Legal Consulting",
    note: "Recognition for professional achievement and distinction in the field of strategic legal consulting.",
  },
  {
    year: "2024",
    title: "Excellence in Civil Litigation",
    org: "Asian Excellence Awards",
    category: "Litigation",
    note: "Recognition associated with advocacy and strategic handling of complex civil litigation matters.",
  },
  {
    year: "—",
    title: "Forbes India — Visionary",
    org: "Forbes India",
    category: "Feature",
    note: "Recognition associated with visionary leadership, strategic innovation and an approach to building a modern and internationally oriented legal practice.",
  },
  {
    year: "—",
    title: "Excellence Personified",
    org: "ABP Live",
    category: "Feature",
    note: "Recognition highlighting professional achievement, leadership, strategic thinking and contribution within the broader business and professional landscape.",
  },
  {
    year: "—",
    title: "The Entrepreneurs of India — 53rd Edition",
    org: "The Entrepreneurs of India",
    category: "Feature",
    note: "Feature recognising entrepreneurial vision, strategic thinking and innovation in building a contemporary professional practice.",
  },
];

/* --------------------------- INSIGHTS -------------------------- */

export const INSIGHT_CATEGORIES = [
  "All Insights",
  "Legal Updates",
  "Corporate & Commercial",
  "Real Estate & Infrastructure",
  "Construction & EPC",
  "Disputes & Arbitration",
  "Cross-Border & International",
  "UAE & GCC",
  "Technology & AI",
  "Employment & Workplace",
  "Regulatory & Compliance",
  "Private Client",
  "Opinion & Editorial",
] as const;

export const INSIGHT_JURISDICTIONS = ["All", "India", "UAE", "UK", "US", "Thailand", "International"] as const;

export type Article = {
  slug: string;
  index: string;
  category: (typeof INSIGHT_CATEGORIES)[number];
  jurisdiction: (typeof INSIGHT_JURISDICTIONS)[number];
  year: string;
  title: string;
  excerpt: string;
  readingTime: string;
  author: string;
  designation: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "new-architecture-of-cross-border-business",
    index: "01",
    category: "Legal Updates",
    jurisdiction: "International",
    year: "2026",
    title: "The New Architecture of Cross-Border Business",
    excerpt:
      "How businesses are navigating contracts, regulatory obligations, risk allocation and jurisdictional complexity in an increasingly connected marketplace.",
    readingTime: "5 min read",
    author: "Kshetry & Co. Editorial Team",
    designation: "Editorial",
  },
  {
    slug: "doing-business-in-the-uae",
    index: "02",
    category: "UAE & GCC",
    jurisdiction: "UAE",
    year: "2026",
    title: "Doing Business in the UAE: Legal Considerations Beyond Incorporation",
    excerpt:
      "A practical look at structuring, contracts, regulatory compliance, commercial relationships and ongoing legal risk.",
    readingTime: "7 min read",
    author: "Kshetry & Co. Editorial Team",
    designation: "UAE & GCC Practice",
  },
  {
    slug: "contract-risk-in-major-projects",
    index: "03",
    category: "Construction & EPC",
    jurisdiction: "International",
    year: "2026",
    title: "Contract Risk in Major Projects: Where Disputes Often Begin",
    excerpt:
      "Examining scope, variations, payment mechanisms, extensions of time, delays, claims and dispute-resolution provisions in complex projects.",
    readingTime: "8 min read",
    author: "Kshetry & Co. Editorial Team",
    designation: "Construction & Infrastructure",
  },
  {
    slug: "legal-anatomy-of-a-real-estate-transaction",
    index: "04",
    category: "Real Estate & Infrastructure",
    jurisdiction: "India",
    year: "2025",
    title: "The Legal Anatomy of a Real Estate Transaction",
    excerpt:
      "From title and due diligence to documentation, representations, warranties, closing obligations and post-completion risk.",
    readingTime: "6 min read",
    author: "Kshetry & Co. Editorial Team",
    designation: "Real Estate Practice",
  },
  {
    slug: "the-contract-as-a-business-strategy",
    index: "05",
    category: "Corporate & Commercial",
    jurisdiction: "International",
    year: "2025",
    title: "The Contract as a Business Strategy",
    excerpt:
      "Why modern contract drafting should address commercial objectives, operational realities and future risk — not merely legal enforceability.",
    readingTime: "5 min read",
    author: "Kshetry & Co. Editorial Team",
    designation: "Corporate & Commercial",
  },
  {
    slug: "ai-accountability-and-corporate-risk",
    index: "06",
    category: "Technology & AI",
    jurisdiction: "International",
    year: "2026",
    title: "AI, Accountability & the Emerging Corporate Risk Landscape",
    excerpt:
      "What businesses should consider when artificial intelligence begins influencing decisions, workflows, customer interactions and internal operations.",
    readingTime: "7 min read",
    author: "Kshetry & Co. Editorial Team",
    designation: "Technology & Cyber",
  },
];

export const EDITORIAL_SERIES = [
  { title: "The Global Counsel", copy: "Perspectives on international business, cross-border transactions and jurisdictional risk." },
  { title: "The Boardroom Brief", copy: "Legal issues relevant to directors, founders, investors and senior management." },
  { title: "The Dispute Room", copy: "Lessons from litigation, arbitration, negotiation and commercial disputes." },
  { title: "The Contract Review", copy: "Practical perspectives on drafting, negotiation and contractual risk." },
  { title: "The Regulatory Lens", copy: "Making sense of regulatory change and compliance obligations." },
  { title: "The Property & Projects Review", copy: "Real estate, infrastructure, construction and development commentary." },
  { title: "The Digital Counsel", copy: "AI, data, cybersecurity, digital commerce and emerging technology." },
];

export const QUICK_READS = [
  { title: "What is a Force Majeure Clause?", copy: "A concise explanation of what it does, when it may apply and why drafting matters." },
  { title: "What Is Legal Due Diligence?", copy: "The essential questions before entering a transaction." },
  { title: "What Makes a Contract Commercially Strong?", copy: "Beyond definitions and boilerplate." },
  { title: "Expanding Internationally? Start Here.", copy: "Five areas that deserve early legal attention." },
  { title: "Arbitration or Litigation?", copy: "Understanding the practical distinction." },
  { title: "Why Document Retention Matters", copy: "The importance of preserving commercially relevant records." },
];

export const INSIGHTS_DISCLAIMER =
  "The articles, editorials, legal updates and other materials published in Kshetry & Co. Insights are intended solely for general informational and educational purposes. They do not constitute legal advice, an offer to provide legal services, or the creation of an advocate–client or other professional relationship. Laws and regulations may change, and the application of legal principles depends on the facts and jurisdiction of each matter. Readers should obtain appropriate professional advice before taking or refraining from any action based on published content.";

/* --------------------------- CAREERS --------------------------- */

export const CAREERS_PAGE = {
  eyebrow: "Careers",
  title: "Build your practice. Expand your perspective.",
  lede: "Kshetry & Co. is built for people who think beyond the obvious.",
  intro:
    "We are a multidisciplinary legal practice working across jurisdictions, sectors and complex commercial environments. Careers here are not defined simply by titles or years of experience — they are built through responsibility, intellectual curiosity, commercial understanding and the opportunity to work on matters that have real-world consequence.",
  footerNote:
    "Kshetry & Co. is committed to maintaining professional standards in recruitment and engagement. All opportunities are subject to applicable laws, professional regulations, internal requirements and the terms applicable to the relevant role or engagement. Information published on this page does not constitute an offer of employment or a guarantee of recruitment. For legal professionals, engagement and practice opportunities remain subject to applicable bar, professional, licensing and jurisdictional requirements.",
} as const;

export const CAREER_VALUES = [
  { title: "Curious", copy: "Always willing to learn, question and explore." },
  { title: "Commercially Minded", copy: "Able to understand the business objective behind the legal instruction." },
  { title: "Precise", copy: "Committed to high standards of research, drafting, analysis and execution." },
  { title: "Collaborative", copy: "Comfortable working across practice areas, jurisdictions and professional teams." },
  { title: "Responsible", copy: "Trusted with client matters, confidential information and meaningful responsibility." },
];

export const WHY_KSHETRY = [
  { title: "Work That Matters", copy: "Real transactions, disputes, contracts, investigations, advisory assignments and strategic matters." },
  { title: "International Exposure", copy: "Matters involving India, the UAE, the UK, the US, Thailand and other jurisdictions through our broader network." },
  { title: "Cross-Disciplinary Thinking", copy: "Our professionals work across legal disciplines rather than in isolated practice-area silos." },
  { title: "Responsibility Early", copy: "We encourage capable professionals to take ownership of assignments and develop practical judgment." },
  { title: "Continuous Learning", copy: "Research, writing, negotiation, technology and commercial understanding form part of everyday development." },
  { title: "A Modern Practice", copy: "Traditional legal fundamentals combined with technology, process innovation and international collaboration." },
];

export const APPLICATION_PROCESS = [
  { step: "01", title: "Application", copy: "Submit your CV and relevant professional information." },
  { step: "02", title: "Initial Review", copy: "We review your experience, qualifications and potential alignment with the opportunity." },
  { step: "03", title: "Discussion", copy: "Selected candidates may be invited for an initial discussion or interview." },
  { step: "04", title: "Assessment", copy: "The process may include legal, technical, writing, research or role-specific assessment." },
  { step: "05", title: "Final Discussion", copy: "Shortlisted candidates may meet relevant partners, senior professionals or functional leaders." },
  { step: "06", title: "Offer / Engagement", copy: "Successful candidates receive formal terms appropriate to the role and applicable regulations." },
];

export const JOB_LOCATIONS = ["All Locations", "India", "UAE", "UK", "US", "Thailand", "International"] as const;
export const JOB_PRACTICES = [
  "All Practices",
  "Corporate & Commercial",
  "Litigation & Disputes",
  "Real Estate & Construction",
  "Regulatory & Compliance",
  "Technology & AI",
  "Business Operations",
] as const;
export const JOB_LEVELS = ["All Levels", "Entry", "Mid-level", "Senior", "Leadership"] as const;

export type Vacancy = {
  id: string;
  title: string;
  location: (typeof JOB_LOCATIONS)[number];
  city: string;
  practice: (typeof JOB_PRACTICES)[number];
  level: (typeof JOB_LEVELS)[number];
  type: "Full-Time" | "Consultant" | "Internship";
  experience: string;
  summary: string;
  posted: string;
};

export const VACANCIES: Vacancy[] = [
  {
    id: "assoc-corp-kolkata",
    title: "Associate — Corporate & Commercial",
    location: "India",
    city: "Kolkata",
    practice: "Corporate & Commercial",
    level: "Mid-level",
    type: "Full-Time",
    experience: "3–5 years PQE",
    summary:
      "Advisory, structuring and commercial contract work for Indian and international clients, with exposure to cross-border mandates.",
    posted: "2026-02-10",
  },
  {
    id: "senior-assoc-disputes-delhi",
    title: "Senior Associate — Disputes & Arbitration",
    location: "India",
    city: "Delhi",
    practice: "Litigation & Disputes",
    level: "Senior",
    type: "Full-Time",
    experience: "6–9 years PQE",
    summary:
      "Civil and commercial litigation, arbitration strategy and advisory on contractual and regulatory disputes.",
    posted: "2026-02-02",
  },
  {
    id: "legal-consultant-dubai",
    title: "Legal Consultant — Real Estate & Construction",
    location: "UAE",
    city: "Dubai",
    practice: "Real Estate & Construction",
    level: "Senior",
    type: "Consultant",
    experience: "7+ years",
    summary:
      "Real estate transactions, EPC and FIDIC-based contracts, Free Zone structures and construction claims across the UAE and wider GCC.",
    posted: "2026-01-22",
  },
  {
    id: "counsel-regulatory-dubai",
    title: "Counsel — Regulatory & Compliance",
    location: "UAE",
    city: "Dubai",
    practice: "Regulatory & Compliance",
    level: "Senior",
    type: "Full-Time",
    experience: "6+ years",
    summary:
      "Licensing, governance frameworks, compliance programmes and regulatory advisory for businesses operating in the region.",
    posted: "2026-01-15",
  },
  {
    id: "legal-tech-analyst",
    title: "Legal Technology & AI Analyst",
    location: "India",
    city: "Kolkata",
    practice: "Technology & AI",
    level: "Entry",
    type: "Full-Time",
    experience: "0–2 years",
    summary:
      "Supporting knowledge management, legal research tooling and the firm's adoption of technology across practice groups.",
    posted: "2026-02-18",
  },
  {
    id: "research-intern",
    title: "Research Intern — Legal Research & Publications",
    location: "India",
    city: "Kolkata",
    practice: "Corporate & Commercial",
    level: "Entry",
    type: "Internship",
    experience: "Law students",
    summary:
      "Legal and case-law research, contract analysis, due diligence support and contribution to the firm's Insights publications.",
    posted: "2026-02-20",
  },
  {
    id: "bd-manager-intl",
    title: "Business Development Manager — International",
    location: "International",
    city: "Remote / Hybrid",
    practice: "Business Operations",
    level: "Mid-level",
    type: "Full-Time",
    experience: "4–7 years",
    summary:
      "Developing the firm's international client relationships and supporting market-entry initiatives across key jurisdictions.",
    posted: "2026-01-30",
  },
];

export const CAREERS_FAQ = [
  {
    q: "Do you accept applications throughout the year?",
    a: "Applications may be submitted for advertised positions and, where appropriate, through our general expression-of-interest channel.",
  },
  {
    q: "Do you offer internships?",
    a: "Internship opportunities may be available depending on the firm's requirements and location.",
  },
  {
    q: "Can professionals apply from outside India?",
    a: "Yes. Certain positions and consulting opportunities may involve international or cross-border professionals, subject to role requirements and applicable laws and regulations.",
  },
  {
    q: "Do all roles require prior law-firm experience?",
    a: "No. Requirements vary by position. Certain business, technology, operations and specialist roles may value relevant industry experience rather than conventional law-firm experience.",
  },
  {
    q: "Can I submit a general application?",
    a: "Yes. Where no suitable vacancy is advertised, eligible professionals may submit their CV for future consideration.",
  },
  {
    q: "How will my application be handled?",
    a: "Applications are reviewed in accordance with the firm's recruitment processes, role requirements and applicable confidentiality and data-protection standards.",
  },
];

/* --------------------------- CONTACT --------------------------- */

export const PRACTICE_OPTIONS = [
  "Advisory",
  "Litigation",
  "Corporate",
  "Real Estate",
  "Construction",
  "Regulatory",
  "Dispute Resolution",
  "Cross-Border",
  "Other",
] as const;

export const CONTACT_DISCLAIMER =
  "Submission of an enquiry does not create a lawyer-client relationship. Confidential or privileged information should not be submitted until such relationship has been formally established.";

/* ----------------------------- FAQs ---------------------------- */

export type FaqGroup = { group: string; items: { q: string; a: string }[] };

export const FAQS: FaqGroup[] = [
  {
    group: "The Firm & Its Services",
    items: [
      {
        q: "What services does Kshetry & Co. provide?",
        a: "Kshetry & Co. provides legal and advisory services across litigation, dispute resolution, corporate and commercial matters, real estate and property, construction and procurement contracts, regulatory compliance, taxation-related legal matters, intellectual property, employment matters, arbitration, cross-border transactions and other specialised legal requirements.",
      },
      {
        q: "Which jurisdictions does Kshetry & Co. work across?",
        a: "The firm's practice is designed to support matters connected with India, the UAE, the UK, Thailand, the US and other international jurisdictions through its offices, consultants, professional networks and jurisdiction-specific advisers, as applicable.",
      },
      {
        q: "Can I contact the firm for a matter outside India?",
        a: "Yes. You may submit an international or cross-border enquiry through the Contact Us form. Your enquiry can be directed to the relevant jurisdictional or practice-area team.",
      },
      {
        q: "Can Kshetry & Co. assist businesses operating across multiple countries?",
        a: "The firm can assist with cross-border legal and commercial requirements, subject to the laws of the relevant jurisdictions and the involvement of appropriately qualified local counsel or advisers where required.",
      },
      {
        q: "Can the firm review international contracts?",
        a: "Yes. Contracts may be reviewed for commercial, legal, regulatory, risk-allocation, dispute-resolution, governing law, liability and related considerations, subject to the relevant jurisdiction and scope of engagement.",
      },
      {
        q: "Can the firm assist with company formation and regulatory matters?",
        a: "The firm may provide legal and regulatory assistance in connection with business structuring, incorporation-related matters, contracts, compliance and related advisory requirements, subject to the applicable jurisdiction.",
      },
    ],
  },
  {
    group: "Making an Enquiry",
    items: [
      {
        q: "How do I make a legal enquiry?",
        a: "You may use the online enquiry form or contact the relevant office or team through the details provided on the Contact page. Please provide sufficient information for the firm to understand the nature of your enquiry.",
      },
      {
        q: "Can I request a consultation before formally engaging the firm?",
        a: "You may request an initial consultation. Any consultation, engagement, scope of work and professional fee arrangement will be subject to the firm's applicable procedures and written confirmation.",
      },
      {
        q: "Does submitting the Contact Us form create an advocate-client relationship?",
        a: "No. Submission of an enquiry form, email or other communication does not by itself create an advocate-client, solicitor-client or other professional relationship. Such a relationship arises only upon formal acceptance and engagement, subject to applicable law and the firm's terms.",
      },
      {
        q: "Will my information remain confidential?",
        a: "The firm treats client and prospective client communications with appropriate confidentiality, subject to applicable law, professional obligations, conflicts requirements and other lawful disclosures.",
      },
      {
        q: "Will Kshetry & Co. automatically accept my matter?",
        a: "No. Every enquiry may be subject to an assessment of the nature of the matter, conflicts of interest, professional obligations, jurisdiction, availability and other applicable considerations.",
      },
      {
        q: "Does the firm provide advice based only on information submitted online?",
        a: "Online enquiries are generally used for preliminary assessment and routing. Formal legal advice may require documents, verification of facts, identification of the parties and a properly established professional engagement.",
      },
      {
        q: "Can I send confidential documents through the website enquiry form?",
        a: "Please provide only information reasonably necessary for the initial enquiry unless the firm has specifically instructed you to use a secure document-sharing channel. Sensitive or highly confidential documents should preferably be shared through an authorised secure communication method.",
      },
    ],
  },
  {
    group: "Fees & Engagement",
    items: [
      {
        q: "How are legal fees determined?",
        a: "Professional fees depend on factors such as the nature and complexity of the matter, seniority and expertise required, jurisdiction, urgency, volume of documentation, expected time commitment and scope of engagement. Applicable fees will be communicated separately.",
      },
      {
        q: "Does the firm offer fixed-fee legal services?",
        a: "Certain matters may be undertaken on a fixed-fee basis, while others may require hourly, stage-wise, retainer or other agreed fee structures, depending on the engagement.",
      },
      {
        q: "Is a consultation fee charged?",
        a: "Consultation fees, where applicable, depend on the nature of the consultation and the professional involved. The applicable fee should be confirmed before a consultation is scheduled.",
      },
    ],
  },
  {
    group: "Disputes & Urgent Matters",
    items: [
      {
        q: "Can I approach Kshetry & Co. regarding an ongoing dispute or litigation?",
        a: "Yes. You may submit details of an ongoing, anticipated or proposed dispute for preliminary assessment. The firm may request pleadings, notices, orders, correspondence and other relevant documents before determining the appropriate course of action.",
      },
      {
        q: "Does the firm handle arbitration and alternative dispute resolution?",
        a: "The firm may advise on arbitration, mediation, negotiation and other dispute-resolution mechanisms, subject to the nature of the matter and applicable jurisdiction.",
      },
      {
        q: "Can the firm take up urgent legal matters?",
        a: "Urgent matters may be considered depending on availability, jurisdiction, deadlines and professional obligations. Where a statutory or court deadline is approaching, clients should communicate the urgency clearly and provide the relevant documents immediately.",
      },
    ],
  },
  {
    group: "Careers & Collaboration",
    items: [
      {
        q: "How can I apply for a position at Kshetry & Co.?",
        a: "Employment, internship, consultancy and other professional opportunities may be submitted through the Careers channel or the designated HR contact published on the website.",
      },
      {
        q: "Does the firm accept applications from lawyers in different jurisdictions?",
        a: "Applications may be considered based on the requirements of the relevant role, jurisdiction, professional qualifications and applicable regulatory requirements.",
      },
      {
        q: "How can I contact Global HR?",
        a: "For recruitment, HR, professional engagement or related organisational enquiries, use the dedicated Global HR contact displayed on the Contact page.",
      },
      {
        q: "Can law firms, consultants or businesses collaborate with Kshetry & Co.?",
        a: "Professional collaboration proposals may be submitted through the Business Collaborations channel. All proposed collaborations remain subject to appropriate due diligence, conflicts checks, regulatory requirements and mutually agreed terms.",
      },
    ],
  },
  {
    group: "Website & Legal Information",
    items: [
      {
        q: "Does information on this website constitute legal advice?",
        a: "No. Website content is provided for general informational purposes and should not be treated as legal advice or as a substitute for advice on a specific matter.",
      },
      {
        q: "Can I rely on information published on the website for my particular case?",
        a: "No. Laws, regulations, procedures and their application vary according to jurisdiction and circumstances. Advice should be obtained from a suitably qualified professional after considering the facts and documents relevant to the matter.",
      },
      {
        q: "Does contacting the firm guarantee representation?",
        a: "No. Representation is subject to the firm's assessment, conflicts and compliance procedures, availability, applicable professional rules and execution of the appropriate engagement documentation.",
      },
    ],
  },
];

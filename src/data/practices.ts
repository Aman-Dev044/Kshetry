export type PracticeArea = {
  slug: string;
  index: string;
  title: string;
  /** One line for cards, navigation and meta descriptions. */
  summary: string;
  /** The firm's own detailed write-up. */
  detail: string;
  services: string[];
};

/**
 * The twelve principal practice areas, with the detailed write-ups the brief
 * places behind each click.
 */
export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: "corporate-commercial-advisory",
    index: "01",
    title: "Corporate & Commercial Advisory",
    summary:
      "Corporate structuring, commercial advisory, governance, business establishment and strategic legal counsel.",
    detail:
      "We advise businesses across the corporate lifecycle, from establishment and structuring to governance, commercial arrangements and strategic decision-making. Our counsel is designed to address both immediate legal requirements and the broader commercial implications of corporate actions.",
    services: [
      "Corporate Advisory",
      "Commercial Contracts",
      "Corporate Structuring",
      "Joint Ventures",
      "Shareholder Matters",
      "Business Establishment",
    ],
  },
  {
    slug: "cross-border-transactions-investments",
    index: "02",
    title: "Cross-Border Transactions & Investments",
    summary:
      "International investments, joint ventures, M&A, due diligence, transaction structuring and cross-border arrangements.",
    detail:
      "We assist clients with transactions involving multiple jurisdictions, including investments, joint ventures, acquisitions, strategic collaborations and international commercial arrangements. Our approach focuses on structuring transactions with careful consideration of legal, regulatory and commercial risks.",
    services: [
      "Mergers & Acquisitions",
      "Due Diligence",
      "Investment Transactions",
      "Transaction Structuring",
      "Negotiations",
      "Strategic Collaborations",
    ],
  },
  {
    slug: "real-estate-construction-infrastructure",
    index: "03",
    title: "Real Estate, Construction & Infrastructure",
    summary:
      "Property transactions, development, leasing, EPC, FIDIC, infrastructure projects and construction disputes.",
    detail:
      "Our practice covers the legal aspects of real estate development, acquisitions, disposals, leasing and development arrangements, together with construction and infrastructure projects. We advise on project documentation, contractual allocation of risk, EPC arrangements, FIDIC-based contracts and construction-related disputes.",
    services: [
      "Acquisition & Disposal",
      "Development & Leasing",
      "Real Estate Due Diligence",
      "EPC Contracts",
      "FIDIC",
      "Procurement",
      "Construction Claims",
      "DLD-related Advisory",
      "Free Zone Structures",
    ],
  },
  {
    slug: "contracts-commercial-agreements",
    index: "04",
    title: "Contracts & Commercial Agreements",
    summary:
      "Drafting, negotiation, review and risk management of domestic and international commercial contracts.",
    detail:
      "Contracts are central to every business relationship. We draft, review, negotiate and advise on commercial agreements with particular attention to obligations, liability, risk allocation, termination, dispute mechanisms and enforceability. Our objective is to create documentation that is precise, commercially workable and protective of our client's interests.",
    services: [
      "Drafting & Review",
      "Negotiation",
      "Risk Allocation",
      "Termination & Remedies",
      "Dispute Mechanisms",
      "Enforceability",
    ],
  },
  {
    slug: "litigation-arbitration-dispute-resolution",
    index: "05",
    title: "Litigation, Arbitration & Dispute Resolution",
    summary:
      "Civil and commercial litigation, arbitration, mediation, contractual disputes and cross-border dispute strategy.",
    detail:
      "We provide strategic legal assistance in civil, commercial and contractual disputes, including litigation and arbitration. Our work focuses on understanding the underlying commercial context, developing an appropriate legal strategy and assisting clients through each stage of the dispute resolution process.",
    services: [
      "Civil Litigation",
      "Commercial Disputes",
      "Criminal Matters",
      "Arbitration",
      "Mediation",
      "Regulatory Disputes",
    ],
  },
  {
    slug: "uae-gcc-business-advisory",
    index: "06",
    title: "UAE & GCC Business Advisory",
    summary:
      "Mainland and Free Zone structuring, corporate advisory, real estate, commercial contracts, regulatory matters and India–UAE business interests.",
    detail:
      "We support businesses and investors with legal considerations arising from their activities in the UAE and wider GCC region, including corporate structuring, commercial contracts, real estate matters, regulatory considerations and India–UAE business interests. Our approach combines an understanding of the commercial environment with careful attention to applicable local requirements.",
    services: [
      "Mainland & Free Zone Structuring",
      "Corporate Advisory",
      "Real Estate",
      "Commercial Contracts",
      "Regulatory Matters",
      "India–UAE Business Interests",
    ],
  },
  {
    slug: "regulatory-compliance-governance",
    index: "07",
    title: "Regulatory, Compliance & Corporate Governance",
    summary:
      "Regulatory advisory, licensing, compliance frameworks, corporate governance, investigations and legal risk management.",
    detail:
      "Effective governance requires more than formal compliance. We advise on regulatory obligations, corporate governance, internal legal processes, risk identification and compliance frameworks, helping organisations understand their responsibilities and manage legal exposure in a structured manner.",
    services: [
      "Corporate Governance",
      "Licensing",
      "Regulatory Compliance",
      "Investigations",
      "Risk Management",
      "Internal Legal Process",
    ],
  },
  {
    slug: "international-business-market-entry",
    index: "08",
    title: "International Business & Market Entry",
    summary:
      "Legal support for businesses entering or expanding across India, the UAE, the UK, the US and Thailand.",
    detail:
      "Businesses entering a new jurisdiction face questions of structure, regulation, contracts, licensing, local operations and risk. We provide legal support for international expansion and market-entry initiatives involving India, the UAE, the UK, the US, Thailand and other relevant markets, working within the applicable jurisdictional framework and through appropriate professional relationships.",
    services: [
      "Market Entry Structuring",
      "Licensing & Registration",
      "Local Operations",
      "Documentation",
      "Regulatory Considerations",
    ],
  },
  {
    slug: "employment-immigration-mobility",
    index: "09",
    title: "Employment, Immigration & International Mobility",
    summary:
      "Employment advisory, executive arrangements, immigration-related matters, expatriate mobility and international workforce considerations.",
    detail:
      "We advise employers, executives, professionals and businesses on employment documentation, executive arrangements, workforce-related legal matters and immigration-linked considerations. For internationally mobile individuals and organisations, we take into account the contractual and regulatory dimensions associated with cross-border movement.",
    services: [
      "Employment Documentation",
      "Executive Arrangements",
      "Workforce Matters",
      "Immigration-linked Advisory",
      "Expatriate Mobility",
    ],
  },
  {
    slug: "ip-technology-cyber-law",
    index: "10",
    title: "Intellectual Property, Technology & Cyber Law",
    summary:
      "IP protection, licensing, technology contracts, digital businesses, data-related matters and cyber-law advisory.",
    detail:
      "Innovation, brands and digital operations require thoughtful legal protection. Our practice encompasses intellectual property, licensing, technology agreements, digital business arrangements, cyber-related legal issues and legal risk associated with the use and protection of information and technology.",
    services: [
      "IP Protection",
      "Brand Protection",
      "Licensing",
      "Technology Contracts",
      "Data & Privacy Advisory",
      "Cyber Matters",
    ],
  },
  {
    slug: "tax-financial-regulatory-advisory",
    index: "11",
    title: "Tax, Financial & Regulatory Advisory",
    summary:
      "Tax-related legal advisory, financial transactions, regulatory considerations and structuring, coordinated with relevant professionals.",
    detail:
      "We advise on the legal dimensions of taxation, financial arrangements and regulatory considerations affecting commercial transactions and business structures. Where specialist accounting, tax or financial expertise is required, legal advice may be coordinated with relevant professionals to provide a more integrated perspective.",
    services: [
      "Tax-related Legal Advisory",
      "Financial Transactions",
      "Structuring",
      "Regulatory Considerations",
      "Coordinated Professional Advice",
    ],
  },
  {
    slug: "private-client-nri-family-business",
    index: "12",
    title: "Private Client, NRI & Family Business Advisory",
    summary:
      "Cross-border private wealth, property, succession, NRI matters, family businesses and strategic private-client advisory.",
    detail:
      "We advise private clients, entrepreneurs, NRI families and closely held businesses on legal matters involving property, investments, succession, family enterprises and cross-border interests. Our approach combines discretion, careful legal analysis and an understanding of the personal and commercial considerations underlying each matter.",
    services: [
      "Private Client Matters",
      "NRI Advisory",
      "Property",
      "Succession-related Matters",
      "Family Enterprises",
      "Cross-border Interests",
    ],
  },
];

export const PRACTICE_CLOSING = {
  title: "Legal Challenges Require More Than Legal Answers.",
  copy: "At Kshetry & Co., we seek to understand the law, the transaction, the business and the objective behind the matter — so that our advice is not merely legally sound, but practical, considered and capable of being implemented.",
};

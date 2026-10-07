/**
 * Office contact details.
 *
 * The specification leaves the real addresses, numbers and inboxes as
 * placeholders ("[common HR email]", "[telephone]"). Anything not yet supplied
 * by the firm is left `null` here rather than invented — the UI hides empty
 * rows, and the structured data omits unverified addresses and phone numbers,
 * which is what keeps the local-SEO signal clean.
 */
export type OfficeContact = {
  id: string;
  country: string;
  city: string;
  kind: "office" | "network";
  /** Street address, once the firm supplies it. */
  address: string[] | null;
  phone: string | null;
  generalEmail: string | null;
  hours: string | null;
  /** Google Business Profile link, per the brief. */
  gbp: string | null;
};

export const OFFICES: OfficeContact[] = [
  {
    id: "in",
    country: "India",
    city: "Kolkata",
    kind: "office",
    address: null,
    phone: null,
    generalEmail: null,
    hours: "Monday – Saturday, 10:00 – 19:00 IST",
    gbp: null,
  },
  {
    id: "ae",
    country: "United Arab Emirates",
    city: "Dubai",
    kind: "office",
    address: null,
    phone: null,
    generalEmail: null,
    hours: "Monday – Friday, 09:00 – 18:00 GST",
    gbp: null,
  },
  {
    id: "uk",
    country: "United Kingdom",
    city: "London",
    kind: "network",
    address: null,
    phone: null,
    generalEmail: null,
    hours: "By appointment",
    gbp: null,
  },
  {
    id: "us",
    country: "United States",
    city: "New York",
    kind: "network",
    address: null,
    phone: null,
    generalEmail: null,
    hours: "By appointment",
    gbp: null,
  },
  {
    id: "th",
    country: "Thailand",
    city: "Bangkok",
    kind: "network",
    address: null,
    phone: null,
    generalEmail: null,
    hours: "By appointment",
    gbp: null,
  },
];

/** Firm-wide enquiry routes, shown alongside whichever office is selected. */
export const CONTACT_CHANNELS = [
  { label: "Legal Enquiries", value: null as string | null, note: "New matters and client enquiries" },
  { label: "Global HR", value: null as string | null, note: "Recruitment and professional engagement" },
  { label: "Business Collaborations", value: null as string | null, note: "Firms, consultants and partners" },
  { label: "Media & Publications", value: null as string | null, note: "Press and editorial requests" },
];

/** Social profiles, used for schema.org `sameAs` once supplied. */
export const SOCIAL_PROFILES: string[] = [];

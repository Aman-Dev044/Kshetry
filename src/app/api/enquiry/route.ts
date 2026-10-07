import { NextResponse } from "next/server";

type Payload = Record<string, unknown>;

const KINDS = new Set(["enquiry", "application", "newsletter"]);
const MAX_FIELD = 5000;

function str(value: unknown, max = 300) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Receives the site's three forms and forwards them to whatever the firm
 * nominates — ENQUIRY_WEBHOOK_URL accepts a Formspree, Zapier, Make or n8n
 * endpoint, or an internal CRM. Until one is configured the route reports
 * honestly that delivery is unavailable rather than pretending to succeed.
 */
export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed request." }, { status: 400 });
  }

  // Honeypot: real people leave this hidden field empty.
  if (str(body.company_website)) {
    return NextResponse.json({ ok: true, delivered: true });
  }

  const kind = str(body.kind, 32);
  if (!KINDS.has(kind)) {
    return NextResponse.json({ ok: false, error: "Unknown form." }, { status: 400 });
  }

  const email = str(body.email, 320).toLowerCase();
  if (!EMAIL.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 422 });
  }

  if (kind !== "newsletter" && !str(body.name)) {
    return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 422 });
  }

  const endpoint = process.env.ENQUIRY_WEBHOOK_URL;
  if (!endpoint) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        error: "Online submission is not yet connected. Please contact the firm directly in the meantime.",
      },
      { status: 503 },
    );
  }

  const payload = {
    kind,
    receivedAt: new Date().toISOString(),
    source: request.headers.get("referer") ?? "website",
    fields: Object.fromEntries(
      Object.entries(body)
        .filter(([key]) => key !== "company_website")
        .map(([key, value]) => [key, str(value, MAX_FIELD)]),
    ),
  };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return NextResponse.json({ ok: false, error: "We could not deliver your message. Please try again." }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ ok: false, error: "We could not deliver your message. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}

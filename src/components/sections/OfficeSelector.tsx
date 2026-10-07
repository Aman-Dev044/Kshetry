"use client";

import { useState } from "react";
import { CONTACT_CHANNELS, OFFICES } from "@/data/contact";

/**
 * One panel, many offices — the brief's answer to dumping every address on
 * the page. Details the firm has not yet supplied are shown as pending rather
 * than invented.
 */
export default function OfficeSelector() {
  const [activeId, setActiveId] = useState(OFFICES[0].id);
  const office = OFFICES.find((o) => o.id === activeId) ?? OFFICES[0];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-4">
        <h3 className="eyebrow text-gold">Select Location</h3>
        <ul className="mt-6 border-t border-line">
          {OFFICES.map((o) => {
            const on = o.id === activeId;
            return (
              <li key={o.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(o.id)}
                  aria-pressed={on}
                  className="group flex w-full items-center gap-4 border-b border-line py-4 text-left"
                >
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rotate-45 transition-all duration-500 ${
                      on ? "scale-125 bg-burgundy" : "bg-gold/40"
                    }`}
                  />
                  <span
                    className={`eyebrow transition-colors duration-400 ${
                      on ? "text-burgundy" : "text-charcoal-muted group-hover:text-burgundy"
                    }`}
                  >
                    {o.country}
                  </span>
                  <span className="ml-auto text-[0.625rem] uppercase tracking-[0.16em] text-charcoal-muted/60">
                    {o.city}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="lg:col-span-7 lg:col-start-6">
        <div key={office.id} style={{ animation: "rise .6s var(--ease-editorial) both" }}>
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <h3 className="display display-md text-burgundy-deep">{office.country}</h3>
            <span className="eyebrow border border-line px-3 py-1 text-[0.5625rem] text-charcoal-muted">
              {office.kind === "office" ? "Office" : "Network Location"}
            </span>
          </div>

          <dl className="mt-9 border-t border-line">
            <Row label="City">{office.city}</Row>
            <Row label="Address">{office.address ? office.address.join(", ") : null}</Row>
            <Row label="Telephone">
              {office.phone ? (
                <a href={`tel:${office.phone.replace(/\s+/g, "")}`} className="hover:text-burgundy">
                  {office.phone}
                </a>
              ) : null}
            </Row>
            <Row label="General Enquiries">
              {office.generalEmail ? (
                <a href={`mailto:${office.generalEmail}`} className="hover:text-burgundy">
                  {office.generalEmail}
                </a>
              ) : null}
            </Row>
            <Row label="Office Hours">{office.hours}</Row>
            <Row label="Google Business Profile">
              {office.gbp ? (
                <a href={office.gbp} rel="noopener noreferrer" target="_blank" className="hover:text-burgundy">
                  View on Google Maps
                </a>
              ) : null}
            </Row>
          </dl>

          <h3 className="eyebrow mt-12 text-gold">Firm-wide Channels</h3>
          <dl className="mt-6 grid gap-px bg-line sm:grid-cols-2">
            {CONTACT_CHANNELS.map((channel) => (
              <div key={channel.label} className="bg-white p-5">
                <dt className="eyebrow text-[0.5625rem] text-burgundy">{channel.label}</dt>
                <dd className="mt-2 text-[0.875rem] text-charcoal/80">
                  {channel.value ? (
                    <a href={`mailto:${channel.value}`} className="hover:text-burgundy">
                      {channel.value}
                    </a>
                  ) : (
                    <span className="text-charcoal-muted/70">To be published</span>
                  )}
                </dd>
                <dd className="mt-1 text-[0.75rem] text-charcoal-muted">{channel.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 border-b border-line py-4 sm:flex-row sm:items-baseline sm:gap-8">
      <dt className="eyebrow w-52 shrink-0 text-[0.5625rem] text-charcoal-muted">{label}</dt>
      <dd className="text-[0.9375rem] text-charcoal/85 transition-colors duration-400">
        {children ?? <span className="text-charcoal-muted/60">To be published</span>}
      </dd>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { JOB_LEVELS, JOB_LOCATIONS, JOB_PRACTICES, VACANCIES } from "@/data/pages";

/** Dynamic vacancy list. All roles stay in the DOM so crawlers see every posting. */
export default function JobBoard() {
  const [location, setLocation] = useState<string>("All Locations");
  const [practice, setPractice] = useState<string>("All Practices");
  const [level, setLevel] = useState<string>("All Levels");

  const matches = useMemo(
    () =>
      new Set(
        VACANCIES.filter(
          (v) =>
            (location === "All Locations" || v.location === location) &&
            (practice === "All Practices" || v.practice === practice) &&
            (level === "All Levels" || v.level === level),
        ).map((v) => v.id),
      ),
    [location, practice, level],
  );

  return (
    <div>
      <div className="grid gap-7 border-b border-line pb-9 lg:grid-cols-3">
        <Select label="Location" id="job-location" options={JOB_LOCATIONS} value={location} onChange={setLocation} />
        <Select label="Practice / Function" id="job-practice" options={JOB_PRACTICES} value={practice} onChange={setPractice} />
        <Select label="Experience" id="job-level" options={JOB_LEVELS} value={level} onChange={setLevel} />
      </div>

      <p aria-live="polite" className="eyebrow mt-7 text-charcoal-muted">
        {matches.size} {matches.size === 1 ? "Opening" : "Openings"}
      </p>

      {matches.size === 0 && (
        <div className="mt-8 border border-line bg-white p-10 text-center">
          <p className="display display-sm text-burgundy-deep">No current openings match your selection.</p>
          <p className="body-copy mx-auto mt-3 max-w-md text-[0.9375rem]">
            Not every opportunity begins with a published vacancy. We welcome applications from professionals whose
            experience may be relevant to the firm&rsquo;s future requirements.
          </p>
          <Link
            href="#apply"
            className="eyebrow mt-7 inline-block bg-burgundy px-7 py-3.5 text-ivory transition-colors duration-500 hover:bg-burgundy-deep"
          >
            Submit a General Application
          </Link>
        </div>
      )}

      <ul className="mt-4 border-t border-line">
        {VACANCIES.map((job) => (
          <li key={job.id} id={job.id} hidden={!matches.has(job.id)} className="scroll-mt-[calc(var(--nav-h)+2rem)]">
            <article className="group grid gap-5 border-b border-line py-7 lg:grid-cols-12 lg:items-center lg:gap-8">
              <div className="lg:col-span-5">
                <h3 className="display text-[1.3125rem] leading-snug text-burgundy-deep transition-colors duration-500 group-hover:text-burgundy">
                  {job.title}
                </h3>
                <p className="body-copy mt-2 text-[0.875rem] leading-relaxed lg:pr-8">{job.summary}</p>
              </div>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-3 lg:col-span-5 lg:grid-cols-4">
                <Meta label="Location">{job.city}</Meta>
                <Meta label="Practice">{job.practice}</Meta>
                <Meta label="Experience">{job.experience}</Meta>
                <Meta label="Type">{job.type}</Meta>
              </dl>

              <div className="lg:col-span-2 lg:text-right">
                <Link
                  href="#apply"
                  className="eyebrow inline-flex items-center gap-2.5 border border-burgundy/25 px-5 py-3 text-[0.5625rem] text-burgundy transition-colors duration-500 hover:bg-burgundy hover:text-ivory"
                >
                  View Position
                  <svg width="13" height="7" viewBox="0 0 13 7" fill="none" aria-hidden>
                    <path d="M0 3.5h11M8 .7 11 3.5 8 6.3" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Meta({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="eyebrow text-[0.5rem] text-charcoal-muted/70">{label}</dt>
      <dd className="mt-1 text-[0.8125rem] text-charcoal/80">{children}</dd>
    </div>
  );
}

function Select({
  label,
  id,
  options,
  value,
  onChange,
}: {
  label: string;
  id: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="eyebrow text-[0.5625rem] text-gold">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-line bg-white px-4 py-3.5 text-[0.9375rem] text-charcoal outline-none transition-colors duration-400 hover:border-gold focus:border-burgundy"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

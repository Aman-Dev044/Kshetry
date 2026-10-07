"use client";

import { useMemo, useState } from "react";
import ArrowLink from "@/components/ui/ArrowLink";
import { ARTICLES, INSIGHT_CATEGORIES, INSIGHT_JURISDICTIONS } from "@/data/pages";

const YEARS = ["All Years", ...Array.from(new Set(ARTICLES.map((a) => a.year))).sort().reverse()];

/** Filter chips plus the article grid. Every article stays in the DOM for crawlers. */
export default function InsightsExplorer() {
  const [category, setCategory] = useState<string>("All Insights");
  const [jurisdiction, setJurisdiction] = useState<string>("All");
  const [year, setYear] = useState<string>("All Years");

  const matches = useMemo(
    () =>
      new Set(
        ARTICLES.filter(
          (a) =>
            (category === "All Insights" || a.category === category) &&
            (jurisdiction === "All" || a.jurisdiction === jurisdiction) &&
            (year === "All Years" || a.year === year),
        ).map((a) => a.slug),
      ),
    [category, jurisdiction, year],
  );

  const reset = () => {
    setCategory("All Insights");
    setJurisdiction("All");
    setYear("All Years");
  };

  return (
    <div>
      <div className="flex flex-col gap-7 border-b border-line pb-9">
        <Filters label="Practice Area" options={INSIGHT_CATEGORIES} value={category} onChange={setCategory} />
        <div className="grid gap-7 sm:grid-cols-2">
          <Filters label="Jurisdiction" options={INSIGHT_JURISDICTIONS} value={jurisdiction} onChange={setJurisdiction} />
          <Filters label="Year" options={YEARS} value={year} onChange={setYear} />
        </div>
      </div>

      <p aria-live="polite" className="eyebrow mt-7 text-charcoal-muted">
        {matches.size} {matches.size === 1 ? "Insight" : "Insights"}
      </p>

      {matches.size === 0 && (
        <div className="mt-10 border border-line bg-ivory p-10 text-center">
          <p className="display display-sm text-burgundy-deep">No insights match your selection.</p>
          <p className="body-copy mx-auto mt-3 max-w-md text-[0.9375rem]">
            Try widening the practice area, jurisdiction or year — or browse everything we have published.
          </p>
          <button
            type="button"
            onClick={reset}
            className="eyebrow mt-7 border border-burgundy/25 px-6 py-3 text-burgundy transition-colors duration-500 hover:bg-burgundy hover:text-ivory"
          >
            Clear Filters
          </button>
        </div>
      )}

      <div className="mt-6 grid gap-x-10 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.map((article) => {
          const shown = matches.has(article.slug);
          return (
            <article
              key={article.slug}
              id={article.slug}
              hidden={!shown}
              className="group scroll-mt-[calc(var(--nav-h)+2rem)] border-b border-line py-8"
            >
              <div className="flex items-center gap-3">
                <span className="eyebrow text-[0.625rem] text-gold">{article.index}</span>
                <span className="eyebrow text-[0.625rem] text-charcoal-muted">{article.category}</span>
              </div>

              <h3 className="display mt-4 text-[1.3125rem] leading-snug text-burgundy-deep transition-colors duration-500 group-hover:text-burgundy">
                {article.title}
              </h3>
              <p className="body-copy mt-3 text-[0.875rem] leading-relaxed">{article.excerpt}</p>

              <dl className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.625rem] uppercase tracking-[0.16em] text-charcoal-muted/80">
                <div className="flex gap-1.5">
                  <dt className="sr-only">Jurisdiction</dt>
                  <dd>{article.jurisdiction}</dd>
                </div>
                <span aria-hidden className="h-1 w-1 rotate-45 bg-gold/70" />
                <div className="flex gap-1.5">
                  <dt className="sr-only">Published</dt>
                  <dd>{article.year}</dd>
                </div>
                <span aria-hidden className="h-1 w-1 rotate-45 bg-gold/70" />
                <div className="flex gap-1.5">
                  <dt className="sr-only">Reading time</dt>
                  <dd>{article.readingTime}</dd>
                </div>
              </dl>

              <div className="mt-6">
                <ArrowLink href="/insights">Read Article</ArrowLink>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function Filters({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="eyebrow text-gold">{label}</legend>
      <div className="mt-4 flex flex-wrap gap-2">
        {options.map((option) => {
          const on = value === option;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(option)}
              className={`eyebrow border px-4 py-2.5 text-[0.5625rem] transition-colors duration-400 ${
                on
                  ? "border-burgundy bg-burgundy text-ivory"
                  : "border-line text-charcoal-muted hover:border-gold hover:text-burgundy"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

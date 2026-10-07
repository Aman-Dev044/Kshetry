import type { ReactNode } from "react";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

type Props = {
  eyebrow: string;
  /** The page's single H1. */
  title: ReactNode;
  lede?: ReactNode;
  trail: Crumb[];
  tone?: "light" | "dark";
  children?: ReactNode;
};

/**
 * The editorial page opener used by every inner page: breadcrumb, eyebrow,
 * one H1, and an optional lede. Keeps heading order consistent site-wide.
 */
export default function PageHero({ eyebrow, title, lede, trail, tone = "light", children }: Props) {
  const dark = tone === "dark";

  return (
    <header
      data-hero={dark ? "dark" : "light"}
      className={`relative overflow-hidden ${dark ? "bg-burgundy-deep text-ivory" : "bg-ivory"}`}
      style={{ paddingTop: "calc(var(--nav-h) + 3.5rem)" }}
    >
      {dark && (
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(90% 80% at 80% 10%, rgba(111,16,40,.6) 0%, rgba(59,7,24,0) 65%), linear-gradient(180deg, #3b0718 0%, #2d0512 100%)",
          }}
        />
      )}

      <div className="shell relative pb-16 lg:pb-20">
        <Breadcrumbs trail={trail} tone={dark ? "light" : "dark"} />

        <p
          className={`eyebrow mt-9 flex items-center gap-4 ${dark ? "text-gold" : "text-burgundy"}`}
          style={{ animation: "rise .9s var(--ease-editorial) .05s both" }}
        >
          <span className="h-px w-10 bg-gold" />
          {eyebrow}
        </p>

        <h1
          className={`display display-xl mt-7 max-w-5xl ${dark ? "text-ivory" : "text-burgundy-deep"}`}
          style={{ animation: "rise 1.1s var(--ease-editorial) .16s both" }}
        >
          {title}
        </h1>

        {lede && (
          <p
            className={`lede mt-8 max-w-3xl ${dark ? "text-gold-light/75" : ""}`}
            style={{ animation: "rise 1.1s var(--ease-editorial) .28s both" }}
          >
            {lede}
          </p>
        )}

        {children && <div className="mt-10">{children}</div>}
      </div>
    </header>
  );
}

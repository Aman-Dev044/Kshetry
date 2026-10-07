import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  tone?: "burgundy" | "light";
  className?: string;
};

/** Text link with the expanding champagne rule and travelling arrow. */
export default function ArrowLink({ href, children, tone = "burgundy", className }: Props) {
  return (
    <Link
      href={href}
      className={`link-arrow ${tone === "light" ? "text-gold-light hover:text-gold" : "hover:text-burgundy-deep"} ${
        className ?? ""
      }`}
    >
      {children}
      <svg width="15" height="8" viewBox="0 0 15 8" fill="none" aria-hidden className="arrow">
        <path d="M0 4h13M9.6 .8 13 4 9.6 7.2" stroke="currentColor" strokeWidth="1" />
      </svg>
    </Link>
  );
}

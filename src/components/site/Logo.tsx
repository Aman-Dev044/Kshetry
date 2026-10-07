import Link from "next/link";

type Props = {
  /** `nav` follows the bar's ink tokens, which flip over dark heroes. */
  tone?: "burgundy" | "light" | "nav";
  compact?: boolean;
  className?: string;
};

/**
 * The firm wordmark: serif name over a champagne rule, with the discipline
 * line beneath. Kept as live type so it stays crisp at every size.
 */
export default function Logo({ tone = "burgundy", compact = false, className }: Props) {
  const ink =
    tone === "light" ? "text-ivory" : tone === "nav" ? "text-[var(--nav-ink-strong)]" : "text-burgundy";
  const sub =
    tone === "light" ? "text-gold-light/70" : tone === "nav" ? "text-[var(--nav-ink)]" : "text-charcoal-muted";

  return (
    <Link href="/" className={`group inline-flex flex-col leading-none ${className ?? ""}`} aria-label="Kshetry & Co. — home">
      <span
        className={`display ${ink} transition-colors duration-500`}
        style={{
          fontSize: compact ? "1.25rem" : "clamp(1.3rem, 1.7vw, 1.65rem)",
          letterSpacing: "0.05em",
          fontWeight: 400,
        }}
      >
        KSHETRY <span className="text-gold">&</span> CO.
      </span>
      <span className="mt-1.5 flex items-center gap-2">
        <span className="h-px w-5 origin-left bg-gold transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-x-[1.8]" />
        <span className={`eyebrow ${sub} text-[0.5625rem] transition-colors duration-500`}>Law Firm</span>
      </span>
    </Link>
  );
}

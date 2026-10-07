type Props = {
  items: readonly string[];
  className?: string;
  durationSeconds?: number;
};

/**
 * Jurisdiction marquee. CSS-only, translating a duplicated track by -50% —
 * one compositor-driven transform, no JS on scroll.
 */
export default function Marquee({ items, className, durationSeconds = 48 }: Props) {
  const track = [...items, ...items];
  return (
    <div
      className={`group relative flex overflow-hidden ${className ?? ""}`}
      style={{
        maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div
        className="flex shrink-0 items-center will-change-transform"
        style={{ animation: `marquee ${durationSeconds}s linear infinite` }}
      >
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className="flex shrink-0 items-center">
            <span className="eyebrow px-8 text-charcoal-muted">{item}</span>
            <span aria-hidden className="h-1 w-1 rotate-45 bg-gold/70" />
          </span>
        ))}
      </div>
    </div>
  );
}

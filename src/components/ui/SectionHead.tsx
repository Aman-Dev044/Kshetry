import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  copy?: ReactNode;
  align?: "start" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionHead({
  eyebrow,
  title,
  copy,
  align = "start",
  tone = "dark",
  className,
}: Props) {
  const light = tone === "light";
  return (
    <div
      className={`flex max-w-3xl flex-col gap-6 ${align === "center" ? "mx-auto items-center text-center" : ""} ${
        className ?? ""
      }`}
    >
      <Reveal className="flex items-center gap-4">
        <span className={`h-px w-10 ${light ? "bg-gold" : "bg-gold"}`} />
        <span className={`eyebrow ${light ? "text-gold" : "text-burgundy"}`}>{eyebrow}</span>
      </Reveal>

      <Reveal delay={80}>
        <h2 className={`display display-lg ${light ? "text-ivory" : "text-burgundy-deep"}`}>{title}</h2>
      </Reveal>

      {copy && (
        <Reveal delay={160}>
          <div className={`lede ${light ? "text-gold-light/80" : ""}`}>{copy}</div>
        </Reveal>
      )}
    </div>
  );
}

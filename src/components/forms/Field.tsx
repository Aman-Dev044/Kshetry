import type { ReactNode } from "react";

type Tone = "light" | "dark";

const toneClasses = {
  light: {
    label: "text-charcoal-muted",
    control:
      "border-line bg-white text-charcoal placeholder:text-charcoal-muted/50 hover:border-gold focus:border-burgundy",
  },
  dark: {
    label: "text-gold/75",
    control:
      "border-gold/30 bg-transparent text-ivory placeholder:text-gold-light/35 hover:border-gold/60 focus:border-gold",
  },
} as const;

export const controlBase =
  "w-full border px-4 py-3.5 text-[0.9375rem] outline-none transition-colors duration-400 focus:outline-none";

export function Field({
  label,
  htmlFor,
  required,
  hint,
  tone = "light",
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  tone?: Tone;
  children: ReactNode;
}) {
  const t = toneClasses[tone];
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className={`eyebrow text-[0.5625rem] ${t.label}`}>
        {label}
        {required && (
          <>
            {" "}
            <span aria-hidden className="text-gold">
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        )}
      </label>
      {children}
      {hint && <p className={`text-[0.75rem] ${tone === "dark" ? "text-gold-light/50" : "text-charcoal-muted"}`}>{hint}</p>}
    </div>
  );
}

export function controlClass(tone: Tone = "light") {
  return `${controlBase} ${toneClasses[tone].control}`;
}

/** Hidden honeypot. Bots fill it; the API silently discards those submissions. */
export function Honeypot() {
  return (
    <div aria-hidden className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
      <label htmlFor="company_website">Company website</label>
      <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

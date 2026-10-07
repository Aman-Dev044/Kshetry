import type { Metadata } from "next";
import ArrowLink from "@/components/ui/ArrowLink";
import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import WorldMap from "@/components/map/WorldMap";
import { JURISDICTIONS } from "@/data/site";

export const metadata: Metadata = {
  title: "Design System",
  description: "The brand colour system, typography, components and motion language for Kshetry & Co.",
  robots: { index: false, follow: false },
};

const COLOURS = [
  { name: "Deep Burgundy", hex: "#6F1028", token: "burgundy", use: "Logo · headings · CTAs · active navigation" },
  { name: "Dark Burgundy", hex: "#3B0718", token: "burgundy-deep", use: "Footer · dark hero · premium sections" },
  { name: "Champagne Gold", hex: "#C8A15A", token: "gold", use: "Dividers · icons · arrows · hover · map lines" },
  { name: "Light Champagne", hex: "#E8D5AF", token: "gold-light", use: "Backgrounds · map illumination · decoration" },
  { name: "Ivory", hex: "#F8F5EF", token: "ivory", use: "Primary light background" },
  { name: "Pure White", hex: "#FFFFFF", token: "white", use: "Content sections · contrast · clean spacing" },
  { name: "Charcoal", hex: "#242124", token: "charcoal", use: "Main body text" },
];

const SCALE = [
  { label: "Display XL", cls: "display display-xl", note: "clamp(2.75rem → 6.25rem) · Hero H1" },
  { label: "Display LG", cls: "display display-lg", note: "clamp(2.25rem → 4.25rem) · Section headings" },
  { label: "Display MD", cls: "display display-md", note: "clamp(1.75rem → 2.75rem) · Practice titles" },
  { label: "Display SM", cls: "display display-sm", note: "clamp(1.375rem → 1.875rem) · Card headings" },
];

const MOTION = [
  { name: "Fade-in headings", detail: "Opacity + 20px lift, 1.1s, revealed once via IntersectionObserver." },
  { name: "Letter-spacing", detail: "Active map labels open from 0.22em to 0.30em over 500ms." },
  { name: "Gold line expansion", detail: "scaleX(0.28) → scaleX(1) on hover, 550ms editorial easing." },
  { name: "Arrow movement", detail: "translateX(0.3rem) on hover, 450ms." },
  { name: "Map illumination", detail: "Radial champagne wash composited onto the dot matrix." },
  { name: "Travelling arrows", detail: "Relayed comet dashes — one leg at a time across a 12s cycle." },
  { name: "Number counters", detail: "Cubic ease-out over 1.6s, triggered at 40% visibility." },
  { name: "Jurisdiction marquee", detail: "Single compositor transform, 48s loop, no scroll listener." },
];

function Row({ title, children, id }: { title: string; id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-line py-16 lg:py-20">
      <div className="shell">
        <Reveal className="flex items-center gap-4">
          <span className="h-px w-10 bg-gold" />
          <h2 className="eyebrow text-burgundy">{title}</h2>
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <>
      <header className="bg-ivory" style={{ paddingTop: "calc(var(--nav-h) + 4rem)" }}>
        <div className="shell pb-16">
          <p className="eyebrow flex items-center gap-4 text-burgundy">
            <span className="h-px w-10 bg-gold" />
            Design System · v1.0
          </p>
          <h1 className="display display-xl mt-7 text-burgundy-deep">
            The visual
            <span className="block text-burgundy">language.</span>
          </h1>
          <p className="lede mt-7 max-w-2xl">
            Sophisticated, international, editorial and discreet. Deep burgundy and champagne gold on ivory, refined
            serif display type over restrained sans-serif support, and motion that communicates connectivity rather
            than decoration.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {["Sophisticated", "International", "Premium", "Editorial", "Discreet", "Authoritative"].map((word) => (
              <span key={word} className="eyebrow border border-gold/40 px-4 py-2 text-charcoal-muted">
                {word}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ---------- Colour ---------- */}
      <Row id="colour" title="01 — Brand Colour System">
        <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {COLOURS.map((c, i) => (
            <Reveal key={c.hex} delay={i * 50} className="bg-white">
              {/* Inset ring keeps ivory and white readable against the card */}
              <div
                className="h-28 w-full border-b border-line"
                style={{ backgroundColor: c.hex, boxShadow: "inset 0 0 0 1px rgb(36 33 36 / 0.08)" }}
              />
              <div className="p-5">
                <h3 className="eyebrow text-burgundy">{c.name}</h3>
                <p className="mt-2 font-mono text-[0.75rem] tracking-wider text-charcoal-muted">{c.hex}</p>
                <p className="mt-1 font-mono text-[0.6875rem] text-gold">--color-{c.token}</p>
                <p className="body-copy mt-3 text-[0.8125rem] leading-relaxed">{c.use}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="body-copy mt-6 max-w-2xl text-[0.875rem]">
          Gold is an accent, never a dominant colour. Burgundy carries hierarchy; ivory and white carry space.
        </p>
      </Row>

      {/* ---------- Typography ---------- */}
      <Row id="type" title="02 — Typography">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="border-t border-line pt-6">
              <p className="eyebrow text-gold">Display / Editorial</p>
              <p className="display mt-3 text-[2.5rem] leading-none text-burgundy-deep">Cormorant Garamond</p>
              <p className="body-copy mt-3 text-[0.875rem]">H1, major headings, quotes, editorial headlines.</p>
            </div>
            <div className="mt-10 border-t border-line pt-6">
              <p className="eyebrow text-gold">Functional</p>
              <p className="mt-3 text-[1.75rem] font-medium leading-none text-burgundy-deep">Manrope</p>
              <p className="body-copy mt-3 text-[0.875rem]">
                Navigation, body text, buttons, labels, forms, metadata.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            {SCALE.map((s, i) => (
              <Reveal key={s.label} delay={i * 60} className="border-t border-line py-7 first:border-t-0 first:pt-0">
                <div className="flex items-baseline justify-between gap-6">
                  <span className="eyebrow text-[0.625rem] text-gold">{s.label}</span>
                  <span className="text-[0.6875rem] tracking-[0.1em] text-charcoal-muted">{s.note}</span>
                </div>
                <p className={`${s.cls} mt-3 text-burgundy-deep`}>Beyond Borders.</p>
              </Reveal>
            ))}

            <div className="border-t border-line py-7">
              <div className="flex items-baseline justify-between gap-6">
                <span className="eyebrow text-[0.625rem] text-gold">Lede</span>
                <span className="text-[0.6875rem] tracking-[0.1em] text-charcoal-muted">1.0625 → 1.1875rem</span>
              </div>
              <p className="lede mt-3">
                Kshetry &amp; Co. provides legal, transactional and strategic advisory services across jurisdictions,
                industries and commercial environments.
              </p>
            </div>

            <div className="border-t border-line py-7">
              <div className="flex items-baseline justify-between gap-6">
                <span className="eyebrow text-[0.625rem] text-gold">Eyebrow</span>
                <span className="text-[0.6875rem] tracking-[0.1em] text-charcoal-muted">0.6875rem · 0.22em</span>
              </div>
              <p className="eyebrow mt-3 text-burgundy">Legal Solutions Beyond Borders</p>
            </div>
          </div>
        </div>
      </Row>

      {/* ---------- Components ---------- */}
      <Row id="components" title="03 — Components">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <p className="eyebrow text-gold">Buttons</p>
            <div className="mt-6 flex flex-col items-start gap-4">
              <Button href="#components">Primary</Button>
              <Button href="#components" variant="outline">
                Secondary
              </Button>
              <Button href="#components" size="sm" withArrow={false}>
                Compact
              </Button>
            </div>
            <div className="mt-6 bg-burgundy-deep p-7">
              <Button href="#components" variant="light">
                On Dark
              </Button>
            </div>
          </div>

          <div>
            <p className="eyebrow text-gold">Links &amp; rules</p>
            <div className="mt-6 flex flex-col items-start gap-6">
              <ArrowLink href="#components">Discover the Firm</ArrowLink>
              <ArrowLink href="#components">View All Practice Areas</ArrowLink>
              <div className="w-full">
                <p className="eyebrow mb-3 text-charcoal-muted">Champagne divider</p>
                <div className="rule" />
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow text-gold">Jurisdiction marquee</p>
            <div className="mt-6 border-y border-line py-5">
              <Marquee items={JURISDICTIONS} />
            </div>
            <p className="body-copy mt-5 text-[0.8125rem]">
              Duplicated track translated by -50%. One transform, no scroll handler.
            </p>
          </div>
        </div>
      </Row>

      {/* ---------- The map ---------- */}
      <section id="map" className="relative overflow-hidden bg-burgundy-deep py-16 text-ivory lg:py-20">
        <div className="shell">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <h2 className="eyebrow text-gold">04 — Global Network Map</h2>
          </div>

          <p className="lede mt-7 max-w-2xl text-gold-light/75">
            A champagne dot matrix of ~16,000 land cells drawn once into a cached canvas path, with an SVG layer
            carrying the connecting lines, glowing nodes and relayed travelling arrows.
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <WorldMap tone="dark" variant="network" />
            </div>
            <div className="lg:col-span-4">
              <dl className="border-t border-gold/25">
                {[
                  ["Route", "USA → UK → UAE → India → Thailand"],
                  ["Cycle", "12s, one leg at a time"],
                  ["Land cells", "16,071 dots · 9 KB payload"],
                  ["Repaint cost", "One Path2D fill per state change"],
                  ["Interaction", "Hover, focus and tap all illuminate"],
                  ["Reduced motion", "Travelling arrows suppressed"],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-1 border-b border-gold/15 py-4">
                    <dt className="eyebrow text-[0.625rem] text-gold">{k}</dt>
                    <dd className="text-[0.875rem] text-gold-light/75">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-10 border-t border-gold/20 pt-6">
            <p className="eyebrow text-gold/70">Light variant</p>
            <div className="mt-6 bg-ivory p-6">
              <WorldMap tone="light" variant="network" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Motion ---------- */}
      <Row id="motion" title="05 — Motion Language">
        <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {MOTION.map((m, i) => (
            <Reveal key={m.name} delay={i * 50} className="bg-white p-6">
              <h3 className="eyebrow text-burgundy">{m.name}</h3>
              <p className="body-copy mt-3 text-[0.8125rem] leading-relaxed">{m.detail}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="border-t border-line pt-6">
            <p className="eyebrow text-gold">Easing</p>
            <ul className="mt-4 flex flex-col gap-2 font-mono text-[0.75rem] text-charcoal-muted">
              <li>--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1)</li>
              <li>--ease-soft: cubic-bezier(0.4, 0, 0.2, 1)</li>
            </ul>
          </div>
          <div className="border-t border-line pt-6">
            <p className="eyebrow text-gold">Deliberately avoided</p>
            <p className="body-copy mt-4 text-[0.875rem]">
              Spinning globes · particle effects · bouncing buttons · flashy gradients · constant animation ·
              oversized video backgrounds.
            </p>
          </div>
        </div>
      </Row>

      {/* ---------- Layout ---------- */}
      <Row id="layout" title="06 — Layout & Spacing">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <dl className="border-t border-line">
              {[
                ["Shell", "max-width 88rem · 1.5rem / 3rem / 4.5rem gutters"],
                ["Section rhythm", "6rem mobile · 9rem desktop"],
                ["Grid", "12 columns, 5/7 and 6/6 editorial splits"],
                ["Breakpoints", "sm 640 · md 768 · lg 1024 · xl 1280"],
                ["Rules", "1px #E2DBCE hairlines; champagne for accents"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1 border-b border-line py-4">
                  <dt className="eyebrow text-[0.625rem] text-gold">{k}</dt>
                  <dd className="body-copy text-[0.875rem]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <p className="eyebrow text-gold">Column grid</p>
            <div className="mt-5 grid grid-cols-12 gap-2">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-24 bg-gold-light/40" />
              ))}
            </div>
            <p className="body-copy mt-5 text-[0.8125rem]">
              Generous whitespace is part of the brand. Where a section feels crowded, remove an element rather than
              shrink the type.
            </p>
          </div>
        </div>
      </Row>
    </>
  );
}

import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";
import WorldMap from "@/components/map/WorldMap";
import { JURISDICTIONS } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ivory">
      {/* Very subtle ivory/white gradient ground — no busy photography */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 18%, #ffffff 0%, #fbf9f5 38%, #f8f5ef 70%), linear-gradient(180deg, #ffffff 0%, #f8f5ef 100%)",
        }}
      />

      {/* The animated global network */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 opacity-[0.92] top-[18%] -right-[28%] w-[115%] sm:-right-[18%] sm:w-[95%] lg:top-1/2 lg:-translate-y-[46%] lg:-right-[12%] lg:w-[72%] xl:-right-[8%] xl:w-[66%]"
        style={{
          maskImage: "radial-gradient(85% 85% at 60% 50%, #000 45%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(85% 85% at 60% 50%, #000 45%, transparent 100%)",
        }}
      >
        <WorldMap variant="hero" />
      </div>

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-0" style={{ paddingTop: "var(--nav-h)" }}>
        <div className="flex flex-1 items-center">
          <div className="max-w-[46rem] py-20 lg:py-24">
            <p
              className="eyebrow flex items-center gap-4 text-burgundy"
              style={{ animation: "rise .9s var(--ease-editorial) .1s both" }}
            >
              <span className="h-px w-10 bg-gold" />
              Kshetry &amp; Co. — Law Firm
            </p>

            <h1
              className="display display-xl mt-8 text-burgundy-deep"
              style={{ animation: "rise 1.1s var(--ease-editorial) .22s both" }}
            >
              Legal Solutions
              <span className="block text-burgundy">Beyond Borders</span>
            </h1>

            <p
              className="display display-sm mt-7 max-w-xl text-charcoal/70 italic"
              style={{ animation: "rise 1.1s var(--ease-editorial) .36s both" }}
            >
              Trusted legal counsel for a changing world.
            </p>

            <p
              className="lede mt-7 max-w-xl"
              style={{ animation: "rise 1.1s var(--ease-editorial) .46s both" }}
            >
              Kshetry &amp; Co. is a multidisciplinary law firm providing legal, transactional, regulatory and
              strategic advisory services across jurisdictions — working at the intersection of law, business and
              cross-border opportunity.
            </p>

            <div
              className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5"
              style={{ animation: "rise 1.1s var(--ease-editorial) .58s both" }}
            >
              <Button href="/practice-areas">Explore Our Practice</Button>
              <Button href="/contact" variant="outline">
                Connect With Us
              </Button>
            </div>
          </div>
        </div>

        {/* Jurisdiction marquee seals the hero */}
        <div
          className="relative border-t border-line py-5"
          style={{ animation: "rise 1.1s var(--ease-editorial) .74s both" }}
        >
          <Marquee items={JURISDICTIONS} />
        </div>
      </div>
    </section>
  );
}

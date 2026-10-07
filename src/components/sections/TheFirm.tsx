import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";
import { DEFINING } from "@/data/site";

export default function TheFirm() {
  return (
    <section id="firm" className="relative bg-white py-24 lg:py-36">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow text-burgundy">The Firm</span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="display display-lg mt-7 text-burgundy-deep">
              A Global Perspective.
              <span className="block text-burgundy">A Personal Approach.</span>
            </h2>
          </Reveal>

          <Reveal delay={200} className="mt-10 hidden lg:block">
            <p className="display text-[1.5rem] leading-snug text-charcoal/55 italic">
              “Effective legal counsel should do more than identify risk.”
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={120}>
            <p className="lede">
              Kshetry &amp; Co. combines legal knowledge with commercial understanding to advise individuals,
              businesses, institutions and international stakeholders navigating increasingly complex legal and
              business environments.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="body-copy mt-6">
              Our practice spans advisory, litigation, transactions, regulatory matters and dispute resolution, with a
              particular focus on cross-border engagements. We believe effective legal counsel should do more than
              identify risk — it should help clients understand their options, anticipate challenges and make informed
              decisions.
            </p>
          </Reveal>

          <Reveal delay={280} className="mt-10">
            <ArrowLink href="/about">Discover the Firm</ArrowLink>
          </Reveal>
        </div>
      </div>

      {/* What defines us — four editorial statements */}
      <div className="shell mt-24 lg:mt-32">
        <div className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {DEFINING.map((item, i) => (
            <Reveal
              key={item.index}
              delay={i * 90}
              className="group relative border-b border-line py-10 pr-8 lg:py-12 lg:pr-10 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-line lg:[&:not(:first-child)]:pl-10"
            >
              <span className="display text-[2.75rem] leading-none text-gold-light transition-colors duration-700 group-hover:text-gold">
                {item.index}
              </span>
              <h3 className="eyebrow mt-6 text-burgundy">{item.title}</h3>
              <p className="body-copy mt-3 text-[0.9375rem] leading-relaxed">{item.copy}</p>
              <span className="absolute inset-x-0 bottom-[-1px] h-px origin-left scale-x-0 bg-burgundy transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-x-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

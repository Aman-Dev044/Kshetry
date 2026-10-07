import ArrowLink from "@/components/ui/ArrowLink";
import Counter from "@/components/ui/Counter";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { PRESS, RECOGNITION, STATS } from "@/data/site";

export default function Recognition() {
  return (
    <section id="recognition" className="bg-ivory py-24 lg:py-36">
      <div className="shell">
        {/* At a glance */}
        <div className="grid gap-y-12 border-y border-line py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-14">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90} className="lg:px-6 lg:first:pl-0">
              <p className="display text-[clamp(2.75rem,4.5vw,3.75rem)] leading-none text-burgundy">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="eyebrow mt-4 text-charcoal-muted">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-12 lg:mt-28 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Recognition"
              title="Recognition of professional excellence."
              copy="Recognition is regarded not simply as an accolade, but as a reflection of the standards to which the firm holds itself."
            />
            <Reveal delay={240} className="mt-10">
              <ArrowLink href="/recognition">View All Recognition</ArrowLink>
            </Reveal>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="relative border-l border-line pl-8 lg:pl-10">
              {RECOGNITION.map((item, i) => (
                <Reveal key={`${item.year}-${item.title}`} as="li" delay={i * 80} className="group relative pb-10 last:pb-0">
                  <span className="absolute -left-[2.0625rem] top-2 h-1.5 w-1.5 rotate-45 bg-gold transition-all duration-500 group-hover:scale-150 group-hover:bg-burgundy lg:-left-[2.5625rem]" />
                  <span className="eyebrow text-gold">{item.year}</span>
                  <h3 className="display display-sm mt-2 text-burgundy-deep transition-colors duration-500 group-hover:text-burgundy">
                    {item.title}
                  </h3>
                  <p className="eyebrow mt-2 text-[0.625rem] text-charcoal-muted">{item.org}</p>
                  <p className="body-copy mt-3 max-w-lg text-[0.875rem] leading-relaxed">{item.note}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <Reveal delay={120} className="mt-20 border-y border-line py-6 lg:mt-28">
        <Marquee items={PRESS} durationSeconds={42} />
      </Reveal>
    </section>
  );
}

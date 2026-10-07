import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";

const TRACKS = [
  { label: "Early Careers", note: "Trainees, researchers and graduates" },
  { label: "Experienced Professionals", note: "Lawyers across practice and jurisdiction" },
  { label: "Specialist Talent", note: "Operations, technology and business" },
];

export default function Careers() {
  return (
    <section id="careers" className="relative overflow-hidden bg-white py-24 lg:py-36">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow text-burgundy">Careers</span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="display display-lg mt-7 text-burgundy-deep">
              Build your practice.
              <span className="block text-burgundy">Expand your perspective.</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="lede mt-7 max-w-xl">
              Strong legal practices are built by people who are curious, rigorous and willing to look beyond
              conventional boundaries. We welcome applications from lawyers, researchers, business professionals,
              trainees and support specialists.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-10">
            <ArrowLink href="/careers">View Opportunities</ArrowLink>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <div className="border-t border-line">
            {TRACKS.map((track, i) => (
              <Reveal key={track.label} delay={i * 90}>
                <div className="group flex items-baseline gap-5 border-b border-line py-6">
                  <span className="eyebrow text-[0.625rem] text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="display text-[1.25rem] text-burgundy-deep transition-colors duration-500 group-hover:text-burgundy">
                      {track.label}
                    </h3>
                    <p className="body-copy mt-1 text-[0.875rem]">{track.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { NETWORK } from "@/data/site";

export default function ContactCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-burgundy text-ivory">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 120% at 85% 0%, rgba(200,161,90,.22) 0%, rgba(111,16,40,0) 60%), linear-gradient(180deg, #6f1028 0%, #3b0718 100%)",
        }}
      />

      <div className="shell relative py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow text-gold">Contact</span>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="display display-lg mt-7 text-ivory">
                Let&rsquo;s discuss
                <span className="block text-gold-light">your matter.</span>
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="lede mt-7 max-w-xl text-gold-light/75">
                Whether you require legal advice, transactional assistance, dispute representation or cross-border
                advisory support, our team can direct your enquiry to the appropriate practice.
              </p>
            </Reveal>

            <Reveal delay={240} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <Button href="/contact" variant="light">
                Submit an Enquiry
              </Button>
              <Button href="/network" variant="ghost" className="text-gold-light hover:text-gold">
                Find an Office
              </Button>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={200} className="border-t border-gold/25 pt-7">
              <p className="eyebrow text-gold/70">Select Location</p>
              <ul className="mt-5 grid gap-3">
                {NETWORK.map((node) => (
                  <li key={node.id} className="flex items-baseline justify-between gap-4 border-b border-gold/15 pb-3">
                    <span className="eyebrow text-gold-light/85">{node.country}</span>
                    <span className="text-[0.6875rem] uppercase tracking-[0.16em] text-gold/60">{node.city}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <Reveal delay={300} className="mt-16 border-t border-gold/20 pt-6">
          <p className="max-w-3xl text-[0.8125rem] leading-relaxed text-gold-light/55">
            Submission of an enquiry does not create a lawyer-client relationship. Confidential or privileged
            information should not be submitted until such a relationship has been formally established.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

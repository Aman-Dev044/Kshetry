import Link from "next/link";
import Logo from "./Logo";
import { FOOTER_COLUMNS, SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-burgundy-deep text-gold-light">
      <div className="shell py-20 lg:py-24">
        <div className="flex flex-col gap-10 border-b border-gold/20 pb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Logo tone="light" />
            <p className="display mt-7 text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.1] text-ivory">
              Legal Solutions
              <span className="block text-gold">Beyond Borders.</span>
            </p>
          </div>

          <Link
            href="/contact"
            className="eyebrow self-start border border-gold/40 px-8 py-4 text-gold-light transition-colors duration-500 hover:border-gold hover:bg-gold hover:text-burgundy-deep lg:self-end"
          >
            Enquire
          </Link>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="eyebrow text-gold">{col.title}</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.9375rem] text-gold-light/65 transition-colors duration-400 hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-gold/20 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.75rem] tracking-[0.06em] text-gold-light/50">
            © {SITE.year} {SITE.name} All Rights Reserved.
          </p>
          <p className="eyebrow text-[0.5625rem] text-gold/55">
            India · UAE · UK · USA · Thailand
          </p>
        </div>
      </div>
    </footer>
  );
}

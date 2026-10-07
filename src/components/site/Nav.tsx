"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { JURISDICTIONS, NAV_LINKS } from "@/data/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking.current = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        data-nav={solid ? "solid" : "ghost"}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ease-[var(--ease-soft)] ${
          solid
            ? "border-b border-gold/30 bg-ivory/92 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
        style={{ height: "var(--nav-h)" }}
      >
        <div className="shell flex h-full items-center justify-between gap-6">
          <Logo tone="nav" />

          <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="eyebrow group relative py-2 text-[var(--nav-ink)] transition-colors duration-400 hover:text-[var(--nav-ink-strong)]"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="eyebrow hidden border border-[var(--nav-cta-border)] bg-[var(--nav-cta-bg)] px-6 py-3.5 text-[var(--nav-cta-ink)] transition-colors duration-500 hover:border-burgundy-deep hover:bg-burgundy-deep hover:text-ivory sm:inline-block"
            >
              Enquire
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative -mr-2 flex h-11 w-11 items-center justify-center xl:hidden"
            >
              <span className="relative block h-3 w-6">
                <span
                  className={`absolute left-0 h-px w-full bg-[var(--nav-ink-strong)] transition-all duration-500 ease-[var(--ease-editorial)] ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px bg-[var(--nav-ink-strong)] transition-all duration-500 ease-[var(--ease-editorial)] ${
                    open ? "top-1.5 w-full -rotate-45" : "top-3 w-4/5"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / tablet overlay */}
      <div
        id="site-menu"
        className={`fixed inset-0 z-40 bg-ivory transition-[opacity,visibility] duration-500 ease-[var(--ease-soft)] xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        style={{ paddingTop: "var(--nav-h)" }}
      >
        <div className="shell flex h-full flex-col justify-between overflow-y-auto pb-10 pt-8">
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="display display-sm border-b border-line py-5 text-burgundy-deep transition-colors duration-400 hover:text-burgundy"
                style={
                  open
                    ? { animation: `rise .7s var(--ease-editorial) ${60 + i * 45}ms both` }
                    : undefined
                }
              >
                <span className="eyebrow mr-4 align-middle text-gold">{String(i + 1).padStart(2, "0")}</span>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-10 flex flex-col gap-6">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="eyebrow bg-burgundy px-6 py-4 text-center text-ivory"
            >
              Enquire
            </Link>
            <p className="eyebrow text-charcoal-muted">{JURISDICTIONS.join(" · ")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import { useState } from "react";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";
import WorldMap from "@/components/map/WorldMap";
import { NETWORK, type NetworkNode } from "@/data/site";

export default function GlobalNetwork() {
  const [active, setActive] = useState<NetworkNode | null>(null);
  const shown = active ?? NETWORK[0];

  return (
    <section id="network" className="relative overflow-hidden bg-burgundy-deep py-24 text-ivory lg:py-36">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 70% 30%, rgba(111,16,40,.55) 0%, rgba(59,7,24,0) 65%), linear-gradient(180deg, #3b0718 0%, #2d0512 100%)",
        }}
      />

      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow text-gold">Global Network</span>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="display display-lg mt-7 text-ivory">
                Connected across
                <span className="block text-gold-light">jurisdictions.</span>
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="lede mt-7 text-gold-light/75">
                Modern legal matters rarely remain confined to one jurisdiction. Through our international network and
                cross-border practice capabilities, Kshetry &amp; Co. assists clients navigating matters involving
                multiple jurisdictions.
              </p>
            </Reveal>

            {/* Location list — doubles as the control for the map */}
            <Reveal delay={240} className="mt-10 border-t border-gold/20">
              <ul>
                {NETWORK.map((node) => {
                  const isOn = shown.id === node.id;
                  return (
                    <li key={node.id}>
                      <button
                        type="button"
                        onMouseEnter={() => setActive(node)}
                        onFocus={() => setActive(node)}
                        onClick={() => setActive(node)}
                        aria-pressed={isOn}
                        className="group flex w-full items-center gap-4 border-b border-gold/20 py-4 text-left transition-colors duration-500"
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rotate-45 transition-all duration-500 ${
                            isOn ? "scale-125 bg-gold" : "bg-gold/35"
                          }`}
                        />
                        <span
                          className={`eyebrow transition-colors duration-500 ${
                            isOn ? "text-ivory" : "text-gold-light/60 group-hover:text-gold-light"
                          }`}
                        >
                          {node.country}
                        </span>
                        <span className="ml-auto text-[0.625rem] uppercase tracking-[0.18em] text-gold/60">
                          {node.kind === "office" ? "Office" : "Network"}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            <Reveal delay={320} className="mt-10">
              <ArrowLink href="/network" tone="light">
                Explore Our Network
              </ArrowLink>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120} className="relative">
              {/* Leaving a node keeps the last selection on screen rather than resetting */}
              <WorldMap tone="dark" variant="network" onActiveChange={(node) => node && setActive(node)} />
            </Reveal>

            {/* Detail panel for the selected location */}
            <Reveal delay={200} className="mt-8 lg:mt-10">
              <div className="min-h-[9.5rem] border-t border-gold/25 pt-7">
                <div key={shown.id} style={{ animation: "rise .7s var(--ease-editorial) both" }}>
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                    <h3 className="display display-sm text-gold-light">{shown.country}</h3>
                    <span className="eyebrow text-gold/70">{shown.heading}</span>
                  </div>
                  <p className="body-copy mt-3 max-w-2xl text-[0.9375rem] text-gold-light/65">{shown.blurb}</p>
                  <p className="eyebrow mt-4 text-[0.625rem] text-gold/70">{shown.places.join("  ·  ")}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

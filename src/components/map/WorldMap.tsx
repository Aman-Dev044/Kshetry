"use client";

import { useMemo, useState } from "react";
import LandCanvas from "./LandCanvas";
import { MAP_H, MAP_W, arcPath, project } from "./projection";
import { MAP_PALETTE, type MapTone } from "./palette";
import { NETWORK, ROUTE, type NetworkNode } from "@/data/site";

type Props = {
  tone?: MapTone;
  /** `hero` is decorative and inert; `network` carries labels and hover. */
  variant?: "hero" | "network";
  className?: string;
  onActiveChange?: (node: NetworkNode | null) => void;
};

/**
 * One relay cycle, matching `--km-cycle` in globals.css. Each leg owns a
 * quarter of the timeline, so the route travels USA → UK → UAE → India →
 * Thailand in turn rather than all at once.
 */
const CYCLE_SECONDS = 12;

/** Keeps SSR and client markup byte-identical despite float jitter. */
const round = (n: number) => Math.round(n * 1000) / 1000;

export default function WorldMap({ tone = "light", variant = "network", className, onActiveChange }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const interactive = variant === "network";
  const c = MAP_PALETTE[tone];

  const points = useMemo(() => {
    const map = new Map<string, { node: NetworkNode; x: number; y: number }>();
    for (const node of NETWORK) {
      const { x, y } = project(node.lon, node.lat);
      map.set(node.id, { node, x, y });
    }
    return map;
  }, []);

  const legs = useMemo(() => {
    const out: {
      id: string;
      d: string;
      from: string;
      to: string;
      mid: { x: number; y: number; angle: number };
    }[] = [];

    for (let i = 0; i < ROUTE.length - 1; i++) {
      const a = points.get(ROUTE[i]);
      const b = points.get(ROUTE[i + 1]);
      if (!a || !b) continue;

      const d = arcPath(a, b);
      // Recover the quadratic control point for the midpoint direction marker.
      const [x0, y0, cx, cy, x1, y1] = d.match(/-?\d+(?:\.\d+)?/g)!.map(Number);
      out.push({
        id: `${ROUTE[i]}-${ROUTE[i + 1]}`,
        d,
        from: ROUTE[i],
        to: ROUTE[i + 1],
        // Rounded: Math.atan2 differs in the last bits between Node and the
        // browser, which would otherwise trip a hydration mismatch.
        mid: {
          x: round(0.25 * x0 + 0.5 * cx + 0.25 * x1),
          y: round(0.25 * y0 + 0.5 * cy + 0.25 * y1),
          angle: round((Math.atan2(y1 - y0, x1 - x0) * 180) / Math.PI),
        },
      });
    }
    return out;
  }, [points]);

  const legDelay = CYCLE_SECONDS / Math.max(legs.length, 1);

  const setActive = (id: string | null) => {
    setActiveId(id);
    onActiveChange?.(id ? (points.get(id)?.node ?? null) : null);
  };

  const gradientId = `km-leg-${tone}`;
  const haloId = `km-halo-${tone}`;

  return (
    <div className={`relative w-full select-none ${className ?? ""}`} style={{ aspectRatio: `${MAP_W} / ${MAP_H}` }}>
      <LandCanvas
        activeId={activeId}
        tone={tone}
        intensity={variant === "hero" ? 0.9 : 1}
        className="absolute inset-0 h-full w-full"
      />

      <svg
        viewBox={`0 0 ${MAP_W} ${MAP_H}`}
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden
        role="presentation"
      >
        <defs>
          <radialGradient id={haloId}>
            <stop offset="0%" stopColor={c.nodeHalo} stopOpacity="0.55" />
            <stop offset="100%" stopColor={c.nodeHalo} stopOpacity="0" />
          </radialGradient>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={c.line} stopOpacity={c.lineOpacity[0]} />
            <stop offset="50%" stopColor={c.line} stopOpacity={c.lineOpacity[1]} />
            <stop offset="100%" stopColor={c.line} stopOpacity={c.lineOpacity[2]} />
          </linearGradient>
        </defs>

        {/* Thin connecting lines — the network reads even at rest */}
        {legs.map((leg) => {
          const dim = activeId !== null && activeId !== leg.from && activeId !== leg.to;
          return (
            <g
              key={leg.id}
              style={{ opacity: dim ? 0.22 : 1, transition: "opacity .6s var(--ease-soft)" }}
            >
              <path d={leg.d} fill="none" stroke={`url(#${gradientId})`} strokeWidth={0.35} strokeLinecap="round" />
              <path
                d="M-1.1 -1 L1 0 L-1.1 1"
                fill="none"
                stroke={c.line}
                strokeWidth={0.4}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.55}
                transform={`translate(${leg.mid.x} ${leg.mid.y}) rotate(${leg.mid.angle}) scale(0.85)`}
              />
            </g>
          );
        })}

        {/* Travelling arrows, relayed one leg at a time */}
        {legs.map((leg, i) => (
          <g key={`travel-${leg.id}`} className="km-travel" style={{ animationDelay: `${i * legDelay}s` }}>
            <path
              d={leg.d}
              pathLength={100}
              fill="none"
              stroke={c.travelTail}
              strokeOpacity={0.4}
              strokeWidth={0.75}
              strokeLinecap="round"
              strokeDasharray="20 80"
            />
            <path
              d={leg.d}
              pathLength={100}
              fill="none"
              stroke={c.travelHead}
              strokeWidth={1.2}
              strokeLinecap="round"
              strokeDasharray="2.5 97.5"
            />
          </g>
        ))}

        {/* Glowing nodes */}
        {NETWORK.map((node, i) => {
          const p = points.get(node.id)!;
          const active = activeId === node.id;
          return (
            <g key={node.id} transform={`translate(${p.x} ${p.y})`}>
              <circle
                r={5.5}
                fill={`url(#${haloId})`}
                className="km-node-halo"
                style={{ animationDuration: `${5 + i * 0.8}s`, animationDelay: `${i * 0.9}s` }}
              />
              <circle
                r={active ? 3.2 : 2.2}
                fill="none"
                stroke={c.nodeRing}
                strokeWidth={0.4}
                opacity={active ? 1 : 0.7}
                style={{ transition: "r .5s var(--ease-editorial), opacity .5s var(--ease-soft)" }}
              />
              <circle r={node.kind === "office" ? 1.15 : 0.85} fill={c.nodeCore} />
              {node.kind === "office" && (
                <circle r={1.15} fill="none" stroke={c.officeRing} strokeWidth={0.3} opacity={0.8} />
              )}
            </g>
          );
        })}
      </svg>

      {/* Labels and hit targets stay in HTML, for real typography and keyboard access */}
      {interactive && (
        <div className="absolute inset-0">
          {NETWORK.map((node) => {
            const p = points.get(node.id)!;
            const active = activeId === node.id;
            const left = `${(p.x / MAP_W) * 100}%`;
            const labelTop = `${((p.y + (node.labelDy ?? 0)) / MAP_H) * 100}%`;
            const toneClass =
              tone === "dark"
                ? active
                  ? "text-ivory"
                  : "text-gold-light/60"
                : active
                  ? "text-burgundy"
                  : "text-charcoal-muted/70";

            return (
              <div key={node.id}>
                {/* Label is offset separately so neighbouring codes never collide */}
                <span
                  aria-hidden
                  className={`eyebrow pointer-events-none absolute whitespace-nowrap text-[0.5625rem] transition-[color,letter-spacing] duration-500 sm:text-[0.625rem] ${toneClass}`}
                  style={{
                    left,
                    top: labelTop,
                    letterSpacing: active ? "0.3em" : "0.2em",
                    transform: node.anchor === "right" ? "translate(0, -50%)" : "translate(-100%, -50%)",
                    marginLeft: node.anchor === "right" ? "0.7rem" : "-0.7rem",
                  }}
                >
                  {node.code}
                </span>

                <button
                  type="button"
                  onMouseEnter={() => setActive(node.id)}
                  onFocus={() => setActive(node.id)}
                  onMouseLeave={() => setActive(null)}
                  onBlur={() => setActive(null)}
                  onClick={() => setActive(active ? null : node.id)}
                  aria-label={`${node.country} — ${node.heading}`}
                  className="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full"
                  style={{ left, top: `${(p.y / MAP_H) * 100}%` }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

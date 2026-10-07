"use client";

import { useEffect, useRef } from "react";
import { MAP_H, MAP_W, landDots, project } from "./projection";
import { MAP_PALETTE, type MapTone } from "./palette";
import { NETWORK } from "@/data/site";

type Props = {
  /** Node id currently highlighted — its region of the map brightens. */
  activeId?: string | null;
  tone?: MapTone;
  /** Scales the whole illumination; the hero sits a little further back. */
  intensity?: number;
  className?: string;
};

const DOT_R = 0.36; // grid units

/**
 * The landmass, rendered as a fine champagne dot matrix on a canvas.
 *
 * Every dot lives in one cached Path2D, so a repaint is a single fill call
 * rather than ~16,000 — hover and resize stay cheap, including on mobile.
 */
export default function LandCanvas({ activeId = null, tone = "light", intensity = 1, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathRef = useRef<Path2D | null>(null);
  const sizeRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    if (!pathRef.current) {
      const dots = landDots();
      const path = new Path2D();
      for (let i = 0; i < dots.length; i += 2) {
        path.moveTo(dots[i] + DOT_R, dots[i + 1]);
        path.arc(dots[i], dots[i + 1], DOT_R, 0, Math.PI * 2);
      }
      pathRef.current = path;
    }

    const c = MAP_PALETTE[tone];

    const draw = () => {
      const ctx = canvas.getContext("2d");
      const path = pathRef.current;
      const { w } = sizeRef.current;
      if (!ctx || !path || !w) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const unit = (w / MAP_W) * dpr;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(unit, unit);

      // 1 — the landmass itself
      ctx.fillStyle = `rgba(200, 161, 90, ${c.dotAlpha * intensity})`;
      ctx.fill(path);

      // 2 — illumination, clipped to the dots so the sea stays empty
      ctx.globalCompositeOperation = "source-atop";

      const wash = ctx.createLinearGradient(0, 0, MAP_W, MAP_H);
      wash.addColorStop(0, `rgba(${c.wash}, ${c.washAlpha * intensity})`);
      wash.addColorStop(0.55, `rgba(${c.wash}, 0)`);
      ctx.fillStyle = wash;
      ctx.fillRect(0, 0, MAP_W, MAP_H);

      for (const node of NETWORK) {
        const p = project(node.lon, node.lat);
        const active = node.id === activeId;
        const r = active ? 46 : 30;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        if (active) {
          g.addColorStop(0, c.activeStops[0]);
          g.addColorStop(0.35, c.activeStops[1]);
          g.addColorStop(1, c.activeStops[2]);
        } else {
          g.addColorStop(0, `rgba(${c.halo}, ${c.haloAlpha * intensity})`);
          g.addColorStop(1, `rgba(${c.halo}, 0)`);
        }
        ctx.fillStyle = g;
        ctx.fillRect(p.x - r, p.y - r, r * 2, r * 2);
      }

      ctx.globalCompositeOperation = "source-over";
    };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      if (!rect.width) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const h = (rect.width * MAP_H) / MAP_W;
      sizeRef.current = { w: rect.width, h };
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${h}px`;
      draw();
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    return () => ro.disconnect();
  }, [activeId, tone, intensity]);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}

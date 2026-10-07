import { MAP_GRID, MAP_MASK_B64 } from "@/data/world-mask";

export const MAP_W = MAP_GRID.w;
export const MAP_H = MAP_GRID.h;

/**
 * Equirectangular lon/lat -> grid-unit coordinates matching the land mask.
 * Rounded so server and client markup agree exactly down to the last digit.
 */
export function project(lon: number, lat: number): { x: number; y: number } {
  const x = ((lon - MAP_GRID.lon0) / (MAP_GRID.lon1 - MAP_GRID.lon0)) * MAP_W;
  const y = ((MAP_GRID.lat0 - lat) / (MAP_GRID.lat0 - MAP_GRID.lat1)) * MAP_H;
  return { x: Math.round(x * 1000) / 1000, y: Math.round(y * 1000) / 1000 };
}

let cachedDots: Float32Array | null = null;

/** Decode the land bitmask once into a flat [x0,y0,x1,y1,...] array of dot centres. */
export function landDots(): Float32Array {
  if (cachedDots) return cachedDots;

  const bin = typeof atob === "function" ? atob(MAP_MASK_B64) : Buffer.from(MAP_MASK_B64, "base64").toString("binary");

  const out: number[] = [];
  for (let y = 0; y < MAP_H; y++) {
    for (let x = 0; x < MAP_W; x++) {
      const idx = y * MAP_W + x;
      if ((bin.charCodeAt(idx >> 3) >> (idx & 7)) & 1) {
        out.push(x + 0.5, y + 0.5);
      }
    }
  }
  cachedDots = new Float32Array(out);
  return cachedDots;
}

/**
 * A great-circle-ish arc between two projected points, drawn as a quadratic
 * curve bowed away from the equator. Returns an SVG path `d`.
 */
export function arcPath(a: { x: number; y: number }, b: { x: number; y: number }, bow = 0.22): string {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.hypot(dx, dy);
  // Perpendicular lift, always toward the top of the map so routes read as travel.
  const nx = -dy / (dist || 1);
  const ny = dx / (dist || 1);
  const sign = ny > 0 ? -1 : 1;
  const lift = dist * bow;
  return `M${a.x.toFixed(2)} ${a.y.toFixed(2)} Q${(mx + nx * lift * sign).toFixed(2)} ${(
    my +
    ny * lift * sign
  ).toFixed(2)} ${b.x.toFixed(2)} ${b.y.toFixed(2)}`;
}

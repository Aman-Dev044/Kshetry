export type MapTone = "light" | "dark";

/**
 * The map is used twice: ivory hero and dark-burgundy feature section. Only the
 * ink changes — geometry, motion and timing stay identical.
 */
export const MAP_PALETTE = {
  light: {
    dotAlpha: 0.34,
    washAlpha: 0.4,
    wash: "232, 213, 175",
    halo: "240, 226, 199",
    haloAlpha: 0.95,
    activeStops: ["rgba(111, 16, 40, 0.95)", "rgba(160, 60, 80, 0.5)", "rgba(111, 16, 40, 0)"],
    line: "#c8a15a",
    lineOpacity: [0.1, 0.5, 0.1] as const,
    travelTail: "#8b2440",
    travelHead: "#6f1028",
    nodeCore: "#6f1028",
    nodeRing: "#c8a15a",
    nodeHalo: "#c8a15a",
    officeRing: "#f8f5ef",
  },
  dark: {
    dotAlpha: 0.58,
    washAlpha: 0.35,
    wash: "232, 213, 175",
    halo: "248, 240, 222",
    haloAlpha: 1,
    activeStops: ["rgba(255, 250, 240, 0.95)", "rgba(232, 213, 175, 0.55)", "rgba(232, 213, 175, 0)"],
    line: "#c8a15a",
    lineOpacity: [0.12, 0.6, 0.12] as const,
    travelTail: "#e8d5af",
    travelHead: "#fdf8ef",
    nodeCore: "#e8d5af",
    nodeRing: "#c8a15a",
    nodeHalo: "#c8a15a",
    officeRing: "#ffffff",
  },
} satisfies Record<MapTone, Record<string, unknown>>;

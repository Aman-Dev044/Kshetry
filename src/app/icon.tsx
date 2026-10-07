import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Burgundy tile with a champagne K — the compact form of the wordmark. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#3b0718",
          color: "#c8a15a",
          fontSize: 42,
          fontFamily: "Georgia, serif",
          letterSpacing: "0.02em",
        }}
      >
        K
      </div>
    ),
    size,
  );
}

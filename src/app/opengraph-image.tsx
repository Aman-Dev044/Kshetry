import { ImageResponse } from "next/og";

export const alt = "Kshetry & Co. — Legal Solutions Beyond Borders";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Site-wide social card: dark burgundy, champagne rule, the wordmark. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #6f1028 0%, #3b0718 55%, #2a0411 100%)",
          fontFamily: "Georgia, serif",
          color: "#f8f5ef",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 1, background: "#c8a15a" }} />
          <div
            style={{
              fontSize: 20,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#c8a15a",
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
          >
            Kshetry &amp; Co. — Law Firm
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 94, lineHeight: 1.04, letterSpacing: -1 }}>Legal Solutions</div>
          <div style={{ fontSize: 94, lineHeight: 1.04, letterSpacing: -1, color: "#e8d5af" }}>Beyond Borders</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              fontSize: 19,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "rgba(232,213,175,0.72)",
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
          >
            India · UAE · UK · USA · Thailand
          </div>
          <div style={{ width: 160, height: 1, background: "rgba(200,161,90,0.5)" }} />
        </div>
      </div>
    ),
    size,
  );
}

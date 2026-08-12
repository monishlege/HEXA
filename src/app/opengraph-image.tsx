import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #020617 0%, #0b1226 55%, #140a2c 100%)",
          color: "white",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #f43f5e 0%, #d946ef 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 22,
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            HR
          </div>
          <div style={{ fontSize: 22, letterSpacing: 1, opacity: 0.95 }}>HEXACORE ROYAL</div>
        </div>

        <div style={{ marginTop: 34, fontSize: 58, lineHeight: 1.05, fontWeight: 800 }}>
          Premium Websites
          <br />
          that Convert
        </div>

        <div style={{ marginTop: 22, fontSize: 24, opacity: 0.9, maxWidth: 980, lineHeight: 1.35 }}>
          Web design & development for startups and small–mid businesses in Bangalore, India.
        </div>

        <div style={{ marginTop: 34, display: "flex", gap: 12, flexWrap: "wrap" }}>
          {["Responsive", "Custom", "SEO-ready", "High-conversion"].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 18,
                padding: "10px 14px",
                borderRadius: 999,
                border: "1px solid rgba(34,211,238,0.35)",
                background: "rgba(34,211,238,0.08)",
              }}
            >
              {t}
            </div>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 380,
            height: 380,
            borderRadius: 999,
            background: "radial-gradient(circle at 30% 30%, rgba(34,211,238,0.55), rgba(34,211,238,0) 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -140,
            bottom: -160,
            width: 520,
            height: 520,
            borderRadius: 999,
            background: "radial-gradient(circle at 35% 35%, rgba(217,70,239,0.45), rgba(217,70,239,0) 62%)",
          }}
        />
      </div>
    ),
    size
  );
}


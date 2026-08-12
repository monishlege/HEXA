import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
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
        <div style={{ fontSize: 22, letterSpacing: 1, opacity: 0.95 }}>HEXACORE ROYAL</div>
        <div style={{ marginTop: 18, fontSize: 64, lineHeight: 1.05, fontWeight: 900 }}>
          Web Design
          <br />
          Services
        </div>
        <div style={{ marginTop: 18, fontSize: 24, opacity: 0.9, maxWidth: 980, lineHeight: 1.35 }}>
          Premium, responsive, custom website development for Bangalore startups and SMBs.
        </div>
      </div>
    ),
    size
  );
}


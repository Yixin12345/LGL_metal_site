import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LL Metal Tech";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #08111f 0%, #0f172a 55%, #1f2937 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: "64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(201,151,0,0.25), transparent 28%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.16)",
            borderRadius: "32px",
            padding: "44px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "72px",
                height: "72px",
                borderRadius: "999px",
                background: "rgba(184,115,51,0.22)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              LL
            </div>
            Metal Tech
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              maxWidth: "850px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.72)",
              }}
            >
              Hafnium / Minor Metals / Industrial Supply
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "68px",
                fontWeight: 800,
                lineHeight: 1.05,
              }}
            >
              Specialized Hafnium &amp; Minor Metal Supply
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "28px",
                lineHeight: 1.4,
                color: "rgba(255,255,255,0.8)",
              }}
            >
              Montreal-based coordination for plasma cutting, recycling, and
              industrial material buyers.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}

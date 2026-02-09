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
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(900px circle at 50% 10%, rgba(124,58,237,0.35), transparent 55%), radial-gradient(900px circle at 50% 110%, rgba(34,211,238,0.22), transparent 60%), #05060a",
          color: "#f4f5f7",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Inter, Arial",
        }}
      >
        <div
          style={{
            width: 980,
            borderRadius: 40,
            padding: 64,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          <div style={{ fontSize: 22, letterSpacing: 1, opacity: 0.85 }}>ORIGEN · ALTIUS IGNITE</div>
          <div style={{ fontSize: 64, lineHeight: 1.05, fontWeight: 650 }}>
            Operación digital
            <br />
            lista para vender.
          </div>
          <div style={{ fontSize: 26, lineHeight: 1.35, opacity: 0.9 }}>
            Web premium + conversión + datos desde el primer día.
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            {["Planes claros", "Autoadministrable", "Hosting + SSL"].map((t) => (
              <div
                key={t}
                style={{
                  padding: "10px 16px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(0,0,0,0.18)",
                  fontSize: 18,
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}


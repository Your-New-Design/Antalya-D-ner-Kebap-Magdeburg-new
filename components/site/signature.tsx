"use client"

export function Signature({ sig, onOrder }: { sig: any; onOrder: () => void }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "70px 24px 80px" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(70% 80% at 18% 50%,rgba(232,64,31,.14),transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", maxWidth: 760, margin: "0 auto" }}>
        <div data-reveal="">
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 12,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: "#f5c518",
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ width: 26, height: 2, background: "#e8401f", display: "inline-block" }} />
            {sig.kicker}
          </span>
          <h2
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(38px,5vw,70px)",
              lineHeight: 0.92,
              letterSpacing: "-.02em",
              textTransform: "uppercase",
              margin: "14px 0 0",
            }}
          >
            {sig.title}
          </h2>
          <p
            style={{
              fontSize: "clamp(15px,1.5vw,18px)",
              color: "rgba(247,239,227,.82)",
              lineHeight: 1.65,
              margin: "18px 0 0",
            }}
          >
            {sig.lead}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 11, margin: "24px 0 0" }}>
            {sig.points.map((pt: string, i: number) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 16, color: "#f7efe3" }}>
                <span
                  style={{
                    width: 24,
                    height: 24,
                    flexShrink: 0,
                    borderRadius: "50%",
                    background: "linear-gradient(140deg,#f5c518,#e8401f)",
                    color: "#15110e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 900,
                  }}
                >
                  ✓
                </span>
                {pt}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginTop: 28 }}>
            <button
              onClick={onOrder}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-bricolage), sans-serif",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: ".03em",
                fontSize: 15,
                color: "#15110e",
                background: "linear-gradient(105deg,#f5c518,#e8401f)",
                padding: "16px 26px",
                borderRadius: 999,
                boxShadow: "0 14px 40px -12px rgba(232,64,31,.6)",
              }}
            >
              {sig.order} →
            </button>
            <a
              href="#menu"
              style={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                fontFamily: "var(--font-bricolage), sans-serif",
                fontWeight: 700,
                fontSize: 15,
                color: "#f7efe3",
                border: "1px solid rgba(247,239,227,.28)",
                padding: "16px 24px",
                borderRadius: 999,
              }}
            >
              {sig.toMenu}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

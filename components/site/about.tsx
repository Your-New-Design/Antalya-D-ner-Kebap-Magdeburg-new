"use client"

export function About({ t, sig, badges, onOrder }: { t: any; sig: any; badges: string[]; onOrder: () => void }) {
  return (
    <section id="about" style={{ position: "relative", padding: "64px 24px 80px", scrollMarginTop: 80, overflow: "hidden" }}>
      <div
        data-reveal=""
        className="about-grid"
        style={{
          position: "relative",
          maxWidth: 1340,
          margin: "0 auto",
          borderRadius: "clamp(20px,2.4vw,30px)",
          overflow: "hidden",
          border: "1px solid rgba(247,239,227,.12)",
          boxShadow: "0 50px 110px -38px rgba(0,0,0,.88)",
          background: "linear-gradient(135deg,#1a1208 0%,#0f0c08 40%,#141008 100%)",
          display: "grid",
          minHeight: "clamp(400px,55vh,600px)",
        }}
      >
        {/* LEFT: photo */}
        <div style={{ position: "relative", overflow: "hidden", minHeight: 320 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/doener-real.jpg"
            alt="Frischer Döner mit Haydi Ayran"
            style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg,transparent 72%,rgba(10,6,2,.98) 100%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "clamp(16px,2.5vw,32px)",
              insetInlineStart: "clamp(16px,2.5vw,32px)",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: 11,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "rgba(247,239,227,.65)",
              }}
            >
              schon ab
            </span>
            <span
              style={{
                fontFamily: "var(--font-bricolage), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(36px,4.5vw,58px)",
                lineHeight: 1,
                color: "#f5c518",
                textShadow: "0 4px 18px rgba(0,0,0,.7)",
              }}
            >
              7,50 €
            </span>
            <button
              onClick={onOrder}
              style={{
                marginTop: 8,
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-bricolage), sans-serif",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: ".03em",
                fontSize: 13,
                color: "#15110e",
                background: "linear-gradient(105deg,#f5c518,#e8401f)",
                padding: "12px 20px",
                borderRadius: 999,
                boxShadow: "0 10px 28px -8px rgba(232,64,31,.7)",
                alignSelf: "flex-start",
              }}
            >
              {sig.order} →
            </button>
          </div>
          <div
            style={{
              position: "absolute",
              top: "clamp(14px,2vw,24px)",
              insetInlineEnd: "clamp(14px,2vw,24px)",
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "rgba(30,107,214,.9)",
              backdropFilter: "blur(6px)",
              color: "#fff",
              fontFamily: "var(--font-bricolage), sans-serif",
              padding: "9px 15px",
              borderRadius: 16,
              boxShadow: "0 12px 28px -8px rgba(30,107,214,.8)",
              border: "1px solid rgba(255,255,255,.18)",
            }}
          >
            <span style={{ fontSize: 20 }}>🥛</span>
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.18 }}>
              <span style={{ fontWeight: 600, fontSize: 11.5, opacity: 0.9 }}>Haydi Ayran 0,25 l</span>
              <span style={{ fontWeight: 800, fontSize: 17 }}>2,00 €</span>
            </span>
          </div>
        </div>

        {/* RIGHT: text */}
        <div style={{ display: "flex", alignItems: "center", padding: "clamp(24px,3.5vw,52px)", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "radial-gradient(rgba(245,197,24,.06) 1px,transparent 1px)",
              backgroundSize: "28px 28px",
              opacity: 0.7,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(80% 70% at 50% 50%,rgba(232,64,31,.1),transparent 65%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.05, marginBottom: 18 }}>
              <span
                style={{
                  fontFamily: "var(--font-kaushan), cursive",
                  color: "#e52229",
                  fontSize: "clamp(28px,3.8vw,54px)",
                  textShadow: "0 2px 14px rgba(0,0,0,.4)",
                }}
              >
                Antalya
              </span>
              <span
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: ".05em",
                  fontSize: "clamp(14px,2.2vw,30px)",
                  color: "#f7efe3",
                  marginTop: 4,
                }}
              >
                Döner & Kebab
              </span>
            </div>
            <span
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: 12,
                letterSpacing: ".3em",
                textTransform: "uppercase",
                color: "#f5c518",
              }}
            >
              02 — {t.nav.about}
            </span>
            <h2
              style={{
                fontFamily: "var(--font-bricolage), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(28px,4vw,52px)",
                lineHeight: 0.96,
                letterSpacing: "-.02em",
                margin: "12px 0 0",
                textTransform: "uppercase",
              }}
            >
              {t.about.title}
            </h2>
            <p style={{ fontSize: 15, color: "rgba(247,239,227,.86)", lineHeight: 1.62, margin: "16px 0 0" }}>
              {t.about.p1}
            </p>
            <p style={{ fontSize: 15, color: "rgba(247,239,227,.86)", lineHeight: 1.62, margin: "12px 0 0" }}>
              {t.about.p2}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 9, marginTop: 22 }}>
              {badges.map((b, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontWeight: 600,
                    fontSize: 13,
                    background: "rgba(247,239,227,.06)",
                    border: "1px solid rgba(245,197,24,.28)",
                    color: "#f7efe3",
                    padding: "8px 14px",
                    borderRadius: 999,
                  }}
                >
                  <span style={{ color: "#e8401f" }}>✦</span>
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

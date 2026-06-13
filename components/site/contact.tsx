"use client"

export function Contact({ t, rest, mapAllowed }: { t: any; rest: any; mapAllowed: boolean }) {
  return (
    <section id="contact" style={{ padding: "80px 24px 90px", scrollMarginTop: 80 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div data-reveal="">
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 12,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: "#e8401f",
            }}
          >
            03 — {t.nav.contact}
          </span>
          <h2
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(36px,5vw,64px)",
              lineHeight: 0.95,
              letterSpacing: "-.02em",
              margin: "12px 0 30px",
              textTransform: "uppercase",
            }}
          >
            {t.contact.title}
          </h2>
        </div>
        <div className="contact-grid" style={{ display: "grid", gap: 18 }}>
          <div data-reveal="" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                display: "flex",
                gap: 16,
                background: "rgba(247,239,227,.04)",
                border: "1px solid rgba(247,239,227,.09)",
                borderRadius: 18,
                padding: 20,
              }}
            >
              <span style={{ fontSize: 24 }}>📍</span>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-space-mono), monospace",
                    fontSize: 11,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "#f5c518",
                  }}
                >
                  {t.contact.addressLabel}
                </div>
                <div style={{ fontWeight: 600, marginTop: 5 }}>{rest.address}</div>
                <div style={{ fontSize: 13, color: "rgba(247,239,227,.55)", marginTop: 3 }}>{t.contact.addressExtra}</div>
              </div>
            </div>
            <a
              href={rest.phoneHref}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                gap: 16,
                background: "linear-gradient(150deg,rgba(245,197,24,.1),rgba(232,64,31,.05))",
                border: "1px solid rgba(245,197,24,.22)",
                borderRadius: 18,
                padding: 20,
              }}
            >
              <span style={{ fontSize: 24 }}>📞</span>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-space-mono), monospace",
                    fontSize: 11,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "#f5c518",
                  }}
                >
                  {t.contact.phoneLabel}
                </div>
                <div style={{ fontFamily: "var(--font-bricolage), sans-serif", fontWeight: 800, fontSize: 20, marginTop: 5 }}>
                  {rest.phone}
                </div>
                <div style={{ fontSize: 12.5, color: "#e8401f", marginTop: 3 }}>{t.contact.noWhatsapp}</div>
              </div>
            </a>
            <div
              style={{
                display: "flex",
                gap: 16,
                background: "rgba(247,239,227,.04)",
                border: "1px solid rgba(247,239,227,.09)",
                borderRadius: 18,
                padding: 20,
              }}
            >
              <span style={{ fontSize: 24 }}>🕒</span>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "var(--font-space-mono), monospace",
                    fontSize: 11,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "#f5c518",
                  }}
                >
                  {t.contact.hoursLabel}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 15 }}>
                  <span>{t.contact.monSat}</span>
                  <span style={{ fontWeight: 700 }}>{t.contact.monSatTime}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 5,
                    fontSize: 15,
                    color: "rgba(247,239,227,.5)",
                  }}
                >
                  <span>{t.contact.sun}</span>
                  <span>{t.contact.sunClosed}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            data-reveal=""
            style={{
              transitionDelay: ".1s",
              position: "relative",
              borderRadius: 18,
              overflow: "hidden",
              border: "1px solid rgba(247,239,227,.14)",
              minHeight: 380,
            }}
          >
            {mapAllowed ? (
              <iframe
                src="https://maps.google.com/maps?q=Antalya+D%C3%B6ner+%26+Kebab+Am+Florapark+125+39128+Magdeburg&z=16&output=embed"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, filter: "saturate(.75) brightness(.65)" }}
                loading="lazy"
                allowFullScreen
                title="Antalya Döner & Kebab – Am Florapark 125, Magdeburg"
              />
            ) : (
              <div style={{ position: "absolute", inset: 0, background: "#0c0a08" }} />
            )}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg,rgba(12,10,8,.08) 0%,rgba(12,10,8,.04) 38%,rgba(12,10,8,.72) 100%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "absolute", bottom: 0, insetInline: 0, padding: "22px 24px" }}>
              <div
                style={{
                  fontFamily: "var(--font-space-mono), monospace",
                  fontSize: 10.5,
                  letterSpacing: ".24em",
                  textTransform: "uppercase",
                  color: "#f5c518",
                  marginBottom: 8,
                }}
              >
                {t.contact.mapLabel}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontWeight: 800,
                  fontSize: 20,
                  lineHeight: 1.2,
                  color: "#f7efe3",
                  textShadow: "0 2px 12px rgba(0,0,0,.8)",
                }}
              >
                AM FLORAPARK 125
                <br />
                39128 MAGDEBURG
              </div>
              <a
                href={rest.directions}
                target="_blank"
                rel="noopener"
                style={{
                  marginTop: 13,
                  display: "inline-flex",
                  textDecoration: "none",
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontWeight: 800,
                  fontSize: 13,
                  color: "#15110e",
                  background: "linear-gradient(105deg,#f5c518,#e8401f)",
                  padding: "10px 18px",
                  borderRadius: 999,
                }}
              >
                {t.contact.directions} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

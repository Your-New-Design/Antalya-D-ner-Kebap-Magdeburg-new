"use client"

import { SpinRing } from "@/components/spin-ring"
import { useOpenStatus } from "@/lib/use-open-status"

interface FooterProps {
  t: any
  rest: any
  openImprint: () => void
  openPrivacy: () => void
  openCookies: () => void
}

export function SiteFooter({ t, rest, openImprint, openPrivacy, openCookies }: FooterProps) {
  const open = useOpenStatus()

  return (
    <footer style={{ background: "#0c0a08", borderTop: "1px solid rgba(245,197,24,.16)", padding: "54px 24px 28px" }}>
      <div className="footer-grid" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gap: 34, alignItems: "start" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: "#15110e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(245,197,24,.4)",
                overflow: "hidden",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/antalya-logo.png" alt="Antalya" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </span>
            <span style={{ fontFamily: "var(--font-bricolage), sans-serif", fontWeight: 800, fontSize: 18 }}>
              ANTALYA DÖNER & KEBAB
            </span>
          </div>
          <p style={{ color: "rgba(247,239,227,.5)", fontSize: 14, margin: "16px 0 0", maxWidth: 320 }}>{rest.address}</p>
          <p style={{ color: "#e8401f", fontSize: 13, margin: "8px 0 0", fontWeight: 600 }}>{t.contact.noWhatsapp}</p>
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 11,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "#f5c518",
              marginBottom: 14,
            }}
          >
            {t.footer.hours}
          </div>
          <div style={{ fontSize: 14, color: "rgba(247,239,227,.7)", lineHeight: 2 }}>
            {t.contact.monSat}: {t.contact.monSatTime}
            <br />
            {t.contact.sun}: {t.contact.sunClosed}
          </div>
          {open !== null && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 14,
                padding: "6px 12px",
                borderRadius: 999,
                background: open ? "rgba(46,160,67,.12)" : "rgba(232,64,31,.12)",
                border: `1px solid ${open ? "rgba(46,160,67,.4)" : "rgba(232,64,31,.4)"}`,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: open ? "#2ea043" : "#e8401f",
                  boxShadow: `0 0 0 3px ${open ? "rgba(46,160,67,.22)" : "rgba(232,64,31,.22)"}`,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  color: open ? "#5fd178" : "#f5926f",
                }}
              >
                {open ? t.contact.openNow : t.contact.closedNow}
              </span>
            </div>
          )}
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 11,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "#f5c518",
              marginBottom: 14,
            }}
          >
            {t.footer.legal}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9, fontSize: 14 }}>
            <button onClick={openImprint} style={legalBtn}>
              {t.footer.imprint}
            </button>
            <button onClick={openPrivacy} style={legalBtn}>
              {t.footer.privacy}
            </button>
            <button onClick={openCookies} style={{ ...legalBtn, color: "#f7efe3" }}>
              {t.footer.cookies}
            </button>
            <a href={rest.phoneHref} style={{ color: "rgba(247,239,227,.7)", textDecoration: "none" }}>
              {rest.phone}
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1280,
          margin: "36px auto 0",
          paddingTop: 20,
          borderTop: "1px solid rgba(247,239,227,.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: 11.5, color: "rgba(247,239,227,.4)" }}>
          © 2025 {rest.name} — {t.footer.rights}
        </span>
        <div data-spin="" style={{ width: 168, height: 168, willChange: "transform", flexShrink: 0 }}>
          <SpinRing idSuffix="F" />
        </div>
      </div>
    </footer>
  )
}

const legalBtn: React.CSSProperties = {
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "rgba(247,239,227,.7)",
  fontSize: 14,
  padding: 0,
  textAlign: "start",
  fontFamily: "inherit",
}

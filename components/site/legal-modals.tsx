"use client"

import { useEffect } from "react"
import { REST } from "@/lib/data"

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

function Modal({ open, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(8,6,4,.78)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "5vh 16px",
        overflowY: "auto",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 720,
          background: "#15110e",
          border: "1px solid rgba(245,197,24,.22)",
          borderRadius: 20,
          padding: "32px clamp(20px,4vw,40px) 40px",
          boxShadow: "0 30px 80px rgba(0,0,0,.6)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 20 }}>
          <h2 style={{ fontFamily: "var(--font-bricolage), sans-serif", fontWeight: 800, fontSize: "clamp(1.4rem,4vw,1.9rem)", margin: 0 }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Schließen"
            style={{
              flexShrink: 0,
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "1px solid rgba(245,197,24,.3)",
              background: "#0c0a08",
              color: "#f5c518",
              cursor: "pointer",
              fontSize: 20,
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
        <div style={{ color: "rgba(247,239,227,.72)", fontSize: 15, lineHeight: 1.7 }}>{children}</div>
      </div>
    </div>
  )
}

const h3style: React.CSSProperties = {
  fontFamily: "var(--font-bricolage), sans-serif",
  fontWeight: 700,
  fontSize: 16,
  color: "#f7efe3",
  margin: "22px 0 8px",
}

export function ImprintModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose} title="Impressum">
      <p style={{ margin: 0 }}>Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</p>
      <h3 style={h3style}>Anbieter</h3>
      <p style={{ margin: 0 }}>
        {REST.name}
        <br />
        Inhaber: Faisal Syed
        <br />
        {REST.address}
        <br />
        Deutschland
      </p>
      <h3 style={h3style}>Kontakt</h3>
      <p style={{ margin: 0 }}>
        Telefon: {REST.phone}
        <br />
        E-Mail: {REST.email}
      </p>
      <h3 style={h3style}>Umsatzsteuer</h3>
      <p style={{ margin: 0 }}>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: auf Anfrage.
      </p>
      <h3 style={h3style}>Verbraucherstreitbeilegung</h3>
      <p style={{ margin: 0 }}>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </Modal>
  )
}

export function PrivacyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose} title="Datenschutz">
      <p style={{ margin: 0 }}>
        Der Schutz deiner persönlichen Daten ist uns wichtig. Diese Website verarbeitet personenbezogene Daten nur im technisch
        notwendigen Umfang.
      </p>
      <h3 style={h3style}>Verantwortlicher</h3>
      <p style={{ margin: 0 }}>
        {REST.name}, {REST.address}. E-Mail: {REST.email}, Telefon: {REST.phone}.
      </p>
      <h3 style={h3style}>Cookies</h3>
      <p style={{ margin: 0 }}>
        Wir verwenden ausschließlich technisch notwendige Cookies zur Speicherung deiner Sprachauswahl und deiner Bestellung. Optionale
        Cookies für die eingebettete Google-Maps-Karte werden erst nach deiner ausdrücklichen Zustimmung geladen.
      </p>
      <h3 style={h3style}>Google Maps</h3>
      <p style={{ margin: 0 }}>
        Bei Zustimmung wird die Kartendarstellung von Google Ireland Ltd. geladen. Dabei kann deine IP-Adresse an Google übertragen
        werden. Du kannst deine Einwilligung jederzeit über die Cookie-Einstellungen widerrufen.
      </p>
      <h3 style={h3style}>Deine Rechte</h3>
      <p style={{ margin: 0 }}>
        Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner Daten. Wende dich dazu
        an die oben genannten Kontaktdaten.
      </p>
    </Modal>
  )
}

export function CookieSettingsModal({
  open,
  onClose,
  onAcceptAll,
  onNecessaryOnly,
  t,
}: {
  open: boolean
  onClose: () => void
  onAcceptAll: () => void
  onNecessaryOnly: () => void
  t: any
}) {
  return (
    <Modal open={open} onClose={onClose} title={t.cookie.title}>
      <p style={{ margin: 0 }}>{t.cookie.text}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 24 }}>
        <button
          onClick={() => {
            onAcceptAll()
            onClose()
          }}
          style={{
            background: "#f5c518",
            color: "#15110e",
            border: "none",
            borderRadius: 999,
            padding: "12px 24px",
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          {t.cookie.acceptAll}
        </button>
        <button
          onClick={() => {
            onNecessaryOnly()
            onClose()
          }}
          style={{
            background: "transparent",
            color: "#f7efe3",
            border: "1px solid rgba(247,239,227,.25)",
            borderRadius: 999,
            padding: "12px 24px",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          {t.cookie.necessaryOnly}
        </button>
      </div>
    </Modal>
  )
}

"use client"

import { useEffect, useState } from "react"
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
  textShadow: "0 2px 8px rgba(0,0,0,.4)",
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

function Toggle({ checked, disabled, onChange }: { checked: boolean; disabled?: boolean; onChange?: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange?.(!checked)}
      style={{
        flexShrink: 0,
        width: 46,
        height: 26,
        borderRadius: 999,
        border: "none",
        padding: 3,
        cursor: disabled ? "not-allowed" : "pointer",
        background: checked ? "#f5c518" : "rgba(247,239,227,.2)",
        opacity: disabled ? 0.7 : 1,
        transition: "background .2s",
        display: "flex",
        justifyContent: checked ? "flex-end" : "flex-start",
        alignItems: "center",
      }}
    >
      <span
        style={{
          display: "block",
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: checked ? "#15110e" : "#f7efe3",
          transition: "background .2s",
        }}
      />
    </button>
  )
}

function CookieRow({
  title,
  desc,
  checked,
  disabled,
  badge,
  onChange,
}: {
  title: string
  desc: string
  checked: boolean
  disabled?: boolean
  badge?: string
  onChange?: (v: boolean) => void
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 16,
        padding: "16px 0",
        borderTop: "1px solid rgba(247,239,227,.1)",
      }}
    >
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-bricolage), sans-serif", fontWeight: 700, fontSize: 15.5, color: "#f7efe3" }}>
            {title}
          </span>
          {badge && (
            <span
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: 10.5,
                letterSpacing: ".05em",
                textTransform: "uppercase",
                color: "#f5c518",
                border: "1px solid rgba(245,197,24,.4)",
                borderRadius: 999,
                padding: "2px 8px",
              }}
            >
              {badge}
            </span>
          )}
        </div>
        <p style={{ margin: "6px 0 0", fontSize: 13.5, lineHeight: 1.55, color: "rgba(247,239,227,.6)" }}>{desc}</p>
      </div>
      <Toggle checked={checked} disabled={disabled} onChange={onChange} />
    </div>
  )
}

export function CookieSettingsModal({
  open,
  onClose,
  onAcceptAll,
  onNecessaryOnly,
  consent,
  t,
}: {
  open: boolean
  onClose: () => void
  onAcceptAll: () => void
  onNecessaryOnly: () => void
  consent: "all" | "necessary" | null
  t: any
}) {
  // Local selection for the optional Google Maps cookie.
  const [mapsAllowed, setMapsAllowed] = useState(consent === "all")

  // Sync the toggle with the saved consent whenever the modal opens.
  useEffect(() => {
    if (open) setMapsAllowed(consent === "all")
  }, [open, consent])

  const saveSelection = () => {
    if (mapsAllowed) onAcceptAll()
    else onNecessaryOnly()
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} title={t.cookie.settings}>
      <p style={{ margin: 0 }}>{t.cookie.text}</p>

      <div
        style={{
          fontFamily: "var(--font-space-mono), monospace",
          fontSize: 11,
          letterSpacing: ".18em",
          textTransform: "uppercase",
          color: "#f5c518",
          margin: "26px 0 2px",
        }}
      >
        {t.cookie.overview}
      </div>

      <div style={{ marginTop: 6 }}>
        <CookieRow
          title={t.cookie.necessaryTitle}
          desc={t.cookie.necessaryDesc}
          badge={t.cookie.alwaysOn}
          checked
          disabled
        />
        <CookieRow
          title={t.cookie.mapsTitle}
          desc={t.cookie.mapsDesc}
          checked={mapsAllowed}
          onChange={setMapsAllowed}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          marginTop: 26,
          paddingTop: 22,
          borderTop: "1px solid rgba(247,239,227,.1)",
        }}
      >
        <button
          onClick={saveSelection}
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
          {t.cookie.save}
        </button>
        <button
          onClick={() => {
            onAcceptAll()
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
          {t.cookie.acceptAll}
        </button>
      </div>
    </Modal>
  )
}

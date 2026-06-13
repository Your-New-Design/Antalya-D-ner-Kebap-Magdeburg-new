"use client"

interface CookieBannerProps {
  show: boolean
  t: any
  onAcceptAll: () => void
  onNecessaryOnly: () => void
}

export function CookieBanner({ show, t, onAcceptAll, onNecessaryOnly }: CookieBannerProps) {
  if (!show) return null

  return (
    <div
      role="dialog"
      aria-label={t.cookie.title}
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 180,
        maxWidth: 520,
        margin: "0 auto",
        background: "#15110e",
        border: "1px solid rgba(245,197,24,.28)",
        borderRadius: 18,
        padding: "22px 24px",
        boxShadow: "0 24px 60px rgba(0,0,0,.55)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-bricolage), sans-serif",
          fontWeight: 800,
          fontSize: 17,
          marginBottom: 8,
          color: "#f7efe3",
        }}
      >
        {t.cookie.title}
      </div>
      <p style={{ margin: 0, color: "rgba(247,239,227,.65)", fontSize: 14, lineHeight: 1.6 }}>{t.cookie.text}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 18 }}>
        <button
          onClick={onAcceptAll}
          style={{
            background: "#f5c518",
            color: "#15110e",
            border: "none",
            borderRadius: 999,
            padding: "11px 22px",
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "inherit",
            fontSize: 14,
          }}
        >
          {t.cookie.acceptAll}
        </button>
        <button
          onClick={onNecessaryOnly}
          style={{
            background: "transparent",
            color: "#f7efe3",
            border: "1px solid rgba(247,239,227,.25)",
            borderRadius: 999,
            padding: "11px 22px",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "inherit",
            fontSize: 14,
          }}
        >
          {t.cookie.necessaryOnly}
        </button>
      </div>
    </div>
  )
}

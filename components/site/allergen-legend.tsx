import { ALLERGEN_LEGEND, ALLERGENS } from "@/lib/data"

export function AllergenLegend() {
  // Only show allergens that actually occur in at least one dish or drink
  const usedKeys = new Set<string>()
  Object.values(ALLERGENS).forEach((list) => list.forEach((k) => usedKeys.add(k)))
  const legend = ALLERGEN_LEGEND.filter((a) => usedKeys.has(a.key))

  return (
    <section style={{ padding: "0 24px 64px" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          background: "rgba(247,239,227,.035)",
          border: "1px solid rgba(247,239,227,.1)",
          borderRadius: 20,
          padding: "clamp(20px,2.8vw,36px) clamp(20px,3vw,40px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 11,
              letterSpacing: ".28em",
              textTransform: "uppercase",
              color: "#e8401f",
            }}
          >
            ⚠ Allergenkennzeichnung
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
            gap: "6px 24px",
            marginBottom: 18,
          }}
        >
          {legend.map((a) => (
            <span
              key={a.key}
              style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: 11.5, color: "rgba(247,239,227,.65)" }}
            >
              <b style={{ color: "#f5c518" }}>{a.key}</b> = {a.label}
            </span>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(247,239,227,.1)", paddingTop: 14, display: "flex", alignItems: "flex-start", gap: 10 }}>
          <span style={{ fontSize: 18, flexShrink: 0 }}>ℹ️</span>
          <p
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 11.5,
              color: "rgba(247,239,227,.55)",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Bei Allergien oder Unverträglichkeiten bitten wir Sie, vor der Bestellung unser Personal zu informieren. Alle
            Angaben ohne Gewähr. Kreuzkontaminationen können trotz sorgfältiger Zubereitung nicht ausgeschlossen werden.
          </p>
        </div>
      </div>
    </section>
  )
}

"use client"

import { MARQUEE_WORDS } from "@/lib/data"

export function Marquee() {
  const words: { text: string; color: string }[] = []
  for (let r = 0; r < 2; r++) {
    MARQUEE_WORDS.forEach((w, i) => words.push({ text: w, color: i % 2 ? "#f5c518" : "#f7efe3" }))
  }
  return (
    <div
      style={{
        background: "#0c0a08",
        borderBlock: "1px solid rgba(245,197,24,.16)",
        overflow: "hidden",
        padding: "16px 0",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", width: "max-content", animation: "marquee 32s linear infinite" }}>
        {words.map((word, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 26,
              padding: "0 26px",
              fontFamily: "var(--font-bricolage), sans-serif",
              fontWeight: 800,
              textTransform: "uppercase",
              fontSize: 24,
              letterSpacing: ".02em",
              color: word.color,
              whiteSpace: "nowrap",
            }}
          >
            {word.text}
            <span style={{ color: "#e8401f", fontSize: 16 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function Stats({ lang }: { lang: string }) {
  const stats = [
    {
      to: 65,
      suffix: "",
      label:
        lang === "de"
          ? "Gerichte auf der Karte"
          : lang === "tr"
            ? "Menüde yemek"
            : lang === "ar"
              ? "طبقاً في القائمة"
              : "Dishes on the menu",
      hl: false,
    },
    {
      to: 8,
      suffix: "",
      label: lang === "de" ? "Kategorien" : lang === "tr" ? "Kategori" : lang === "ar" ? "فئات" : "Categories",
      hl: false,
    },
    {
      to: 5,
      suffix: "€",
      label:
        lang === "de"
          ? "Gerichte schon ab"
          : lang === "tr"
            ? "Yemekler şu fiyattan"
            : lang === "ar"
              ? "الأطباق ابتداءً من"
              : "Dishes starting at",
      hl: true,
    },
    {
      to: 10,
      suffix: lang === "ar" ? "–20" : "–20 Uhr",
      label:
        lang === "de"
          ? "Mo–Sa geöffnet"
          : lang === "tr"
            ? "Pzt–Cmt açık"
            : lang === "ar"
              ? "مفتوح الإثنين-السبت"
              : "Mon–Sat open",
      hl: false,
    },
  ]

  return (
    <section data-stats="" style={{ maxWidth: 1280, margin: "0 auto", padding: "74px 24px 30px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 18 }}>
        {stats.map((st, i) => (
          <div
            key={i}
            data-reveal=""
            style={{
              padding: 24,
              borderRadius: 18,
              background: st.hl
                ? "linear-gradient(165deg,rgba(245,197,24,.1),rgba(232,64,31,.06))"
                : "linear-gradient(165deg,rgba(247,239,227,.05),rgba(247,239,227,.02))",
              border: st.hl ? "1px solid rgba(245,197,24,.18)" : "1px solid rgba(247,239,227,.08)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-bricolage), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(46px,6vw,74px)",
                lineHeight: 1,
                background: "linear-gradient(160deg,#f5c518,#e8401f)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <span data-count="" data-to={st.to}>
                0
              </span>
              {st.suffix}
            </div>
            <div
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: 11.5,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "rgba(247,239,227,.58)",
                marginTop: 10,
              }}
            >
              {st.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

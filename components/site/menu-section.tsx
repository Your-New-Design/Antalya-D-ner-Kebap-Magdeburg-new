"use client"

import type { Cat, Lang } from "@/lib/data"
import { ALLERGENS, CATS, fmt, MENU } from "@/lib/data"

interface MenuProps {
  lang: Lang
  t: any
  cat: Cat
  setCat: (c: Cat) => void
  order: Record<string, number>
  add: (id: string) => void
  dec: (id: string) => void
  note: string
  setNote: (v: string) => void
  phone: string
  phoneHref: string
}

export function MenuSection({ lang, t, cat, setCat, order, add, dec, note, setNote, phone, phoneHref }: MenuProps) {
  const items = MENU[cat]
  const catTitle = t.categories[cat]

  const allItems: Record<string, (typeof MENU)[Cat][number]> = {}
  CATS.forEach((k) => MENU[k].forEach((m) => (allItems[m.id] = m)))
  const orderIds = Object.keys(order)
  const count = orderIds.reduce((a, id) => a + order[id], 0)
  const total = orderIds.reduce((a, id) => a + allItems[id].price * order[id], 0)

  return (
    <section id="menu" style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px 80px", scrollMarginTop: 90 }}>
      <div
        data-reveal=""
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
          marginBottom: 8,
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 12,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: "#e8401f",
            }}
          >
            01 — {t.menu.title}
          </span>
          <h2
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(40px,6vw,76px)",
              lineHeight: 0.92,
              letterSpacing: "-.02em",
              textTransform: "uppercase",
              margin: "10px 0 0",
            }}
          >
            {t.menu.title}
          </h2>
          <p style={{ color: "rgba(247,239,227,.6)", margin: "10px 0 0", fontSize: 16 }}>{t.menu.subtitle}</p>
        </div>
      </div>

      {/* Category tabs */}
      <div
        className="no-sb"
        style={{
          display: "flex",
          gap: 10,
          overflowX: "auto",
          padding: "22px 2px 6px",
          marginBottom: 8,
          scrollSnapType: "x proximity",
        }}
      >
        {CATS.map((k) => {
          const on = k === cat
          return (
            <button
              key={k}
              onClick={() => setCat(k)}
              style={{
                border: on ? "1px solid transparent" : "1px solid rgba(247,239,227,.16)",
                cursor: "pointer",
                whiteSpace: "nowrap",
                fontFamily: "var(--font-bricolage), sans-serif",
                fontWeight: 700,
                fontSize: 14.5,
                padding: "11px 18px",
                borderRadius: 999,
                transition: "all .25s",
                background: on ? "linear-gradient(105deg,#f5c518,#e8401f)" : "rgba(247,239,227,.04)",
                color: on ? "#15110e" : "rgba(247,239,227,.78)",
                boxShadow: on ? "0 10px 26px -10px rgba(232,64,31,.6)" : "none",
              }}
            >
              {t.categories[k]}
            </button>
          )
        })}
      </div>

      <div className="menu-grid" style={{ display: "grid", gap: 30, alignItems: "start", marginTop: 18 }}>
        {/* Items */}
        <div>
          <h3
            data-reveal=""
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontWeight: 800,
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: ".01em",
              color: "#f5c518",
              margin: "0 0 18px",
            }}
          >
            {catTitle}
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 14 }}>
            {items.map((m, i) => {
              const qty = order[m.id] || 0
              const d = m.desc[lang]
              const allergens = (ALLERGENS[m.id] || []).join(", ")
              return (
                <div
                  key={m.id}
                  data-reveal=""
                  style={{
                    transitionDelay: Math.min(i * 55, 330) + "ms",
                    position: "relative",
                    background: "linear-gradient(165deg,rgba(247,239,227,.055),rgba(247,239,227,.02))",
                    border: "1px solid rgba(247,239,227,.09)",
                    borderRadius: 18,
                    padding: 18,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    transition: "transform .3s,border-color .3s,box-shadow .3s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      {m.num && (
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span
                            style={{
                              fontFamily: "var(--font-space-mono), monospace",
                              fontSize: 11,
                              color: "#e8401f",
                              fontWeight: 700,
                            }}
                          >
                            {m.num}
                          </span>
                        </div>
                      )}
                      <h4
                        style={{
                          fontFamily: "var(--font-bricolage), sans-serif",
                          fontWeight: 700,
                          fontSize: 17,
                          lineHeight: 1.2,
                          margin: "3px 0 0",
                          color: "#f7efe3",
                        }}
                      >
                        {m.name[lang]}
                      </h4>
                    </div>
                  </div>
                  {d && (
                    <p style={{ fontSize: 13.5, color: "rgba(247,239,227,.55)", margin: 0, lineHeight: 1.45 }}>{d}</p>
                  )}
                  {allergens && (
                    <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", marginTop: 2 }}>
                      <span
                        style={{
                          fontFamily: "var(--font-space-mono), monospace",
                          fontSize: 10,
                          color: "rgba(247,239,227,.4)",
                          letterSpacing: ".06em",
                        }}
                      >
                        Allergene:
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-space-mono), monospace",
                          fontSize: 10.5,
                          fontWeight: 700,
                          color: "rgba(232,64,31,.85)",
                          letterSpacing: ".06em",
                        }}
                      >
                        {allergens}
                      </span>
                    </div>
                  )}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 10,
                      marginTop: "auto",
                      paddingTop: 6,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-bricolage), sans-serif",
                        fontWeight: 800,
                        fontSize: 20,
                        color: "#f5c518",
                      }}
                    >
                      {fmt(m.price)}
                    </span>
                    <button
                      onClick={() => add(m.id)}
                      aria-label={t.menu.add}
                      style={{
                        border: qty > 0 ? "none" : "1px solid rgba(245,197,24,.3)",
                        cursor: "pointer",
                        flexShrink: 0,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                        fontFamily: "var(--font-bricolage), sans-serif",
                        fontWeight: 800,
                        fontSize: 13,
                        borderRadius: 999,
                        padding: "9px 14px",
                        transition: "all .2s",
                        background: qty > 0 ? "linear-gradient(105deg,#f5c518,#e8401f)" : "rgba(245,197,24,.12)",
                        color: qty > 0 ? "#15110e" : "#f5c518",
                      }}
                    >
                      {qty > 0 ? String(qty) : "+"}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Cart sidebar */}
        <aside style={{ position: "sticky", top: 96 }}>
          <div
            style={{
              background: "linear-gradient(168deg,rgba(247,239,227,.07),rgba(247,239,227,.025))",
              border: "1px solid rgba(247,239,227,.12)",
              borderRadius: 22,
              padding: 22,
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 14 }}>
              <h3
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontWeight: 800,
                  fontSize: 20,
                  margin: 0,
                  textTransform: "uppercase",
                }}
              >
                {t.cart.title}
              </h3>
              <span
                style={{
                  fontFamily: "var(--font-space-mono), monospace",
                  fontSize: 12,
                  background: "rgba(232,64,31,.16)",
                  color: "#f5c518",
                  padding: "5px 11px",
                  borderRadius: 999,
                  fontWeight: 700,
                }}
              >
                {count}
              </span>
            </div>

            {count > 0 ? (
              <>
                <div className="no-sb" style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: 320, overflowY: "auto" }}>
                  {orderIds.map((id) => {
                    const m = allItems[id]
                    const q = order[id]
                    return (
                      <div
                        key={id}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          background: "rgba(21,17,14,.4)",
                          border: "1px solid rgba(247,239,227,.07)",
                          borderRadius: 13,
                          padding: "9px 11px",
                        }}
                      >
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            style={{
                              fontFamily: "var(--font-bricolage), sans-serif",
                              fontWeight: 600,
                              fontSize: 14,
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {m.name[lang]}
                          </div>
                          <div style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: 11.5, color: "#f5c518" }}>
                            {fmt(m.price * q)}
                          </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                          <button
                            onClick={() => dec(id)}
                            aria-label="−"
                            style={{
                              width: 26,
                              height: 26,
                              borderRadius: 8,
                              border: "1px solid rgba(247,239,227,.18)",
                              background: "transparent",
                              color: "#f7efe3",
                              cursor: "pointer",
                              fontSize: 16,
                              lineHeight: 1,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            −
                          </button>
                          <span
                            style={{
                              fontFamily: "var(--font-space-mono), monospace",
                              fontSize: 13,
                              minWidth: 16,
                              textAlign: "center",
                              fontWeight: 700,
                            }}
                          >
                            {q}
                          </span>
                          <button
                            onClick={() => add(id)}
                            aria-label="+"
                            style={{
                              width: 26,
                              height: 26,
                              borderRadius: 8,
                              border: "none",
                              background: "rgba(245,197,24,.16)",
                              color: "#f5c518",
                              cursor: "pointer",
                              fontSize: 15,
                              lineHeight: 1,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "16px 0 4px",
                    paddingTop: 14,
                    borderTop: "1px dashed rgba(247,239,227,.16)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-space-mono), monospace",
                      fontSize: 12,
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: "rgba(247,239,227,.6)",
                    }}
                  >
                    {t.cart.total}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-bricolage), sans-serif",
                      fontWeight: 800,
                      fontSize: 26,
                      color: "#f5c518",
                    }}
                  >
                    {fmt(total)}
                  </span>
                </div>

                <div style={{ margin: "14px 0" }}>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-space-mono), monospace",
                      fontSize: 10.5,
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      color: "rgba(247,239,227,.55)",
                      marginBottom: 7,
                    }}
                  >
                    {t.cart.noteLabel}
                  </label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder={t.cart.notePlaceholder}
                    style={{
                      width: "100%",
                      minHeight: 130,
                      background: "rgba(247,239,227,.05)",
                      border: "1px solid rgba(247,239,227,.14)",
                      borderRadius: 12,
                      color: "#f7efe3",
                      fontFamily: "var(--font-bricolage), sans-serif",
                      fontSize: 14,
                      padding: "11px 13px",
                      resize: "vertical",
                      outline: "none",
                      boxSizing: "border-box",
                      lineHeight: 1.5,
                    }}
                  />
                </div>
                <p style={{ fontSize: 12, color: "rgba(247,239,227,.5)", margin: "0 0 14px" }}>{t.cart.callInstruction}</p>
                <a
                  href={phoneHref}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 9,
                    textDecoration: "none",
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: ".03em",
                    fontSize: 15,
                    color: "#15110e",
                    background: "linear-gradient(105deg,#f5c518,#e8401f)",
                    padding: 15,
                    borderRadius: 14,
                    boxShadow: "0 14px 34px -12px rgba(232,64,31,.6)",
                  }}
                >
                  📞 {phone}
                </a>
                <p
                  style={{
                    fontFamily: "var(--font-space-mono), monospace",
                    fontSize: 10.5,
                    textAlign: "center",
                    color: "rgba(247,239,227,.4)",
                    margin: "12px 0 0",
                  }}
                >
                  {t.cart.payNote}
                </p>
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 10,
                  padding: "26px 10px 14px",
                }}
              >
                <span style={{ fontSize: 34, opacity: 0.7 }}>🥙</span>
                <div
                  style={{
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "rgba(247,239,227,.85)",
                  }}
                >
                  {t.cart.empty}
                </div>
                <div style={{ fontSize: 13, color: "rgba(247,239,227,.5)" }}>{t.cart.emptyHint}</div>
                <a
                  href={phoneHref}
                  style={{
                    marginTop: 10,
                    textDecoration: "none",
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    color: "#f5c518",
                    border: "1px solid rgba(245,197,24,.3)",
                    padding: "11px 18px",
                    borderRadius: 999,
                  }}
                >
                  📞 {phone}
                </a>
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  )
}

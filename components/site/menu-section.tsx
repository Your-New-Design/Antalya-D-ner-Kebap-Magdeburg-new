"use client"

import { useState } from "react"
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
  notes: Record<string, string>
  setItemNote: (id: string, v: string) => void
  phone: string
  phoneHref: string
}

export function MenuSection({ lang, t, cat, setCat, order, add, dec, notes, setItemNote, phone, phoneHref }: MenuProps) {
  const [cartOpen, setCartOpen] = useState(false)
  const [summaryOpen, setSummaryOpen] = useState(false)
  const items = MENU[cat]
  const catTitle = t.categories[cat]

  const allItems: Record<string, (typeof MENU)[Cat][number]> = {}
  CATS.forEach((k) => MENU[k].forEach((m) => (allItems[m.id] = m)))
  const orderIds = Object.keys(order)
  const count = orderIds.reduce((a, id) => a + order[id], 0)
  const total = orderIds.reduce((a, id) => a + allItems[id].price * order[id], 0)
  const hasItems = count > 0

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

      <div style={{ marginTop: 18 }}>
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
      </div>

      {/* Fixed cart: only appears once something has been added */}
      {hasItems && (
        <>
          {/* Backdrop when the cart is expanded */}
          {cartOpen && (
            <div
              onClick={() => setCartOpen(false)}
              aria-hidden="true"
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(10,8,6,.55)",
                backdropFilter: "blur(2px)",
                zIndex: 60,
              }}
            />
          )}

          <div
            style={{
              position: "fixed",
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 61,
              display: "flex",
              justifyContent: "center",
              padding: "0 12px env(safe-area-inset-bottom, 12px)",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 560,
                pointerEvents: "auto",
                background: "linear-gradient(168deg,rgba(35,28,22,.98),rgba(24,19,15,.98))",
                border: "1px solid rgba(247,239,227,.14)",
                borderBottom: "none",
                borderRadius: "22px 22px 0 0",
                boxShadow: "0 -20px 50px -20px rgba(0,0,0,.7)",
                overflow: "hidden",
              }}
            >
              {/* Collapsed bar with total — click to toggle */}
              <button
                onClick={() => setCartOpen((o) => !o)}
                aria-expanded={cartOpen}
                aria-label={t.cart.title}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  cursor: "pointer",
                  border: "none",
                  background: "transparent",
                  color: "#f7efe3",
                  padding: "14px 18px",
                  textAlign: "left",
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: 11 }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: 30,
                      height: 30,
                      padding: "0 9px",
                      borderRadius: 999,
                      background: "linear-gradient(105deg,#f5c518,#e8401f)",
                      color: "#15110e",
                      fontFamily: "var(--font-space-mono), monospace",
                      fontWeight: 700,
                      fontSize: 13,
                    }}
                  >
                    {count}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-bricolage), sans-serif",
                      fontWeight: 800,
                      fontSize: 15,
                      textTransform: "uppercase",
                      letterSpacing: ".02em",
                    }}
                  >
                    {t.cart.title}
                  </span>
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-bricolage), sans-serif",
                      fontWeight: 800,
                      fontSize: 20,
                      color: "#f5c518",
                    }}
                  >
                    {fmt(total)}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{
                      transform: cartOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform .25s",
                      opacity: 0.7,
                    }}
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </span>
              </button>

              {/* Expanded panel */}
              {cartOpen && (
                <div style={{ borderTop: "1px solid rgba(247,239,227,.1)" }}>
                  <div
                    className="no-sb"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      padding: "16px 18px 4px",
                      maxHeight: "min(52vh, 420px)",
                      overflowY: "auto",
                    }}
                  >
                    {orderIds.map((id) => {
                      const m = allItems[id]
                      const q = order[id]
                      return (
                        <div
                          key={id}
                          style={{
                            background: "rgba(21,17,14,.5)",
                            border: "1px solid rgba(247,239,227,.08)",
                            borderRadius: 14,
                            padding: 12,
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div
                                style={{
                                  fontFamily: "var(--font-bricolage), sans-serif",
                                  fontWeight: 600,
                                  fontSize: 14.5,
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {m.name[lang]}
                              </div>
                              <div
                                style={{
                                  fontFamily: "var(--font-space-mono), monospace",
                                  fontSize: 11.5,
                                  color: "#f5c518",
                                }}
                              >
                                {fmt(m.price * q)}
                              </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                              <button
                                onClick={() => dec(id)}
                                aria-label="−"
                                style={{
                                  width: 28,
                                  height: 28,
                                  borderRadius: 9,
                                  border: "1px solid rgba(247,239,227,.18)",
                                  background: "transparent",
                                  color: "#f7efe3",
                                  cursor: "pointer",
                                  fontSize: 17,
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
                                  width: 28,
                                  height: 28,
                                  borderRadius: 9,
                                  border: "none",
                                  background: "rgba(245,197,24,.16)",
                                  color: "#f5c518",
                                  cursor: "pointer",
                                  fontSize: 16,
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
                          {/* Per-item special request */}
                          <input
                            value={notes[id] || ""}
                            onChange={(e) => setItemNote(id, e.target.value)}
                            placeholder={t.cart.notePlaceholder}
                            aria-label={`${t.cart.noteLabel} — ${m.name[lang]}`}
                            style={{
                              width: "100%",
                              marginTop: 10,
                              background: "rgba(247,239,227,.05)",
                              border: "1px solid rgba(247,239,227,.14)",
                              borderRadius: 10,
                              color: "#f7efe3",
                              fontFamily: "var(--font-bricolage), sans-serif",
                              fontSize: 13,
                              padding: "9px 11px",
                              outline: "none",
                              boxSizing: "border-box",
                            }}
                          />
                        </div>
                      )
                    })}
                  </div>

                  <div style={{ padding: "12px 18px 16px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        margin: "4px 0 12px",
                        paddingTop: 12,
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
                    <p style={{ fontSize: 12, color: "rgba(247,239,227,.5)", margin: "0 0 12px" }}>
                      {t.cart.callInstruction}
                    </p>
                    <button
                      onClick={() => setSummaryOpen(true)}
                      style={{
                        width: "100%",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 9,
                        border: "none",
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
                      {t.cart.placeOrder}
                    </button>
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
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Order summary modal — opens when the phone button is clicked */}
      {summaryOpen && hasItems && (
        <div
          onClick={() => setSummaryOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={t.cart.title}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 18,
            background: "rgba(10,8,6,.7)",
            backdropFilter: "blur(3px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 460,
              maxHeight: "calc(100dvh - 36px)",
              overflowY: "auto",
              background: "linear-gradient(168deg,rgba(28,22,17,.99),rgba(18,14,11,.99))",
              border: "1px solid rgba(245,197,24,.55)",
              borderRadius: 22,
              boxShadow: "0 30px 80px -24px rgba(0,0,0,.8)",
              padding: "26px 26px 28px",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
              <h3
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontWeight: 800,
                  fontSize: 28,
                  textTransform: "uppercase",
                  letterSpacing: ".01em",
                  lineHeight: 1,
                  margin: 0,
                  color: "#f7efe3",
                }}
              >
                {t.cart.title}
              </h3>
              <button
                onClick={() => setSummaryOpen(false)}
                aria-label="✕"
                style={{
                  flexShrink: 0,
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  border: "1px solid rgba(247,239,227,.18)",
                  background: "transparent",
                  color: "#f7efe3",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  lineHeight: 1,
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "22px 0 0" }}>
              {orderIds.map((id) => {
                const m = allItems[id]
                const q = order[id]
                const itemNote = (notes[id] || "").trim()
                return (
                  <div key={id} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
                      <span style={{ display: "flex", gap: 9, minWidth: 0 }}>
                        <span
                          style={{
                            fontFamily: "var(--font-bricolage), sans-serif",
                            fontWeight: 800,
                            fontSize: 17,
                            color: "#f5c518",
                            flexShrink: 0,
                          }}
                        >
                          {q}×
                        </span>
                        <span style={{ fontFamily: "var(--font-bricolage), sans-serif", fontSize: 17, color: "#f7efe3" }}>
                          {m.name[lang]}
                        </span>
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-bricolage), sans-serif",
                          fontSize: 16,
                          color: "rgba(247,239,227,.6)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {fmt(m.price * q)}
                      </span>
                    </div>
                    {itemNote && (
                      <p
                        style={{
                          margin: 0,
                          paddingLeft: 28,
                          fontFamily: "var(--font-space-mono), monospace",
                          fontSize: 12.5,
                          lineHeight: 1.4,
                          color: "#f3b955",
                        }}
                      >
                        {t.cart.noteLabel}: {itemNote}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>

            <div style={{ borderTop: "1px solid rgba(247,239,227,.14)", margin: "22px 0 0", paddingTop: 20 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <span
                  style={{
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontWeight: 800,
                    fontSize: 18,
                    textTransform: "uppercase",
                    letterSpacing: ".02em",
                    color: "#f7efe3",
                  }}
                >
                  {t.cart.grandTotal}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontWeight: 800,
                    fontSize: 30,
                    color: "#f5c518",
                    whiteSpace: "nowrap",
                  }}
                >
                  {fmt(total)}
                </span>
              </div>
            </div>

            <p
              style={{
                textAlign: "center",
                fontFamily: "var(--font-bricolage), sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: "#f7efe3",
                margin: "26px 0 16px",
              }}
            >
              {t.cart.callInstruction}
            </p>

            <a
              href={phoneHref}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 11,
                textDecoration: "none",
                fontFamily: "var(--font-bricolage), sans-serif",
                fontWeight: 800,
                fontSize: 22,
                color: "#f7efe3",
                background: "#c0241a",
                padding: "18px 16px",
                borderRadius: 16,
                boxShadow: "0 18px 40px -14px rgba(192,36,26,.7)",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {phone}
            </a>

            <p
              style={{
                textAlign: "center",
                fontFamily: "var(--font-bricolage), sans-serif",
                fontWeight: 700,
                fontSize: 14,
                color: "#e8401f",
                margin: "16px 0 0",
              }}
            >
              {t.cart.noWhatsapp}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

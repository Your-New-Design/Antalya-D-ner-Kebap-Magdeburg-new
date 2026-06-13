"use client"

import type { Lang } from "@/lib/data"
import { FLAGS, LANG_LIST } from "@/lib/data"

interface HeaderProps {
  lang: Lang
  setLang: (l: Lang) => void
  t: any
  phoneHref: string
}

export function SiteHeader({ lang, setLang, t, phoneHref }: HeaderProps) {
  return (
    <header
      data-header=""
      style={{
        position: "fixed",
        top: 0,
        insetInline: 0,
        zIndex: 80,
        borderBottom: "1px solid transparent",
        transition: "background .4s,border-color .4s,backdrop-filter .4s,padding .3s",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <a
          href="#top"
          style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "inherit", flexShrink: 0 }}
        >
          <span
            style={{
              width: 46,
              height: 46,
              borderRadius: "50%",
              background: "#0c0a08",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(245,197,24,.4)",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/antalya-logo.png"
              alt="Antalya Döner & Kebab"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </span>
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1, gap: 2 }}>
            <span style={{ fontFamily: "var(--font-kaushan), cursive", color: "#e52229", fontSize: 24, lineHeight: 0.95 }}>
              Antalya
            </span>
            <span
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: 9,
                letterSpacing: ".22em",
                color: "rgba(247,239,227,.7)",
              }}
            >
              DÖNER & KEBAB
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex" style={{ alignItems: "center", gap: 30 }}>
          {(["menu", "about", "contact"] as const).map((key) => (
            <a
              key={key}
              href={`#${key}`}
              style={{
                textDecoration: "none",
                color: "rgba(247,239,227,.82)",
                fontFamily: "var(--font-bricolage), sans-serif",
                fontWeight: 600,
                fontSize: 16,
                transition: "color .25s",
              }}
            >
              {t.nav[key]}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              display: "inline-flex",
              gap: 8,
              padding: 8,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,.12)",
              background: "rgba(255,255,255,.045)",
              alignItems: "center",
            }}
          >
            {LANG_LIST.map((l) => {
              const on = l.code === lang
              return (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  aria-label={l.label}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    border: on ? "2px solid #e6a23a" : "2px solid transparent",
                    borderRadius: 12,
                    height: 48,
                    minWidth: 68,
                    padding: "0 14px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    background: "transparent",
                    transition: "border-color .2s",
                  }}
                >
                  <span
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.9 }}
                    dangerouslySetInnerHTML={{ __html: FLAGS[l.code] }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: on ? "rgba(8,10,14,.32)" : "rgba(8,10,14,.58)",
                      transition: "background .2s",
                    }}
                  />
                  <span
                    style={{
                      position: "relative",
                      fontFamily: "var(--font-space-mono), monospace",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: ".06em",
                      color: on ? "#f3b955" : "#eceef1",
                    }}
                  >
                    {l.label}
                  </span>
                </button>
              )
            })}
            <a
              href={phoneHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                textDecoration: "none",
                fontFamily: "var(--font-bricolage), sans-serif",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: ".03em",
                fontSize: 12.5,
                color: "#15110e",
                background: "linear-gradient(105deg,#f5c518,#e8401f)",
                padding: "11px 17px",
                borderRadius: 999,
                whiteSpace: "nowrap",
              }}
            >
              {t.nav.callOrder}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

"use client"

import type { Lang } from "@/lib/data"
import { FLAGS, LANG_LIST } from "@/lib/data"

interface HeaderProps {
  lang: Lang
  setLang: (l: Lang) => void
  t: any
  phoneHref: string
  reviewHref: string
}

export function SiteHeader({ lang, setLang, t, phoneHref, reviewHref }: HeaderProps) {
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
        className="px-4 py-3 md:px-6 md:py-[14px]"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
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
          <span className="hidden md:flex" style={{ flexDirection: "column", lineHeight: 1, gap: 2 }}>
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
            className="gap-1 p-1 md:gap-2 md:p-2"
            style={{
              display: "inline-flex",
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
                  className="h-9 min-w-[40px] px-2 md:h-12 md:min-w-[68px] md:px-[14px]"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    border: on ? "2px solid #e6a23a" : "2px solid transparent",
                    borderRadius: 12,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    background: "transparent",
                    transition: "border-color .2s",
                  }}
                >
                  <span
                    className="flag-fill"
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
              href={reviewHref}
              target="_blank"
              rel="noopener"
              aria-label={t.nav.review}
              className="px-3 py-2.5 md:px-[15px] md:py-[11px]"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                textDecoration: "none",
                fontFamily: "var(--font-bricolage), sans-serif",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: ".03em",
                fontSize: 12.5,
                color: "#f3b955",
                background: "rgba(245,197,24,.1)",
                border: "1px solid rgba(245,197,24,.35)",
                borderRadius: 999,
                whiteSpace: "nowrap",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                style={{ flexShrink: 0 }}
              >
                <path d="M12 2l2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.02 6.1 20.13l1.13-6.57L2.45 8.9l6.6-.96L12 2z" />
              </svg>
              <span className="hidden md:inline">{t.nav.review}</span>
            </a>
            <a
              href={phoneHref}
              aria-label={t.nav.callOrder}
              className="px-3 py-2.5 md:px-[17px] md:py-[11px]"
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
                borderRadius: 999,
                whiteSpace: "nowrap",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flexShrink: 0 }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="hidden md:inline">{t.nav.callOrder}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

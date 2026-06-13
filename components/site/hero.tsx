"use client"

import { SpinRing } from "@/components/spin-ring"

export function Hero({ t }: { t: any }) {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        padding: "150px 24px 70px",
      }}
    >
      <div data-parallax="" style={{ position: "absolute", inset: "-5% 0", zIndex: 0, willChange: "transform" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/storefront-blurred.jpg"
          alt="Antalya Döner & Kebab Imbiss am Florapark in Magdeburg"
          style={{ width: "100%", height: "110%", objectFit: "cover", objectPosition: "center top" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg,rgba(21,17,14,.72) 0%,rgba(21,17,14,.42) 34%,rgba(21,17,14,.8) 74%,#15110e 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: "radial-gradient(120% 70% at 50% 4%,rgba(232,64,31,.22),transparent 56%)",
        }}
      />

      <div
        data-spin=""
        className="hidden xl:block"
        style={{ position: "absolute", top: 110, insetInlineEnd: "5%", zIndex: 2, width: 168, height: 168, willChange: "transform" }}
      >
        <SpinRing />
      </div>

      <div style={{ position: "relative", zIndex: 3, maxWidth: 1280, margin: "0 auto", width: "100%" }}>
        <div data-reveal="">
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 12,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: "#f5c518",
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ width: 26, height: 2, background: "#e8401f", display: "inline-block" }} />
            Magdeburg · Am Florapark
          </span>
        </div>
        <h1 style={{ lineHeight: 0.82, margin: "4px 0 0", position: "relative", zIndex: 10 }}>
          <span
            data-reveal=""
            style={{
              display: "block",
              fontFamily: "var(--font-kaushan), cursive",
              color: "#e52229",
              fontSize: "clamp(58px,11vw,150px)",
              lineHeight: 0.9,
              textShadow: "0 4px 28px rgba(229,34,41,.4)",
              transitionDelay: ".05s",
            }}
          >
            Antalya
          </span>
        </h1>
        <span
          style={{
            display: "block",
            position: "relative",
            zIndex: 20,
            fontSize: "clamp(58px,11.5vw,168px)",
            lineHeight: 0.86,
            background: "linear-gradient(180deg,#ffffff 6%,#d6d8de 38%,#8b8e96 60%,#eef0f4 88%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 3px 10px rgba(0,0,0,.5))",
            fontFamily: "var(--font-bricolage), sans-serif",
            fontWeight: 800,
            textTransform: "uppercase",
          }}
        >
          Döner <span style={{ fontSize: "clamp(34px,6vw,86px)" }}>&amp; Kebab</span>
        </span>
        <p
          data-reveal=""
          style={{
            fontSize: "clamp(17px,2vw,23px)",
            color: "rgba(247,239,227,.82)",
            maxWidth: 560,
            margin: "22px 0 0",
            transitionDelay: ".2s",
          }}
        >
          {t.hero.subline}
        </p>
        <div
          data-reveal=""
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            alignItems: "center",
            marginTop: 32,
            transitionDelay: ".3s",
          }}
        >
          <a
            href="#menu"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              fontFamily: "var(--font-bricolage), sans-serif",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: ".04em",
              fontSize: 15,
              color: "#15110e",
              background: "linear-gradient(105deg,#f5c518,#e8401f)",
              padding: "16px 28px",
              borderRadius: 999,
              boxShadow: "0 14px 40px -10px rgba(232,64,31,.6)",
            }}
          >
            {t.hero.preorder} →
          </a>
          <a
            href="#menu"
            style={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              fontFamily: "var(--font-bricolage), sans-serif",
              fontWeight: 700,
              fontSize: 15,
              color: "#f7efe3",
              border: "1px solid rgba(247,239,227,.28)",
              padding: "16px 26px",
              borderRadius: 999,
            }}
          >
            {t.hero.toMenu}
          </a>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 13,
              color: "rgba(247,239,227,.6)",
            }}
          >
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "#46d17a",
                boxShadow: "0 0 0 4px rgba(70,209,122,.18)",
                flexShrink: 0,
              }}
            />
            {t.hero.hours}
          </span>
        </div>
      </div>
    </section>
  )
}

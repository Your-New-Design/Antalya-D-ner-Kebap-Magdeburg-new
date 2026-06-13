"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import type { Cat, Lang } from "@/lib/data"
import { REST, SIG, TR } from "@/lib/data"
import { useScrollEffects } from "@/components/use-scroll-effects"
import { SiteHeader } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { Marquee, Stats } from "@/components/site/marquee-stats"
import { Signature } from "@/components/site/signature"
import { MenuSection } from "@/components/site/menu-section"
import { AllergenLegend } from "@/components/site/allergen-legend"
import { About } from "@/components/site/about"
import { Contact } from "@/components/site/contact"
import { SiteFooter } from "@/components/site/footer"
import { CookieBanner } from "@/components/site/cookie-banner"
import { ImprintModal, PrivacyModal, CookieSettingsModal } from "@/components/site/legal-modals"

const LANG_KEY = "antalya_lang"
const ORDER_KEY = "antalya_order"
const NOTE_KEY = "antalya_note"
const COOKIE_KEY = "antalya_cookie_consent"

export function AntalyaSite() {
  const [lang, setLangState] = useState<Lang>("de")
  const [cat, setCat] = useState<Cat>("doner")
  const [order, setOrder] = useState<Record<string, number>>({})
  const [note, setNote] = useState("")
  const [mounted, setMounted] = useState(false)

  const [imprintOpen, setImprintOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [cookieSettingsOpen, setCookieSettingsOpen] = useState(false)

  // null = no choice yet, "all" | "necessary"
  const [consent, setConsent] = useState<"all" | "necessary" | null>(null)

  useScrollEffects([cat, lang])

  // Restore persisted state once on mount.
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(LANG_KEY) as Lang | null
      if (savedLang && ["de", "en", "tr", "ar"].includes(savedLang)) setLangState(savedLang)
      const savedOrder = localStorage.getItem(ORDER_KEY)
      if (savedOrder) setOrder(JSON.parse(savedOrder))
      const savedNote = localStorage.getItem(NOTE_KEY)
      if (savedNote) setNote(savedNote)
      const savedConsent = localStorage.getItem(COOKIE_KEY) as "all" | "necessary" | null
      if (savedConsent === "all" || savedConsent === "necessary") setConsent(savedConsent)
    } catch {
      /* ignore */
    }
    setMounted(true)
  }, [])

  // Persist + reflect language on <html>.
  useEffect(() => {
    if (!mounted) return
    try {
      localStorage.setItem(LANG_KEY, lang)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  }, [lang, mounted])

  useEffect(() => {
    if (!mounted) return
    try {
      localStorage.setItem(ORDER_KEY, JSON.stringify(order))
    } catch {
      /* ignore */
    }
  }, [order, mounted])

  useEffect(() => {
    if (!mounted) return
    try {
      localStorage.setItem(NOTE_KEY, note)
    } catch {
      /* ignore */
    }
  }, [note, mounted])

  const setLang = useCallback((l: Lang) => setLangState(l), [])

  const add = useCallback((id: string) => {
    setOrder((o) => ({ ...o, [id]: (o[id] || 0) + 1 }))
  }, [])

  const dec = useCallback((id: string) => {
    setOrder((o) => {
      const next = { ...o }
      const v = (next[id] || 0) - 1
      if (v <= 0) delete next[id]
      else next[id] = v
      return next
    })
  }, [])

  const acceptAll = useCallback(() => {
    setConsent("all")
    try {
      localStorage.setItem(COOKIE_KEY, "all")
    } catch {
      /* ignore */
    }
  }, [])

  const necessaryOnly = useCallback(() => {
    setConsent("necessary")
    try {
      localStorage.setItem(COOKIE_KEY, "necessary")
    } catch {
      /* ignore */
    }
  }, [])

  const t = useMemo(() => TR[lang], [lang])
  const sig = useMemo(() => SIG[lang], [lang])

  const scrollToMenu = useCallback(() => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const mapAllowed = consent === "all"

  return (
    <>
      <SiteHeader lang={lang} setLang={setLang} t={t} phoneHref={REST.phoneHref} />

      <main>
        <Hero t={t} />
        <Marquee />
        <Stats lang={lang} />
        <Signature sig={sig} onOrder={scrollToMenu} />
        <About t={t} sig={sig} badges={[t.about.badge1, t.about.badge2, t.about.badge3]} onOrder={scrollToMenu} />
        <MenuSection
          lang={lang}
          t={t}
          cat={cat}
          setCat={setCat}
          order={order}
          add={add}
          dec={dec}
          note={note}
          setNote={setNote}
          phone={REST.phone}
          phoneHref={REST.phoneHref}
        />
        <AllergenLegend />
        <Contact t={t} rest={REST} mapAllowed={mapAllowed} />
      </main>

      <SiteFooter
        t={t}
        rest={REST}
        openImprint={() => setImprintOpen(true)}
        openPrivacy={() => setPrivacyOpen(true)}
        openCookies={() => setCookieSettingsOpen(true)}
      />

      <CookieBanner show={mounted && consent === null} t={t} onAcceptAll={acceptAll} onNecessaryOnly={necessaryOnly} />

      <ImprintModal open={imprintOpen} onClose={() => setImprintOpen(false)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <CookieSettingsModal
        open={cookieSettingsOpen}
        onClose={() => setCookieSettingsOpen(false)}
        onAcceptAll={acceptAll}
        onNecessaryOnly={necessaryOnly}
        t={t}
      />
    </>
  )
}

"use client"

import { useEffect } from "react"

/**
 * Replicates the original scroll-driven effects:
 * - progress bar width
 * - header background on scroll
 * - hero parallax
 * - rotating spin rings
 * - reveal-on-scroll via IntersectionObserver
 * - stats count-up
 */
export function useScrollEffects(deps: unknown[] = []) {
  useEffect(() => {
    const seen = new WeakSet<Element>()
    let raf: number | null = null

    const tick = () => {
      const sy = window.scrollY || 0
      const max = document.documentElement.scrollHeight - window.innerHeight || 1

      const pb = document.querySelector<HTMLElement>("[data-progress]")
      if (pb) pb.style.width = Math.min(100, (sy / max) * 100) + "%"

      const hd = document.querySelector<HTMLElement>("[data-header]")
      if (hd) {
        if (sy > 40) {
          hd.style.background = "rgba(12,10,8,.82)"
          hd.style.backdropFilter = "blur(14px)"
          hd.style.borderBottomColor = "rgba(247,239,227,.1)"
        } else {
          hd.style.background = "transparent"
          hd.style.backdropFilter = "none"
          hd.style.borderBottomColor = "transparent"
        }
      }

      const px = document.querySelector<HTMLElement>("[data-parallax]")
      if (px && sy < window.innerHeight * 1.2) px.style.transform = "translateY(" + sy * 0.32 + "px)"

      document.querySelectorAll<HTMLElement>("[data-spin]").forEach((sp) => {
        sp.style.transform = "rotate(" + sy * 0.06 + "deg)"
      })
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = null
        tick()
      })
    }

    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute("data-rv", "in")
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )

    const countUp = () => {
      document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const to = Number.parseFloat(el.getAttribute("data-to") || "0") || 0
        const t0 = performance.now()
        const dur = 1300
        const step = (now: number) => {
          const p = Math.min(1, (now - t0) / dur)
          const e = 1 - Math.pow(1 - p, 3)
          el.textContent = Math.round(to * e).toString()
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      })
    }

    const statsIO = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            countUp()
            statsIO.disconnect()
          }
        })
      },
      { threshold: 0.4 },
    )

    const wire = () => {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        if (!seen.has(el)) {
          seen.add(el)
          io.observe(el)
        }
      })
      const s = document.querySelector("[data-stats]")
      if (s) statsIO.observe(s)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    const wireTimer = setTimeout(wire, 30)
    const tickTimer = setTimeout(tick, 60)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      io.disconnect()
      statsIO.disconnect()
      clearTimeout(wireTimer)
      clearTimeout(tickTimer)
      if (raf) cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

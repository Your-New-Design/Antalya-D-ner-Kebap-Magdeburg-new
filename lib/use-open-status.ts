"use client"

import { useEffect, useState } from "react"

// Opening hours of the shop: Mon–Sat 10:00–20:00, Sunday closed.
// Evaluated in the restaurant's timezone (Europe/Berlin) so the status is
// correct no matter where the visitor is located.
export function computeOpen(): boolean {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "Europe/Berlin",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).formatToParts(new Date())
    const weekday = parts.find((p) => p.type === "weekday")?.value ?? ""
    const hour = Number.parseInt(parts.find((p) => p.type === "hour")?.value ?? "0", 10)
    const minute = Number.parseInt(parts.find((p) => p.type === "minute")?.value ?? "0", 10)
    if (weekday === "Sun") return false // closed on Sundays
    const minutes = hour * 60 + minute
    return minutes >= 10 * 60 && minutes < 20 * 60 // 10:00–20:00
  } catch {
    return false
  }
}

// Returns null until mounted (avoids a hydration mismatch), then true/false.
// Re-checks every minute so the status flips at opening/closing time.
export function useOpenStatus(): boolean | null {
  const [open, setOpen] = useState<boolean | null>(null)

  useEffect(() => {
    setOpen(computeOpen())
    const id = setInterval(() => setOpen(computeOpen()), 60_000)
    return () => clearInterval(id)
  }, [])

  return open
}

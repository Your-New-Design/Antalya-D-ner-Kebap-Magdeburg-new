import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, Hanken_Grotesk, Space_Mono, Kaushan_Script, Cairo } from "next/font/google"
import "./globals.css"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
})

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
})

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kaushan",
  display: "swap",
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Antalya Döner & Kebab — Magdeburg am Florapark",
  description:
    "Magdeburgs heißester Döner — frisch geschnitten am Florapark. Authentischer türkischer Döner, Dürüm, Lahmacun & mehr. Am Florapark 125, 39128 Magdeburg.",
  keywords: ["Döner", "Kebab", "Magdeburg", "Florapark", "Dürüm", "Lahmacun", "türkisches Essen"],
  openGraph: {
    title: "Antalya Döner & Kebab — Magdeburg",
    description: "Magdeburgs heißester Döner — frisch geschnitten am Florapark.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#15110e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="de"
      className={`${bricolage.variable} ${hanken.variable} ${spaceMono.variable} ${kaushan.variable} ${cairo.variable} bg-background`}
    >
      <body>{children}</body>
    </html>
  )
}

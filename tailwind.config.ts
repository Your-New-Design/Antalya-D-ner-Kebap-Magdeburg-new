import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-hanken)", "sans-serif"],
        disp: ["var(--font-bricolage)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
        script: ["var(--font-kaushan)", "cursive"],
      },
    },
  },
  plugins: [],
}

export default config

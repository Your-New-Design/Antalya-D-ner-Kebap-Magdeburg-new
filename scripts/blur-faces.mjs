import sharp from "sharp"

const SRC = "scripts/storefront-source.jpg"
const OUT = "public/assets/storefront-blurred.jpg"

const W = 1426
const H = 950

// Feathered white mask over the band where the people's faces are (right side queue + cook at window).
// Heavy SVG blur on the white shape creates soft, attractive edges (no hard rectangle).
// Transparent background + feathered white shape. dest-in keys off ALPHA,
// so only this soft-edged region of the blurred copy survives.
const mask = Buffer.from(
  `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
     <defs><filter id="f" x="-40%" y="-40%" width="180%" height="180%">
       <feGaussianBlur stdDeviation="30"/>
     </filter></defs>
     <g filter="url(#f)" fill="#ffffff">
       <rect x="690" y="450" width="735" height="175" rx="55"/>
     </g>
   </svg>`,
)

const base = sharp(SRC)

// Full-frame strongly blurred copy, masked to only show within the feathered face band.
const blurredBand = await sharp(SRC)
  .blur(14)
  .ensureAlpha()
  .composite([{ input: mask, blend: "dest-in" }])
  .png()
  .toBuffer()

await base
  // keep the storefront crisp and attractive; only the feathered face band is blurred
  .composite([{ input: blurredBand }])
  .jpeg({ quality: 90 })
  .toFile(OUT)

console.log("[v0] wrote", OUT)

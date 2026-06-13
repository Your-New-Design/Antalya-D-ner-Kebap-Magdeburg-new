export function SpinRing({ idSuffix = "" }: { idSuffix?: string }) {
  const ringId = `ring${idSuffix}`
  const clipId = `innerClip${idSuffix}`
  return (
    <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%", overflow: "visible" }}>
      <defs>
        <path id={ringId} d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        <clipPath id={clipId}>
          <circle cx="100" cy="100" r="54" />
        </clipPath>
      </defs>
      <circle cx="100" cy="100" r="96" fill="rgba(10,6,2,.72)" />
      <circle cx="100" cy="100" r="96" fill="none" stroke="rgba(245,197,24,.5)" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="55" fill="#060401" />
      <circle cx="100" cy="100" r="55" fill="none" stroke="rgba(245,197,24,.32)" strokeWidth="1" />
      <image
        href="/assets/mascot.png"
        x="59"
        y="6"
        width="82"
        height="199"
        clipPath={`url(#${clipId})`}
        preserveAspectRatio="xMidYMin meet"
      />
      <text
        fill="#f5c518"
        style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: "13px", letterSpacing: "5px", fontWeight: 700 }}
      >
        <textPath href={`#${ringId}`} startOffset="0">
          FRISCH VOM SPIEß · AM FLORAPARK 125 ·
        </textPath>
      </text>
    </svg>
  )
}

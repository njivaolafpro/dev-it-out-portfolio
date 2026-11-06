/** Four-point star used as the recurring ornament of the art direction. */
export function Sparkle({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0c.9 6.9 4.1 10.6 12 12-7.9 1.4-11.1 5.1-12 12-.9-6.9-4.1-10.6-12-12C7.9 10.6 11.100 6.9 12 0Z" />
    </svg>
  );
}

/** Curved light trail with a flare, for the contact panel. */
export function GoldSweep({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 640 220" preserveAspectRatio="none" fill="none">
      <defs>
        <linearGradient id="sweep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#b98f57" stopOpacity="0" />
          <stop offset=".6" stopColor="#d3ac72" stopOpacity=".65" />
          <stop offset="1" stopColor="#f0dcb6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 214C180 208 372 168 500 44" stroke="url(#sweep)" pathLength={1} />
      <path d="M0 200C190 202 384 150 506 36" stroke="url(#sweep)" pathLength={1} strokeOpacity=".7" />
      <path d="M40 220C230 214 416 178 522 58" stroke="url(#sweep)" pathLength={1} strokeOpacity=".45" />
      <path d="M120 220C290 206 450 160 540 72" stroke="url(#sweep)" pathLength={1} strokeOpacity=".3" />
    </svg>
  );
}

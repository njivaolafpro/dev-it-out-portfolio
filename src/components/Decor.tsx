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

const leaf = 'M0 0C46-34 138-44 232-6 150 36 52 40 0 0Z';
const veins = [
  'M0 0C70-4 150-6 232-6',
  'M42-1C60-14 78-22 98-27',
  'M84-3C104-16 124-24 146-27',
  'M128-4C146-13 164-18 182-19',
  'M42-1C62 8 82 14 104 16',
  'M84-3C106 8 128 13 150 13',
  'M128-4C148 3 168 6 188 6',
];

function Leaf({ transform, tone }: { transform: string; tone: 'gold' | 'dark' }) {
  return (
    <g transform={transform}>
      <path
        d={leaf}
        fill={tone === 'gold' ? 'url(#leaf-gold)' : 'url(#leaf-dark)'}
        stroke="url(#leaf-rim)"
        strokeWidth={tone === 'gold' ? 0.6 : 0.9}
      />
      {veins.map((vein) => (
        <path
          key={vein}
          d={vein}
          fill="none"
          stroke={tone === 'gold' ? '#2a1e0f' : '#b98f57'}
          strokeOpacity={tone === 'gold' ? 0.35 : 0.3}
          strokeWidth="0.6"
        />
      ))}
    </g>
  );
}

/** Dark foliage with gold rims, for the contents panel. */
export function GoldLeaves({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 320 240" preserveAspectRatio="xMaxYMid slice">
      <defs>
        <linearGradient id="leaf-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5d4221" />
          <stop offset=".55" stopColor="#d3ac72" />
          <stop offset="1" stopColor="#f0dcb6" />
        </linearGradient>
        <linearGradient id="leaf-dark" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0d0b08" />
          <stop offset="1" stopColor="#1e1912" />
        </linearGradient>
        <linearGradient id="leaf-rim" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3f2f1a" />
          <stop offset="1" stopColor="#d3ac72" />
        </linearGradient>
      </defs>
      <Leaf tone="dark" transform="translate(120 250) rotate(-12) scale(1.25)" />
      <Leaf tone="dark" transform="translate(90 240) rotate(-30) scale(1.4)" />
      <Leaf tone="dark" transform="translate(150 215) rotate(-50) scale(1.15)" />
      <Leaf tone="dark" transform="translate(190 250) rotate(-75) scale(1.2)" />
      <Leaf tone="gold" transform="translate(58 250) rotate(-82) scale(1.12 .82)" />
      <Leaf tone="dark" transform="translate(245 240) rotate(-95) scale(1.05)" />
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
      <path d="M0 214C180 208 372 168 500 44" stroke="url(#sweep)" />
      <path d="M0 200C190 202 384 150 506 36" stroke="url(#sweep)" strokeOpacity=".7" />
      <path d="M40 220C230 214 416 178 522 58" stroke="url(#sweep)" strokeOpacity=".45" />
      <path d="M120 220C290 206 450 160 540 72" stroke="url(#sweep)" strokeOpacity=".3" />
    </svg>
  );
}

export default function Nebula({ className = "" }: { className?: string }) {
  return (
    <div className={className} aria-hidden>

<svg viewBox="0 0 1200 800" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <filter id="nebula-noise" x="-50%" y="-50%" width="200%" height="200%">
      <feTurbulence type="fractalNoise" baseFrequency="0.006" numOctaves="3" seed="8" result="noise"/>
      <feColorMatrix type="saturate" values="1.2"/>
      <feGaussianBlur stdDeviation="18"/>
    </filter>

    <radialGradient id="core" cx="50%" cy="50%" r="60%">
      <stop offset="0%"  stop-color="#c4b5fd" stop-opacity="0.95"/>
      <stop offset="35%" stop-color="#8b5cf6" stop-opacity="0.6"/>
      <stop offset="65%" stop-color="#22d3ee" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#ec4899" stop-opacity="0.0"/>
    </radialGradient>
  </defs>

  <g filter="url(#nebula-noise)">
    <path fill="url(#core)" d="
      M 280,420
      C 260,300 420,260 520,300
      C 640,260 780,320 820,410
      C 980,420 980,560 840,590
      C 780,680 600,660 520,600
      C 440,660 300,610 320,500
      Z" opacity="0.9"/>

    <ellipse cx="760" cy="470" rx="260" ry="140" fill="#8b5cf6" opacity="0.25"/>
    <ellipse cx="500" cy="360" rx="300" ry="150" fill="#22d3ee" opacity="0.2"/>
    <ellipse cx="420" cy="540" rx="240" ry="130" fill="#ec4899" opacity="0.18"/>
  </g>
</svg>

    </div>
  );
}

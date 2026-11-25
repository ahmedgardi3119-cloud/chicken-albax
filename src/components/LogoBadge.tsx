type Props = { className?: string };

/**
 * Circular badge with the original Chicken Albax logo.
 * Inline SVG on purpose: an SVG loaded through <img> is not allowed to load
 * other images, so the logo would never show up there.
 */
export default function LogoBadge({ className }: Props) {
  return (
    <svg
      viewBox="0 0 140 140"
      className={className}
      role="img"
      aria-label="Chicken Albax - Original Taste"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="albax-badge-clip">
          <circle cx="70" cy="70" r="62" />
        </clipPath>
      </defs>
      <circle cx="70" cy="70" r="66" fill="#fff" stroke="#f5b800" strokeWidth="7" />
      <g clipPath="url(#albax-badge-clip)">
        <rect x="8" y="8" width="124" height="124" fill="#fcf9f2" />
        <image
          href="/logo.webp"
          x="14"
          y="38.5"
          width="112"
          height="63"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>
    </svg>
  );
}

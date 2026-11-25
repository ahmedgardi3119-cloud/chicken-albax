type Props = { className?: string };

/**
 * Black paper bucket carrying the Chicken Albax logo on a cream label.
 * Pure inline SVG, no emoji, so it looks the same on every device.
 */
export default function BucketIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 120 128"
      className={className}
      role="img"
      aria-label="Chicken Albax paper bucket"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ground shadow */}
      <ellipse cx="60" cy="123" rx="32" ry="4" fill="rgba(0,0,0,0.35)" />

      {/* bucket body (black paper) */}
      <path
        d="M18 30 H102 L90 118 Q89 122 85 122 H35 Q31 122 30 118 Z"
        fill="#141414"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* paper fold highlights */}
      <path
        d="M42 34 L45 120 M60 34 V120 M78 34 L75 120"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="2"
      />

      {/* lid */}
      <rect
        x="12"
        y="14"
        width="96"
        height="18"
        rx="6"
        fill="#1c1c1c"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1.5"
      />
      <rect
        x="17"
        y="18"
        width="86"
        height="3"
        rx="1.5"
        fill="rgba(255,255,255,0.2)"
      />

      {/* logo label */}
      <rect x="30" y="51" width="60" height="36" rx="5" fill="#FCF9F2" />
      <image
        href="/logo.webp"
        x="32.5"
        y="53.6"
        width="55"
        height="30.8"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
}

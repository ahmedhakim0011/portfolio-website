"use client";

import { motion } from "motion/react";
import { Face, MascotFrame, box, float, type MascotProps } from "./shared";

function Reel({ cx, cy, r, speed }: { cx: number; cy: number; r: number; speed: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} className="fill-teal stroke-ink" strokeWidth="4" />
      <motion.g
        style={{ transformBox: "view-box", transformOrigin: `${cx}px ${cy}px` }}
        variants={{
          idle: { rotate: 360, transition: { duration: speed * 3, repeat: Infinity, ease: "linear" } },
          hover: { rotate: 360, transition: { duration: speed * 0.6, repeat: Infinity, ease: "linear" } },
        }}
      >
        {[0, 72, 144, 216, 288].map((deg) => {
          const a = (deg * Math.PI) / 180;
          return (
            <circle
              key={deg}
              cx={cx + Math.cos(a) * r * 0.58}
              cy={cy + Math.sin(a) * r * 0.58}
              r={r * 0.16}
              className="fill-cream stroke-ink"
              strokeWidth="2"
            />
          );
        })}
      </motion.g>
      <circle cx={cx} cy={cy} r={r * 0.14} className="fill-ink" />
    </g>
  );
}

/** "Reel", the film camera. Reels spin, lens flashes when hovered. */
export function FilmCamera(props: MascotProps) {
  return (
    <MascotFrame {...props}>
      <ellipse cx="100" cy="190" rx="66" ry="5" className="fill-ink" opacity="0.18" />

      {/* tripod */}
      <path d="M78 162 L58 188 M122 162 L142 188 M100 162 V188" className="stroke-ink" strokeWidth="5" strokeLinecap="round" />

      <motion.g variants={float(3, 3.6)} style={box}>
        <Reel cx={64} cy={52} r={28} speed={5} />
        <Reel cx={116} cy={44} r={24} speed={4} />

        {/* lens barrel */}
        <path d="M136 98 L176 84 V150 L136 136 Z" className="fill-ink" strokeLinejoin="round" />
        <ellipse cx="176" cy="117" rx="9" ry="33" className="fill-teal stroke-ink" strokeWidth="4" />
        <ellipse cx="178" cy="106" rx="2.6" ry="10" className="fill-cream" opacity="0.8" />

        {/* flash burst */}
        <motion.g
          style={box}
          variants={{
            idle: { opacity: 0, scale: 0.4 },
            hover: {
              opacity: [0, 1, 0],
              scale: [0.4, 1.3, 1.5],
              transition: { duration: 0.7, repeat: Infinity, repeatDelay: 0.15 },
            },
          }}
        >
          <path
            d="M190 117 L200 105 L198 117 L200 129 Z M188 96 L196 86 M188 138 L196 148"
            className="fill-mustard stroke-ink"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* body */}
        <rect x="30" y="80" width="112" height="84" rx="16" className="fill-mustard stroke-ink" strokeWidth="4" />
        <path d="M40 90 H132" className="stroke-cream" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
        <rect x="116" y="146" width="16" height="8" rx="3" className="fill-rust stroke-ink" strokeWidth="2.5" />

        <Face cx={82} cy={116} gap={38} mouthY={20} blinkDelay={2.6} />
      </motion.g>
    </MascotFrame>
  );
}

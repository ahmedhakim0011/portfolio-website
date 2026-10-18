"use client";

import { motion } from "motion/react";
import { Face, MascotFrame, box, float, type MascotProps } from "./shared";

const HOLES = Array.from({ length: 9 }, (_, i) => {
  const a = (i / 9) * Math.PI * 2 - Math.PI / 2;
  return { x: 100 + Math.cos(a) * 17, y: 142 + Math.sin(a) * 17 };
});

/** "Ringo", the rotary phone. Rings every few seconds; goes wild when hovered. */
export function RotaryPhone(props: MascotProps) {
  const ring = {
    idle: {
      rotate: [0, -5, 5, -5, 5, -3, 0],
      transition: { duration: 0.7, repeat: Infinity, repeatDelay: 2.6 },
    },
    hover: {
      rotate: [0, -6, 6, -6, 6, 0],
      transition: { duration: 0.45, repeat: Infinity },
    },
  };

  return (
    <MascotFrame {...props}>
      <ellipse cx="100" cy="186" rx="70" ry="6" className="fill-ink" opacity="0.18" />

      <motion.g variants={float(3, 3.8)} style={box}>
        {/* ring waves */}
        {[0, 1].map((i) => (
          <g key={i}>
            <motion.path
              d={`M${28 - i * 10} ${20 + i * 2} q-8 12 0 24`}
              className="fill-none stroke-mustard"
              strokeWidth="4"
              strokeLinecap="round"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.9, repeat: Infinity, repeatDelay: 2.4, delay: i * 0.18 }}
            />
            <motion.path
              d={`M${172 + i * 10} ${20 + i * 2} q8 12 0 24`}
              className="fill-none stroke-mustard"
              strokeWidth="4"
              strokeLinecap="round"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.9, repeat: Infinity, repeatDelay: 2.4, delay: i * 0.18 }}
            />
          </g>
        ))}

        {/* base */}
        <path
          d="M18 176 L38 82 Q40 70 52 70 H148 Q160 70 162 82 L182 176 Z"
          className="fill-rust stroke-ink"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path d="M44 80 H156" className="stroke-cream" strokeWidth="3" strokeLinecap="round" opacity="0.3" />

        {/* cradle prongs */}
        <rect x="56" y="58" width="12" height="16" rx="3" className="fill-ink" />
        <rect x="132" y="58" width="12" height="16" rx="3" className="fill-ink" />

        {/* handset */}
        <motion.g variants={ring} style={box}>
          <rect x="32" y="34" width="136" height="22" rx="11" className="fill-ink" />
          <rect x="22" y="24" width="40" height="34" rx="14" className="fill-ink" />
          <rect x="138" y="24" width="40" height="34" rx="14" className="fill-ink" />
          <path d="M30 32 H54" className="stroke-cream" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
          <path d="M146 32 H170" className="stroke-cream" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
        </motion.g>

        <Face cx={100} cy={92} gap={42} mouthY={20} blinkDelay={3.6} />

        {/* dial */}
        <circle cx="100" cy="142" r="30" className="fill-cream stroke-ink" strokeWidth="4" />
        <motion.g
          style={{ ...box, transformOrigin: "100px 142px", transformBox: "view-box" }}
          variants={{
            idle: { rotate: [0, 0, 40, 0], transition: { duration: 4, repeat: Infinity, times: [0, 0.6, 0.8, 1] } },
            hover: { rotate: 360, transition: { duration: 0.9, ease: "easeInOut" } },
          }}
        >
          {HOLES.map((h, i) => (
            <circle key={i} cx={h.x} cy={h.y} r="4.2" className="fill-paper-deep stroke-ink" strokeWidth="2" />
          ))}
          <circle cx="100" cy="142" r="6" className="fill-mustard stroke-ink" strokeWidth="2.5" />
        </motion.g>
      </motion.g>
    </MascotFrame>
  );
}

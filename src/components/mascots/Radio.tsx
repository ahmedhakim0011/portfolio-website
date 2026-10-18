"use client";

import { motion } from "motion/react";
import { Face, MascotFrame, box, float, type MascotProps } from "./shared";

function Note({ x, delay }: { x: number; delay: number }) {
  return (
    <motion.g
      style={box}
      variants={{
        idle: {
          y: [10, -26],
          opacity: [0, 1, 0],
          transition: { duration: 3, repeat: Infinity, delay, ease: "easeOut" },
        },
        hover: {
          y: [10, -34],
          opacity: [0, 1, 0],
          transition: { duration: 1.2, repeat: Infinity, delay: delay / 3, ease: "easeOut" },
        },
      }}
    >
      <circle cx={x} cy="30" r="5" className="fill-rust stroke-ink" strokeWidth="2.5" />
      <path d={`M${x + 4.5} 29 V10 q8 2 8 10`} className="fill-none stroke-ink" strokeWidth="3" strokeLinecap="round" />
    </motion.g>
  );
}

/** "Dial", the old radio. Needle sweeps, knobs twist, notes float up. */
export function Radio(props: MascotProps) {
  return (
    <MascotFrame {...props}>
      <ellipse cx="100" cy="184" rx="68" ry="6" className="fill-ink" opacity="0.18" />

      <Note x={34} delay={0} />
      <Note x={70} delay={1} />
      <Note x={106} delay={2} />

      <motion.g variants={float(3, 3.3)} style={box}>
        {/* antenna */}
        <motion.g
          style={{ transformBox: "view-box", transformOrigin: "142px 62px" }}
          variants={{
            idle: { rotate: [0, 3, -3, 0], transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" } },
            hover: { rotate: [0, 10, -10, 10, 0], transition: { duration: 0.6, repeat: Infinity } },
          }}
        >
          <path d="M142 62 L172 14" className="stroke-ink" strokeWidth="4" strokeLinecap="round" />
          <circle cx="172" cy="14" r="6" className="fill-rust stroke-ink" strokeWidth="3" />
        </motion.g>

        {/* feet */}
        <rect x="42" y="160" width="20" height="14" rx="4" className="fill-ink" />
        <rect x="138" y="160" width="20" height="14" rx="4" className="fill-ink" />

        {/* cabinet */}
        <rect x="22" y="60" width="156" height="106" rx="20" className="fill-mustard stroke-ink" strokeWidth="4" />
        <path d="M34 70 H166" className="stroke-cream" strokeWidth="3" strokeLinecap="round" opacity="0.45" />

        {/* speaker grille doubles as the face */}
        <rect x="36" y="78" width="78" height="72" rx="12" className="fill-cream stroke-ink" strokeWidth="3.5" />
        {[46, 54, 62, 70, 78, 86, 94, 102, 110].map((x) => (
          <path key={x} d={`M${x - 2} 140 V144`} className="stroke-ink-soft" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        ))}
        <Face cx={75} cy={102} gap={32} mouthY={20} blinkDelay={3.3} cheeks={false} />

        {/* tuning window */}
        <rect x="124" y="78" width="42" height="28" rx="6" className="fill-cream stroke-ink" strokeWidth="3.5" />
        <motion.path
          d="M130 82 V102"
          className="stroke-rust"
          strokeWidth="3"
          strokeLinecap="round"
          variants={{
            idle: { x: [0, 28, 10, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } },
            hover: { x: [0, 30, 0], transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" } },
          }}
        />

        {/* knobs */}
        {[135, 157].map((x, i) => (
          <motion.g
            key={x}
            style={{ transformBox: "view-box", transformOrigin: `${x}px 128px` }}
            variants={{
              idle: { rotate: [0, i ? -35 : 35, 0], transition: { duration: 4, repeat: Infinity, delay: i } },
              hover: { rotate: 360 * (i ? -1 : 1), transition: { duration: 1.1, repeat: Infinity, ease: "linear" } },
            }}
          >
            <circle cx={x} cy="128" r="10" className="fill-rust stroke-ink" strokeWidth="3" />
            <path d={`M${x} 119 V126`} className="stroke-cream" strokeWidth="3" strokeLinecap="round" />
          </motion.g>
        ))}
      </motion.g>
    </MascotFrame>
  );
}

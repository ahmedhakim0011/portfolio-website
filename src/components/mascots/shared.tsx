"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/** Makes SVG transforms pivot around the element's own box, not the viewBox origin. */
export const box = { transformBox: "fill-box", transformOrigin: "center" } as const;

export type MascotProps = {
  className?: string;
  /** Force the "hover" reaction, e.g. when a parent card is hovered. */
  active?: boolean;
};

type FrameProps = MascotProps & { children: ReactNode; viewBox?: string };

/**
 * Shared shell: idle <-> hover variants flow down to every child that declares
 * `variants` with the same keys. Purely decorative, so hidden from assistive tech.
 */
export function MascotFrame({ className, active, children, viewBox = "0 0 200 200" }: FrameProps) {
  return (
    <motion.svg
      viewBox={viewBox}
      aria-hidden="true"
      focusable="false"
      className={className}
      initial="idle"
      animate={active ? "hover" : "idle"}
      whileHover="hover"
      whileTap="hover"
      style={{ overflow: "visible" }}
    >
      {children}
    </motion.svg>
  );
}

export const float = (amount = 4, duration = 3.2): Variants => ({
  idle: {
    y: [0, -amount, 0],
    transition: { duration, repeat: Infinity, ease: "easeInOut" },
  },
  hover: {
    y: -amount * 1.5,
    rotate: [0, -2.5, 2.5, -2.5, 0],
    transition: { duration: 0.5 },
  },
});

type FaceProps = {
  cx: number;
  cy: number;
  /** Horizontal distance between the eyes. */
  gap?: number;
  /** Mouth sits this far below the eye line. */
  mouthY?: number;
  blinkDelay?: number;
  cheeks?: boolean;
};

/** Googly-eyed face with blinking, pupils that perk up on hover, and a mouth that opens. */
export function Face({ cx, cy, gap = 38, mouthY = 22, blinkDelay = 3, cheeks = true }: FaceProps) {
  const lx = cx - gap / 2;
  const rx = cx + gap / 2;
  const my = cy + mouthY;

  return (
    <g>
      {[lx, rx].map((x, i) => (
        <motion.g
          key={x}
          style={box}
          animate={{ scaleY: [1, 1, 0.08, 1] }}
          transition={{
            duration: 0.28,
            times: [0, 0.01, 0.5, 1],
            repeat: Infinity,
            repeatDelay: blinkDelay + i * 0.05,
          }}
        >
          <circle cx={x} cy={cy} r="8.5" className="fill-cream stroke-ink" strokeWidth="3" />
          <motion.circle
            cx={x}
            cy={cy + 1}
            r="3.8"
            className="fill-ink"
            variants={{ idle: { y: 0, x: 0 }, hover: { y: -2.5, x: 1.5 } }}
          />
        </motion.g>
      ))}
      {cheeks && (
        <>
          <circle cx={lx - 9} cy={cy + 12} r="5" className="fill-rust" opacity="0.55" />
          <circle cx={rx + 9} cy={cy + 12} r="5" className="fill-rust" opacity="0.55" />
        </>
      )}
      <motion.path
        d={`M${cx - 10} ${my} Q${cx} ${my + 6} ${cx + 10} ${my}`}
        className="fill-none stroke-ink"
        strokeWidth="3.5"
        strokeLinecap="round"
        variants={{
          idle: { d: `M${cx - 10} ${my} Q${cx} ${my + 6} ${cx + 10} ${my}` },
          hover: { d: `M${cx - 12} ${my - 2} Q${cx} ${my + 16} ${cx + 12} ${my - 2}` },
        }}
      />
    </g>
  );
}

/** Little four-point sparkle used as a decorative accent. */
export function Sparkle({ x, y, size = 10, delay = 0 }: { x: number; y: number; size?: number; delay?: number }) {
  return (
    <motion.path
      d={`M${x} ${y - size} Q${x} ${y} ${x + size} ${y} Q${x} ${y} ${x} ${y + size} Q${x} ${y} ${x - size} ${y} Q${x} ${y} ${x} ${y - size}Z`}
      className="fill-mustard stroke-ink"
      strokeWidth="2"
      strokeLinejoin="round"
      style={box}
      animate={{ scale: [0.6, 1.1, 0.6], rotate: [0, 45, 0], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2.4, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

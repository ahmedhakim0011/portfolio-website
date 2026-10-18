"use client";

import { motion } from "motion/react";
import { Face, MascotFrame, box, float, type MascotProps } from "./shared";

const KEYS = [46, 73, 100, 127, 154];

/** "Clack", the typewriter. Keys tap out a rhythm; the page pops up when excited. */
export function Typewriter(props: MascotProps) {
  return (
    <MascotFrame {...props}>
      {/* ground shadow */}
      <ellipse cx="100" cy="186" rx="64" ry="6" className="fill-ink" opacity="0.18" />

      <motion.g variants={float(3.5, 3.4)} style={box}>
        {/* paper sheet */}
        <motion.g
          variants={{
            idle: { y: [0, -2, 0], transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" } },
            hover: { y: -12, transition: { type: "spring", stiffness: 300, damping: 10 } },
          }}
        >
          <rect x="62" y="12" width="76" height="62" rx="3" className="fill-cream stroke-ink" strokeWidth="3.5" />
          {[28, 38, 48].map((y, i) => (
            <motion.rect
              key={y}
              x="72"
              y={y}
              width={i === 2 ? 28 : 54}
              height="4"
              rx="2"
              className="fill-ink-soft"
              style={{ ...box, transformOrigin: "left center" }}
              animate={{ scaleX: [0, 1, 1, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, delay: i * 0.6, times: [0, 0.3, 0.85, 1] }}
            />
          ))}
        </motion.g>

        {/* roller + knobs */}
        <motion.g
          variants={{ idle: { x: 0 }, hover: { x: [0, -4, 4, -4, 0], transition: { duration: 0.5, repeat: Infinity } } }}
        >
          <rect x="46" y="66" width="108" height="14" rx="7" className="fill-ink" />
          <circle cx="44" cy="73" r="8" className="fill-mustard stroke-ink" strokeWidth="3" />
          <circle cx="156" cy="73" r="8" className="fill-mustard stroke-ink" strokeWidth="3" />
        </motion.g>

        {/* body */}
        <path
          d="M30 86 H170 L188 158 Q191 174 175 174 H25 Q9 174 12 158 Z"
          className="fill-teal stroke-ink"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path d="M34 92 H166" className="stroke-cream" strokeWidth="3" strokeLinecap="round" opacity="0.35" />

        <Face cx={100} cy={108} gap={44} mouthY={22} />

        {/* keys */}
        {KEYS.map((x, i) => (
          <motion.g
            key={x}
            custom={i}
            variants={{
              idle: (n: number) => ({
                y: [0, 4, 0],
                transition: { duration: 0.35, repeat: Infinity, repeatDelay: 2.4, delay: n * 0.4 },
              }),
              hover: (n: number) => ({
                y: [0, 4, 0],
                transition: { duration: 0.22, repeat: Infinity, delay: n * 0.07 },
              }),
            }}
          >
            <circle cx={x} cy="154" r="9" className="fill-cream stroke-ink" strokeWidth="3" />
            <circle cx={x - 2.5} cy="151.5" r="2" className="fill-paper-deep" />
          </motion.g>
        ))}
      </motion.g>
    </MascotFrame>
  );
}

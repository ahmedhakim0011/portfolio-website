"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

const bits = [
  { x: "6%", y: 18, size: 22, speed: -120, color: "fill-mustard" },
  { x: "90%", y: 30, size: 16, speed: -200, color: "fill-rust" },
  { x: "12%", y: 62, size: 14, speed: -160, color: "fill-teal" },
  { x: "84%", y: 74, size: 24, speed: -90, color: "fill-mustard" },
  { x: "48%", y: 92, size: 12, speed: -240, color: "fill-rust" },
];

/** Sparkles drifting at different speeds as you scroll (parallax). Skipped for reduced motion. */
export function FloatingBits() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  if (reduce) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {bits.map((b, i) => (
        <Bit key={i} {...b} progress={smooth} />
      ))}
    </div>
  );
}

function Bit({
  x,
  y,
  size,
  speed,
  color,
  progress,
}: (typeof bits)[number] & { progress: ReturnType<typeof useSpring> }) {
  const translate = useTransform(progress, [0, 1], [0, speed]);
  const rotate = useTransform(progress, [0, 1], [0, speed * 1.5]);
  return (
    <motion.svg
      viewBox="-12 -12 24 24"
      width={size}
      height={size}
      className="absolute opacity-60"
      style={{ left: x, top: `${y}%`, y: translate, rotate }}
    >
      <path d="M0 -10 Q0 0 10 0 Q0 0 0 10 Q0 0 -10 0 Q0 0 0 -10Z" className={`${color} stroke-ink`} strokeWidth="1.6" strokeLinejoin="round" />
    </motion.svg>
  );
}

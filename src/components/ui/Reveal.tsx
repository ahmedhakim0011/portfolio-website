"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left" | "right" | "pop";
};

const hidden = {
  up: { opacity: 0, y: 28 },
  left: { opacity: 0, x: -32 },
  right: { opacity: 0, x: 32 },
  pop: { opacity: 0, scale: 0.8, rotate: -3 },
} as const;

/** Scroll-triggered reveal. Plays once, a little before the element is fully in view. */
export function Reveal({ children, className, delay = 0, from = "up" }: Props) {
  return (
    <motion.div
      className={className}
      initial={hidden[from]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ type: "spring", stiffness: 140, damping: 18, delay }}
    >
      {children}
    </motion.div>
  );
}

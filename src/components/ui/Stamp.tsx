"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const tone = {
  rust: "border-rust text-rust",
  teal: "border-teal text-teal",
  ink: "border-ink text-ink",
} as const;

type Props = {
  children: ReactNode;
  color?: keyof typeof tone;
  rotate?: number;
  round?: boolean;
  className?: string;
};

/** Rubber-stamp label that thunks down onto the page when scrolled into view. */
export function Stamp({ children, color = "rust", rotate = -8, round = false, className = "" }: Props) {
  return (
    <motion.div
      className={`inline-flex select-none flex-col items-center justify-center border-[3px] border-double px-4 py-2 text-center font-type uppercase leading-tight tracking-widest opacity-90 ${
        round ? "aspect-square rounded-full p-5" : "rounded-md"
      } ${tone[color]} ${className}`}
      initial={{ scale: 2.2, opacity: 0, rotate: rotate - 12 }}
      whileInView={{ scale: 1, opacity: 0.92, rotate }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ type: "spring", stiffness: 420, damping: 18, mass: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

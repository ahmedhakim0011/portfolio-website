"use client";

import { motion } from "motion/react";
import type { ElementType } from "react";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  /** Words (exact match) to render in an accent class. */
  accent?: Record<string, string>;
};

/** Headline where each word rises out of a mask, one after another. */
export function SplitWords({ text, as: Tag = "h1", className, delay = 0, accent = {} }: Props) {
  const words = text.split(" ");
  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className={`inline-block ${accent[word.replace(/[.,!?]/g, "")] ?? ""}`}
            initial={{ y: "110%", rotate: 6 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 16, delay: delay + i * 0.08 }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

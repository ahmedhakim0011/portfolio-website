"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type Props = { lines: string[]; interval?: number; className?: string };

/** Comic-style bubble that cycles through short lines. */
export function SpeechBubble({ lines, interval = 3200, className = "" }: Props) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (lines.length < 2) return;
    const id = setInterval(() => setI((n) => (n + 1) % lines.length), interval);
    return () => clearInterval(id);
  }, [lines.length, interval]);

  return (
    <div className={`relative inline-block rounded-2xl border-[3px] border-ink bg-cream px-4 py-2 font-type text-lg ${className}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 8, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.9 }}
          transition={{ duration: 0.22 }}
        >
          {lines[i]}
        </motion.span>
      </AnimatePresence>
      {/* tail */}
      <span className="absolute -bottom-[11px] left-8 h-4 w-4 rotate-45 border-b-[3px] border-r-[3px] border-ink bg-cream" aria-hidden="true" />
    </div>
  );
}

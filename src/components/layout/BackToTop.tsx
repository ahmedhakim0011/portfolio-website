"use client";

import { motion } from "motion/react";

/** Typewriter-key button: it presses down on hover and tap. */
export function BackToTop() {
  return (
    <motion.button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="flex items-center gap-2 rounded-full border-[3px] border-cream bg-ink px-5 py-2 font-type uppercase tracking-wider text-cream shadow-[0_5px_0_var(--color-mustard)]"
      whileHover={{ y: 3, boxShadow: "0 2px 0 var(--color-mustard)" }}
      whileTap={{ y: 5, boxShadow: "0 0 0 var(--color-mustard)" }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
    >
      <span aria-hidden="true">↑</span> Back to top
    </motion.button>
  );
}

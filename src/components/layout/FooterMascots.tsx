"use client";

import { motion } from "motion/react";
import { Radio, RotaryPhone, Typewriter } from "@/components/mascots";

/** Three mascots peeking up over the footer edge, one after another. */
export function FooterMascots() {
  const items = [
    { M: Typewriter, cls: "w-24 sm:w-32" },
    { M: Radio, cls: "w-20 sm:w-28" },
    { M: RotaryPhone, cls: "w-20 sm:w-28" },
  ];
  return (
    <div className="pointer-events-none absolute -top-12 right-5 flex items-end gap-2 sm:-top-[4.5rem] sm:right-10 [&>*]:pointer-events-auto">
      {items.map(({ M, cls }, i) => (
        <motion.div
          key={i}
          className={cls}
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 180, damping: 13, delay: 0.15 + i * 0.15 }}
        >
          <M />
        </motion.div>
      ))}
    </div>
  );
}

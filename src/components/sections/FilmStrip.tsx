"use client";

import { motion } from "motion/react";

const frames = ["Curious", "Building", "Shipping", "Scaling", "Leading", "Mentoring", "Advising"];

const sprockets =
  "h-4 bg-[radial-gradient(circle,var(--color-paper)_0_4px,transparent_4.5px)] bg-[length:28px_16px] bg-repeat-x";

/** Seven years as seven film frames. Edit `frames` to tell your own story. */
export function FilmStrip() {
  return (
    <div className="-mx-5 overflow-x-auto px-5 pb-4 [scrollbar-width:thin]">
      <div className="w-max rounded-md border-[3px] border-ink bg-ink px-3 py-2">
        <div className={`${sprockets} w-full`} aria-hidden="true" />
        <ol className="my-2 flex gap-3">
          {frames.map((label, i) => (
            <motion.li
              key={label}
              className="w-36 rounded-sm bg-cream p-3 text-ink"
              initial={{ opacity: 0, y: 24, rotate: i % 2 ? 3 : -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{ type: "spring", stiffness: 160, damping: 16, delay: i * 0.07 }}
              whileHover={{ y: -6, rotate: i % 2 ? 2 : -2 }}
            >
              <span className="font-type text-sm text-ink-soft">YEAR</span>
              <span className="block font-display text-5xl font-black leading-none text-rust">
                {String(i + 1).padStart(2, "0")}
                {i === frames.length - 1 && "+"}
              </span>
              <span className="mt-3 block border-t-2 border-dashed border-ink/40 pt-2 font-type text-base uppercase tracking-wider">
                {label}
              </span>
            </motion.li>
          ))}
        </ol>
        <div className={`${sprockets} w-full`} aria-hidden="true" />
      </div>
    </div>
  );
}

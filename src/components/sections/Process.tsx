"use client";

import { motion } from "motion/react";
import { FilmCamera, Radio, RotaryPhone, Typewriter } from "@/components/mascots";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { n: "1", title: "Call", line: "Tell me the idea.", M: RotaryPhone },
  { n: "2", title: "Sketch", line: "We map the plan.", M: Typewriter },
  { n: "3", title: "Build", line: "I code it clean.", M: FilmCamera },
  { n: "4", title: "Ship", line: "Launch and learn.", M: Radio },
];

export function Process() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-24">
      <Reveal>
        <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">How it goes</h2>
      </Reveal>

      <ol className="relative mt-12 grid gap-10 sm:grid-cols-4">
        {/* connector line draws itself on scroll (desktop only) */}
        <svg className="absolute left-[12%] top-12 hidden h-2 w-[76%] sm:block" viewBox="0 0 100 2" preserveAspectRatio="none" aria-hidden="true">
          <motion.line
            x1="0"
            y1="1"
            x2="100"
            y2="1"
            className="stroke-ink"
            strokeWidth="2"
            strokeDasharray="4 3"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </svg>

        {steps.map((s, i) => (
          <motion.li
            key={s.n}
            className="relative flex items-center gap-4 sm:flex-col sm:text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ type: "spring", stiffness: 160, damping: 16, delay: i * 0.12 }}
          >
            <motion.div
              className={`relative grid size-24 shrink-0 place-items-center rounded-full border-[3px] border-ink ${
                ["bg-mustard", "bg-cream", "bg-teal", "bg-rust"][i]
              } shadow-[0_5px_0_var(--color-ink)]`}
              whileHover={{ y: 3, boxShadow: "0 2px 0 var(--color-ink)" }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <s.M className="size-16" />
              <span className="absolute -right-1 -top-1 grid size-8 place-items-center rounded-full border-[3px] border-ink bg-cream font-type text-sm">
                {s.n}
              </span>
            </motion.div>
            <div>
              <h3 className="font-type text-xl uppercase tracking-wider">{s.title}</h3>
              <p className="text-ink-soft">{s.line}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

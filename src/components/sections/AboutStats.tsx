"use client";

import { motion } from "motion/react";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { Stamp } from "@/components/ui/Stamp";
import { site } from "@/lib/site";

const principles = [
  { n: "01", title: "Keep it simple", line: "Less code, fewer surprises." },
  { n: "02", title: "Ship in small steps", line: "Real progress, every week." },
  { n: "03", title: "Say it plainly", line: "No jargon. No fluff." },
];

export function AboutStats() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 pt-10 md:grid-cols-[auto_1fr]">
        <Reveal from="pop">
          <div className="halftone rounded-[14px] [--hc:var(--color-rust)]">
            <div className="ticket flex items-center gap-5 px-8 py-6">
              <div className="font-display text-8xl font-black leading-none text-rust">
                <CountUp to={site.years} />
                <span>+</span>
              </div>
              <div className="font-type text-lg uppercase leading-tight tracking-wider">
                Years
                <br />
                of craft
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap items-center gap-4">
          {["Mobile apps", "Architecture", "Performance", "Code review"].map((t, i) => (
            <motion.span
              key={t}
              className="rounded-full border-[3px] border-ink bg-cream px-4 py-1.5 font-type uppercase tracking-wider"
              whileHover={{ y: -4, rotate: i % 2 ? 3 : -3, backgroundColor: "#D9A33A" }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              {t}
            </motion.span>
          ))}
          <Stamp color="teal" rotate={6}>
            Senior
          </Stamp>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <Reveal>
          <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">How I work</h2>
        </Reveal>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1} from={i === 0 ? "left" : i === 2 ? "right" : "up"}>
              <motion.div
                className="halftone h-full rounded-[14px] border-[3px] border-ink bg-cream p-5 [--hc:var(--color-teal)]"
                whileHover={{ y: -6, rotate: i % 2 ? 1.5 : -1.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 16 }}
              >
                <span className="font-type text-sm text-rust">No. {p.n}</span>
                <h3 className="mt-1 font-display text-2xl font-black">{p.title}</h3>
                <p className="mt-1 text-ink-soft">{p.line}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

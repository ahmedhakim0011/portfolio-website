"use client";

import { motion } from "motion/react";
import { FilmCamera, Radio, RotaryPhone, Typewriter } from "@/components/mascots";
import { Button } from "@/components/ui/Button";
import { SpeechBubble } from "@/components/ui/SpeechBubble";
import { SplitWords } from "@/components/ui/SplitWords";
import { Stamp } from "@/components/ui/Stamp";
import { site } from "@/lib/site";

const pop = (delay: number) => ({
  initial: { scale: 0, rotate: -12, opacity: 0 },
  animate: { scale: 1, rotate: 0, opacity: 1 },
  transition: { type: "spring" as const, stiffness: 220, damping: 14, delay },
});

export function HomeHero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-2 md:pt-16">
      <div>
        <motion.p
          className="ticket inline-block px-5 py-1.5 font-type text-sm uppercase tracking-[0.2em]"
          initial={{ opacity: 0, rotate: -6, x: -20 }}
          animate={{ opacity: 1, rotate: -2, x: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
        >
          Admit one · {site.years}+ years
        </motion.p>

        <SplitWords
          text="Mobile apps, made to last."
          className="mt-6 font-display text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          accent={{ last: "text-rust italic" }}
          delay={0.15}
        />

        <motion.p
          className="mt-5 max-w-md text-xl text-ink-soft"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Senior engineer. I build the app, or help you plan it.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
        >
          <Button href="/services">See services</Button>
          <Button href="/collaborate" tone="mustard">
            Let&apos;s collaborate
          </Button>
        </motion.div>
      </div>

      {/* Mascot cluster */}
      <div className="relative mx-auto aspect-square w-full max-w-[520px]">
        <motion.div
          className="halftone absolute inset-[6%] rounded-full border-[3px] border-ink bg-mustard [--hs:14px]"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
        />
        <motion.div className="absolute left-[22%] top-[22%] w-[56%]" {...pop(0.3)}>
          <Typewriter />
        </motion.div>
        <motion.div className="absolute left-[-2%] top-[58%] w-[30%]" {...pop(0.45)}>
          <RotaryPhone />
        </motion.div>
        <motion.div className="absolute left-[70%] top-[2%] w-[30%]" {...pop(0.55)}>
          <FilmCamera />
        </motion.div>
        <motion.div className="absolute left-[68%] top-[62%] w-[32%]" {...pop(0.65)}>
          <Radio />
        </motion.div>
        <motion.div
          className="absolute left-[4%] top-[2%]"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
        >
          <SpeechBubble lines={["Hello!", "Ship it.", "Let's talk."]} />
        </motion.div>
        <div className="absolute left-0 top-[28%] z-10 hidden sm:block">
          <Stamp round color="rust" rotate={-14} className="size-24 bg-cream/70 text-[0.65rem]">
            <span>Open for</span>
            <span className="text-sm font-bold">projects</span>
          </Stamp>
        </div>
      </div>
    </section>
  );
}

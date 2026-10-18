"use client";

import { motion } from "motion/react";
import { FilmCamera, Radio, RotaryPhone, Typewriter } from "@/components/mascots";
import { SpeechBubble } from "@/components/ui/SpeechBubble";
import { SplitWords } from "@/components/ui/SplitWords";

const mascots = { typewriter: Typewriter, phone: RotaryPhone, camera: FilmCamera, radio: Radio } as const;
const disc = { mustard: "bg-mustard", teal: "bg-teal", rust: "bg-rust" } as const;

type Props = {
  eyebrow: string;
  title: string;
  line: string;
  mascot: keyof typeof mascots;
  bubble: string[];
  tone?: keyof typeof disc;
  accent?: Record<string, string>;
};

/** Shared page header: ticket eyebrow, big headline, one-liner, and a talking mascot. */
export function PageIntro({ eyebrow, title, line, mascot, bubble, tone = "mustard", accent }: Props) {
  const Mascot = mascots[mascot];
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-10 pt-10 md:grid-cols-[1.3fr_1fr] md:pt-16">
      <div>
        <motion.p
          className="ticket inline-block px-5 py-1.5 font-type text-sm uppercase tracking-[0.2em]"
          initial={{ opacity: 0, rotate: 4, x: -20 }}
          animate={{ opacity: 1, rotate: -2, x: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
        >
          {eyebrow}
        </motion.p>
        <SplitWords
          text={title}
          className="mt-6 font-display text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl"
          accent={accent}
          delay={0.1}
        />
        <motion.p
          className="mt-4 max-w-md text-xl text-ink-soft"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {line}
        </motion.p>
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-[340px]">
        <motion.div
          className={`halftone absolute inset-[8%] rounded-full border-[3px] border-ink ${disc[tone]} [--hs:12px]`}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
        />
        <motion.div
          className="absolute inset-[18%]"
          initial={{ scale: 0, rotate: -12 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.25 }}
        >
          <Mascot />
        </motion.div>
        <motion.div
          className="absolute -top-1 left-[2%] z-10"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <SpeechBubble lines={bubble} />
        </motion.div>
      </div>
    </section>
  );
}

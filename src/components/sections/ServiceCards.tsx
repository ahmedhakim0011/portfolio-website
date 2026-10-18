"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { FilmCamera, RotaryPhone } from "@/components/mascots";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    key: "build",
    tag: "No. 1",
    title: "Mobile app development",
    line: "From idea to the app stores.",
    points: ["iOS & Android", "Clean, tested code", "Launch and beyond"],
    Mascot: FilmCamera,
    panel: "bg-teal",
    cta: "Start a project",
  },
  {
    key: "advise",
    tag: "No. 2",
    title: "Consultation",
    line: "Straight advice, clear next steps.",
    points: ["Tech & architecture review", "Scoping and roadmap", "Team guidance"],
    Mascot: RotaryPhone,
    panel: "bg-rust",
    cta: "Book a call",
  },
];

function ServiceCard({ s, index }: { s: (typeof services)[number]; index: number }) {
  const [hot, setHot] = useState(false);
  return (
    <Reveal from={index ? "right" : "left"}>
      <div
        className="halftone rounded-[14px]"
        onPointerEnter={() => setHot(true)}
        onPointerLeave={() => setHot(false)}
      >
        <div className="ticket grid overflow-hidden sm:grid-cols-[220px_1fr]">
          <div
            className={`grid place-items-center border-b-[3px] border-dashed border-ink p-6 sm:border-b-0 sm:border-r-[3px] ${s.panel}`}
          >
            <s.Mascot active={hot} className="h-40 w-40" />
          </div>
          <div className="p-6">
            <span className="font-type text-sm uppercase tracking-widest text-rust">{s.tag}</span>
            <h3 className="mt-1 font-display text-3xl font-black leading-tight">{s.title}</h3>
            <p className="mt-1 text-lg text-ink-soft">{s.line}</p>
            <ul className="mt-4 space-y-2">
              {s.points.map((p, i) => (
                <motion.li
                  key={p}
                  className="flex items-center gap-3 font-type text-lg"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <span className="grid size-6 place-items-center rounded-full border-2 border-ink bg-mustard text-sm" aria-hidden="true">
                    ✓
                  </span>
                  {p}
                </motion.li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="/collaborate" tone={index ? "mustard" : "rust"}>
                {s.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function ServiceCards() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 pt-6 lg:grid-cols-1">
      {services.map((s, i) => (
        <ServiceCard key={s.key} s={s} index={i} />
      ))}
    </section>
  );
}

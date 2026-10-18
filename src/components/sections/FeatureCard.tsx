"use client";

import Link from "next/link";
import { useState } from "react";
import { FilmCamera, Radio, RotaryPhone, Typewriter } from "@/components/mascots";

const mascots = { typewriter: Typewriter, phone: RotaryPhone, camera: FilmCamera, radio: Radio } as const;
const panel = { mustard: "bg-mustard", teal: "bg-teal", rust: "bg-rust" } as const;

type Props = {
  href: string;
  title: string;
  line: string;
  mascot: keyof typeof mascots;
  tone?: keyof typeof panel;
  tag?: string;
};

/** Ticket-style link card. Hovering anywhere on it makes the mascot react. */
export function FeatureCard({ href, title, line, mascot, tone = "mustard", tag }: Props) {
  const [hot, setHot] = useState(false);
  const Mascot = mascots[mascot];

  return (
    <Link
      href={href}
      className="group block"
      onPointerEnter={() => setHot(true)}
      onPointerLeave={() => setHot(false)}
      onFocus={() => setHot(true)}
      onBlur={() => setHot(false)}
    >
      <div className="halftone press rounded-[14px]">
        <div className="ticket overflow-hidden">
          <div className={`relative grid h-44 place-items-center border-b-[3px] border-dashed border-ink ${panel[tone]}`}>
            <Mascot active={hot} className="h-36 w-36" />
            {tag && (
              <span className="absolute left-4 top-3 rounded border-2 border-ink bg-cream px-2 py-0.5 font-type text-xs uppercase tracking-widest">
                {tag}
              </span>
            )}
          </div>
          <div className="p-5">
            <h3 className="font-display text-2xl font-black leading-tight">{title}</h3>
            <p className="mt-1 text-ink-soft">{line}</p>
            <span className="mt-4 inline-flex items-center gap-2 font-type uppercase tracking-wider text-rust">
              Take a look
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1.5">
                →
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

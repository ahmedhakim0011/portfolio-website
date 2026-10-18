"use client";

import { motion } from "motion/react";
import { FilmCamera } from "@/components/mascots";
import { Stamp } from "@/components/ui/Stamp";
import { site } from "@/lib/site";

const fits = ["New products", "Joint ventures", "Side projects", "Wild ideas"];

export function GoodFits() {
  return (
    <aside className="space-y-8">
      <div>
        <h2 className="font-display text-3xl font-black">Good fits</h2>
        <ul className="mt-4 space-y-3">
          {fits.map((f, i) => (
            <motion.li
              key={f}
              className="flex items-center gap-3 font-type text-xl uppercase tracking-wider"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 180, damping: 16 }}
              whileHover={{ x: 6 }}
            >
              <span className="grid size-7 place-items-center rounded-full border-[3px] border-ink bg-mustard text-sm" aria-hidden="true">
                ★
              </span>
              {f}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-5">
        <Stamp color="rust" rotate={-9}>
          Reply in
          <br />
          <span className="text-lg font-bold">48 hrs</span>
        </Stamp>
        <a
          href={`mailto:${site.email}`}
          className="break-all font-type text-lg underline decoration-dashed underline-offset-4 hover:text-rust"
        >
          {site.email}
        </a>
      </div>
      <div className="flex justify-center rounded-[14px] border-[3px] border-dashed border-ink/50 py-4">
        <FilmCamera className="h-32 w-32" />
      </div>
    </aside>
  );
}

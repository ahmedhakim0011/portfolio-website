import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type Props = { title: string; line: string; href?: string; label?: string; art?: ReactNode };

/** Closing ticket banner used at the bottom of inner pages. */
export function CallToAction({ title, line, href = "/collaborate", label = "Say hello", art }: Props) {
  return (
    <section className="mx-auto max-w-4xl px-5 pt-24">
      <Reveal from="pop">
        <div className="halftone rounded-[14px] [--hc:var(--color-rust)]">
          <div className="ticket flex flex-col items-start justify-between gap-6 bg-mustard px-8 py-8 sm:flex-row sm:items-center">
            {art && <div className="shrink-0">{art}</div>}
            <div className="flex-1">
              <h2 className="font-display text-3xl font-black leading-tight sm:text-4xl">{title}</h2>
              <p className="mt-1 text-lg">{line}</p>
            </div>
            <Button href={href} tone="cream" className="shrink-0">
              {label}
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

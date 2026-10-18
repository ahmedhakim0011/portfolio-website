"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const field =
  "mt-1 w-full rounded-lg border-[3px] border-ink bg-paper px-4 py-2.5 font-display text-lg outline-none transition-[box-shadow,transform] duration-150 placeholder:text-ink-soft/60 focus:-translate-y-0.5 focus:shadow-[0_4px_0_var(--color-teal)]";

type Status = "idle" | "sent" | "copied";

/**
 * No backend needed: submitting opens the visitor's email app with the message pre-filled.
 * To post to a service instead (Formspree, Resend, an API route…), replace `onSubmit`.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const idea = String(data.get("idea") ?? "").trim();

    const subject = `Collaboration idea from ${name}`;
    const body = `${idea}\n\n- ${name} (${email})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setStatus("copied");
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <div className="halftone rounded-[14px] [--hc:var(--color-teal)]">
      <form onSubmit={onSubmit} className="ticket space-y-5 p-6 sm:p-8" aria-describedby="form-status">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block font-type uppercase tracking-wider">
            Name
            <input name="name" required autoComplete="name" placeholder="Jane Doe" className={field} />
          </label>
          <label className="block font-type uppercase tracking-wider">
            Email
            <input name="email" type="email" required autoComplete="email" placeholder="jane@mail.com" className={field} />
          </label>
        </div>
        <label className="block font-type uppercase tracking-wider">
          Your idea
          <textarea name="idea" required rows={4} placeholder="One or two lines is plenty." className={`${field} resize-y`} />
        </label>

        <div className="flex flex-wrap items-center gap-4">
          <Button type="submit">Send it</Button>
          <motion.button
            type="button"
            onClick={copyEmail}
            className="font-type uppercase tracking-wider underline decoration-dashed underline-offset-4"
            whileTap={{ scale: 0.94 }}
          >
            {status === "copied" ? "Copied ✓" : "or copy my email"}
          </motion.button>

          <AnimatePresence>
            {status === "sent" && (
              <motion.span
                id="form-status"
                role="status"
                className="rotate-[-6deg] rounded-md border-[3px] border-double border-teal px-3 py-1 font-type uppercase tracking-widest text-teal"
                initial={{ scale: 2.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 420, damping: 18 }}
              >
                Opening your mail app…
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
}

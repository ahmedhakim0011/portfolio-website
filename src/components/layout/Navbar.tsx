"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name}, home`}>
          <motion.span
            className="grid size-11 place-items-center rounded-full border-[3px] border-ink bg-cream font-type text-xl shadow-[0_4px_0_var(--color-ink)]"
            whileHover={{ y: 3, boxShadow: "0 1px 0 var(--color-ink)", rotate: -8 }}
            whileTap={{ y: 4, boxShadow: "0 0 0 var(--color-ink)" }}
            transition={{ type: "spring", stiffness: 500, damping: 18 }}
          >
            {site.name.charAt(0)}
          </motion.span>
          <span className="font-display text-xl font-black tracking-tight">{site.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="relative block rounded-full px-4 py-2 font-type text-base uppercase tracking-wider transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full border-[3px] border-ink bg-mustard"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg border-[3px] border-ink bg-cream md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-4 w-6">
            <motion.span
              className="absolute left-0 top-0 h-[3px] w-full rounded bg-ink"
              animate={open ? { y: 6.5, rotate: 45 } : { y: 0, rotate: 0 }}
            />
            <motion.span
              className="absolute left-0 top-[6.5px] h-[3px] w-full rounded bg-ink"
              animate={{ opacity: open ? 0 : 1 }}
            />
            <motion.span
              className="absolute left-0 top-[13px] h-[3px] w-full rounded bg-ink"
              animate={open ? { y: -6.5, rotate: -45 } : { y: 0, rotate: 0 }}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            className="overflow-hidden border-t-[3px] border-dashed border-ink/50 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col gap-2 px-5 py-4">
              {nav.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <motion.li
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-lg border-[3px] border-ink px-4 py-3 font-type text-lg uppercase tracking-wider ${
                        active ? "bg-mustard" : "bg-cream"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

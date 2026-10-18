"use client";

import { motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

// Flips after the first mount so the curtain only plays on client-side navigations,
// never on the initial load (keeps first paint fast and hydration identical).
let hasNavigated = false;

const CURTAIN = ["bg-teal", "bg-mustard", "bg-rust"];

/** Re-mounts on every route change: a three-colour print curtain peels away, then the page settles in. */
export default function Template({ children }: { children: ReactNode }) {
  const [playCurtain] = useState(hasNavigated);
  const [done, setDone] = useState(false);

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <>
      {playCurtain && !done && (
        <div className="pointer-events-none fixed inset-0 z-50 flex" aria-hidden="true">
          {CURTAIN.map((bg, i) => (
            <motion.div
              key={bg}
              className={`h-full flex-1 ${bg} border-r-[3px] border-ink last:border-r-0`}
              style={{ originY: 0 }}
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 0.55, delay: 0.05 + i * 0.07, ease: [0.76, 0, 0.24, 1] }}
              onAnimationComplete={i === CURTAIN.length - 1 ? () => setDone(true) : undefined}
            />
          ))}
        </div>
      )}
      <motion.main
        id="main"
        className="overflow-x-clip" /* halftone shadows can poke past the viewport edge */
        initial={{ opacity: 0, y: playCurtain ? 24 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: playCurtain ? 0.25 : 0, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
    </>
  );
}

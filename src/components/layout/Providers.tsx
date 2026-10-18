"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** `reducedMotion="user"` makes every Motion component honour prefers-reduced-motion
 *  (transform and layout animations are skipped; gentle opacity fades remain). */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

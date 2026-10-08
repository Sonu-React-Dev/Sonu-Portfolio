"use client";

import { motion } from "framer-motion";
import { lineMask } from "@/lib/motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delayOffset?: number;
}

export function SplitText({ text, className, delayOffset = 0 }: SplitTextProps) {
  // Simple word split. For full production, a more complex line-splitter might be needed,
  // but for the hero "I build digital / products" this works nicely.
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-flex overflow-hidden relative">
          <motion.span
            variants={lineMask}
            initial="hidden"
            animate="show"
            custom={i + delayOffset}
            aria-hidden="true"
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

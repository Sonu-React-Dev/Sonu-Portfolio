"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { reveal } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  width?: "fit-content" | "100%";
}

export function Reveal({ children, delay = 0, width = "100%", className, ...props }: RevealProps) {
  return (
    <div style={{ width, position: "relative", overflow: "hidden" }} className={className}>
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        transition={{ ...reveal.show.transition, delay }}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
}

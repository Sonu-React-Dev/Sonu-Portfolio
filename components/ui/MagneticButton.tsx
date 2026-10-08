"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

interface MagneticButtonProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  strength?: number;
}

export const MagneticButton = React.forwardRef<HTMLDivElement, MagneticButtonProps>(
  ({ children, className, strength = 0.5, ...props }, ref) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const hX = e.clientX - (rect.left + rect.width / 2);
      const hY = e.clientY - (rect.top + rect.height / 2);
      x.set(hX * strength);
      y.set(hY * strength);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        className={cn(
          "relative inline-flex items-center justify-center transition-colors cursor-pointer",
          "disabled:opacity-50 disabled:pointer-events-none",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

MagneticButton.displayName = "MagneticButton";

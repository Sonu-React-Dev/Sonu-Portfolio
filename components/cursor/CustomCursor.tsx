"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const shouldReduceMotion = useReducedMotion();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (shouldReduceMotion) return;

    // Check if device has a fine pointer (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine) and (hover: hover)");
    if (!mediaQuery.matches) return;

    document.documentElement.classList.add("has-cursor");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const interactable = target.closest("a, button, [data-cursor]");
      if (interactable) {
        setIsPointer(true);
        const text = interactable.getAttribute("data-cursor");
        setCursorText(text || "");
      } else {
        setIsPointer(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleWindowBlur = () => setIsVisible(false);
    const handleWindowFocus = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handlePointerOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);
    setIsVisible(true);

    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handlePointerOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);
    };
  }, [cursorX, cursorY, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent-primary mix-blend-difference transition-all duration-300 ease-out"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: cursorText ? 64 : isPointer ? 48 : 32,
          height: cursorText ? 64 : isPointer ? 48 : 32,
          opacity: isVisible ? 1 : 0,
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-bold tracking-widest text-accent-primary">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}

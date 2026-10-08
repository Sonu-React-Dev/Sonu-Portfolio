"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      if (dot.current) dot.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      if (ring.current) {
        ring.current.animate(
          { transform: `translate3d(${e.clientX}px, ${e.clientY}px, 0)` },
          { duration: 420, fill: "forwards", easing: "cubic-bezier(.22,1,.36,1)" }
        );
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground-primary md:block" />
      <div ref={ring} className="pointer-events-none fixed left-0 top-0 z-[79] hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 md:block" />
    </>
  );
}

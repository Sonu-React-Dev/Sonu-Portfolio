"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const handleHash = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (href?.startsWith("#") && href.length > 1) {
        e.preventDefault();
        lenis.scrollTo(href, { offset: -80 });
        history.pushState(null, "", href);
      }
    };
    document.addEventListener("click", handleHash);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleHash);
    };
  }, [reducedMotion]);

  return <>{children}</>;
}

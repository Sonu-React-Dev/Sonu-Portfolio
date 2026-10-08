"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

export function HeroProfile() {
  const [isClient, setIsClient] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for parallax
  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax layers (different translation depths)
  // glow: small movement
  const glowX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);
  
  // portrait: medium movement
  const portraitX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const portraitY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);
  
  // deco: slightly larger movement
  const decoX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const decoY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to -0.5 to 0.5
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };
    
    // Only enable parallax if user doesn't prefer reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full h-[380px] md:h-[480px] lg:h-[600px] flex items-center justify-center group mx-auto lg:mx-0 lg:ml-auto">
      
      {/* 1. Subtle Ambient Glow (Back layer) */}
      <motion.div 
        style={isClient ? { x: glowX, y: glowY } : {}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute w-[70%] h-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-primary/15 dark:bg-accent-primary/15 rounded-full blur-[60px] md:blur-[100px] pointer-events-none transition-all duration-1000 group-hover:bg-accent-primary/25 group-hover:blur-[120px]"
      />

      {/* 2. Soft Atmospheric Light */}
      <motion.div 
        style={isClient ? { x: glowX, y: glowY } : {}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 0.3 }}
        className="absolute w-[50%] h-[50%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/5 rounded-full blur-[40px] md:blur-[80px] pointer-events-none mix-blend-screen"
      />

      {/* 3. Decorative Technical Elements */}
      <motion.div
        style={isClient ? { x: decoX, y: decoY } : {}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute inset-0 pointer-events-none hidden md:block"
      >
        {/* Subtle grid/crosshairs */}
        <div className="absolute top-[15%] left-[10%] w-4 h-4 border-t border-l border-foreground-muted/20" />
        <div className="absolute bottom-[15%] right-[10%] w-4 h-4 border-b border-r border-foreground-muted/20" />
        
        {/* Floating dots */}
        <div className="absolute top-[25%] right-[15%] w-1 h-1 rounded-full bg-accent-primary/40 animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-[35%] left-[12%] w-1.5 h-1.5 rounded-full bg-foreground-muted/30" />
        <div className="absolute top-[60%] right-[8%] w-1 h-1 rounded-full bg-foreground-muted/20" />

      </motion.div>

      {/* 4. Portrait Layer */}
      <motion.div
        style={isClient ? { x: portraitX, y: portraitY } : {}}
        initial={{ opacity: 0, y: 25, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 1.4, 
          ease: [0.16, 1, 0.3, 1], // Premium easing
          delay: 0.2 
        }}
        className="relative z-10 w-full max-w-[280px] md:max-w-[400px] lg:max-w-[480px] h-full flex items-end justify-center pointer-events-none"
      >
        <div className="relative w-full h-full transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]">
          <img 
            src="/sonu-profile.webp"
            alt={profile.name}
            className="w-full h-full object-contain object-bottom"
            style={{
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3)) drop-shadow(0 0 20px rgba(124,92,255,0.15))",
              WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
            }}
          />
        </div>
      </motion.div>

    </div>
  );
}

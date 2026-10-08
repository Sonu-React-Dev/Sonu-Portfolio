"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const nodes = [
  { id: "frontend", label: "Frontend", angle: 0, radius: 140, color: "text-blue-400" },
  { id: "backend", label: "Backend", angle: 72, radius: 140, color: "text-green-400" },
  { id: "mobile", label: "Mobile", angle: 144, radius: 140, color: "text-purple-400" },
  { id: "database", label: "Database", angle: 216, radius: 140, color: "text-amber-400" },
  { id: "api", label: "API", angle: 288, radius: 140, color: "text-pink-400" },
];

export function SystemOrbit() {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-[300px] w-full md:h-[450px]" />;

  return (
    <div className="relative flex items-center justify-center w-full h-[320px] md:h-[450px] overflow-hidden [perspective:1000px]">
      <motion.div 
        className="relative flex items-center justify-center w-[300px] h-[300px] md:w-[400px] md:h-[400px] [transform-style:preserve-3d]"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9, rotateX: 50, rotateZ: -15 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1, rotateX: 60, rotateZ: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-accent-primary/5 blur-[80px] rounded-full pointer-events-none" />

        {/* Outer Orbit */}
        <motion.div 
          animate={shouldReduceMotion ? {} : { rotateZ: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-border-subtle"
        >
          {nodes.map((node) => {
            const x = Math.cos((node.angle * Math.PI) / 180) * 100 + "%";
            const y = Math.sin((node.angle * Math.PI) / 180) * 100 + "%";
            
            return (
              <div 
                key={node.id} 
                className="absolute left-1/2 top-1/2 -ml-6 -mt-6 h-12 w-12"
                style={{ 
                  transform: `rotate(${node.angle}deg) translateX(${150}px) md:translateX(${200}px) rotate(-${node.angle}deg)`,
                  // We use a CSS trick for orbital positioning, but simpler with absolute + translate
                }}
              />
            );
          })}
        </motion.div>
        
        {/* Inner AI Orbit (Exploring) */}
        <motion.div
          animate={shouldReduceMotion ? {} : { rotateZ: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[15%] rounded-full border border-dashed border-border-subtle/60"
        />

        {/* Nodes placed cleanly (not rotating their text) */}
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
            className={cn(
              "absolute z-10 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-background-secondary border border-border-subtle shadow-xl backdrop-blur-md",
              "[transform:translateZ(20px)_rotateX(-60deg)] cursor-pointer hover:border-accent-primary transition-colors"
            )}
            style={{
              left: `calc(50% + ${Math.cos((node.angle * Math.PI) / 180) * (typeof window !== 'undefined' && window.innerWidth < 768 ? 130 : 180)}px)`,
              top: `calc(50% + ${Math.sin((node.angle * Math.PI) / 180) * (typeof window !== 'undefined' && window.innerWidth < 768 ? 130 : 180)}px)`,
              marginLeft: '-1.5rem',
              marginTop: '-1.5rem'
            }}
            data-cursor="EXPLORE"
          >
            <span className="text-[10px] md:text-xs font-semibold text-foreground-primary">
              {node.label}
            </span>
          </motion.div>
        ))}

        {/* AI Node */}
        <motion.div
          className="absolute z-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-dashed border-accent-primary/50 bg-background-primary/80 backdrop-blur-md [transform:translateZ(10px)_rotateX(-60deg)]"
          style={{
            left: `calc(50% + ${Math.cos((45 * Math.PI) / 180) * (typeof window !== 'undefined' && window.innerWidth < 768 ? 80 : 120)}px)`,
            top: `calc(50% + ${Math.sin((45 * Math.PI) / 180) * (typeof window !== 'undefined' && window.innerWidth < 768 ? 80 : 120)}px)`,
            marginLeft: '-1.25rem',
            marginTop: '-1.25rem'
          }}
        >
          <span className="text-[9px] font-bold text-accent-primary tracking-widest">AI</span>
        </motion.div>

        {/* Core Node */}
        <div className="absolute left-1/2 top-1/2 z-20 h-16 w-16 md:h-20 md:w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary flex items-center justify-center shadow-[0_0_30px_rgba(var(--accent-primary),0.4)] [transform:translateZ(40px)_rotateX(-60deg)]">
          <span className="text-foreground-primary font-bold text-lg md:text-xl">SK</span>
        </div>

      </motion.div>
    </div>
  );
}

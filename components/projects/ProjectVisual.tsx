"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { type Project } from "@/data/portfolio";
import { SmartImage } from "../ui/SmartImage";
import { ProjectPlaceholder } from "./ProjectPlaceholder";

export function ProjectVisual({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const clipInset = useTransform(scrollYProgress, [0, 0.4], ["10%", "0%"]);

  const hasPlaceholder = project.slug === "radheadda" || project.slug === "smartclass";

  return (
    <motion.div 
      ref={containerRef}
      className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl md:rounded-[2rem] bg-background-secondary border border-border-subtle group"
      style={{
        scale,
        clipPath: useTransform(clipInset, (v) => `inset(${v} round 2rem)`)
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr opacity-20 transition-opacity duration-500 group-hover:opacity-40 pointer-events-none" style={{ backgroundImage: `linear-gradient(to top right, var(--tw-gradient-stops))` }} />
      
      {hasPlaceholder ? (
        <div className="absolute inset-4 md:inset-8 lg:inset-12">
          <ProjectPlaceholder slug={project.slug} />
        </div>
      ) : (
        <div className="absolute inset-0 md:inset-8 lg:inset-12 pointer-events-none rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
          {project.images?.desktop && (
            <SmartImage 
              src={project.images.desktop}
              alt={project.title}
              fill
              className="object-cover object-top transition-all duration-[4000ms] ease-in-out group-hover:object-bottom"
              sizes="(max-width: 1200px) 90vw, 1000px"
            />
          )}
        </div>
      )}
    </motion.div>
  );
}

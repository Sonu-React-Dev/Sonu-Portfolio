"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/data/portfolio";
import { Code2, Server, Database, Box, Cpu } from "lucide-react";

const categoryMeta: Record<
  string,
  { label: string; icon: React.ComponentType<{ size?: number; className?: string }> }
> = {
  all: { label: "All Skills", icon: Cpu },
  frontend: { label: "Frontend & Mobile", icon: Code2 },
  backend: { label: "Backend & APIs", icon: Server },
  databases: { label: "Databases & Cloud", icon: Database },
  gameAnd3d: { label: "Game & 3D Interactive", icon: Box },
};

const topCoreSkills = new Set([
  "React.js",
  "React Native",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Redux Toolkit",
  "Supabase (PostgreSQL)",
  "Unity 3D / 2D",
  "Google Maps API",
  "Cloudflare R2"
]);

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filterGroups = () => {
    if (activeTab === "all") {
      return [
        { key: "frontend", title: "Frontend & Mobile", items: [...skills.frontend, ...skills.languages] },
        { key: "backend", title: "Backend Systems & APIs", items: skills.backend },
        { key: "databases", title: "Databases, Cloud & Services", items: [...skills.databases, ...skills.other] },
        { key: "gameAnd3d", title: "Game Development & 3D (Unity)", items: skills.gameAnd3d },
        { key: "practices", title: "Engineering Practices & Concepts", items: skills.toolsAndConcepts },
      ];
    }
    if (activeTab === "frontend") {
      return [
        { key: "frontend", title: "Frontend & Mobile Frameworks", items: skills.frontend },
        { key: "languages", title: "Languages & Styling", items: skills.languages },
      ];
    }
    if (activeTab === "backend") {
      return [
        { key: "backend", title: "Backend Architecture & APIs", items: skills.backend },
        { key: "services", title: "Cloud Services & Integration", items: skills.other.filter(s => !s.includes("VS Code")) },
      ];
    }
    if (activeTab === "databases") {
      return [
        { key: "databases", title: "Databases & Storage", items: skills.databases },
        { key: "cloud", title: "Cloud Infrastructure & Auth", items: skills.other },
      ];
    }
    if (activeTab === "gameAnd3d") {
      return [
        { key: "gameAnd3d", title: "Unity, 3D Engine & Interactive Simulations", items: skills.gameAnd3d },
      ];
    }
    return [];
  };

  const groups = filterGroups();

  return (
    <section id="skills" className="section-pad border-y border-white/5 bg-[#070707]">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <p className="mb-2 sm:mb-3 text-xs uppercase tracking-[.24em] text-violet-300 font-semibold">
              02 / Technology Stack
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-white">
              Tools I use to turn ideas into products.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm leading-5 sm:leading-6 text-zinc-400">
            A battle-tested stack centered on modern JavaScript ecosystems, high-performance UI frameworks, type safety, and production APIs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-7 sm:mb-10 pb-4 border-b border-white/10">
          {Object.entries(categoryMeta).map(([catKey, meta]) => {
            const Icon = meta.icon;
            const isActive = activeTab === catKey;
            return (
              <button
                key={catKey}
                type="button"
                onClick={() => setActiveTab(catKey)}
                className={`flex items-center gap-1.5 sm:gap-2 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-medium transition cursor-pointer ${
                  isActive
                    ? "bg-white text-black font-semibold shadow-md shadow-white/10"
                    : "glass text-zinc-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon size={14} className={isActive ? "text-violet-600" : "text-zinc-400"} />
                <span>{meta.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Groups */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 sm:space-y-8"
          >
            {groups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-white/5 bg-[#0a0a0a]/70 p-4 sm:p-6 lg:p-7">
                <div className="mb-3 sm:mb-4 flex items-center justify-between">
                  <h3 className="text-xs uppercase tracking-[.2em] text-zinc-400 font-semibold">
                    {group.title}
                  </h3>
                  <span className="text-[11px] text-zinc-400 font-medium">
                    {group.items.length} technologies
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {group.items.map((skill) => {
                    const isCore = topCoreSkills.has(skill);
                    return (
                      <motion.span
                        key={skill}
                        whileHover={{ y: -3 }}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition flex items-center gap-1.5 ${
                          isCore
                            ? "border border-violet-400/40 bg-violet-500/15 text-violet-200 shadow-sm shadow-violet-500/10"
                            : "border border-white/10 bg-white/[0.04] text-zinc-300 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {isCore && <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />}
                        <span>{skill}</span>
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

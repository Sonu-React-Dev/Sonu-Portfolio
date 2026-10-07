"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Layers, LayoutGrid, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/portfolio";

type CategoryFilter = "all" | "fullstack" | "mobile" | "enterprise";
type ViewMode = "spotlight" | "grid";

interface CategoryMeta {
  id: CategoryFilter;
  label: string;
}

const categories: CategoryMeta[] = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack & Web" },
  { id: "mobile", label: "Mobile & Marketplace" },
  { id: "enterprise", label: "Enterprise & Blockchain" },
];

export default function Projects() {
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("spotlight");

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    if (filter === "mobile") {
      return projects.filter(
        (p) =>
          p.title.includes("Pick A Pro") ||
          p.title.includes("Memory Caravan") ||
          p.stack.some((s) => s.toLowerCase().includes("react native"))
      );
    }
    if (filter === "enterprise") {
      return projects.filter(
        (p) =>
          p.title.includes("UPBScan") ||
          p.title.includes("Grasberg") ||
          p.title.includes("SmartClass") ||
          p.title.includes("RADHEADDA")
      );
    }
    if (filter === "fullstack") {
      return projects.filter(
        (p) =>
          p.title.includes("Pick A Pro") ||
          p.title.includes("PropertyWorks") ||
          p.title.includes("Memory Caravan") ||
          p.title.includes("Hem Aunty") ||
          p.title.includes("Nutrinest")
      );
    }
    return projects;
  }, [filter]);

  return (
    <section id="work" className="section-pad">
      <div className="container-x">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 flex flex-col justify-between gap-4 sm:gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-2 sm:mb-3 text-xs uppercase tracking-[.24em] text-violet-300 font-semibold">
              03 / Selected work
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-white">
              Products, not just screens.
            </h2>
          </div>
          <p className="max-w-sm text-xs sm:text-sm leading-5 sm:leading-6 text-zinc-400">
            A curated showcase of shipped marketplace ecosystems, real estate platforms, Web3 explorers, and cloud media systems.
          </p>
        </motion.div>

        {/* Filter Toolbar & View Mode Switcher */}
        <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const isActive = filter === cat.id;
              const count =
                cat.id === "all"
                  ? projects.length
                  : cat.id === "mobile"
                  ? 2
                  : cat.id === "enterprise"
                  ? 4
                  : 5;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFilter(cat.id)}
                  className={`flex items-center gap-1.5 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-medium transition cursor-pointer ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-md shadow-white/10"
                      : "glass text-zinc-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                      isActive ? "bg-black/15 text-black font-bold" : "bg-white/10 text-zinc-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle: Spotlight vs Grid */}
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 p-1 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setViewMode("spotlight")}
              title="Spotlight Case Studies"
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition cursor-pointer ${
                viewMode === "spotlight"
                  ? "bg-violet-600 text-white font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Layers size={13} />
              <span className="inline">Spotlight</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              title="Compact Grid Archive"
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition cursor-pointer ${
                viewMode === "grid"
                  ? "bg-violet-600 text-white font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <LayoutGrid size={13} />
              <span className="inline">Grid</span>
            </button>
          </div>
        </div>

        {/* PROJECTS CONTAINER */}
        <AnimatePresence mode="wait">
          {viewMode === "spotlight" ? (
            /* SPOTLIGHT DETAILED VIEW */
            <motion.div
              key={`spotlight-${filter}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6 sm:space-y-8"
            >
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.number}
                  whileHover={{ y: -3 }}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-[2.2rem] border border-white/10 bg-[#0a0a0a] shadow-2xl transition duration-500"
                >
                  {/* Accent ambient backlight glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-50 transition duration-700 group-hover:opacity-100 pointer-events-none`}
                  />

                  {/* SIMULATED BROWSER / APP WINDOW HEADER FRAME */}
                  <div className="relative flex items-center justify-between border-b border-white/10 bg-black/60 px-4 sm:px-6 py-2.5 sm:py-3.5 backdrop-blur-md text-xs">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-500/80" />
                      <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-amber-500/80" />
                      <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 sm:ml-3 hidden sm:inline-block font-mono text-[11px] text-zinc-400">
                        {project.url ? project.url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "enterprise-system"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{project.url ? "Live Production" : "Enterprise"}</span>
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] sm:text-[11px] text-zinc-300">
                        {project.number}
                      </span>
                    </div>
                  </div>

                  {/* CARD BODY CONTENT */}
                  <div className="relative grid gap-6 sm:gap-8 p-5 sm:p-8 lg:grid-cols-[0.34fr_1fr] lg:p-12">
                    {/* Left Column: Number, Category, Outcome Tag */}
                    <div className="flex flex-col justify-between border-b border-white/10 pb-5 lg:border-b-0 lg:border-r lg:border-white/10 lg:pb-0 lg:pr-8">
                      <div>
                        <div className="text-xs uppercase tracking-[.2em] text-violet-300 font-bold mb-1.5 sm:mb-2">
                          {project.category}
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                          {project.title}
                        </h3>
                      </div>

                      <div className="mt-5 lg:mt-0">
                        <div className="mb-1.5 text-xs uppercase tracking-[.18em] text-zinc-400 font-medium">
                          Measurable Outcome
                        </div>
                        <div className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                          <CheckCircle2 size={13} className="shrink-0" />
                          <span>{project.result}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Overview, Bullets, Stack, Actions */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <p className="text-sm sm:text-base leading-6 sm:leading-7 text-zinc-200">
                          {project.description}
                        </p>

                        {/* Deliverables & Technical Highlights */}
                        {project.bullets && project.bullets.length > 0 && (
                          <div className="mt-5 sm:mt-6 border-t border-white/10 pt-4 sm:pt-5">
                            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5 sm:mb-3">
                              Key Technical Engineering & Deliverables
                            </p>
                            <ul className="grid gap-2 sm:gap-2.5 sm:grid-cols-2">
                              {project.bullets.map((bullet, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-xs leading-5 text-zinc-300"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Footer: Tech Stack Badges + Action Buttons */}
                      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-5 border-t border-white/10 pt-4 sm:pt-5">
                        <div className="flex max-w-xl flex-wrap gap-1.5 sm:gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/10 bg-black/40 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs text-zinc-300 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {project.url ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition hover:bg-zinc-200 hover:scale-[1.02] shadow-lg shadow-white/10 cursor-pointer w-full sm:w-auto"
                            title={`Visit ${project.title} live platform`}
                          >
                            <span>Visit Live Site</span>
                            <ArrowUpRight
                              size={15}
                              className="transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                            />
                          </a>
                        ) : (
                          <div className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-400 cursor-default w-full sm:w-auto">
                            <span>Desktop Enterprise Software</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            /* COMPACT GRID ARCHIVE VIEW */
            <motion.div
              key={`grid-${filter}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.number}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 shadow-xl transition"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-30 transition duration-500 group-hover:opacity-70 pointer-events-none`}
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="font-mono text-zinc-400 font-semibold">{project.number}</span>
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                        {project.result}
                      </span>
                    </div>

                    <p className="text-[11px] uppercase tracking-wider text-violet-300 font-semibold">
                      {project.category}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-xs leading-5 text-zinc-300 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-black/40 px-2.5 py-0.5 text-[10px] text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="rounded-full border border-white/5 bg-white/5 px-2 py-0.5 text-[10px] text-zinc-400">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="relative mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-zinc-400">
                      {project.url ? "Live platform" : "Internal platform"}
                    </span>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-xs font-semibold text-white hover:text-violet-300 transition"
                      >
                        <span>Visit Site</span>
                        <ArrowUpRight size={13} />
                      </a>
                    ) : (
                      <span className="text-xs text-zinc-400">Desktop App</span>
                    )}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Layers, LayoutGrid, CheckCircle2 } from "lucide-react";
import { projects, projectCategories, ProjectTag } from "@/data/portfolio";
import Image from "next/image";

type ViewMode = "spotlight" | "grid";

export default function Projects() {
  const [filter, setFilter] = useState<ProjectTag | "all">("all");
  const [viewMode, setViewMode] = useState<ViewMode>("spotlight");

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.tags.includes(filter as ProjectTag));
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
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-foreground-primary">
              Products, not just screens.
            </h2>
          </div>
          <p className="max-w-sm text-xs sm:text-sm leading-5 sm:leading-6 text-foreground-muted">
            A curated showcase of shipped marketplace ecosystems, real estate platforms, Web3 explorers, and cloud media systems.
          </p>
        </motion.div>

        {/* Filter Toolbar & View Mode Switcher */}
        <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-5">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {projectCategories.map((cat) => {
              const isActive = filter === cat.id;
              const count = cat.id === "all" ? projects.length : projects.filter(p => p.tags.includes(cat.id as ProjectTag)).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFilter(cat.id as ProjectTag | "all")}
                  className={`flex items-center gap-1.5 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-medium transition cursor-pointer ${
                    isActive
                      ? "bg-foreground-primary text-background-primary font-semibold shadow-md shadow-white/10"
                      : "glass text-foreground-muted hover:text-foreground-primary hover:bg-foreground-primary/10"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-[2px] text-[10px] ${
                      isActive ? "bg-black/15 text-background-primary font-bold" : "bg-foreground-primary/10 text-foreground-muted"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle: Spotlight vs Grid */}
          <div className="flex items-center gap-1 rounded-full border border-border-subtle bg-background-secondary/40 p-1 self-start sm:self-auto">
            <button
               type="button"
               onClick={() => setViewMode("spotlight")}
               title="Spotlight Case Studies"
               className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition cursor-pointer ${
                 viewMode === "spotlight"
                   ? "bg-violet-600 text-foreground-primary font-semibold shadow-sm"
                   : "text-foreground-muted hover:text-foreground-primary"
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
                   ? "bg-violet-600 text-foreground-primary font-semibold shadow-sm"
                   : "text-foreground-muted hover:text-foreground-primary"
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
              className="space-y-12 sm:space-y-16"
            >
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.number}
                  whileHover={{ y: -3 }}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-[2.2rem] border border-border-subtle bg-background-secondary shadow-2xl transition duration-500"
                >
                  {/* Accent ambient backlight glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-40 transition duration-700 group-hover:opacity-80 pointer-events-none`}
                  />

                  {/* Visual Frame */}
                  <div className="relative border-b border-border-subtle bg-background-primary/30 overflow-hidden pt-8 px-6 sm:pt-12 sm:px-12 md:pt-16 md:px-16 pb-0 flex justify-center items-end h-[280px] sm:h-[400px] md:h-[500px]">
                     {project.images?.desktop ? (
                        <div className="relative w-full max-w-4xl rounded-t-xl border border-border-subtle border-b-0 shadow-2xl overflow-hidden group-hover:-translate-y-2 transition-transform duration-700 ease-out z-10 flex flex-col h-full bg-background-secondary">
                            {/* Browser Top Bar */}
                            <div className="flex items-center gap-1.5 px-3 py-2 bg-background-secondary/80 border-b border-border-subtle shrink-0">
                                <span className="h-2 w-2 rounded-full bg-red-500/80" />
                                <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                                <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                                <span className="ml-2 font-mono text-[9px] text-foreground-muted truncate flex-1 opacity-70">
                                   {project.url ? project.url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "enterprise-system"}
                                </span>
                            </div>
                            {/* Desktop Image with Scroll effect on hover */}
                            <div className="relative w-full flex-1 overflow-hidden">
                                <div className="absolute inset-0 w-full h-[300%] transition-transform duration-[8s] ease-linear group-hover:-translate-y-[66%]">
                                    <Image src={project.images.desktop} alt={`${project.title} Desktop`} fill className="object-top object-cover" sizes="(max-width: 768px) 100vw, 1024px" />
                                </div>
                            </div>
                        </div>
                     ) : (
                        <div className="w-full h-full bg-background-secondary/50 flex flex-col items-center justify-center text-foreground-muted/60 rounded-t-xl border border-border-subtle border-b-0">
                            <Layers size={32} className="mb-2 opacity-50" />
                            <span className="text-xs uppercase tracking-widest">No visual provided</span>
                        </div>
                     )}

                     {/* Mobile Mockup Overlay */}
                     {project.images?.mobile && (
                        <div className="absolute right-[5%] sm:right-[10%] bottom-[-20px] w-[90px] sm:w-[130px] md:w-[160px] h-[195px] sm:h-[280px] md:h-[340px] rounded-[1.2rem] sm:rounded-[2rem] border-[4px] sm:border-[6px] border-border-subtle bg-black shadow-2xl overflow-hidden transform group-hover:-translate-y-4 group-hover:-rotate-2 transition-all duration-700 ease-out z-20 hidden xs:block">
                            <div className="absolute inset-0 w-full h-[400%] transition-transform duration-[10s] ease-linear group-hover:-translate-y-[75%]">
                                <Image src={project.images.mobile} alt={`${project.title} Mobile`} fill className="object-top object-cover" sizes="(max-width: 768px) 160px, 160px" />
                            </div>
                        </div>
                     )}
                  </div>


                  {/* CARD BODY CONTENT */}
                  <div className="relative grid gap-6 sm:gap-8 p-5 sm:p-8 lg:grid-cols-[0.35fr_1fr] lg:p-12">
                    {/* Left Column: Number, Category, Outcome Tag */}
                    <div className="flex flex-col justify-between border-b border-border-subtle pb-5 lg:border-b-0 lg:border-r lg:border-border-subtle lg:pb-0 lg:pr-8">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                           {project.logo && (
                               <div className="w-10 h-10 rounded bg-foreground-primary/5 border border-border-subtle flex items-center justify-center p-1.5 shrink-0">
                                  <Image src={project.logo} alt={project.title} width={40} height={40} className="object-contain" />
                               </div>
                           )}
                           <div>
                              <div className="text-[10px] uppercase tracking-[.2em] text-violet-300 font-bold mb-0.5">
                                {project.category}
                              </div>
                              <h3 className="text-2xl font-bold tracking-tight text-foreground-primary sm:text-3xl">
                                {project.title}
                              </h3>
                           </div>
                        </div>
                      </div>

                      <div className="mt-5 lg:mt-0">
                        <div className="mb-1.5 text-xs uppercase tracking-[.18em] text-foreground-muted font-medium">
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
                        <p className="text-sm sm:text-base leading-6 sm:leading-7 text-foreground-secondary">
                          {project.description}
                        </p>

                        {/* Deliverables & Technical Highlights */}
                        {project.bullets && project.bullets.length > 0 && (
                          <div className="mt-5 sm:mt-6 border-t border-border-subtle pt-4 sm:pt-5">
                            <p className="text-xs font-semibold uppercase tracking-wider text-foreground-muted mb-2.5 sm:mb-3">
                              Key Technical Engineering & Deliverables
                            </p>
                            <ul className="grid gap-2 sm:gap-2.5 sm:grid-cols-2">
                              {project.bullets.map((bullet, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-xs leading-5 text-foreground-secondary"
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
                      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-5 border-t border-border-subtle pt-4 sm:pt-5">
                        <div className="flex max-w-xl flex-wrap gap-1.5 sm:gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-border-subtle bg-background-secondary/40 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs text-foreground-secondary font-medium whitespace-nowrap"
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
                            className="group/btn inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-foreground-primary px-5 py-2.5 text-xs font-semibold text-background-primary transition hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-white/10 cursor-pointer w-full sm:w-auto"
                            title={`Visit ${project.title} live platform`}
                          >
                            <span>Visit Live Site</span>
                            <ArrowUpRight
                              size={15}
                              className="transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                            />
                          </a>
                        ) : (
                          <div className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full border border-border-subtle bg-foreground-primary/5 px-4 py-2 text-xs text-foreground-muted cursor-default w-full sm:w-auto">
                            <span>Desktop App</span>
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
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border-subtle bg-background-secondary shadow-xl transition"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-30 transition duration-500 group-hover:opacity-70 pointer-events-none z-0`}
                  />

                  {/* Thumbnail */}
                  <div className="relative h-48 w-full border-b border-border-subtle bg-black overflow-hidden z-10">
                     {project.images?.desktop ? (
                         <Image src={project.images.desktop} alt={project.title} fill className="object-cover object-top opacity-80 group-hover:opacity-100 transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                     ) : (
                         <div className="w-full h-full flex items-center justify-center text-zinc-700">
                            <Layers size={32} />
                         </div>
                     )}
                     <div className="absolute top-3 right-3 z-20">
                         {project.logo && (
                             <div className="w-8 h-8 rounded bg-black/60 backdrop-blur-sm border border-border-subtle p-1">
                                <Image src={project.logo} alt={project.title} width={32} height={32} className="object-contain" />
                             </div>
                         )}
                     </div>
                  </div>

                  <div className="relative z-10 p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-xs mb-3">
                          <span className="font-mono text-foreground-muted font-semibold">{project.number}</span>
                          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                            {project.result}
                          </span>
                        </div>

                        <p className="text-[11px] uppercase tracking-wider text-violet-300 font-semibold line-clamp-1">
                          {project.category}
                        </p>
                        <h3 className="mt-1 text-2xl font-bold text-foreground-primary tracking-tight">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-xs leading-5 text-foreground-secondary line-clamp-3">
                          {project.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.stack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-border-subtle bg-background-secondary/40 px-2.5 py-0.5 text-[10px] text-foreground-secondary"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.stack.length > 4 && (
                            <span className="rounded-full border border-border-subtle bg-foreground-primary/5 px-2 py-0.5 text-[10px] text-foreground-muted">
                              +{project.stack.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="relative mt-6 pt-4 border-t border-border-subtle flex items-center justify-between">
                        <span className="text-[11px] text-foreground-muted">
                          {project.url ? "Live platform" : "Internal platform"}
                        </span>
                        {project.url ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1 text-xs font-semibold text-foreground-primary hover:text-violet-300 transition"
                          >
                            <span>Visit Site</span>
                            <ArrowUpRight size={13} />
                          </a>
                        ) : (
                          <span className="text-xs text-foreground-muted">Desktop App</span>
                        )}
                      </div>
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

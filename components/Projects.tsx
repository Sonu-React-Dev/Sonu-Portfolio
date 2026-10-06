"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="work" className="section-pad">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-xs uppercase tracking-[.24em] text-violet-300">03 / Selected work</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">Products, not just screens.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-zinc-500">A selection of web, mobile, marketplace, blockchain, education and commerce work from the resume.</p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project) => (
            <motion.article key={project.number} whileHover={{ y: -4 }} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a]">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60 transition duration-700 group-hover:opacity-100`} />
              <div className="relative grid min-h-[480px] gap-10 p-7 sm:p-10 lg:grid-cols-[.38fr_1fr] lg:p-14">
                <div className="flex flex-col justify-between">
                  <div className="text-sm font-medium text-zinc-600">{project.number}</div>
                  <div className="hidden lg:block">
                    <div className="mb-2 text-xs uppercase tracking-[.18em] text-zinc-600">Outcome</div>
                    <div className="text-sm text-zinc-300">{project.result}</div>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-xs uppercase tracking-[.2em] text-violet-300 font-semibold">{project.category}</p>
                      <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-zinc-600" />
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300 sm:hidden">
                        {project.result}
                      </span>
                    </div>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{project.title}</h3>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">{project.description}</p>

                    {/* Key Technical Highlights & Deliverables */}
                    {project.bullets && project.bullets.length > 0 && (
                      <div className="mt-6 border-t border-white/10 pt-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">Key Technical Highlights & Impact</p>
                        <ul className="grid gap-2.5 md:grid-cols-2">
                          {project.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs leading-5 text-zinc-300">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="mt-12 flex flex-wrap items-end justify-between gap-6">
                    <div className="flex max-w-xl flex-wrap gap-2">
                      {project.stack.map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-400">{tech}</span>)}
                    </div>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group/btn flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition hover:bg-zinc-200 hover:scale-[1.03] shadow-lg shadow-white/10"
                        title={`Visit ${project.title} live website`}
                      >
                        <span>Visit Live Site</span>
                        <ArrowUpRight size={15} className="transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    ) : (
                      <div
                        className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-500 cursor-default"
                        title="Desktop Enterprise / Internal Software"
                      >
                        <span>Enterprise Software</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

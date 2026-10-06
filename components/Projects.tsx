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
                    <p className="text-xs uppercase tracking-[.2em] text-zinc-500">{project.category}</p>
                    <h3 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">{project.title}</h3>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">{project.description}</p>
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
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 transition group-hover:bg-white group-hover:text-black"
                        title="View project"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    ) : (
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-700 cursor-not-allowed"
                        title="No demo link available"
                      >
                        <ArrowUpRight size={18} />
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

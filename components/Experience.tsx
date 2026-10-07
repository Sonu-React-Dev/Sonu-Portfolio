"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building2, ArrowUpRight } from "lucide-react";
import { experience } from "@/data/portfolio";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-y border-white/5 bg-[#070707]">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 sm:mb-3 text-xs uppercase tracking-[.24em] text-violet-300 font-semibold">
            04 / Experience
          </p>
          <h2 className="mb-8 sm:mb-14 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-white">
            A track record of shipping and improving real products.
          </h2>
        </motion.div>

        <div className="relative mt-8 sm:mt-12">
          {/* Animated vertical timeline line */}
          <motion.div
            className="absolute bottom-0 left-[20px] sm:left-[24px] top-0 w-px bg-white/10 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          <div className="space-y-12 sm:space-y-16">
            {experience.map((item, index) => {
              const isCurrent = item.period.toLowerCase().includes("present");

              return (
                <motion.article
                  key={item.company}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="relative pl-[60px] sm:pl-[80px]"
                >
                  {/* Timeline Avatar / Logo */}
                  <div className="absolute left-0 top-0 h-[40px] w-[40px] sm:h-[48px] sm:w-[48px] rounded-full bg-[#0a0a0a] border-2 border-[#1a1a1a] flex items-center justify-center overflow-hidden z-10 p-1.5 ring-4 ring-[#070707]">
                    {item.logo ? (
                      <Image src={item.logo} alt={item.company} width={32} height={32} className="object-contain" />
                    ) : (
                      <Building2 size={20} className="text-zinc-500" />
                    )}
                  </div>

                  <div className="grid gap-4 sm:gap-6 lg:grid-cols-[220px_1fr]">
                    {/* Period & Location */}
                    <div className="pt-1 sm:pt-2">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        <Calendar size={13} className="text-violet-400 shrink-0" />
                        <span>{item.period}</span>
                      </div>
                      <div className="mt-2 flex items-center gap-1.5 text-xs text-zinc-400">
                        <MapPin size={12} className="shrink-0" />
                        <span>{item.location}</span>
                      </div>
                      {isCurrent && (
                        <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Current Role</span>
                        </div>
                      )}
                    </div>

                    {/* Role, Company, Bullets & Tags */}
                    <div className="rounded-[1.5rem] border border-white/5 bg-white/[0.02] p-5 sm:p-7 lg:p-8 backdrop-blur-sm shadow-xl transition hover:bg-white/[0.03]">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        {item.url ? (
                           <a href={item.url} target="_blank" rel="noreferrer" className="group flex items-center gap-2 hover:text-violet-300 transition-colors">
                              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-violet-300 transition-colors">
                                {item.company}
                              </h3>
                              <ArrowUpRight size={16} className="text-zinc-500 group-hover:text-violet-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                           </a>
                        ) : (
                           <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                             {item.company}
                           </h3>
                        )}
                        <span className="text-xs font-mono text-zinc-500 bg-black/40 px-2 py-0.5 rounded-full border border-white/5">
                          0{experience.length - index}
                        </span>
                      </div>

                      <div className="mb-5 text-sm sm:text-base font-semibold text-violet-300/90">
                        {item.role}
                      </div>

                      <ul className="space-y-2.5 sm:space-y-3 text-sm leading-relaxed text-zinc-300">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/60" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack badges for role */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="mt-6 sm:mt-7 flex flex-wrap gap-1.5 pt-5 border-t border-white/5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] font-medium text-zinc-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

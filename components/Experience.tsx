"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";

const roleTags: Record<string, string[]> = {
  "SPODS Technologies": ["React.js", "React Native", "Next.js", "Redux Toolkit", "Google Maps API", "Firebase Auth & FCM"],
  "NOYT INDIA": ["JavaScript", "REST APIs", "Third-Party Integrations", "Module Architecture"],
  "3FITECH COMMUNICATIONS PVT LTD": ["Software Engineering", "Code Reviews", "Cross-Functional Agile"],
  "EDUMITRAM PVT LTD": ["React.js", "UI/UX Optimization", "Enterprise Clients", "Educomp", "EbixCash"],
  "SLOG Solutions Pvt. Ltd": ["Angular", "React", "Python", "Debugging & Testing", "Performance Tuning"],
};

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

        <div className="relative">
          {/* Animated vertical timeline line */}
          <motion.div
            className="absolute bottom-0 left-[5px] sm:left-[6px] top-0 w-px bg-white/15 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          <div className="space-y-8 sm:space-y-12">
            {experience.map((item, index) => {
              const isCurrent = item.period.toLowerCase().includes("present");
              const tags = roleTags[item.company] || [];

              return (
                <motion.article
                  key={item.company}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="relative pl-7 sm:pl-10"
                >
                  {/* Timeline Node */}
                  <div
                    className={`absolute left-0 top-1.5 sm:top-2 h-3 sm:h-3.5 w-3 sm:w-3.5 rounded-full border-2 bg-[#070707] transition ${
                      isCurrent
                        ? "border-emerald-400 ring-4 ring-emerald-400/20"
                        : "border-violet-400 ring-2 ring-violet-400/10"
                    }`}
                  />

                  <div className="grid gap-4 sm:gap-6 lg:grid-cols-[200px_1fr]">
                    {/* Period & Location */}
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        <Calendar size={13} className="text-violet-400 shrink-0" />
                        <span>{item.period}</span>
                      </div>
                      <div className="mt-1 flex items-center gap-1.5 text-xs text-zinc-400">
                        <MapPin size={12} className="shrink-0" />
                        <span>{item.location}</span>
                      </div>
                      {isCurrent && (
                        <div className="mt-2 sm:mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Current Role</span>
                        </div>
                      )}
                    </div>

                    {/* Role, Company, Bullets & Tags */}
                    <div className="rounded-2xl border border-white/5 bg-[#0a0a0a]/80 p-4 sm:p-6 lg:p-7 backdrop-blur-sm">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {item.company}
                        </h3>
                        <span className="text-xs font-mono text-zinc-400">
                          0{experience.length - index}
                        </span>
                      </div>

                      <div className="mt-1 text-xs sm:text-sm font-semibold text-violet-300">
                        {item.role}
                      </div>

                      <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-2.5 text-xs sm:text-sm leading-5 sm:leading-6 text-zinc-300">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack badges for role */}
                      {tags.length > 0 && (
                        <div className="mt-5 sm:mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 bg-black/40 px-2.5 py-0.5 text-[11px] text-zinc-400"
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

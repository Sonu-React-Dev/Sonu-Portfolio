"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-x">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-2 sm:mb-3 text-xs uppercase tracking-[.24em] text-violet-300 font-semibold">
              05 / What I build
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-foreground-primary">
              From interface to product.
            </h2>
            <p className="mt-4 sm:mt-6 max-w-md text-xs sm:text-sm leading-5 sm:leading-6 text-foreground-muted">
              Whether you need an MVP built from scratch, cross-platform mobile apps, or enterprise web refactoring, I partner end-to-end to deliver production-ready software.
            </p>
          </motion.div>

          <div className="divide-y divide-white/10 border-y border-border-subtle">
            {services.map((s, i) => (
              <motion.a
                key={s.title}
                href="#contact"
                whileHover={{ x: 6 }}
                className="group flex items-start sm:items-center justify-between gap-4 py-5 sm:py-7 transition cursor-pointer"
                title={`Discuss ${s.title}`}
              >
                <div>
                  <div className="mb-1.5 sm:mb-2 flex items-center gap-2 text-xs font-mono text-foreground-muted/80">
                    <span>0{i + 1}</span>
                    <span className="h-1 w-1 rounded-full bg-zinc-600" />
                    <span className="text-[11px] text-violet-400 uppercase tracking-wider font-semibold">
                      Engineering Service
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground-primary group-hover:text-violet-300 transition">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 max-w-xl text-xs sm:text-sm leading-5 sm:leading-6 text-foreground-muted">
                    {s.text}
                  </p>
                </div>
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-foreground-primary/5 text-foreground-muted transition group-hover:border-border-subtle group-hover:bg-foreground-primary group-hover:text-background-primary shadow-lg">
                  <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

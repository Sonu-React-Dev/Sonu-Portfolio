"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs uppercase tracking-[.24em] text-violet-300">05 / What I build</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">From interface to product.</h2>
          </motion.div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {services.map((s, i) => (
              <motion.div key={s.title} whileHover={{ x: 8 }} className="group flex items-center justify-between gap-5 py-7">
                <div>
                  <div className="mb-2 text-xs text-zinc-600">0{i+1}</div>
                  <h3 className="text-2xl font-medium">{s.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">{s.text}</p>
                </div>
                <ArrowUpRight className="shrink-0 text-zinc-600 transition group-hover:text-white" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

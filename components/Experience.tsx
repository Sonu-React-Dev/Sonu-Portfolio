"use client";
import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

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
          <p className="mb-3 text-xs uppercase tracking-[.24em] text-violet-300">04 / Experience</p>
          <h2 className="mb-16 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">A track record of shipping and improving real products.</h2>
        </motion.div>
        <div className="relative">
          <motion.div
            className="absolute bottom-0 left-[5px] top-0 w-px bg-white/10 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="space-y-12">
            {experience.map((item) => (
              <motion.article key={item.company} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} className="relative pl-9">
                <div className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-violet-300 bg-[#070707]" />
                <div className="grid gap-5 lg:grid-cols-[180px_1fr]">
                  <div className="text-xs uppercase tracking-wider text-zinc-600">{item.period}</div>
                  <div>
                    <h3 className="text-2xl font-semibold">{item.company}</h3>
                    <div className="mt-1 text-violet-300">{item.role}</div>
                    <ul className="mt-4 max-w-3xl space-y-2 text-sm leading-6 text-zinc-400">
                      {item.bullets.map((b) => <li key={b}>↳ {b}</li>)}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

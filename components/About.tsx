"use client";

import { motion } from "framer-motion";
import { achievements, profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 text-xs uppercase tracking-[.24em] text-violet-300">01 / About</p>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">Engineer with a product mindset.</h2>
            </motion.div>
          </div>
          <div>
            <p className="max-w-3xl text-xl leading-9 text-zinc-300">{profile.summary}</p>
            <p className="mt-6 max-w-3xl leading-8 text-zinc-500">
              My focus is building maintainable interfaces and connected product experiences—from user-facing web and mobile apps to APIs, authentication, integrations and dashboards.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-4">
              {achievements.map(([value, label], i) => (
                <motion.div whileHover={{ backgroundColor: "rgba(255,255,255,.06)" }} key={label} className="bg-[#0b0b0b] p-5">
                  <div className="text-3xl font-semibold">{value}</div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-zinc-500">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

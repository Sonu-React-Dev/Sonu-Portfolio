"use client";

import { motion } from "framer-motion";

const steps = [
  { name: "Discover", desc: "Understand goals, users, constraints & key architecture requirements." },
  { name: "Plan",     desc: "Milestones, schema design, tech stack selection & sprint roadmaps." },
  { name: "Design",   desc: "Component systems, atomic UI kits, responsive layout tokens." },
  { name: "Build",    desc: "Clean, modular, testable, and production-ready code with type safety." },
  { name: "Test",     desc: "Performance benchmarking, cross-device QA & accessibility compliance." },
  { name: "Deploy",   desc: "Automated CI/CD pipelines, production monitoring & seamless handoff." },
];

export default function Process() {
  return (
    <section id="process" className="section-pad border-y border-white/5 bg-[#070707]">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 sm:mb-3 text-xs uppercase tracking-[.24em] text-violet-300 font-semibold">
            06 / Process
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-white">
            Clear thinking. Clean execution.
          </h2>
        </motion.div>

        <div className="mt-8 sm:mt-14 grid gap-px overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-6 shadow-2xl">
          {steps.map((step, i) => (
            <motion.div
              key={step.name}
              whileHover={{ backgroundColor: "rgba(255,255,255,.08)" }}
              className="group bg-[#0a0a0a] p-5 sm:p-6 lg:p-7 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>0{i + 1}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400 opacity-60 group-hover:opacity-100 transition" />
                </div>
                <div className="mt-5 sm:mt-8 text-lg sm:text-xl font-bold text-white group-hover:text-violet-300 transition">
                  {step.name}
                </div>
              </div>
              <p className="mt-3 sm:mt-4 text-xs leading-5 text-zinc-400">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

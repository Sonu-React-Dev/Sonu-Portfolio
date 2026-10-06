"use client";
import { motion } from "framer-motion";

const steps = [
  { name: "Discover", desc: "Understand goals, users & constraints." },
  { name: "Plan",     desc: "Architecture, milestones & priorities." },
  { name: "Design",   desc: "Wireframes, UI systems & prototypes." },
  { name: "Build",    desc: "Clean, modular, production-ready code." },
  { name: "Test",     desc: "QA, accessibility & performance checks." },
  { name: "Deploy",   desc: "CI/CD, monitoring & post-launch support." },
];

export default function Process() {
  return (
    <section className="section-pad border-y border-white/5 bg-[#070707]">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs uppercase tracking-[.24em] text-violet-300">06 / Process</p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">Clear thinking. Clean execution.</h2>
        </motion.div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, i) => (
            <motion.div key={step.name} whileHover={{ backgroundColor: "rgba(255,255,255,.06)" }} className="bg-[#0a0a0a] p-6">
              <div className="text-xs text-zinc-600">0{i+1}</div>
              <div className="mt-10 text-lg font-medium">{step.name}</div>
              <p className="mt-2 text-xs leading-5 text-zinc-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

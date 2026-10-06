"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const groups = Object.entries(skills);
const labels: Record<string, string> = {
  languages: "Languages & Styling",
  frontend: "Frontend Development",
  backend: "Backend & APIs",
  databases: "Databases",
  other: "Cloud, Services & Tools",
  toolsAndConcepts: "Engineering Practices & Concepts"
};

export default function Skills() {
  return (
    <section className="section-pad border-y border-white/5 bg-[#070707]">
      <div className="container-x">
        <p className="mb-3 text-xs uppercase tracking-[.24em] text-violet-300">02 / Technology</p>
        <div className="grid gap-12 lg:grid-cols-[.6fr_1.4fr]">
          <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">Tools I use to turn ideas into products.</h2>
            <p className="mt-6 max-w-md leading-7 text-zinc-500">A practical stack centered on modern JavaScript ecosystems, APIs, state management and performance.</p>
          </motion.div>
          </div>
          <div className="space-y-8">
            {groups.map(([key, items]) => (
              <div key={key}>
                <div className="mb-3 text-xs uppercase tracking-[.18em] text-zinc-600">{labels[key]}</div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <motion.span key={skill} whileHover={{ y: -3, borderColor: "rgba(167,139,250,.6)", backgroundColor: "rgba(124,92,255,.08)" }} className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition">
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

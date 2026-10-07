"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Layers, Zap, Smartphone, ShieldCheck } from "lucide-react";
import { achievements, profile } from "@/data/portfolio";

const principles = [
  {
    icon: Layers,
    title: "Modular Clean Architecture",
    desc: "Decoupled component hierarchies, predictable global state (Redux Toolkit), and maintainable type-safe systems.",
  },
  {
    icon: Zap,
    title: "Performance & Sub-Second Latency",
    desc: "Aggressive optimization through code splitting, list virtualization, responsive image pipelines, and optimized render cycles.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Cohesion",
    desc: "Seamless synchronization across Next.js web applications and React Native mobile apps with shared logic.",
  },
  {
    icon: ShieldCheck,
    title: "Production-Grade Security",
    desc: "Hardened role-based access control (RBAC), private media streaming with short-lived tokens, and authenticated REST APIs.",
  },
];

function StatCard({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/^([0-9.]+)(.*)$/);
    if (match) {
      const [, numStr, suffix] = match;
      const num = parseFloat(numStr);
      const hasDecimal = numStr.includes(".");

      const controls = animate(0, num, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(latest) {
          const val = hasDecimal ? latest.toFixed(1) : Math.floor(latest);
          setDisplayValue(val + suffix);
        },
      });
      return controls.stop;
    } else {
      setDisplayValue(value);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ backgroundColor: "rgba(255,255,255,.06)" }}
      className="bg-[#0b0b0b] p-4 sm:p-6 transition flex flex-col justify-center"
    >
      <div className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
        {displayValue}
      </div>
      <div className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 font-medium leading-tight">
        {label}
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-x">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-2 sm:mb-3 text-xs uppercase tracking-[.24em] text-violet-300 font-semibold">
                01 / About
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-white">
                Engineer with a product mindset.
              </h2>
            </motion.div>
          </div>

          <div>
            <p className="max-w-3xl text-base sm:text-xl leading-7 sm:leading-9 text-zinc-200">
              {profile.summary}
            </p>
            <p className="mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base leading-6 sm:leading-8 text-zinc-400">
              My engineering philosophy centers on building maintainable digital products that combine intuitive UX with rock-solid reliability. From complex multi-tenant admin dashboards and high-throughput blockchain explorers to on-demand service ecosystems and mobile apps, I focus on every layer of the user journey.
            </p>

            {/* Metric counters */}
            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-4 shadow-xl">
              {achievements.map(([value, label]) => (
                <StatCard key={label} value={value} label={label} />
              ))}
            </div>

            {/* Core Engineering Principles Grid */}
            <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-white/10">
              <p className="text-xs uppercase tracking-[.22em] text-zinc-400 mb-5 sm:mb-6 font-semibold">
                How I Build • Engineering Principles
              </p>
              <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
                {principles.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="rounded-2xl border border-white/10 bg-zinc-950/60 p-4 sm:p-5 backdrop-blur-sm hover:border-violet-500/30 transition group"
                    >
                      <div className="flex items-center gap-3 mb-2 sm:mb-2.5">
                        <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-300 group-hover:scale-105 transition shrink-0">
                          <Icon size={17} />
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                          {p.title}
                        </h3>
                      </div>
                      <p className="text-xs leading-5 text-zinc-400">{p.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

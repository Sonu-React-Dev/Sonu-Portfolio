"use client";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Sparkles, FileText } from "lucide-react";
import { profile } from "@/data/portfolio";

const floatingBadges = [
  { label: "React", color: "text-cyan-300 border-cyan-400/30 bg-cyan-400/5", top: "14%", left: "8%" },
  { label: "Next.js", color: "text-white border-white/20 bg-white/5", top: "22%", right: "10%" },
  { label: "Node.js", color: "text-emerald-300 border-emerald-400/30 bg-emerald-400/5", bottom: "28%", left: "6%" },
  { label: "TypeScript", color: "text-blue-300 border-blue-400/30 bg-blue-400/5", bottom: "18%", right: "8%" },
  { label: "React Native", color: "text-violet-300 border-violet-400/30 bg-violet-400/5", top: "50%", right: "4%" },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28">
      <div className="grid-bg absolute inset-0" />
      <div className="container-x relative flex min-h-[calc(100vh-7rem)] items-center pb-20">
        <div className="grid w-full gap-14 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[.24em] text-zinc-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Available for opportunities
            </motion.div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .1 }} className="mb-5 text-sm font-medium text-violet-300">
              {profile.positioning}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .8 }} className="max-w-5xl text-5xl font-semibold leading-[.94] tracking-[-.055em] sm:text-7xl lg:text-[6.4rem]">
              Building digital products <span className="gradient-text">that feel as good as they perform.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 }} className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              {profile.subline}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .48 }} className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="group flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-black transition hover:scale-[1.02]">
                View work <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="/resume" className="glass flex items-center gap-2 rounded-full px-5 py-3 font-medium transition hover:bg-white/10 text-white">
                <FileText size={17} className="text-violet-300" /> Resume (ATS)
              </a>
              <a href="#contact" className="glass flex items-center gap-2 rounded-full px-5 py-3 font-medium transition hover:bg-white/10">
                Let&apos;s talk <ArrowUpRight size={17} />
              </a>
            </motion.div>
          </div>

          {/* Right panel — tech stack orb with floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: .9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: .25, duration: 1 }}
            className="relative mx-auto aspect-square w-full max-w-[440px]"
          >
            {/* Glow blob */}
            <div className="absolute inset-8 rounded-full bg-violet-500/10 blur-3xl" />

            {/* Central orb */}
            <div className="glass absolute inset-0 overflow-hidden rounded-[38%_62%_55%_45%/45%_38%_62%_55%]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,.18),transparent_20%),radial-gradient(circle_at_70%_70%,rgba(124,92,255,.22),transparent_35%)]" />
              <div className="absolute left-1/2 top-1/2 w-52 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-xs uppercase tracking-[.28em] text-zinc-500">Product Engineering</p>
                <p className="mt-2 text-xl font-semibold">Web · Mobile · Backend</p>
                <p className="mt-3 text-xs text-zinc-600">4+ years experience</p>
              </div>
              <Sparkles className="absolute right-[16%] top-[20%] h-5 w-5 text-cyan-200" />
            </div>

            {/* Floating tech badges */}
            {floatingBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: [0, -6, 0],
                }}
                transition={{
                  opacity: { delay: 0.6 + i * 0.12, duration: 0.5 },
                  y: { delay: 0.6 + i * 0.12, duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" },
                }}
                className={`absolute rounded-full border px-3 py-1.5 text-[11px] font-medium backdrop-blur-sm ${badge.color}`}
                style={{
                  top: badge.top,
                  bottom: badge.bottom,
                  left: badge.left,
                  right: badge.right,
                }}
              >
                {badge.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-7 left-1/2 -translate-x-1/2 text-zinc-500"><ArrowDownRight className="animate-bounce" /></a>
    </section>
  );
}

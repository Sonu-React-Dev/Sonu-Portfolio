"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Sparkles, FileText } from "lucide-react";
import { profile } from "@/data/portfolio";
import sonuPhoto from "@/public/sonu-profile.jpg";

const floatingBadges = [
  { label: "React", color: "text-cyan-300 border-cyan-400/30 bg-cyan-400/10", top: "8%", left: "-4%" },
  { label: "Next.js", color: "text-white border-white/20 bg-white/10", top: "14%", right: "-4%" },
  { label: "Node.js", color: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10", bottom: "34%", left: "-6%" },
  { label: "Unity 3D", color: "text-amber-300 border-amber-400/30 bg-amber-400/10", bottom: "14%", left: "-4%" },
  { label: "TypeScript", color: "text-blue-300 border-blue-400/30 bg-blue-400/10", bottom: "14%", right: "-4%" },
  { label: "React Native", color: "text-violet-300 border-violet-400/30 bg-violet-400/10", top: "48%", right: "-8%" },
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
                <FileText size={17} className="text-violet-300" /> Resume / CV
              </a>
              <a href="#contact" className="glass flex items-center gap-2 rounded-full px-5 py-3 font-medium transition hover:bg-white/10">
                Let&apos;s talk <ArrowUpRight size={17} />
              </a>
            </motion.div>
          </div>

          {/* Right panel — Sonu's professional photo with floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: .92, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: .25, duration: 0.9 }}
            className="relative mx-auto w-full max-w-[390px]"
          >
            {/* Ambient backlight glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-violet-600/25 via-fuchsia-500/15 to-cyan-400/20 blur-3xl" />

            {/* Framed portrait card */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/15 bg-zinc-900/60 shadow-2xl shadow-violet-950/40 backdrop-blur-sm">
              <Image
                src={sonuPhoto}
                alt="Sonu Kumar - Full-Stack Developer"
                priority
                className="h-full w-full object-cover object-[center_22%] transition-transform duration-700 hover:scale-105"
              />

              {/* Gentle dark gradient overlay at bottom for card text readability */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

              {/* Bottom executive tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/15 bg-black/60 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="text-sm font-semibold text-white tracking-wide">Sonu Kumar</p>
                  <p className="text-xs text-zinc-400">Full-Stack Product Engineer</p>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available</span>
                </div>
              </div>
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
                className={`absolute z-10 rounded-full border px-3 py-1.5 text-[11px] font-medium shadow-lg backdrop-blur-md ${badge.color}`}
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

"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, FileText, Github, Linkedin, Mail, MapPin, Clock } from "lucide-react";
import { profile } from "@/data/portfolio";
import sonuPhoto from "@/public/sonu-profile.png";

const floatingBadges = [
  { label: "React.js", color: "text-cyan-300 border-cyan-400/30 bg-cyan-400/10", pos: "top-4 -left-3 sm:-left-5" },
  { label: "Next.js", color: "text-white border-white/20 bg-white/10", pos: "top-8 -right-3 sm:-right-5" },
  { label: "React Native", color: "text-violet-300 border-violet-400/30 bg-violet-400/10", pos: "top-1/2 -right-4 sm:-right-7" },
  { label: "Node.js", color: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10", pos: "bottom-28 -left-3 sm:-left-6" },
  { label: "TypeScript", color: "text-blue-300 border-blue-400/30 bg-blue-400/10", pos: "bottom-6 -right-2 sm:-right-4" },
  { label: "Unity 3D", color: "text-amber-300 border-amber-400/30 bg-amber-400/10", pos: "bottom-8 -left-2 sm:-left-4" },
];

export default function Hero() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28">
      <div className="grid-bg absolute inset-0" />
      <div className="container-x relative flex min-h-[calc(100vh-7rem)] items-center pb-20">
        <div className="grid w-full gap-14 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div>
            {/* Status & Location Pill */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[.22em] text-zinc-400"
            >
              <span className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Available for opportunities
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-zinc-400">
                <MapPin size={13} className="text-violet-400" /> Delhi, India
              </span>
              {localTime && (
                <span className="hidden md:inline-flex items-center gap-1.5 text-zinc-500">
                  <Clock size={13} className="text-zinc-500" /> {localTime} IST
                </span>
              )}
            </motion.div>

            {/* Positioning line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-4 text-sm font-semibold tracking-wide text-violet-300"
            >
              {profile.positioning}
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="max-w-5xl text-5xl font-semibold leading-[.94] tracking-[-.055em] sm:text-7xl lg:text-[6.4rem]"
            >
              Building digital products{" "}
              <span className="gradient-text">that feel as good as they perform.</span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300"
            >
              {profile.subline}
            </motion.p>

            {/* Primary CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="group flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-black transition hover:scale-[1.02] shadow-lg shadow-white/10"
              >
                View selected work
                <ArrowUpRight
                  size={17}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="/resume"
                className="glass flex items-center gap-2 rounded-full px-5 py-3 font-medium text-white transition hover:bg-white/10"
              >
                <FileText size={17} className="text-violet-300" />
                <span>Resume / CV</span>
              </a>
              <a
                href="#contact"
                className="glass flex items-center gap-2 rounded-full px-5 py-3 font-medium text-zinc-200 transition hover:bg-white/10 hover:text-white"
              >
                Let&apos;s talk <ArrowUpRight size={17} />
              </a>
            </motion.div>

            {/* Quick Social & Connect Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-5 pt-4 text-xs text-zinc-400 border-t border-white/5"
            >
              <span className="uppercase tracking-widest text-[11px] text-zinc-400 font-medium">Connect:</span>
              <a
                href={`https://github.com/${profile.social.github}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 transition hover:text-white"
                title="GitHub profile"
              >
                <Github size={15} /> <span>GitHub</span>
              </a>
              <a
                href={`https://linkedin.com/in/${profile.social.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 transition hover:text-white"
                title="LinkedIn profile"
              >
                <Linkedin size={15} /> <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 transition hover:text-white"
                title="Email Sonu"
              >
                <Mail size={15} /> <span>{profile.email}</span>
              </a>
            </motion.div>
          </div>

          {/* Right panel — Sonu's professional photo with floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.25, duration: 0.9 }}
            className="relative mx-auto w-full max-w-[390px]"
          >
            {/* Ambient backlight glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-violet-600/25 via-fuchsia-500/15 to-cyan-400/20 blur-3xl pointer-events-none" />

            {/* Framed portrait card */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-zinc-800/60 via-zinc-900/80 to-[#070709] shadow-2xl shadow-violet-950/40 backdrop-blur-sm">
              {/* Inner ambient studio light behind Sonu */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-3/4 rounded-3xl bg-gradient-to-b from-violet-500/15 via-cyan-400/10 to-transparent" />

              <Image
                src={sonuPhoto}
                alt="Sonu Kumar - Full-Stack Developer"
                priority
                className="h-full w-full object-cover object-[center_top] transition-transform duration-700 hover:scale-105"
              />

              {/* Gentle dark gradient overlay at bottom for card text readability */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Bottom executive tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/15 bg-black/70 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="text-sm font-semibold tracking-wide text-white">Sonu Kumar</p>
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
                className={`absolute z-10 rounded-full border px-3 py-1.5 text-[11px] font-medium shadow-lg backdrop-blur-md ${badge.pos} ${badge.color}`}
              >
                {badge.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-zinc-500 transition hover:text-white"
        aria-label="Scroll down to About section"
      >
        <ArrowDownRight className="animate-bounce" />
      </a>
    </section>
  );
}

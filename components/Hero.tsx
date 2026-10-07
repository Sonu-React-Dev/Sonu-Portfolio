"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, FileText, Github, Linkedin, Mail, MapPin, Clock } from "lucide-react";
import { profile } from "@/data/portfolio";
import sonuPhoto from "@/public/sonu-profile.webp";

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
    <section id="top" className="relative min-h-[100dvh] overflow-hidden pt-24 sm:pt-28">
      <div className="grid-bg absolute inset-0 pointer-events-none" />
      <div className="container-x relative flex min-h-[calc(100dvh-7rem)] items-center pb-16 sm:pb-20">
        <div className="grid w-full gap-10 lg:gap-14 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div>
            {/* Status & Location Pill */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 sm:mb-6 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs uppercase tracking-[.22em] text-zinc-400"
            >
              <span className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-[11px] sm:text-xs">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Available for opportunities
              </span>
              <span className="inline-flex items-center gap-1.5 text-zinc-400 text-[11px] sm:text-xs">
                <MapPin size={13} className="text-violet-400" /> Delhi, India
              </span>
              {localTime && (
                <span className="hidden sm:inline-flex items-center gap-1.5 text-zinc-500 text-[11px] sm:text-xs">
                  <Clock size={13} className="text-zinc-500" /> {localTime} IST
                </span>
              )}
            </motion.div>

            {/* Positioning line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold tracking-wide text-violet-300 uppercase"
            >
              {profile.positioning}
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="max-w-5xl text-4xl sm:text-6xl md:text-7xl lg:text-[6.2rem] font-semibold leading-[1.04] sm:leading-[.94] tracking-[-0.04em] sm:tracking-[-.055em]"
            >
              Building digital products{" "}
              <span className="gradient-text">that feel as good as they perform.</span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-zinc-300"
            >
              {profile.subline}
            </motion.p>

            {/* Primary CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48 }}
              className="mt-8 sm:mt-9 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <a
                href="#work"
                className="group flex items-center gap-2 rounded-full bg-white px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-semibold text-black transition hover:scale-[1.02] shadow-lg shadow-white/10"
              >
                View selected work
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="/resume"
                className="glass flex items-center gap-2 rounded-full px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium text-white transition hover:bg-white/10"
              >
                <FileText size={16} className="text-violet-300" />
                <span>Resume / CV</span>
              </a>
              <a
                href="#contact"
                className="glass flex items-center gap-2 rounded-full px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium text-zinc-200 transition hover:bg-white/10 hover:text-white"
              >
                Let&apos;s talk <ArrowUpRight size={16} />
              </a>
            </motion.div>

            {/* Quick Social & Connect Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-7 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-5 pt-4 text-xs text-zinc-400 border-t border-white/5"
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
                className="flex items-center gap-1.5 transition hover:text-white truncate max-w-[220px] sm:max-w-none"
                title="Email Sonu"
              >
                <Mail size={15} className="shrink-0" /> <span className="truncate">{profile.email}</span>
              </a>
            </motion.div>
          </div>

          {/* Right panel — Sonu's professional photo with refined studio lighting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px]"
          >
            {/* Ambient backlight glow */}
            <div className="absolute -inset-4 sm:-inset-6 rounded-[2.5rem] bg-gradient-to-tr from-violet-600/30 via-fuchsia-600/20 to-cyan-500/25 blur-3xl pointer-events-none opacity-80" />
            <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-b from-violet-500/25 via-transparent to-cyan-500/15 blur-md pointer-events-none" />

            {/* Framed portrait card */}
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-b from-zinc-900/95 via-[#0b0c13] to-[#050508] shadow-2xl shadow-violet-950/40 backdrop-blur-md">
              {/* Radial studio halo centered behind portrait */}
              <div className="pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-gradient-to-br from-violet-500/30 via-cyan-400/20 to-transparent blur-2xl" />

              {/* Concentric aura orbital rings */}
              <div className="pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 h-52 w-52 rounded-full border border-violet-400/15" />
              <div className="pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 h-[17rem] w-[17rem] rounded-full border border-dashed border-cyan-400/10" />

              {/* Subtle tech background grid pattern */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_35%,#000_60%,transparent_100%)]" />

              {/* Top subtle rim light highlight */}
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

              {/* Corner crosshairs */}
              <span className="pointer-events-none absolute left-3.5 top-3 font-mono text-[9px] text-violet-400/60 select-none">┌</span>
              <span className="pointer-events-none absolute right-3.5 top-3 font-mono text-[9px] text-cyan-400/60 select-none">┐</span>

              {/* Portrait image */}
              <div className="relative h-full w-full flex items-end justify-center">
                <Image
                  src={sonuPhoto}
                  alt="Sonu Kumar - Full-Stack Developer"
                  priority
                  className="relative z-10 h-full w-full object-cover object-[center_top] filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Gentle dark gradient overlay at bottom for card text readability & grounding */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-2/5 bg-gradient-to-t from-[#050508] via-[#050508]/85 to-transparent" />

              {/* Bottom executive tag */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 right-3 sm:left-4 sm:right-4 z-30 rounded-2xl border border-white/15 bg-black/75 p-3 sm:p-3.5 backdrop-blur-xl shadow-xl transition-all duration-300 group-hover:border-violet-400/30">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="truncate text-xs sm:text-sm font-bold tracking-wide text-white">Sonu Kumar</p>
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400" />
                    </div>
                    <p className="truncate text-[11px] sm:text-xs text-zinc-400">Full-Stack Product Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-4 sm:bottom-7 left-1/2 -translate-x-1/2 text-zinc-500 transition hover:text-white hidden sm:block"
        aria-label="Scroll down to About section"
      >
        <ArrowDownRight className="animate-bounce" />
      </a>
    </section>
  );
}


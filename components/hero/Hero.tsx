"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";
import { profile } from "@/data/portfolio";
import Link from "next/link";

import { MagneticButton } from "../ui/MagneticButton";
import { SplitText } from "../ui/SplitText";
import { Reveal } from "../ui/Reveal";
import { HeroProfile } from "./HeroProfile";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] pt-24 pb-16 overflow-hidden flex items-center">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-primary/10 via-background-primary to-background-primary pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTUwLCAxNTAsIDE1MCwgMC4xKSIvPjwvc3ZnPg==')] pointer-events-none opacity-50" />

      <div className="container-x relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="flex flex-col max-w-3xl">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-2.5 text-[10px] sm:text-[11px] font-bold text-foreground-primary uppercase tracking-[0.15em] mb-6">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                AVAILABLE FOR OPPORTUNITIES <span className="text-foreground-muted">·</span> DELHI, INDIA
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-accent-primary uppercase mb-5">
                Full-Stack Developer · Web · Mobile · AI
              </h2>
            </Reveal>

            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] font-semibold leading-[1.08] tracking-tight text-foreground-primary mb-6 max-w-[850px] [text-wrap:balance] lg:[text-wrap:auto]">
              <SplitText text="I build digital" delayOffset={3} />
              <br className="hidden lg:block" />
              <span className="lg:hidden"> </span>
              <SplitText text="products that feel" delayOffset={4} />
              <br className="hidden lg:block" />
              <span className="lg:hidden"> </span>
              <SplitText text="as good as they" delayOffset={5} />
              <br className="hidden lg:block" />
              <span className="lg:hidden"> </span>
              <span className="text-foreground-muted italic pr-2">
                <SplitText text="perform." delayOffset={6} />
              </span>
            </h1>

            <Reveal delay={0.65}>
              <p className="text-sm md:text-base text-foreground-secondary/90 leading-relaxed max-w-[420px] mb-10 font-medium [text-wrap:balance]">
                {profile.subline}
              </p>
            </Reveal>

            <Reveal delay={0.75}>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/#work" className="block">
                  <MagneticButton className="rounded-full bg-foreground-primary shadow-2xl shadow-foreground-primary/10 hover:scale-[1.02] transition-transform px-7 py-3.5 flex items-center gap-2.5 text-sm font-semibold text-background-primary group">
                    View my work
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </MagneticButton>
                </Link>
                <Link href="/#contact" className="block">
                  <MagneticButton className="rounded-full border border-border-subtle bg-background-secondary/40 backdrop-blur-md hover:bg-background-secondary hover:border-border-muted transition-colors px-7 py-3.5 flex items-center gap-2.5 text-sm font-medium text-foreground-primary group">
                    Let&apos;s work together
                    <ArrowUpRight size={16} className="opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </MagneticButton>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.85}>
              <div className="mt-14 flex flex-wrap gap-3 sm:gap-4 text-[9px] sm:text-[10px] font-bold text-foreground-muted/60 uppercase tracking-[0.25em] items-center">
                <span className="hover:text-foreground-muted transition-colors cursor-default">React Native</span>
                <span>·</span>
                <span className="hover:text-foreground-muted transition-colors cursor-default">React</span>
                <span>·</span>
                <span className="hover:text-foreground-muted transition-colors cursor-default">Next.js</span>
                <span>·</span>
                <span className="hover:text-foreground-muted transition-colors cursor-default">Node.js</span>
                <span>·</span>
                <span className="hover:text-foreground-muted transition-colors cursor-default">TypeScript</span>
                <span>·</span>
                <span className="hover:text-foreground-muted transition-colors cursor-default">AI</span>
              </div>
            </Reveal>
          </div>

          <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[600px] flex items-center justify-center lg:justify-end">
            <HeroProfile />
          </div>
          
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 hidden md:flex">
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-foreground-muted text-center">
          Scroll to explore
        </span>
        <ArrowDown size={12} className="text-foreground-muted" />
        <div className="w-[1px] h-12 bg-gradient-to-b from-foreground-muted/50 to-transparent" />
      </div>
    </section>
  );
}

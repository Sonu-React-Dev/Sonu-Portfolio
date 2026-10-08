"use client";

import { ArrowUpRight } from "lucide-react";
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
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-flex items-center gap-2 text-[11px] md:text-xs font-semibold text-foreground-secondary uppercase tracking-widest">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  Available for opportunities
                </span>
                <span className="hidden sm:inline text-border-subtle">•</span>
                <span className="text-[11px] md:text-xs font-semibold text-foreground-muted tracking-widest uppercase">
                  {profile.location}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="text-[11px] md:text-xs font-bold tracking-[0.25em] text-accent-primary uppercase mb-5">
                Full-Stack Developer · Web · Mobile · AI
              </h2>
            </Reveal>

            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-semibold leading-[1.08] tracking-tight text-foreground-primary mb-6 max-w-[850px]">
              <SplitText text="I build digital" delayOffset={3} />
              <br />
              <SplitText text="products that feel" delayOffset={4} />
              <br />
              <SplitText text="as good as they" delayOffset={5} />
              <br />
              <span className="text-foreground-muted italic pr-2">
                <SplitText text="perform." delayOffset={6} />
              </span>
            </h1>

            <Reveal delay={0.65}>
              <p className="text-sm md:text-base text-foreground-secondary/90 leading-relaxed max-w-[420px] mb-10 font-medium">
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
              <div className="mt-14 flex flex-wrap gap-4 text-[10px] sm:text-[11px] font-bold text-foreground-muted/60 uppercase tracking-[0.2em] items-center">
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

          <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] flex items-center justify-center lg:justify-end">
            <HeroProfile />
          </div>
          
          
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted">Scroll to explore</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-foreground-muted to-transparent" />
      </div>
    </section>
  );
}

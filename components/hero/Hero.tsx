"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import Link from "next/link";

import { MagneticButton } from "../ui/MagneticButton";
import { ArrowLink } from "../ui/ArrowLink";
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
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  Available for opportunities
                </span>
                <span className="text-xs font-medium text-foreground-muted tracking-wide uppercase">
                  {profile.location}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="text-xs font-bold tracking-[0.2em] text-accent-primary uppercase mb-4">
                Full-Stack Product Engineer
              </h2>
            </Reveal>

            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-semibold leading-[1.05] tracking-tight text-foreground-primary mb-6 max-w-[900px]">
              <SplitText text="I build digital" delayOffset={3} />
              <br />
              <SplitText text="products that" delayOffset={4} />
              <br />
              <SplitText text="feel as good as" delayOffset={5} />
              <br />
              <span className="text-foreground-muted italic">
                <SplitText text="they perform." delayOffset={6} />
              </span>
            </h1>

            <Reveal delay={0.65}>
              <p className="text-base md:text-lg text-foreground-secondary leading-relaxed max-w-lg mb-10">
                {profile.subline}
              </p>
            </Reveal>

            <Reveal delay={0.75}>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/#work" className="block">
                  <MagneticButton className="rounded-full bg-foreground-primary shadow-xl shadow-foreground-primary/10 hover:scale-105 px-6 py-3.5 flex items-center gap-2 text-sm font-semibold text-background-primary">
                    View selected work
                    <ArrowDownRight size={16} />
                  </MagneticButton>
                </Link>
                <Link href="/#contact" className="block">
                  <MagneticButton className="rounded-full border border-border-subtle bg-background-secondary/50 backdrop-blur-sm hover:bg-background-secondary px-6 py-3.5 flex items-center gap-2 text-sm font-medium text-foreground-primary">
                    Let&apos;s build something
                  </MagneticButton>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.85}>
              <div className="mt-12 flex flex-wrap gap-4 text-xs font-medium text-foreground-muted uppercase tracking-widest border-t border-border-subtle pt-6">
                <span>React Native</span>
                <span>·</span>
                <span>React</span>
                <span>·</span>
                <span>Next.js</span>
                <span>·</span>
                <span>Node.js</span>
                <span>·</span>
                <span>TypeScript</span>
                <span>·</span>
                <span>AI</span>
              </div>
            </Reveal>
          </div>

          <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] flex items-center justify-center lg:justify-end">
            <HeroProfile />
          </div>
          
        </div>
      </div>
    </section>
  );
}

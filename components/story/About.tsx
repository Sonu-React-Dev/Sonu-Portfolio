"use client";

import { profile } from "@/data/portfolio";
import { SmartImage } from "../ui/SmartImage";
import { MagneticButton } from "../ui/MagneticButton";
import { Reveal } from "../ui/Reveal";

export function About() {
  return (
    <section id="about" className="py-24 bg-background-secondary scroll-mt-12">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1 flex flex-col items-start">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground-primary mb-8">
                About Me
              </h2>
            </Reveal>
            
            <Reveal delay={0.1}>
              <div className="space-y-6 text-lg text-foreground-secondary leading-relaxed mb-10">
                <p>
                  I&apos;m a Full-Stack Product Engineer with a specialized focus on building highly interactive, scalable, and premium web/mobile applications. I bridge the gap between design and engineering, ensuring that architectural integrity meets pixel-perfect execution.
                </p>
                <p>
                  My journey began with a curiosity for how digital products impact real people. Over the years, I&apos;ve had the privilege of architecting complex ecosystem platforms, developing fast e-commerce storefronts, and optimizing enterprise-grade backends.
                </p>
                <p>
                  When I&apos;m not writing code or debugging build pipelines, I&apos;m exploring new frontiers in AI, tinkering with modern architectural patterns, and continuously pushing the boundaries of what&apos;s possible on the web.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-4">
                <a href="/resume" className="block">
                  <MagneticButton className="rounded-full bg-foreground-primary hover:scale-105 px-6 py-3.5 flex items-center justify-center text-sm font-semibold text-background-primary w-full h-full">
                    View Resume
                  </MagneticButton>
                </a>
                <a href={`https://linkedin.com/in/${profile.social.linkedin}`} target="_blank" rel="noopener noreferrer" className="block">
                  <MagneticButton className="rounded-full border border-border-subtle bg-background-primary/50 backdrop-blur-sm hover:bg-background-primary px-6 py-3.5 flex items-center justify-center text-sm font-medium text-foreground-primary w-full h-full">
                    LinkedIn
                  </MagneticButton>
                </a>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal delay={0.2}>
              <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden bg-background-primary border border-border-subtle group md:-rotate-3 hover:rotate-0 transition-transform duration-500 ease-out origin-bottom">
                <SmartImage 
                  src="/sonu-profile.webp"
                  fallback="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMmQyZDJkIi8+PC9zdmc+"
                  alt="Sonu Kumar"
                  fill
                  className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-accent-primary mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

import { experience } from "@/data/portfolio";
import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background-primary scroll-mt-12">
      <div className="container-x">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground-primary mb-16">
            Experience
          </h2>
        </Reveal>

        <div className="relative border-l border-border-subtle ml-3 md:ml-6 pl-8 md:pl-12 space-y-16">
          {experience.map((exp, i) => (
            <div key={i} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-4 h-4 rounded-full border-2 border-background-primary bg-accent-primary shadow-[0_0_0_2px_var(--border-subtle)] group-hover:shadow-[0_0_0_4px_var(--accent-primary)] transition-shadow duration-300" />
              
              <Reveal delay={i * 0.1}>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground-primary">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-medium text-accent-primary mt-1 md:mt-0 font-mono tracking-tight">
                    {exp.period}
                  </span>
                </div>
                
                <h4 className="text-base font-medium text-foreground-secondary mb-4 flex items-center gap-2">
                  {exp.company}
                </h4>
                
                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="text-sm md:text-base text-foreground-secondary leading-relaxed flex gap-3">
                      <span className="text-accent-primary opacity-50 mt-1">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

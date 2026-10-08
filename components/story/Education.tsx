import { education } from "@/data/portfolio";
import { Reveal } from "../ui/Reveal";

export function Education() {
  return (
    <section id="education" className="py-24 bg-background-secondary scroll-mt-12 border-t border-border-subtle">
      <div className="container-x">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground-primary mb-16">
            Education
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-background-primary border border-border-subtle rounded-2xl p-8 h-full hover:border-accent-primary/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-foreground-primary pr-4">
                    {edu.degree}
                  </h3>
                  <span className="text-xs font-mono font-medium text-foreground-muted whitespace-nowrap pt-1">
                    {edu.year}
                  </span>
                </div>
                <h4 className="text-base text-accent-primary mb-2">
                  {edu.institution}
                </h4>
                {edu.location && (
                  <p className="text-sm text-foreground-secondary">
                    {edu.location}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

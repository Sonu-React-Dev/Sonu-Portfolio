import { Reveal } from "../ui/Reveal";

const processData = [
  { title: "Discovery & Planning", description: "Understanding requirements, defining architecture, and establishing the technical roadmap for the product." },
  { title: "Design & Prototyping", description: "Crafting intuitive UX/UI flows and establishing the design system for consistent visual language." },
  { title: "Development & Engineering", description: "Building scalable frontends and robust backends with modern frameworks and best practices." },
  { title: "Testing & Deployment", description: "Rigorous QA, performance optimization, and seamless CI/CD production deployment." }
];

export function Process() {
  return (
    <section className="py-24 bg-background-primary border-b border-border-subtle">
      <div className="container-x">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground-primary mb-4">
              My Approach
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              A structured methodology to guarantee quality and transparency.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processData.map((step, i) => (
            <Reveal key={i} delay={i * 0.1} width="100%">
              <div className="relative p-6 md:p-8 rounded-2xl bg-background-secondary border border-border-subtle h-full overflow-hidden group hover:border-accent-primary/40 transition-colors">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 text-9xl font-bold text-foreground-muted opacity-[0.03] group-hover:opacity-[0.06] transition-opacity select-none pointer-events-none">
                  {i + 1}
                </div>
                <div className="relative z-10">
                  <div className="text-sm font-bold uppercase tracking-widest text-accent-primary mb-4">
                    Phase 0{i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

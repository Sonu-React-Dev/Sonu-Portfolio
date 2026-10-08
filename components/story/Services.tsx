import { services } from "@/data/portfolio";
import { Reveal } from "../ui/Reveal";

export function Services() {
  return (
    <section id="services" className="py-24 bg-background-secondary scroll-mt-12 border-y border-border-subtle">
      <div className="container-x">
        <Reveal>
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground-primary mb-4">
                What I Do
              </h2>
              <p className="text-lg text-foreground-secondary">
                From architecture to pixel-perfect UI, I deliver end-to-end solutions.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={i} delay={i * 0.1} width="100%">
              <div className="bg-background-primary border border-border-subtle rounded-2xl p-8 h-full hover:shadow-xl hover:shadow-background-primary transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-8 text-accent-primary group-hover:scale-110 transition-transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground-secondary leading-relaxed text-sm">
                  {service.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

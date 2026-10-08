import { skills } from "@/data/portfolio";
import { Reveal } from "../ui/Reveal";

export function Skills() {
  const skillCategories = [
    { title: "Languages", items: skills.languages },
    { title: "Frontend", items: skills.frontend },
    { title: "Backend", items: skills.backend },
    { title: "Game & 3D", items: skills.gameAnd3d },
    { title: "Databases", items: skills.databases },
    { title: "Other Tools", items: skills.other },
    { title: "Concepts", items: skills.toolsAndConcepts },
  ];

  return (
    <section id="skills" className="py-24 bg-background-primary scroll-mt-12">
      <div className="container-x">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground-primary mb-4">
              Core Skills
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 0.1} width="100%">
              <div className="flex flex-col h-full bg-background-secondary border border-border-subtle rounded-2xl p-6 md:p-8 hover:border-accent-primary/50 transition-colors">
                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground-muted mb-6">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((skill, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-primary opacity-70" />
                      <span className="font-medium text-foreground-primary">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

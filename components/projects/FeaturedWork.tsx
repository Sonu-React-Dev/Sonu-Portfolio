import { projects } from "@/data/portfolio";
import { ProjectChapter } from "./ProjectChapter";

export function FeaturedWork() {
  const featured = projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.order || 99) - (b.order || 99));

  return (
    <section id="work" className="py-24 bg-background-primary">
      <div className="container-x mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground-primary">
          Selected Work
        </h2>
        
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6">
          {featured.map(p => (
            <a key={p.slug} href={`#${p.slug}`} className="flex items-center gap-4 text-sm font-medium text-foreground-secondary hover:text-foreground-primary transition-colors">
              <span className="text-foreground-muted text-xs font-mono">{p.number}</span>
              {p.title}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        {featured.map((project) => (
          <div key={project.slug} id={project.slug} className="scroll-mt-24">
            <ProjectChapter project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

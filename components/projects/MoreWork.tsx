import { projects } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export function MoreWork() {
  const archive = projects.filter(p => !p.featured);

  if (archive.length === 0) return null;

  return (
    <section className="py-24 bg-background-secondary border-t border-border-subtle">
      <div className="container-x">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground-primary mb-12">
          More Projects
        </h2>

        <div className="flex flex-col border-t border-border-subtle">
          {archive.map(p => (
            <a 
              key={p.slug} 
              href={`/work/${p.slug}`}
              className="group flex flex-col md:flex-row md:items-center py-6 border-b border-border-subtle hover:bg-background-primary/50 transition-colors -mx-4 px-4 rounded-xl md:rounded-none md:mx-0 md:px-0 md:hover:bg-transparent"
              data-cursor="VIEW"
            >
              <div className="w-12 text-sm font-mono text-foreground-muted md:shrink-0 mb-2 md:mb-0">
                {p.number}
              </div>
              <div className="flex-1 md:pr-8">
                <h3 className="text-xl font-medium text-foreground-primary group-hover:text-accent-primary transition-colors mb-1">
                  {p.title}
                </h3>
                <p className="text-sm text-foreground-secondary line-clamp-1">
                  {p.category}
                </p>
              </div>
              <div className="hidden lg:block w-1/3 text-sm text-foreground-muted pr-8 truncate">
                {p.stack.slice(0, 3).join(" · ")}
              </div>
              <div className="hidden md:block w-24 text-sm text-foreground-muted text-right">
                {p.year || "2023"}
              </div>
              <div className="hidden md:flex w-12 justify-end text-foreground-muted group-hover:text-accent-primary transition-colors">
                <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import { type Project } from "@/data/portfolio";
import { ProjectVisual } from "./ProjectVisual";
import { Tag } from "../ui/Tag";
import { ArrowLink } from "../ui/ArrowLink";

export function ProjectChapter({ project }: { project: Project }) {
  return (
    <a href={`/work/${project.slug}`} className="group block relative py-12 md:py-24 border-b border-border-subtle last:border-0" data-cursor="VIEW">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[380px_1fr] gap-8 md:gap-16">
          
          <div className="relative">
            <div className="md:sticky md:top-32 flex flex-col items-start">
              <span className="text-4xl md:text-5xl font-semibold text-foreground-muted mb-4 tracking-tighter">
                {project.number}
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground-primary mb-3 group-hover:text-accent-primary transition-colors">
                {project.title}
              </h3>
              
              <div className="space-y-4 mb-8">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-widest text-foreground-muted mb-1">Role</span>
                  <span className="text-sm text-foreground-secondary">{project.role || project.category}</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-widest text-foreground-muted mb-1">Platforms</span>
                  <span className="text-sm text-foreground-secondary">{project.platforms.join(", ")}</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-widest text-foreground-muted mb-1">Result</span>
                  <span className="text-sm font-medium text-accent-primary">{project.result}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8 max-w-[280px]">
                {project.stack.slice(0, 5).map(tech => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
                {project.stack.length > 5 && (
                  <Tag>+{project.stack.length - 5}</Tag>
                )}
              </div>

              <div className="flex items-center gap-6">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground-primary transition-colors group-hover:text-accent-primary">
                  View case study 
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
                
                {project.url && (
                  <object className="relative z-20">
                    <ArrowLink href={project.url} target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-foreground-primary">
                      Visit live
                    </ArrowLink>
                  </object>
                )}
              </div>
            </div>
          </div>

          <div className="w-full">
            <ProjectVisual project={project} />
          </div>

        </div>
      </div>
    </a>
  );
}

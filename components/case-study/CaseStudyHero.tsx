import { Project } from "@/data/portfolio";
import { SmartImage } from "../ui/SmartImage";

export function CaseStudyHero({ project }: { project: Project }) {
  return (
    <section className="relative pt-32 pb-24 min-h-[70vh] flex flex-col justify-center border-b border-border-subtle bg-background-primary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-primary/10 via-background-primary to-background-primary pointer-events-none" />
      
      <div className="container-x relative z-10 flex flex-col items-center text-center">
        <span className="text-xs font-bold tracking-[0.2em] text-accent-primary uppercase mb-6">
          {project.category}
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground-primary mb-8 max-w-4xl">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-foreground-secondary max-w-2xl mb-12">
          {project.description || project.resumeDesc}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-foreground-secondary mb-16 border-y border-border-subtle py-6 w-full max-w-3xl">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted">Role</span>
            <span className="font-medium text-foreground-primary">{project.role || "Full-Stack Developer"}</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-border-subtle" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted">Timeline</span>
            <span className="font-medium text-foreground-primary">{project.year || "2023"}</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-border-subtle" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted">Platforms</span>
            <span className="font-medium text-foreground-primary">{project.platforms.join(", ")}</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-border-subtle" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted">Result</span>
            <span className="font-medium text-accent-primary">{project.result}</span>
          </div>
        </div>

        {project.images?.desktop && (
          <div className="w-full max-w-6xl aspect-[16/10] relative rounded-xl md:rounded-[2rem] overflow-hidden border border-border-subtle shadow-2xl">
            <SmartImage 
              src={project.images.desktop.replace('desktop.webp', 'poster.webp')}
              alt={project.title}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}

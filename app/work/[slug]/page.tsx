import { projects } from "@/data/portfolio";
import { notFound } from "next/navigation";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Tag } from "@/components/ui/Tag";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <main className="bg-background-primary min-h-screen">
        <CaseStudyHero project={project} />

        <div className="container-x py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 lg:gap-24">
            
            <div className="space-y-16">
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground-primary">Overview</h2>
                <p className="text-foreground-secondary leading-relaxed text-lg">
                  {project.description}
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground-primary">Key Contributions</h2>
                <ul className="space-y-4">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2.5 shrink-0" />
                      <p className="text-foreground-secondary leading-relaxed">{bullet}</p>
                    </li>
                  ))}
                </ul>
              </section>

              {project.images?.desktop && (
                <section className="py-8">
                  <div className="bg-background-secondary rounded-2xl md:rounded-[2rem] p-4 md:p-8 border border-border-subtle flex items-center justify-center overflow-hidden">
                    <div className="relative w-full rounded-xl border border-border-subtle shadow-2xl overflow-hidden">
                      <img 
                        src={project.images.desktop} 
                        alt={`${project.title} desktop view`} 
                        className="w-full h-auto object-cover object-top" 
                      />
                    </div>
                  </div>
                </section>
              )}
            </div>

            <div className="space-y-12">
              <div className="sticky top-32">
                <div className="mb-12">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-foreground-muted mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </div>

                {project.url && (
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-foreground-muted mb-4">Live URL</h3>
                    <ArrowLink href={project.url} target="_blank" rel="noopener noreferrer">
                      Visit Project
                    </ArrowLink>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import { ArrowRight, ArrowUpRight, Eye, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects, type Project } from "@/lib/data";

export function ProjectsSection({ onPreviewProject }: { onPreviewProject: (project: Project) => void }) {
  return (
    <section id="projects" className="section-spacing">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work that balances code quality and visual clarity"
          description="Each project is framed to show how I think about the end user, engineering tradeoffs, and the kind of product ownership expected in strong internship environments."
        />
        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <Card className="group h-full overflow-hidden">
                <div className={`relative overflow-hidden border-b border-white/10 bg-gradient-to-br ${project.accent} p-6`}>
                  <div className="absolute right-6 top-6 rounded-full bg-white/75 px-3 py-1 text-xs font-medium text-slate-900">
                    {project.category}
                  </div>
                  <div className="max-w-sm rounded-[1.75rem] border border-white/40 bg-white/55 p-5 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">Featured project</p>
                    <h3 className="mt-4 text-2xl font-semibold text-slate-900">{project.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{project.summary}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item} className="bg-background/80 text-foreground">
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button variant="secondary" onClick={() => onPreviewProject(project)}>
                      <Eye className="h-4 w-4" />
                      Quick View
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to={`/projects/${project.slug}`}>
                        Case Study
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="ghost" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noreferrer">
                        <ArrowUpRight className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

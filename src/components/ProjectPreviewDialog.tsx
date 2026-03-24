import { ArrowUpRight, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/data";

export function ProjectPreviewDialog({
  project,
  open,
  onOpenChange
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!project) {
    return <Dialog open={open} onOpenChange={onOpenChange} />;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <div className={`mb-6 rounded-[1.75rem] border border-white/10 bg-gradient-to-br ${project.accent} p-6`}>
          <Badge className="mb-4 bg-white/70 text-slate-900">{project.category}</Badge>
          <p className="max-w-2xl text-sm leading-6 text-slate-800/80">{project.summary}</p>
        </div>
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-sm leading-7 text-muted-foreground">
            <div>
              <p className="mb-2 text-sm font-semibold text-foreground">Challenge</p>
              <p>{project.challenge}</p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-foreground">Solution</p>
              <p>{project.solution}</p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-foreground">Outcome</p>
              <p>{project.outcome}</p>
            </div>
          </div>
          <div className="glass-panel rounded-[1.75rem] p-5">
            <p className="text-sm font-semibold text-foreground">Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Badge key={item} className="bg-background/80 text-foreground">
                  {item}
                </Badge>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-foreground">Highlights</p>
            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              {project.metrics.map((metric) => (
                <li key={metric} className="rounded-2xl bg-background/60 px-4 py-3">
                  {metric}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  <ArrowUpRight className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

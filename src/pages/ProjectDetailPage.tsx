import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { getPortfolioData, getUiText } from "@/lib/i18n";

export default function ProjectDetailPage({
  onNavigateSection
}: {
  onNavigateSection: (sectionId: string) => void;
}) {
  const { language } = useLanguage();
  const { projects } = getPortfolioData(language);
  const ui = getUiText(language);

  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="container py-32">
        <Card>
          <CardContent className="p-8">
            <p className="text-lg font-semibold">{ui.projectNotFoundTitle}</p>
            <p className="mt-2 text-muted-foreground">{ui.projectNotFoundDescription}</p>
            <Button className="mt-6" onClick={() => onNavigateSection("projects")}>
              {ui.backToProjects}
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="pb-20 pt-10"
    >
      <div className="container">
        <Button variant="ghost" onClick={() => onNavigateSection("projects")} className="mb-8">
          <ArrowLeft className="h-4 w-4" />
          {ui.backToProjects}
        </Button>

        <section className="glass-panel overflow-hidden rounded-[2.5rem]">
          <div className={`border-b border-white/10 bg-gradient-to-br ${project.accent} px-6 py-12 sm:px-10`}>
            <Badge className="mb-6 bg-white/80 text-slate-900">{project.category}</Badge>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-800/85 sm:text-lg">{project.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  <ArrowUpRight className="h-4 w-4" />
                  {ui.liveDemo}
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 p-6 sm:p-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold">{ui.detailOverview}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold">{ui.detailChallenge}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.challenge}</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold">{ui.detailSolution}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.solution}</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold">{ui.detailOutcome}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.outcome}</p>
              </section>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm font-semibold text-foreground">{ui.detailTechStack}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item} className="bg-background/80 text-foreground">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm font-semibold text-foreground">{ui.detailHighlights}</p>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    {project.metrics.map((metric) => (
                      <li key={metric} className="rounded-2xl bg-background/60 px-4 py-3">
                        {metric}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/10">
                <CardContent className="p-6 text-sm leading-7 text-foreground">
                  {ui.detailNote}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </motion.main>
  );
}

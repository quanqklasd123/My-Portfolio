import { Code2, FolderGit2, ServerCog } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories } from "@/lib/data";

const iconMap = {
  Frontend: Code2,
  Backend: ServerCog,
  Tools: FolderGit2
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-spacing">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="A stack designed for practical delivery"
          description="My toolkit is centered on shipping polished user interfaces while understanding the backend systems needed to support them cleanly."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.title as keyof typeof iconMap];
            return (
              <Reveal key={category.title} delay={index * 0.08}>
                <Card className="h-full overflow-hidden">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                    <p className="text-sm leading-6 text-muted-foreground">{category.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    {category.items.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-secondary">
                          <div
                            className="h-2.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

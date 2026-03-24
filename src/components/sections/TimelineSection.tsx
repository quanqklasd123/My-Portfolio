import { GraduationCap, BriefcaseBusiness } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { timeline } from "@/lib/data";

export function TimelineSection() {
  return (
    <section id="timeline" className="section-spacing">
      <div className="container">
        <SectionHeading
          eyebrow="Experience & Education"
          title="A timeline built around growth, shipping, and readiness"
          description="Even at the intern stage, I want my portfolio to communicate progression clearly: what I have built, how I collaborate, and where I am heading next."
        />
        <div className="relative mt-12 space-y-6 before:absolute before:left-4 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-border sm:before:left-1/2">
          {timeline.map((item, index) => {
            const Icon = item.type === "Experience" ? BriefcaseBusiness : GraduationCap;
            return (
              <Reveal key={`${item.title}-${item.period}`} delay={index * 0.08}>
                <div className="relative grid gap-4 sm:grid-cols-2 sm:gap-8">
                  <div className={index % 2 === 0 ? "sm:pr-10" : "sm:order-2 sm:pl-10"}>
                    <div className="glass-panel rounded-[1.75rem] p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <Badge className="mb-2 bg-background/80 text-foreground">{item.type}</Badge>
                          <p className="text-sm text-muted-foreground">{item.period}</p>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm font-medium text-primary">{item.organization}</p>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
                      <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="rounded-2xl bg-background/60 px-4 py-3">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={index % 2 === 0 ? "hidden sm:block" : "hidden sm:block sm:order-1"} />
                  <div className="absolute left-4 top-10 h-3.5 w-3.5 rounded-full bg-primary shadow-glow sm:left-1/2 sm:-translate-x-1/2" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

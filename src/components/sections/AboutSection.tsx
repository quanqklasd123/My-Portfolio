import { Compass, Layers3, Rocket } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { getPortfolioData, getUiText } from "@/lib/i18n";

export function AboutSection() {
  const { language } = useLanguage();
  const { profile } = getPortfolioData(language);
  const ui = getUiText(language);

  const cards = [
    {
      title: ui.aboutCardTitles.intro,
      description: profile.bio,
      icon: Layers3
    },
    {
      title: ui.aboutCardTitles.goals,
      description: profile.goals,
      icon: Compass
    },
    {
      title: ui.aboutCardTitles.strengths,
      description: profile.strengths.join(" • "),
      icon: Rocket
    }
  ];

  return (
    <section id="about" className="section-spacing">
      <div className="container">
        <SectionHeading
          eyebrow={ui.aboutEyebrow}
          title={ui.aboutTitle}
          description={ui.aboutDescription}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 0.08}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-7 text-muted-foreground">{card.description}</p>
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

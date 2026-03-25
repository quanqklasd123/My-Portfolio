import { motion } from "framer-motion";
import { ArrowRight, Download, Globe2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { getPortfolioData, getUiText } from "@/lib/i18n";

export function HeroSection({ onNavigateSection }: { onNavigateSection: (sectionId: string) => void }) {
  const { language } = useLanguage();
  const { heroStats, profile } = getPortfolioData(language);
  const ui = getUiText(language);
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="relative overflow-hidden pb-14 pt-12 sm:pb-16 sm:pt-20">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-background/85 text-foreground">
              <Globe2 className="mr-2 h-3.5 w-3.5 text-primary" />
              {ui.heroAvailability}
            </Badge>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">{profile.role}</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {ui.heroTitleBefore}
              <span className="text-gradient"> {ui.heroTitleHighlight} </span>
              {ui.heroTitleAfter}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {profile.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={() => onNavigateSection("projects")}>
                {ui.viewProjects}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href={`${baseUrl}tran-van-quan-cv.pdf`} download="Tran-Van-Quan-CV.pdf">
                  <Download className="h-4 w-4" />
                  {ui.downloadCv}
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-[1.5rem] px-5 py-5">
                <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute left-10 top-6 hidden h-24 w-24 animate-pulse-ring rounded-full bg-primary/25 lg:block" />
          <div className="glass-panel relative overflow-hidden rounded-[2.5rem] p-4 sm:p-6">
            <div className="absolute inset-x-10 top-0 h-40 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="grid gap-4 sm:grid-cols-[1fr_0.88fr]">
              <div className="relative rounded-[2rem] bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 p-4 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
                <div className="mx-auto flex aspect-[4/5] w-full max-w-[330px] items-center justify-center rounded-[1.5rem] bg-gradient-to-b from-sky-200/55 via-blue-200/40 to-indigo-200/45 p-4">
                  <div className="h-full w-full overflow-hidden rounded-[1.2rem]">
                    <img
                      src={`${baseUrl}cv-assets/img-00.jpg`}
                      alt={ui.profileIllustrationAlt}
                      className="h-full w-full object-cover object-[50%_38%]"
                    />
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 rounded-2xl bg-white/80 px-4 py-3 backdrop-blur dark:bg-slate-900/80">
                  <p className="text-sm font-semibold">{profile.name}</p>
                  <p className="text-xs text-muted-foreground">{profile.location}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-[2rem] border border-white/10 bg-slate-950 p-6 text-slate-50 dark:bg-slate-900">
                  <div className="flex items-center gap-2 text-sm text-sky-300">
                    <Sparkles className="h-4 w-4" />
                    {ui.productMindset}
                  </div>
                  <p className="mt-4 text-xl font-semibold leading-snug">
                    {ui.productMindsetBody}
                  </p>
                </div>
                <div className="glass-panel rounded-[2rem] p-6">
                  <p className="text-sm font-semibold text-foreground">{ui.currentFocus}</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                    {ui.heroFocusItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[2rem] border border-primary/15 bg-primary/10 p-6 text-sm leading-6 text-foreground">
                  {ui.heroInternshipNote}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

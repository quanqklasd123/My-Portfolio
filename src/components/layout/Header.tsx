import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, Sparkles, X } from "lucide-react";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/cn";
import { getPortfolioData, getUiText } from "@/lib/i18n";

export function Header({
  activeSection,
  onNavigateSection
}: {
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const { language } = useLanguage();
  const { navItems, profile } = getPortfolioData(language);
  const ui = getUiText(language);

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="container">
        <div className="glass-panel flex items-center justify-between rounded-full px-3 py-2 sm:px-4">
          <button
            onClick={() => handleNavClick("top")}
            className="flex items-center gap-3 rounded-full px-2 py-1.5 text-left transition hover:bg-secondary/80"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Code2 className="h-5 w-5" />
            </span>
            <span className="hidden min-[440px]:block">
              <span className="block text-sm font-semibold text-foreground">{profile.name}</span>
              <span className="block text-xs text-muted-foreground">{profile.role}</span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => setHoveredNav(item.id)}
                onMouseLeave={() => setHoveredNav(null)}
                whileHover={activeSection === item.id ? undefined : { y: -1, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition duration-300",
                  activeSection === item.id
                    ? "text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeSection === item.id ? (
                  <motion.span
                    layoutId="header-active-nav"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-primary"
                  />
                ) : null}

                <AnimatePresence>
                  {hoveredNav === item.id && activeSection !== item.id ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 rounded-full border border-primary/35 bg-primary/20"
                    />
                  ) : null}
                </AnimatePresence>

                <span className="relative z-10">{item.label}</span>
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 sm:flex">
              <LanguageToggle />
              <ThemeToggle />
              <Button variant="secondary" onClick={() => handleNavClick("contact")} className="rounded-full">
                <Sparkles className="h-4 w-4" />
                {ui.letsTalk}
              </Button>
            </div>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 md:hidden"
              onClick={() => setOpen((current) => !current)}
              aria-label={ui.toggleNavigationAria}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="glass-panel mt-3 rounded-[2rem] p-3 md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-left text-sm font-medium transition",
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-background/60 text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="mt-1 flex items-center justify-between rounded-2xl bg-background/60 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <LanguageToggle />
                    <ThemeToggle />
                  </div>
                  <Button variant="secondary" onClick={() => handleNavClick("contact")}>
                    {ui.letsTalk}
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}

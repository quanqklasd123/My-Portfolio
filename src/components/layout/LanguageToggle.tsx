import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { getUiText } from "@/lib/i18n";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const ui = getUiText(language);

  return (
    <Button
      variant="secondary"
      onClick={toggleLanguage}
      aria-label={ui.languageButtonAria}
      className="h-10 rounded-full px-3"
    >
      <Languages className="h-4 w-4" />
      <span className="text-xs font-semibold uppercase tracking-[0.08em]">{language === "en" ? "EN" : "VI"}</span>
    </Button>
  );
}

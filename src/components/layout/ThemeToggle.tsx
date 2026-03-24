import { MoonStar, SunMedium } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import { getUiText } from "@/lib/i18n";

export function ThemeToggle() {
  const { language } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const ui = getUiText(language);

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={toggleTheme}
      aria-label={ui.toggleThemeAria}
      className="h-10 w-10 rounded-full"
    >
      {theme === "dark" ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
    </Button>
  );
}

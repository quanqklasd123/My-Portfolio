import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { getUiText } from "@/lib/i18n";

export function ScrollToTopButton() {
  const { language } = useLanguage();
  const ui = getUiText(language);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <Button
      size="icon"
      className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={ui.scrollToTopAria}
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  );
}

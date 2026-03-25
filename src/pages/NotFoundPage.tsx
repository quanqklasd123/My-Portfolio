import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { getUiText } from "@/lib/i18n";

export default function NotFoundPage() {
  const { language } = useLanguage();
  const ui = getUiText(language);

  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45 }}
      className="container flex min-h-[70vh] items-center justify-center py-20"
    >
      <div className="glass-panel max-w-lg rounded-[2rem] p-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">{ui.notFoundHeadline}</h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">{ui.notFoundDescription}</p>
        <Button className="mt-8" asChild>
          <Link to="/">{ui.returnHome}</Link>
        </Button>
      </div>
    </motion.main>
  );
}

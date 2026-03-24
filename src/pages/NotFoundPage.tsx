import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
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
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">The page you requested is not here.</h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          The portfolio route may have changed, or the page was never created.
        </p>
        <Button className="mt-8" asChild>
          <a href="/">Return Home</a>
        </Button>
      </div>
    </motion.main>
  );
}

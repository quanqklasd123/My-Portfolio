import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
      className="max-w-2xl"
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({
  tag,
  title,
  description,
  icon,
}: {
  tag: string;
  title: string;
  description?: string;
  icon?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex items-center gap-2 font-mono text-xs text-primary mb-3">
        {icon}
        <span className="text-glow-cyber">[{tag}]</span>
        <span className="h-px flex-1 bg-gradient-to-r from-primary/60 to-transparent" />
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-2 text-muted-foreground max-w-2xl">{description}</p>
      )}
    </motion.div>
  );
}

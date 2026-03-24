import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Badge({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}

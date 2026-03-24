import * as React from "react";
import { cn } from "@/lib/cn";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "flex min-h-[140px] w-full rounded-3xl border border-input bg-background/70 px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };

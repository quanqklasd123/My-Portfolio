import * as React from "react";
import { cn } from "@/lib/cn";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-2xl border border-input bg-background/70 px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };

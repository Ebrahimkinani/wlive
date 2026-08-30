import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: "default" | "muted";
};

export function Section({
  className,
  tone = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-[var(--section-y-sm)] md:py-[var(--section-y)]",
        tone === "muted" && "bg-surface-muted/60",
        className
      )}
      {...props}
    />
  );
}

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[0.625rem] font-medium uppercase tracking-wider text-text-tertiary",
        className
      )}
    >
      {children}
    </p>
  );
}

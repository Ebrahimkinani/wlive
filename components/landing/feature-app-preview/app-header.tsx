import { ChevronLeft } from "lucide-react";

import { cn } from "@/lib/utils";

type AppHeaderProps = {
  title: string;
  showBack?: boolean;
  rightSlot?: React.ReactNode;
  className?: string;
};

export function AppHeader({
  title,
  showBack = false,
  rightSlot,
  className,
}: AppHeaderProps) {
  return (
    <header
      className={cn(
        "flex items-center gap-2 border-b border-border px-4 py-3",
        className
      )}
    >
      {showBack ? (
        <ChevronLeft
          className="size-4 shrink-0 text-text-tertiary"
          strokeWidth={2}
          aria-hidden
        />
      ) : null}
      <h3 className="min-w-0 flex-1 truncate text-[0.8125rem] font-semibold text-text-primary">
        {title}
      </h3>
      {rightSlot ? <div className="shrink-0">{rightSlot}</div> : null}
    </header>
  );
}

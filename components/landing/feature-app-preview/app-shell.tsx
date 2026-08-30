import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { AppBottomNav } from "./app-bottom-nav";
import type { NavTab } from "./preview-data";

type AppShellProps = {
  header?: ReactNode;
  children: ReactNode;
  activeTab: NavTab;
  showBottomNav?: boolean;
  className?: string;
};

export function AppShell({
  header,
  children,
  activeTab,
  showBottomNav = true,
  className,
}: AppShellProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card-elevated shadow-soft",
        "aspect-[9/19] max-h-[28rem]",
        className
      )}
    >
      {header}
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">{children}</div>
      {showBottomNav ? <AppBottomNav activeTab={activeTab} /> : null}
    </div>
  );
}

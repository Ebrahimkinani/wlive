"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div
        className={cn(
          "inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-nav-control",
          className
        )}
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const ActiveIcon = isDark ? Moon : Sun;
  const nextTheme = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-nav-control text-nav-foreground transition-colors duration-200 hover:bg-nav-icon-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-nav-surface",
        className
      )}
      aria-label={`Theme: ${isDark ? "dark" : "light"}. Switch to ${nextTheme}.`}
      title={`Switch to ${nextTheme} theme`}
    >
      <ActiveIcon className="size-4" strokeWidth={1.75} aria-hidden />
    </button>
  );
}

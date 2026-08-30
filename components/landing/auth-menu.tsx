"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { User } from "lucide-react";
import { useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type AuthMenuProps = {
  className?: string;
};

export function AuthMenu({ className }: AuthMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  const linkClass =
    "inline-flex h-8 shrink-0 items-center rounded-full px-3 text-nav text-nav-foreground whitespace-nowrap transition-colors hover:bg-nav-icon-hover";

  return (
    <div
      ref={rootRef}
      className={cn("flex items-center", className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-label="Account"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-nav-control text-nav-foreground transition-colors duration-200 hover:bg-nav-icon-hover"
      >
        <User className="size-4" strokeWidth={1.75} aria-hidden />
      </button>

      <div
        className={cn(
          "flex items-center overflow-hidden",
          !reduceMotion &&
            "transition-[max-width,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "max-w-[11rem] opacity-100" : "max-w-0 opacity-0"
        )}
      >
        <Link
          href="/login"
          className={linkClass}
          onClick={() => setOpen(false)}
        >
          Login
        </Link>
        <Link
          href="/register"
          className={linkClass}
          onClick={() => setOpen(false)}
        >
          Register
        </Link>
      </div>
    </div>
  );
}

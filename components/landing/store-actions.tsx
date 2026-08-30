import Link from "next/link";

import { AppleStoreIcon, GooglePlayIcon } from "@/components/icons/store-icons";
import { stores } from "@/config/site";
import { cn } from "@/lib/utils";

type StoreActionsProps = {
  variant?: "nav" | "page";
  className?: string;
};

export function StoreActions({ variant = "page", className }: StoreActionsProps) {
  const isNav = variant === "nav";

  const buttonClass = cn(
    "inline-flex items-center justify-center rounded-full transition-colors duration-200",
    isNav
      ? "size-8 bg-nav-control text-nav-foreground hover:bg-nav-icon-hover"
      : "size-11 border border-border bg-surface-raised text-text-primary hover:bg-surface-muted"
  );

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <Link
        href={stores.appStore}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
        className={buttonClass}
      >
        <AppleStoreIcon className={isNav ? "size-4" : "size-5"} />
      </Link>
      <Link
        href={stores.googlePlay}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
        className={buttonClass}
      >
        <GooglePlayIcon className={isNav ? "size-4" : "size-5"} />
      </Link>
    </div>
  );
}

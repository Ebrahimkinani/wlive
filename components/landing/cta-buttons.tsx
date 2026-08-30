import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/config/site";
import { cn } from "@/lib/utils";

export function PrimaryCta({
  href = routes.register,
  children = "Get started",
  className,
}: {
  href?: string;
  children?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants(),
        "h-11 rounded-full bg-brand px-6 text-button text-white shadow-none transition-colors duration-200 hover:bg-brand-hover",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function SecondaryCta({
  href = routes.login,
  children = "Sign in",
  className,
}: {
  href?: string;
  children?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-11 items-center rounded-full px-5 text-button text-text-secondary transition-colors duration-200 hover:text-text-primary",
        className
      )}
    >
      {children}
    </Link>
  );
}

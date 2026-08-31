"use client";

import Link from "next/link";

import { markHomeScrollReset } from "@/lib/home-scroll";

type AuthBackLinkProps = {
  siteName: string;
};

export function AuthBackLink({ siteName }: AuthBackLinkProps) {
  return (
    <Link
      href="/"
      scroll
      onClick={() => markHomeScrollReset()}
      className="mb-10 text-small text-text-tertiary hover:text-text-primary"
    >
      ← {siteName}
    </Link>
  );
}

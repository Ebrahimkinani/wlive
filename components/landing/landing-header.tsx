"use client";

import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NotchNav } from "@/components/ui/adaptive-notch-navigation-bar";
import { AuthMenu } from "@/components/landing/auth-menu";
import { StoreActions } from "@/components/landing/store-actions";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "@/config/navigation";
import { site } from "@/config/site";

export function LandingHeader() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState(navItems[0]?.id ?? "product");

  useEffect(() => {
    const ids = navItems.map((item) => item.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleActiveChange = (id: string) => {
    setActiveId(id);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const scrollToHero = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("hero")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      scrollToHero();
    }
  };

  const logo = (
    <Link
      href="/#hero"
      onClick={handleLogoClick}
      className="flex h-8 items-center gap-2"
    >
      <Image
        src="/logo.png"
        alt={`${site.name} logo`}
        width={24}
        height={24}
        className="size-6 rounded-md object-cover"
      />
      <span className="text-nav font-semibold text-nav-foreground">
        {site.name}
      </span>
    </Link>
  );

  const rightContent = (
    <div className="flex items-center gap-1.5">
      <ThemeToggle />
      <StoreActions variant="nav" />
      <AuthMenu />
    </div>
  );

  return (
    <LandingHeaderBar
      logo={logo}
      rightContent={rightContent}
      activeId={activeId}
      onActiveChange={handleActiveChange}
    />
  );
}

function LandingHeaderBar({
  logo,
  rightContent,
  activeId,
  onActiveChange,
}: {
  logo: ReactNode;
  rightContent: ReactNode;
  activeId: string;
  onActiveChange: (id: string) => void;
}) {
  return (
    <NotchNav
      items={navItems}
      activeId={activeId}
      position="top"
      logo={logo}
      rightContent={rightContent}
      showLogo
      showRightContent
      onActiveChange={onActiveChange}
    />
  );
}

import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";

import { buttonVariants } from "@/components/ui/button";
import { footerLinks } from "@/config/navigation";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

function IconX(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.725-8.835L1.254 2.25H8.08l4.25 5.672L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1Z" />
    </svg>
  );
}

function IconYouTube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 9 2 12 2 12s0 3 .4 4.8a2.5 2.5 0 0 0 1.8 1.8C6 19 12 19 12 19s6 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.8.4-4.8.4-4.8s0-3-.4-4.8ZM10 15.5V8.5l5.5 3.5L10 15.5Z" />
    </svg>
  );
}

const socials = [
  { href: "https://x.com/wlive_apps", label: "X", icon: IconX },
  {
    href: "https://www.instagram.com/wliveqtr",
    label: "Instagram",
    icon: IconInstagram,
  },
  {
    href: "https://www.facebook.com/people/Wlive-%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D8%AF%D8%B1%D8%AF%D8%B4%D8%A9-%D8%B5%D9%88%D8%AA%D9%8A%D8%A9/61565389093486/",
    label: "Facebook",
    icon: IconFacebook,
  },
  {
    href: "https://www.youtube.com/@WLiveOfficial",
    label: "YouTube",
    icon: IconYouTube,
  },
];

export function StackedCircularFooter() {
  return (
    <footer className="bg-footer-surface py-14 sm:py-16 md:py-20">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <Link
            href="/#hero"
            className="mb-6 flex size-20 items-center justify-center rounded-full bg-brand-soft sm:mb-8"
            aria-label={`${site.name} home`}
          >
            <Image
              src="/logo.png"
              alt={`${site.name} logo`}
              width={40}
              height={40}
              className="size-10 rounded-xl object-cover"
            />
          </Link>
          <nav
            aria-label="Footer"
            className="mb-6 flex w-full max-w-md flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:mb-8 sm:max-w-none sm:gap-6"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-small text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "icon" }),
                    "rounded-full"
                  )}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
          <p className="text-small text-muted-foreground">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

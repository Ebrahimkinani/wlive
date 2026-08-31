import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

import { StripExtensionAttrsScript } from "@/components/strip-extension-attrs-script";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/config/site";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `W Live — ${site.tagline}`,
    template: "%s · W Live",
  },
  description: site.description,
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-background text-foreground font-sans"
        suppressHydrationWarning
      >
        <StripExtensionAttrsScript />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

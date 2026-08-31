import { HeroBackground } from "@/components/ui/tailwind-css-background-snippet";

import { HeroSection } from "./hero-section";

export function HeroArea() {
  return (
    <div className="relative isolate overflow-x-hidden bg-background">
      <div className="relative flex min-h-[68vh] flex-col justify-end md:min-h-[74vh] lg:min-h-[78vh]">
        <HeroBackground />
        <div className="relative z-10 w-full pb-20 pt-24 sm:pb-24 md:pb-32 md:pt-28 lg:pb-36 lg:pt-28">
          <HeroSection />
        </div>
      </div>
    </div>
  );
}

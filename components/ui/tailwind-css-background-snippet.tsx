import { cn } from "@/lib/utils";

type HeroBackgroundProps = {
  className?: string;
};

const layerTransition =
  "transition-[background-color,background,opacity] duration-500 ease-[var(--ease-premium)] motion-reduce:transition-none";

export function HeroBackground({ className }: HeroBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 bottom-0 z-0 min-h-full overflow-hidden",
        className
      )}
    >
      <div className={cn("absolute inset-0 bg-hero-glow-primary", layerTransition)} />
      <div
        className={cn(
          "absolute inset-0 bg-hero-glow-secondary max-md:opacity-80",
          layerTransition
        )}
      />
    </div>
  );
}

/** Demo wrapper — not used on the W Live landing page. */
export function Hero() {
  return (
    <section className="relative min-h-screen">
      <HeroBackground />
    </section>
  );
}

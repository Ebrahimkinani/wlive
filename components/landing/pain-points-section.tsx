import { Heart, Mic, Radio } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/landing/reveal";
import { painPoints } from "@/config/features";
import { cn } from "@/lib/utils";

const icons = {
  mic: Mic,
  radio: Radio,
  heart: Heart,
};

export function PainPointsSection() {
  return (
    <Section className="pt-0 md:pt-0">
      <Container>
        <Reveal>
          <ul className="grid gap-6 md:grid-cols-3 md:gap-8">
            {painPoints.map((point) => {
              const Icon = icons[point.icon];
              return (
                <li key={point.title}>
                  <div
                    className={cn(
                      "group h-full rounded-2xl border border-border bg-surface-raised/50 p-6 text-center transition-all duration-300 ease-out",
                      "hover:border-brand/25 hover:bg-brand-soft/30 hover:shadow-soft motion-safe:hover:-translate-y-0.5",
                      "md:p-7 md:text-left"
                    )}
                  >
                    <Icon
                      className="mx-auto size-5 text-text-tertiary transition-colors duration-300 group-hover:text-brand md:mx-0"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <p className="mt-4 text-h3 text-text-primary transition-colors duration-300 group-hover:text-brand">
                      {point.title}
                    </p>
                    <p className="mt-2 text-body text-text-secondary">
                      {point.detail}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}

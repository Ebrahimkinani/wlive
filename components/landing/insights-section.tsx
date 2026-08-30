import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/landing/reveal";
import { liveStats } from "@/config/features";
import { cn } from "@/lib/utils";

export function InsightsSection() {
  return (
    <Section id="activity" className="scroll-mt-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-eyebrow text-text-tertiary">Live activity</p>
            <h2 className="mt-4 text-h1 text-text-primary">
              Something is always happening.
            </h2>
            <p className="mx-auto mt-4 max-measure text-body-lg text-text-secondary">
              Rooms across 50+ countries — people talking, listening, and
              finding their place tonight.
            </p>
          </div>
          <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-section border border-border bg-surface-raised p-6 sm:p-10">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
              {liveStats.map((stat) => (
                <div
                  key={stat.label}
                  className={cn(
                    "group rounded-2xl border border-transparent bg-transparent p-4 text-center transition-all duration-300 ease-out sm:p-5 sm:text-left",
                    "hover:border-brand/25 hover:bg-brand-soft/30 hover:shadow-soft motion-safe:hover:-translate-y-0.5"
                  )}
                >
                  <p className="text-caption text-text-tertiary transition-colors duration-300 group-hover:text-text-secondary">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-h1 text-text-primary transition-colors duration-300 group-hover:text-brand">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-caption text-text-secondary">
                    {stat.hint}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 h-px bg-border" />
            <p className="mt-8 max-w-md text-small text-text-secondary">
              W Live is built for presence — not passive scrolling. Join a room
              and feel the difference in minutes.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

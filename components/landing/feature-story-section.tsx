import { Gift, Mic, Users } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/landing/reveal";
import { cn } from "@/lib/utils";

const cardHover =
  "transition-all duration-300 ease-out hover:border-brand/25 hover:bg-brand-soft/30 hover:shadow-soft motion-safe:hover:-translate-y-0.5";

export function FeatureStorySection() {
  return (
    <Section id="community" className="scroll-mt-28">
      <Container>
        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            <article
              className={cn(
                "group rounded-section border border-border bg-surface-raised p-8 md:col-span-2 md:p-10",
                cardHover,
                "hover:bg-brand-soft/30"
              )}
            >
              <Mic
                className="size-5 text-text-tertiary transition-colors duration-300 group-hover:text-brand"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mt-6 text-h2 text-text-primary transition-colors duration-300 group-hover:text-brand">
                Talk without performing
              </h3>
              <p className="mt-3 max-w-md text-body text-text-secondary">
                Listen first, speak when you&apos;re ready. Voice makes connection
                human — no filters, no endless captions.
              </p>
            </article>
            <article
              className={cn(
                "group rounded-section border border-border bg-brand-soft p-8 md:p-10",
                cardHover,
                "hover:border-brand/40 hover:bg-brand-soft"
              )}
            >
              <Gift
                className="size-5 text-brand transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mt-6 text-h2 text-text-primary transition-colors duration-300 group-hover:text-brand">
                Moments that matter
              </h3>
              <p className="mt-3 text-body text-text-secondary">
                Send gifts, celebrate hosts, and share the energy of a room
                in real time.
              </p>
            </article>
            <article
              className={cn(
                "group rounded-section border border-border bg-surface-muted p-8 md:col-span-3 md:flex md:items-end md:justify-between md:p-10",
                cardHover,
                "hover:bg-brand-soft/30"
              )}
            >
              <div className="max-w-lg">
                <Users
                  className="size-5 text-text-tertiary transition-colors duration-300 group-hover:text-brand"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="mt-6 text-h2 text-text-primary transition-colors duration-300 group-hover:text-brand">
                  Profiles with presence
                </h3>
                <p className="mt-3 text-body text-text-secondary">
                  Badges, style, and a voice that&apos;s yours — show up as
                  yourself and be remembered in the rooms you love.
                </p>
              </div>
              <p className="mt-8 text-display text-brand-decorative transition-colors duration-300 group-hover:text-brand md:mt-0">
                01–03
              </p>
            </article>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

import { Gift, Mic, Users } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/landing/reveal";
import { cn } from "@/lib/utils";

function StoryVisual({
  title,
  lines,
}: {
  title: string;
  lines: string[];
}) {
  return (
    <div className="rounded-section border border-border bg-card-elevated p-6 sm:p-8">
      <p className="text-caption text-text-tertiary">{title}</p>
      <ul className="mt-5 space-y-3">
        {lines.map((line, index) => (
          <li
            key={line}
            className={cn(
              "rounded-2xl bg-card-raised px-4 py-3.5 text-small text-text-primary",
              index === 0 && "ring-1 ring-border"
            )}
          >
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FeatureStorySection() {
  return (
    <Section id="community" className="scroll-mt-28">
      <Container className="space-y-[var(--section-y-sm)] md:space-y-24">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-xl">
              <p className="text-eyebrow text-text-tertiary">Voice rooms</p>
              <h2 className="mt-4 text-h1 text-text-primary">
                Rooms that feel alive.
              </h2>
              <p className="mt-4 text-body-lg text-text-secondary">
                Open mic, music, games, or late-night talk — drop in when you
                want company and stay as long as it feels right.
              </p>
            </div>
            <StoryVisual
              title="Live now"
              lines={[
                "Open mic · 24 listening",
                "Music night · 18 in room",
                "Late talk · 9 speakers",
              ]}
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-1 max-w-xl lg:order-2">
              <p className="text-eyebrow text-text-tertiary">Belonging</p>
              <h2 className="mt-4 text-h1 text-text-primary">
                Communities, not crowds.
              </h2>
              <p className="mt-4 text-body-lg text-text-secondary">
                Find people who share your language, interests, and energy.
                Followers aren&apos;t friends — rooms are.
              </p>
            </div>
            <div className="order-2 lg:order-1">
              <StoryVisual
                title="Your groups"
                lines={[
                  "Arabic lounge · 1.2K members",
                  "Gaming crew · 840 members",
                  "Poetry hour · 320 members",
                ]}
              />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-section border border-border bg-surface-raised p-8 md:col-span-2 md:p-10">
              <Mic className="size-5 text-text-tertiary" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-6 text-h2 text-text-primary">Talk without performing</h3>
              <p className="mt-3 max-w-md text-body text-text-secondary">
                Listen first, speak when you&apos;re ready. Voice makes connection
                human — no filters, no endless captions.
              </p>
            </article>
            <article className="rounded-section border border-border bg-brand-soft p-8 md:p-10">
              <Gift className="size-5 text-brand" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-6 text-h2 text-text-primary">Moments that matter</h3>
              <p className="mt-3 text-body text-text-secondary">
                Send gifts, celebrate hosts, and share the energy of a room
                in real time.
              </p>
            </article>
            <article className="rounded-section border border-border bg-surface-muted p-8 md:col-span-3 md:flex md:items-end md:justify-between md:p-10">
              <div className="max-w-lg">
                <Users className="size-5 text-text-tertiary" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-6 text-h2 text-text-primary">Profiles with presence</h3>
                <p className="mt-3 text-body text-text-secondary">
                  Badges, style, and a voice that&apos;s yours — show up as
                  yourself and be remembered in the rooms you love.
                </p>
              </div>
              <p className="mt-8 text-display text-brand-decorative md:mt-0">01–03</p>
            </article>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

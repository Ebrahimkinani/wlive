import Image from "next/image";
import { Gamepad2, Gift, Mic2 } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/landing/reveal";
import { services, type Service } from "@/config/features";
import { cn } from "@/lib/utils";

const cardHover =
  "transition-all duration-300 ease-out hover:border-brand/25 hover:bg-brand-soft/30 hover:shadow-soft motion-safe:hover:-translate-y-0.5";

const icons = {
  rooms: Mic2,
  gifts: Gift,
  games: Gamepad2,
} as const;

function ServiceVisual({ service }: { service: Service }) {
  const mediaClass =
    "relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-card-elevated";

  if (service.image) {
    return (
      <div className={mediaClass}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-2"
        />
      </div>
    );
  }

  const { visual } = service;

  if (visual === "rooms") {
    return (
      <div className="flex h-full flex-col justify-end gap-2">
        {[
          { label: "Open mic · Public", active: true },
          { label: "Late talk · Private", active: false },
          { label: "Music night · VIP", active: false },
        ].map((room) => (
          <div
            key={room.label}
            className={cn(
              "rounded-xl px-3 py-2.5 text-caption text-text-primary",
              room.active
                ? "bg-brand-soft ring-1 ring-brand/20"
                : "bg-card-raised"
            )}
          >
            {room.label}
          </div>
        ))}
      </div>
    );
  }

  if (visual === "gifts") {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-soft text-brand">
          <Gift className="size-6" strokeWidth={1.5} aria-hidden />
        </div>
        <div className="flex gap-2">
          {["✦", "♥", "★"].map((mark) => (
            <span
              key={mark}
              className="flex size-8 items-center justify-center rounded-full bg-card-raised text-caption text-brand"
            >
              {mark}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid h-full grid-cols-3 gap-2 content-center">
      {["Dice", "Candy", "Buraco"].map((game) => (
        <div
          key={game}
          className="flex aspect-square flex-col items-center justify-center rounded-xl bg-card-raised text-center"
        >
          <Gamepad2
            className="size-4 text-brand"
            strokeWidth={1.5}
            aria-hidden
          />
          <span className="mt-1.5 text-[0.65rem] font-medium text-text-secondary">
            {game}
          </span>
        </div>
      ))}
    </div>
  );
}

export function ServicesSection() {
  return (
    <Section id="services" className="scroll-mt-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-eyebrow text-text-tertiary">Services</p>
            <h2 className="mt-5 text-display-sm text-text-primary">
              Discover what we have
            </h2>
          </div>

          <ul className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
            {services.map((service) => {
              const Icon = icons[service.visual];

              return (
                <li key={service.id}>
                  <article
                    className={cn(
                      "group flex h-full flex-col rounded-section border border-border bg-surface-raised/50 p-6 md:p-7",
                      cardHover
                    )}
                  >
                    <ServiceVisual service={service} />

                    <div className="mt-6 flex items-center justify-between">
                      <Icon
                        className="size-5 text-text-tertiary transition-colors duration-300 group-hover:text-brand"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                      <span className="text-caption font-semibold text-brand-decorative transition-colors duration-300 group-hover:text-brand">
                        {service.step}
                      </span>
                    </div>

                    <h3 className="mt-4 text-h3 text-text-primary transition-colors duration-300 group-hover:text-brand">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-body text-text-secondary">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                      {service.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-2.5 text-small text-text-secondary"
                        >
                          <span
                            className="mt-2 size-1 shrink-0 rounded-full bg-brand/60"
                            aria-hidden
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}

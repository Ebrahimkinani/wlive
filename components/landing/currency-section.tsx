import Image from "next/image";
import { Coins, Gem, MessageCircle } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/landing/reveal";
import {
  CURRENCIES,
  CURRENCY_SECTION,
  type CurrencyItem,
  type CurrencyVisual,
} from "@/config/currency";
import { cn } from "@/lib/utils";

const cardHover =
  "transition-all duration-300 ease-out hover:border-brand/25 hover:bg-brand-soft/30 hover:shadow-soft motion-safe:hover:-translate-y-0.5";

const PLACEHOLDER_GRADIENTS: Record<CurrencyVisual, string> = {
  "w-currency":
    "bg-[radial-gradient(ellipse_at_50%_25%,var(--brand-soft)_0%,transparent_62%)]",
  gold: "bg-[radial-gradient(ellipse_at_35%_30%,var(--brand-soft)_0%,transparent_58%)]",
  crystal:
    "bg-[radial-gradient(ellipse_at_65%_35%,var(--brand-soft)_0%,transparent_55%)]",
};

function CurrencyIcon({ visual }: { visual: CurrencyVisual }) {
  if (visual === "w-currency") {
    return (
      <span className="text-xl font-semibold tracking-tight text-brand">W</span>
    );
  }

  const Icon = visual === "gold" ? Coins : Gem;

  return <Icon className="size-7 text-brand" strokeWidth={1.5} aria-hidden />;
}

function CurrencyVisual({ item }: { item: CurrencyItem }) {
  const mediaClass = cn(
    "relative flex aspect-[4/3] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-border/80 p-5",
    item.featured ? "bg-brand-soft/25" : "bg-surface-muted/30",
    PLACEHOLDER_GRADIENTS[item.visual]
  );

  if (item.image) {
    return (
      <div className={cn(mediaClass, "bg-card-elevated")}>
        <Image
          src={item.image}
          alt={item.label}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-4"
        />
      </div>
    );
  }

  return (
    <div className={mediaClass} aria-hidden>
      <div className="absolute inset-[12%] rounded-[1.15rem] border border-dashed border-border/45" />
      <div
        className={cn(
          "relative flex items-center justify-center rounded-2xl bg-background/50 backdrop-blur-[1px]",
          item.featured ? "size-16 ring-1 ring-brand/15" : "size-14"
        )}
      >
        <CurrencyIcon visual={item.visual} />
      </div>
    </div>
  );
}

function PackageRow({ value }: { value: string }) {
  const parts = value.split(" / ");
  const amount = parts[0] ?? value;
  const price = parts.slice(1).join(" / ");

  return (
    <li className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-border/60 py-2.5 last:border-b-0">
      <span className="text-small font-medium text-text-primary">{amount}</span>
      {price ? (
        <span className="text-small tabular-nums text-text-secondary">{price}</span>
      ) : (
        <span className="text-small text-text-secondary">{value}</span>
      )}
    </li>
  );
}

function CurrencyCard({ item }: { item: CurrencyItem }) {
  return (
    <li className={cn(item.featured && "lg:-mt-1")}>
      <article
        className={cn(
          "group flex h-full flex-col rounded-section border bg-surface-raised/50 p-5 md:p-6",
          item.featured
            ? "border-brand/20 bg-brand-soft/15 ring-1 ring-brand/10"
            : "border-border",
          cardHover,
          item.featured && "hover:border-brand/30 hover:bg-brand-soft/25"
        )}
      >
        <CurrencyVisual item={item} />

        <div className="mt-5 border-t border-border/80 pt-5">
          <p
            className={cn(
              "text-eyebrow",
              item.featured ? "text-brand" : "text-text-tertiary"
            )}
          >
            {item.label}
          </p>
          <p className="mt-2 text-body text-text-primary">{item.title}</p>
        </div>

        {item.details && item.details.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {item.details.map((detail) => (
              <li
                key={detail}
                className="flex gap-2.5 text-small text-text-secondary"
              >
                <span
                  className="mt-2 size-1 shrink-0 rounded-full bg-brand/60"
                  aria-hidden
                />
                {detail}
              </li>
            ))}
          </ul>
        ) : null}

        {item.packages.length > 0 ? (
          <ul className="mt-4 rounded-xl border border-border/70 bg-surface-muted/30 px-4 py-1">
            {item.packages.map((pkg) => (
              <PackageRow key={pkg} value={pkg} />
            ))}
          </ul>
        ) : null}

        <div className="mt-auto pt-5">
          <div className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-surface-muted/40 px-3.5 py-2.5 text-small text-text-secondary transition-colors duration-300 group-hover:border-brand/20 group-hover:bg-brand-soft/20">
            <MessageCircle
              className="size-4 shrink-0 text-brand"
              strokeWidth={1.5}
              aria-hidden
            />
            <span>
              {item.contactLabel} / {item.contact}
            </span>
          </div>
        </div>
      </article>
    </li>
  );
}

export function CurrencySection() {
  return (
    <Section id="currency" className="scroll-mt-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-eyebrow text-text-tertiary">
              {CURRENCY_SECTION.eyebrow}
            </p>
            <h2 className="mt-4 text-display-sm text-text-primary">
              {CURRENCY_SECTION.supporting}
            </h2>
          </div>

          <ul className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 md:mt-12 lg:grid-cols-3 lg:gap-6">
            {CURRENCIES.map((item) => (
              <CurrencyCard key={item.id} item={item} />
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}

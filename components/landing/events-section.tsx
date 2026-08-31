"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ImageIcon } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { EventGalleryLightbox } from "@/components/landing/event-gallery-lightbox";
import { Reveal } from "@/components/landing/reveal";
import {
  EVENT_FILTERS,
  EVENT_ITEMS,
  filterEventItems,
  getEventAltText,
  type EventFilter,
  type EventItem,
} from "@/config/events";
import { easePremium } from "@/lib/motion";
import { cn } from "@/lib/utils";

const PLACEHOLDER_GRADIENTS = [
  "bg-[radial-gradient(ellipse_at_30%_20%,var(--brand-soft)_0%,transparent_55%)]",
  "bg-[radial-gradient(ellipse_at_70%_30%,var(--brand-soft)_0%,transparent_50%)]",
  "bg-[radial-gradient(ellipse_at_50%_80%,var(--brand-soft)_0%,transparent_52%)]",
] as const;

function EventMedia({
  item,
  index,
}: {
  item: EventItem;
  index: number;
}) {
  const alt = getEventAltText(item.title);
  const mediaClass =
    "relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-border/80 bg-card-elevated transition-all duration-300 ease-out motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:border-brand/25";

  if (item.image) {
    return (
      <div className={mediaClass}>
        <Image
          src={item.image}
          alt={alt}
          fill
          sizes="(max-width: 640px) min(100vw, 22rem), (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-3"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        mediaClass,
        "bg-surface-muted/40",
        PLACEHOLDER_GRADIENTS[index % PLACEHOLDER_GRADIENTS.length]
      )}
      aria-hidden
    >
      <div className="absolute inset-[10%] rounded-[1.25rem] border border-dashed border-border/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div className="flex size-9 items-center justify-center rounded-full bg-background/60">
          <ImageIcon
            className="size-4 text-text-tertiary/70"
            strokeWidth={1.5}
            aria-hidden
          />
        </div>
        <span className="text-[0.6875rem] font-medium tracking-wide text-text-tertiary/80">
          Screenshot coming soon
        </span>
      </div>
    </div>
  );
}

function EventGalleryItem({
  item,
  index,
  onSelect,
}: {
  item: EventItem;
  index: number;
  onSelect: (item: EventItem, trigger: HTMLButtonElement) => void;
}) {
  const reduceMotion = useReducedMotion();
  const step = String(index + 1).padStart(2, "0");
  const categoryLabel = item.categories[0];

  return (
    <motion.li
      layout={!reduceMotion}
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
      transition={{ duration: 0.26, ease: easePremium }}
      className="group mx-auto w-full max-w-[17.5rem] sm:max-w-none"
    >
      {item.image ? (
        <button
          type="button"
          onClick={(event) => onSelect(item, event.currentTarget)}
          aria-label={`View ${item.title} screenshot`}
          className="block w-full rounded-[1.75rem] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <EventMedia item={item} index={index} />
        </button>
      ) : (
        <EventMedia item={item} index={index} />
      )}
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[0.6875rem] font-semibold tabular-nums tracking-[0.12em] text-brand-decorative transition-colors duration-300 group-hover:text-brand">
            {step}
          </p>
          <p className="mt-1 text-small font-semibold tracking-[0.06em] text-text-primary transition-colors duration-300 group-hover:text-brand">
            {item.title}
          </p>
        </div>
        <span className="shrink-0 text-[0.6875rem] font-medium lowercase tracking-wide text-text-tertiary">
          {categoryLabel}
        </span>
      </div>
    </motion.li>
  );
}

export function EventsSection() {
  const [activeFilter, setActiveFilter] = useState<EventFilter>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const reduceMotion = useReducedMotion();

  const visibleItems = useMemo(
    () => filterEventItems(EVENT_ITEMS, activeFilter),
    [activeFilter]
  );

  const lightboxItems = useMemo(
    () => visibleItems.filter((item) => item.image),
    [visibleItems]
  );

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeFilter]);

  const handleOpenLightbox = (
    item: EventItem,
    trigger: HTMLButtonElement
  ) => {
    const index = lightboxItems.findIndex((entry) => entry.id === item.id);
    if (index < 0) return;

    lastTriggerRef.current = trigger;
    setSelectedIndex(index);
  };

  return (
    <Section id="events" className="scroll-mt-32 pt-6 md:pt-10">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-eyebrow text-text-tertiary">Our events</p>
            <h2 className="mt-4 text-display-sm">
              <span className="block font-semibold text-text-primary">
                Pictures of different activities
              </span>
              <span className="mt-1 block font-medium text-text-tertiary">
                in the application
              </span>
            </h2>
          </div>

          <div
            className="mt-8 flex justify-center md:mt-10"
            role="toolbar"
            aria-label="Filter gallery"
          >
            <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-0.5 rounded-full bg-surface-muted/60 p-1">
              {EVENT_FILTERS.map((filter) => {
                const isActive = activeFilter === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveFilter(filter.id)}
                    className={cn(
                      "rounded-full px-3.5 py-1.5 text-[0.8125rem] font-medium transition-all duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      isActive
                        ? "bg-brand-soft text-brand shadow-none"
                        : "text-text-secondary hover:text-text-primary"
                    )}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.ul
            layout={!reduceMotion}
            className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-x-7 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-11"
          >
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item) => {
                const index = EVENT_ITEMS.findIndex(
                  (entry) => entry.id === item.id
                );

                return (
                  <EventGalleryItem
                    key={item.id}
                    item={item}
                    index={index >= 0 ? index : 0}
                    onSelect={handleOpenLightbox}
                  />
                );
              })}
            </AnimatePresence>
          </motion.ul>
        </Reveal>
      </Container>

      <EventGalleryLightbox
        items={lightboxItems}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onIndexChange={setSelectedIndex}
        returnFocusRef={lastTriggerRef}
      />
    </Section>
  );
}

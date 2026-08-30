"use client";

import { useId } from "react";
import {
  Calendar,
  Compass,
  Gift,
  LayoutGrid,
  MessageCircle,
  Mic,
  User,
  Users,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import { easePremium } from "@/lib/motion";
import { productFeatures, type FeatureId } from "@/config/features";
import { FeatureAppPreview } from "@/components/landing/feature-app-preview/feature-app-preview";

const icons: Record<FeatureId, typeof Mic> = {
  rooms: Mic,
  communities: Users,
  discover: Compass,
  profiles: User,
  chats: MessageCircle,
  gifts: Gift,
  events: Calendar,
};

type FeatureSelectorProps = {
  activeId: FeatureId;
  onChange: (id: FeatureId) => void;
};

export function FeatureSelector({ activeId, onChange }: FeatureSelectorProps) {
  const labelId = useId();

  return (
    <div>
      <div
        className="inline-flex items-center gap-2 rounded-pill bg-brand-soft px-3 py-1.5"
      >
        <LayoutGrid className="size-3 text-brand" strokeWidth={2} aria-hidden />
        <span className="text-eyebrow text-brand">
          What W Live actually does
        </span>
      </div>

      <h2
        id={labelId}
        className="mt-5 max-w-[20ch] text-display-sm"
      >
        <span className="block font-semibold text-text-primary">
          One app for voice,
        </span>
        <span className="block font-semibold text-text-primary">community, and</span>
        <span className="block font-medium text-text-tertiary">connection</span>
      </h2>

      <ul
        className="mt-8 flex flex-col lg:mt-10"
        role="listbox"
        aria-labelledby={labelId}
      >
        {productFeatures.map((feature) => {
          const Icon = icons[feature.id];
          const active = feature.id === activeId;

          return (
            <li key={feature.id}>
              <button
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => onChange(feature.id)}
                className={cn(
                  "w-full text-left transition-colors duration-200",
                  active
                    ? "flex items-start gap-3 rounded-2xl bg-feature-active px-4 py-4"
                    : "flex items-center gap-3 py-3.5"
                )}
              >
                <Icon
                  className={cn(
                    "shrink-0",
                    active
                      ? "mt-0.5 size-5 text-brand"
                      : "size-4 text-text-tertiary"
                  )}
                  strokeWidth={active ? 1.75 : 1.6}
                  aria-hidden
                />
                {active ? (
                  <span className="min-w-0 pl-1">
                    <span className="block text-small font-semibold text-brand">
                      {feature.label}
                    </span>
                    <span className="mt-1.5 block text-caption text-text-secondary">
                      {feature.description}
                    </span>
                  </span>
                ) : (
                  <span className="text-small font-medium text-text-primary transition-colors hover:text-brand">
                    {feature.label}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function FeatureShowcase({ activeId }: { activeId: FeatureId }) {
  const reduceMotion = useReducedMotion();
  const feature =
    productFeatures.find((item) => item.id === activeId) ?? productFeatures[0];

  return (
    <div
      className="relative flex min-h-[24rem] items-center justify-center overflow-hidden rounded-[2rem] bg-showcase-panel p-8 sm:min-h-[32rem] sm:p-10 lg:min-h-[36rem] lg:p-12"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={feature.id}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.32, ease: easePremium }}
          className="w-full max-w-full sm:max-w-[22rem]"
        >
          <FeatureAppPreview
            id={feature.id}
            caption={feature.visual}
            label={feature.label}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

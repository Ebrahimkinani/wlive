"use client";

import { useState } from "react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  FeatureSelector,
  FeatureShowcase,
} from "@/components/landing/feature-selector";
import { productFeatures, type FeatureId } from "@/config/features";

export function ProductOverviewSection() {
  const [activeId, setActiveId] = useState<FeatureId>(
    productFeatures[0]?.id ?? "rooms"
  );

  return (
    <Section id="features" className="scroll-mt-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:gap-20 xl:gap-24">
          <FeatureSelector activeId={activeId} onChange={setActiveId} />
          <FeatureShowcase activeId={activeId} />
        </div>
      </Container>
    </Section>
  );
}

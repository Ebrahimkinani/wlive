import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { StoreActions } from "@/components/landing/store-actions";
import { Reveal } from "@/components/landing/reveal";
import { site } from "@/config/site";

export function HeroSection() {
  return (
    <Section id="hero" className="scroll-mt-28 py-0">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <p className="text-small text-text-tertiary">
            Live voice · {site.name}
          </p>
          <h1 className="mt-6 text-display-xl text-text-primary sm:max-w-[18ch]">
            Where conversations{" "}
            <span className="text-brand">come alive.</span>
            <span className="mt-1 block text-text-tertiary">Talk. Connect. Belong.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[36rem] text-body-lg text-text-secondary">
            W Live is a place for live voice rooms, communities, and real social
            connection — meet people, discover rooms, and stay in the moment.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-2">
            <StoreActions variant="page" />
          </div>
          <p className="mt-4 mb-8 text-caption text-text-tertiary sm:mb-0">
            Free to join. On iOS and Android.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { StoreActions } from "@/components/landing/store-actions";
import { Reveal } from "@/components/landing/reveal";

export function FinalCtaSection() {
  return (
    <Section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-glow-cta opacity-80"
      />
      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <p className="text-eyebrow text-text-tertiary">Download</p>
          <h2 className="mt-5 max-w-[14ch] text-display text-text-primary">
            Join the conversation.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-body-lg text-text-secondary">
            Download W Live and step into live voice rooms, communities, and
            real connection — wherever you are.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-2">
            <StoreActions variant="page" />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

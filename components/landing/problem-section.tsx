import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/landing/reveal";

export function ProblemSection() {
  return (
    <Section className="pt-4 md:pt-6 lg:pt-8">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <p className="text-eyebrow text-text-tertiary">The problem</p>
          <h2 className="mt-6 text-display text-text-primary">
            <span className="block whitespace-nowrap">Feeds keep you scrolling.</span>
            <span className="mx-auto mt-2 block max-w-[16ch] text-text-tertiary">
              W Live keeps you talking.
            </span>
          </h2>
        </Reveal>
      </Container>
    </Section>
  );
}

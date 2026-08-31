import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/landing/reveal";

export function ProblemSection() {
  return (
    <Section id="about" className="scroll-mt-28 pt-4 md:pt-6 lg:pt-8">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <p className="text-eyebrow text-text-tertiary">About us</p>
          <h2 className="mt-6 text-display text-text-primary">
            W Live is an interactive voice community.
          </h2>
          <p className="mx-auto mt-4 max-measure text-body-lg text-text-secondary">
            Connect with others while going about your day.
          </p>
          <p className="mx-auto mt-4 max-measure text-body-lg text-text-secondary">
            Explore live voice rooms daily, filtering by country or topic, across
            50+ countries.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}

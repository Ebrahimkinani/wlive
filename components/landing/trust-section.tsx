import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/landing/reveal";
import { trustFacts } from "@/config/features";

export function TrustSection() {
  return (
    <Section id="safety" className="scroll-mt-28">
      <Container>
        <Reveal>
          <p className="text-center text-eyebrow text-text-tertiary">Safety</p>
          <h2 className="mx-auto mt-4 max-w-[18ch] text-center text-h1 text-text-primary">
            A community that stays respectful.
          </h2>
          <ul className="mx-auto mt-14 grid max-w-5xl gap-12 md:grid-cols-3">
            {trustFacts.map((fact) => (
              <li key={fact.title} className="text-center md:text-left">
                <h3 className="text-h3 text-text-primary">{fact.title}</h3>
                <p className="mt-3 text-body text-text-secondary">{fact.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}

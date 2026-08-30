import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/landing/reveal";
import { cn } from "@/lib/utils";
import { howItWorks } from "@/config/features";

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="scroll-mt-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-eyebrow text-text-tertiary">How it works</p>
            <h2 className="mt-5 text-display-sm">
              <span className="block font-semibold text-text-primary">
                From joining to belonging
              </span>
              <span className="block font-medium text-text-tertiary">
                in four steps
              </span>
            </h2>
          </div>

          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8 xl:gap-10">
            {howItWorks.map((item) => {
              const isFirst = item.step === 1;

              return (
                <li key={item.step}>
                  <div
                    className={cn(
                      "flex size-9 items-center justify-center rounded-xl text-small font-semibold text-brand",
                      isFirst ? "bg-step-tile-accent" : "bg-step-tile"
                    )}
                  >
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-h3 font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-border via-border/80 to-transparent" />
                  <p className="mt-4 text-small leading-relaxed text-text-secondary">
                    {item.body}
                  </p>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </Container>
    </Section>
  );
}

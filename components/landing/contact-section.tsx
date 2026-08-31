import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/landing/contact-form";
import { ContactInfo, ContactMap } from "@/components/landing/contact-info";
import { Reveal } from "@/components/landing/reveal";
import { CONTACT_SECTION } from "@/config/contact";

export function ContactSection() {
  return (
    <Section id="contact" className="scroll-mt-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-eyebrow text-text-tertiary">
              {CONTACT_SECTION.eyebrow}
            </p>
            <h2 className="mt-4 text-display-sm">
              <span className="block font-semibold text-text-primary">
                {CONTACT_SECTION.headingLine1}
              </span>
              <span className="mt-1 block font-medium text-text-tertiary">
                {CONTACT_SECTION.headingLine2}
              </span>
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-10 lg:mt-14 lg:grid-cols-[0.42fr_0.58fr] lg:gap-12 xl:gap-16">
            <div className="space-y-10">
              <ContactInfo />
              <ContactMap />
            </div>

            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

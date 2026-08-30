"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/landing/reveal";
import { faqs } from "@/config/features";

export function FaqSection() {
  return (
    <Section id="faq" className="scroll-mt-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <p className="text-center text-eyebrow text-text-tertiary">FAQ</p>
            <h2 className="mt-4 text-center text-h1 text-text-primary">
              Questions? We&apos;ve got you.
            </h2>
            <p className="mx-auto mt-4 max-w-[32rem] text-center text-body text-text-secondary">
              Everything you need to know before joining the conversation.
            </p>
            <Accordion className="mt-12 border-t border-border">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question} className="border-border">
                  <AccordionTrigger className="py-5 text-left text-body font-medium text-text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-body text-text-secondary">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

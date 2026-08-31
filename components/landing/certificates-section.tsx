import Image from "next/image";
import { Award, Shield } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/landing/reveal";
import { CERTIFICATES, type Certificate } from "@/config/certificates";
import { cn } from "@/lib/utils";

const cardHover =
  "transition-all duration-300 ease-out hover:border-brand/25 hover:bg-brand-soft/30 hover:shadow-soft motion-safe:hover:-translate-y-0.5";

function CertificateVisual({ certificate }: { certificate: Certificate }) {
  const isSsl = certificate.id === "ssl";

  if (certificate.image) {
    return (
      <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-border/80 bg-card-elevated p-4">
        <Image
          src={certificate.image}
          alt={certificate.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-3"
        />
      </div>
    );
  }

  const Icon = isSsl ? Shield : Award;

  return (
    <div
      className={cn(
        "flex aspect-[4/3] w-full flex-col items-center justify-center rounded-2xl border border-border/80 bg-surface-muted/40 p-6",
        "bg-[radial-gradient(ellipse_at_50%_30%,var(--brand-soft)_0%,transparent_60%)]"
      )}
      aria-hidden
    >
      <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-soft/60">
        <Icon className="size-6 text-brand" strokeWidth={1.5} aria-hidden />
      </div>
      <span className="mt-3 text-[0.6875rem] font-medium tracking-wide text-text-tertiary/80">
        {isSsl ? "Security certificate" : "Certificate image coming soon"}
      </span>
    </div>
  );
}

function CertificateItem({ certificate }: { certificate: Certificate }) {
  return (
    <li>
      <article
        className={cn(
          "group flex h-full flex-col rounded-section border border-border bg-surface-raised/50 p-6 md:p-7",
          cardHover
        )}
      >
        <CertificateVisual certificate={certificate} />

        <div className="mt-6 flex items-center justify-between">
          <span className="text-caption font-semibold tabular-nums text-brand-decorative transition-colors duration-300 group-hover:text-brand">
            {certificate.step}
          </span>
        </div>

        <h3 className="mt-3 text-h3 text-text-primary transition-colors duration-300 group-hover:text-brand">
          {certificate.title}
        </h3>

        {certificate.subtitle ? (
          <p className="mt-1 text-small font-medium text-text-secondary">
            {certificate.subtitle}
          </p>
        ) : null}

        <p className="mt-4 text-body text-text-secondary">{certificate.description}</p>
      </article>
    </li>
  );
}

export function CertificatesSection() {
  return (
    <Section id="certificates" className="scroll-mt-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-eyebrow text-text-tertiary">Our certificates</p>
            <h2 className="mt-4 text-display-sm text-text-primary">Our Certificates</h2>
          </div>

          <ul className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 md:mt-14 lg:grid-cols-3 lg:gap-8">
            {CERTIFICATES.map((certificate) => (
              <CertificateItem key={certificate.id} certificate={certificate} />
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}

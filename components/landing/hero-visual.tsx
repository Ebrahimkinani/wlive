import { Container } from "@/components/ui/container";
import { ProductVideoShowcase } from "@/components/landing/product-video-showcase";
import { Reveal } from "@/components/landing/reveal";

export function HeroVisual() {
  return (
    <div
      id="product"
      className="relative z-20 scroll-mt-28 pb-8 md:pb-12 lg:pb-16"
    >
      <Container>
        <Reveal>
          <div className="relative mx-auto w-full max-w-5xl -translate-y-[18%] sm:-translate-y-[22%] lg:-translate-y-1/4">
            <div className="relative overflow-hidden rounded-section border border-border bg-surface-raised shadow-soft">
              <ProductVideoShowcase />
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}

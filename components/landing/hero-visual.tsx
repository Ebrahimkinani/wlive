import { Container } from "@/components/ui/container";
import { ProductVideoShowcase } from "@/components/landing/product-video-showcase";
import { Reveal } from "@/components/landing/reveal";

export function HeroVisual() {
  return (
    <div
      id="product"
      className="relative z-20 scroll-mt-28 pb-8 pt-8 sm:pt-4 md:pb-12 md:pt-0 lg:pb-16"
    >
      <Container className="px-3 sm:px-8 lg:px-10">
        <Reveal>
          <div className="relative mx-auto w-full max-w-5xl -translate-y-[4%] sm:-translate-y-[14%] md:-translate-y-[22%] lg:-translate-y-1/4">
            <div className="relative overflow-hidden rounded-section border border-(--video-showcase-border) shadow-soft">
              <ProductVideoShowcase />
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}

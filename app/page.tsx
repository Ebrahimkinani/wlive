import { ContactSection } from "@/components/landing/contact-section";
import { CertificatesSection } from "@/components/landing/certificates-section";
import { CurrencySection } from "@/components/landing/currency-section";
import { EventsSection } from "@/components/landing/events-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FeatureStorySection } from "@/components/landing/feature-story-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { HeroArea } from "@/components/landing/hero-area";
import { HeroVisual } from "@/components/landing/hero-visual";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { LandingFooter } from "@/components/landing/landing-footer";
import { HomeScrollReset } from "@/components/landing/home-scroll-reset";
import { LandingHeader } from "@/components/landing/landing-header";
import { PainPointsSection } from "@/components/landing/pain-points-section";
import { ProblemSection } from "@/components/landing/problem-section";
// import { ProductOverviewSection } from "@/components/landing/product-overview-section";
import { ServicesSection } from "@/components/landing/services-section";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-surface-raised focus:px-4 focus:py-2 focus:text-small focus:text-text-primary"
      >
        Skip to content
      </a>
      <LandingHeader />
      <HomeScrollReset />
      <main id="main">
        <HeroArea />
        <HeroVisual />
        <ProblemSection />
        <PainPointsSection />
        {/* <ProductOverviewSection /> */}
        <HowItWorksSection />
        <ServicesSection />
        <EventsSection />
        <CertificatesSection />
        <CurrencySection />
        <FeatureStorySection />
        <FaqSection />
        <ContactSection />
        <FinalCtaSection />
      </main>
      <LandingFooter />
    </>
  );
}

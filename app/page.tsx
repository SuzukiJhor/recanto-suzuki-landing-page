import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AmenitiesSection } from "@/components/amenities-section"
import { GallerySection } from "@/components/gallery-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <AmenitiesSection />
      <GallerySection />
      <BenefitsSection />
      <TestimonialsSection />
      <CtaSection />
      <FaqSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

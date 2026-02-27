import HeroBanner from "@/components/home/hero-banner"
import StatsSection from "@/components/home/stats-section"
import FeaturesSection from "@/components/home/features-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import CTASection from "@/components/home/cta-section"

export default function Home() {
  return (
    <div className="pt-16">
      <HeroBanner />
      <StatsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

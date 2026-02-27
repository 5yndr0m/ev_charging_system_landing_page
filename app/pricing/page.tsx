import PricingHero from "@/components/pricing/pricing-hero"
import PricingPlans from "@/components/pricing/pricing-plans"
import PricingComparison from "@/components/pricing/pricing-comparison"
import DynamicPricingCharts from "@/components/pricing/dynamic-pricing-charts"
import PricingFAQ from "@/components/pricing/pricing-faq"
import Footer from "@/components/footer"

export const metadata = {
  title: "Pricing | SolarCharge",
  description: "Transparent pricing for solar-powered EV charging solutions",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-16">
        <PricingHero />
        <PricingPlans />
        <PricingComparison />
        <DynamicPricingCharts />
        <PricingFAQ />
      </div>
     
    </main>
  )
}

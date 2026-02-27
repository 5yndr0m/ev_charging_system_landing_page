import ChargingTypesHero from "@/components/charging-types/charging-types-hero"
import ChargingTypesGrid from "@/components/charging-types/charging-types-grid"
import ComparisonSection from "@/components/charging-types/comparison-section"
import BenefitsSection from "@/components/charging-types/benefits-section"
import Footer from "@/components/footer"

export const metadata = {
  title: "Charging Types | SolarCharge",
  description: "Explore different EV charging types and find the best solution for your needs",
}

export default function ChargingTypesPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-16">
        <ChargingTypesHero />
        <ChargingTypesGrid />
        <ComparisonSection />
        <BenefitsSection />
      </div>
    
    </main>
  )
}

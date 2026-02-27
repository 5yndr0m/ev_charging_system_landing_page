"use client"

import EnergyFlowVisualization from "@/components/solar/energy-flow"
import SolarStatsCards from "@/components/solar/solar-stats"
import EnergyManagementSection from "@/components/solar/energy-management"
import CommitmentSection from "@/components/solar/commitment-section"

export default function SolarEnergyPage() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-b from-background via-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Solar Energy Technology</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-foreground font-medium mb-3 text-center">
              Harnessing the power of the sun to revolutionize EV charging and reduce carbon emissions
            </p>
            <p className="text-base max-w-4xl mx-auto text-foreground font-small text-center">
              We deploy high-efficiency monocrystalline panels rated at 595 Wp each, capable of producing maximum power even under low-light conditions. These panels are installed on rooftops and dedicated solar farms using single-axis tracking systems, which automatically adjust their tilt to capture the most sunlight throughout the day.
              Our stations use hybrid inverters equipped with MPPT, ensuring over 98% conversion efficiency from sunlight to usable energy. Designed for Sri Lanka’s tropical conditions, the panels are dust- and heat-resistant, allowing stable performance even in extreme weather.
            </p>
          </div>

          {/* Solar Stats */}
          <SolarStatsCards />
        </div>
      </section>

      {/* Energy Flow */}
      <section className="py-2 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">How Solar Charging Works</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-foreground/60 font-medium mb-4 text-center">
            Our solar-based EV charging ecosystem combines intelligent engineering with real-time adaptability.
          </p>
          <EnergyFlowVisualization />
        </div>
      </section>

      {/* Energy Management */}
      <EnergyManagementSection />

      {/* Commitment */}
      <CommitmentSection />
    </div>
  )
}
"use client"

import { Check, X, Zap, Crown, Leaf } from "lucide-react"
import { useState } from "react"

const pricingPlans = [
  {
    id: "eco-start",
    name: "Eco Start",
    subtitle: "Basic",
    monthlyPrice: 2000,
    yearlyPrice: 15000,
    icon: Leaf,
    accentColor: "#00d4ff",
    borderColor: "border-cyan-500/30",
    bgColor: "bg-cyan-500/5",
    features: [
      { name: "Mobile App", included: true },
      { name: "Carbon Credit Tracking", included: true },
      { name: "Charging History Export (CSV / PDF)", included: true },
      { name: "Analytics", included: false },
      { name: "Fleet Management", included: false },
      { name: "Custom Billing", included: false },
      { name: "Solar Priority Queue", included: false },
      { name: "Reserved Charging Slot Booking", included: false },
      { name: "Roaming Partner Network Access", included: false },
      { name: "Vehicle Health Telemetry Integration", included: false },
      { name: "Priority Maintenance Support", included: false },
    ],
  },
  {
    id: "eco-pro",
    name: "Eco Pro",
    subtitle: "Professional",
    monthlyPrice: 4000,
    yearlyPrice: 35000,
    icon: Zap,
    accentColor: "#00ff00",
    borderColor: "border-green-500/30",
    bgColor: "bg-green-500/5",
    isPopular: true,
    features: [
      { name: "Mobile App", included: true },
      { name: "Carbon Credit Tracking", included: true },
      { name: "Charging History Export (CSV / PDF)", included: true },
      { name: "Analytics", included: true },
      { name: "Solar Priority Queue", included: true },
      { name: "Roaming Partner Network Access", included: true },
      { name: "Vehicle Health Telemetry Integration", included: true },
      { name: "Fleet Management", included: false },
      { name: "Custom Billing", included: false },
      { name: "Reserved Charging Slot Booking", included: false },
      { name: "Priority Maintenance Support", included: false },
    ],
  },
  {
    id: "eco-enterprise",
    name: "Eco Enterprise",
    subtitle: "Enterprise",
    monthlyPrice: 10000,
    yearlyPrice: 95000,
    icon: Crown,
    accentColor: "#ffb800",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-500/5",
    features: [
      { name: "Mobile App", included: true },
      { name: "Carbon Credit Tracking", included: true },
      { name: "Charging History Export (CSV / PDF)", included: true },
      { name: "Analytics", included: true },
      { name: "Fleet Management", included: true },
      { name: "Custom Billing", included: true },
      { name: "Solar Priority Queue", included: true },
      { name: "Reserved Charging Slot Booking", included: true },
      { name: "Roaming Partner Network Access", included: true },
      { name: "Vehicle Health Telemetry Integration", included: true },
      { name: "Priority Maintenance Support", included: true },
    ],
  },
]

export default function PricingComparison() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-balance">
            <span className="gradient-text">Membership Plans</span>
          </h2>
          <p className="text-lg text-foreground/90 mb-8">Choose the plan that fits your charging needs</p>

          <div className="inline-flex gap-4 p-2 bg-secondary/90 rounded-lg border border-border">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                billingCycle === "monthly" ? "bg-accent text-background" : "text-foreground/80 hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                billingCycle === "yearly" ? "bg-accent text-background" : "text-foreground/80 hover:text-foreground"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => {
            const Icon = plan.icon
            const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
            const period = billingCycle === "monthly" ? "month" : "year"

            return (
              <div
                key={plan.id}
                className={`relative rounded-xl border transition-all ${plan.borderColor} ${plan.bgColor} overflow-hidden group hover:shadow-lg hover:shadow-accent/10`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-accent border-green-500/30 px-4 py-1 text-sm font-bold rounded-bl-lg">
                    POPULAR
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="w-8 h-8" style={{ color: plan.accentColor }} />
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                      <p className="text-sm text-foreground/70">{plan.subtitle}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-foreground">LKR {price.toLocaleString()}</span>
                      <span className="text-foreground/80">/{period}</span>
                    </div>
                    {billingCycle === "yearly" && <p className="text-sm  text-foreground mt-2">Save up to 20% annually</p>}
                  </div>

                  {/* CTA Button */}
                  <button
                    className="w-full py-3 rounded-lg font-semibold mb-8 transition-all"
                    style={{
                      backgroundColor: plan.accentColor,
                      color: "#000",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    Get Started
                  </button>

                  {/* Features */}
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-foreground/90 uppercase tracking-wide">
                      Included Features
                    </p>
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 flex-shrink-0" style={{ color: plan.accentColor }} />
                          ) : (
                            <X className="w-5 h-5 flex-shrink-0 text-foreground/80" />
                          )}
                          <span className={`text-sm ${feature.included ? "text-foreground/90" : "text-foreground/80"}`}>
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer note */}
        <div className="bg-secondary/30 border border-green-500/30 rounded-lg p-6 text-center">
          <p className="text-foreground/80">
            <span className="font-semibold border-green-500/30">Note:</span> Eco Start includes essential features like Carbon
            Credit Tracking and Charging History Export to help you track your sustainable charging journey.
          </p>
        </div>
      </div>
    </section>
  )
}

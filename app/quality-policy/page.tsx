import type React from "react"
import { CheckCircle, Shield, Wrench, Smile } from "lucide-react"

interface PolicySection {
  icon: React.ReactNode
  title: string
  items: string[]
}

export default function QualityPolicyPage() {
  const policies: PolicySection[] = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Service Quality Standards",
      items: [
        "99.9% uptime guarantee for all charging stations",
        "Average charging time: 20-30 minutes for 80% charge",
        "Real-time availability updates across all stations",
        "Seamless payment processing with multiple options",
        "24/7 customer support via phone, email, and chat",
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety Compliance",
      items: [
        "ISO 9001:2015 certified quality management system",
        "IEC 61851-1 compliant charging equipment",
        "Regular safety audits and inspections",
        "Emergency response protocols in place",
        "Comprehensive insurance coverage for all stations",
      ],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance & Reliability",
      items: [
        "Preventive maintenance every 3 months",
        "Rapid response time: 2-hour emergency repairs",
        "Redundant systems for critical infrastructure",
        "Regular software updates and security patches",
        "Equipment replacement cycle: 7-10 years",
      ],
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Customer Satisfaction",
      items: [
        "Target satisfaction rating: 95%+",
        "Monthly customer feedback surveys",
        "Transparent pricing with no hidden fees",
        "Money-back guarantee if service fails",
        "Loyalty rewards program for frequent users",
      ],
    },
  ]

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-b from-background via-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Quality Policy</span>
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Our commitment to excellence, safety, and customer satisfaction in every interaction
            </p>
          </div>

          {/* Policy Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-secondary border border-border neon-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-primary mb-4">{policy.icon}</div>
                <h2 className="text-2xl font-bold text-foreground mb-6">{policy.title}</h2>
                <ul className="space-y-3">
                  {policy.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3 text-foreground/70">
                      <span className="text-accent mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sustainability Goals */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/30 p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Sustainability Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-4xl font-bold gradient-text mb-2">50M</p>
                <p className="text-foreground/70">Tons of CO₂ to offset by 2030</p>
              </div>
              <div>
                <p className="text-4xl font-bold gradient-text mb-2">100%</p>
                <p className="text-foreground/70">Renewable energy by 2027</p>
              </div>
              <div>
                <p className="text-4xl font-bold gradient-text mb-2">10K</p>
                <p className="text-foreground/70">Charging stations by 2028</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import type React from "react"
import { Zap, Leaf, Brain, Shield } from "lucide-react"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: <Zap className="w-8 h-8 border-foreground text-primary" />,
      title: "Fast Charging",
      description: "Charge your EV in minutes with our high-speed solar charging technology",
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Solar Powered",
      description: "100% renewable energy from our advanced solar panel network",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Smart Energy Management",
      description: "AI-powered optimization for maximum efficiency and cost savings",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee",
    },
  ]

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Why Choose SolarCharge?</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Experience the perfect blend of speed, sustainability, and intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-background border border-border neon-border hover:border-accent/50 transition-all duration-300 group hover:bg-background/80"
            >
              <div className="mb-4 group-hover:text-primary transition-colors text-primary">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import type React from "react"
import { MapPin, Zap, CreditCard, BarChart3, Bell, Lock } from "lucide-react"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

export default function AppFeaturesSection() {
  const features: Feature[] = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Real-Time Station Locator",
      description: "Find nearby charging stations with live availability and estimated wait times",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "One-Tap Booking",
      description: "Reserve your charger instantly and receive notifications when it's ready",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Seamless Payments",
      description: "Multiple payment methods with transparent pricing and instant receipts",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Usage Analytics",
      description: "Track your charging history, energy savings, and environmental impact",
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Smart Notifications",
      description: "Get alerts for charging completion, price drops, and new stations",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure & Private",
      description: "Enterprise-grade encryption protects your data and payment information",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Powerful Features</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-secondary border border-border neon-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

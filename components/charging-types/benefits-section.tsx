import { Leaf, Zap, DollarSign, Globe } from "lucide-react"

const benefits = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reduce your carbon footprint with solar-powered EV charging",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Maximize energy efficiency with our advanced charging technology",
  },
  {
    icon: DollarSign,
    title: "Cost Savings",
    description: "Save money on fuel and electricity with optimized charging",
  },
  {
    icon: Globe,
    title: "Sustainable Future",
    description: "Contribute to a cleaner environment for future generations",
  },
]

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-balance">
          <span className="gradient-text">Benefits of Solar EV Charging</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div
                key={idx}
                className="bg-secondary/50 border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-12 h-12 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-foreground/70">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

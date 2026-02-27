"use client"

import { Brain, BarChart3, Zap } from "lucide-react"

export default function EnergyManagementSection() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Optimization",
      description:
        "Machine learning algorithms predict energy demand and optimize charging schedules for maximum efficiency",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-Time Monitoring",
      description: "Live dashboards track energy production, consumption, and grid contribution in real-time",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Peak Load Management",
      description: "Smart load balancing prevents grid strain and maximizes renewable energy utilization",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Energy Management Excellence</span>
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-foreground font-medium mb-3 text-center">
          To keep every watt efficient, our platform uses machine learning algorithms that predict solar output, EV charging demand, and grid dependency in real time. Each charging hub is connected to an IoT-based monitoring system, collecting live data every 10 seconds, including solar generation rate, battery status, and load distribution.
        </p>
        <p className="text-base max-w-3xl mx-auto text-foreground/85 font-medium text-center">
          Our dynamic load balancing system ensures that energy is evenly distributed between fast and level-2 chargers, avoiding overloading and improving system lifespan. The management software can forecast daily solar generation with less than 5% deviation, allowing proactive power scheduling and battery optimization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-lg  bg-background border  bg-secondary border-border neon-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
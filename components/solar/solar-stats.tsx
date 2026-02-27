"use client"

import { useEffect, useState } from "react"
import { Zap, Leaf, TrendingUp } from "lucide-react"

export default function SolarStatsCards() {
  const [solarPower, setSolarPower] = useState<number | null>(null)
  const [co2Saved, setCo2Saved] = useState<number | null>(null)

  useEffect(() => {
    // Backend API for solar stats doesn't exist yet, using static values to prevent 404s
    setSolarPower(2800)
    setCo2Saved(15000)
  }, [])

  const stats = [
    {
      icon: <Zap className="w-8 h-8 text-foreground" />,
      label: "Renewable Energy Share",
      value: "92%",
      description:
        "of our charging network is powered by direct and stored solar energy, with only 8% relying on the grid during cloudy periods. Each 1 MWh of solar power prevents about 0.7 tons of CO₂, making every charge a step toward a greener planet.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      label: "Solar kWh Generated",
      value: solarPower !== null ? `${solarPower.toLocaleString()} kW` : "Loading...",
      description:
        "Our solar network, with a combined installed capacity of 2,310 kW, generates roughly 2.8 GWh of clean energy per year, offsetting nearly all of the system’s 2.847 GWh annual consumption. Smart inverters and distributed battery storage enable stable, grid-independent operation across key hubs such as Colombo, Kandy, and Galle.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      label: "CO₂ Reduction",
      value: co2Saved !== null ? `${co2Saved.toLocaleString()} tons` : "Loading...",
      description:
        "Our renewable infrastructure has reduced carbon emissions by 1,247 tons this month, contributing to an annual reduction of over 15,000 tons of CO₂. This is equivalent to planting 2,847 trees or removing 3,200 cars from the road, reinforcing our commitment to a sustainable, carbon-neutral future for Sri Lanka.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-8 rounded-lg bg-secondary border border-border neon-border hover:border-primary/50 transition-all duration-300"
        >
          <div className="mb-4 text-foreground">{stat.icon}</div>
          <p className="text-foreground/70 text-sm mb-2">{stat.label}</p>
          <p className="text-4xl font-bold gradient-text mb-2">{stat.value}</p>
          <p className="text-foreground/60 text-sm">{stat.description}</p>
        </div>
      ))}
    </div>
  )
}

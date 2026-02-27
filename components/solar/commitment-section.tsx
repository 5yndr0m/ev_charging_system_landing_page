"use client"

import Link from "next/link"
import { Leaf, Target, Globe, Users, FileText } from "lucide-react"

export default function CommitmentSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-secondary to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Commitment to a Greener Future</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-foreground font-medium mb-3 text-center">
            We're not just building charging stations, we're building a sustainable future for generations to come
          </p>
          <p className="text-lg max-w-2xl mx-auto text-foreground font-medium text-center">
            Our vision goes beyond powering vehicles, it’s about building a sustainable energy ecosystem that benefits people and the planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="p-8 rounded-lg bg-secondary border border-border neon-border hover:border-primary/50 transition-all duration-300 text-center">
            <Leaf className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold text-foreground mb-3">Carbon Neutral by 2027</h3>
            <p className="text-foreground/60 text-sm">
              We are on track to achieve total carbon neutrality across all operations through solar energy, carbon credits, and local offset programs.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-secondary border border-border neon-border hover:border-primary/50 transition-all duration-300 text-center">
            <Target className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-3">Zero Waste Initiative</h3>
            <p className="text-foreground/60 text-sm">
              All our end-of-life solar panels and batteries are collected, refurbished, or recycled under strict circular economy policies.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-secondary border border-border neon-border hover:border-primary/50 transition-all duration-300 text-center">
            <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold text-foreground mb-3">Global Expansion</h3>
            <p className="text-foreground/60 text-sm">
              By 2030, we aim to establish 1,000 solar-powered charging stations worldwide, beginning with a solid foundation of 100 in Sri Lanka.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-secondary border border-border neon-border hover:border-primary/50 transition-all duration-300 text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold text-foreground mb-3">Community Empowerment</h3>
            <p className="text-foreground/60 text-sm">
              We partner with local universities and technical colleges to train engineers in renewable energy systems and smart grid management.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-secondary border border-border neon-border hover:border-primary/50 transition-all duration-300 text-center">
            <FileText className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold text-foreground mb-3">Transparency and Accountability</h3>
            <p className="text-foreground/60 text-sm">
              Annual sustainability reports will be published publicly, detailing our energy data, carbon savings, and technology upgrades.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-foreground"
          >
            Join Our Mission
          </Link>
        </div>
      </div>
    </section>
  )
}
import { Leaf, Target, Zap } from "lucide-react"

export default function VisionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-secondary to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About SolarCharge</span>
          </h1>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Revolutionizing sustainable transportation through innovative solar-powered EV charging infrastructure
          </p>
        </div>

        {/* Company Background */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Founded in 2020, SolarCharge emerged from a simple vision: to make sustainable EV charging accessible to
              everyone. What started as a pilot project with 5 stations has grown into a network of over 1,250 charging
              points across the nation.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Our team of engineers, environmental scientists, and business leaders work tirelessly to push the
              boundaries of what's possible in renewable energy and transportation technology.
            </p>
          </div>
          <div className="bg-secondary rounded-lg border border-border neon-border p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-primary text-2xl">🌍</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Global Impact</h3>
                  <p className="text-foreground/60 text-sm">
                    Operating across 15 countries with plans to expand globally
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-accent text-2xl">⚡</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Innovation First</h3>
                  <p className="text-foreground/60 text-sm">
                    Investing 20% of revenue into R&D for next-gen technology
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-primary text-2xl">👥</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Team Driven</h3>
                  <p className="text-foreground/60 text-sm">
                    500+ passionate professionals dedicated to sustainability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-lg bg-secondary border border-border neon-border hover:border-primary/50 transition-all duration-300">
            <Target className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-foreground/70 leading-relaxed">
              To accelerate the global transition to sustainable transportation by providing accessible, affordable, and
              reliable solar-powered EV charging infrastructure.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-secondary border border-border neon-border hover:border-accent/50 transition-all duration-300">
            <Leaf className="w-10 h-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-foreground/70 leading-relaxed">
              A world where every EV is powered by clean, renewable energy, and sustainable transportation is the norm,
              not the exception.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-secondary border border-border neon-border hover:border-primary/50 transition-all duration-300">
            <Zap className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-3">Our Values</h3>
            <p className="text-foreground/70 leading-relaxed">
              Sustainability, innovation, transparency, and customer-centricity drive every decision we make and every
              solution we build.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

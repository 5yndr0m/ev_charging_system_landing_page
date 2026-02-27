import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-secondary to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/30 mb-8 neon-border">
          <Zap size={16} className="text-primary" />
          <span className="text-sm font-medium text-primary">Sustainable Energy Revolution</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Powering the Future</span>
          <br />
          <span className="text-foreground">with Solar EV Charging</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the next generation of electric vehicle charging powered by renewable solar energy. Fast,
          sustainable, and intelligent.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/stations"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group text-foreground"
          >
            Find a Charging Station
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/account/register"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300 neon-border text-foreground border-accent"
          >
            Book Now
          </Link>
        </div>

        {/* Trust Badge */}
        <div className="text-foreground/60 text-sm">
          Trusted by <span className="text-primary font-semibold">1000+</span> EV owners across the nation
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-12 bg-linear-to-r from-secondary via-background to-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Join the <span className="gradient-text">Solar Revolution?</span>
        </h2>
        <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
          Start charging your EV with clean, renewable energy today. Find a station near you or download our app.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/stations"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-primary to-accent font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group text-foreground"
          >
            Find Stations
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/about-app"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary/50 font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300 neon-border text-foreground"
          >
            Download App
          </Link>
        </div>
      </div>
    </section>
  )
}

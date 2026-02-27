import AppFeaturesSection from "@/components/app/app-features"
import AppScreenshotsSection from "@/components/app/app-screenshots"
import AppDownloadSection from "@/components/app/app-download"
import AppIntegrationSection from "@/components/app/app-integration"

export default function AboutAppPage() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-linear-to-b from-background via-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">SolarCharge Mobile App</span>
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Charge your EV on the go with our powerful mobile application. Find stations, book chargers, and track
              your energy savings in real-time.
            </p>
          </div>

          {/* App Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="p-6 rounded-lg bg-secondary border border-border neon-border text-center">
              <p className="text-4xl font-bold gradient-text mb-2">500K+</p>
              <p className="text-foreground/70">Active Users</p>
            </div>
            <div className="p-6 rounded-lg bg-secondary border border-border neon-border text-center">
              <p className="text-4xl font-bold gradient-text mb-2">4.8★</p>
              <p className="text-foreground/70">App Rating</p>
            </div>
            <div className="p-6 rounded-lg bg-secondary border border-border neon-border text-center">
              <p className="text-4xl font-bold gradient-text mb-2">50M+</p>
              <p className="text-foreground/70">Charges Completed</p>
            </div>
            <div className="p-6 rounded-lg bg-secondary border border-border neon-border text-center">
              <p className="text-4xl font-bold gradient-text mb-2">24/7</p>
              <p className="text-foreground/70">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <AppFeaturesSection />

      {/* Screenshots */}
      <AppScreenshotsSection />

      {/* Integration */}
      <AppIntegrationSection />

      {/* Download */}
      <AppDownloadSection />
    </div>
  )
}

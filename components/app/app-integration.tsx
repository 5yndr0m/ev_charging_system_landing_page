export default function AppIntegrationSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-12 rounded-lg bg-secondary border border-border neon-border">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            <span className="gradient-text">Seamless Integration</span>
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <span className="text-primary text-2xl">✓</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Connected to Your Account</h3>
                <p className="text-foreground/70">
                  Your app account syncs perfectly with your web account for a unified experience
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-primary text-2xl">✓</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Vehicle Integration</h3>
                <p className="text-foreground/70">
                  Connect your EV to receive battery status, charging recommendations, and optimization tips
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-primary text-2xl">✓</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Smart Home Compatible</h3>
                <p className="text-foreground/70">
                  Control charging schedules through your smart home system for maximum efficiency
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-primary text-2xl">✓</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Calendar Sync</h3>
                <p className="text-foreground/70">
                  Automatically schedule charging sessions based on your calendar and travel plans
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

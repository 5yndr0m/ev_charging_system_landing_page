export default function AppScreenshotsSection() {
  const screenshots = [
    { title: "Station Finder", emoji: "🗺️" },
    { title: "Booking", emoji: "📱" },
    { title: "Payment", emoji: "💳" },
    { title: "Analytics", emoji: "📊" },
  ]

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="gradient-text">App Interface</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg bg-background border border-border neon-border hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{screenshot.emoji}</div>
              <p className="text-foreground font-semibold text-center">{screenshot.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

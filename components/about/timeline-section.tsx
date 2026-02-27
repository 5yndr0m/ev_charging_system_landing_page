interface TimelineEvent {
  year: string
  title: string
  description: string
}

export default function TimelineSection() {
  const timeline: TimelineEvent[] = [
    {
      year: "2020",
      title: "SolarCharge Founded",
      description: "Launched with our first 5 solar EV charging stations in California",
    },
    {
      year: "2021",
      title: "Series A Funding",
      description: "Raised $50M to expand operations and accelerate technology development",
    },
    {
      year: "2022",
      title: "500 Stations Milestone",
      description: "Expanded to 500 charging stations across 8 states",
    },
    {
      year: "2023",
      title: "1M EVs Charged",
      description: "Reached the milestone of charging 1 million electric vehicles",
    },
    {
      year: "2024",
      title: "International Expansion",
      description: "Launched operations in Europe and Asia with 1,250+ stations globally",
    },
    {
      year: "2025",
      title: "AI Integration",
      description: "Deployed advanced AI for predictive energy management and optimization",
    },
  ]

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Journey</span>
          </h2>
          <p className="text-foreground/70 text-lg">Milestones that shaped our mission</p>
        </div>

        <div className="space-y-8">
          {timeline.map((event, index) => (
            <div key={index} className="flex gap-6">
              {/* Timeline dot and line */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent mb-4"></div>
                {index !== timeline.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-primary/50 to-transparent"></div>
                )}
              </div>

              {/* Content */}
              <div className="pb-8">
                <div className="p-6 rounded-lg bg-background border border-border neon-border hover:border-primary/50 transition-all duration-300">
                  <p className="text-primary font-bold text-lg mb-2">{event.year}</p>
                  <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                  <p className="text-foreground/70">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

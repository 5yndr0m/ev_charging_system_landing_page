interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

export default function TeamSection() {
  const team: TeamMember[] = [
    {
      name: "Dr. James Mitchell",
      role: "Founder & CEO",
      bio: "Former Tesla engineer with 15+ years in EV technology and renewable energy systems.",
      image: "👨‍💼",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "PhD in Electrical Engineering, leading our AI-powered energy management systems.",
      image: "👩‍💻",
    },
    {
      name: "Marcus Johnson",
      role: "VP of Operations",
      bio: "20 years of experience scaling infrastructure networks across multiple continents.",
      image: "👨‍💼",
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Sustainability",
      bio: "Environmental scientist committed to measuring and maximizing our carbon offset impact.",
      image: "👩‍🔬",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Meet Our Team</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Visionaries and innovators driving the sustainable energy revolution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-secondary border border-border neon-border hover:border-primary/50 transition-all duration-300 text-center group"
            >
              <div className="text-6xl mb-4">{member.image}</div>
              <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
              <p className="text-foreground/60 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

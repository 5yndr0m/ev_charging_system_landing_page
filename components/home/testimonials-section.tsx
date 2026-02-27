import { Star } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "EV Owner",
      company: "Tech Enthusiast",
      content:
        "SolarCharge has completely changed how I charge my Tesla. Fast, eco-friendly, and the app is incredibly intuitive!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Fleet Manager",
      company: "Green Logistics Inc",
      content: "We've reduced our charging costs by 40% since switching to SolarCharge. The ROI has been exceptional.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Sustainability Officer",
      company: "Urban Mobility Co",
      content: "The environmental impact is undeniable. We've offset over 500 tons of CO₂ in just 6 months.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">What Our Users Say</span>
          </h2>
          <p className="text-foreground/70 text-lg">Join thousands of satisfied customers powering their future</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-secondary border border-border neon-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4 text-primary">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 mb-4 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-foreground/60 text-sm">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

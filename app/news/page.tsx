import BlogCard from "@/components/blog/blog-card"
import { Search } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  image: string
}

export default function NewsPage() {
  const posts: BlogPost[] = [
    {
      id: "1",
      title: "Solar EV Charging Reaches 1 Million Vehicles Milestone",
      excerpt:
        "SolarCharge celebrates a historic achievement as we surpass 1 million electric vehicles charged with clean, renewable energy.",
      category: "Milestone",
      date: "Oct 15, 2025",
      author: "Sarah Chen",
      image: "🎉",
    },
    {
      id: "2",
      title: "The Future of Sustainable Transportation",
      excerpt:
        "Exploring how solar-powered EV charging is transforming the automotive industry and reducing carbon emissions globally.",
      category: "Insights",
      date: "Oct 12, 2025",
      author: "James Mitchell",
      image: "🌍",
    },
    {
      id: "3",
      title: "New AI Energy Management System Improves Efficiency by 35%",
      excerpt:
        "Our latest AI-powered optimization algorithm reduces energy waste and maximizes solar utilization across all stations.",
      category: "Technology",
      date: "Oct 10, 2025",
      author: "Dr. Elena Rodriguez",
      image: "🤖",
    },
    {
      id: "4",
      title: "Expanding to 15 New Cities This Quarter",
      excerpt:
        "SolarCharge announces aggressive expansion plans with 150 new charging stations coming to major metropolitan areas.",
      category: "Expansion",
      date: "Oct 8, 2025",
      author: "Marcus Johnson",
      image: "🚀",
    },
    {
      id: "5",
      title: "How Solar Energy Reduces Your Charging Costs",
      excerpt:
        "Learn how our solar-powered infrastructure can save EV owners up to 60% on charging costs compared to traditional grids.",
      category: "Education",
      date: "Oct 5, 2025",
      author: "Sarah Chen",
      image: "💰",
    },
    {
      id: "6",
      title: "Partnership with Leading Auto Manufacturers",
      excerpt:
        "SolarCharge partners with Tesla, Ford, and Nissan to integrate our charging network into their vehicle systems.",
      category: "Partnership",
      date: "Oct 1, 2025",
      author: "James Mitchell",
      image: "🤝",
    },
  ]

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-b from-background via-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">News & Insights</span>
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Stay updated with the latest developments in solar EV charging and sustainable transportation
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-3 text-primary" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary neon-border"
              />
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-16 p-8 rounded-lg bg-secondary border border-border neon-border hover:border-primary/50 transition-all duration-300 cursor-pointer">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="text-6xl">{posts[0].image}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                    {posts[0].category}
                  </span>
                  <span className="text-foreground/60 text-sm">{posts[0].date}</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-3">{posts[0].title}</h2>
                <p className="text-foreground/70 mb-4">{posts[0].excerpt}</p>
                <p className="text-foreground/60 text-sm">By {posts[0].author}</p>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

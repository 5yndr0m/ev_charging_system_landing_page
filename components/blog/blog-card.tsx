interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  image: string
}

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="p-6 rounded-lg bg-secondary border border-border neon-border hover:border-primary/50 transition-all duration-300 cursor-pointer group">
      <div className="text-5xl mb-4">{post.image}</div>

      <div className="flex items-center gap-2 mb-3">
        <span className="px-2 py-1 rounded text-xs font-semibold bg-primary/20 text-primary">{post.category}</span>
        <span className="text-foreground/60 text-xs">{post.date}</span>
      </div>

      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {post.title}
      </h3>

      <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

      <p className="text-foreground/60 text-xs">By {post.author}</p>
    </div>
  )
}

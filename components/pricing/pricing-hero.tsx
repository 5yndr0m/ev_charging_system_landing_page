export default function PricingHero() {
  return (
    <section className="py-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-balance">
            <span className="gradient-text">Simple, Transparent Pricing</span>
          </h1>

          <p className="text-xl text-foreground/95 max-w-2xl mx-auto">
            Choose the perfect plan for your EV charging needs. No hidden fees, no surprises.
          </p>

          {/* Added Section 1 Content */}
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Our pricing adapts based on how power is sourced – Solar Live, Stored Solar or Grid based supply.  
            Each EV type such as Electric Cars, E-Bikes, and E-Threewheelers has a clearly defined rate structure  
            ensuring fair, affordable and sustainable charging across Sri Lanka. By utilizing renewable solar  
            energy as the primary source, we reduce operational cost while supporting the nation's transition  
            towards clean mobility.
          </p>
        </div>
      </div>
    </section>
  )
}

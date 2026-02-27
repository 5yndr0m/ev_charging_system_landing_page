import Link from "next/link"
import { Download } from "lucide-react"

export default function AppDownloadSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary via-background to-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Download Now</span>
        </h2>
        <p className="text-foreground/70 text-lg mb-12 max-w-2xl mx-auto">
          Get the SolarCharge app on your phone and start charging with clean energy today
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group"
          >
            <Download size={20} />
            Download on App Store
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300 neon-border group"
          >
            <Download size={20} />
            Get on Google Play
          </Link>
        </div>

        <p className="text-foreground/60 text-sm">Available on iOS 14+ and Android 8+</p>
      </div>
    </section>
  )
}

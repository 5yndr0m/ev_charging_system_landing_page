import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">⚡</span>
              </div>
              <span className="font-bold gradient-text">SolarCharge</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Powering the future with sustainable solar EV charging solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/stations" className="text-foreground/60 hover:text-primary transition-colors">
                  Find Stations
                </Link>
              </li>
              <li>
                <Link href="/solar-energy" className="text-foreground/60 hover:text-primary transition-colors">
                  Solar Energy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/quality-policy" className="text-foreground/60 hover:text-primary transition-colors">
                  Quality Policy
                </Link>
              </li>
              <li>
                <Link href="/about-app" className="text-foreground/60 hover:text-primary transition-colors">
                  About App
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-foreground/60">
                <Phone size={16} className="text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-foreground/60">
                <Mail size={16} className="text-primary" />
                support@solarcharge.com
              </li>
              <li className="flex items-center gap-2 text-foreground/60">
                <MapPin size={16} className="text-primary" />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-border pt-8 flex justify-between items-center">
          <p className="text-foreground/60 text-sm">© 2025 SolarCharge. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

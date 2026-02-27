"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedin, setIsLoggedin] = useState(false)

  useEffect(() => {
    setIsLoggedin(!!localStorage.getItem("token"));
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/stations", label: "Stations" },
    { href: "/charging-types", label: "Charging Types" },
    { href: "/pricing", label: "Pricing" },
    { href: "/solar-energy", label: "Solar Energy" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border neon-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 text-primary">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <span className="font-bold text-lg gradient-text hover-glow">SolarCharge</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors duration-300 hover-glow text-sm font-medium text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedin ? (
              <>
                <Link
                  href="/account/profile"
                  className="px-4 py-2 hover:text-primary transition-colors text-foreground font-normal"
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    setIsLoggedin(false)
                    window.location.href = "/"
                  }}
                  className="px-4 py-2 bg-secondary text-red-500 font-semibold rounded-lg hover:shadow-lg transition-all duration-300 border border-red-500/20"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/account/login"
                  className="px-4 py-2 hover:text-primary transition-colors text-foreground font-normal"
                >
                  Login
                </Link>
                <Link
                  href="/account/register"
                  className="px-4 py-2 bg-gradient-to-r from-primary to-accent font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-foreground"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-4">
              {isLoggedin ? (
                <>
                  <Link
                    href="/account/profile"
                    className="flex-1 px-4 py-2 text-center text-foreground/80 hover:text-primary transition-colors bg-secondary rounded-lg"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      localStorage.removeItem("token")
                      localStorage.removeItem("user")
                      setIsLoggedin(false)
                      window.location.href = "/"
                    }}
                    className="flex-1 px-4 py-2 font-semibold rounded-lg text-center text-red-500 border border-red-500/20"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/account/login"
                    className="flex-1 px-4 py-2 text-center text-foreground/80 hover:text-primary transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/account/register"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-lg text-center"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

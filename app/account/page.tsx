"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function AccountPage() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if user is logged in (from localStorage)
    const user = localStorage.getItem("user")
    if (user) {
      setIsLoggedIn(true)
      router.push("/account/profile")
    }
  }, [router])

  if (isLoggedIn) {
    return null
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-background via-secondary to-background flex items-center justify-center">
      <div className="max-w-md w-full px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="gradient-text">Welcome Back</span>
          </h1>
          <p className="text-foreground/70">Access your SolarCharge account</p>
        </div>

        <div className="space-y-4">
          <Link
            href="/account/login"
            className="block w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-lg text-center hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            Sign In
          </Link>
          <Link
            href="/account/register"
            className="block w-full px-6 py-3 border border-primary/50 text-primary font-semibold rounded-lg text-center hover:bg-primary/10 transition-all duration-300 neon-border"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  )
}

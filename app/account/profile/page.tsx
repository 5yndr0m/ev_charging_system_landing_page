"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { LogOut, User, History, Calendar } from "lucide-react"
import Link from "next/link"
import { API_BASE_URL } from "@/lib/api"

interface UserData {
  name: string
  email: string
}

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<UserData | null>(null)
  const [activeTab, setActiveTab] = useState("profile")
  const [bookings, setBookings] = useState<any[]>([])
  const [vehicles, setVehicles] = useState<any[]>([])

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/account/login")
    } else {
      const parsedUser = JSON.parse(userData)
      setUser(parsedUser)

      // Fetch user's vehicles
      const fetchVehicles = async () => {
        try {
          const userToken = localStorage.getItem("token")
          const res = await fetch(`${API_BASE_URL}/vehicles/my`, {
            headers: { Authorization: `Bearer ${userToken}` }
          })
          if (res.ok) {
            const data = await res.json()
            setVehicles(data.data || [])
          }
        } catch (error) {
          console.error("Failed to fetch vehicles", error)
        }
      }

      fetchVehicles()

      const savedBookings = JSON.parse(localStorage.getItem("bookings") || "[]")
      setBookings(savedBookings.filter((b: any) => b.status !== "cancelled"))
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    router.push("/")
  }

  if (!user) return null

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-background via-secondary to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">
            <span className="gradient-text">My Account</span>
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/10 transition-all"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-3 font-semibold transition-all ${activeTab === "profile"
              ? "text-primary border-b-2 border-primary"
              : "text-foreground/60 hover:text-foreground"
              }`}
          >
            <User className="inline mr-2" size={20} />
            Profile
          </button>
          <Link
            href="/account/bookings"
            className="px-4 py-3 font-semibold text-foreground/60 hover:text-foreground transition-all"
          >
            <Calendar className="inline mr-2" size={20} />
            Bookings
          </Link>
          <button
            onClick={() => setActiveTab("history")}
            className={`px-4 py-3 font-semibold transition-all ${activeTab === "history"
              ? "text-primary border-b-2 border-primary"
              : "text-foreground/60 hover:text-foreground"
              }`}
          >
            <History className="inline mr-2" size={20} />
            History
          </button>
        </div>

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Info */}
            <div className="lg:col-span-2 p-8 rounded-lg bg-secondary border border-border neon-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Profile Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue={user.name}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary neon-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue={user.email}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary neon-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Vehicle</label>
                  <select className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary neon-border">
                    {vehicles && vehicles.length > 0 ? (
                      vehicles.map((v: any) => (
                        <option key={v._id}>
                          {v.make} {v.model} ({v.plateNumber})
                        </option>
                      ))
                    ) : (
                      <option>No vehicles registered</option>
                    )}
                  </select>
                </div>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4">
              <div className="p-6 rounded-lg bg-secondary border border-border neon-border">
                <p className="text-foreground/70 text-sm mb-2">Total Charges</p>
                <p className="text-3xl font-bold gradient-text">42</p>
              </div>
              <div className="p-6 rounded-lg bg-secondary border border-border neon-border">
                <p className="text-foreground/70 text-sm mb-2">Energy Saved</p>
                <p className="text-3xl font-bold gradient-text">156 kWh</p>
              </div>
              <div className="p-6 rounded-lg bg-secondary border border-border neon-border">
                <p className="text-foreground/70 text-sm mb-2">CO₂ Offset</p>
                <p className="text-3xl font-bold gradient-text">78 kg</p>
              </div>
              <div className="p-6 rounded-lg bg-secondary border border-border neon-border">
                <p className="text-foreground/70 text-sm mb-2">Active Bookings</p>
                <p className="text-3xl font-bold gradient-text">{bookings.length}</p>
                <Link href="/account/bookings" className="text-primary text-sm hover:text-primary/80 mt-2 inline-block">
                  View All →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === "history" && (
          <div className="p-8 rounded-lg bg-secondary border border-border neon-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Charging History</h2>
            <div className="space-y-3">
              {[
                { station: "Tech Park Station", date: "Today", energy: "32 kWh", cost: "$8.50" },
                { station: "Downtown Solar Hub", date: "Yesterday", energy: "28 kWh", cost: "$7.20" },
                { station: "Waterfront Charging", date: "2 days ago", energy: "35 kWh", cost: "$9.10" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-background border border-border neon-border flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold text-foreground">{item.station}</p>
                    <p className="text-foreground/60 text-sm">{item.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary">{item.energy}</p>
                    <p className="text-foreground/60 text-sm">{item.cost}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

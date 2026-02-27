"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Calendar, Clock, MapPin, Zap, Plus, X } from "lucide-react"
import { API_BASE_URL } from "@/lib/api"

interface Booking {
  _id: string
  stationName?: string
  location?: string
  startTime: string
  endTime: string
  duration?: string
  status: "Booked" | "Active" | "Completed" | "Cancelled"
}

export default function BookingsPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [filter, setFilter] = useState<"all" | "Booked" | "Active" | "Completed">("all")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/account/login")
    } else {
      const parsedUser = JSON.parse(userData)
      setUser(parsedUser)

      const fetchBookings = async () => {
        try {
          const userToken = localStorage.getItem("token")
          const res = await fetch(`${API_BASE_URL}/bookings/my`, {
            headers: { Authorization: `Bearer ${userToken}` }
          })
          if (res.ok) {
            const data = await res.json()
            setBookings(data.data || [])
          }
        } catch (error) {
          console.error("Failed to fetch bookings", error)
        } finally {
          setLoading(false)
        }
      }

      fetchBookings()
    }
  }, [router])

  const filteredBookings = (bookings || []).filter((booking) => {
    if (filter === "all") return true
    return booking.status === filter
  })

  // Format Helper
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString()
  }

  const formatTime = (dateStr: string) => {
    return new Date(dateStr).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const handleCancelBooking = (bookingId: string) => {
    const updatedBookings = bookings.map((booking) =>
      booking._id === bookingId ? { ...booking, status: "Cancelled" as const } : booking,
    )
    setBookings(updatedBookings)
  }

  if (!user) return null

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-background via-secondary to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              <span className="gradient-text">My Bookings</span>
            </h1>
            <p className="text-foreground/70">Manage your charging station reservations</p>
          </div>
          <Link
            href="/account/bookings/create"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            <Plus size={20} />
            New Booking
          </Link>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto">
          {["all", "Booked", "Active", "Completed"].map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption as any)}
              className={`px-4 py-2 rounded-lg font-semibold capitalize whitespace-nowrap transition-all ${filter === filterOption
                ? "bg-primary text-background"
                : "bg-secondary text-foreground/70 hover:text-foreground"
                }`}
            >
              {filterOption}
            </button>
          ))}
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-16 p-8 rounded-lg bg-secondary border border-border">
              <p className="text-foreground/60">Loading bookings...</p>
            </div>
          ) : filteredBookings.length === 0 ? (
            <div className="text-center py-16 p-8 rounded-lg bg-secondary border border-border neon-border">
              <Zap size={48} className="mx-auto mb-4 text-foreground/30" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No bookings found</h3>
              <p className="text-foreground/60 mb-6">Start by creating your first charging station booking</p>
              <Link
                href="/account/bookings/create"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                <Plus size={20} />
                Book a Charger
              </Link>
            </div>
          ) : (
            filteredBookings.map((booking) => (
              <div
                key={booking._id}
                className={`p-6 rounded-lg border transition-all ${booking.status === "Cancelled"
                  ? "bg-secondary/50 border-border/50 opacity-60"
                  : "bg-secondary border-border neon-border hover:border-primary/50"
                  }`}
              >
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{booking.stationName || "Solar Station"}</h3>
                        <p className="text-foreground/60 flex items-center gap-1 mt-1">
                          <MapPin size={16} />
                          {booking.location || "Location not available"}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${booking.status === "Active"
                          ? "bg-green-500/20 text-green-400"
                          : booking.status === "Booked"
                            ? "bg-primary/20 text-primary"
                            : booking.status === "Completed"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                      >
                        {booking.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-foreground/70">
                        <Calendar size={16} className="text-primary" />
                        <span>{formatDate(booking.startTime)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/70">
                        <Clock size={16} className="text-accent" />
                        <span>{formatTime(booking.startTime)} - {formatTime(booking.endTime)}</span>
                      </div>
                    </div>
                  </div>

                  {booking.status === "Booked" && (
                    <div className="flex md:flex-col gap-2">
                      <button
                        onClick={() => handleCancelBooking(booking._id)}
                        className="flex items-center justify-center gap-2 px-4 py-2 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/10 transition-all"
                      >
                        <X size={16} />
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

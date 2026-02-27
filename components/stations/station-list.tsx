"use client"

import { useState, useEffect } from "react"

import { MapPin, Zap, Battery, Wifi, Calendar } from "lucide-react"
import Link from "next/link"
import { API_BASE_URL } from "@/lib/api"

interface Station {
  _id: string
  name: string
  location: string
  totalChargers: number
  availableChargers: number
  powerRating: number
  solarPV: number
  storagesolarpower: number
  maxFeederCapacity: number
  internet: string
  peakDemand: number
  gridDraw: number
  gridOffsetPercent: number
}

interface StationListProps {
  selectedStation: string | null
  setSelectedStation: (id: string) => void
  filters: any
}

export default function StationList({ selectedStation, setSelectedStation, filters }: StationListProps) {
  const [stations, setStations] = useState<Station[]>([])

  useEffect(() => {
    let isMounted = true

    const fetchStations = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/stations/`)
        if (res.ok) {
          const data = await res.json()
          if (isMounted) {
            setStations(Array.isArray(data) ? data : (data.data || []))
          }
        }
      } catch (error) {
        console.error("Failed to fetch stations", error)
      }
    }
    fetchStations()

    return () => { isMounted = false }
  }, [])

  const filteredStations = (stations || []).filter((station) => {
    if (filters.city && !station.location?.toLowerCase().includes(filters.city.toLowerCase())) return false
    if (filters.availability === "available" && station.availableChargers <= 0) return false
    return true
  })

  return (
    <div className="space-y-4 max-h-96 md:max-h-full overflow-y-auto">
      {filteredStations.map((station) => (
        <div
          key={station._id}
          onClick={() => setSelectedStation(station._id)}
          className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${selectedStation === station._id
            ? "bg-primary/10 border-primary neon-border"
            : "bg-secondary border-border neon-border hover:border-primary/50"
            }`}
        >
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-semibold text-foreground">{station.name}</h3>
              <p className="text-foreground/60 text-sm flex items-center gap-1 mt-1">
                <MapPin size={14} />
                {station.location}
              </p>
            </div>
            <span
              className={`px-2 py-1 rounded text-xs font-semibold ${station.availableChargers > 0 ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                }`}
            >
              {station.availableChargers > 0 ? "Available" : "Busy"}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="flex items-center gap-1 text-foreground/70">
              <Zap size={14} className="text-primary" />
              {station.availableChargers} / {station.totalChargers} chargers
            </div>
            <div className="flex items-center gap-1 text-foreground/70">
              <Battery size={14} className="text-accent" />
              {station.powerRating}kW Rating
            </div>
            <div className="flex items-center gap-1 text-foreground/70">
              <span className="text-primary font-semibold">{station.gridOffsetPercent}%</span>
              solar offset
            </div>
          </div>

          {selectedStation === station._id && (
            <div className="mt-4 pt-4 border-t border-border/50">
              <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                <div>
                  <p className="text-foreground/60">Solar PV</p>
                  <p className="text-primary font-semibold">{station.solarPV} kW</p>
                </div>
                <div>
                  <p className="text-foreground/60">Storage</p>
                  <p className="text-primary font-semibold">{station.storagesolarpower} kWh</p>
                </div>
                <div>
                  <p className="text-foreground/60">Peak Demand</p>
                  <p className="text-primary font-semibold">{station.peakDemand} kW</p>
                </div>
                <div>
                  <p className="text-foreground/60">Grid Draw</p>
                  <p className="text-primary font-semibold">{station.gridDraw} kW</p>
                </div>
                <div className="flex items-center gap-1">
                  <Wifi size={12} className="text-accent" />
                  <p className="text-foreground/60">{station.internet}</p>
                </div>
                <div>
                  <p className="text-foreground/60">Max Capacity</p>
                  <p className="text-primary font-semibold">{station.maxFeederCapacity} kW</p>
                </div>
              </div>
              <Link
                href={`/account/bookings/create?station=${station._id}`}
                className="block w-full px-4 py-2 bg-gradient-to-r from-primary to-accent text-background text-center font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <Calendar size={16} className="inline mr-2" />
                Book Now
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

"use client"

import { useState } from "react"
import StationMap from "@/components/stations/station-map"
import StationList from "@/components/stations/station-list"
import StationFilters from "@/components/stations/station-filters"

export default function StationsPage() {
  const [selectedStation, setSelectedStation] = useState<string | null>(null)
  const [filters, setFilters] = useState({
    city: "",
    chargerType: "all",
    availability: "all",
  })

  return (
    <div className="pt-16">
      <section className="py-12 bg-gradient-to-b from-background via-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Find Charging Stations</span>
            </h1>
            <p className="text-foreground/70 text-lg">Locate and book your nearest solar-powered EV charging station</p>
          </div>

          {/* Filters */}
          <StationFilters filters={filters} setFilters={setFilters} />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <StationMap selectedStation={selectedStation} />
            </div>

            {/* Station List */}
            <div className="lg:col-span-1">
              <StationList
                selectedStation={selectedStation}
                setSelectedStation={setSelectedStation}
                filters={filters}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

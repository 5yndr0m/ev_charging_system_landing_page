"use client"

import { Search } from "lucide-react"

interface StationFiltersProps {
  filters: {
    city: string
    chargerType: string
    availability: string
  }
  setFilters: (filters: any) => void
}

export default function StationFilters({ filters, setFilters }: StationFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Search */}
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-3 text-primary" size={20} />
        <input
          type="text"
          placeholder="Search by city or address..."
          value={filters.city}
          onChange={(e) => setFilters({ ...filters, city: e.target.value })}
          className="w-full pl-10 pr-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary neon-border"
        />
      </div>

      {/* Charger Type */}
      <select
        value={filters.chargerType}
        onChange={(e) => setFilters({ ...filters, chargerType: e.target.value })}
        className="px-4 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary neon-border"
      >
        <option value="all">All Chargers</option>
        <option value="fast">Fast Charging</option>
        <option value="standard">Standard</option>
        <option value="ultra">Ultra Fast</option>
      </select>

      {/* Availability */}
      <select
        value={filters.availability}
        onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
        className="px-4 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary neon-border"
      >
        <option value="all">All Stations</option>
        <option value="available">Available Now</option>
        <option value="soon">Available Soon</option>
      </select>
    </div>
  )
}

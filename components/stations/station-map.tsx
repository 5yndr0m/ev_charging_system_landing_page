"use client"

import { MapPin } from "lucide-react"

interface StationMapProps {
  selectedStation: string | null
}

export default function StationMap({ selectedStation }: StationMapProps) {
  return (
    <div className="w-full h-96 md:h-full rounded-lg border border-border neon-border overflow-hidden bg-secondary relative">
      {/* Placeholder for interactive map */}
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-background">
        <div className="text-center">
          <MapPin className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
          <p className="text-foreground/60 mb-2">Interactive Map</p>
          <p className="text-foreground/40 text-sm">
            {selectedStation ? `Station: ${selectedStation}` : "Select a station to view on map"}
          </p>
        </div>
      </div>

      {/* Map markers simulation */}
      <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
      <div
        className="absolute top-1/2 right-1/4 w-3 h-3 bg-accent rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  )
}

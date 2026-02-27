"use client"

import { Sun, Battery, Zap, Grid3x3, Car } from "lucide-react"

// Ensure this file is saved as `energy-flow.tsx` to support JSX syntax
export default function EnergyFlowVisualization() {
  return (
    <div className="bg-secondary rounded-lg border border-border neon-border p-12">
      {/* Top Row: Solar Collection, Energy Storage, Smart Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Solar Collection (Left, Top Row) */}
        <div className="flex flex-col items-center md:col-start-1">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 animate-pulse">
            <Sun className="w-10 h-10 text-foreground" />
          </div>
          <h3 className="font-semibold text-foreground text-center mb-2">Solar Collection</h3>
          <p className="text-foreground/60 text-sm text-center">
            High-performance photovoltaic panels absorb sunlight and convert it into DC electricity. These panels are optimized for tropical solar intensity, producing steady power even under partial shading.
          </p>
        </div>

        {/* Arrow (Top Row, between 1 and 2) */}
        <div className="flex items-center justify-center md:col-start-2">
          <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          <div className="md:hidden text-primary text-2xl">↓</div>
        </div>

        {/* Energy Storage (Middle, Top Row) */}
        <div className="flex flex-col items-center md:col-start-3">
          <div
            className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          >
            <Battery className="w-10 h-10 text-foreground" />
          </div>
          <h3 className="font-semibold text-foreground text-center mb-2">Energy Storage</h3>
          <p className="text-foreground/60 text-sm text-center">
            Any excess solar power is stored in Lithium-Iron Phosphate (LiFePO₄) batteries. These storage units provide stable energy for nighttime operations and can retain up to 95% efficiency after thousands of cycles.
          </p>
        </div>

        {/* Arrow (Top Row, between 2 and 3) */}
        <div className="flex items-center justify-center md:col-start-4">
          <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
          <div className="md:hidden text-primary text-2xl">↓</div>
        </div>

        {/* Smart Distribution (Right, Top Row) */}
        <div className="flex flex-col items-center md:col-start-5">
          <div
            className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            <Zap className="w-10 h-10 text-foreground" />
          </div>
          <h3 className="font-semibold text-foreground text-center mb-2">Smart Distribution</h3>
          <p className="text-foreground/60 text-sm text-center">
            Our AI-powered management system prioritizes solar power first, automatically switching to storage energy when solar generation drops, and finally to grid backup if both are insufficient.
          </p>
        </div>
      </div>

      {/* Bottom Row: Grid Backup System and Future-Ready Design */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-8">
        {/* Empty space to align Grid Backup System */}
        <div className="hidden md:block md:col-start-1"></div>

        {/* Grid Backup System (Bottom Row, between Left and Middle) */}
        <div className="flex flex-col items-center md:col-start-2">
          <div
            className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          >
            <Grid3x3 className="w-10 h-10 text-foreground" />
          </div>
          <h3 className="font-semibold text-foreground text-center mb-2">Grid Backup System</h3>
          <p className="text-foreground/60 text-sm text-center">
            During heavy rain or low sunlight, the intelligent grid interface activates, supplying minimal power to maintain continuity. Once solar energy returns, the grid supply automatically disengages to maximize renewable use.
          </p>
        </div>

        {/* Arrow (Bottom Row, between 4 and 5) */}
        <div className="flex items-center justify-center md:col-start-3">
          <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          <div className="md:hidden text-primary text-2xl">↓</div>
        </div>

        {/* Future-Ready Design (Bottom Row, between Middle and Right) */}
        <div className="flex flex-col items-center md:col-start-4">
          <div
            className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 animate-pulse"
            style={{ animationDelay: "2s" }}
          >
            <Car className="w-10 h-10 text-foreground" />
          </div>
          <h3 className="font-semibold text-foreground text-center mb-2">Future-Ready Design</h3>
          <p className="text-foreground/60 text-sm text-center">
            We are developing Vehicle-to-Grid (V2G) capability, enabling parked EVs to feed stored energy back into the grid or charging network during high-demand hours.
          </p>
        </div>

        {/* Empty space to align with Smart Distribution */}
        <div className="hidden md:block md:col-start-5"></div>
      </div>
    </div>
  )
}

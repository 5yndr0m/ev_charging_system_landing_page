"use client"

import { Zap, Gauge, Users, Battery, Leaf } from "lucide-react"

export default function StatsSection() {
  // Static mock data (you can adjust these numbers as needed)
  const stats = {
    activeStations: 10,
    totalChargers: 228,
    activeCustomers: 1247,
    totalSolarPower: 2310, // kW
    co2Savings: 1247, // Tons
  }

  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Active Stations */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 border border-cyan-500/30 shadow-lg hover:scale-105 transition-all duration-300 group">
            <Gauge className="w-10 h-10 text-cyan-400 mb-4 group-hover:animate-pulse transition-all" />
            <div className="text-4xl font-extrabold text-white mb-2">
              {stats.activeStations}
            </div>
            <p className="text-gray-300 text-sm font-medium">Active Stations</p>
          </div>

          {/* Total Chargers */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 border border-cyan-500/30 shadow-lg hover:scale-105 transition-all duration-300 group">
            <Battery className="w-10 h-10 text-cyan-400 mb-4 group-hover:animate-pulse transition-all" />
            <div className="text-4xl font-extrabold text-white mb-2">
              {stats.totalChargers}
            </div>
            <p className="text-gray-300 text-sm font-medium">Total Chargers</p>
          </div>

          {/* Active Customers */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 border border-cyan-500/30 shadow-lg hover:scale-105 transition-all duration-300 group">
            <Users className="w-10 h-10 text-cyan-400 mb-4 group-hover:animate-pulse transition-all" />
            <div className="text-4xl font-extrabold text-white mb-2">
              {stats.activeCustomers.toLocaleString()}
            </div>
            <p className="text-gray-300 text-sm font-medium">Active Customers</p>
          </div>

          {/* Total Solar Power */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 border border-cyan-500/30 shadow-lg hover:scale-105 transition-all duration-300 group">
            <Zap className="w-10 h-10 text-cyan-400 mb-4 group-hover:animate-pulse transition-all" />
            <div className="text-4xl font-extrabold text-white mb-2">
              {stats.totalSolarPower.toLocaleString()}
              <span className="text-xl text-cyan-400 ml-2">kW</span>
            </div>
            <p className="text-gray-300 text-sm font-medium">Total Solar Power</p>
          </div>

          {/* CO₂ Savings */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 border border-cyan-500/30 shadow-lg hover:scale-105 transition-all duration-300 group">
            <Leaf className="w-10 h-10 text-cyan-400 mb-4 group-hover:animate-pulse transition-all" />
            <div className="text-4xl font-extrabold text-white mb-2">
              {stats.co2Savings.toLocaleString()}
              <span className="text-xl text-cyan-400 ml-2">Tons</span>
            </div>
            <p className="text-gray-300 text-sm font-medium">CO₂ Savings</p>
          </div>
        </div>
      </div>
    </section>
  )
}
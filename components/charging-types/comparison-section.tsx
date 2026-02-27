const comparisonData = [
  {
    feature: "Charging Speed",
    fcsp: "30–75 kW (Fast DC)",
    fcdp: "60 kW (Dual DC)",
    l2hc: "6.6 kW / 3.3 kW (AC)",
    l23p: "Up to 22 kW (AC)",
  },
  {
    feature: "Best For",
    fcsp: "Highway and rapid charging stations",
    fcdp: "Busy commercial and fleet hubs",
    l2hc: "Residential and workplace charging",
    l23p: "Smart business or fleet operations",
  },
  {
    feature: "Availability",
    fcsp: "Highway and public hubs",
    fcdp: "Urban centers and service areas",
    l2hc: "Home and semi-public locations",
    l23p: "Commercial complexes and depots",
  },
  {
    feature: "Battery Impact",
    fcsp: "Moderate (due to high current)",
    fcdp: "Moderate (load-balanced DC)",
    l2hc: "Low (AC gradual charging)",
    l23p: "Low to moderate (balanced AC)",
  },
  {
    feature: "Charging Price (LKR / kWh)",
    fcsp: "LKR 95 / kWh",
    fcdp: "LKR 90 / kWh",
    l2hc: "LKR 45 / kWh",
    l23p: "LKR 70 / kWh",
  },
]

export default function ComparisonSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="gradient-text">EV Charger Type Comparison</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-foreground">
                  FC-SP<br />Single Port DC
                </th>
                <th className="text-center py-4 px-4 font-semibold text-foreground">
                  FC-DP<br />Dual Port DC
                </th>
                <th className="text-center py-4 px-4 font-semibold text-foreground">
                  L2-HC<br />Home / Commercial
                </th>
                <th className="text-center py-4 px-4 font-semibold text-foreground">
                  L2-3P<br />3-Phase
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-border/50 hover:bg-secondary/50 transition-colors"
                >
                  <td className="py-4 px-4 font-medium text-foreground">{row.feature}</td>
                  <td className="py-4 px-4 text-center text-foreground/80">{row.fcsp}</td>
                  <td className="py-4 px-4 text-center text-foreground/80">{row.fcdp}</td>
                  <td className="py-4 px-4 text-center text-foreground/80">{row.l2hc}</td>
                  <td className="py-4 px-4 text-center text-foreground/80">{row.l23p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

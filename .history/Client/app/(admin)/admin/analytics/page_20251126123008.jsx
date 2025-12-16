'use client'

/**
 * Analytics Dashboard
 * -------------------------------------------------------
 * Requirements:
 * - Show most viewed listings, clicked booking links, traffic trends,
 *   category popularity, city expansion progress.
 * - Include reports hooks for business verification & premium performance.
 * Data source TBD (custom API or analytics pipeline).
 */

import { Card } from '@/components/ui/card'
import { ChartContainer, ChartTooltip } from '@/components/ui/chart'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const topListings = [
  { name: 'Kuriftu Resort', views: 4800, clicks: 1200 },
  { name: 'Sunset Restaurant', views: 3500, clicks: 940 },
  { name: 'Lake Bishoftu Tour', views: 3100, clicks: 800 },
]

const trafficByCity = [
  { city: 'Go Bishoftu', visits: 5200 },
  { city: 'Go Hawassa', visits: 2800 },
  { city: 'Go Wenchi', visits: 1900 },
]

export default function AnalyticsPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Analytics</p>
        <h2 className="text-3xl font-bold text-[#0d0b2c]">Operational Intelligence</h2>
        <p className="text-sm text-muted-foreground">
          Pull data from tracking pipeline to reveal listings performance, booking click-throughs, category trends, and city growth.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: 'Most Viewed Listing', value: 'Kuriftu Resort & Spa', metric: '4,800 views' },
          { label: 'Top Booking CTR', value: 'Lake Bishoftu Tour', metric: '26% CTR' },
          { label: 'Emerging City', value: 'Go Hawassa', metric: '+68% WoW' },
        ].map((card) => (
          <Card key={card.label} className="space-y-1 bg-gradient-to-br from-[#f3f2ff] to-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-widest text-[#1b275f]">{card.label}</p>
            <p className="text-xl font-semibold text-[#0d0b2c]">{card.value}</p>
            <p className="text-sm text-[#D4AF37]">{card.metric}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6 space-y-4">
          <h3 className="text-lg font-semibold text-[#0d0b2c]">Top Listings Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topListings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<ChartTooltip />} />
              <Bar dataKey="views" fill="#1b1845" radius={[8, 8, 0, 0]} />
              <Bar dataKey="clicks" fill="#D4AF37" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 space-y-4">
          <h3 className="text-lg font-semibold text-[#0d0b2c]">City Expansion Traffic</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={trafficByCity}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="city" />
              <YAxis />
              <Tooltip content={<ChartTooltip />} />
              <Bar dataKey="visits" fill="#D4AF37" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-[#0d0b2c]">Reports & Alerts</h3>
        <p className="text-sm text-muted-foreground">
          Generate Business Verification, Premium Performance, and Fraud Detection reports. Hook buttons to exports or server actions.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {['Business Verification', 'Premium Performance', 'Fraud Logs'].map((report) => (
            <button
              key={report}
              className="rounded-2xl border border-dashed border-[#D4AF37]/40 bg-white/70 p-4 text-sm font-semibold text-[#1b1845] transition hover:bg-[#fff8e1]"
            >
              {report} Report
            </button>
          ))}
        </div>
      </Card>
    </section>
  )
}



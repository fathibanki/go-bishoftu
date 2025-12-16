import { Card } from '@/components/ui/card'

const overview = [
  { label: 'Active Listings', value: '128', subtext: 'Hotels, restaurants, attractions' },
  { label: 'Premium Placements', value: '12', subtext: 'Rotating hero + spotlight slots' },
  { label: 'Upcoming Events', value: '7', subtext: 'Across Bishoftu & partner cities' },
  { label: 'Pending Reviews', value: '23', subtext: 'Listings awaiting verification' },
]

export default function AdminDashboardPage() {
  return (
    <section className="space-y-10">
      <header className="rounded-2xl bg-gradient-to-r from-[#0f1f4b] via-[#1b275f] to-[#2a2d7e] p-8 text-white shadow-lg">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#D4AF37]">Snapshot</p>
        <h2 className="mt-2 text-3xl font-bold">Analytics & Operations Overview</h2>
        <p className="mt-2 text-sm text-white/80">
          This page will evolve into the central analytics board once data integrations are connected.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {overview.map((card, idx) => (
          <Card
            key={card.label}
            className="space-y-3 border-none bg-white p-6 shadow-lg ring-1 ring-slate-100"
            style={{
              background:
                idx % 2 === 0
                  ? 'linear-gradient(135deg, #fefaf2 0%, #fff8e1 100%)'
                  : 'linear-gradient(135deg, #f3f2ff 0%, #ecebff 100%)',
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1b275f]">{card.label}</p>
            <p className="text-4xl font-bold text-[#0d0b2c]">{card.value}</p>
            <p className="text-xs text-[#4b4c71]">{card.subtext}</p>
          </Card>
        ))}
      </div>

      <Card className="border-dashed border-[#D4AF37]/40 bg-white/70 p-8 text-center text-sm text-[#1b1845] shadow-inner">
        Detailed charts, city-level KPIs, multilingual content insights, and workflow alerts will appear here as we wire up real data sources.
      </Card>
    </section>
  )
}



import { Card } from '@/components/ui/card'

const overview = [
  { label: 'Active Listings', value: '128', subtext: 'Hotels, restaurants, attractions' },
  { label: 'Premium Placements', value: '12', subtext: 'Rotating hero + spotlight slots' },
  { label: 'Upcoming Events', value: '7', subtext: 'Across Bishoftu & partner cities' },
  { label: 'Pending Reviews', value: '23', subtext: 'Listings awaiting verification' },
]

export default function AdminDashboardPage() {
  return (
    <section className="space-y-8">
      <header>
        <p className="text-sm font-medium text-muted-foreground">Snapshot</p>
        <h2 className="text-3xl font-bold">Analytics & Operations Overview</h2>
        <p className="text-sm text-muted-foreground">
          This page will evolve into the central analytics board once data integrations are connected.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {overview.map((card) => (
          <Card key={card.label} className="space-y-2 border-primary/10 p-6 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">{card.label}</p>
            <p className="text-3xl font-semibold">{card.value}</p>
            <p className="text-xs text-muted-foreground">{card.subtext}</p>
          </Card>
        ))}
      </div>

      <Card className="border-dashed p-8 text-center text-sm text-muted-foreground">
        Detailed charts, city-level KPIs, multilingual content insights, and workflow alerts will appear here as we wire up real data sources.
      </Card>
    </section>
  )
}



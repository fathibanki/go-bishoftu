import Link from 'next/link'

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard' },
  { href: '/admin/listings', label: 'Listings' },
  { href: '/admin/premium', label: 'Premium' },
  { href: '/admin/blog', label: 'Blog / CMS' },
  { href: '/admin/events', label: 'Events' },
  { href: '/admin/users', label: 'Users' },
  { href: '/admin/cities', label: 'Cities' },
  { href: '/admin/translations', label: 'Languages' },
]

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              goBishoftu Admin
            </p>
            <h1 className="text-2xl font-bold">Operational Control Center</h1>
            <p className="text-sm text-muted-foreground">
              Manage listings, premium placements, content, users, and analytics.
            </p>
          </div>
          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground transition hover:bg-primary hover:text-primary-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
    </div>
  )
}



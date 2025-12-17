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
    <div className="min-h-screen bg-[#f7f4ff]">
      <header className="bg-gradient-to-r from-[#0d0b2c] via-[#1b1845] to-[#2f2f7a] text-white shadow-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
              goBishoftu Admin
            </p>
            <h1 className="text-2xl font-bold text-white">Operational Control Center</h1>
            <p className="text-sm text-white/80">
              Manage listings, premium placements, content, users, and analytics.
            </p>
          </div>
          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/30 px-4 py-1.5 text-xs font-semibold text-white/80 transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1b1845]"
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



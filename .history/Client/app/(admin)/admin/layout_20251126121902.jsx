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
    <div className="min-h-screen bg-slate-50">
      <header className="bg-gradient-to-br from-[#0d0b2c] via-[#1e1560] to-[#2e1c65] text-white shadow-lg">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Go Bishoftu Admin
            </p>
            <h1 className="mt-2 text-3xl font-bold leading-tight">
              Visit City of Lakes — Mission Control
            </h1>
            <p className="mt-2 text-sm text-white/80">
              Align the admin experience with the public site's royal palette while managing every experience in Bishoftu, Hawassa, Wenchi, and beyond.
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



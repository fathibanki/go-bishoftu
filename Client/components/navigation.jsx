"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GoLogo } from './go-logo'

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (path) => {
    return pathname === path
  }

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <GoLogo />
            <span className="text-xl font-bold text-foreground">Bishoftu</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-primary font-semibold'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              href="/accommodations"
              className={`text-sm font-medium transition-colors ${
                isActive('/accommodations')
                  ? 'text-primary font-semibold'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Accommodations
            </Link>
            <Link
              href="/explore"
              className={`text-sm font-medium transition-colors ${
                isActive('/explore')
                  ? 'text-primary font-semibold'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Explore
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md text-foreground/80 hover:bg-muted"
            >
              {/* simple hamburger icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className={`text-sm font-medium py-2 ${
                  isActive('/') ? 'text-primary font-semibold' : 'text-foreground/80'
                }`}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/accommodations"
                className={`text-sm font-medium py-2 ${
                  isActive('/accommodations') ? 'text-primary font-semibold' : 'text-foreground/80'
                }`}
                onClick={() => setOpen(false)}
              >
                Accommodations
              </Link>
              <Link
                href="/explore"
                className={`text-sm font-medium py-2 ${
                  isActive('/explore') ? 'text-primary font-semibold' : 'text-foreground/80'
                }`}
                onClick={() => setOpen(false)}
              >
                Explore
              </Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  )
}

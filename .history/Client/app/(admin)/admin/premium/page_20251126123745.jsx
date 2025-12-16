'use client'

/**
 * Premium Placements Module
 * -------------------------------------------------------
 * Requirements:
 * - Manage featured listings, homepage slots, category banners
 * - Configure start/end dates, price, status
 * API surface: /premium-slots (GET/POST/PATCH/DELETE)
 */

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'
import { format } from 'date-fns'

const mockSlots = [
  { id: 'slot-1', title: 'Hero Banner', listing: 'Kuriftu Resort', city: 'Bishoftu', price: '$1,200', status: 'Active', window: 'Mar 1 - Mar 15' },
  { id: 'slot-2', title: 'Homepage Spotlight', listing: 'Sunset Restaurant', city: 'Bishoftu', price: '$850', status: 'Pending', window: 'Mar 10 - Mar 20' },
]

export default function PremiumPage() {
  const [dateRange, setDateRange] = useState({ from: new Date(), to: new Date() })

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Premium Placements</p>
        <h2 className="text-3xl font-bold text-[#0d0b2c]">Featured Slots & Monetization</h2>
        <p className="text-sm text-muted-foreground">
          This module orchestrates paid visibility across hero areas, category banners, and campaigns. Wire to `/premium-slots`.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {mockSlots.map((slot) => (
          <Card key={slot.id} className="space-y-3 p-6 shadow-lg ring-1 ring-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#1b275f]">{slot.title}</p>
                <h3 className="text-lg font-semibold text-[#0d0b2c]">{slot.listing}</h3>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  slot.status === 'Active'
                    ? 'bg-green-100 text-green-700'
                    : slot.status === 'Pending'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-rose-100 text-rose-700'
                }`}
              >
                {slot.status}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">City Program: {slot.city}</p>
            <p className="text-sm text-muted-foreground">Flight Window: {slot.window}</p>
            <p className="text-sm font-semibold text-[#D4AF37]">Package: {slot.price}</p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                Edit
              </Button>
              <Button size="sm" variant="ghost">
                Pause
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-[#0d0b2c]">Create Premium Slot</h3>
          <p className="text-sm text-muted-foreground">
            Capture pricing, schedule, inventory type, and link to a listing. Hook into /premium-slots (POST).
          </p>
        </div>
        <form className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="slotName">Slot Name</Label>
            <Input id="slotName" placeholder="Homepage Hero - Spring" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="listing">Listing Link</Label>
            <Input id="listing" placeholder="Kuriftu Resort & Spa" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input id="price" placeholder="$1,200" />
          </div>
          <div className="space-y-2">
            <Label>Campaign Window</Label>
            <div className="rounded-xl border p-3">
              <Calendar
                mode="range"
                selected={dateRange}
                onSelect={setDateRange}
                numberOfMonths={2}
                className="rounded-md border"
              />
              <p className="mt-2 text-xs text-muted-foreground">
                {dateRange?.from && dateRange?.to
                  ? `${format(dateRange.from, 'MMM d, yyyy')} – ${format(dateRange.to, 'MMM d, yyyy')}`
                  : 'Select a start and end date'}
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <Button className="w-full bg-[#1b1845] text-white hover:bg-[#0d0b2c]">Save Slot</Button>
          </div>
        </form>
      </Card>
    </section>
  )
}



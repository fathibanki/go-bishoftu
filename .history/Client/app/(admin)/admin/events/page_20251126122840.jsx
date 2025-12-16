'use client'

/**
 * Events Manager
 * -------------------------------------------------------
 * Requirements:
 * - CRUD events with images, tags, multilingual fields
 * - Support scheduling + calendar UI (placeholder below)
 * API: /events (GET/POST/PATCH/DELETE)
 */

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'

const mockEvents = [
  { id: 'EVT-001', title: 'Lake Bishoftu Regatta', date: 'Mar 22, 2025', city: 'Go Bishoftu', status: 'Scheduled' },
  { id: 'EVT-002', title: 'Go Hawassa Launch Day', date: 'Apr 5, 2025', city: 'Go Hawassa', status: 'Draft' },
]

export default function EventsPage() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Events</p>
        <h2 className="text-3xl font-bold text-[#0d0b2c]">Experiences & Activations</h2>
        <p className="text-sm text-muted-foreground">
          Coordinate events across Bishoftu, Hawassa, Wenchi, etc. Wire CRUD flows to `/events`.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6 space-y-4">
          <h3 className="text-lg font-semibold text-[#0d0b2c]">Upcoming Events</h3>
          <div className="space-y-4">
            {mockEvents.map((event) => (
              <div key={event.id} className="rounded-2xl border border-[#f3f2ff] bg-white p-4 shadow-sm">
                <p className="text-xs uppercase tracking-widest text-[#1b1845]">{event.id}</p>
                <h4 className="text-lg font-semibold text-[#0d0b2c]">{event.title}</h4>
                <p className="text-sm text-muted-foreground">{event.city}</p>
                <p className="text-sm text-[#D4AF37]">{event.date}</p>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                  <Button size="sm" variant="ghost">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 space-y-4">
          <h3 className="text-lg font-semibold text-[#0d0b2c]">Calendar</h3>
          <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="rounded-xl border" />
          <p className="text-xs text-muted-foreground">
            Selected day: {selectedDate ? selectedDate.toDateString() : 'Choose a date'} (hook to event filtering).
          </p>
        </Card>
      </div>

      <Card className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-[#0d0b2c]">Create Event</h3>
          <p className="text-sm text-muted-foreground">Connect to POST `/events` and include media uploads + multilingual content.</p>
        </div>
        <form className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="title">Event Title</Label>
            <Input id="title" placeholder="Go Wenchi Eco Retreat" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City Program</Label>
            <Input id="city" placeholder="Go Wenchi" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <Input id="tags" placeholder="Family, Outdoor" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="details">Details</Label>
            <Textarea id="details" rows={4} placeholder="Describe activities, highlights, and booking links." />
          </div>
          <div className="md:col-span-2 flex gap-2">
            <Button type="button" variant="outline" className="flex-1">
              Upload Cover Image
            </Button>
            <Button type="button" variant="outline" className="flex-1">
              Add Locale
            </Button>
          </div>
          <div className="md:col-span-2">
            <Button className="w-full bg-[#1b1845] text-white hover:bg-[#0d0b2c]">Save Event</Button>
          </div>
        </form>
      </Card>
    </section>
  )
}



'use client'

/**
 * Listings Management Module
 * -------------------------------------------------------
 * Requirements covered:
 * - View/approve/reject/edit/delete listings
 * - Create listings & upload images
 * - Manage categories (hotels, restaurants, attractions, etc.)
 * API surface (to be wired next):
 *   GET/POST   /listings
 *   PATCH/DEL /listings/:id
 */

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const mockListings = [
  { id: 'LX-101', name: 'Kuriftu Resort & Spa', category: 'Hotels', status: 'Pending', city: 'Bishoftu' },
  { id: 'LX-205', name: 'Lake Bishoftu Tour', category: 'Attractions', status: 'Approved', city: 'Bishoftu' },
  { id: 'LX-333', name: 'Sunset Restaurant', category: 'Restaurants', status: 'Rejected', city: 'Bishoftu' },
]

const categories = ['Hotels', 'Restaurants', 'Attractions', 'Resorts', 'Tours']

export default function ListingsPage() {
  const [selectedListing, setSelectedListing] = useState(mockListings[0])

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Listings</p>
        <h2 className="text-3xl font-bold text-[#0d0b2c]">Manage Submitted Listings</h2>
        <p className="text-sm text-muted-foreground">
          Approve, reject, edit, delete, or create new listings. Hook these workflows to the `/listings` API suite.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 space-y-4 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#0d0b2c]">Incoming Listings</h3>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                Bulk Approve
              </Button>
              <Button size="sm" variant="outline">
                Bulk Reject
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border">
            <table className="min-w-full divide-y divide-border text-sm">
              <thead className="bg-[#f3f2ff] text-left uppercase text-xs tracking-wide text-[#1b1845]">
                <tr>
                  <th className="px-4 py-3">Listing</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">City</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                {mockListings.map((listing) => (
                  <tr key={listing.id} className="hover:bg-[#fff8e1]/50">
                    <td className="px-4 py-3">
                      <p className="font-semibold text-[#0d0b2c]">{listing.name}</p>
                      <p className="text-xs text-muted-foreground">{listing.id}</p>
                    </td>
                    <td className="px-4 py-3">{listing.category}</td>
                    <td className="px-4 py-3">{listing.city}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-semibold ${
                          listing.status === 'Approved'
                            ? 'bg-green-100 text-green-700'
                            : listing.status === 'Rejected'
                              ? 'bg-rose-100 text-rose-700'
                              : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {listing.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <Button size="sm" variant="ghost" onClick={() => setSelectedListing(listing)}>
                        Review
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="space-y-4 p-6">
          <h3 className="text-lg font-semibold text-[#0d0b2c]">Approval Workflow</h3>
          {selectedListing ? (
            <>
              <div className="rounded-2xl bg-[#fefaf2] p-4 text-sm text-[#4b3d10]">
                <p className="font-semibold">{selectedListing.name}</p>
                <p>ID: {selectedListing.id}</p>
                <p>Category: {selectedListing.category}</p>
                <p>City: {selectedListing.city}</p>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">Approve</Button>
                <Button className="flex-1" variant="destructive">
                  Reject
                </Button>
              </div>
              <Button variant="outline" className="w-full">
                Edit Listing
              </Button>
              <Button variant="ghost" className="w-full text-rose-600 hover:text-rose-700">
                Delete Listing
              </Button>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">Select a listing to review.</p>
          )}
        </Card>
      </div>

      <Card className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-[#0d0b2c]">Quick Add Listing</h3>
        <p className="text-sm text-muted-foreground">
          Wire this form to POST `/listings` and include file uploads for gallery images.
        </p>
        <form className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="name">Listing Name</Label>
            <Input id="name" placeholder="Kuriftu Resort & Spa" required />
          </div>
          <div className="space-y-2">
            <Label>Category</Label>
            <Select defaultValue={categories[0]}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City Program</Label>
            <Input id="city" placeholder="Go Bishoftu" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" rows={4} placeholder="Highlight the experience, amenities, and unique value." />
          </div>
          <div className="md:col-span-2">
            <Button type="button">Upload Images</Button>
          </div>
          <div className="md:col-span-2">
            <Button type="submit" className="w-full bg-[#1b1845] hover:bg-[#0d0b2c] text-white">
              Save Listing
            </Button>
          </div>
        </form>
      </Card>
    </section>
  )
}



'use client'

/**
 * User & Role Management
 * -------------------------------------------------------
 * Requirements:
 * - Manage business/admin accounts, access levels, status (active/banned/pending)
 * - CRUD via `/users`
 */

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const mockUsers = [
  { id: 'USR-001', name: 'Lulit Bekele', email: 'lulit@go-bishoftu.com', role: 'Admin', status: 'Active' },
  { id: 'USR-004', name: 'Yared Mulu', email: 'yared@kuriftu.com', role: 'Business', status: 'Pending' },
  { id: 'USR-009', name: 'Maya Tadesse', email: 'maya@travelhub.com', role: 'Business', status: 'Banned' },
]

export default function UsersPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Users</p>
        <h2 className="text-3xl font-bold text-[#0d0b2c]">Accounts & Access Levels</h2>
        <p className="text-sm text-muted-foreground">Control business partners and admin operators. Backed by `/users` endpoints.</p>
      </header>

      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[#0d0b2c]">Directory</h3>
          <Button size="sm">Invite User</Button>
        </div>
        <div className="overflow-hidden rounded-xl border">
          <table className="min-w-full divide-y divide-border text-sm">
            <thead className="bg-[#f3f2ff] text-left uppercase text-xs tracking-wide text-[#1b1845]">
              <tr>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {mockUsers.map((user) => (
                <tr key={user.id} className="hover:bg-[#fff8e1]/60">
                  <td className="px-4 py-3">
                    <p className="font-semibold text-[#0d0b2c]">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </td>
                  <td className="px-4 py-3">{user.role}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-semibold ${
                        user.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : user.status === 'Pending'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-rose-100 text-rose-700'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                      <Button size="sm" variant="ghost">
                        Reset
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-[#0d0b2c]">Role Editor</h3>
          <p className="text-sm text-muted-foreground">Assign access levels and status flags. Map to PATCH `/users/:id`.</p>
        </div>
        <form className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="userEmail">User Email</Label>
            <Input id="userEmail" placeholder="partner@agency.com" />
          </div>
          <div className="space-y-2">
            <Label>Role</Label>
            <Select defaultValue="Business">
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Editor">Editor</SelectItem>
                <SelectItem value="Business">Business</SelectItem>
                <SelectItem value="Viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Status</Label>
            <Select defaultValue="Active">
              <SelectTrigger>
                <SelectValue placeholder="Choose status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Pending">Pending Verification</SelectItem>
                <SelectItem value="Banned">Banned</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="md:col-span-2">
            <Button className="w-full bg-[#1b1845] text-white hover:bg-[#0d0b2c]">Update Access</Button>
          </div>
        </form>
      </Card>
    </section>
  )
}



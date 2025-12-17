'use client'

/**
 * CMS Module (Blog / Events / Promotions)
 * -------------------------------------------------------
 * Requirements:
 * - CRUD blog posts, events, promotions
 * - Upload images, add tags, multilingual fields
 * API contracts: /blogs, /events, /promotions
 */

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'

const mockPosts = [
  { id: 'blog-01', title: 'Visit City of Lakes', status: 'Draft', locale: 'EN/AM', tags: ['Travel Tips', 'Culture'] },
  { id: 'blog-02', title: 'Bishoftu Experience Week', status: 'Published', locale: 'EN', tags: ['City Highlights'] },
]

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(mockPosts[0])

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">CMS</p>
        <h2 className="text-3xl font-bold text-[#0d0b2c]">Blog, Events, Promotions</h2>
        <p className="text-sm text-muted-foreground">
          Centralized content authoring with multilingual fields and media uploads. APIs: `/blogs`, `/events`, `/promotions`.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#0d0b2c]">Editorial Queue</h3>
            <Button size="sm">New Post</Button>
          </div>
          <div className="rounded-xl border">
            <table className="min-w-full divide-y divide-border text-sm">
              <thead className="bg-[#f3f2ff] text-left uppercase text-xs tracking-wide text-[#1b1845]">
                <tr>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Locale</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Tags</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                {mockPosts.map((post) => (
                  <tr key={post.id} className="cursor-pointer hover:bg-[#fff8e1]/60" onClick={() => setSelectedPost(post)}>
                    <td className="px-4 py-3">
                      <p className="font-semibold text-[#0d0b2c]">{post.title}</p>
                      <p className="text-xs text-muted-foreground">{post.id}</p>
                    </td>
                    <td className="px-4 py-3">{post.locale}</td>
                    <td className="px-4 py-3">
                      <Badge variant={post.status === 'Published' ? 'default' : 'secondary'}>{post.status}</Badge>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="space-y-4 p-6">
          <h3 className="text-lg font-semibold text-[#0d0b2c]">Composer</h3>
          {selectedPost ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" defaultValue={selectedPost?.title} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea id="excerpt" rows={4} placeholder="Short intro for listing cards..." />
              </div>
              <Button variant="outline" className="w-full">
                Upload Featured Image
              </Button>
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input id="tags" placeholder="Culture, Events, Luxury" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="locale">Multilingual Codes</Label>
                <Input id="locale" placeholder="EN, AM" />
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 bg-[#1b1845] text-white hover:bg-[#0d0b2c]">Save Draft</Button>
                <Button className="flex-1" variant="outline">
                  Publish
                </Button>
              </div>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">Select or create a post to edit.</p>
          )}
        </Card>
      </div>

      <Card className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-[#0d0b2c]">Events & Promotions</h3>
        <p className="text-sm text-muted-foreground">
          Extend this section with a calendar UI to manage `/events` and `/promotions` alongside blog posts.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {['Events Calendar', 'Promotions', 'Media Library'].map((tile) => (
            <div key={tile} className="rounded-2xl border border-dashed border-[#D4AF37]/40 bg-white/70 p-4 text-center text-sm text-[#1b1845]">
              {tile} (Coming Soon)
            </div>
          ))}
        </div>
      </Card>
    </section>
  )
}



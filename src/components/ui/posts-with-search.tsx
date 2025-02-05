'use client'

import { useState } from 'react'
import { PostMetadata } from '@/lib/posts'

import Posts from '@/components/ui/posts'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function PostsWithSearch({ posts }: { posts: PostMetadata[] }) {
  const [query, setQuery] = useState('')
  const filtered = posts.filter(post =>
    post.title?.toLowerCase().includes(query.toLowerCase())
  )

  const isFiltered = query.length > 0
  function resetFilter() {
    setQuery('')
  }

  return (
    <div>
      <div className='mb-8 flex items-center gap-3'>
        <Input
          type='text'
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder='Search posts...'
          className='h-9 w-full sm:w-1/2'
        />
        {isFiltered && (
          <Button
            size='sm'
            variant='secondary'
            onClick={resetFilter}
            className='h-8 px-2 lg:px-3'
          >
            Reset
          </Button>
        )}
      </div>

      <Posts posts={filtered} />
    </div>
  )
}

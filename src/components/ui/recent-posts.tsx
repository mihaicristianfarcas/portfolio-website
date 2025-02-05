import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Posts from '@/components/ui/posts'

export default async function RecentPosts() {
  const posts = await getPosts(4)

  return (
    <section className='pb-20'>
      <div>
        <h2 className='title mb-6'>My Recent Posts</h2>
        <Posts posts={posts} />
        <Link
          href='/posts'
          className='mb-6 mt-6 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <span>Go to all posts</span>
          <ArrowRightIcon className='h-5 w-5' />
        </Link>
      </div>
    </section>
  )
}

import { getPosts } from '@/lib/posts'
import PostsWithSearch from '@/components/posts-with-search'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <section className='pt-40'>
      <div className='container max-w-4xl'>
        <h1 className='title mb-8'>My Posts</h1>
        <PostsWithSearch posts={posts} />
      </div>
    </section>
  )
}

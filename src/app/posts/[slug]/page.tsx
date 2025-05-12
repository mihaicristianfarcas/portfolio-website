import { getPostBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { formatDate } from '@/lib/utils'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getPosts } from '@/lib/posts'
import Link from 'next/link'
import Image from 'next/image'
import MDXContent from '@/components/mdx-content'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))
  return slugs
}

export default async function Page({ params }: any) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { author, title, summary, image, source, date } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-4xl'>
        <Link
          href='/posts'
          className='mb-6 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to all posts</span>
        </Link>

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(date ?? '')}
          </p>
          {summary && (
            <p className='mb-3 mt-3 text-muted-foreground'>{summary}</p>
          )}
        </header>

        {image && (
          <div className='relative mb-3 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}
        {image && source && (
          <a href={source} className='text-muted-foreground underline'>
            Image source
          </a>
        )}

        <main className='prose mt-8 max-w-4xl dark:prose-invert'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  )
}

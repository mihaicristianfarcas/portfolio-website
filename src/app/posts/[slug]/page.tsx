import { getPostBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { formatDate } from '@/lib/utils'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, summary, image, date } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/posts'
          className='mb-6 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to all posts</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {formatDate(date ?? '')}
          </p>
          {summary && <p className='mt-3 text-muted-foreground'>{summary}</p>}
        </header>

        <main className='prose dark:prose-invert mt-16'>
          <MDXRemote source={content} />
        </main>
      </div>
    </section>
  )
}

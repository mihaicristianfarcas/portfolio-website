import { getProjectBySlug } from '@/lib/projects'
import { notFound } from 'next/navigation'
import { formatDate } from '@/lib/utils'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getProjects } from '@/lib/projects'
import Link from 'next/link'
import Image from 'next/image'
import MDXContent from '@/components/ui/mdx-content'

export async function generateStaticParams() {
  const projects = await getProjects()
  const slugs = projects.map(project => ({ slug: project.slug }))
  return slugs
}

export default async function Project({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { metadata, content } = project
  const { author, title, summary, image, date } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/projects'
          className='mb-6 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to all projects</span>
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
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <main className='prose mt-8 dark:prose-invert'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  )
}

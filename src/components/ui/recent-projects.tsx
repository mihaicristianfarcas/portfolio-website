import Link from 'next/link'
import { getProjects } from '@/lib/projects'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Projects from '@/components/ui/projects'

export default async function RecentPosts() {
  const projects = await getProjects(4)

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-6'>My Recent Projects</h2>
        <Projects projects={projects} />
        <Link
          href='/projects'
          className='mb-6 mt-6 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <span>Go to all projects</span>
          <ArrowRightIcon className='h-5 w-5' />
        </Link>
      </div>
    </section>
  )
}

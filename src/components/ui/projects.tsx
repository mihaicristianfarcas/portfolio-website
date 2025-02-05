import Link from 'next/link'
import Image from 'next/image'

import { ProjectMetadata } from '@/lib/projects'
import { formatDate } from '@/lib/utils'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
      {projects.map(project => (
        <li
          key={project.slug}
          className='group relative overflow-hidden rounded-lg'
        >
          <Link href={`/projects/${project.slug}`} className='block'>
            {project.image && (
              <div className='h-72 w-full overflow-hidden rounded-lg bg-muted sm:h-60'>
                <Image
                  src={project.image}
                  alt={project.title || ''}
                  fill
                  className='object-cover object-center transition-transform duration-300 group-hover:scale-105'
                />
              </div>
            )}

            <div className='absolute left-1/2 top-1/2 w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white/85 p-4 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 dark:bg-black/85'>
              <h2 className='title line-clamp-1 text-xl no-underline'>
                {project.title}
              </h2>
              <p className='line-clamp-1 text-sm text-muted-foreground'>
                {project.summary}
              </p>
              {project.date && (
                <p className='text-sm font-light text-muted-foreground'>
                  {formatDate(project.date)}
                </p>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

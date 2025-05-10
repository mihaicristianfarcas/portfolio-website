import { getProjects } from '@/lib/projects'
import Projects from '@/components/projects'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className='min-h-screen pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-8'>My Projects</h1>
        <Projects projects={projects} />
      </div>
    </section>
  )
}

import Intro from '@/components/ui/intro'
import RecentPosts from '@/components/ui/recent-posts'
import RecentProjects from '@/components/ui/recent-projects'

export default async function Home() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
        <RecentPosts />
        <RecentProjects />
      </div>
    </section>
  )
}

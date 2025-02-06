import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

export default function NotFound() {
  return (
    <section className='flex min-h-screen items-center justify-center py-16'>
      <div className='px-4 sm:px-6 md:px-8'>
        <div className='mx-auto max-w-2xl'>
          <main className='flex flex-col items-center gap-6 sm:flex-row'>
            <p className='text-4xl font-bold tracking-tight text-muted-foreground'>
              404
            </p>
            <div className='sm:border-l sm:pl-6'>
              <h1 className='text-3xl font-bold tracking-tight sm:text-5xl'>
                Page not found
              </h1>
              <p className='mt-3 text-base text-muted-foreground'>
                The page you were looking for could not be found. 🤷‍♂️
              </p>
              <p className='text-base text-muted-foreground'>
                Please check the URL in the address bar and try again.
              </p>
              <Link
                href='/'
                className='mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                <ArrowLeftIcon className='h-5 w-5' />
                <span>Back to home</span>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import authorImage from '../../public/images/author/me.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col items-center gap-x-10 gap-y-8 pb-24 sm:flex-row'>
      <div className='flex-1'>
        <h1 className='title no-underline'>
          Hi, I&#39;m Mihai-Cristian Farcaș.
        </h1>
        <p className='mt-3 font-light text-muted-foreground'>
          Currently a software developer based in Cluj-Napoca, Romania. I&#39;m
          passionate about learning, be it programming, philosophy, psychology
          and much more. Here to experience, create and share my journey.
        </p>
      </div>
      <div className='relative h-60 w-60 sm:h-48 sm:w-48'>
        <Image
          className='rounded-lg object-cover'
          src={authorImage}
          alt='me.jpg'
          fill
          priority
        />
      </div>
    </section>
  )
}

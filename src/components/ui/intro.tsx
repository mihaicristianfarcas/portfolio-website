import Image from 'next/image'
import authorImage from '../../../public/images/author/me.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col items-center gap-x-10 gap-y-4 pb-10 md:flex-row'>
      <div className='flex-1'>
        <h1 className='title no-underline'>Hey, I&#39;m Mihai-Cristian.</h1>
        <p className='font-light text-muted-foreground'>
          Currently a software developer based in Cluj-Napoca, Romania. I&#39;m
          passionate about learning, be it programming, literature, psychology
          and so much more. Here to experience, create and share my journey.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg'
          src={authorImage}
          alt='Mihai-Cristian Farcaș'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}

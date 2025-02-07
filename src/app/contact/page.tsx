import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h2 className='title no-underline'>Let&apos;s get in touch!</h2>
        <p className='mt-2 text-muted-foreground'>
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out to me.
        </p>
        <ContactForm />
      </div>
    </section>
  )
}

import ContactForm from '@/components/contact-form'
import NewsletterForm from '@/components/newsletter-form'

export default function Contact() {
  return (
    <section className='py-36'>
      <div className='container max-w-3xl'>
        <h2 className='title no-underline'>Let&apos;s get in touch!</h2>
        <p className='mt-2 text-muted-foreground'>
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out to me.
        </p>
        <p className='text-muted-foreground'>
          Also, if you have any feedback you&apos;d like to share, please do so,
          I&apos;d love to hear it! :D
        </p>
        <p className='text-muted-foreground'>
          Some of these reviews will be featured on my &apos;reviews&apos;
          section. If that&apos;s something you&apos;re not comfortable with,
          please let me know.
        </p>
        <ContactForm />
      </div>
      <div className='container mt-32 max-w-3xl'>
        <NewsletterForm />
      </div>
    </section>
  )
}

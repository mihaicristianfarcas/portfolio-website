import ContactForm from '@/components/contact-form'
import NewsletterForm from '@/components/newsletter-form'

export default function Contact() {
  return (
    <section className='pt-40'>
      <div className='container max-w-4xl'>
        <h2 className='title'>Let&apos;s get in touch!</h2>
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
      <div className='container mt-24 max-w-4xl'>
        <h2 className='title'>One more thing!</h2>
        <p className='py-2 text-muted-foreground'>
          I send out a newsletter once in a while via email. If you&apos;d like
          to stay up to date with my latest blog posts and projects, feel free
          to subscribe!
        </p>
      </div>
      <div className='container max-w-4xl'>
        <NewsletterForm />
      </div>
    </section>
  )
}

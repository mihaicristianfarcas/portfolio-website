'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema, NewsletterFormSchema } from '@/lib/schemas'
import ContactFormEmail from '@/emails/contact-form-email'
import WelcomeEmail from '@/emails/welcome-email'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { name, email, message } = result.data
    const emailHTML = await ContactFormEmail({ name, email, message })

    const { data, error } = await resend.emails.send({
      from: 'New Contact <hello@forquosh.dev>',
      to: ['mihaifarcas125@gmail.com'],
      replyTo: email,
      subject: `Contact Form Submission`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: emailHTML
    })

    if (!data || error) {
      throw new Error('Failed to send email, please try again.')
    }

    return { success: true }
  } catch (error) {
    return { error }
  }
}

export async function subscribe(data: NewsletterFormInputs) {
  const result = NewsletterFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { email } = result.data

    const { data, error } = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID as string
    })

    if (!data || error) {
      throw new Error('Failed to subscribe, please try again.')
    }

    // Send welcome email
    const emailHTML = await WelcomeEmail({ email })

    const { data: welcomeEmailData, error: welcomeEmailError } =
      await resend.emails.send({
        from: 'Mihai-Cristian Farcaș <newsletter@forquosh.dev>',
        to: [email],
        cc: 'mihaifarcas125@gmail.com',
        replyTo: 'mihaifarcas125@gmail.com',
        subject: 'Welcome To My Newsletter!',
        react: emailHTML
      })

    if (!welcomeEmailData || welcomeEmailError) {
      throw new Error('Failed to send welcome email, please try again.')
    }

    return { success: true }
  } catch (error) {
    return { error }
  }
}

'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema } from '@/lib/schemas'
import ContactFormEmail from '@/emails/contact-form-email'

type ContactFormInputs = z.infer<typeof ContactFormSchema>

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
    const result = ContactFormSchema.safeParse(data)

    if(result.error) {
        return {error: result.error.format()}
    }

    try {
        const { name, email, message } = result.data
        const emailHTML = await ContactFormEmail({ name, email, message })

        const { data, error } = await resend.emails.send({
            from: 'hello@forquosh.dev',
            to: [email],
            cc: ['mihaifarcas125@gmail.com'],
            subject: `Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            react: emailHTML
        })

        if(!data || error) {
            throw new Error('Failed to send email, please try again.')
        }

        return { success: true }

    } catch (error) {
        return { error }
    }
}
'use client'

import { z } from 'zod'
import { toast } from 'sonner'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema } from '@/lib/schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/lib/actions'
import { PrivacyPolicyDialog } from '@/components/privacy-policy'

type ContactFormInputs = z.infer<typeof ContactFormSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  const onSubmit: SubmitHandler<ContactFormInputs> = async data => {
    const result = await sendEmail(data)

    if (result?.error) {
      toast.error('An error occurred. Please try again.')
      return
    }

    toast.success('Message sent successfully!')
    reset()
  }

  return (
    <section className='relative isolate'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mt-8 lg:flex-auto'
        noValidate
      >
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          {/* Name */}
          <div>
            <Input
              id='name'
              type='text'
              placeholder='Name'
              autoComplete='given-name'
              {...register('name')}
            />

            {errors.name?.message && (
              <p className='ml-1 mt-2 text-sm text-rose-400'>
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <Input
              id='email'
              type='email'
              placeholder='Email'
              autoComplete='email'
              {...register('email')}
            />

            {errors.email?.message && (
              <p className='ml-1 mt-2 text-sm text-rose-400'>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className='sm:col-span-2'>
            <Textarea
              id='message'
              rows={4}
              placeholder='Message'
              {...register('message')}
            />

            {errors.message?.message && (
              <p className='ml-1 mt-2 text-sm text-rose-400'>
                {errors.message.message}
              </p>
            )}
          </div>
        </div>
        <div className='mt-4'>
          <Button
            type='submit'
            disabled={isSubmitting}
            className='w-full disabled:opacity-50'
          >
            {isSubmitting ? 'Submitting...' : 'Contact Me'}
          </Button>
        </div>
        <p className='mt-4 text-xs text-muted-foreground'>
          By submitting this form, you agree to my <PrivacyPolicyDialog />.
        </p>
      </form>
    </section>
  )
}

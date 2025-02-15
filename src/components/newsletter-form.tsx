'use client'

import { z } from 'zod'
import { toast } from 'sonner'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewsletterFormSchema } from '@/lib/schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { subscribe } from '@/lib/actions'
import { Card, CardContent } from '@/components/ui/card'
import { PrivacyPolicyDialog } from './privacy-policy'

type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<NewsletterFormInputs>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: ''
    }
  })

  const onSubmit: SubmitHandler<NewsletterFormInputs> = async data => {
    const result = await subscribe(data)

    if (result?.error) {
      toast.error('An error occurred. Please try again.')
      return
    }

    toast.success('Subscribed successfully!')
    reset()
  }

  return (
    <section>
      <Card className='rounded-lg border'>
        <CardContent className='flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between'>
          <div className='md:w-1/2'>
            <h2 className='title text-xl font-bold no-underline'>
              Subscribe to my newsletter
            </h2>
            <p className='mt-3 text-muted-foreground'>
              Get updates on my work and projects delivered to your inbox.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex w-full flex-col gap-4 md:w-1/2'
          >
            <div className='w-full'>
              <Input
                type='email'
                id='email'
                placeholder='Email'
                autoComplete='email'
                className='w-full'
                {...register('email')}
              />
              {errors.email?.message && (
                <p className='mt-3 text-sm text-rose-400'>
                  {errors.email.message}
                </p>
              )}
            </div>
            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full disabled:opacity-50'
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
            <p className='text-xs text-muted-foreground'>
              By submitting this form, you agree to my <PrivacyPolicyDialog />.
            </p>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

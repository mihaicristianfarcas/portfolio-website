'use client'

import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'

export function PrivacyPolicyDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className='font-bold hover:underline'>
          privacy&nbsp;policy
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0' />
        <Dialog.Content className='fixed left-[50%] top-[50%] z-50 grid max-h-[90vh] w-[95%] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto rounded-lg border bg-background p-4 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:p-6'>
          <div className='flex flex-col space-y-1.5 text-center sm:text-left'>
            <Dialog.Title className='title text-2xl font-semibold no-underline'>
              My Privacy Policy
            </Dialog.Title>
            {/* <Dialog.Description className='text-sm text-muted-foreground'>
              Last updated: {new Date().toLocaleDateString()}
            </Dialog.Description> */}
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-muted-foreground'>
              This privacy policy explains how I use your personal information.
            </p>
            <h3 className='text-lg font-semibold'>Information I Collect</h3>
            <p className='text-muted-foreground'>
              When you use my newsletter form, I make use of the following:{' '}
            </p>
            <ul className='list-inside list-disc text-muted-foreground'>
              <li>Your email address</li>
            </ul>
            <p className='text-muted-foreground'>
              When you use my contact form, I make use of the following:
            </p>
            <ul className='list-inside list-disc text-muted-foreground'>
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your message content</li>
            </ul>
            <h3 className='text-lg font-semibold'>
              How I Use Your Information
            </h3>
            <p className='text-muted-foreground'>
              I use your information <strong>only</strong> to respond to your
              messages and to send you updates regarding my new posts.{' '}
              <strong className='text-foreground'>
                I will never share your personal information with anyone else.
              </strong>{' '}
              If you don&apos;t wish to share any data, you can still contact me
              via LinkedIn, Twitter or GitHub and I will try to respond as soon
              as possible.
            </p>
          </div>
          <Dialog.Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
            <Cross2Icon className='h-4 w-4' />
            <span className='sr-only'>Close</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

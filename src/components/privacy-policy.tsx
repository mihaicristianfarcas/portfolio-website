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
        <Dialog.Content className='fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]'>
          <div className='flex flex-col space-y-1.5 text-center sm:text-left'>
            <Dialog.Title className='text-2xl font-semibold'>
              My Privacy Policy
            </Dialog.Title>
            <Dialog.Description className='text-sm text-muted-foreground'>
              Last updated: {new Date().toLocaleDateString()}
            </Dialog.Description>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-muted-foreground'>
              We all value our privacy, and I am committed to protecting yours.
              This privacy policy explains how I use your personal information.
            </p>
            <h3 className='text-lg font-semibold'>Information I Collect</h3>
            <p className='text-muted-foreground'>
              When you use my contact form, I make use the following
              information:
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
              I use your information solely to respond to your inquiries and
              communicate with you regarding your messages. I will not be
              sharing this information with anyone else. If you are still having
              second thoughts, feel free to reach out to me via other means like
              LinkedIn, Twitter, or GitHub and I&apos;ll try to respond as soon
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

'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <Button
      variant='ghost'
      size='sm'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label={
        mounted
          ? `Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`
          : 'Theme toggle'
      }
    >
      {mounted ? (
        resolvedTheme === 'dark' ? (
          <SunIcon className='size-4 text-yellow-400' />
        ) : (
          <MoonIcon className='size-4 text-sky-950' />
        )
      ) : (
        <div className='size-4' />
      )}
    </Button>
  )
}

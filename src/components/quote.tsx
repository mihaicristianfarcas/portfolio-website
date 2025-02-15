import { cn } from '@/lib/utils'

interface QuoteProps {
  children: React.ReactNode
  author: string
  className?: string
}

export default function Quote({ children, author, className }: QuoteProps) {
  return (
    <section className='flex flex-col gap-2 py-2'>
      <div className={cn('italic', className)}>{children}</div>
      <div className='text-right text-sm'>- {author}</div>
    </section>
  )
}

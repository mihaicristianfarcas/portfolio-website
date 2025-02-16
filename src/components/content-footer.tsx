import { cn } from '@/lib/utils'

interface ContentFooterProps {
  className?: string
}

export default function ContentFooter({ className }: ContentFooterProps) {
  return (
    <div className='mt-24 gap-4 text-center md:text-left'>
      <h3 className={cn('font-bold italic text-foreground', className)}>
        Thanks for reading! Cheers! 🍻
      </h3>
      <div className='text-sm'>
        <p>
          P.S. If you enjoyed this post, consider giving me some feedback and
          subscribing to my newsletter for more insights and updates. You can do
          so from my{' '}
          <a href='/contact' className='font-bold no-underline hover:underline'>
            contact page
          </a>
          . 🚀
        </p>
      </div>
    </div>
  )
}

'use client'

export default function Background() {
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: 'url(/images/background.jpg)'
        }}
      />
      <div className='absolute inset-0 bg-background/90' />
    </div>
  )
}

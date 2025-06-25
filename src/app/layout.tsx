import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Background from '@/components/background'

export const metadata: Metadata = {
  title: 'Mihai-Cristian Farcaș',
  description: 'My personal website'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`flex flex-col antialiased`}>
        <Providers>
          <Background />
          <div className='mx-auto flex min-h-screen w-full max-w-4xl flex-col bg-background'>
            <Header />
            <main className='flex-1'>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

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
      <body className={`flex min-h-screen flex-col antialiased`}>
        <Providers>
          <Background />
          <div className='mx-auto min-h-screen w-full max-w-4xl bg-background'>
            <Header />
            <main className='grow'>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

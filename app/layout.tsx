import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Monix API',
  description: 'KMITL Monix API with MVC pattern',
  authors: [
    {
      name: 'Noppakorn Kaewsalabnil',
      url: 'https://github.com/PunGrumpy'
    }
  ],
  colorScheme: 'dark',
  themeColor: '#000000'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

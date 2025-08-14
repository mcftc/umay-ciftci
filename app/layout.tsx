import type { Metadata } from 'next'
import { Comic_Neue } from 'next/font/google'
import './globals.css'

const comicNeue = Comic_Neue({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-comic'
})

export const metadata: Metadata = {
  title: 'Umay Çiftçi - Bana Hediye Almak İster Misin? ���',
  description: 'Merhaba! Ben Umay Çiftçi! Henüz doğmadım ama web sitemi yaptım! Bana ve sokak hayvanlarına hediye almak ister misin?',
  keywords: 'Umay Çiftçi, bebek, hediye, bağış, Haytap, hayvan hakları, baby website',
  authors: [{ name: 'Baby Umay (ve biraz da anne-baba)' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Umay Çiftçi - Baby\'s First Website! ���',
    description: 'Daha doğmadan web sitesi yapan bebek Umay\'ın eğlenceli dünyası!',
    url: 'https://umayciftci.com',
    siteName: 'umayciftci.com',
    images: [
      {
        url: 'https://umayciftci.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Umay Çiftçi - Baby Website',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umay Çiftçi - Bana Hediye Almak İster Misin? ���',
    description: 'Henüz doğmadım ama web sitemi yaptım!',
    images: ['https://umayciftci.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={comicNeue.variable}>
      <body className={comicNeue.className}>{children}</body>
    </html>
  )
}

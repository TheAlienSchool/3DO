import type { Metadata } from 'next'
import './globals.css'

// Use system fonts for reliable deployment
// Inter font will load via Google Fonts CDN at runtime (see globals.css)
const fontClassName = 'font-sans'

export const metadata: Metadata = {
  metadataBase: new URL('https://ThreeDaysOff.com'),
  title: 'Three Days Off | September 5 - September 7, 2026',
  description: 'A threesome with mind, body, and spirit. What would change if you gave yourself permission to pause?',
  keywords: ['meditation', 'wellness', 'rest', 'sabbatical', 'mindfulness', 'pause', 'labor day'],
  authors: [{ name: 'Kamau Zuberi Akabueze' }],
  creator: 'Kamau Zuberi Akabueze',
  publisher: 'Three Days Off',
  openGraph: {
    title: 'Three Days Off | What Would Change If You Gave Yourself Permission to Pause?',
            description: 'A threesome with mind, body, and spirit. Join the global pause September 5 - September 7, 2026.',
    url: 'https://ThreeDaysOff.com',
    siteName: 'Three Days Off',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Three Days Off - A threesome with mind, body, and spirit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Three Days Off | What Would Change If You Gave Yourself Permission to Pause?',
            description: 'A threesome with mind, body, and spirit. Join the global pause September 5 - September 7, 2026.',
    images: ['/twitter-image.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#F5F1E8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Load Inter font from Google Fonts CDN at runtime */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${fontClassName} selection-styling antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}

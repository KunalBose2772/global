import { Plus_Jakarta_Sans, Lexend, Jost } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingChatWidget from '@/components/layout/FloatingChatWidget';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-lexend',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://globalwebify.com'),
  title: {
    default: 'Global Webify - Enterprise Digital Solutions & IT Services',
    template: '%s | Global Webify',
  },
  description: 'Leading digital solutions provider offering web development, branding, AR business cards, and enterprise IT services. Transform your business with cutting-edge technology.',
  keywords: ['digital solutions', 'web development', 'branding', 'AR business cards', 'IT services', 'enterprise solutions'],
  authors: [{ name: 'Global Webify' }],
  creator: 'Global Webify',
  publisher: 'Global Webify',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://globalwebify.com',
    siteName: 'Global Webify',
    title: 'Global Webify - Enterprise Digital Solutions',
    description: 'Leading digital solutions provider offering web development, branding, AR business cards, and enterprise IT services.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Global Webify - Enterprise Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Webify - Enterprise Digital Solutions',
    description: 'Leading digital solutions provider offering web development, branding, AR business cards, and enterprise IT services.',
    images: ['/images/og-image.jpg'],
    creator: '@globalwebify',
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${lexend.variable} ${jost.variable}`}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingChatWidget />
      </body>
    </html>
  );
}

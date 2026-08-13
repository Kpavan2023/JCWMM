// Suppress missing type declarations for global CSS import
// TypeScript may not have a declaration for '*.css' in this project setup
// @ts-ignore
import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jcwmm.org'),
  title: 'Jesus Christ Word Miracles Ministry (JCWMM)',
  description:
    'Official website of Jesus Christ Word Miracles Ministry. Join us for worship, prayer, Bible study, live sermons, and community fellowship in Hyderabad, Telangana.',
  keywords: [
    'JCWMM', 'Jesus Christ Word Miracles Ministry', 'church Hyderabad', 'Telangana church',
    'worship', 'sermons', 'prayer', 'Sunday service', 'Christian church India',
  ],
  authors: [{ name: 'JCWMM' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Jesus Christ Word Miracles Ministry (JCWMM)',
    description:
      'Official website of Jesus Christ Word Miracles Ministry. Join us for worship, prayer, Bible study, live sermons, and community fellowship.',
    siteName: 'JCWMM',
    images: [{ url: '/logo_Jcwmm.png', width: 800, height: 800, alt: 'JCWMM Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jesus Christ Word Miracles Ministry (JCWMM)',
    description: 'Official website of JCWMM — Sharing God\'s Word, Transforming Lives, Walking in Faith.',
    images: ['/logo_Jcwmm.png'],
  },
  icons: {
    icon: '/logo_Jcwmm.png',
    shortcut: '/logo_Jcwmm.png',
    apple: '/logo_Jcwmm.png',
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Church',
      name: 'Jesus Christ Word Miracles Ministry',
      alternateName: 'JCWMM',
      description: 'A Spirit-filled, Word-centered ministry committed to making disciples and transforming lives.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        addressCountry: 'IN',
      },
      url: 'https://jcwmm.org',
      sameAs: [
        'https://www.youtube.com/@JCWMMOFFICIAL',
        'https://www.facebook.com/JCWMMOFFICIAL',
        'https://www.instagram.com/jcwmmofficial',
      ],
    }),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('jcwmm-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-inter antialiased`}>{children}</body>
    </html>
  );
}

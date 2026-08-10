import './globals.css';
import type { Metadata } from 'next';

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
    images: [{ url: '/Logo_Jcwmm.jpeg', width: 800, height: 800, alt: 'JCWMM Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jesus Christ Word Miracles Ministry (JCWMM)',
    description: 'Official website of JCWMM — Sharing God\'s Word, Transforming Lives, Walking in Faith.',
    images: ['/Logo_Jcwmm.jpeg'],
  },
  icons: {
    icon: '/Logo_Jcwmm.jpeg',
    shortcut: '/Logo_Jcwmm.jpeg',
    apple: '/Logo_Jcwmm.jpeg',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('jcwmm-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}

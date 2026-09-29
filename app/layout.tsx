import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#FF8A00',
  width: 'device-width',
  initialScale: 1,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://icydelight.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'IcyDelight | Artisanal Ice Cream, Mango Dolly & Royal Kulfi',
    template: '%s | IcyDelight Ice Cream'
  },
  description: 'Welcome to IcyDelight — Make Your Choice Right! Handcrafted artisanal ice creams, pure fruit dollies, Belgian chocobars, and royal kesar pista kulfi made from 100% farm-fresh dairy milk and real orchard fruit pulp.',
  keywords: [
    'IcyDelight',
    'Icy Delight',
    'IcyDelight ice cream',
    'IcyDelight Mango Dolly',
    'IcyDelight Raspberry Dolly',
    'IcyDelight Kesar Pista Kulfi',
    'IcyDelight Almond Bar',
    'IcyDelight Chocolate Pistachio',
    'Artisanal ice cream brand',
    'Real fruit ice candy',
    'Ice cream distributor partnership',
    'Ice cream parlour franchise'
  ],
  authors: [{ name: 'IcyDelight Foods Pvt. Ltd.', url: siteUrl }],
  creator: 'IcyDelight',
  publisher: 'IcyDelight Creamery',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'IcyDelight',
    title: 'IcyDelight | Artisanal Ice Cream & Pure Fruit Treats',
    description: 'Life is better with IcyDelight. Handcrafted gourmet chocobars, real mango dollies, and authentic slow-simmered desi kulfis.',
    images: [
      {
        url: '/images/products/mango-dolly.png',
        width: 1200,
        height: 630,
        alt: 'IcyDelight Artisanal Ice Creams and Real Fruit Dollies'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IcyDelight | Artisanal Ice Cream & Real Fruit Treats',
    description: '100% pure dairy milk and sun-ripened orchard fruits. Make your choice right with IcyDelight.',
    images: ['/images/products/mango-dolly.png'],
    creator: '@icydelight_official'
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
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data (JSON-LD) for Google Knowledge Graph & Brand Search
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'IcyDelight',
        alternateName: ['Icy Delight', 'IcyDelight Ice Cream', 'IcyDelight Creamery'],
        url: siteUrl,
        logo: `${siteUrl}/images/brand-logo.png`,
        description: 'Manufacturer and purveyor of premium artisanal ice creams, fruit dollies, and traditional desi kulfis.',
        slogan: 'Make your choice right !!',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-1800-209-4499',
          contactType: 'customer support',
          areaServed: 'IN',
          availableLanguage: ['en', 'hi']
        },
        sameAs: [
          'https://instagram.com/icydelight_official',
          'https://facebook.com/icydelight',
          'https://youtube.com/icydelight'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'IcyDelight',
        publisher: {
          '@id': `${siteUrl}/#organization`
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/products?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} font-sans bg-[#FFF9F2] text-[#14213D] antialiased selection:bg-orange-100 selection:text-[#FF8A00]`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

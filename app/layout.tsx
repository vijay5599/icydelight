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
  themeColor: '#FF3366',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'IcyDelight | Artisanal Ice Cream, Gourmet Cones & Real Fruit Pops',
    template: '%s | IcyDelight Artisanal Creamery'
  },
  description: 'Life tastes better with IcyDelight. Premium handcrafted ice cream, crunchy waffle cones, Belgian chocobars, and 100% natural fruit pops made from real milk and sun-ripened orchard fruits.',
  keywords: [
    'IcyDelight',
    'Artisanal ice cream',
    'Real fruit ice candy',
    'Belgian chocolate chocobar',
    'Waffle cones',
    'Gourmet sundaes',
    'FMCG ice cream brand',
    'Ice cream distributor partnership',
    'Ice cream parlour franchise'
  ],
  authors: [{ name: 'IcyDelight Foods Pvt. Ltd.' }],
  creator: 'IcyDelight',
  publisher: 'IcyDelight Creamery',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://icydelight.com',
    siteName: 'IcyDelight Artisanal Creamery',
    title: 'IcyDelight | Artisanal Ice Cream, Gourmet Cones & Real Fruit Pops',
    description: 'Premium handcrafted frozen desserts made using real fruits, rich whole milk, and natural ingredients. Churned to silky perfection without artificial preservatives.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'IcyDelight Artisanal Ice Cream Selection'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IcyDelight | Artisanal Ice Cream & Real Fruit Treats',
    description: '100% pure dairy milk, sun-ripened orchard fruits, and Belgian cocoa. Discover true creamery bliss.',
    images: ['https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?auto=format&fit=crop&w=1200&q=80'],
    creator: '@icydelight_official'
  },
  robots: {
    index: true,
    follow: true,
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
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans bg-[#FFF5F7] text-[#2A1220] antialiased selection:bg-[#FFE0E8] selection:text-[#FF3366]`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

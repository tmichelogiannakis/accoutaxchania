import type React from 'react';
import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import '../styles/globals.css';

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-public-sans'
});

export const metadata: Metadata = {
  title: 'AccouTaxChania - Expert Accounting Services',
  description:
    'Reliable, professional, and tailored financial services to help you grow.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: 'images/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)'
      },
      {
        url: 'images/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)'
      },
      {
        url: 'images/icon.svg',
        type: 'image/svg+xml'
      }
    ],
    apple: 'images/apple-icon.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${publicSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

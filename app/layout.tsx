import type React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Unbounded } from 'next/font/google';

// Load Unbounded font for headings
const unbounded = Unbounded({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-unbounded',
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: 'EVIDENT3 - Software Agency',
  description:
    "We're a software agency that specializes in thinking differently",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={unbounded.className}>{children}</body>
    </html>
  );
}

import type React from 'react';
import './globals.css';
import { Unbounded } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';

// Load Unbounded font for headings
const unbounded = Unbounded({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-unbounded',
  weight: ['300', '400', '500'],
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL('https://evidente.hr'),
    alternates: {
      languages: {
        hr: 'https://evidente.hr/hr',
        en: 'https://evidente.hr/',
      },
    },
    verification: {
      google: 'osp7XN8aj7fR1rLNzdT5gN0UdWobVDJRDfvKouKu0f0',
    },
    openGraph: {
      type: 'website',
      url: 'https://evidente.hr/',
      siteName: 'EVIDENTE',
      locale: locale === 'hr' ? 'hr_HR' : 'en_US',
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={unbounded.className}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}

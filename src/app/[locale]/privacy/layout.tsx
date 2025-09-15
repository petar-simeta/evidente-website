import type { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const base = 'https://evidente.hr';
  const path = locale === 'hr' ? '/hr/privacy' : '/privacy';
  const url = `${base}${path}`;

  return {
    title: t('titlePrivacy'),
    description: t('descriptionPrivacy'),
    metadataBase: new URL(base),
    alternates: {
      canonical: url,
      languages: {
        hr: `${base}/hr/privacy`,
        en: `${base}/privacy`,
      },
    },
    openGraph: {
      type: 'website',
      url,
      siteName: 'EVIDENTE',
      locale: locale === 'hr' ? 'hr_HR' : 'en_US',
      title: t('titlePrivacy'),
      description: t('descriptionPrivacy'),
    },
  };
}

export default async function PrivacyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

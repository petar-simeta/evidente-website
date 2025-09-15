import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PrivacyClient from './privacyClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
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

export default async function Page({
  _params,
}: {
  _params: Promise<{ locale: string }>;
}) {
  // consume params to satisfy @typescript-eslint/no-unused-vars without changing behavior
  await _params;
  return <PrivacyClient />;
}

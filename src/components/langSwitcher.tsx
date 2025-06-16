'use client';

import { useRouter, usePathname } from '../i18n/navigation';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import styles from '../app/[locale]/page.module.scss';

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSwitch(newLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <>
      <div className={styles.langSwitcherWrapper}>
        <div
          onClick={() => onSwitch('hr')}
          className={locale === 'hr' ? styles.active : ''}
        >
          hr
        </div>
        <div
          onClick={() => onSwitch('en')}
          className={locale === 'en' ? styles.active : ''}
        >
          en
        </div>
      </div>
    </>
  );
}

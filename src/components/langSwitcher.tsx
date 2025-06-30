'use client';

import { Link, usePathname } from '../i18n/navigation';
import { useLocale } from 'next-intl';
import styles from '../app/[locale]/page.module.scss';

export default function LangSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className={styles.langSwitcherWrapper}>
      <Link
        href={pathname}
        locale='hr'
        className={locale === 'hr' ? styles.active : ''}
      >
        hr
      </Link>
      <Link
        href={pathname}
        locale='en'
        className={locale === 'en' ? styles.active : ''}
      >
        en
      </Link>
    </div>
  );
}

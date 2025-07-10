'use client';

import { useTranslations } from 'next-intl';
import styles from '../app/[locale]/page.module.scss';
import Footer from './footer';

export default function FooterSection() {
  const t = useTranslations('home.footer.upper');

  return (
    <footer className={styles.footer} id='footer'>
      <div className={styles.topSection}>
        <div className='container'>
          <div className={styles.aboveHeaderButton}>{t('aboveTitle')}</div>

          <h2>{t('title')}</h2>

          <p className={styles.subtext}> {t('subtitle')} </p>

          <a
            href='mailto:email@example.com?subject=I%27m%20interested%20in%20working%20with%20you&body=Dear%20Evidente%2C%20my%20name%20is'
            className={styles.ctaButton}
          >
            {t('button')}
          </a>
        </div>
      </div>

      <Footer />
    </footer>
  );
}

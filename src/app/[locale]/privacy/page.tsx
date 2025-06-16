'use client';

import styles from '../page.module.scss';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Privacy');

  return (
    <div>
      <Header />

      <main>
        <section className={styles.titleAndTextWrapper}>
          <div className='container'>
            <div className={styles.titleAndTextInnerWrapper}>
              <h1>{t('Title')}</h1>
              <div className={styles.textWrapper}>
                {t.rich('Body.Text', {
                  h2: (chunks) => <h2>{chunks}</h2>,
                  h3: (chunks) => <h3>{chunks}</h3>,
                  h4: (chunks) => <h4>{chunks}</h4>,
                  p: (chunks) => <p>{chunks}</p>,
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

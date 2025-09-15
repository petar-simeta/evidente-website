'use client';

import styles from '../page.module.scss';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { useTranslations } from 'next-intl';
import HeaderMobile from '@/src/components/headerMobile';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const t = useTranslations('privacy');

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1100);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isDesktop ? <Header /> : <HeaderMobile />}

      <main>
        <section className={styles.titleAndTextWrapper}>
          <div className='container'>
            <div className={styles.titleAndTextInnerWrapper}>
              <h1>{t('title')}</h1>
              <div className={styles.textWrapper}>
                {t.rich('body.text', {
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

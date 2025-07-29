'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../app/[locale]/page.module.scss';
import LangSwitcher from './langSwitcher';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('home.menu');
  const pathname = usePathname();

  // HEADER CODE (desktop)
  const [wrapperWidth, setWrapperWidth] = useState<number>(0);
  const [initialWidth, setInitialWidth] = useState<number>(0);
  const [headerBg, setHeaderBg] = useState<string>('rgba(245, 245, 245, 0)');
  const [wrapperPadding, setWrapperPadding] = useState<string>('0 0');
  const [ratioToScroll, setRatioToScroll] = useState<number>(0);
  const [langOp, setLangOp] = useState<number>(1);

  // Function to handle scroll effects
  const handleScroll = () => {
    const scrollPos = window.pageYOffset;

    // For color and padding (0-400), but max opacity 0.75
    const rawRatio = Math.min(Math.max(scrollPos, 0), 400) / 400;
    setLangOp(1 - rawRatio);
    const colorScrollRatio = Math.min(rawRatio, 0.5);

    // Basic ratio (200-600)
    const basicRatio =
      scrollPos <= 200 ? 0 : Math.min(Math.max(scrollPos - 200, 0), 400) / 400;

    // For width (0-1000)
    const widthScrollRatio = Math.min(Math.max(scrollPos, 0), 1000) / 1000;

    // Calculate new width using width scroll ratio
    const newWidth = initialWidth - (initialWidth - 1000) * widthScrollRatio;
    setWrapperWidth(newWidth);

    // Calculate background opacity based on color scroll ratio
    const bgColor = `rgba(245, 245, 245, ${colorScrollRatio})`;
    setHeaderBg(bgColor);

    // Calculate padding based on color scroll ratio
    const padding = `${20 * rawRatio}px ${20 * rawRatio}px`;
    setWrapperPadding(padding);
    setRatioToScroll(basicRatio);
  };

  useEffect(() => {
    const updateDimensions = () => {
      const container = document.querySelector('.container');
      if (!container) return;

      const rawWidth = container.clientWidth;
      // when ≤1719 subtract 40px, otherwise keep full width
      const adjustedWidth = rawWidth <= 1719 ? rawWidth - 40 : rawWidth;

      setInitialWidth(adjustedWidth);
      setWrapperWidth(adjustedWidth);
    };

    // first set dimensions and scroll effect
    updateDimensions();
    handleScroll();

    window.addEventListener('resize', updateDimensions);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialWidth]);

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.2,
        type: 'spring',
        bounce: 0.4,
        delay: 0.5,
      }}
    >
      <div className='container'>
        <div
          className={styles.wrapper}
          style={
            {
              width: `${wrapperWidth}px`,
              backgroundColor: headerBg,
              padding: wrapperPadding,
              ['--scroll-ratio' as string]: ratioToScroll,
            } as React.CSSProperties
          }
        >
          <Link href='/'>
            <Image
              src='/evidente-logo.svg'
              alt='Evidente Logo'
              width={150}
              height={20}
              priority
            />
          </Link>
          {(pathname === '/' || pathname === '/hr') && (
            <nav className={styles.navigation}>
              <ul>
                <li>
                  <span
                    onClick={() =>
                      document
                        .getElementById('about')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    {t('links.0')}
                  </span>
                </li>
                <li>
                  <span
                    onClick={() =>
                      document
                        .getElementById('work')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    {t('links.1')}
                  </span>
                </li>
                <li>
                  <span
                    onClick={() =>
                      document
                        .getElementById('services')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    {t('links.2')}
                  </span>
                </li>
                <li>
                  <span
                    onClick={() =>
                      document
                        .getElementById('footer')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    {t('links.3')}
                  </span>
                </li>
              </ul>
            </nav>
          )}
          <div className={styles.ctaButtonWrapper}>
            <div
              style={{
                opacity: langOp,
                display: langOp > 0 ? 'block' : 'none',
              }}
            >
              <LangSwitcher />
            </div>
            {(pathname === '/' || pathname === '/hr') && (
              <span
                className={styles.ctaButton}
                onClick={() =>
                  document
                    .getElementById('footer')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {t('startProject')}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}

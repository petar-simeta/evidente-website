'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../page.module.scss';

export default function Header() {
  // HEADER CODE (desktop)
  const [wrapperWidth, setWrapperWidth] = useState<number>(0);
  const [initialWidth, setInitialWidth] = useState<number>(0);
  const [headerBg, setHeaderBg] = useState<string>('rgba(245, 245, 245, 0)');
  const [wrapperPadding, setWrapperPadding] = useState<string>('0 0');

  // Function to handle scroll effects
  const handleScroll = () => {
    const scrollPos = window.pageYOffset;

    // For color and padding (0-400)
    const colorScrollRatio = Math.min(Math.max(scrollPos, 0), 400) / 400;

    // For width (0-1000)
    const widthScrollRatio = Math.min(Math.max(scrollPos, 0), 1000) / 1000;

    // Calculate new width using width scroll ratio
    const newWidth = initialWidth - (initialWidth - 1000) * widthScrollRatio;
    setWrapperWidth(newWidth);

    // Calculate background opacity based on color scroll ratio
    const bgColor = `rgba(245, 245, 245, ${colorScrollRatio})`;
    setHeaderBg(bgColor);

    // Calculate padding based on color scroll ratio
    const padding = `${20 * colorScrollRatio}px ${20 * colorScrollRatio}px`;
    setWrapperPadding(padding);
  };

  useEffect(() => {
    // Update container dimensions on mount and resize
    const updateDimensions = () => {
      const container = document.querySelector('.container');
      if (!container) return;
      const width = container.clientWidth;
      setInitialWidth(width);
      setWrapperWidth(width);
    };

    // Initialize dimensions
    updateDimensions();

    // Check initial scroll position
    handleScroll();

    // Set up event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateDimensions);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateDimensions);
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
          style={{
            width: `${wrapperWidth}px`,
            backgroundColor: headerBg,
            padding: wrapperPadding,
          }}
        >
          <div className={styles.logo}>
            <Image
              src='/evidente-logo.svg'
              alt='Evidente Logo'
              width={150}
              height={20}
              priority
            />
          </div>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <Link href='#about'>About</Link>
              </li>
              <li>
                <Link href='#work'>Work</Link>
              </li>
              <li>
                <Link href='#services'>Services</Link>
              </li>
              <li>
                <Link href='#contact'>Contact</Link>
              </li>
            </ul>
          </nav>
          <Link href='#' className={styles.ctaButton}>
            Start your project
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

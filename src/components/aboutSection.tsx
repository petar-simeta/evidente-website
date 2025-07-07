'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import styles from '../app/[locale]/page.module.scss';
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('home.about');

  const headingRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(headingRef, { once: true });
  const [gridTop, setGridTop] = useState(30);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      // Get the section's position relative to the viewport
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      let newTop = 30; // default value when section is not scrolled into view

      // When the section's top is above the viewport top (rect.top < 0)
      if (rect.top < 0) {
        // Calculate progress: 0 when section top is at viewport top, 1 when it's one full viewport above.
        const progress = Math.min(Math.abs(rect.top) / viewportHeight, 1);
        newTop = 30 + progress * 40; // 30% to 70%
      }

      setGridTop(newTop);
    };

    window.addEventListener('scroll', handleScroll);
    // Call it on mount in case the section is already in view
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='about' ref={sectionRef} className={styles.aboutSection}>
      <div className={styles.aboutWrapper}>
        <div className={styles.grid} style={{ top: `${gridTop}%` }}>
          <div className={styles.left}>
            <h2 ref={headingRef}>
              <span>
                {t('title1')
                  .split('')
                  .map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.5 + index * 0.04 }}
                      style={{
                        display: char === ' ' ? 'inline' : 'inline-block',
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
              </span>
              <span>
                {t('title2')
                  .split('')
                  .map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 1.2 + index * 0.04 }}
                      style={{
                        display: char === ' ' ? 'inline' : 'inline-block',
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
              </span>
            </h2>
          </div>
          <div className={styles.right}>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              {t('p1')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: 2.3, duration: 0.5 }}
            >
              {t('p2')}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

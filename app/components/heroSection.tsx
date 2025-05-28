'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import styles from '../page.module.scss';
import HeroImageCarousel from './heroImageCarousel';

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={styles.hero}>
      <h1 className={styles.title} ref={ref}>
        <span>
          {'Software Company'.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.04 }}
            >
              {char}
            </motion.span>
          ))}
        </span>
        <span>
          {'With a Different Mindset'.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.7 + index * 0.04 }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      </h1>
      <HeroImageCarousel />
    </section>
  );
}

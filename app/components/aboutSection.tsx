'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import styles from '../page.module.scss';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id='about' className={styles.aboutSection}>
      <div className='container'>
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 ref={ref}>
              <span>
                {'It starts with'.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5 + index * 0.04 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <span>
                {'emotion'.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.2 + index * 0.04 }}
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
              And ends with eye-catching design, authentic stories, and
              meaningful experiences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: 2.3, duration: 0.5 }}
            >
              We are a software agency in Croatia that cares about you and your
              brand, no matter the size or what industry your business is in.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import styles from '../page.module.scss';

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Create an array of 7 images with their corresponding alt text
  const heroImages = [
    { src: '/image1.jpg', alt: 'Image 1' },
    { src: '/image2.jpg', alt: 'Image 2' },
    { src: '/image3.jpg', alt: 'Image 3' },
    { src: '/image4.jpg', alt: 'Image 4' },
    { src: '/image1.jpg', alt: 'Image 5' },
    { src: '/image2.jpg', alt: 'Image 6' },
    { src: '/image3.jpg', alt: 'Image 7' },
  ];

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
      <motion.div
        className={styles.carousel}
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
          type: 'spring',
          bounce: 0.4,
        }}
      >
        <div
          className={styles.carouselWrap}
          style={{
            transform: `rotateZ(1deg) translateZ(200px) rotateY(-4deg) translateX(-${scrollOffset}px)`,
          }}
        >
          {heroImages.map((image, index) => {
            // Use window.innerHeight if available, else default to 1 to avoid division by zero.
            const vh = typeof window !== 'undefined' ? window.innerHeight : 1;
            const progress = Math.min(scrollOffset / vh, 1);
            const start = -5 * index;
            const end = 50 - 5 * index;
            const translate = start + progress * (end - start);

            return (
              <div key={index} className={styles.image}>
                <div className={styles.imageInner}>
                  <div
                    className={styles.imageInnerInner}
                    style={{
                      transform: `translate3d(${translate}px, 0, 0)`,
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={800}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

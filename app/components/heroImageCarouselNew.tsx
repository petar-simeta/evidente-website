'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import styles from '../page.module.scss';

export default function HeroImageCarouselNew() {
  // Create an array of 8 images with their corresponding alt text
  const heroImages = [
    { src: '/hero-bags.jpeg', alt: 'Shopping bags for E-commerce' },
    { src: '/hero-call.jpeg', alt: 'Bussines call with clients' },
    { src: '/hero-code.jpeg', alt: 'Software website code' },
    { src: '/hero-girl.jpeg', alt: 'Girl in meetings' },
    { src: '/hero-hands.jpeg', alt: 'Hands working together' },
    { src: '/hero-handshake.jpeg', alt: 'Partner handshake' },
    { src: '/hero-man.jpeg', alt: 'Man in meetings' },
    { src: '/hero-robot.jpeg', alt: 'AI Robot' },
  ];

  return (
    <motion.div
      className={styles.carousel}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <div className={styles.carouselWrap}>
        {heroImages.map((image, index) => {
          return (
            <div key={index} className={styles.image}>
              <div className={styles.imageInner}>
                <div className={styles.imageInnerInner}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={800}
                    priority
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

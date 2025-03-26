'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import styles from '../page.module.scss';

export default function HeroImageCarouselNew() {
  // Create an array of 7 images with their corresponding alt text
  const heroImages = [
    { src: '/image1.jpg', alt: 'Image 1' },
    { src: '/image2.jpg', alt: 'Image 2' },
    { src: '/image3.jpg', alt: 'Image 3' },
    { src: '/image4.jpg', alt: 'Image 4' },
    { src: '/image1.jpg', alt: 'Image 5' },
    { src: '/image2.jpg', alt: 'Image 6' },
    { src: '/image3.jpg', alt: 'Image 7' },
    { src: '/image4.jpg', alt: 'Image 8' },
  ];

  return (
    <div className={styles.carousel}>
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
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import styles from '../[locale]/page.module.scss';

export default function HeroImageCarousel() {
  const container = useRef<HTMLDivElement>(null);
  const heroImages = [
    { src: '/hero-bags.jpeg', alt: 'Shopping bags for E-commerce' },
    { src: '/hero-call.jpeg', alt: 'Business call with clients' },
    { src: '/hero-code.jpeg', alt: 'Software website code' },
    { src: '/hero-girl.jpeg', alt: 'Girl in meetings' },
    { src: '/hero-hands.jpeg', alt: 'Hands working together' },
    { src: '/hero-handshake.jpeg', alt: 'Partner handshake' },
    { src: '/hero-meeting.jpeg', alt: 'Man in meetings' },
    { src: '/hero-flowers.jpeg', alt: 'Flowers in an office' },
  ];

  useLayoutEffect(() => {
    if (!container.current) return;
    const inners = container.current.querySelectorAll<HTMLDivElement>(
      `.${styles.imageInner}`
    );
    const total = inners.length;
    const duration = 100;

    gsap.fromTo(
      container.current,
      { opacity: 0 },
      { opacity: 1, duration: 3, ease: 'power1.out' }
    );

    inners.forEach((el, i) => {
      const startAngle = (360 / total) * i;
      gsap.set(el, {
        rotation: startAngle,
        transformOrigin: '50% 480%',
        willChange: 'transform',
      });
      gsap.to(el, {
        rotation: '+=360',
        duration,
        repeat: -1,
        ease: 'none',
      });
    });
  }, []);

  return (
    <div ref={container} className={styles.carousel}>
      <div className={styles.carouselWrap}>
        {[...heroImages, ...heroImages, ...heroImages].map(
          ({ src, alt }, idx) => (
            <div key={idx} className={styles.image}>
              <div className={styles.imageInner}>
                <div className={styles.imageInnerInner}>
                  <Image
                    src={src}
                    alt={alt}
                    width={800}
                    height={800}
                    priority
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

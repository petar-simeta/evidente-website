'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../page.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturesSectionMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const forwardRef = useRef<HTMLDivElement>(null);
  const backwardRef = useRef<HTMLDivElement>(null);

  const techsForward = ['UX/UI', 'Design', 'Webshops', 'Websites', 'Support'];
  const colorsForward = ['#FAFF5C', '#9B009B', '#EABFFF', '#C6FB50', '#484848'];
  const textColorsForward = [
    '#232323',
    '#F5F5F5',
    '#232323',
    '#232323',
    '#F5F5F5',
  ];

  const techsBackward = [
    'Drupal CMS',
    'JavaScript',
    'Amarant',
    'PHP',
    'NextJS',
  ];
  const colorsBackward = [
    '#FAFF5C',
    '#C6FB50',
    '#EABFFF',
    '#FAFF5C',
    '#9B009B',
  ];
  const textColorsBackward = [
    '#232323',
    '#232323',
    '#232323',
    '#232323',
    '#F5F5F5',
  ];

  useEffect(() => {
    const container = containerRef.current!;
    const fwd = forwardRef.current!;
    const bwd = backwardRef.current!;

    const startFwd = window.innerWidth * 1.2;
    const startBwd = window.innerWidth * 0.1;
    const shiftFwd = fwd.scrollWidth * 0.2;
    const shiftBwd = bwd.scrollWidth * 0.2;

    gsap.fromTo(
      fwd,
      { x: startFwd },
      {
        x: shiftFwd,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      bwd,
      { x: startBwd },
      {
        x: shiftBwd,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section className={styles.featuresSectionMobile}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className={styles.sliderWrapper}
      >
        {/* SLIDE #1 */}
        <SwiperSlide className={styles.slideWrapper}>
          <div
            ref={containerRef}
            className={`${styles.featureCard} ${styles.techToolbox}`}
          >
            <div ref={backwardRef} className={styles.sliderReverse} role='list'>
              {techsBackward.map((tech, i) => (
                <div
                  key={i}
                  className={styles.card}
                  style={{
                    backgroundColor: colorsBackward[i],
                    color: textColorsBackward[i],
                  }}
                  role='listitem'
                >
                  {tech}
                </div>
              ))}
            </div>

            <div ref={forwardRef} className={styles.slider} role='list'>
              {techsForward.map((tech, i) => (
                <div
                  key={i}
                  className={styles.card}
                  style={{
                    backgroundColor: colorsForward[i],
                    color: textColorsForward[i],
                  }}
                  role='listitem'
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className={styles.content}>
              <h3>Our Tech Toolbox</h3>
              <p>
                Every technology has its own purpose. We carefully select the
                right tools to create exceptional digital experiences.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE #2 */}
        <SwiperSlide className={styles.slideWrapper}>
          <div className={`${styles.featureCard} ${styles.experienceCard}`}>
            <h3>Experience</h3>
            <p>
              We maintain a relentless pursuit for innovation and excellence.
              Our team has delivered over 50 successful projects across various
              industries, helping clients stand out from the competition.
            </p>
            <h3 className={styles.biggerNumberTitle}>50+</h3>
            <p>Successful projects completed</p>
            <Link href='#contact' className={styles.contactButton}>
              Contact us
            </Link>
          </div>
        </SwiperSlide>

        {/* SLIDE #3 */}
        <SwiperSlide className={styles.slideWrapper}>
          <div className={`${styles.featureCard} ${styles.responsiveCard}`}>
            <h3>Responsive for every device and browser!</h3>
            <p>
              We ensure your website is fully responsive and works perfectly on
              all devices and browsers. From mobile phones to desktops, your
              users will have a seamless experience.
            </p>
            <div className={styles.deviceImage}>
              <Image
                src='/laptop-and-phone.png'
                alt='Responsive design'
                width={600}
                height={900}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

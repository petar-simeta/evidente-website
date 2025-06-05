'use client';

import { useRef, useEffect } from 'react';
import styles from '../page.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const forwardRef = useRef<HTMLDivElement>(null);
  const backwardRef = useRef<HTMLDivElement>(null);

  const techsForward = [
    'UX/UI',
    'Design',
    'Webshops',
    'Websites',
    'Support',
    'Consulting',
  ];
  const colorsForward = [
    '#9B009B',
    '#FAFF5C',
    '#EABFFF',
    '#C6FB50',
    '#484848',
    '#EABFFF',
  ];
  const textColorsForward = [
    '#F5F5F5',
    '#232323',
    '#232323',
    '#232323',
    '#F5F5F5',
    '#232323',
  ];

  const techsBackward = [
    'Drupal CMS',
    'JavaScript',
    'Amarant',
    'PHP',
    'NextJS',
    'Figma',
  ];
  const colorsBackward = [
    '#FAFF5C',
    '#C6FB50',
    '#9B009B',
    '#EABFFF',
    '#FAFF5C',
    '#C6FB50',
  ];
  const textColorsBackward = [
    '#232323',
    '#232323',
    '#F5F5F5',
    '#232323',
    '#232323',
    '#232323',
  ];

  useEffect(() => {
    const container = containerRef.current!;
    const fwd = forwardRef.current!;
    const bwd = backwardRef.current!;

    const startFwd = window.innerWidth * 0.8;
    const startBwd = window.innerWidth * 0.3;
    const shiftFwd = fwd.scrollWidth * 0.1;
    const shiftBwd = bwd.scrollWidth * 0.5;

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
    <section ref={containerRef} className={styles.featuresSection}>
      <div className='container'>
        <div className={styles.featuresGrid}>
          <div className={`${styles.featureCard} ${styles.techToolbox}`}>
            {/* Backward slider */}
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

            {/* Forward slider */}
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

            {/* Tech Toolbox Content */}
            <div className={styles.content}>
              <h3>Smart Tech Choices</h3>
              <p>
                Every tool we use is chosen strategically, aligning perfectly
                with project goals to deliver outstanding digital experiences.
              </p>
            </div>

            {/* Tech Toolbox Mask */}
            <div className={styles.mask}></div>
          </div>

          {/* Experience Card */}
          <div className={`${styles.featureCard} ${styles.experienceCard}`}>
            <h3>Experience</h3>
            <p>
              We maintain a relentless pursuit for innovation and excellence.
              Our team has delivered over 50 successful projects across various
              industries, helping clients stand out from the competition.
            </p>
          </div>

          {/* Projects Card */}
          <div className={`${styles.featureCard} ${styles.projectsCard}`}>
            <h3>50+</h3>
            <p>Successful projects completed</p>
            <Link href='#contact' className={styles.contactButton}>
              Contact us
            </Link>
            <div
              className={styles.scrollToWorkWrapper}
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById('work')?.offsetTop,
                  behavior: 'smooth',
                })
              }
            >
              <div className={styles.scrollToWork}></div>
            </div>
          </div>

          {/* Responsive Sard Card */}
          <div className={`${styles.featureCard} ${styles.responsiveCard}`}>
            <h3>Responsive for every device and browser!</h3>
            <p>
              Fully responsive and reliably optimized—your users will enjoy a
              flawless browsing experience across all devices and browsers.
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
        </div>
      </div>
    </section>
  );
}

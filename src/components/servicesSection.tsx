'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import styles from '../app/[locale]/page.module.scss';
import { useTranslations } from 'next-intl';

export default function ServicesSection() {
  const t = useTranslations('home.services');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeService, setActiveService] = useState(0);

  const services = Array.from({ length: 7 }, (_, index) =>
    t(`content.${index}.title`)
  );

  const logos = [
    { src: '/partner-logos/autohrvatska-black-logo.svg', alt: 'Auto Hrvatska' },
    { src: '/partner-logos/loreal-black-logo.svg', alt: "L'Oréal" },
    { src: '/partner-logos/koncar-black-logo.svg', alt: 'Končar' },
    { src: '/partner-logos/atlantic-black-logo.svg', alt: 'Atlantic Grupa' },
    { src: '/partner-logos/otp-black-logo.svg', alt: 'OTP banka' },
    { src: '/partner-logos/sabor-black-logo.svg', alt: 'Hrvatski sabor' },
  ];

  // Delay so logos animate only after previous content is in view
  const baseDelay = 1.5 + services.length * 0.2 + 0.5; // 1.5 (heading) + buttons + small buffer

  return (
    <section id='services' className={styles.servicesSection}>
      <div className='container'>
        <div className={styles.servicesInnerWrapper}>
          <h2 ref={ref}>
            <span>
              {t('title.0')
                .split('')
                .map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    {char}
                  </motion.span>
                ))}
            </span>
            <span className={styles.yellowText}>
              {t('title.1')
                .split('')
                .map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.6 + index * 0.03 }}
                  >
                    {char}
                  </motion.span>
                ))}
            </span>
            <span>
              {t('title.2')
                .split('')
                .map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.5 + index * 0.03 }}
                  >
                    {char}
                  </motion.span>
                ))}
            </span>
          </h2>

          <div className={styles.servicesContent}>
            <div className={styles.serviceButtons}>
              {services.map((service, index) => (
                <motion.button
                  key={index}
                  className={`${styles.serviceButton} ${activeService === index ? styles.active : ''}`}
                  onClick={() => setActiveService(index)}
                  initial={{ opacity: 0, x: '-50%' }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-50%' }
                  }
                  transition={{
                    duration: 0.3,
                    delay: 1.5 + index * 0.2,
                    type: 'spring',
                    bounce: 0.4,
                  }}
                >
                  <span>{service}</span>
                </motion.button>
              ))}
            </div>

            <motion.div
              className={styles.serviceDescription}
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <motion.p
                key={activeService}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  type: 'spring',
                  bounce: 0.4,
                }}
              >
                {t(`content.${activeService}.description`)}
              </motion.p>
            </motion.div>
          </div>
        </div>

        <div className={styles.blackLogosWrapper}>
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo.src}
              alt={logo.alt}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.3,
                delay: baseDelay + index * 0.2,
                type: 'spring',
                bounce: 0.4,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

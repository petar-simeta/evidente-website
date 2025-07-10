'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import styles from '../app/[locale]/page.module.scss';
import { useTranslations } from 'next-intl';

export default function ServicesSectionMobile() {
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
  const baseDelay = 1.5;

  return (
    <section id='services' className={styles.servicesSection}>
      <div className='container'>
        <div className={styles.servicesInnerWrapper}>
          <h2 ref={ref}>
            <span>
              {'Our team delivers'.split('').map((char, index) => (
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
              {'innovative web experiences'.split('').map((char, index) => (
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
              {'that drive results'.split('').map((char, index) => (
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

          <motion.div
            className={styles.servicesContentMobile}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
          >
            {services.map((service, index) => (
              <div key={index} className={styles.serviceItem}>
                <button
                  className={`${styles.serviceButton} ${activeService === index ? styles.active : ''}`}
                  onClick={() => setActiveService(index)}
                >
                  <span>{service}</span>
                </button>
                {activeService === index && (
                  <motion.div
                    className={styles.serviceDescription}
                    initial={{ opacity: 0, y: -20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                    }
                    transition={{
                      duration: 0.3,
                      type: 'spring',
                      bounce: 0.4,
                    }}
                  >
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: -20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                      }
                      transition={{
                        duration: 0.3,
                        type: 'spring',
                        bounce: 0.4,
                      }}
                    >
                      {t(`content.${activeService}.description`)}
                    </motion.p>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
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

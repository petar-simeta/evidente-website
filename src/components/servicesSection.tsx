'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import styles from '../app/[locale]/page.module.scss';

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeService, setActiveService] = useState(0);

  const services = [
    'Concept Discovery',
    'Brainstorming Workshop',
    'Visual Design',
    'Solution Development',
    'Quality Assurance',
    'Strategic Launch',
    'Ongoing Support',
  ];

  const serviceContent = [
    'Every great project starts with a clear idea. We listen closely and ask the right questions. Together, we lay the groundwork for turning your vision into something tangible.',
    'In this phase, collaboration drives innovation. We explore various approaches, refine each concept, and map out a solid plan to transform your idea into an executable strategy.',
    'Here, we translate concepts into engaging visuals and intuitive interfaces. Our goal is to create designs that not only look exceptional but also deliver a seamless experience for your users.',
    'This is where designs come to life. Leveraging modern technologies and best practices, we build robust, scalable solutions tailored precisely to your requirements.',
    'Quality is our top priority. Through thorough testing—functional, performance, and usability—we ensure your solution is reliable, bug-free, and ready to impress end users.',
    'Launching is more than just going live—it’s setting the stage for future growth. We coordinate deployments carefully, monitor initial performance, and make sure everything runs smoothly from day one.',
    'Our partnership doesn’t end at launch. We provide ongoing support, updates, and maintenance, ensuring your solution continues to perform optimally and adapt to evolving needs.',
  ];

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
                {serviceContent[activeService]}
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

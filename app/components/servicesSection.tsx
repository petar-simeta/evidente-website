'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import styles from '../page.module.scss';

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeService, setActiveService] = useState(0);

  // Service content based on active selection
  const serviceContent = [
    'Our project management team ensures smooth execution from start to finish. We use agile methodologies to adapt quickly to changing requirements and deliver results on time and within budget.',
    'Our UI/UX designers create intuitive, beautiful interfaces that delight users. We focus on user research, wireframing, and prototyping to ensure the best possible user experience.',
    'Our development team builds robust, scalable software solutions using the latest technologies. We follow best practices for clean code, testing, and documentation.',
    'Quality assurance is built into our process. Our testing team ensures your software is bug-free and performs optimally across all platforms and devices.',
    'We handle the entire launch process, from final testing to deployment. Our team ensures a smooth transition to production with minimal downtime.',
    'Our support team is available to help with any issues that arise after launch. We provide maintenance, updates, and improvements to keep your software running smoothly.',
  ];

  const services = [
    'Project Management',
    'User Interface Design',
    'Software development',
    'Software testing',
    'Testing and project launch',
    'Support and maintenance',
  ];

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
      </div>
    </section>
  );
}

'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import styles from '../page.module.scss';

export default function ServicesSection() {
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
          <h2>
            We carefully adjust and
            <span> organize our teams </span>
            to create unforgettable experience.
          </h2>

          <div className={styles.servicesContent}>
            <div className={styles.serviceButtons}>
              {services.map((service, index) => (
                <button
                  key={index}
                  className={`${styles.serviceButton} ${activeService === index ? styles.active : ''}`}
                  onClick={() => setActiveService(index)}
                >
                  <span>{service}</span>
                </button>
              ))}
            </div>

            <div className={styles.serviceDescription}>
              <p>{serviceContent[activeService]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import styles from '../page.module.scss';
import Link from 'next/link';

export default function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className='container'>
        <div className={styles.featuresGrid}>
          {/* Tech Toolbox Card */}
          <div className={`${styles.featureCard} ${styles.techToolbox}`}>
            <h3>Our Tech Toolbox</h3>
            <p>
              Every technology has its own purpose. We carefully select the
              right tools to create exceptional digital experiences.
            </p>
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

          {/* Responsive Card */}
          <div className={`${styles.featureCard} ${styles.responsiveCard}`}>
            <h3>Responsive for every device and browser!</h3>
            <p>
              We ensure your website is fully responsive and works perfectly on
              all devices and browsers. From mobile phones to desktops, your
              users will have a seamless experience.
            </p>
            <div className={styles.deviceImage}>
              <Image
                src='/lsptop-and-phone.png'
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

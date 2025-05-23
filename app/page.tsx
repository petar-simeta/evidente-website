'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';
import HeroSection from './components/heroSection';
import PreloaderWrapper from './components/preloaderWrapper';
import Header from './components/header';
import AboutSection from './components/aboutSection';
import ServicesSection from './components/servicesSection';
import WorkSection from './components/workSection';
import FooterSection from './components/footerSection';
import HeaderMobile from './components/headerMobile';

export default function Home() {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1100);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <PreloaderWrapper>
      <div>
        {isDesktop ? <Header /> : <HeaderMobile />}

        <main>
          <HeroSection />

          <AboutSection />

          {/* Features Section */}
          <section className={styles.featuresSection}>
            <div className='container'>
              <div className={styles.featuresGrid}>
                {/* Tech Toolbox Card */}
                <div className={`${styles.featureCard} ${styles.techToolbox}`}>
                  <h3>Our Tech Toolbox</h3>
                  <p>
                    Every technology has its own purpose. We carefully select
                    the right tools to create exceptional digital experiences.
                  </p>
                </div>

                {/* Experience Card */}
                <div
                  className={`${styles.featureCard} ${styles.experienceCard}`}
                >
                  <h3>Experience</h3>
                  <p>
                    We maintain a relentless pursuit for innovation and
                    excellence. Our team has delivered over 50 successful
                    projects across various industries, helping clients stand
                    out from the competition.
                  </p>
                </div>

                {/* Projects Card */}
                <div className={`${styles.featureCard} ${styles.projectsCard}`}>
                  <h3>50+</h3>
                  <p>Successful projects completed</p>
                  <Link href='#contact' className={styles.contactButton}>
                    Contact us
                  </Link>
                </div>

                {/* Responsive Card */}
                <div
                  className={`${styles.featureCard} ${styles.responsiveCard}`}
                >
                  <h3>Responsive for every device and browser!</h3>
                  <p>
                    We ensure your website is fully responsive and works
                    perfectly on all devices and browsers. From mobile phones to
                    desktops, your users will have a seamless experience.
                  </p>
                  <div className={styles.deviceImage}>
                    <Image
                      src='/placeholder.svg?height=300&width=200'
                      alt='Responsive design'
                      width={200}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <WorkSection />

          <ServicesSection />
        </main>

        <FooterSection />
      </div>
    </PreloaderWrapper>
  );
}

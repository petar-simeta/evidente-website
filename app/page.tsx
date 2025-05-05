'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';
import HeroSection from './components/heroSection';
import PreloaderWrapper from './components/preloaderWrapper';
import Header from './components/header';
import AboutSection from './components/aboutSection';
import ServicesSection from './components/servicesSection';
import WorkSection from './components/workSection';

export default function Home() {
  // Featured work projects
  const projects = [
    { title: 'BeautifyMe Shop', category: 'E-commerce' },
    { title: 'FitTrack', category: 'Health & Fitness' },
    { title: 'Dazzler', category: 'Entertainment' },
    { title: 'Auto 15 volt', category: 'Automotive' },
    { title: 'TechSavvy', category: 'Technology' },
  ];

  // Client logos
  const clients = [
    '/placeholder.svg?height=50&width=120',
    '/placeholder.svg?height=50&width=120',
    '/placeholder.svg?height=50&width=120',
    '/placeholder.svg?height=50&width=120',
    '/placeholder.svg?height=50&width=120',
  ];

  return (
    <PreloaderWrapper>
      <div>
        {/* Header */}
        <Header />

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

          {/* CTA Section */}
          <section id='contact' className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <div className={styles.bookingTag}>
                <span></span>
                Booking
              </div>
              <h2>Let&apos;s Work Together</h2>
              <p>
                Fill out our form, schedule a call or reach out via email.{' '}
                <br />
                We&apos;ll be in touch in less than 24h.
              </p>
              <Link href='#' className={styles.startProjectButton}>
                Start your project
              </Link>

              <div className={styles.clientLogos}>
                <div className={styles.logoTrack}>
                  {/* Duplicate logos for infinite carousel effect */}
                  {[...clients, ...clients].map((src, index) => (
                    <div key={index} className={styles.logoItem}>
                      <Image
                        src={src || '/placeholder.svg'}
                        alt={`Client logo ${(index % clients.length) + 1}`}
                        width={120}
                        height={50}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerTop}>
              <div className={styles.footerInfo}>
                <div className={styles.footerLogo}>EVIDENT3</div>
                <p>
                  We create solutions that drive your business. Get in touch.
                </p>
              </div>
              <div className={styles.footerButtons}>
                <Link href='#' className={styles.footerCta}>
                  Start Your Project
                </Link>
                <Link href='#' className={styles.footerSecondary}>
                  View our portfolio
                </Link>
              </div>
            </div>

            <div className={styles.footerBottom}>
              <div>© Copyright 2025 Evidente</div>
              <div className={styles.footerLinks}>
                <Link href='#'>LinkedIn</Link>
                <Link href='#'>Privacy Policy</Link>
                <Link href='#'>Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </PreloaderWrapper>
  );
}

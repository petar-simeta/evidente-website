'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
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

  // Images for the top carousel
  const heroImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

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

  // Services list
  const services = [
    'Project Management',
    'User Interface Design',
    'Software development',
    'Software testing',
    'Testing and project launch',
    'Support and maintenance',
  ];

  return (
    <div>
      {/* Header */}
      <header className={styles.header}>
        <div className='container'>
          <div className={styles.wrapper}>
            <div className={styles.logo}>
              <Image
                src='/evidente-logo.svg'
                alt='Evidente Logo'
                width={150}
                height={20}
                priority
              />
            </div>
            <nav className={styles.navigation}>
              <ul>
                <li>
                  <Link href='#about'>About</Link>
                </li>
                <li>
                  <Link href='#work'>Work</Link>
                </li>
                <li>
                  <Link href='#services'>Services</Link>
                </li>
                <li>
                  <Link href='#contact'>Contact</Link>
                </li>
              </ul>
            </nav>
            <Link href='#' className={styles.ctaButton}>
              Start your project
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>
            We&apos;re a software agency that specializes in thinking
            differently
          </h1>

          <div className={styles.heroCarousel}>
            <div className={styles.carouselTrack}>
              {/* Duplicate images for infinite carousel effect */}
              {[...heroImages, ...heroImages].map((src, index) => (
                <div key={index} className={styles.carouselItem}>
                  <Image
                    src={src || '/placeholder.svg'}
                    alt={`Showcase image ${(index % heroImages.length) + 1}`}
                    width={300}
                    height={300}
                    className={styles.carouselImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emotion Section */}
        <section className={styles.emotionSection}>
          <div className={styles.emotionContent}>
            <h2 className={styles.emotionTitle}>It starts with emotion</h2>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className={styles.valueSection}>
          <div className={styles.valueContent}>
            <p className={styles.valueLead}>
              And ends with eye-catching design, authentic stories, and
              meaningful experiences.
            </p>
            <p className={styles.valueText}>
              We are software agency in Croatia that cares about you and your
              brand, no matter the size or what industry your business is in.
            </p>
          </div>
        </section>

        {/* Features Section with Parallax */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresGrid}>
            {/* Tech Toolbox Card */}
            <div className={`${styles.featureCard} ${styles.techToolbox}`}>
              <h3>Our Tech Toolbox</h3>
              <p>
                Every technology has its own purpose. We carefully select the
                right tools to create exceptional digital experiences.
              </p>
              <div className={styles.techTags}>
                {[
                  'React',
                  'Next.js',
                  'Node.js',
                  'TypeScript',
                  'Tailwind',
                  'MongoDB',
                ].map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Card */}
            <div className={`${styles.featureCard} ${styles.experienceCard}`}>
              <div className={styles.cardHeader}>
                <h3>Experience</h3>
                <div className={styles.dots}>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <p>
                We maintain a relentless pursuit for innovation and excellence.
                Our team has delivered over 50 successful projects across
                various industries, helping clients stand out from the
                competition.
              </p>
              <div className={styles.experienceStats}>
                <h2>50+</h2>
                <p>Successful projects completed</p>
                <Link href='#contact' className={styles.contactButton}>
                  Contact us
                </Link>
              </div>
            </div>

            {/* Responsive Card */}
            <div className={`${styles.featureCard} ${styles.responsiveCard}`}>
              <h3>Responsive for every device and browser!</h3>
              <p>
                We ensure your website is fully responsive and works perfectly
                on all devices and browsers. From mobile phones to desktops,
                your users will have a seamless experience.
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
        </section>

        {/* Featured Work Section with Parallax */}
        <section id='work' className={styles.workSection}>
          <h2>Featured Work</h2>

          <div className={styles.workSlider}>
            <div className={styles.sliderTrack}>
              {/* Duplicate projects for infinite carousel effect */}
              {[...projects, ...projects].map((project, index) => (
                <div key={index} className={styles.projectCard}>
                  <div className={styles.projectImage}>
                    <Image
                      src='/placeholder.svg?height=500&width=400'
                      alt={project.title}
                      width={400}
                      height={500}
                    />
                  </div>
                  <div className={styles.projectInfo}>
                    <span className={styles.projectCategory}>
                      {project.category}
                    </span>
                    <h3>{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id='services' className={styles.servicesSection}>
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
        </section>

        {/* CTA Section */}
        <section id='contact' className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <div className={styles.bookingTag}>
              <span></span>
              Booking
            </div>
            <h2>Let&apos;s Work Together</h2>
            <p>
              Fill out our form, schedule a call or reach out via email. <br />
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
              <p>We create solutions that drive your business. Get in touch.</p>
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
            <div>© Copyright 2023 Evident3</div>
            <div className={styles.footerLinks}>
              <Link href='#'>LinkedIn</Link>
              <Link href='#'>Privacy Policy</Link>
              <Link href='#'>Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

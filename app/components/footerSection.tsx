'use client';

import { useState } from 'react';
import styles from '../page.module.scss';
import ContactModal from './contactModal';
import Image from 'next/image';
import PartnerLogos from './partnerLogos';

export default function FooterSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here you would normally send the data to your API
    console.log('Form submitted:', formData);

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitted(false);
      setIsModalOpen(false);
    }, 3000);
  };

  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className='container'>
          <div className={styles.aboveHeaderButton}>Booking</div>

          <h2>Let's Work Together</h2>

          <p className={styles.subtext}>
            Fill out our form, schedule a call, or reach out via email,
            <br />
            and let's see if we're the right fit!
          </p>

          <button
            className={styles.ctaButton}
            onClick={() => setIsModalOpen(true)}
          >
            Start your project
          </button>
        </div>
      </div>

      <div className={styles.bottomSectionWrapper}>
        <div className={styles.bottomSection}>
          <div className={styles.leftContent}>
            <div className={styles.logo}>
              <Image
                src='/evidente-icon.svg'
                alt='Evidente Logo'
                width={80}
                height={80}
              />
            </div>

            <h4>
              We create solutions that drive your business.{' '}
              <span>Get in touch.</span>
            </h4>

            <p className={styles.teamName}>Evidente team</p>

            <button
              className={styles.ctaButton}
              onClick={() => setIsModalOpen(true)}
            >
              Start Your Project
            </button>
          </div>

          <div className={styles.clientLogos}>
            <PartnerLogos />
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.copyright}>
              Copyright © {new Date().getFullYear()} Evidente
            </div>
            <div className={styles.links}>
              <a href='#'>Cookies</a>
              <a href='#'>Privacy Policy</a>
              <a href='#'>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <ContactModal />}
    </footer>
  );
}

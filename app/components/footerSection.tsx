'use client';

import { useState } from 'react';
import styles from '../page.module.scss';

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
    <div className={styles.container}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <button className={styles.bookingButton}>
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8 4L4 8L8 12'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M16 4L20 8L16 12'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M4 8H20'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M12 12V20'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span>Booking</span>
        </button>

        <h1 className={styles.heading}>Let's Work Together</h1>

        <p className={styles.subtext}>
          Fill out our form, schedule a call, or reach out via email,
          <br />
          and let's see if we're the right fit!
        </p>

        <button
          className={styles.projectButton}
          onClick={() => setIsModalOpen(true)}
        >
          Start your project
        </button>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftContent}>
            <div className={styles.logo}>
              <svg
                width='50'
                height='50'
                viewBox='0 0 50 50'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='25' cy='25' r='25' fill='#C6FB50' />
                <path
                  d='M15 20H35M15 25H35M15 30H25'
                  stroke='#232323'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            </div>

            <h2 className={styles.tagline}>
              We create solutions that drive <br />
              your business. <span>Get in touch.</span>
            </h2>

            <p className={styles.teamName}>Evidente team</p>

            <button
              className={styles.startProjectButton}
              onClick={() => setIsModalOpen(true)}
            >
              Start Your Project <span className={styles.arrow}>→</span>
            </button>
          </div>

          <div className={styles.clientLogos}>
            <div className={styles.logoGrid}>
              {[
                'Ratio',
                'IslamicCoin',
                'blocktrade',
                'Kalima',
                'blocktrade',
                'IslamicCoin',
              ].map((name, index) => (
                <div key={index} className={styles.logoItem}>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.copyright}>
            Copyright © {new Date().getFullYear()} Evidente
          </div>
          <div className={styles.links}>
            <a href='#'>Cookies</a>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Terms of Service</a>
          </div>
        </footer>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M18 6L6 18'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M6 6L18 18'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>

            <div className={styles.modalHeader}>
              <h2>Start Your Project</h2>
              <p>Fill out the form below and we'll get back to you shortly.</p>
            </div>

            {isSubmitted ? (
              <div className={styles.successMessage}>
                <h3>Thank you!</h3>
                <p>
                  Your message has been sent successfully. We'll be in touch
                  soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor='name'>Full Name</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder='Your name'
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor='email'>Email Address</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder='your@email.com'
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor='company'>Company (Optional)</label>
                  <input
                    type='text'
                    id='company'
                    name='company'
                    value={formData.company}
                    onChange={handleChange}
                    placeholder='Your company name'
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor='message'>Your Message</label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder='Tell us about your project...'
                    rows={4}
                  />
                </div>

                <button
                  type='submit'
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

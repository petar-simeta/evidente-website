'use client';

import styles from '../page.module.scss';
import Image from 'next/image';
import PartnerLogos from './partnerLogos';
import Link from 'next/link';

export default function FooterSection() {
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

          <button className={styles.ctaButton}>Start your project</button>
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

            <button className={styles.ctaButton}>Start Your Project</button>
          </div>

          <div className={styles.clientLogos}>
            <PartnerLogos />
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.copyright}>
              Copyright © {new Date().getFullYear()} Evidente
            </div>
            <nav className={styles.links}>
              <ul>
                <li>
                  <Link href='/cookies'>Cookies</Link>
                </li>
                <li>
                  <Link href='/privacy-policy'>Privacy Policy</Link>
                </li>
                <li>
                  <Link href='/terms-of-service'>Terms of Service</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div
            className={styles.scrollTopWrapper}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className={styles.scrollTop}></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import styles from '../page.module.scss';
import Image from 'next/image';
import PartnerLogos from './partnerLogos';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  return (
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
          className={`${styles.scrollTopWrapper} ${
            usePathname() !== '/' ? styles.alternateColorScrollTop : ''
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className={styles.scrollTop}></div>
        </div>
      </div>
    </div>
  );
}

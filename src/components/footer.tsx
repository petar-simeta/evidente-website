'use client';

import styles from '../app/[locale]/page.module.scss';
import Image from 'next/image';
import PartnerLogos from './partnerLogos';
import { Link } from '../i18n/navigation';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [showCopiedTooltip, setShowCopiedTooltip] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('support@evidente.hr').then(() => {
      setShowCopiedTooltip(true);
    });
  };

  useEffect(() => {
    if (showCopiedTooltip) {
      const timer = setTimeout(() => setShowCopiedTooltip(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showCopiedTooltip]);

  return (
    <div className={styles.footerFooter}>
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

          <div className={styles.firmInfo}>
            <span>Evidente d.o.o</span>
            <span>Prečko 22</span>
            <span>VAT: HR48530401743</span>
            <span>Zagreb, Croatia</span>
          </div>

          <button className={styles.ctaButton} onClick={handleCopyEmail}>
            support@evidente.hr
            {showCopiedTooltip && (
              <div className={styles.copyTooltip}>Copied to clipboard!</div>
            )}
          </button>
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
                <Link href='/privacy'>Privacy & Cookies</Link>
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

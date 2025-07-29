'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from '../app/[locale]/page.module.scss';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function HeaderMobile() {
  const t = useTranslations('home.menu');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 'about', label: t('links.0') },
    { id: 'work', label: t('links.1') },
    { id: 'services', label: t('links.2') },
    { id: 'footer', label: t('links.3') },
  ];

  const handleLinkClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={styles.headerMobile}>
      <div className={styles.inner}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href='/'>
            <Image
              src='/evidente-logo.svg'
              alt='Evidente Logo'
              width={150}
              height={20}
              priority
            />
          </Link>
        </div>

        {/* Hamburger */}
        {(pathname === '/' || pathname === '/hr') && (
          <button
            className={styles.hamburger}
            onClick={() => setIsOpen(true)}
            aria-label='Open menu'
          >
            <span />
            <span />
            <span />
          </button>
        )}
      </div>

      {/* Full-screen modal */}
      {(pathname === '/' || pathname === '/hr') && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className={styles.modalNav}>
                <ul>
                  {links.map(({ id, label }) => (
                    <li key={id}>
                      <button onClick={() => handleLinkClick(id)}>
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Close area / button */}
              <button
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
                aria-label='Close menu'
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </header>
  );
}

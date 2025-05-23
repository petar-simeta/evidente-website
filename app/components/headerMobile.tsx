'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from '../page.module.scss';

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'footer', label: 'Contact' },
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
          <Image
            src='/evidente-logo.svg'
            alt='Evidente Logo'
            width={150}
            height={20}
            priority
          />
        </div>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(true)}
          aria-label='Open menu'
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Full-screen modal */}
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
                    <button onClick={() => handleLinkClick(id)}>{label}</button>
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
    </header>
  );
}

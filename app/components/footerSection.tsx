'use client';

import styles from '../page.module.scss';
import Footer from './footer';

export default function FooterSection() {
  return (
    <footer className={styles.footer} id='footer'>
      <div className={styles.topSection}>
        <div className='container'>
          <div className={styles.aboveHeaderButton}>Booking</div>

          <h2>Let's Work Together</h2>

          <p className={styles.subtext}>
            Reach out through email—let’s connect and discover if we’re a right
            match!
          </p>

          <a
            href='mailto:email@example.com?subject=I%27m%20interested%20in%20working%20with%20you&body=Dear%20Evidente%2C%20my%20name%20is'
            className={styles.ctaButton}
          >
            Start the Conversation
          </a>
        </div>
      </div>

      <Footer />
    </footer>
  );
}

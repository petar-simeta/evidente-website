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
            Fill out our form, schedule a call, or reach out via email,
            <br />
            and let's see if we're the right fit!
          </p>

          <button className={styles.ctaButton}>Start your project</button>
        </div>
      </div>

      <Footer />
    </footer>
  );
}

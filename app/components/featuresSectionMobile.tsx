'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../page.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturesSectionMobile() {
  return (
    <section className={styles.featuresSectionMobile}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className={styles.sliderWrapper}
      >
        {/* SLIDE #1 */}
        <SwiperSlide className={styles.slideWrapper}>
          <div className={`${styles.featureCard} ${styles.techToolbox}`}>
            <div className={styles.content}>
              <h3>Our Tech Toolbox</h3>
              <p>
                Every technology has its own purpose. We carefully select the
                right tools to create exceptional digital experiences.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE #2 */}
        <SwiperSlide className={styles.slideWrapper}>
          <div className={`${styles.featureCard} ${styles.experienceCard}`}>
            <h3>Experience</h3>
            <p>
              We maintain a relentless pursuit for innovation and excellence.
              Our team has delivered over 50 successful projects across various
              industries, helping clients stand out from the competition.
            </p>
            <h3 className={styles.biggerNumberTitle}>50+</h3>
            <p>Successful projects completed</p>
            <Link href='#contact' className={styles.contactButton}>
              Contact us
            </Link>
          </div>
        </SwiperSlide>

        {/* SLIDE #3 */}
        <SwiperSlide className={styles.slideWrapper}>
          <div className={`${styles.featureCard} ${styles.responsiveCard}`}>
            <h3>Responsive for every device and browser!</h3>
            <p>
              We ensure your website is fully responsive and works perfectly on
              all devices and browsers. From mobile phones to desktops, your
              users will have a seamless experience.
            </p>
            <div className={styles.deviceImage}>
              <Image
                src='/laptop-and-phone.png'
                alt='Responsive design'
                width={600}
                height={900}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

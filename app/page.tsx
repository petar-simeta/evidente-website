'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';
import HeroSection from './components/heroSection';
import PreloaderWrapper from './components/preloaderWrapper';
import Header from './components/header';
import AboutSection from './components/aboutSection';
import ServicesSection from './components/servicesSection';
import WorkSection from './components/workSection';
import FooterSection from './components/footerSection';
import HeaderMobile from './components/headerMobile';
import FeaturesSection from './components/featuresSection';

export default function Home() {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1100);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <PreloaderWrapper>
      <div>
        {isDesktop ? <Header /> : <HeaderMobile />}

        <main>
          <HeroSection />

          <AboutSection />

          <FeaturesSection />

          <WorkSection />

          <ServicesSection />
        </main>

        <FooterSection />
      </div>
    </PreloaderWrapper>
  );
}

'use client';

import { useState, useEffect } from 'react';
import HeroSection from './components/heroSection';
import PreloaderWrapper from './components/preloaderWrapper';
import Header from './components/header';
import AboutSection from './components/aboutSection';
import ServicesSection from './components/servicesSection';
import WorkSection from './components/workSection';
import FooterSection from './components/footerSection';
import HeaderMobile from './components/headerMobile';
import FeaturesSection from './components/featuresSection';
import FeaturesSectionMobile from './components/featuresSectionMobile';
import ServicesSectionMobile from './components/servicesSectionMobile';

export default function Home() {
  const [isDesktop, setIsDesktop] = useState<boolean>(false); // 1100
  const [isLargerDesktop, setIsLargerDesktop] = useState<boolean>(false); // 1300
  const [isSmallerDesktop, setIsSmallerDesktop] = useState<boolean>(false); // 800

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerDesktop(window.innerWidth > 800);
      setIsDesktop(window.innerWidth > 1100);
      setIsLargerDesktop(window.innerWidth > 1300);
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

          {isLargerDesktop ? <FeaturesSection /> : <FeaturesSectionMobile />}

          <WorkSection />

          {isSmallerDesktop ? <ServicesSection /> : <ServicesSectionMobile />}
        </main>

        <FooterSection />
      </div>
    </PreloaderWrapper>
  );
}

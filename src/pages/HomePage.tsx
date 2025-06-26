import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import TrustedBy from '../components/home/TrustedBy';
import Services from '../components/home/Services';
import Industries from '../components/home/Industries';
import ModernFeatures from '../components/home/ModernFeatures';
import Partners from '../components/home/Partners';
import Testimonials from '../components/home/Testimonials';
import StatsSection from '../components/home/StatsSection';
import CTA from '../components/home/CTA';
import FloatingActionButton from '../components/home/FloatingActionButton';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Atlas Defenders | IT & Cybersecurity Services';
  }, []);

  return (
    <>
      <Hero />
      <TrustedBy />
      <StatsSection />
      <Services />
      <ModernFeatures />
      <Industries />
      <Partners />
      <Testimonials />
      <CTA />
      <FloatingActionButton />
    </>
  );
};

export default HomePage;
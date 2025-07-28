import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import PremiumServicesSection from '../components/home/PremiumServicesSection';
import ProfessionalStats from '../components/home/ProfessionalStats';
import Industries from '../components/home/Industries';

import Partners from '../components/home/Partners';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Atlas Defenders | IT & Cybersecurity Services';
  }, []);

  return (
    <>
      <Hero />
      <PremiumServicesSection />
      <Industries />
      <Partners />
      <ProfessionalStats />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;
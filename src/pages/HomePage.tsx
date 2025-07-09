import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import CounterSection from '../components/home/CounterSection';
import ServicesCarousel from '../components/home/ServicesCarousel';
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
      <CounterSection />
      <ServicesCarousel />
      <Industries />
      <Partners />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;
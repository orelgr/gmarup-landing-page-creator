
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import VideoSection from '../components/VideoSection';
import Memorial from '../components/Memorial';
import CallToAction from '../components/CallToAction';
import ContactSection from '../components/ContactSection';
import Testimonials from '../components/Testimonials';
import FaqAccordion from '../components/FaqAccordion';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Set document title for SEO
    document.title = "GmarUp – לימוד גמרא עם AI | הצטרפו כעת";
  }, []);

  return (
    <div className="rtl" lang="he">
      <Hero />
      <Features />
      <VideoSection />
      <Memorial />
      <CallToAction />
      <ContactSection />
      <Testimonials />
      <FaqAccordion />
      <Footer />
    </div>
  );
};

export default Index;

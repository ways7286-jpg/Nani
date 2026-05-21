import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Process } from './sections/Process';
import { WhyChooseMe } from './sections/WhyChooseMe';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth Scroll Navigation Handler
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for sticky navbar
      const navbarOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  // ScrollSpy Active Highlight Implementation
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'process', 'why-me', 'contact'];
    
    // Setting up intersection observer to detect center screen active element
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Target the focus band of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative bg-white selection:bg-slate-900 selection:text-white">
      {/* Dynamic Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleScrollToSection} />

      {/* Structured Sections */}
      <main className="flex-1">
        <Hero onNavigate={handleScrollToSection} />
        <About />
        <Services />
        <Process />
        <WhyChooseMe />
        <Contact />
      </main>

      {/* Global Elements */}
      <Footer onNavigate={handleScrollToSection} />
      <WhatsAppFloating />
    </div>
  );
}

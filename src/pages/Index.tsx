
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ProcessSection from '../components/ProcessSection';
import CloneCodingSection from '../components/CloneCodingSection';
import ContactSection from '../components/ContactSection';
import HandwritingAnimation from '../components/HandwritingAnimation';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling behavior
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="relative">
      <HandwritingAnimation />
      <Navigation />
      <main>
        <HeroSection />
        <IntroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ProcessSection />
        <CloneCodingSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;

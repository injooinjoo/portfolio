import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  useEffect(() => {
    // Scroll direction detection
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        if (currentScrollY < lastScrollY.current) {
          // Scrolling up
          setIsVisible(true);
        } else {
          // Scrolling down
          setIsVisible(false);
        }
      } else {
        // At top
        setIsVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    // Background color detection
    const handleBackgroundChange = () => {
      const scrollY = window.scrollY;
      const aboutSection = document.getElementById('about');
      
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop;
        const aboutHeight = aboutSection.offsetHeight;
        
        // Check if we're in the about section (which has dark background)
        if (scrollY >= aboutTop && scrollY < aboutTop + aboutHeight) {
          setIsDarkBackground(true);
        } else {
          setIsDarkBackground(false);
        }
      }
    };

    // Combined scroll handler
    const handleScrollCombined = () => {
      handleScroll();
      handleBackgroundChange();
    };

    window.addEventListener('scroll', handleScrollCombined, { passive: true });

    // Create intersection observers for each section
    const observers = navItems.map(item => {
      const element = document.getElementById(item.id);
      if (element) {
        return new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setActiveSection(item.id);
              }
            });
          },
          { threshold: 0.3 }
        );
      }
      return null;
    });

    // Observe all sections
    navItems.forEach((item, index) => {
      const element = document.getElementById(item.id);
      if (element && observers[index]) {
        observers[index]?.observe(element);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScrollCombined);
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Hamburger Menu Button - Long horizontal design */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-0 left-0 z-50 w-80 px-6 py-3 shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-end rounded-br-[60px] ${
          isDarkBackground 
            ? 'bg-white text-black' 
            : 'bg-black text-white'
        }`}
      >
        <div className="flex items-center">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </div>
      </button>

      {/* Dropdown Navigation */}
      <nav className={`fixed top-0 left-0 w-80 h-96 z-40 transform transition-all duration-300 rounded-br-[60px] ${
        isDarkBackground 
          ? 'bg-black' 
          : 'bg-white'
      } ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="pt-20 px-6">
          <ul className="space-y-0">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`block px-2 py-1 transition-all duration-300 ${
                    activeSection === item.id 
                      ? isDarkBackground ? 'text-white' : 'text-black'
                      : isDarkBackground 
                        ? 'text-gray-400 hover:text-white' 
                        : 'text-gray-600 hover:text-black'
                  }`}
                >
                  <span className="text-lg font-medium">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

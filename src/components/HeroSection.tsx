
import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const splitText = (element: HTMLElement) => {
      const text = element.textContent || '';
      element.innerHTML = '';
      
      text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.transition = `all 0.6s ease ${index * 0.05}s`;
        element.appendChild(span);
      });

      // Trigger animation
      setTimeout(() => {
        element.querySelectorAll('span').forEach((span) => {
          span.style.opacity = '1';
          span.style.transform = 'translateY(0)';
        });
      }, 500);
    };

    if (nameRef.current) {
      splitText(nameRef.current);
    }

    // Animate intro text
    if (introRef.current) {
      setTimeout(() => {
        introRef.current!.style.opacity = '1';
        introRef.current!.style.transform = 'translateY(0)';
      }, 1200);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
      <div className="text-center z-10">
        <p 
          ref={introRef}
          className="text-lg md:text-xl text-gray-600 mb-8 opacity-0 transform translate-y-4 transition-all duration-700"
        >
          Hi! My name is
        </p>
        
        <h1 
          ref={nameRef}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-black mb-12"
        >
          Jyan Kim
        </h1>

        {/* Character Illustration */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full border-2 border-black flex items-center justify-center">
              <svg 
                width="80" 
                height="80" 
                viewBox="0 0 100 100" 
                className="animate-pulse"
              >
                {/* Simple character illustration */}
                <circle cx="50" cy="35" r="15" fill="#333" />
                <circle cx="45" cy="32" r="2" fill="white" />
                <circle cx="55" cy="32" r="2" fill="white" />
                <path d="M45 40 Q50 45 55 40" stroke="#333" strokeWidth="2" fill="none" />
                <rect x="40" y="50" width="20" height="30" rx="5" fill="#666" />
                <rect x="35" y="55" width="30" height="15" rx="3" fill="#999" opacity="0.7" />
                <circle cx="40" cy="85" r="5" fill="#333" />
                <circle cx="60" cy="85" r="5" fill="#333" />
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute top-8 right-8">
          <a 
            href="#contact" 
            className="text-sm text-gray-600 hover:text-black transition-colors duration-300"
          >
            résumé
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

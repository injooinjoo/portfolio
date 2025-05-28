import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background color transition - 적당한 타이밍으로 조정
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "20% top",
        end: "60% top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Background transition from white to black
          if (backgroundRef.current) {
            const opacity = Math.min(1, progress * 1.8);
            backgroundRef.current.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
          }
          
          // Text color transition from black to white
          if (contentRef.current) {
            gsap.to(contentRef.current, {
              color: progress > 0.4 ? 'white' : 'black',
              duration: 0.3
            });
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden">
      {/* Background overlay */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-white transition-colors duration-300"
      ></div>
      
      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 h-screen flex flex-col items-center justify-center px-8"
        style={{ transform: 'translateY(-200px)' }}
      >
        {/* My Projects Text */}
        <div className="text-center mb-4 relative">
          <h2 
            className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-4"
            style={{ fontFamily: 'Yoon350, Times New Roman MT Condensed, Times, serif' }}
          >
            My
          </h2>
          <h2 
            className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight"
            style={{ fontFamily: 'Yoon350, Times New Roman MT Condensed, Times, serif' }}
          >
            Projects
          </h2>
          
          {/* Project Character - positioned to overlap with text */}
          <div className="absolute bottom-[-15.125rem] left-1/2 transform -translate-x-1/2">
            <img 
              src="/project.png"
              alt="Project Character" 
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-lg"
              loading="eager"
              decoding="async"
              onError={(e) => {
                console.error('Project image failed to load:', e);
                console.error('Attempted path:', e.currentTarget.src);
              }}
              onLoad={() => console.log('project.png loaded successfully')}
            />
          </div>
        </div>
      </div>

      <style>{`
        @font-face {
          font-family: 'Yoon350';
          src: url('/fonts/yoon350.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Times New Roman MT Condensed';
          src: url('/fonts/Times New Roman MT Condensed Regular.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;

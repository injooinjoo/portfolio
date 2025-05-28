import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const aboutTitleRef = useRef<HTMLDivElement>(null);
  const meTitleRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const whoAmIRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scroll setup - 2개 섹션만 (About + Me)
      const horizontalSections = horizontalRef.current?.querySelectorAll('.horizontal-section');
      
      if (horizontalSections && horizontalSections.length > 0) {
        // 2개 섹션만 사용
        const totalWidth = 2 * window.innerWidth;
        
        gsap.set(horizontalRef.current, {
          width: totalWidth
        });

        // Horizontal scroll animation
        gsap.to(horizontalRef.current, {
          x: -(totalWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${totalWidth - window.innerWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          }
        });

        // About title moves with the same speed as horizontal scroll
        gsap.to(aboutTitleRef.current, {
          x: -(totalWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${totalWidth - window.innerWidth}`,
            scrub: 1,
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative h-screen overflow-hidden">
      {/* About Title - Large and centered like the image */}
      <div 
        ref={aboutTitleRef}
        className="absolute inset-0 flex items-center justify-center bg-black text-white z-10 pointer-events-none"
      >
        <h2 
          className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold text-center leading-none"
          style={{ fontFamily: 'Times New Roman MT Condensed, Times, serif' }}
        >
          About
        </h2>
      </div>

      {/* Me Title - Absolute within section */}
      <div 
        ref={meTitleRef}
        className="absolute inset-0 flex items-center justify-center bg-white text-black z-10 pointer-events-none opacity-0"
        style={{ display: 'none' }}
      >
      </div>

      {/* Horizontal scrolling content */}
      <div ref={horizontalRef} className="flex h-full">
        {/* Section 1: About transition */}
        <div className="horizontal-section w-screen h-full bg-black"></div>

        {/* Section 2: Me transition - 이미지만 */}
        <div className="horizontal-section w-screen h-full bg-white flex items-center justify-center">
          <div className="text-center">
            <img 
              src={`${import.meta.env.BASE_URL}me.png`}
              alt="Me Character" 
              className="w-96 h-96 md:w-[480px] md:h-[480px] object-contain drop-shadow-lg"
              loading="eager"
              decoding="async"
              onError={(e) => {
                console.error('Image failed to load:', e);
                e.currentTarget.style.display = 'none';
              }}
              onLoad={() => console.log('me.png loaded successfully')}
            />
          </div>
        </div>
      </div>

      <style>{`
        @font-face {
          font-family: 'CustomFont';
          src: url('/fonts/ffc278d3825e583bc658db3933a55996.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        
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

export default AboutSection;

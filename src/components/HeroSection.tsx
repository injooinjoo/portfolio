import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import injooCharacterImg from '/injooCharacter.png';

gsap.registerPlugin(ScrollTrigger);

// Google Fonts 로드
const loadGoogleFonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

// 컴포넌트 로드 시 폰트 로드
if (typeof window !== 'undefined') {
  loadGoogleFonts();
}

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const introTextRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const handwritingRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set([introTextRef.current, nameRef.current, characterRef.current, scrollIndicatorRef.current], {
        opacity: 0,
        y: 50
      });

      // Set intro text to start from left
      gsap.set(introTextRef.current, {
        opacity: 0,
        x: -100
      });

      // Create timeline for entrance animations
      const tl = gsap.timeline({ delay: 0.5 });

      // Animate intro text from left with fade
      tl.to(introTextRef.current, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out"
      })
      // Animate name with stagger effect
      .to(nameRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out"
      }, "-=0.3")
      // Animate character
      .to(characterRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.6")
      // Animate scroll indicator
      .to(scrollIndicatorRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.3");

      // Handwriting path animation on page load
      if (handwritingRef.current) {
        const path = handwritingRef.current;
        const pathLength = path.getTotalLength();
        
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength
        });

        // Add handwriting drawing animation to timeline
        tl.to(path, {
          strokeDashoffset: 0,
          duration: 2.5,
          ease: "power2.out"
        }, "-=0.8");
      }

      // Scroll indicator bounce
      gsap.to(scrollIndicatorRef.current?.querySelector('.scroll-dot'), {
        y: 8,
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

      // Parallax effect on scroll (without character rotation)
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(nameRef.current, {
            y: progress * -100,
            opacity: 1 - progress * 0.5,
            duration: 0.3
          });
          gsap.to(characterRef.current, {
            y: progress * -150,
            duration: 0.3
          });
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden"
    >


      {/* Navigation hint */}
      <div className="absolute top-8 right-8 z-10">
        <a 
          href="#contact" 
          className="text-lg text-gray-600 hover:text-black transition-colors duration-300 font-medium"
          style={{ fontFamily: 'CustomFont, Yoon350, Times New Roman MT Condensed, Times, serif' }}
        >
          résumé
        </a>
      </div>

      {/* Main content */}
      <div className="text-center z-10 max-w-6xl mx-auto px-8">
        <p 
          ref={introTextRef}
          className="text-5xl md:text-6xl lg:text-7xl text-gray-600 mb-12 font-light tracking-wide text-center w-full"
          style={{ fontFamily: 'Times New Roman MT Condensed, Times, serif', marginTop: '-558px' }}
        >
          Hi! My name is
        </p>
        
        <h1 
          ref={nameRef}
          className="text-6xl md:text-[8rem] lg:text-[11rem] xl:text-[14rem] font-black text-black mb-16 tracking-wide whitespace-nowrap"
          style={{ fontFamily: 'CustomFont, Yoon350, Times New Roman MT Condensed, Times, serif', letterSpacing: '0.1em' }}
        >
          InJoo Kim
        </h1>

        {/* Character Image */}
        <div ref={characterRef} className="absolute left-1/2 transform -translate-x-1/2 flex justify-center" style={{ top: 'calc(50% + 20px)' }}>
          <div className="relative">
            <img 
              src={`${import.meta.env.BASE_URL}injooCharacter.png`}
              alt="InJoo Character" 
              className="w-auto h-10 md:h-12 lg:h-16 object-contain relative z-10"
              loading="eager"
              decoding="async"
              onError={(e) => {
                console.error('Image failed to load:', e);
                e.currentTarget.style.display = 'none';
              }}
              onLoad={() => console.log('Image loaded successfully')}
              style={{ 
                imageRendering: 'auto',
                maxWidth: '100%',
                height: '400px',
                width: 'auto'
              }}
            />
            
            {/* Handwriting Circle Animation */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 500 500"
              style={{ transform: 'scale(3)' }}
            >
              <path
                ref={handwritingRef}
                d="M 350 50 Q 420 80, 460 150 Q 480 220, 460 290 Q 440 360, 380 400 Q 320 440, 250 430 Q 180 420, 120 380 Q 60 340, 40 270 Q 20 200, 40 130 Q 60 60, 130 40 Q 200 20, 270 40 Q 340 60, 380 30"
                stroke="#333"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ 
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                  opacity: 0.7
                }}
              />
            </svg>
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
        
        .character-svg {
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
      `}</style>
    </section>
  );
};

export default HeroSection;

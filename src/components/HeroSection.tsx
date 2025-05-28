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
  const whoAmIRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set intro text words to start from left
      const introWords = introTextRef.current?.querySelectorAll('.intro-word');
      if (introWords) {
        gsap.set(introWords, {
          opacity: 0,
          x: -50
        });
      }

      // Initial setup - hide other elements
      gsap.set([nameRef.current, characterRef.current, scrollIndicatorRef.current], {
        opacity: 0,
        y: 50
      });

      // Hide Who am I section initially
      gsap.set(whoAmIRef.current, {
        opacity: 0,
        y: 100
      });

      // Create timeline for entrance animations
      const tl = gsap.timeline({ delay: 0.5 });

      // Animate intro text words from left with stagger
      if (introWords) {
        tl.to(introWords, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15
        });
      }
      
      // Animate name with stagger effect
      tl.to(nameRef.current, {
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

      // Scroll indicator bounce
      gsap.to(scrollIndicatorRef.current?.querySelector('.scroll-dot'), {
        y: 8,
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

      // Who am I section scroll trigger
      ScrollTrigger.create({
        trigger: whoAmIRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(whoAmIRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          });
        }
      });

      // Parallax effect on scroll
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
    <>
      {/* First Section - Hero */}
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
            style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            résumé
          </a>
        </div>

        {/* Scroll to Top Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Scroll to top"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M18 15l-6-6-6 6"/>
            </svg>
          </button>
        </div>

        {/* Main content */}
        <div className="text-center z-20 max-w-6xl mx-auto px-8">
          <p 
            ref={introTextRef}
            className="text-5xl md:text-6xl lg:text-7xl text-gray-600 mb-12 font-light tracking-wide"
            style={{ fontFamily: 'Times New Roman MT Condensed, Times, serif' }}
          >
            <span className="intro-word">Hi!</span>{' '}
            <span className="intro-word">My</span>{' '}
            <span className="intro-word">name</span>{' '}
            <span className="intro-word">is</span>
          </p>
          
          <h1 
            ref={nameRef}
            className="text-6xl md:text-[8rem] lg:text-[11rem] xl:text-[14rem] font-black text-black mb-16 tracking-wide whitespace-nowrap"
            style={{ fontFamily: 'CustomFont, Yoon350, Times New Roman MT Condensed, Times, serif', letterSpacing: '0.1em' }}
          >
            InJoo Kim
          </h1>

          {/* Character Image */}
          <div ref={characterRef} className="flex justify-center mb-16">
            <div className="relative">
              <img 
                src={`${import.meta.env.BASE_URL}injooCharacter.png`}
                alt="InJoo Character" 
                className="w-auto h-64 md:h-80 lg:h-96 object-contain relative z-10"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  console.error('Image failed to load:', e);
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={() => console.log('Image loaded successfully')}
                style={{ 
                  imageRendering: 'auto',
                  maxWidth: '100%'
                }}
              />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div ref={scrollIndicatorRef} className="flex flex-col items-center">
            <div className="scroll-dot w-2 h-2 bg-black rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Second Section - Who am I */}
      <section 
        ref={whoAmIRef}
        className="relative min-h-screen bg-gradient-to-br from-gray-100 to-white flex items-center justify-center overflow-hidden"
      >
        {/* Who am I content */}
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start z-20">
          {/* Left side - Title */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl md:text-4xl font-bold">
              Who am I
            </h3>
          </div>
          
          {/* Right side - Content */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              I am a <strong>UI/UX Designer</strong>, InJoo Kim.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              I approach all challenges with the courage and determination of a{' '}
              <span className="inline-block px-3 py-1 border border-black rounded-full text-sm">
                Lion's heart
              </span>
              , dedicated to leading with{' '}
              <em>communication, flexibility, and unwavering excellence.</em>
            </p>
            
            <div className="text-gray-600 space-y-2 text-base md:text-lg mt-8">
              <p>저는 도전을 두려워하지 않는 UI/UX 디자이너 김인주입니다.</p>
              <p>제 이름과 유사한 단어 'Lion', 즉 사자처럼 당당하고 용감한 태도로 새로운 도전에 임하며</p>
              <p>소통 능력과 유연함으로 성공적인 프로젝트를 이끌어 나가는 디자이너가 되겠습니다.</p>
            </div>

            <button className="mt-8 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300 text-base">
              Read more
            </button>
          </div>
        </div>
      </section>

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
    </>
  );
};

export default HeroSection;

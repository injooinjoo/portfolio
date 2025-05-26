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
      // Horizontal scroll setup
      const horizontalSections = horizontalRef.current?.querySelectorAll('.horizontal-section');
      
      if (horizontalSections && horizontalSections.length > 0) {
        const totalWidth = horizontalSections.length * window.innerWidth;
        
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

        // About title fade out
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "25% top",
          scrub: 1,
          onUpdate: (self) => {
            gsap.to(aboutTitleRef.current, {
              opacity: 1 - self.progress,
              duration: 0.3
            });
          }
        });

        // Me title fade in
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "25% top",
          end: "50% top",
          scrub: 1,
          onUpdate: (self) => {
            gsap.to(meTitleRef.current, {
              opacity: self.progress,
              duration: 0.3
            });
          }
        });

        // Who am I content animation
        ScrollTrigger.create({
          trigger: whoAmIRef.current,
          start: "left 80%",
          end: "left 20%",
          horizontal: true,
          scrub: 1,
          onUpdate: (self) => {
            const elements = whoAmIRef.current?.querySelectorAll('.animate-in');
            elements?.forEach((el, index) => {
              gsap.to(el, {
                opacity: self.progress,
                y: (1 - self.progress) * 50,
                duration: 0.3,
                delay: index * 0.1
              });
            });
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative h-screen overflow-hidden">
      {/* About Title - Absolute within section */}
      <div 
        ref={aboutTitleRef}
        className="absolute inset-0 flex items-center justify-center bg-black text-white z-10 pointer-events-none"
      >
        <h2 className="text-8xl md:text-9xl font-bold">About</h2>
      </div>

      {/* Me Title - Absolute within section */}
      <div 
        ref={meTitleRef}
        className="absolute inset-0 flex items-center justify-end bg-white text-black z-10 pointer-events-none opacity-0"
        style={{ paddingRight: '10%' }}
      >
        <div className="text-right">
          <h2 className="text-8xl md:text-9xl font-bold">Me</h2>
          <div className="mt-4">
            <svg width="100" height="100" viewBox="0 0 100 100" className="inline-block">
              <rect x="20" y="40" width="60" height="50" rx="10" fill="currentColor" />
              <circle cx="50" cy="25" r="15" fill="currentColor" />
              <circle cx="45" cy="22" r="2" fill="white" />
              <circle cx="55" cy="22" r="2" fill="white" />
              <path d="M45 28 Q50 32 55 28" stroke="white" strokeWidth="1" fill="none" />
              <rect x="25" y="50" width="50" height="25" rx="2" fill="white" opacity="0.8" />
              <text x="35" y="60" fill="currentColor" fontSize="8">Who</text>
              <text x="35" y="70" fill="currentColor" fontSize="8">am I ?</text>
            </svg>
          </div>
        </div>
      </div>

      {/* Horizontal scrolling content */}
      <div ref={horizontalRef} className="flex h-full">
        {/* Section 1: About transition */}
        <div className="horizontal-section w-screen h-full bg-black"></div>

        {/* Section 2: Me transition */}
        <div className="horizontal-section w-screen h-full bg-white"></div>

        {/* Section 3: Who am I content */}
        <div 
          ref={whoAmIRef}
          className="horizontal-section w-screen h-full bg-white flex items-center justify-center px-16"
        >
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Left side - Who am I */}
            <div className="space-y-8">
              <h3 className="animate-in text-3xl font-bold border-b-2 border-black pb-2 inline-block opacity-0">
                Who am I
              </h3>
              
              <div className="space-y-6">
                <p className="animate-in text-lg leading-relaxed opacity-0">
                  I am a <strong>UI/UX Designer</strong>, Ryan Kim.
                </p>
                <p className="animate-in text-lg leading-relaxed opacity-0">
                  I approach all challenges with the courage and determination of a{' '}
                  <span className="inline-block px-3 py-1 border border-black rounded-full">
                    Lion's heart
                  </span>
                  , dedicated to leading with{' '}
                  <em>communication, flexibility, and unwavering excellence.</em>
                </p>
                
                <div className="animate-in text-gray-600 space-y-2 opacity-0">
                  <p>저는 도전을 두려워하지 않는 UI/UX 디자이너 김자연입니다.</p>
                  <p>제 이름과 유사한 단어 'Lion', 즉 사자처럼 당당하고 용감한 태도로 새로운 도전에 임하며</p>
                  <p>소통 능력과 유연함으로 성공적인 프로젝트를 이끌어 나가는 디자이너가 되겠습니다.</p>
                </div>

                <button className="animate-in mt-8 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300 opacity-0">
                  Read more
                </button>
              </div>
            </div>

            {/* Right side - Character with arrow */}
            <div className="animate-in relative opacity-0">
              <div className="text-center">
                {/* Arrow pointing to character */}
                <div className="mb-8">
                  <svg width="200" height="100" viewBox="0 0 200 100" className="mx-auto">
                    <path 
                      d="M20 50 Q100 20 180 50" 
                      stroke="black" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeDasharray="5,5"
                    />
                    <polygon points="175,45 185,50 175,55" fill="black" />
                  </svg>
                </div>

                {/* Character illustration */}
                <div className="w-48 h-48 mx-auto bg-gray-100 rounded-full border-4 border-black flex items-center justify-center shadow-xl">
                  <svg width="150" height="150" viewBox="0 0 150 150">
                    {/* Character body */}
                    <ellipse cx="75" cy="110" rx="30" ry="20" fill="#333" />
                    
                    {/* Character head */}
                    <circle cx="75" cy="60" r="25" fill="#333" />
                    
                    {/* Hair */}
                    <path d="M50 45 Q55 30 75 35 Q95 30 100 45 Q95 25 75 30 Q55 25 50 45" fill="#000" />
                    
                    {/* Eyes */}
                    <circle cx="65" cy="55" r="4" fill="white" />
                    <circle cx="85" cy="55" r="4" fill="white" />
                    <circle cx="65" cy="55" r="2" fill="black" />
                    <circle cx="85" cy="55" r="2" fill="black" />
                    
                    {/* Smile */}
                    <path d="M65 68 Q75 75 85 68" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                    
                    {/* Arms */}
                    <ellipse cx="50" cy="85" rx="8" ry="15" fill="#333" />
                    <ellipse cx="100" cy="85" rx="8" ry="15" fill="#333" />
                    
                    {/* Hands */}
                    <circle cx="50" cy="75" r="6" fill="#333" />
                    <circle cx="100" cy="75" r="6" fill="#333" />
                  </svg>
                </div>

                <p className="mt-4 text-sm text-gray-500 italic">
                  "Lion-hearted UI/UX Designer"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Skills preview */}
        <div className="horizontal-section w-screen h-full bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-8">Skills & Strengths</h3>
            <p className="text-xl text-gray-600 mb-8">Scroll down to explore more</p>
            <div className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center mx-auto">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3L10 17M3 10L10 17L17 10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

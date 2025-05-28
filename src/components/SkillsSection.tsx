import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const strengthsRef = useRef<HTMLDivElement>(null);

  const skills = [
    'Photoshop',
    'Illustrator', 
    'Figma',
    'HTML',
    'CSS',
    'JavaScript'
  ];

  const strengths = [
    'Integrity',
    'Developing',
    'Altruistic',
    'Cooperation'
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([profileRef.current, skillsRef.current, strengthsRef.current], {
        opacity: 0,
        y: 50
      });

      // Profile section animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(profileRef.current, {
            opacity: self.progress,
            y: (1 - self.progress) * 50,
            duration: 0.3
          });
        }
      });

      // Skills animation
      ScrollTrigger.create({
        trigger: skillsRef.current,
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(skillsRef.current, {
            opacity: self.progress,
            y: (1 - self.progress) * 50,
            duration: 0.3
          });

          // Animate individual skill items
          const skillItems = skillsRef.current?.querySelectorAll('.skill-item');
          skillItems?.forEach((item, index) => {
            gsap.to(item, {
              opacity: self.progress,
              x: (1 - self.progress) * -30,
              duration: 0.3,
              delay: index * 0.1
            });
          });
        }
      });

      // Strengths animation
      ScrollTrigger.create({
        trigger: strengthsRef.current,
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(strengthsRef.current, {
            opacity: self.progress,
            y: (1 - self.progress) * 50,
            duration: 0.3
          });

          // Animate individual strength items
          const strengthItems = strengthsRef.current?.querySelectorAll('.strength-item');
          strengthItems?.forEach((item, index) => {
            gsap.to(item, {
              opacity: self.progress,
              x: (1 - self.progress) * 30,
              duration: 0.3,
              delay: index * 0.1
            });
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="min-h-screen bg-white py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Profile Section */}
        <div ref={profileRef} className="text-center mb-20">
          <div className="w-64 h-96 mx-auto mb-8 bg-gradient-to-br from-gray-200 to-gray-400 overflow-hidden shadow-2xl rounded-tl-3xl">
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Profile" 
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  console.error('Profile image failed to load:', e);
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={() => console.log('profile.jpg loaded successfully')}
              />
            </div>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 italic leading-tight"
            style={{ fontFamily: 'Times New Roman MT Condensed, Times, serif' }}
          >
            "Ryan, the Lion-Hearted Person."
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4 text-lg mb-8">
            <p className="font-medium">I confront every challenge</p>
            <p className="font-medium">with bold courage and responsible leadership.</p>
          </div>
          
          <p className="mt-8 text-gray-600 max-w-4xl mx-auto leading-relaxed">
            제 이름인 'Ryan'이 사자를 뜻하는 단어 'Lion'과 닮아있듯 저 역시 용감한 사자처럼 도전을
            두려워하지 않으며 자신감과 공익하는 노력으로 목표를 달성해 나가는 UI/UX 디자이너가 되겠습니다.
          </p>
        </div>

        {/* Skills and Strengths */}
        <div className="grid md:grid-cols-2 gap-20 items-start relative">
          {/* Skills */}
          <div ref={skillsRef} className="space-y-8 ml-[326px]">
            <div className="relative inline-block">
              <h3 
                className="text-3xl font-bold pb-3"
                style={{ fontFamily: 'Times New Roman MT Condensed, Times, serif' }}
              >
                Skills
              </h3>
              {/* SVG 밑줄 */}
              <svg className="absolute bottom-0 left-0 w-full h-1" viewBox="0 0 100 4">
                <rect x="0" y="0" width="100" height="4" fill="black"/>
              </svg>
            </div>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item flex items-center space-x-3 opacity-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" className="text-black flex-shrink-0">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" fill="currentColor"/>
                  </svg>
                  <span 
                    className="text-lg"
                    style={{ fontFamily: 'Yoon350, sans-serif' }}
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-black transform -translate-x-1/2"></div>

          {/* Strengths */}
          <div ref={strengthsRef} className="space-y-8 mr-[-50px]">
            <div className="relative inline-block">
              <h3 
                className="text-3xl font-bold px-8 py-3"
                style={{ fontFamily: 'Times New Roman MT Condensed, Times, serif' }}
              >
                Strengths
              </h3>
              {/* SVG 동그라미 테두리 */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 60">
                <ellipse cx="100" cy="30" rx="95" ry="25" fill="none" stroke="black" strokeWidth="2"/>
              </svg>
            </div>
            <div className="space-y-4">
              {strengths.map((strength, index) => (
                <div key={index} className="strength-item flex items-center space-x-3 opacity-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" className="text-black flex-shrink-0">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" fill="currentColor"/>
                  </svg>
                  <span 
                    className="text-lg"
                    style={{ fontFamily: 'Yoon350, sans-serif' }}
                  >
                    {strength}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Read more button */}
        <div className="mt-16 text-center">
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300 font-medium">
            Read more
          </button>
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4">
            <div className="w-16 h-px bg-black"></div>
            <svg width="40" height="40" viewBox="0 0 40 40" className="text-black">
              <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="20" cy="20" r="3" fill="currentColor" />
            </svg>
            <div className="w-16 h-px bg-black"></div>
          </div>
        </div>
      </div>

      <style>{`
        @font-face {
          font-family: 'Times New Roman MT Condensed';
          src: url('/fonts/Times New Roman MT Condensed Regular.otf') format('opentype');
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
      `}</style>
    </section>
  );
};

export default SkillsSection;

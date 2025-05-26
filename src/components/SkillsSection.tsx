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
        <div className="absolute top-32 right-20 w-64 h-64 bg-black rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-32 h-32 bg-black rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Profile Section */}
        <div ref={profileRef} className="text-center mb-20">
          <div className="w-40 h-40 mx-auto mb-8 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full overflow-hidden shadow-2xl border-4 border-black">
            <div className="w-full h-full flex items-center justify-center">
              <svg width="100" height="100" viewBox="0 0 100 100">
                {/* Character silhouette */}
                <circle cx="50" cy="35" r="18" fill="#333" />
                <ellipse cx="50" cy="70" rx="20" ry="25" fill="#333" />
                
                {/* Hair */}
                <path d="M32 25 Q35 15 50 20 Q65 15 68 25 Q65 10 50 15 Q35 10 32 25" fill="#000" />
                
                {/* Eyes */}
                <circle cx="43" cy="32" r="2" fill="white" />
                <circle cx="57" cy="32" r="2" fill="white" />
                
                {/* Smile */}
                <path d="M43 40 Q50 45 57 40" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic leading-tight">
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
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Skills */}
          <div ref={skillsRef} className="space-y-8">
            <h3 className="text-3xl font-bold border-b-4 border-black pb-3 inline-block">
              Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item flex items-center space-x-4 opacity-0">
                  <div className="w-3 h-3 bg-black rounded-full flex-shrink-0"></div>
                  <span className="text-xl font-medium">{skill}</span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <div ref={strengthsRef} className="space-y-8">
            <h3 className="text-3xl font-bold border-2 border-black rounded-full px-8 py-3 inline-block">
              Strengths
            </h3>
            <div className="space-y-6">
              {strengths.map((strength, index) => (
                <div key={index} className="strength-item flex items-center space-x-4 opacity-0">
                  <div className="w-3 h-3 bg-black rounded-full flex-shrink-0"></div>
                  <span className="text-xl font-medium">{strength}</span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>
              ))}
            </div>
          </div>
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
    </section>
  );
};

export default SkillsSection;

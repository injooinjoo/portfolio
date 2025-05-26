import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundTextRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background text parallax
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(backgroundTextRef.current, {
            y: self.progress * -100,
            duration: 0.3
          });
        }
      });

      // Character animation
      ScrollTrigger.create({
        trigger: characterRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(characterRef.current, {
            opacity: self.progress,
            y: (1 - self.progress) * 100,
            rotation: self.progress * 10,
            duration: 0.3
          });
        }
      });

      // Content animation
      ScrollTrigger.create({
        trigger: contentRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
        onUpdate: (self) => {
          const elements = contentRef.current?.querySelectorAll('.animate-in');
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

      // Projects animation
      ScrollTrigger.create({
        trigger: projectsRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
        onUpdate: (self) => {
          const projects = projectsRef.current?.querySelectorAll('.project-card');
          projects?.forEach((project, index) => {
            gsap.to(project, {
              opacity: self.progress,
              y: (1 - self.progress) * 80,
              rotation: (1 - self.progress) * (index % 2 === 0 ? -5 : 5),
              duration: 0.3,
              delay: index * 0.2
            });
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="min-h-screen bg-gray-100 relative overflow-hidden py-20">
      {/* Large Background Text */}
      <div ref={backgroundTextRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-gray-200 select-none leading-none text-center">
          My<br />Projects
        </h2>
      </div>

      {/* Character Illustration */}
      <div ref={characterRef} className="absolute bottom-20 right-20 hidden md:block opacity-0">
        <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-lg">
          <rect x="30" y="50" width="60" height="60" rx="8" fill="#333" />
          <circle cx="60" cy="30" r="15" fill="#333" />
          <circle cx="55" cy="27" r="2" fill="white" />
          <circle cx="65" cy="27" r="2" fill="white" />
          <path d="M55 33 Q60 37 65 33" stroke="white" strokeWidth="1.5" fill="none" />
          
          {/* Laptop */}
          <rect x="35" y="60" width="50" height="35" rx="3" fill="white" opacity="0.9" />
          <rect x="37" y="62" width="46" height="25" rx="2" fill="#000" />
          
          {/* Screen content */}
          <rect x="40" y="65" width="10" height="1" fill="#00ff00" />
          <rect x="40" y="68" width="15" height="1" fill="#00ff00" />
          <rect x="40" y="71" width="12" height="1" fill="#00ff00" />
          <rect x="40" y="74" width="18" height="1" fill="#00ff00" />
          <rect x="40" y="77" width="8" height="1" fill="#00ff00" />
          <rect x="40" y="80" width="14" height="1" fill="#00ff00" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left side - UI/UX Design Section */}
          <div ref={contentRef} className="space-y-8">
            <h3 className="animate-in text-5xl md:text-6xl font-bold leading-tight opacity-0">
              UIUX<br />Design
            </h3>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="animate-in opacity-0">
                The App & Web Redesign Team project communicates with team 
                members, gathers opinions, reviews and feeds back each other's 
                materials, and completes the design to satisfy users.
              </p>
              
              <p className="animate-in opacity-0">
                In the personal project, like the team project, I selected apps and web 
                that showed improvements well, then I thought about how to increase 
                usability, analyzed, and organized them to design them to meet the 
                needs of users.
              </p>
              
              <p className="animate-in text-gray-600 opacity-0">
                개인 프로젝트와 팀 프로젝트 모두 사용자들의 요구와 특성을 반영하여 재설계하였습니다.
                <br />
                다국어 웹 기능을 설계해보고 디자인시스템과 더 사용하기 편한 페이지, 컨텐츠, 톤 앤 매너를 구상해보았습니다.
              </p>

              <button className="animate-in bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 font-semibold opacity-0 hover:scale-105">
                Read more
              </button>
            </div>
          </div>

          {/* Right side - Project Showcase */}
          <div ref={projectsRef} className="space-y-8">
            {/* Project 1 - Ediya Members */}
            <div className="project-card bg-blue-600 rounded-2xl p-8 text-white transform opacity-0 hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-2xl font-bold">Ediya Members</h4>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="w-full h-40 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-16 h-24 bg-white/40 rounded-lg mx-auto mb-2"></div>
                  <span className="text-sm font-medium">Mobile App Interface</span>
                </div>
              </div>
              
              <p className="text-sm opacity-90">
                Coffee shop membership app redesign focusing on user experience and loyalty program optimization.
              </p>
            </div>

            {/* Project 2 - Estée Lauder */}
            <div className="project-card bg-black rounded-2xl p-8 text-white transform opacity-0 hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-2xl font-bold">Estée Lauder</h4>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                </div>
              </div>
              
              <div className="w-full h-40 bg-white/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-24 h-16 bg-white/20 rounded-lg mx-auto mb-2"></div>
                  <span className="text-sm font-medium">Website Redesign</span>
                </div>
              </div>
              
              <p className="text-sm opacity-90">
                Luxury cosmetics brand website redesign with focus on premium user experience and product showcase.
              </p>
            </div>

            {/* Additional project preview */}
            <div className="project-card bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white transform opacity-0 hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-2xl font-bold">More Projects</h4>
                <div className="text-2xl">→</div>
              </div>
              
              <div className="w-full h-40 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                <div className="text-center">
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="w-8 h-8 bg-white/40 rounded"></div>
                    <div className="w-8 h-8 bg-white/40 rounded"></div>
                    <div className="w-8 h-8 bg-white/40 rounded"></div>
                    <div className="w-8 h-8 bg-white/40 rounded"></div>
                  </div>
                  <span className="text-sm font-medium">View All Projects</span>
                </div>
              </div>
              
              <p className="text-sm opacity-90">
                Explore my complete portfolio of UI/UX design projects and case studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

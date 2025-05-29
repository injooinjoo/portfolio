import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetailSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "EDIYA MEMBERS",
      description: "Mobile app redesign for coffee chain membership",
      category: "Mobile App Design",
      year: "2023",
      tools: ["Figma", "Sketch", "Protopie"]
    },
    {
      id: 2,
      title: "ESTÉE LAUDER",
      description: "Luxury cosmetics brand website redesign",
      category: "Web Design",
      year: "2023",
      tools: ["Figma", "Adobe XD", "Principle"]
    },
    {
      id: 3,
      title: "NETFLIX REDESIGN",
      description: "Streaming platform user experience improvement",
      category: "UX/UI Design",
      year: "2024",
      tools: ["Figma", "After Effects", "Framer"]
    },
    {
      id: 4,
      title: "BANKING DASHBOARD",
      description: "Financial dashboard interface for mobile banking",
      category: "Dashboard Design",
      year: "2024",
      tools: ["Figma", "Sketch", "InVision"]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 왼쪽 영역 포지션 제어
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${(projects.length - 1) * window.innerHeight}`,
        onUpdate: (self) => {
          if (leftContentRef.current) {
            if (self.progress > 0 && self.progress < 1) {
              leftContentRef.current.style.position = 'fixed';
              leftContentRef.current.style.top = '0';
              leftContentRef.current.style.left = '0';
            } else {
              leftContentRef.current.style.position = 'absolute';
            }
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative"
      style={{ height: `${projects.length * 100}vh` }}
    >
      {/* 왼쪽 고정 영역 */}
      <div 
        ref={leftContentRef}
        className="w-1/2 h-screen flex flex-col justify-center px-16 bg-white z-20"
      >
        <div className="space-y-6">
          <h3 className="text-4xl font-bold">UIUX Design</h3>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              The App & Web Redesign Team project communicates with team members, 
              gathers opinions, reviews and feeds back each other's materials, 
              and completes the design to satisfy users.
            </p>
            <p>
              In the personal project, like the team project, I selected apps and web 
              that showed improvements well, then I thought about how to increase 
              usability, analyzed, and organized them to design them to meet the 
              needs of users.
            </p>
            <p className="text-gray-600">
              개인 프로젝트에서 팀 프로젝트 모두 사용자들의 요구와 특성을 반영하여 제작해왔습니다.<br/>
              나스에 맞는 기능을 체계적으로 다디자인하여 더 사용하기 편한 매체가, 잠들어 놓은 열정 구성해왔습니다.
            </p>
          </div>
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
            Read more
          </button>
        </div>
      </div>

      {/* 오른쪽 프로젝트 영역 - 각 카드가 별도 페이지 */}
      {projects.map((project, index) => (
        <div 
          key={project.id}
          className="absolute right-0 w-1/2 h-screen overflow-hidden bg-gray-50 flex items-center justify-center p-8"
          style={{ 
            top: `${index * 100}vh`,
            zIndex: 10
          }}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-auto">
            {/* 프로젝트 이미지 영역 */}
            <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                <span className="text-gray-500 text-sm">Project Image</span>
              </div>
            </div>
            
            {/* 프로젝트 정보 */}
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="text-sm text-gray-400">{project.year}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
              
              {/* 사용 도구 */}
              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-700">Tools Used:</span>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex}
                      className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* 프로젝트 번호 */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">
                    {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </span>
                  <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <style>{`
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

export default ProjectDetailSection; 
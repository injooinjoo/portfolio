
import React from 'react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-[12rem] md:text-[16rem] font-bold text-gray-200 select-none">
          My<br />Projects
        </h2>
      </div>

      {/* Character Illustration */}
      <div className="absolute bottom-20 right-20 hidden md:block">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <rect x="25" y="40" width="50" height="50" rx="5" fill="#333" />
          <circle cx="50" cy="25" r="12" fill="#333" />
          <circle cx="46" cy="22" r="1.5" fill="white" />
          <circle cx="54" cy="22" r="1.5" fill="white" />
          <path d="M46 28 Q50 31 54 28" stroke="white" strokeWidth="1" fill="none" />
          <rect x="30" y="50" width="40" height="25" rx="2" fill="white" opacity="0.8" />
          <rect x="32" y="52" width="8" height="1" fill="#333" />
          <rect x="32" y="55" width="12" height="1" fill="#333" />
          <rect x="32" y="58" width="10" height="1" fill="#333" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* UI/UX Design Section */}
            <div className="order-2 md:order-1">
              <h3 className="text-4xl md:text-5xl font-bold mb-8">
                UIUX<br />Design
              </h3>
              
              <div className="space-y-6 text-lg">
                <p>
                  The App & Web Redesign Team project communicates with team 
                  members, gathers opinions, reviews and feeds back each other's 
                  materials, and completes the design to satisfy users.
                </p>
                
                <p>
                  In the personal project, like the team project, I selected apps and web 
                  that showed improvements well, then I thought about how to increase 
                  usability, analyzed, and organized them to design them to meet the 
                  needs of users.
                </p>
                
                <p className="text-gray-600">
                  개인 프로젝트와 팀 프로젝트 모두 사용자들의 요구와 특성을 반영하여 재설계하였습니다.
                  <br />
                  다국어 웹 기능을 설계해보고 디자인시스템과 더 사용하기 편한 페이지, 컨텐츠, 톤 앤 매너를 구상해보았습니다.
                </p>

                <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
                  Read more
                </button>
              </div>
            </div>

            {/* Project Showcase */}
            <div className="order-1 md:order-2">
              <div className="space-y-6">
                {/* Project 1 */}
                <div className="bg-blue-600 rounded-lg p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Ediya Members</h4>
                  <div className="w-full h-32 bg-white/20 rounded flex items-center justify-center">
                    <span className="text-sm">Mobile App Interface</span>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="bg-black rounded-lg p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Estée Lauder</h4>
                  <div className="w-full h-32 bg-white/20 rounded flex items-center justify-center">
                    <span className="text-sm">Website Redesign</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

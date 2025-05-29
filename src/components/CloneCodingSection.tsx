import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CloneCodingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const stackContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'Musign',
      date: 'May 2024',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: 'Music streaming interface clone with responsive design and interactive player controls.',
      image: '/project.png',
      type: 'project'
    },
    {
      title: 'Crew a la Mode',
      date: 'June 2024',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: 'Fashion e-commerce website clone with modern design and responsive layout.',
      image: '/project.png',
      type: 'project'
    },
    {
      title: 'E-commerce Platform',
      date: 'April 2024', 
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      description: 'Modern shopping website clone featuring product catalog, cart functionality, and checkout process.',
      image: '/project.png',
      type: 'project'
    },
    {
      title: 'Social Media App',
      date: 'March 2024',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js'], 
      description: 'Social platform interface clone with feed, messaging, and profile management features.',
      image: '/project.png',
      type: 'project'
    },
    {
      title: 'Portfolio Website',
      date: 'February 2024',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: 'Creative portfolio website clone with smooth animations and modern design principles.',
      image: '/project.png',
      type: 'project'
    },
    {
      title: 'Discover more projects',
      date: '',
      technologies: [],
      description: 'Explore my complete collection of clone coding projects and see how I\'ve implemented various web technologies.',
      image: '',
      type: 'cta'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(titleRef.current, {
            opacity: self.progress,
            y: (1 - self.progress) * 100,
            duration: 0.3
          });
        }
      });

      // Description animation
      ScrollTrigger.create({
        trigger: descriptionRef.current,
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(descriptionRef.current, {
            opacity: self.progress,
            y: (1 - self.progress) * 50,
            duration: 0.3
          });
        }
      });

      // 카드 스택 애니메이션 - 페이지 고정과 함께
      const cards = document.querySelectorAll('.stack-card');
      
      // 모든 카드 초기 상태 설정
      cards.forEach((card, index) => {
        gsap.set(card, {
          y: 300, // 더 아래에서 시작
          x: index * 20, // 오른쪽으로 조금씩 엇나가게
          opacity: 0,
          rotation: index * 3, // 각 카드마다 조금씩 회전
          scale: 0.8,
          zIndex: index // 뒤의 카드가 더 낮은 z-index
        });
      });

      // 스크롤 트리거 - 페이지를 고정하고 카드들이 쌓이도록
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top", // 섹션이 상단에 도달하면 바로 고정
        end: () => `+=${window.innerHeight * 2}`, // 2배 높이로 스크롤 구간 확장
        pin: true, // 페이지 고정
        scrub: 1,
        onUpdate: (self) => {
          const totalCards = cards.length;
          const progress = self.progress;
          
          cards.forEach((card, index) => {
            // 각 카드가 나타나는 진행도 계산
            const cardStartProgress = index / totalCards;
            const cardEndProgress = (index + 1) / totalCards;
            
            if (progress >= cardStartProgress) {
              const cardProgress = Math.min(1, (progress - cardStartProgress) / (cardEndProgress - cardStartProgress));
              
              // 카드가 앞으로 오면서 오른쪽 아래로 조금씩 엇나가며 쌓임
              gsap.to(card, {
                y: 300 - (cardProgress * 300), // 아래에서 위로
                x: index * 20 - (cardProgress * index * 10), // 오른쪽 엇나감을 점진적으로 줄임
                opacity: cardProgress,
                rotation: index * 3 - (cardProgress * index * 2), // 회전도 점진적으로 줄임
                scale: 0.8 + (cardProgress * 0.2),
                duration: 0.3,
                ease: "power2.out"
              });
            } else {
              // 아직 나타나지 않은 카드
              gsap.set(card, {
                y: 300,
                x: index * 20,
                opacity: 0,
                rotation: index * 3,
                scale: 0.8
              });
            }
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ height: `${300}vh` }}>
      <div className="max-w-7xl mx-auto px-8 relative z-10 min-h-screen bg-white py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-6xl md:text-8xl font-bold mb-8 opacity-0">
            Clone<br />Coding
          </h2>
          
          <div ref={descriptionRef} className="max-w-4xl mx-auto space-y-4 text-lg mb-12 opacity-0">
            <p className="font-medium">I clone-coded web pages based on my understanding of HTML, CSS, and JavaScript.</p>
            <p className="text-gray-600">I thoroughly followed the box structure and designed it to be neat to make and use.</p>
          </div>
        </div>

        {/* 스택 카드 컨테이너 */}
        <div ref={stackContainerRef} className="flex justify-center items-center min-h-[600px] relative">
          <div className="relative w-[600px] h-[350px]" style={{ perspective: '1000px' }}>
            {projects.map((project, index) => (
              <div 
                key={index}
                className="stack-card absolute w-full h-full bg-gray-200 rounded-2xl border-2 border-black shadow-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                  left: '0',
                  top: '0'
                }}
              >
                {project.type === 'cta' ? (
                  // CTA 카드 (마지막 카드)
                  <div className="h-full bg-gray-900 text-white rounded-2xl p-8 flex flex-col justify-center items-center text-center">
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="mb-6 opacity-90 text-lg">
                      {project.description}
                    </p>
                    <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
                      View All Projects
                    </button>
                  </div>
                ) : (
                  // 일반 프로젝트 카드
                  <div className="flex h-full">
                    {/* 왼쪽 텍스트 영역 */}
                    <div className="w-1/2 p-8 flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-sm font-medium text-black">Clone Coding</span>
                        <span className="text-sm text-gray-600">{project.date}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-white border border-gray-400 rounded-full text-sm text-black"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-3xl font-bold text-black mb-4">{project.title}</h3>
                    </div>
                    
                    {/* 오른쪽 이미지 영역 */}
                    <div className="w-1/2 p-8 flex items-center justify-center">
                      <div className="w-full h-full bg-gray-600 rounded-xl flex items-center justify-center">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-xl"
                          onError={(e) => {
                            // 이미지 로드 실패 시 대체 컨텐츠 표시
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent && !parent.querySelector('.fallback-content')) {
                              const fallback = document.createElement('div');
                              fallback.className = 'fallback-content text-center text-white';
                              fallback.innerHTML = `
                                <div class="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-2"></div>
                                <span class="text-sm">Project Preview</span>
                              `;
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .stack-card {
          backface-visibility: hidden;
          will-change: transform;
        }
        
        .stack-card:hover {
          transform: translateY(-10px) !important;
          transition: transform 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default CloneCodingSection;

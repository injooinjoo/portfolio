import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const whoAmITitle = contentRef.current?.querySelector('.who-am-i-title');
      const otherElements = contentRef.current?.querySelectorAll('.animate-down');
      
      // "Who am I" 제목 - 왼쪽에서 오른쪽으로
      if (whoAmITitle) {
        gsap.set(whoAmITitle, {
          opacity: 0,
          x: -100
        });
      }

      // 나머지 요소들 - 위에서 아래로
      if (otherElements) {
        gsap.set(otherElements, {
          opacity: 0,
          y: -50
        });
      }

      // 페이지 진입 시 애니메이션 실행
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 90%",
        onEnter: () => {
          const tl = gsap.timeline();
          
          // "Who am I" 먼저 왼쪽에서 오른쪽으로
          if (whoAmITitle) {
            tl.to(whoAmITitle, {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out"
            });
          }
          
          // 나머지 요소들 위에서 아래로 순차적으로
          if (otherElements) {
            tl.to(otherElements, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              stagger: 0.15
            }, "-=0.3");
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-0">
      <div ref={contentRef} className="max-w-4xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Left side - Who am I */}
        <div className="space-y-8">
          <h3 className="who-am-i-title text-3xl font-bold border-b-2 border-black pb-2 inline-block">
            Who am I
          </h3>
          
          <div className="space-y-6">
            <p className="animate-down text-lg leading-relaxed">
              I am a <strong>UI/UX Designer</strong>, InJoo Kim.
            </p>
            <p className="animate-down text-lg leading-relaxed">
              I approach all challenges with the courage and determination of a{' '}
              <span className="inline-block px-3 py-1 border border-black rounded-full">
                Lion's heart
              </span>
              , dedicated to leading with{' '}
              <em>communication, flexibility, and unwavering excellence.</em>
            </p>
            
            <div className="animate-down text-gray-600 space-y-2">
              <p>저는 도전을 두려워하지 않는 Project Manager 김인주입니다.</p>
              <p>제 이름과 유사한 단어 'Lion', 즉 사자처럼 당당하고 용감한 태도로 새로운 도전에 임하며</p>
              <p>소통 능력과 유연함으로 성공적인 프로젝트를 이끌어 나가는 매니저가 되겠습니다.</p>
            </div>

            <button className="animate-down mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300">
              Read more
            </button>
          </div>
        </div>

        {/* Right side - Empty space for balance */}
        <div className="relative">
          <div className="text-center">
            {/* Empty space to maintain layout balance */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection; 
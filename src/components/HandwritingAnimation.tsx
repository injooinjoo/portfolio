import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HandwritingAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (pathRef.current) {
        const path = pathRef.current;
        const pathLength = path.getTotalLength();
        
        // 초기 설정 - 선이 보이지 않도록
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength
        });

        // 스크롤에 따라 핸드라이팅이 그려지는 애니메이션
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const dashOffset = pathLength - (progress * pathLength);
            gsap.set(path, {
              strokeDashoffset: dashOffset
            });
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ height: '200vh' }}
    >
      <svg 
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          ref={pathRef}
          d="M 960 400 Q 980 450, 1000 500 Q 1020 550, 1000 600 Q 980 650, 940 680 Q 900 710, 850 700 Q 800 690, 760 670 Q 720 650, 700 610 Q 680 570, 700 530 Q 720 490, 760 470 Q 800 450, 850 460 Q 900 470, 940 450 L 960 500 Q 980 550, 1000 600 Q 1020 650, 1000 700 Q 980 750, 940 780 Q 900 810, 850 800 Q 800 790, 760 770 Q 720 750, 700 710 Q 680 670, 700 630 Q 720 590, 760 570 Q 800 550, 850 560 Q 900 570, 940 550"
          stroke="#333"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ 
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
            opacity: 0.6
          }}
        />
      </svg>
    </div>
  );
};

export default HandwritingAnimation; 
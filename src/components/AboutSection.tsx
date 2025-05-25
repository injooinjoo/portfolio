
import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="min-h-screen bg-black relative overflow-hidden">
      {/* Title */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h2 className="text-white text-8xl md:text-9xl font-bold opacity-20">About</h2>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full">
        <div className="flex h-screen">
          {/* Who am I section */}
          <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8 md:px-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Who am I</h3>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I am a <strong>UI/UX Designer</strong>, Ryan Kim.
              </p>
              <p className="text-lg leading-relaxed">
                I approach all challenges with the courage and determination of a{' '}
                <span className="inline-block px-3 py-1 border border-black rounded-full">
                  Lion's heart
                </span>
                , dedicated to leading with{' '}
                <em>communication, flexibility, and unwavering excellence.</em>
              </p>
              
              <div className="text-gray-600 space-y-2">
                <p>저는 도전을 두려워하지 않는 UI/UX 디자이너 김자연입니다.</p>
                <p>제 이름과 유사한 단어 'Lion', 즉 사자처럼 당당하고 용감한 태도로 새로운 도전에 임하며</p>
                <p>소통 능력과 유연함으로 성공적인 프로젝트를 이끌어 나가는 디자이너가 되겠습니다.</p>
              </div>

              <button className="mt-8 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
                Read more
              </button>
            </div>
          </div>

          {/* Character section */}
          <div className="hidden md:block w-1/2 bg-black flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-6xl font-bold mb-8">Me</div>
              <div className="flex justify-center">
                <svg width="120" height="120" viewBox="0 0 120 120">
                  <rect x="30" y="40" width="60" height="70" rx="10" fill="white" />
                  <circle cx="60" cy="25" r="15" fill="white" />
                  <circle cx="55" cy="22" r="2" fill="black" />
                  <circle cx="65" cy="22" r="2" fill="black" />
                  <path d="M55 28 Q60 32 65 28" stroke="black" strokeWidth="1" fill="none" />
                  <text x="45" y="60" fill="black" fontSize="12">Who</text>
                  <text x="45" y="75" fill="black" fontSize="12">am I ?</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

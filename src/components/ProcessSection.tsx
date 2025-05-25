
import React from 'react';

const ProcessSection = () => {
  const processSteps = [
    {
      title: 'Brainstorming',
      subtitle: 'Analyzing Myself',
      description: 'Categorizing words to derive keywords',
      icon: '🧠'
    },
    {
      title: 'Affinity Diagram', 
      subtitle: 'Categorizing words to derive keywords',
      description: 'Organized analysis of ideas',
      icon: '📊'
    },
    {
      title: 'Insight',
      subtitle: 'Deriving insights based on keywords',
      description: 'Finding meaningful patterns',
      icon: '💡'
    },
    {
      title: 'Character',
      subtitle: 'Designing a character with my identity',
      description: 'Creating visual representation',
      icon: '👤'
    },
    {
      title: 'Idea Sketch',
      subtitle: 'Sketch ideas based on references',
      description: 'Visual exploration of concepts',
      icon: '✏️'
    },
    {
      title: 'IA & Flowchart',
      subtitle: 'Create Information Architecture & Flowchart',
      description: 'Structuring the user journey',
      icon: '🔄'
    },
    {
      title: 'Design System',
      subtitle: 'Create a design system for the index',
      description: 'Establishing visual consistency',
      icon: '🎨'
    },
    {
      title: 'Storyboard',
      subtitle: 'Creating a homepage using a program',
      description: 'Bringing ideas to life',
      icon: '📋'
    }
  ];

  return (
    <section id="process" className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-bold mb-8">
            Portfolio<br />Process
          </h2>
          
          {/* Character Illustration */}
          <div className="flex justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 80 80" className="text-white">
              <circle cx="25" cy="40" r="15" fill="white" />
              <circle cx="55" cy="40" r="15" fill="currentColor" />
              <circle cx="22" cy="37" r="2" fill="black" />
              <circle cx="28" cy="37" r="2" fill="black" />
              <circle cx="52" cy="37" r="2" fill="white" />
              <circle cx="58" cy="37" r="2" fill="white" />
              <path d="M30 50 L35 45 L40 50 L45 45 L50 50" stroke="white" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>

        {/* Process Grid */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Discover & Develop Ideas
          </h3>
          <p className="text-center text-gray-400 mb-12">
            UI/UX 디자이너에게 중요한 부분을 포트폴리오에 적용하여 저만의 특별한 portfolio process를 구성하였습니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-white text-black rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="text-3xl mb-4">{step.icon}</div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{step.subtitle}</p>
                <p className="text-xs text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

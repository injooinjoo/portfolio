
import React from 'react';

const SkillsSection = () => {
  const skills = [
    'Photoshop',
    'Illustrator', 
    'Figma',
    'HTML',
    'CSS'
  ];

  const strengths = [
    'Integrity',
    'Developing',
    'Altruistic',
    'Cooperation'
  ];

  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        {/* Profile Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-8 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 italic">
            "Ryan, the Lion-Hearted Person."
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-4 text-lg">
            <p>I confront every challenge</p>
            <p>with bold courage and responsible leadership.</p>
          </div>
          
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            제 이름인 'Ryan'이 사자를 뜻하는 단어 'Lion'과 닮아있듯 저 역시 용감한 사자처럼 도전을
            두려워하지 않으며 자신감과 공익하는 노력으로 목표를 달해 나가는 UI/UX 디자이너가 되겠습니다.
          </p>
        </div>

        {/* Skills and Strengths */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 border-b-2 border-black pb-2 inline-block">
              Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-lg">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <div>
            <h3 className="text-2xl font-bold mb-8 border border-black rounded-full px-6 py-2 inline-block">
              Strengths
            </h3>
            <div className="space-y-4">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-lg">{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

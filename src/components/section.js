import React, { useState } from 'react';

function AboutSection() {
  const [activeTab, setActiveTab] = useState('About Me');

  return (
    <div className="bg-gray-700 p-4 rounded-lg mb-4">
      <div className="flex">
        {['About Me', 'Experiences', 'Recommended'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 text-sm py-2 rounded-lg ${
              activeTab === tab ? 'bg-gray-600' : 'bg-gray-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {activeTab === 'About Me' && (
          <p>
           I'm Ishan Bathla, a MERN stack developer with a strong passion for building dynamic and responsive web applications. I've worked on various projects that demonstrate my proficiency in full-stack development, from front-end design to back-end functionality. As I look to the future, I'm excited about the opportunity to contribute to Lunacal, where I aim to leverage my skills in web development to create innovative solutions and enhance user experiences
          </p>
        )}
        {/* Other tabs content can go here */}
      </div>
    </div>
  );
}

export default AboutSection;

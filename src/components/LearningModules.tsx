import React from 'react';
import { BookOpen, Video, FileText, Clock } from 'lucide-react';

export default function LearningModules() {
  const modules = [
    {
      title: "US Market Investment",
      icon: <BookOpen className="w-6 h-6" />,
      duration: "4 weeks",
      lessons: "Sample text",
      description: "Step into the US market investments with shree learnings"
    },
    {
      title: "Property Investments",
      icon: <FileText className="w-6 h-6" />,
      duration: "4 weeks",
      lessons: 16,
      description: "Navigate property investments confidently with Shree"
    },
    {
      title: "Crypto & BlockChain",
      icon: <Video className="w-6 h-6" />,
      duration: "4 weeks",
      lessons: 9,
      description: "Master in blockchain and unlock crypto world success with shree"
    },
    {
      title: "Indian Stock Market",
      icon: <BookOpen className="w-6 h-6" />,
      duration: "4 weeks",
      lessons: 9,
      description: "Transform your Indian stock market investment learnings with Shree."
    },
    {
      title: "Algo & MTF",
      icon: <FileText className="w-6 h-6" />,
      duration: "4 weeks",
      lessons: 16,
      description: "Shree: Your guide to mastering Algo and MTF trading strategies learning"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Learning Modules</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {modules.slice(0, 3).map((module, index) => (
            <div 
              key={index}
              className="group perspective"
            >
              <div className="relative transform-style-3d transition-transform duration-500 w-full h-[300px] group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 bg-white rounded-xl shadow-lg p-6 backface-hidden">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary rounded-full p-4 mb-4">
                      {module.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{module.duration}</span>
                    </div>
                    <p className="text-gray-600">{module.description}</p>
                  </div>
                </div>
                {/* Back of card */}
                <div className="absolute inset-0 bg-primary rounded-xl shadow-lg p-6 backface-hidden rotate-y-180">
                  <div className="flex flex-col items-center justify-center h-full">
                    <h4 className="text-lg font-semibold mb-4">What you'll get:</h4>
                    <ul className="text-secondary space-y-2">
                      <li>• {module.lessons} comprehensive lessons</li>
                      <li>• Stratagies </li>
                      <li>• Live trading sessions</li>
                      <li>• Certificate on completion</li>
                    </ul>
                    <button className="mt-6 bg-secondary text-white px-6 py-2 rounded-md hover:bg-opacity-90">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Centered last two modules */}
        <div className="grid md:grid-cols-2 gap-8 max-w-[800px] mx-auto mt-8">
          {modules.slice(3).map((module, index) => (
            <div 
              key={index + 3}
              className="group perspective"
            >
              <div className="relative transform-style-3d transition-transform duration-500 w-full h-[300px] group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 bg-white rounded-xl shadow-lg p-6 backface-hidden">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary rounded-full p-4 mb-4">
                      {module.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{module.duration}</span>
                    </div>
                    <p className="text-gray-600">{module.description}</p>
                  </div>
                </div>
                {/* Back of card */}
                <div className="absolute inset-0 bg-primary rounded-xl shadow-lg p-6 backface-hidden rotate-y-180">
                  <div className="flex flex-col items-center justify-center h-full">
                    <h4 className="text-lg font-semibold mb-4">What you'll get:</h4>
                    <ul className="text-secondary space-y-2">
                      <li>• {module.lessons} comprehensive lessons</li>
                      <li>• Stratagies </li>
                      <li>• Live trading sessions</li>
                      <li>• Certificate on completion</li>
                    </ul>
                    <button className="mt-6 bg-secondary text-white px-6 py-2 rounded-md hover:bg-opacity-90">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
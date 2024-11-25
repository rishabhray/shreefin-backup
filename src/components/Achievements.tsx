import React, { useState } from 'react';
import { Trophy, Award, Users, Target } from 'lucide-react';

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'awards', label: 'Awards' },
    { id: 'recognition', label: 'Recognition' },
    { id: 'milestones', label: 'Milestones' }
  ];

  const achievements = [
    {
      category: 'awards',
      title: 'Best Trading Platform 2023',
      description: 'Awarded for exceptional trading technology',
      icon: <Trophy className="w-8 h-8 text-primary" />,
      image: 'https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      category: 'recognition',
      title: '5-Star Broker Rating',
      description: 'Highest rating from Financial Express',
      icon: <Award className="w-8 h-8 text-primary" />,
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      category: 'milestones',
      title: '1 Million+ Active Users',
      description: 'Trusted by traders across India',
      icon: <Users className="w-8 h-8 text-primary" />,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      category: 'milestones',
      title: '₹10,000 Cr+ Daily Volume',
      description: 'Leading the market in trading volume',
      icon: <Target className="w-8 h-8 text-primary" />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const filteredAchievements = activeCategory === 'all' 
    ? achievements 
    : achievements.filter(item => item.category === activeCategory);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Our Achievements</h2>
        
        {/* Category Filters */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary text-secondary'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAchievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
                  {achievement.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
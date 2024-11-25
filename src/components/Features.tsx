import React from 'react';
import { Smartphone, BarChart2, Shield, Award, Users, Target, Zap, Clock, Globe, BookOpen } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Features() {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8 text-secondary" />,
      title: "Advanced Mobile Trading",
      description: "Trade seamlessly with our cutting-edge mobile platform"
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-secondary" />,
      title: "Expert Research",
      description: "Access in-depth market analysis and research reports"
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "Secure Investment",
      description: "Your investments are protected with bank-grade security"
    },
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      title: "Award Winning Service",
      description: "Recognized excellence in customer service and support"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Community Trading",
      description: "Join a community of successful traders and investors"
    },
    {
      icon: <Target className="w-8 h-8 text-secondary" />,
      title: "Precision Tools",
      description: "Advanced tools for precise market analysis and execution"
    },
    {
      icon: <Zap className="w-8 h-8 text-secondary" />,
      title: "Lightning Fast Execution",
      description: "Experience ultra-fast trade execution speeds"
    },
    {
      icon: <Clock className="w-8 h-8 text-secondary" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your needs"
    },
    {
      icon: <Globe className="w-8 h-8 text-secondary" />,
      title: "Global Markets",
      description: "Access to international markets and diverse assets"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-secondary" />,
      title: "Educational Resources",
      description: "Comprehensive learning materials for all skill levels"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">Why Choose Us</h2>
          <p className="text-gray-600">Experience the advantage of trading with India's leading broker</p>
        </div>
        
        <div className="relative pt-12"> {/* Added pt-12 for space above slider */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 rounded-lg hover:shadow-lg transition-all duration-300 border-2 border-primary bg-white h-full">
                  <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
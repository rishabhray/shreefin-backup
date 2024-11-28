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
      title: "Comprehensive Curriculum Across Key Financial Areas",
      description: "We offer in-depth courses across critical financial sectors, including investment strategies, insurance planning, loan management, bonds, the stock market, and cryptocurrency. This all-encompassing approach ensures you gain a well-rounded understanding of both traditional and emerging financial markets."
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-secondary" />,
      title: "Actionable, Results-Oriented Learning",
      description: "Our focus is not just theory but actionable knowledge that you can apply immediately. From learning how to optimize your investment returns to understanding tax-saving strategies, we provide you with tools that lead to tangible financial growth."
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "Expert-Led, Real-World Insights",
      description: "Learn from industry veterans who bring practical, hands-on experience to every lesson. Our instructors don't just teach concepts—they provide you with real-world insights that help you make smarter, more informed financial decisions."
    },
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      title: "Master Tax-Saving Strategies",
      description: "We help you understand and implement effective tax-saving techniques that can significantly boost your investment returns. Learn how to legally minimize your tax liabilities, leaving you with more to reinvest and grow."
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Holistic Approach to Financial Growth",
      description: "We guide you through every step of your financial journey—whether it’s creating a diversified investment portfolio, understanding insurance for risk management, or navigating the complexities of loans and bonds. Our goal is to ensure you achieve sustainable financial success"
    },
    {
      icon: <Target className="w-8 h-8 text-secondary" />,
      title: "Personalized Mentorship for Continuous Support",
      description: "Beyond just courses, you’ll have access to personalized mentorship. Our mentors are dedicated to helping you grow by providing tailored advice, answering your questions, and helping you stay on track to meet your investment goals."
    },
    {
      icon: <Zap className="w-8 h-8 text-secondary" />,
      title: "Practical Application in a Digital World",
      description: "As FinTech transforms the finance world, we equip you with the skills to leverage the latest technology in digital finance, from algorithmic trading to blockchain and cryptocurrency. Stay ahead of the curve with cutting-edge tools and strategies."
    },
    {
      icon: <Clock className="w-8 h-8 text-secondary" />,
      title: "Tailored Guidance in Stock Market & Crypto",
      description: "Whether you're a beginner or an experienced trader, we offer expert guidance on navigating the stock market and crypto space. Learn strategies for maximizing returns, managing risks, and staying up-to-date with market trends."
    },
    {
      icon: <Globe className="w-8 h-8 text-secondary" />,
      title: "⁠Engaged Community & Networking Opportunities",
      description: "Join a community of like-minded individuals who are on the same journey to financial growth. Exchange ideas, collaborate on strategies, and get inspired by others’ success stories. Our community provides both support and networking opportunities to help you succeed."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-secondary" />,
      title: "Continuous Learning and Resources",
      description: "We believe in lifelong learning. With access to our regularly updated resources, you can stay on top of the latest trends, technologies, and regulations in finance. Whether it’s a change in tax laws or a new investment strategy, we keep you informed and ready to adapt"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">Why Choose Us</h2>
          <p className="text-gray-600">Experience the advantage of trading with us.</p>
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

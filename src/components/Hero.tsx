import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, TrendingDown, Play } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Hero() {
  const phrases = [
    'Finance Think Shree',
    'Money Think Shree',
    'corporate FDs Think Shree',
    'Crypto Think Shree',
    'FOREX Think Shree',
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const sliderItems = [
    {
      title: 'Market Analysis',
      description: 'Expert insights on market trends',
      image:
        'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Trading Strategies',
      description: 'Advanced trading techniques',
      image:
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Portfolio Management',
      description: 'Optimize your investments',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Risk Management',
      description: 'Protect your investments',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Market Research',
      description: 'Data-driven insights',
      image:
        'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Investment Education',
      description: 'Learn from experts',
      image:
        'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Global Markets',
      description: 'International trading opportunities',
      image:
        'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Technical Analysis',
      description: 'Advanced charting tools',
      image:
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Financial Planning',
      description: 'Secure your future',
      image:
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 100 : 170;
    const currentPhrase = phrases[currentPhraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        } else {
          setIsDeleting(true);
          setTimeout(() => {}, 2000);
        }
      } else {
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        } else {
          setCurrentText(currentPhrase.slice(0, currentText.length - 1));
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex, phrases]);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Video Section */}
          <div className="relative group cursor-pointer rounded-xl overflow-hidden">
            <img
              src="https://shreefin.com/ZRAY/shree-trailer.mp4"
              alt="Shree Fin"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
              <div className="bg-primary p-5 rounded-full transform group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-secondary" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 h-[120px] sm:h-[150px]">
              <span className="text-primary">Explore</span>{' '}
              <span>{currentText}</span>
              <span className="ml-1 animate-[blink_1s_infinite]">|</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Learn • Navigate • Invest
            </p>
          </div>
        </div>

        {/* Image Slider Section */}
        <div className="mb-12 pt-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="pb-12"
          >
            {sliderItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-secondary rounded-lg overflow-hidden group cursor-pointer">
                  <div className="relative h-48">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-primary font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Graph Blocks */}
        <div className="grid grid-cols-2 gap-6">
          {/* NIFTY 50 Graph */}
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">
                NIFTY 50
              </span>
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
            <div className="h-24 bg-gradient-to-r from-secondary to-gray-900 rounded-md flex items-end">
              <div className="flex-1 h-full flex items-end px-1">
                {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 mx-0.5 bg-primary rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="mt-2 flex justify-between text-sm">
              <span className="text-primary font-semibold">+1.2%</span>
              <span className="text-gray-600">19,425.35</span>
            </div>
          </div>

          {/* SENSEX Graph */}
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">
                SENSEX
              </span>
              <TrendingDown className="w-4 h-4 text-primary" />
            </div>
            <div className="h-24 bg-gradient-to-r from-secondary to-gray-900 rounded-md flex items-end">
              <div className="flex-1 h-full flex items-end px-1">
                {[70, 45, 60, 30, 65, 40, 50].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 mx-0.5 bg-primary rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="mt-2 flex justify-between text-sm">
              <span className="text-primary font-semibold">-0.8%</span>
              <span className="text-gray-600">64,363.78</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

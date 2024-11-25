import React from 'react';
import { Play, ChevronRight } from 'lucide-react';

export default function InformativeVideo() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative group cursor-pointer">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Trading Masterclass"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                <div className="bg-primary p-5 rounded-full transform group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-secondary" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-6">
              Master the Art of Trading
            </h2>
            <p className="text-gray-600 mb-8">
              Learn from our expert analysts and seasoned traders. Get insights into market
              trends, technical analysis, and proven trading strategies.
            </p>
            
            <div className="space-y-4">
              {[
                'Professional trading techniques',
                'Risk management strategies',
                'Market analysis fundamentals',
                'Live trading sessions'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-primary mr-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 bg-primary text-secondary px-8 py-3 rounded-lg font-semibold flex items-center hover:bg-opacity-90 transition-colors">
              Watch Full Video
              <Play className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function ScrollingAlert() {
  return (
    <div className="bg-secondary py-3 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        {/* Fixed Alert Label */}
        <div className="flex items-center bg-secondary text-primary px-4 py-1 rounded-full z-10 border-2 border-primary">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span className="font-semibold">Alert</span>
        </div>
        
        {/* Scrolling Text Container */}
        <div className="flex overflow-hidden ml-4 whitespace-nowrap">
          <div className="animate-scroll flex items-center space-x-4">
            <span className="text-white inline-block">Market is subjective</span>
            <span className="text-primary inline-block mx-8">•</span>
            <span className="text-white inline-block">Market is subjective</span>
            <span className="text-primary inline-block mx-8">•</span>
          </div>
          <div className="animate-scroll flex items-center space-x-4" aria-hidden="true">
            <span className="text-white inline-block">Market is subjective</span>
            <span className="text-primary inline-block mx-8">•</span>
            <span className="text-white inline-block">Market is subjective</span>
            <span className="text-primary inline-block mx-8">•</span>
          </div>
        </div>
      </div>
    </div>
  );
}
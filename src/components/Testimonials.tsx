import React from 'react';
import { Star, Play } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Professional Trader",
      rating: 5,
      text: "The learning modules helped me understand market dynamics better. Excellent platform!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Priya Singh",
      role: "Retail Investor",
      rating: 5,
      text: "Clear, concise, and practical knowledge. The live sessions were particularly helpful.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const videoTestimonials = [
    {
      thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      name: "Amit Patel",
      duration: "2:15"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      name: "Sneha Reddy",
      duration: "1:45"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-secondary mb-12 text-center">What Our Users Say</h2>
        
        {/* Text Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-current" />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Video Testimonials */}
        <h3 className="text-2xl font-semibold mb-8 text-center">Video Reviews</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {videoTestimonials.map((video, index) => (
            <div key={index} className="relative group cursor-pointer">
              <img 
                src={video.thumbnail} 
                alt={video.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 rounded-lg flex items-center justify-center">
                <div className="bg-primary p-4 rounded-full">
                  <Play className="w-6 h-6 text-secondary" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">{video.name}</p>
                <p className="text-sm">{video.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
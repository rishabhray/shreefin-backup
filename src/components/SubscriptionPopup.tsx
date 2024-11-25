import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface SubscriptionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubscriptionPopup({ isOpen, onClose }: SubscriptionPopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscription data:', formData);
    onClose();
    setFormData({ name: '', phone: '', email: '' }); // Reset form
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />

      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl p-8 z-50 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-secondary">Subscribe Now</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-secondary py-3 px-6 rounded-md font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center"
          >
            Subscribe Now
            <Send className="w-5 h-5 ml-2" />
          </button>
        </form>
      </div>
    </>
  );
}
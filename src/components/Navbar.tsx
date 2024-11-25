import React, { useState } from 'react';
import { Search, User, Menu, Wallet } from 'lucide-react';
import Sidebar from './Sidebar';
import SubscriptionPopup from './SubscriptionPopup';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubscribePopupOpen, setIsSubscribePopupOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <SubscriptionPopup 
        isOpen={isSubscribePopupOpen} 
        onClose={() => setIsSubscribePopupOpen(false)} 
      />
      <nav className="bg-white shadow-lg fixed w-full top-0 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left Section */}
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Center Logo Section */}
            <div className="flex items-center space-x-2">
              <Wallet className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-secondary">Shree Fin</span>
            </div>
            
            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
              <User className="w-5 h-5 text-gray-600 cursor-pointer" />
              <button 
                onClick={() => setIsSubscribePopupOpen(true)}
                className="bg-primary text-secondary font-semibold px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
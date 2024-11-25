import React, { useState } from 'react';
import { X, Home, Package, Info, BookOpen, Users, Settings } from 'lucide-react';
import SubscriptionPopup from './SubscriptionPopup';
import AboutUsPopup from './AboutUsPopup';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [isSubscriptionPopupOpen, setIsSubscriptionPopupOpen] = useState(false);
  const [isAboutUsPopupOpen, setIsAboutUsPopupOpen] = useState(false);

  const menuItems = [
    { 
      icon: <Home className="w-5 h-5" />, 
      label: 'Home', 
      onClick: () => window.location.href = '/' 
    },
    { 
      icon: <Package className="w-5 h-5" />, 
      label: 'Products', 
      onClick: () => setIsSubscriptionPopupOpen(true) 
    },
    { 
      icon: <Info className="w-5 h-5" />, 
      label: 'About Us', 
      onClick: () => setIsAboutUsPopupOpen(true) 
    },
    { 
      icon: <BookOpen className="w-5 h-5" />, 
      label: 'Courses', 
      onClick: () => window.location.href = '/courses' 
    },
    { 
      icon: <Users className="w-5 h-5" />, 
      label: 'Membership', 
      onClick: () => window.location.href = '/membership' 
    },
    { 
      icon: <Settings className="w-5 h-5" />, 
      label: 'Settings', 
      onClick: () => window.location.href = '/settings' 
    },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-secondary">Shree Fin</span>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        <nav className="mt-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                item.onClick();
                if (!['Products', 'About Us'].includes(item.label)) {
                  onClose();
                }
              }}
              className="flex items-center w-full px-6 py-3 text-gray-700 hover:bg-gray-100"
            >
              <span className="mr-3 text-gray-600">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <button className="w-full bg-primary text-secondary font-semibold px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Partner with Us
          </button>
        </div>
      </div>

      <SubscriptionPopup 
        isOpen={isSubscriptionPopupOpen} 
        onClose={() => setIsSubscriptionPopupOpen(false)} 
      />
      <AboutUsPopup 
        isOpen={isAboutUsPopupOpen} 
        onClose={() => setIsAboutUsPopupOpen(false)} 
      />
    </>
  );
}
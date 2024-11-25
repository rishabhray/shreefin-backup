import React from 'react';
import { X, Play } from 'lucide-react';

interface AboutUsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutUsPopup({ isOpen, onClose }: AboutUsPopupProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl p-8 z-50 w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-secondary">About Shree Fin</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Video Section */}
          <div className="relative group cursor-pointer">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="About Shree Fin"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                <div className="bg-primary p-4 rounded-full transform group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-4">
            <p className="text-gray-600">
              Shreefin is a dynamic and rapidly growing financial services firm
              with over six years of experience in the industry. The company has
              established strong collaborations with prominent financial
              entities, including Centrum Broking, a listed company, and SMC
              Global. These partnerships enhance Shreefin's ability to deliver a
              wide range of financial products and services. Shreefin operates
              across various sectors, providing comprehensive solutions such as
              loans, mutual funds, bonds, Portfolio Management Services (PMS)
              investments, stock market investments, and other finance-related
              offerings. The company is committed to guiding clients through the
              complexities of financial markets and helping them make informed
              and strategic investment decisions. In line with our commitment to
              promoting financial literacy and simplifying investment processes,
              Shreefin is set to launch a pioneering initiative on December 1,
              2024. This innovative program aims to demystify financial
              investments for young individuals and the general public,
              fostering a clearer understanding of financial concepts. By making
              investment decisions more accessible and comprehensible, Shreefin
              strives to empower people to achieve financial stability and
              long-term
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Our Mission</h4>
                <p className="text-gray-600">
                  To democratize financial markets and make trading accessible
                  to everyone.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Our Vision</h4>
                <p className="text-gray-600">
                  To become India's most trusted and innovative financial
                  services platform.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Our Values</h4>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Transparency</li>
                  <li>Innovation</li>
                  <li>Customer First</li>
                  <li>Excellence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

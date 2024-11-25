import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shree Fin</h3>
            <p className="text-gray-300 mb-4">
              Office: 205 Shayam Tower Indore Near madhumilan square Pin Code
              452010
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-primary" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-primary" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-primary" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-primary" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  KYC Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <span className="text-gray-300">+91 78285 11889</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <span className="text-gray-300">support@shreefin.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Shree Fin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

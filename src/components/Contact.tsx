import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            We're here to help and answer any question you might have
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-secondary">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <p className="font-medium">Call Us</p>
                        <p className="text-gray-600">+91 78285 11889</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <p className="font-medium">Email Us</p>
                        <p className="text-gray-600">support@shreefin.com</p>
                        <p className="text-gray-600">hr@shreefin.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <p className="font-medium">Visit Us</p>
                        <p className="text-gray-600">
                          205 Shayam Tower Indore
                          <br />
                          Near madhumilan square
                          <br />
                          Pin Code 452010
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-gray-600">
                          Monday - Friday: 9:30 AM - 6:30 PM
                        </p>
                        <p className="text-gray-600">
                          Saturday: 10:00 AM - 6:30 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-secondary py-3 px-6 rounded-md font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3334866910534!2d75.8872!3d22.7154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQyJzU1LjQiTiA3NcKwNTMnMTMuOSJF!5e0!3m2!1sen!2sin!4v1635835824092!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

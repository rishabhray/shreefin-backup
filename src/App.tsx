import React from 'react';
import AlertBanner from './components/AlertBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MarketSection from './components/MarketSection';
import LearningModules from './components/LearningModules';
import Achievements from './components/Achievements';
import InformativeVideo from './components/InformativeVideo';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ScrollingAlert from './components/ScrollingAlert';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <AlertBanner />
      <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <Navbar />
        <Hero />
        <Features />
        <LearningModules />
        <MarketSection />
        <InformativeVideo />
        <Achievements />
        <Testimonials />
        <Contact />
        <ScrollingAlert />
        <Footer />
      </div>
    </div>
  );
}

export default App;

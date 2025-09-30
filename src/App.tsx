import { useState } from 'react';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Roadmap from './components/Roadmap';
import FourComponent from './components/FourComponent';
import { WhatWeOffer } from './components/whatWeOffer';
import FifthComponent from './components/fifthComponent';
import Testimonial from './components/testimonial';
import SixthComponent from './components/sixthcomponent';
import Team from './components/team';
import Footer from './components/footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-[300vh] bg-black scroll-smooth">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center text-white text-sm font-medium tracking-wider">
          <div className="text-lg font-bold">
            Code Matrix<br />
          </div>
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10 lg:space-x-14">
            <a href="#about" className="hover:text-blue-300 transition-all duration-300 ease-in-out hover:scale-105">About Us</a>
            <a href="#what" className="hover:text-blue-300 transition-all duration-300 ease-in-out hover:scale-105">What We Do</a>
            <a href="#curriculum" className="hover:text-blue-300 transition-all duration-300 ease-in-out hover:scale-105">Curriculum</a>
            <a href="#contact" className="hover:text-blue-300 transition-all duration-300 ease-in-out hover:scale-105">Contact Us</a>
            <a href="#book" className="hover:text-blue-300 transition-all duration-300 ease-in-out hover:scale-105">Book a Call</a>
          </div>
          {/* Hamburger Button */}
          <button
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/20 hover:bg-white/10 focus:outline-none"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 top-1 block h-0.5 w-6 bg-white transition-transform ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
              <span className={`absolute left-0 top-2.5 block h-0.5 w-6 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 bottom-1 block h-0.5 w-6 bg-white transition-transform ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden text-white text-sm font-medium tracking-wider bg-black/80 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="flex flex-col divide-y divide-white/10">
              <a href="#about" className="px-4 py-3 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>About Us</a>
              <a href="#what" className="px-4 py-3 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>What We Do</a>
              <a href="#curriculum" className="px-4 py-3 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Curriculum</a>
              <a href="#contact" className="px-4 py-3 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
              <a href="#book" className="px-4 py-3 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Book a Call</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Marquee Section */}
      <Marquee />

      {/* Roadmap Section */}
      <Roadmap />
      <FourComponent />
      <WhatWeOffer />
      <FifthComponent />
      <SixthComponent />
      <Testimonial />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
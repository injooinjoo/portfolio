
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-[8rem] md:text-[12rem] font-bold opacity-10 select-none">
          Get in touch
        </h2>
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-8 w-full">
          {/* Thank You Message */}
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-6xl font-bold mb-8">
              Thank you for watching<br />
              and<br />
              Please don't hesitate to ...
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-end">
            {/* Character Illustration */}
            <div className="flex justify-center md:justify-start">
              <div className="text-center">
                <svg width="120" height="120" viewBox="0 0 120 120" className="mb-4">
                  <circle cx="60" cy="40" r="20" fill="white" />
                  <circle cx="55" cy="35" r="3" fill="black" />
                  <circle cx="65" cy="35" r="3" fill="black" />
                  <path d="M55 45 Q60 50 65 45" stroke="black" strokeWidth="2" fill="none" />
                  <rect x="45" y="60" width="30" height="40" rx="5" fill="white" />
                  <rect x="35" y="70" width="50" height="20" rx="3" fill="white" opacity="0.8" />
                  <text x="50" y="80" fill="black" fontSize="8" textAnchor="middle">Contact me</text>
                  <circle cx="50" cy="105" r="5" fill="white" />
                  <circle cx="70" cy="105" r="5" fill="white" />
                </svg>
                <p className="text-sm text-gray-400">Let's collaborate on a new challenge with me</p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-xl font-bold mb-6">Contact</h4>
              <div className="space-y-4">
                <p className="text-gray-300">abcd@gmail.com</p>
                <p className="text-gray-300">010.1234.1234</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">Links</h4>
              <div className="space-y-4">
                <a href="#home" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </a>
                <a href="#about" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  About
                </a>
                <a href="#projects" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Project
                </a>
                <a href="#process" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  Portfolio Process
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">2024 by Kim Rayeon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

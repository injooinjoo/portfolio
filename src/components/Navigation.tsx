
import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Project', href: '#projects' },
    { name: 'Portfolio Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-8 right-8 z-50 hidden md:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="text-sm text-white hover:text-gray-300 transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 md:hidden p-3 bg-black text-white rounded-full"
      >
        <Menu size={20} />
      </button>

      {/* Mobile Navigation */}
      <nav className={`fixed top-0 left-0 w-80 h-full bg-white z-40 transform transition-transform duration-300 md:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="pt-20 px-6">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-black hover:text-gray-600 transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;

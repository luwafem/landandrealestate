import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white z-50 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div>
              <h1 className="text-xl font-semibold text-primary">HASHOMADA</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary">Home</button>
            <button onClick={() => scrollToSection('properties')} className="text-gray-700 hover:text-primary">Properties</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary">Contact</button>
            <button className="bg-primary text-white px-4 py-2 flex items-center space-x-2">
              <Phone size={16} />
              <span>0803-XXX-XXXX</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary">Home</button>
              <button onClick={() => scrollToSection('properties')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary">Properties</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary">Services</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary">About</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary">Contact</button>
              <button className="w-full bg-primary text-white px-6 py-3 mt-4">
                0803-XXX-XXXX
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
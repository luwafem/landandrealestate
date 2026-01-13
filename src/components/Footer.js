import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div>
                <h2 className="text-xl font-medium">HASHOMADA</h2>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted partner for premium real estate investments across Nigeria.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Buy Property</a></li>
              <li><a href="#" className="hover:text-white">Sell Property</a></li>
              <li><a href="#" className="hover:text-white">Rent Property</a></li>
              <li><a href="#" className="hover:text-white">Property Management</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Locations</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Lagos - Victoria Island</li>
              <li>Abuja - Maitama</li>
              <li>Port Harcourt - GRA</li>
              <li>Ibadan - Bodija</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe for property alerts.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 text-gray-800 focus:outline-none"
              />
              <button className="bg-white text-primary px-4">
                Subscribe
              </button>
            </div>
            <div className="mt-6">
              <div className="text-gray-300 text-sm mb-1">Need assistance?</div>
              <div className="font-medium">0803-XXX-XXXX</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} HASHOMADA. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
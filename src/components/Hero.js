import React from 'react';
import { Home, MapPin, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-20 pb-16 px-4 relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-white">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
            Premium Lands & Properties
            <br />
            <span className="font-normal">Across Nigeria</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Verified properties with transparent transactions.
            Your trusted partner in Nigerian real estate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 border border-white/20 bg-white/10 backdrop-blur text-center">
            <h3 className="font-medium mb-2">Lekki Phase 1</h3>
            <p className="text-gray-200 text-sm mb-2">
              500sqm commercial land
            </p>
          </div>

          <div className="p-6 border border-white/20 bg-white/10 backdrop-blur text-center">
            <h3 className="font-medium mb-2">Verified Titles</h3>
            <p className="text-gray-200 text-sm">
              Government approved documentation
            </p>
          </div>

          <div className="p-6 border border-white/20 bg-white/10 backdrop-blur text-center">
           
            <h3 className="font-medium mb-2">Abuja CBD</h3>
            <p className="text-gray-200 text-sm mb-2">
              1000sqm residential plot
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-white px-8 py-3">
            Explore Properties
          </button>
          <button className="border border-white text-white px-8 py-3">
            Book Consultation
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-16 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-medium mb-1">500+</div>
            <div className="text-gray-200 text-sm">Properties Sold</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-medium mb-1">15+</div>
            <div className="text-gray-200 text-sm">Cities Covered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-medium mb-1">98%</div>
            <div className="text-gray-200 text-sm">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

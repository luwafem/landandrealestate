import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Adebayo Johnson",
    role: "Medical Director, Lagos",
    content: "NaijaRealEstate helped me acquire a perfect plot in Lekki. Their due diligence and transparent process made all the difference.",
    rating: 5,
  },
  {
    name: "Mrs. Chinwe Okonkwo",
    role: "Business Owner, Abuja",
    content: "I was skeptical about online property purchase, but their team provided exceptional support. My duplex in Abuja is everything I wanted.",
    rating: 5,
  },
  {
    name: "Mr. Tunde Williams",
    role: "Diaspora Investor, UK",
    content: "As someone living abroad, I needed a trustworthy partner. They handled everything from documentation to property management.",
    rating: 5,
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-primary mb-4">Client Testimonials</h2>
          <p className="text-gray-600">
            Hear from our satisfied clients
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button 
              onClick={prev}
              className="bg-white border p-2"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button 
              onClick={next}
              className="bg-white border p-2"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="overflow-hidden px-12">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="p-8 border text-center">
                    <p className="text-gray-600 mb-8 italic">"{testimonial.content}"</p>
                    
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    
                    <div>
                      <div className="font-medium text-primary">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full ${
                  current === index ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
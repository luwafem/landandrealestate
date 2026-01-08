import React from 'react';
import { Shield, FileCheck, Home, TrendingUp, Users, Headphones } from 'lucide-react';

const services = [
  {
    icon: <Shield size={24} />,
    title: "Title Verification",
    description: "Comprehensive land documentation and government approval checks"
  },
  {
    icon: <FileCheck size={24} />,
    title: "Legal Services",
    description: "Professional legal support for all property transactions"
  },
  {
    icon: <Home size={24} />,
    title: "Property Management",
    description: "Full-service management for residential and commercial properties"
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Investment Advisory",
    description: "Expert guidance on high-yield real estate investments"
  },
  {
    icon: <Users size={24} />,
    title: "Relocation Services",
    description: "Complete relocation support for individuals and families"
  },
  {
    icon: <Headphones size={24} />,
    title: "24/7 Support",
    description: "Round-the-clock customer service and support"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-primary mb-4">Our Services</h2>
          <p className="text-gray-600">
            Comprehensive real estate solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 border hover:border-primary transition-colors"
            >
              <div className="text-primary mb-4">
                {service.icon}
              </div>
              <h3 className="font-medium text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#" className="text-primary text-sm">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
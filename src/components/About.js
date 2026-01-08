import React from 'react';
import { CheckCircle, Award, Target, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-light text-primary mb-6">
              Trusted Real Estate Partner in Nigeria
            </h2>
            <p className="text-gray-600 mb-8">
              With 15+ years of experience, we specialize in premium lands and properties across major Nigerian cities.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Verified property titles",
                "Market insights",
                "Transaction support",
                "Property management"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 border">
                <div className="text-xl font-medium text-primary mb-1">15+</div>
                <div className="text-gray-600 text-sm">Years</div>
              </div>
              <div className="text-center p-4 border">
                <div className="text-xl font-medium text-primary mb-1">500+</div>
                <div className="text-gray-600 text-sm">Clients</div>
              </div>
              <div className="text-center p-4 border">
                <div className="text-xl font-medium text-primary mb-1">25+</div>
                <div className="text-gray-600 text-sm">Cities</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 border">
              <div className="flex items-center mb-4">
                <Target className="text-primary mr-3" size={24} />
                <h3 className="font-medium text-primary">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To make property acquisition in Nigeria seamless through transparent processes and expert guidance.
              </p>
            </div>

            <div className="p-6 border">
              <div className="flex items-center mb-4">
                <Globe className="text-primary mr-3" size={24} />
                <h3 className="font-medium text-primary">National Coverage</h3>
              </div>
              <p className="text-gray-600">
                Operating across Nigeria with focus on Lagos, Abuja, Port Harcourt, and emerging markets.
              </p>
            </div>

            <div className="p-6 bg-primary text-white">
              <div className="flex items-center mb-4">
                <Award className="mr-3" size={24} />
                <h3 className="font-medium">Award Winning</h3>
              </div>
              <p>
                Recognized as Best Real Estate Agency and Most Trusted Property Consultant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
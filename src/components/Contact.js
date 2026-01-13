import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'land'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-primary mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            Contact us for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="p-6 border mb-6">
              <h3 className="font-medium text-primary mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium">Call Us</div>
                    <div className="text-gray-600">0803-XXX-XXXX</div>
                    <div className="text-gray-600">01-XXX-XXXX (Lagos)</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium">Email Us</div>
                    <div className="text-gray-600">info@HASHOMADA.NG</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium">Visit Us</div>
                    <div className="text-gray-600">Plot 1234, Victoria Island</div>
                    <div className="text-gray-600">Lagos, Nigeria</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium">Working Hours</div>
                    <div className="text-gray-600">Mon-Fri: 8am - 6pm</div>
                    <div className="text-gray-600">Sat: 10am - 4pm</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border">
              <h3 className="font-medium text-primary mb-4">Why Choose Us?</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 24-hour response guarantee</li>
                <li>• Free property valuation</li>
                <li>• No hidden charges</li>
                <li>• Diaspora-friendly services</li>
              </ul>
            </div>
          </div>

          <div className="p-6 border">
            <h3 className="font-medium text-primary mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border focus:border-primary focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border focus:border-primary focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 text-sm">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border focus:border-primary focus:outline-none"
                  placeholder="0803-XXX-XXXX"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 text-sm">Interest</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border focus:border-primary focus:outline-none"
                >
                  <option value="land">Land Purchase</option>
                  <option value="house">House Purchase</option>
                  <option value="rental">Property Rental</option>
                  <option value="investment">Investment Advisory</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 text-sm">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border focus:border-primary focus:outline-none"
                  placeholder="Tell us about your property needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>

              <p className="text-gray-500 text-xs text-center">
                By submitting, you agree to our Terms and Conditions.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
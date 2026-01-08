import React, { useState } from 'react';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Banana Island",
    location: "Banana Island, Lagos",
    price: "₦350,000,000",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800",
    beds: 5,
    baths: 4,
    area: "850",
  },
  {
    id: 2,
    title: "Commercial Land in Abuja",
    location: "Maitama, Abuja",
    price: "₦85,000,000",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800",
    beds: 0,
    baths: 0,
    area: "1200",
  },
  {
    id: 3,
    title: "Duplex in Port Harcourt",
    location: "GRA Phase 2, Port Harcourt",
    price: "₦120,000,000",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800",
    beds: 4,
    baths: 3,
    area: "650",
  },
  {
    id: 4,
    title: "Beachfront Property in Calabar",
    location: "Calabar, Cross River",
    price: "₦200,000,000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800",
    beds: 6,
    baths: 5,
    area: "950",
  },
  {
    id: 5,
    title: "Modern Apartment in Lekki Phase 1",
    location: "Lekki Phase 1, Lagos",
    price: "₦95,000,000",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800",
    beds: 3,
    baths: 3,
    area: "420",
  },
  {
    id: 6,
    title: "Luxury Penthouse in Ikoyi",
    location: "Ikoyi, Lagos",
    price: "₦480,000,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800",
    beds: 4,
    baths: 5,
    area: "780",
  },
  {
    id: 7,
    title: "Residential Land in Ajah",
    location: "Ajah, Lagos",
    price: "₦38,000,000",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800",
    beds: 0,
    baths: 0,
    area: "600",
  },
  {
    id: 8,
    title: "Detached Bungalow in Ibadan",
    location: "Bodija, Ibadan",
    price: "₦65,000,000",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800",
    beds: 4,
    baths: 3,
    area: "700",
  },
  {
    id: 9,
    title: "Executive Duplex in Enugu",
    location: "Independence Layout, Enugu",
    price: "₦78,000,000",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800",
    beds: 4,
    baths: 4,
    area: "680",
  },
  {
    id: 10,
    title: "Serviced Apartment in Uyo",
    location: "Ewet Housing Estate, Uyo",
    price: "₦55,000,000",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800",
    beds: 2,
    baths: 2,
    area: "350",
  },
  {
    id: 11,
    title: "Luxury Terrace in Asaba",
    location: "GRA, Asaba",
    price: "₦72,000,000",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800",
    beds: 3,
    baths: 3,
    area: "480",
  },
  {
    id: 12,
    title: "Residential Estate Land in Abeokuta",
    location: "Kemta, Abeokuta",
    price: "₦28,000,000",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800",
    beds: 0,
    baths: 0,
    area: "1000",
  },
];


const FeaturedProperties = () => {
  const [liked, setLiked] = useState([]);

  const toggleLike = (id) => {
    setLiked(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="properties" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-primary mb-4">Featured Properties</h2>
          <p className="text-gray-600">
            Curated selection of premium properties across Nigeria
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="bg-white border hover:border-primary transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => toggleLike(property.id)}
                  className="absolute top-3 right-3 bg-white p-1"
                >
                  <Heart 
                    size={20} 
                    className={liked.includes(property.id) ? "fill-red-500 text-red-500" : "text-gray-600"}
                  />
                </button>
              </div>

              <div className="p-5">
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin size={14} className="mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <h3 className="font-medium text-primary mb-3">
                  {property.title}
                </h3>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    {property.beds > 0 && (
                      <div className="flex items-center text-sm">
                        <Bed size={14} className="mr-1" />
                        {property.beds}
                      </div>
                    )}
                    {property.baths > 0 && (
                      <div className="flex items-center text-sm">
                        <Bath size={14} className="mr-1" />
                        {property.baths}
                      </div>
                    )}
                    <div className="flex items-center text-sm">
                      <Square size={14} className="mr-1" />
                      {property.area} sqm
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 flex justify-between items-center">
                  <div>
                    <div className="text-lg font-medium text-primary">{property.price}</div>
                  </div>
                  <button className="bg-primary text-white px-4 py-2 text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-primary text-primary px-8 py-3">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
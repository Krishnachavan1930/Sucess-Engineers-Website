import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Products = () => {
  const products = [
    {
      name: 'Fidder Pillar',
      category: 'Power Distribution',
      description: 'Robust outdoor Feeder Pillar ensuring safe and reliable power distribution.',
      features: [
        'Rating: Up to 400A (customizable based on application)',
        'Type: Outdoor, floor-mounted power distribution enclosure',
        'Advantages: Weatherproof design, easy maintenance, robust construction',
        'Market Segment: Utilities, street lighting, industrial plants, commercial complexes'
      ],
      price: 'Contact for pricing',
      image: '/product1.jpg',
    },
    {
      name: 'Distribution Board',
      category: 'Power Distribution',
      description: 'Reliable distribution board designed for efficient and safe electrical power management.',
      features: [
        'Rating: Typically up to 250A (customizable)',
        'Type: Wall-mounted / floor-mounted low-voltage power distribution',
        'Advantages: Compact design, modular construction, enhanced safety',
        'Market Segment: Residential buildings, commercial complexes, offices, light industrial units'
      ],
      price: 'Contact for pricing',
      image: '/product2.jpg',
    },
    {
      name: 'Lighting Panel',
      category: 'Power Distribution',
      description: 'Compact lighting panel engineered for organized and efficient lighting control.',
      features: [
        'Rating: Typically up to 125A (customizable)',
        'Type: Wall-mounted or floor-mounted lighting distribution panel',
        'Advantages: Compact size, organized wiring, efficient circuit control, easy maintenance',
        'Market Segment: Commercial buildings, malls, offices, industrial facilities, warehouses'
      ],
      price: 'Contact for pricing',
      image: '/product3.jpg',
    },
    {
      name: 'Automation Panel',
      category: 'Automation',
      description: 'Smart automation panel for streamlined process control and enhanced efficiency.',
      features: [
        'Rating: Typically up to 500A (customizable based on automation needs)',
        'Type: Floor-mounted PLC / automation control panel',
        'Advantages: Streamlined process control, flexible integration, improved productivity',
        'Market Segment: Manufacturing, process industries, material handling, OEMs'
      ],
      price: 'Contact for pricing',
      image: '/product4.jpg',
    },
    {
      name: 'Control Panel',
      category: 'Power Distribution',
      description: 'Durable control panel designed to ensure safe, reliable, and precise system management.',
      features: [
        'Rating: Typically up to 630A (customizable)',
        'Type: Floor-mounted / wall-mounted electrical control panel',
        'Advantages: Robust design, precise operation, enhanced safety and reliability',
        'Market Segment: Industrial plants, utilities, commercial buildings, infrastructure projects'
      ],
      price: 'Contact for pricing',
      image: '/product5.jpg',
    },
    {
      name: 'Capacitor Panel',
      category: 'Power Factor Management',
      description: 'Energy-efficient capacitor panel that improves power factor and reduces energy losses.',
      features: [
        'Rating: Typically up to 400 kVAR (customizable)',
        'Type: Automatic or manual power factor correction panel',
        'Advantages: Improves power factor, reduces energy losses, lowers electricity bills',
        'Market Segment: Industrial units, commercial buildings, utilities, shopping malls'
      ],
      price: 'Contact for pricing',
      image: "/product6.jpg",
    },
    {
      name: 'ACDB & DCDB Panels',
      category: 'Solar Power',
      description: 'Energy-efficient distribution panels designed to enhance solar system safety and reliability.',
      features: [
        'Rating: Up to 250A AC / up to 200A DC (customizable)',
        'Type: Solar AC Distribution Board (ACDB) & DC Distribution Board (DCDB)',
        'Advantages: Streamlined power distribution, integrated protection, enhances system safety',
        'Market Segment: Solar power plants, rooftop solar installations, industrial and commercial solar projects'
      ],
      price: 'Contact for pricing',
      image: "/product8.jfif",
    },
    {
      name: 'LT Distribution Box',
      category: 'Solar Power',
      description: 'Compact LT distribution box for reliable solar power management.',
      features: [
        'Rating: Up to 250A (AC) / up to 200A (DC) – customizable',
        'Type: Solar AC and DC distribution panels',
        'Advantages: Compact design, integrated safety features, reliable power management',
        'Market Segment: Rooftop solar plants, ground-mounted solar farms, commercial & industrial solar projects'
      ],
      price: 'Contact for pricing',
      image: "/product8.jpg",
    },
    {
      name: 'Marshalling Box',
      category: 'Signal Management',
      description: 'Efficient marshalling box for simplified field wiring and termination.',
      features: [
        'Rating: Typically low-current signal circuits (customizable)',
        'Type: Floor-mounted or wall-mounted signal wiring & termination box',
        'Advantages: Simplifies field wiring, organized termination, improves maintenance and troubleshooting',
        'Market Segment: Power plants, substations, process industries, automation systems'
      ],
      price: 'Contact for pricing',
      image: "/product9.jpg",
    },
    {
      name: 'MCB Distribution Panel',
      category: 'Power Distribution',
      description: 'Compact MCB distribution panel with modern protection features.',
      features: [
        'Rating: Typically up to 125A (customizable)',
        'Type: Wall-mounted panel with Miniature Circuit Breakers (MCBs)',
        'Advantages: Compact size, easy installation, overload & short-circuit protection',
        'Market Segment: Residential buildings, commercial offices, retail spaces, small industries'
      ],
      price: 'Contact for pricing',
      image: "/product10.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <style>{`
          .products-banner-bg {
            background: url('/bannar.avif') center/cover no-repeat;
          }
        `}</style>
      <Navbar />

      <section className="products-banner-bg bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of products and services designed
              to meet your business needs and drive success.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="h-full flex flex-col overflow-hidden shadow-lg">
                {product.image && (
                  <div className="aspect-w-16 aspect-h-9 w-full bg-white flex items-center justify-center overflow-hidden">
                    <a href="tel:+919876543210" className="w-full h-full flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </a>
                  </div>
                )}

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{product.category}</Badge>
                    <span className="text-sm font-medium text-primary">{product.price}</span>
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6">{product.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white">
                      <a href="tel:+919876543210">Call for Inquiry</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
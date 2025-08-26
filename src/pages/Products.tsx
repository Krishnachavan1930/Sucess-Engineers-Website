import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Products = () => {
  const products = [
    {
      name: 'Premium Solution',
      category: 'Software',
      description: 'Our flagship product designed to streamline your business operations with cutting-edge technology.',
      features: ['Advanced Analytics', 'Real-time Monitoring', 'Cloud Integration', '24/7 Support'],
      price: 'Contact for pricing',
    },
    {
      name: 'Professional Service',
      category: 'Consulting',
      description: 'Expert consulting services to help you optimize your processes and achieve your business goals.',
      features: ['Custom Strategy', 'Expert Guidance', 'Implementation Support', 'Training'],
      price: 'Starting at $5,000',
    },
    {
      name: 'Enterprise Platform',
      category: 'Software',
      description: 'Scalable enterprise solution for large organizations with complex requirements.',
      features: ['Multi-tenant Architecture', 'API Integration', 'Custom Workflows', 'Enterprise Security'],
      price: 'Contact for pricing',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
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

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="h-full flex flex-col">
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
                  
                  <div className="mt-auto space-y-3">
                    <Button className="w-full">Learn More</Button>
                    <Button variant="outline" className="w-full">Request Demo</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="bg-muted/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our products are built with the latest technology and best practices 
              to ensure reliability, scalability, and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Reliable</h3>
                <p className="text-muted-foreground">99.9% uptime guarantee with robust infrastructure</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Scalable</h3>
                <p className="text-muted-foreground">Grows with your business from startup to enterprise</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Secure</h3>
                <p className="text-muted-foreground">Enterprise-grade security and compliance standards</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Support</h3>
                <p className="text-muted-foreground">24/7 customer support and comprehensive documentation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact our team to learn more about our products and find the 
            perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Contact Sales</Button>
            <Button variant="outline" size="lg">Schedule Demo</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
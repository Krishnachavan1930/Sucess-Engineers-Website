import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About Our Company
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a leading company committed to excellence, innovation, and delivering 
              exceptional value to our clients and stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded with a vision to transform the industry, our company has grown from 
                a small startup to a recognized leader in our field. We believe in the power 
                of innovation, quality, and customer satisfaction.
              </p>
              <p className="text-lg text-muted-foreground">
                Our journey has been marked by continuous growth, technological advancement, 
                and an unwavering commitment to our core values. Today, we serve clients 
                worldwide and continue to push the boundaries of what's possible.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg h-96 flex items-center justify-center">
              <p className="text-muted-foreground">Company Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly push boundaries and embrace new technologies to deliver 
                  cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Quality</h3>
                <p className="text-muted-foreground">
                  Excellence is not just a goal but a standard we maintain in every 
                  project and interaction.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Integrity</h3>
                <p className="text-muted-foreground">
                  We conduct business with honesty, transparency, and ethical practices 
                  in all our dealings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
                <p className="text-muted-foreground text-lg">
                  To provide innovative solutions that empower businesses and individuals 
                  to achieve their goals while contributing positively to society and 
                  the environment.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Vision</h3>
                <p className="text-muted-foreground text-lg">
                  To be the global leader in our industry, recognized for our innovation, 
                  quality, and commitment to creating a better future for all stakeholders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
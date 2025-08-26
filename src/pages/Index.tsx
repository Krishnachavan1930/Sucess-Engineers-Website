import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Users, Target, Award } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-primary/20 via-primary/10 to-background py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
                  Innovation
                  <span className="block text-primary">Starts Here</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-lg">
                  Transforming businesses through cutting-edge solutions and 
                  exceptional service excellence.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl h-96 lg:h-[500px] flex items-center justify-center">
                <p className="text-muted-foreground text-lg">Hero Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                  About Our Company
                </h2>
                <p className="text-lg text-muted-foreground">
                  We are a leading technology company committed to delivering innovative 
                  solutions that drive business success. With over a decade of experience, 
                  we've helped hundreds of companies achieve their goals.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our team of experts combines technical excellence with industry knowledge 
                  to provide solutions that are not just effective, but transformative.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">Industry-leading expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">Proven track record of success</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">Commitment to innovation</span>
                </div>
              </div>
              
              <Button size="lg">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Expert Team</h3>
                  <p className="text-muted-foreground">
                    Our skilled professionals bring years of experience and expertise.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Focused Solutions</h3>
                  <p className="text-muted-foreground">
                    Tailored solutions designed to meet your specific business needs.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Quality Assured</h3>
                  <p className="text-muted-foreground">
                    We maintain the highest standards of quality in everything we do.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Proven Results</h3>
                  <p className="text-muted-foreground">
                    Track record of successful projects and satisfied clients.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-muted/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of services designed to help your 
              business grow and succeed in today's competitive market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-primary rounded-sm"></div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Consulting</h3>
                <p className="text-muted-foreground">
                  Strategic consulting to help you make informed decisions and 
                  optimize your business processes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-primary rounded-sm"></div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Development</h3>
                <p className="text-muted-foreground">
                  Custom software development solutions tailored to your specific 
                  business requirements.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-primary rounded-sm"></div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Support</h3>
                <p className="text-muted-foreground">
                  Comprehensive support services to ensure your systems run 
                  smoothly and efficiently.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's work together to transform your business and achieve your goals. 
            Contact us today to learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

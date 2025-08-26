import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Career = () => {
  const jobOpenings = [
    {
      title: 'Software Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our engineering team to build cutting-edge software solutions.',
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'New York',
      type: 'Full-time',
      description: 'Lead product strategy and development for our flagship products.',
    },
    {
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Los Angeles',
      type: 'Full-time',
      description: 'Drive our marketing initiatives and brand awareness campaigns.',
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
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of something extraordinary. Discover career opportunities 
              that will challenge and inspire you to grow.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Work With Us?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Growth Opportunities</h3>
                <p className="text-muted-foreground">Continuous learning and career advancement</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Work-Life Balance</h3>
                <p className="text-muted-foreground">Flexible hours and remote work options</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Great Benefits</h3>
                <p className="text-muted-foreground">Comprehensive health and wellness packages</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Innovation Culture</h3>
                <p className="text-muted-foreground">Work on cutting-edge projects and technologies</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="bg-muted/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our available positions and find your next career opportunity.
            </p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline">{job.location}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                    </div>
                    <Button>Apply Now</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're always looking for talented individuals. Send us your resume 
            and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg">
            Submit Your Resume
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Career;
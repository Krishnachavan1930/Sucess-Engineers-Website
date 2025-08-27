import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Team = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      department: 'Leadership',
      bio: 'John has over 15 years of experience in the industry and leads our company with vision and passion.',
      email: 'john@company.com',
      image: '/team/john.jpg', // Example path, update as needed
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      department: 'Technology',
      bio: 'Sarah is a technology expert with a track record of building scalable and innovative solutions.',
      email: 'sarah@company.com',
      image: '/team/sarah.jpg',
    },
    {
      name: 'Michael Brown',
      position: 'Head of Sales',
      department: 'Sales',
      bio: 'Michael brings extensive sales experience and helps our clients find the perfect solutions.',
      email: 'michael@company.com',
      image: '/team/michael.jpg',
    },
    {
      name: 'Emily Davis',
      position: 'Lead Designer',
      department: 'Design',
      bio: 'Emily creates beautiful and user-friendly designs that enhance our products and user experience.',
      email: 'emily@company.com',
      image: '/team/emily.jpg',
    },
    {
      name: 'David Wilson',
      position: 'Senior Developer',
      department: 'Engineering',
      bio: 'David is a skilled developer who builds robust and efficient software solutions for our clients.',
      email: 'david@company.com',
      image: '/team/david.jpg',
    },
    {
      name: 'Lisa Anderson',
      position: 'Marketing Manager',
      department: 'Marketing',
      bio: 'Lisa drives our marketing initiatives and helps build our brand presence in the market.',
      email: 'lisa@company.com',
      image: '/team/lisa.jpg',
    },
  ];

  const departments = ['All', 'Leadership', 'Technology', 'Sales', 'Design', 'Engineering', 'Marketing'];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the talented individuals who make our company great. Our diverse
              team brings together expertise, creativity, and passion.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-muted-foreground">Departments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-muted/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Get to know the people who lead our organization and drive our success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 h-48 flex items-center justify-center">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow" />
                  ) : (
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">{member.position}</p>
                    <Badge variant="secondary" className="mb-3">
                      {member.department}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {member.bio}
                  </p>
                  <p className="text-sm text-primary">{member.email}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Culture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We foster an inclusive, collaborative environment where everyone can thrive
              and contribute to our shared success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Collaboration</h3>
                <p className="text-muted-foreground">
                  We work together as one team, sharing knowledge and supporting
                  each other to achieve common goals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  We encourage creative thinking and bold ideas that push boundaries
                  and drive progress.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Growth</h3>
                <p className="text-muted-foreground">
                  We invest in our people's development and provide opportunities
                  for continuous learning and advancement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're always looking for talented individuals who share our passion
            for excellence and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white hover:bg-red-700 px-6 py-3 rounded-md font-medium transition-colors">
              View Open Positions
            </button>
            <button className="border border-red-600 text-red-600 bg-background hover:bg-red-50 hover:text-red-700 px-6 py-3 rounded-md font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Team = () => {
  const teamMembers = [
    {
      name: 'Anil Pandey',
      position: 'The Driving Force',
      department: 'Leadership',
      bio: 'Anil has over 15 years of experience in the industry and leads our company with vision and passion.',
      email: 'john@company.com',
      image: '/anil.png',
    },
    {
      name: 'Sanjay Tiwari',
      position: 'The Play Maker',
      department: 'Technology',
      bio: 'Sarah is a technology expert with a track record of building scalable and innovative solutions.',
      email: 'sarah@company.com',
      image: "/sanjay.png",
    },
    {
      name: 'Mamta Pandey',
      position: 'The Supporting Piller',
      department: 'Sales',
      bio: 'Michael brings extensive sales experience and helps our clients find the perfect solutions.',
      email: 'michael@company.com',
      image: "/mamta.png",
    },
    {
      name: 'Sagher Tiwari',
      position: 'The Reign Bearer',
      department: 'Design',
      bio: 'Emily creates beautiful and user-friendly designs that enhance our products and user experience.',
      email: 'emily@company.com',
      image: "/sagher.png",
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Banner Background */}
      <style>{`
        .team-banner-bg {
          background: url('/Bannar4.avif') center top/cover no-repeat;
        }
      `}</style>
      <section className="team-banner-bg bg-gradient-to-r from-primary/10 to-primary/5 py-20">
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
                {/* Red-backed circular image */}
                <div className="bg-red-400 h-56 flex items-center justify-center">
                  {member.image ? (
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-40 h-40 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">
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
            <a
              href="mailto:info@successengineers.in?subject=Job Application&body=Hello, I would like to apply for a position at Success Engineers. Please find my resume attached."
              className="bg-red-600 text-white hover:bg-red-700 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Apply Now
            </a>
            <a
              href="mailto:info@successengineers.in?subject=Resume Submission&body=Hello, I am submitting my resume for consideration."
              className="border border-red-600 text-red-600 bg-background hover:bg-red-50 hover:text-red-700 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Submit Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

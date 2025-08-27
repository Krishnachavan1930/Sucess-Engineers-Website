import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Banner Image */}
      <section className="w-full h-[40vh] md:h-[50vh] lg:h-[50vh] relative flex items-center justify-center overflow-hidden">
        <img
          src="/sliderd.jpg"
          alt="About Us Banner"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="relative z-10 text-center bg-black/30 w-full py-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            About Success Engineers
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow">
            From a small fabrication workshop to a trusted industry leader, our journey is built on punctuality, commitment, and engineering excellence.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                The origin of Success Engineers lies in a small fabrication workshop in Pimpri, Pune.
                Our founder, <strong>Mr. Suresh Tiwari</strong>, a man of punctuality and commitment,
                set up the workshop to overcome delays caused by vendors and ensure timely project delivery.
                Initially, the workshop only produced fabrication products and by-products for the parent company, STEPL.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Over time, as contractors and vendors faced similar challenges, the workshop began
                accepting outside orders. Due to diligence and quality, it grew steadily and required
                larger systems and space to execute operations. In <strong>1982</strong>, Mr. Tiwari
                acquired a company named <em>Success</em> as a factory space with equipment and machinery,
                marking the formal beginning of <strong>Success Engineers</strong>.
              </p>
              <p className="text-lg text-muted-foreground">
                Together with his son, son-in-law, and daughter, he worked tirelessly to grow the firm.
                For nearly three decades, Success Engineers has never compromised on timelines, delivery,
                quality, or service. Today, the company manufactures and supplies poles, feeder pillars,
                distribution boxes, C&R panels, LT panels, SFU pillar boxes, and more—serving industry leaders
                like Adani, Godrej, TATA, and Shapoorji Pallonji.
              </p>
            </div>
            <div className="rounded-lg h-96 flex items-center justify-center overflow-hidden shadow-md">
              <img
                src="/sliderb.jpg"   
                alt="Success Engineers Factory"
                className="w-full h-full object-cover object-center"
              />
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
              Our growth is built on strong values that define who we are and how we work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Commitment</h3>
                <p className="text-muted-foreground">
                  Upholding punctuality and honoring every promise has been our foundation since 1982.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Quality</h3>
                <p className="text-muted-foreground">
                  We deliver products that meet the highest standards of durability, reliability, and performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously evolving with technology to provide modern, sustainable, and aesthetic engineering solutions.
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
                  To engineer and deliver high-quality decorative poles, feeder pillars, and electrical panels
                  that combine durability, design, and innovation—ensuring timely delivery and customer satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Vision</h3>
                <p className="text-muted-foreground text-lg">
                  To be a trusted leader in the engineering industry, recognized for innovation, quality, and
                  partnerships with leading organizations, while continuing to illuminate streets, campuses,
                  and cities with solutions that inspire trust.
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

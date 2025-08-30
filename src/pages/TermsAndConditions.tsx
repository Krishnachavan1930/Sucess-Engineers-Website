import React from 'react';
import Navbar from '@/components/Navbar';

const TermsAndConditions = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6 text-foreground">Terms & Conditions</h1>
      <p className="mb-4 text-muted-foreground">By using our website and services, you agree to the following terms and conditions.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Website</h2>
      <ul className="list-disc ml-6 mb-4 text-muted-foreground">
        <li>Content is for informational purposes only</li>
        <li>No unauthorized use or reproduction</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
      <ul className="list-disc ml-6 mb-4 text-muted-foreground">
        <li>We are not liable for any damages arising from use of our site</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
      <ul className="list-disc ml-6 mb-4 text-muted-foreground">
        <li>Terms may be updated at any time</li>
      </ul>
      <p className="mt-8 text-muted-foreground">For questions, contact info@sucessengineers.com.</p>
    </section>
  </div>
);

export default TermsAndConditions;

import React from 'react';
import Navbar from '@/components/Navbar';

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6 text-foreground">Privacy Policy</h1>
      <p className="mb-4 text-muted-foreground">Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4 text-muted-foreground">
        <li>Personal information you provide (name, email, etc.)</li>
        <li>Usage data and cookies</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Information</h2>
      <ul className="list-disc ml-6 mb-4 text-muted-foreground">
        <li>To provide and improve our services</li>
        <li>To communicate with you</li>
        <li>To comply with legal obligations</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
      <ul className="list-disc ml-6 mb-4 text-muted-foreground">
        <li>Access, update, or delete your personal information</li>
        <li>Opt out of communications</li>
      </ul>
      <p className="mt-8 text-muted-foreground">For any questions, contact us at info@sucessengineers.com.</p>
    </section>
  </div>
);

export default PrivacyPolicy;

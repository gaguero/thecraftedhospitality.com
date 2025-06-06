import ContactSection from '@/components/dmc/ContactSection';
import DestinationHighlights from '@/components/dmc/DestinationHighlights';
import DMCHero from '@/components/dmc/DMCHero';
import ProcessOverview from '@/components/dmc/ProcessOverview';
import ServiceCategories from '@/components/dmc/ServiceCategories';
import SustainabilitySection from '@/components/dmc/SustainabilitySection';
import WhatSetsUsApart from '@/components/dmc/WhatSetsUsApart';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMC Services Panama | The Crafted Hospitality',
  description: 'Premier destination management company in Panama. Authentic experiences, seamless execution, and unforgettable results for corporate events, incentives, and MICE programs.',
  keywords: 'Panama DMC, destination management Panama, corporate events Panama, incentive travel, MICE Panama, event planning'
};

export default function DMCPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <DMCHero />
      
      {/* What Sets Us Apart */}
      <WhatSetsUsApart />
      
      {/* Service Categories */}
      <ServiceCategories />
      
      {/* Destination Highlights */}
      <DestinationHighlights />
      
      {/* Our Process */}
      <ProcessOverview />
      
      {/* Sustainability Commitment */}
      <SustainabilitySection />
      
      {/* Contact & Planning */}
      <ContactSection />
    </main>
  );
} 
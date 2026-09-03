import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { StoreLocatorClient } from './StoreLocatorClient';

export const metadata: Metadata = {
  title: 'Find an IcyDelight Store Near You | Parlour & Retail Locations',
  description: 'Locate your nearest IcyDelight ice cream parlour, express kiosk, or retail partner. Check opening hours, contact details, and get instant GPS directions.',
};

export default function StoreLocatorPage() {
  return (
    <>
      <PageHeader
        badge="250+ Outlets Nationwide"
        title="Find an"
        highlightedWord="IcyDelight Parlour"
        description="Fresh scoops, crisp waffle cones, and tubs waiting for you in your city. Search by area or pin code below."
        breadcrumbs={[{ label: 'Store Locator' }]}
      />

      <Suspense fallback={
        <div className="max-w-7xl mx-auto px-4 py-20 text-center text-gray-500 font-bold">
          Loading store network map...
        </div>
      }>
        <StoreLocatorClient />
      </Suspense>
    </>
  );
}

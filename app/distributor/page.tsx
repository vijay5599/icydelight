import React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { DistributorFormClient } from './DistributorFormClient';

export const metadata: Metadata = {
  title: 'Become an IcyDelight Distributor | Franchise & Retail Opportunities',
  description: 'Join the highest-margin artisanal ice cream network. Attractive 28-35% ROI, guaranteed 24h cold-chain distribution, free deep freezers, and full marketing backing.',
};

export default function DistributorPage() {
  return (
    <>
      <PageHeader
        badge="Commercial Growth"
        title="Become Our"
        highlightedWord="Distributor"
        description="Partner with India's most beloved clean-label artisan ice cream brand. Enjoy up to 35% gross margins and dedicated cold-chain logistics."
        breadcrumbs={[{ label: 'Distributor Portal' }]}
      />

      <DistributorFormClient />
    </>
  );
}

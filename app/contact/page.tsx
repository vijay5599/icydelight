import React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { ContactPageClient } from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us & Catering Inquiries | IcyDelight Ice Cream',
  description: 'Reach out to the IcyDelight team. Connect for customer support, live event catering bookings, franchise inquiries, or parlour feedback.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="We are Here For You"
        title="Get in Touch"
        highlightedWord="With Us"
        description="Whether you want to order a custom ice cream bar for your wedding, ask about nutritional details, or say hello — we'd love to connect!"
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <ContactPageClient />
    </>
  );
}

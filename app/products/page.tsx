import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { ProductCatalogClient } from './ProductCatalogClient';

export const metadata: Metadata = {
  title: 'Our Complete Ice Cream Collection | Waffle Cones, Chocobars & Sundaes',
  description: 'Explore the complete range of IcyDelight artisanal desserts. Handcrafted Belgian chocobars, crispy waffle cones, real fruit ice candy, gourmet sundaes, and family tubs.',
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        badge="Pure Churned Indulgence"
        title="Explore Our"
        highlightedWord="Flavor Menu"
        description="Every scoop, bar, and pop is made with 100% farm-fresh milk, real orchard fruit, and zero artificial stabilizers."
        breadcrumbs={[{ label: 'Products' }]}
      />

      <Suspense fallback={
        <div className="max-w-7xl mx-auto px-4 py-20 text-center text-gray-500 font-bold">
          Loading our ice cream menu...
        </div>
      }>
        <ProductCatalogClient />
      </Suspense>
    </>
  );
}

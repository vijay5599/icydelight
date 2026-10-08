import { HeroSection } from '@/components/hero/HeroSection';
import { CategorySection } from '@/components/categories/CategorySection';
import { FeaturedProductsSection } from '@/components/home/FeaturedProductsSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Testimonials } from '@/components/home/Testimonials';
// import { DistributorBanner } from '@/components/home/DistributorBanner';

export default function Home() {
  return (
    <>
      {/* 1. Large Hero with Orange Ice Candy, Packaging Sleeve and Splash */}
      <HeroSection />

      {/* 2. Overlapping 7-Category Horizontal Strip */}
      <CategorySection />

      {/* 3. Our Featured Products (6-Card Grid) */}
      <FeaturedProductsSection />

      {/* 4. Why Choose IcyDelight? (4 Horizontal Features) */}
      <WhyChooseUs />

      {/* 5. Customer Reviews & Testimonials */}
      <Testimonials />

      {/* Distributor section commented out */}
      {/* <DistributorBanner /> */}
    </>
  );
}

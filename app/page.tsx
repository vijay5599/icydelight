import { HeroSection } from '@/components/hero/HeroSection';
import { CategorySection } from '@/components/categories/CategorySection';
import { FeaturedProductsSection } from '@/components/home/FeaturedProductsSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { BestSellersSlider } from '@/components/products/BestSellersSlider';
import { BrandStoryTeaser } from '@/components/home/BrandStoryTeaser';
import { DistributorBanner } from '@/components/home/DistributorBanner';
import { Testimonials } from '@/components/home/Testimonials';
import { StoreLocatorCTA } from '@/components/home/StoreLocatorCTA';
import { InstagramGallery } from '@/components/home/InstagramGallery';

export default function Home() {
  return (
    <>
      {/* 1. Large Hero with Floating Fruits, Splashes and Dual CTAs */}
      <HeroSection />

      {/* 2. Product Categories Horizontal Responsive Cards */}
      <CategorySection />

      {/* 3. Featured Products Grid with Hover Zoom & Quick View */}
      <FeaturedProductsSection />

      {/* 4. Why Choose Us (4 Feature Cards with Custom Icons) */}
      <WhyChooseUs />

      {/* 5. Best Sellers Auto-Playing Carousel with Artisan Storytelling */}
      <BestSellersSlider />

      {/* 6. Brand Story Two-Column Layout with Milestone Timeline */}
      <BrandStoryTeaser />

      {/* 7. Bright Orange Distributor Banner with Perks & Brochure Action */}
      <DistributorBanner />

      {/* 8. Verified Customer Testimonials Slider */}
      <Testimonials />

      {/* 9. Store Locator Map Teaser & Location Actions */}
      <StoreLocatorCTA />

      {/* 10. Instagram Social Grid Showcase */}
      <InstagramGallery />
    </>
  );
}

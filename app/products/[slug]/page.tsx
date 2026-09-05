import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Star, 
  Sparkles, 
  ShieldCheck, 
  Flame, 
  ChevronRight, 
  ArrowLeft, 
  Heart, 
  Share2, 
  CheckCircle2, 
  AlertCircle,
  Truck,
  Building,
  Store as StoreIcon
} from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { title: 'Product Not Found | IcyDelight' };
  }

  return {
    title: `${product.name} | ${product.flavor} | IcyDelight Creamery`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Artisanal Ice Cream by IcyDelight`,
      description: product.description,
      images: [{ url: product.image, width: 800, height: 600, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Related products
  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.isBestSeller))
    .slice(0, 4);

  return (
    <div className="pt-28 pb-20 bg-[#FFF9F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#FF8A00] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/products" className="hover:text-[#FF8A00] transition-colors">
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href={`/products?category=${product.category}`} className="hover:text-[#FF8A00] transition-colors">
            {product.categoryLabel}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#14213D] font-bold">{product.name}</span>
        </nav>

        {/* Main Product Showcase Card */}
        <div className="bg-white rounded-[36px] p-6 sm:p-10 lg:p-12 border border-orange-100 shadow-xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Product Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full h-80 sm:h-[420px] lg:h-[480px] rounded-[30px] overflow-hidden bg-gradient-to-br from-[#FFF9F2] via-orange-50/70 to-amber-100/40 border-4 border-[#FFF9F2] shadow-xl flex items-center justify-center p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain mx-auto drop-shadow-lg"
                />
                {product.badge && (
                  <div className="absolute top-5 left-5 z-10 px-4 py-1.5 rounded-full bg-[#FF8A00] text-white text-xs font-black uppercase tracking-wider shadow-md">
                    {product.badge}
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between px-2 text-xs text-gray-500 font-bold">
                <span className="flex items-center gap-1.5 text-emerald-600">
                  <ShieldCheck className="w-4 h-4" /> 100% Genuine Natural Recipe
                </span>
                <span className="flex items-center gap-1.5 text-[#FF8A00]">
                  <Sparkles className="w-4 h-4" /> Freshly Churned
                </span>
              </div>
            </div>

            {/* Right: Product Narrative, Specs & Selection */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full bg-orange-100 text-[#FF8A00]">
                    {product.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-gray-500 font-normal">({product.reviewsCount} customer reviews)</span>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#14213D] tracking-tight leading-tight">
                  {product.name}
                </h1>
                <p className="text-lg font-bold text-[#FF8A00] mt-1">{product.flavor}</p>
                <p className="text-sm text-gray-500 font-medium italic mt-1">{product.tagline}</p>
              </div>

              {/* Price Row */}
              <div className="flex items-baseline gap-3 pb-4 border-b border-gray-100">
                <span className="text-4xl font-black text-[#14213D]">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-lg font-bold text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Available in 250+ Outlets
                </span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                {product.description}
              </p>

              {/* Story Box */}
              <div className="p-4 rounded-2xl bg-[#FFF9F2] border border-orange-100 space-y-1">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF8A00] block">
                  Artisan Churn Story
                </span>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  {product.story}
                </p>
              </div>

              {/* Pack Sizes */}
              {product.packSizes && product.packSizes.length > 0 && (
                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-2">
                    Available Pack Formats:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.packSizes.map((size) => (
                      <span
                        key={size}
                        className="px-4 py-2 rounded-xl text-xs font-bold border border-orange-200 bg-orange-50/50 text-[#14213D]"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/store-locator"
                  className="gradient-orange-btn w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF8A00] hover:bg-[#E67600] text-white font-extrabold text-sm flex items-center justify-center gap-2.5 shadow-[0_6px_20px_rgba(255,138,0,0.4)] hover:shadow-[0_8px_25px_rgba(255,138,0,0.55)] hover:-translate-y-0.5 transition-all"
                >
                  <StoreIcon className="w-5 h-5 text-white" />
                  <span className="text-white font-black tracking-wide">Find in Nearby Parlour</span>
                </Link>

                <Link
                  href="/distributor"
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-white hover:bg-orange-50/80 border-2 border-orange-200 text-[#14213D] font-bold text-sm flex items-center justify-center gap-2 hover:border-[#FF8A00] transition-all shadow-sm"
                >
                  <Building className="w-4 h-4 text-[#FF8A00]" />
                  <span>Wholesale / Party Inquiry</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Nutritional Chart & Ingredients Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Nutrition Table */}
          <div className="lg:col-span-6 bg-white rounded-[32px] p-6 sm:p-8 border border-orange-100 shadow-md space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#FF8A00] flex items-center justify-center">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-[#14213D]">Nutrition Facts</h3>
                <p className="text-xs text-gray-400 font-medium">Per single serving portion</p>
              </div>
            </div>

            <div className="divide-y divide-gray-100 text-sm">
              <div className="py-2.5 flex justify-between font-bold">
                <span className="text-gray-600">Energy (Calories)</span>
                <span className="text-[#14213D] font-extrabold">{product.nutrition.calories} kcal</span>
              </div>
              <div className="py-2.5 flex justify-between font-bold">
                <span className="text-gray-600">Total Dairy Fat</span>
                <span className="text-[#14213D] font-extrabold">{product.nutrition.totalFat}</span>
              </div>
              <div className="py-2.5 flex justify-between font-bold">
                <span className="text-gray-600">Protein</span>
                <span className="text-[#14213D] font-extrabold">{product.nutrition.protein}</span>
              </div>
              <div className="py-2.5 flex justify-between font-bold">
                <span className="text-gray-600">Carbohydrates</span>
                <span className="text-[#14213D] font-extrabold">{product.nutrition.carbohydrates}</span>
              </div>
              <div className="py-2.5 flex justify-between font-bold">
                <span className="text-gray-600">Natural Sugars</span>
                <span className="text-[#14213D] font-extrabold">{product.nutrition.sugars}</span>
              </div>
            </div>
          </div>

          {/* Ingredients & Allergens */}
          <div className="lg:col-span-6 bg-white rounded-[32px] p-6 sm:p-8 border border-orange-100 shadow-md space-y-6">
            <div>
              <h3 className="text-xl font-black text-[#14213D] mb-3">Clean-Label Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full bg-[#FFF9F2] text-[#14213D] border border-orange-100 text-xs font-bold flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h4 className="text-sm font-black text-[#14213D] mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-500" /> Allergen Advisory:
              </h4>
              {product.allergens.length > 0 ? (
                <p className="text-xs text-gray-600 leading-relaxed">
                  Contains: <span className="font-bold text-amber-800">{product.allergens.join(', ')}</span>. Processed in an ISO sterile facility that also handles nuts and dairy.
                </p>
              ) : (
                <p className="text-xs text-emerald-600 font-bold">
                  ✓ Naturally Free of Common Dairy & Gluten Allergens.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Related Creations */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#14213D]">
                  You Might Also <span className="text-[#FF8A00]">Love</span>
                </h3>
                <p className="text-sm text-gray-500 mt-1">Other signature churns from our ice cream masters.</p>
              </div>
              <Link href="/products" className="text-sm font-bold text-[#FF8A00] hover:underline">
                View All Menu
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

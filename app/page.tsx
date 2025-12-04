import FetchProducts from '@/components/layouts/FetchProducts';
import SectionHeader from '@/components/layouts/SectionHeader';
import ProductsCardSkeleton from '@/components/product/ProductCardSkeleton';
import { siteConfig } from '@/constants/siteConfig';
import { getProducts } from '@/helpers/getProducts';
import { Metadata } from 'next';
import { Suspense } from 'react';

// dynamic metadata based on api response
export async function generateMetadata(): Promise<Metadata> {
  const products = await getProducts();

  if (!products || products.length === 0) {
    return {
      title: siteConfig.name,
      description: siteConfig.description,
    };
  }

  const titles = products.map((p) => p.title).join(', ');
  const description = `Explore our products: ${titles}`;

  return {
    title: siteConfig.name,
    description,
  };
}

export default function ProductsPage() {
  return (
    <>
      {/* section header */}
      <SectionHeader
        title="Exclusive Products"
        description="Discover exclusive product at your ease"
      />

      {/* product list */}
      <Suspense fallback={<ProductsCardSkeleton />}>
        <FetchProducts />
      </Suspense>
    </>
  );
}

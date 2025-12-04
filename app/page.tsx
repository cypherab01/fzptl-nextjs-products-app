import FetchProducts from '@/components/layouts/FetchProducts';
import SectionHeader from '@/components/layouts/SectionHeader';
import ProductsCardSkeleton from '@/components/product/ProductCardSkeleton';
import { Suspense } from 'react';

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

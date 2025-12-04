import ListProducts from '@/components/layouts/ListProducts';
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

      {/* filtering list goes here */}

      {/* product list */}
      <Suspense fallback={<ProductsCardSkeleton />}>
        <ListProducts />
      </Suspense>
    </>
  );
}

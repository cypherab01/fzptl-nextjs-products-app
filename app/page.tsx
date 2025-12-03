import SectionHeader from '@/components/layouts/SectionHeader';
import ProductCard from '@/components/ProductCard';
import Section from '@/components/ui/section';
import { getProducts } from '@/helpers/getProducts';
import React from 'react';

export default async function ProductsPage() {
  const products = await getProducts();

  if (!products) {
    return (
      <React.Fragment>
        <h1>Products not found!</h1>
      </React.Fragment>
    );
  }

  return (
    <>
      {/* section header component */}
      <SectionHeader
        title="Exclusive Products"
        description="Discover exclusive product at your ease"
      />

      {/* filtering list goes here */}

      {/* product card listing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, _) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

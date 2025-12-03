import ProductCard from '@/components/ProductCard';
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product, _) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

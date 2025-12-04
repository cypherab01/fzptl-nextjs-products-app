'use client';

import { Product } from '@/types/Product';
import ProductCard from '../product/ProductCard';
import { useMemo, useState } from 'react';

const ListProducts = ({ products }: { products: Product[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // finding unique categories from props
  // could remove useMemo if react-compiler is enabled.
  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category)));
    return ['all', ...unique];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return products; // here we returing original props
    return products.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <>
      {/* client side filtering */}
      <div className="my-4 flex items-center gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-md border text-sm transition capitalize
              ${
                selectedCategory === cat
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* listing products */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredProducts.map((product, _) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};

export default ListProducts;

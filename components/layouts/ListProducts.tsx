import { getProducts } from '@/helpers/getProducts';
import ProductCard from '@/components/product/ProductCard';
import ProductNotFound from '@/components/product/ProductNotFound';

const ListProducts = async () => {
  const products = await getProducts();

  if (!products) {
    return <ProductNotFound />;
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product, _) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ListProducts;

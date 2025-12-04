import { getProducts } from '@/helpers/getProducts';
import ProductCard from '@/components/product/ProductCard';
import ProductNotFound from '@/components/product/ProductNotFound';
import ListProducts from './ListProducts';

const FetchProducts = async () => {
  const products = await getProducts();

  if (!products) {
    return <ProductNotFound />;
  }

  return <ListProducts products={products} />;
};

export default FetchProducts;

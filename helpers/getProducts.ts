import { apiFetch } from '@/constants/api';
import { Product } from '@/types/Product';

export const getProducts = async (): Promise<Product[] | null> => {
  try {
    const products: Product[] = await apiFetch<Product[]>('/products');
    // return null;
    return products;
  } catch (error) {
    return null;
  }
};

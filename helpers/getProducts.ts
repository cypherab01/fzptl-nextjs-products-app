import { apiFetch } from '@/constants/api';
import { Product } from '@/types/Product';

export const getProducts = async (): Promise<Product[] | null> => {
  try {
    const products: Product[] = await apiFetch<Product[]>('/products');
    // return null; // see product not found
    // small two second delay to simulate skeleton of product card
    // await new Promise((resolve) => setTimeout(resolve, 20000));

    return products;
  } catch (error) {
    return null;
  }
};

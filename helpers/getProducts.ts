import { apiFetch } from '@/constants/api';
import { ENDPOINTS } from '@/constants/endpoints';
import { Product } from '@/types/Product';

export const getProducts = async (): Promise<Product[] | null> => {
  try {
    const products: Product[] = await apiFetch<Product[]>(ENDPOINTS.products, {
      cache: 'force-cache',
      next: {
        revalidate: 3600, // revalidate every 1 hour
      },
    });
    // return null; // see product not found

    // small two second delay to simulate skeleton of product card
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    return products;
  } catch (error) {
    return null;
  }
};

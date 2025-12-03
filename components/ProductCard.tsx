import { Product } from '@/types/Product';
import Image from 'next/image';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <h1>{product.id}</h1>
      <h1>{product.title}</h1>
      <h1>{product.price}</h1>
      <Image
        src={product.image}
        width={100}
        height={100}
        alt={product.title}
        className="w-auto h-auto object-contain"
      />
    </div>
  );
};

export default ProductCard;

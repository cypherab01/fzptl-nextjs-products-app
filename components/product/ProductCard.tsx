import { Product } from '@/types/Product';
import Image from 'next/image';
import { Typography } from '@/components/ui/typography';
import StarIcon from '@/components/ui/star';
import fallbackImage from '@/public/assets/images/fallback.png';

const ProductCard = ({ product }: { product: Product }) => {
  const rating = Math.round(product.rating.rate ?? 4);
  return (
    <article className="group rounded-md border border-gray-200 hover:shadow-xl bg-white transition-all duration-300 grid grid-rows-[auto_1fr_auto] grid-cols-1 p-0 min-h-72 overflow-hidden">
      {/* Image */}
      <div className="bg-gray-50 aspect-square flex items-center justify-center overflow-hidden transition-all duration-300">
        <Image
          // src={fallbackImage}
          src={product.image ?? fallbackImage}
          width={320}
          height={320}
          alt={product.title}
          className="h-56 w-full object-contain group-hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2 py-4 px-5">
        <Typography variant="h3" className="line-clamp-2">
          {product.title}
        </Typography>

        <Typography
          variant="p"
          className="line-clamp-3 text-sm text-foreground/70"
        >
          {product.description}
        </Typography>

        <div className="flex items-center gap-1">
          <span className="flex">
            {Array(5)
              .fill(null)
              .map((_, idx) => (
                <StarIcon
                  key={idx}
                  className={`h-4 w-4 ${
                    idx < rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill={idx < rating}
                />
              ))}
          </span>
          <span className="text-xs text-foreground/60 ml-1">{rating}.0</span>
        </div>
      </div>

      {/* pricing */}
      <div className="flex items-center border-t border-gray-100 px-5 py-3 bg-white">
        <Typography variant="p" className="font-medium">
          NRs. {product.price}
        </Typography>
      </div>
    </article>
  );
};

export default ProductCard;

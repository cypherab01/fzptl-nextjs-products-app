const ProductCardSkeleton = () => {
  return (
    <article className="rounded-md border border-gray-200 bg-white grid grid-rows-[auto_1fr_auto] grid-cols-1 p-0 min-h-72 overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="bg-gray-200 aspect-square flex items-center justify-center overflow-hidden"></div>

      {/* Details skeleton */}
      <div className="flex flex-col gap-2 py-4 px-5">
        {/* Title skeleton - 2 lines */}
        <div className="space-y-2">
          <div className="h-5 bg-gray-200 rounded w-full" />
          <div className="h-5 bg-gray-200 rounded w-3/4" />
        </div>

        {/* Description skeleton - 3 lines */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-5/6" />
        </div>

        {/* Rating skeleton */}
        <div className="flex items-center gap-1">
          <span className="flex gap-1">
            {Array(5)
              .fill(null)
              .map((_, idx) => (
                <div key={idx} className="h-4 w-4 bg-gray-200 rounded" />
              ))}
          </span>
          <div className="h-3 w-8 bg-gray-200 rounded ml-1" />
        </div>
      </div>

      {/* Pricing skeleton */}
      <div className="flex items-center border-t border-gray-100 px-5 py-3 bg-white">
        <div className="h-5 w-24 bg-gray-200 rounded" />
      </div>
    </article>
  );
};

const ProductsCardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
    </div>
  );
};

export default ProductsCardSkeleton;

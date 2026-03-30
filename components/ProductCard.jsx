export default function ProductCard({ product }) {
  const imageClassNameById = {
    "tavuk-cubuklari":
      "h-full w-full pl-1 object-contain scale-305 transition-transform duration-300 group-hover:scale-[3.16]",
    "baharatli-tavuk-cubuklari":
      "h-full w-full pl-3 pt-1.5 object-contain scale-360 transition-transform duration-300 group-hover:scale-[3.7]",
  };

  const imageClassName =
    imageClassNameById[product.id] ??
    "h-full w-full object-contain transition-transform duration-300 scale-215 group-hover:scale-[2.2]";

  return (
    <article className="group flex flex-col items-center rounded-xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-xl hover:cursor-pointer">
      <div className="mb-4 w-full">
        <div className="relative mx-auto aspect-4/5 w-full max-w-[180px] overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-neutral-200">
          <img
            src={product.imageSrc}
            alt={product.name}
            className={imageClassName}
          />
        </div>
      </div>
      <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
        {product.name}
      </h3>
      <p className="mt-2 text-xs leading-relaxed text-neutral-600">
        {product.description}
      </p>
      <p className="mt-4 text-sm font-semibold text-neutral-900">
        {product.price}
      </p>
      <button className="mt-5 inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2 text-xs font-medium text-white tracking-wide transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
        Sepete Ekle
      </button>
    </article>
  );
}


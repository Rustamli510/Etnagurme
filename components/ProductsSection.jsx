import ProductCard from "./ProductCard";

const products = [
  {
    name: "Kurutulmuş Tavuk Eti",
    description: "Yoğun kekik notalarıyla dengelenmiş klasik kuru et tadı.",
    price: "₺180,00",
    imageSrc: "/Kurutulmus_tavuk_eti.svg",
  },
  {
    name: "Kurutulmuş Dana Eti",
    description: "Yoğun kekik notalarıyla dengelenmiş klasik kuru et tadı.",
    price: "₺180,00",
    imageSrc: "/Kurutulmus_dana_eti.svg",
  },
  {
    name: "Kurutulmuş Baharatlı Dana Eti",
    description: "Biberle zenginleştirilmiş hafif acılı, aromatik lezzet.",
    price: "₺190,00",
    imageSrc: "/Kurutulmus_baharatli_dana_eti.svg",
  },
  {
    name: "Kurutulmuş Baharatlı Tavuk Eti",
    description:
      "Özel baharat karışımıyla hazırlanan dengeli ve hafif tatlı lezzet.",
    price: "₺210,00",
    imageSrc: "/Kurutulmus_baharatli_tavuk_eti.svg",
  },
  {
    name: "Baharatlı Tavuk Çubukları",
    description: "Acı severlere özel, yoğun baharatlı, güçlü karakterli tat.",
    price: "₺200,00",
    imageSrc: "/Bahratli_tavuk_cubuklari.svg",
    id: "baharatli-tavuk-cubuklari",
  },
  {
    name: "Tavuk Çubukları",
    description: "Acı severlere özel, yoğun baharatlı, güçlü karakterli tat.",
    price: "₺200,00",
    imageSrc: "/Tavuk_cubuklari.svg",
    id: "tavuk-cubuklari",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="border-b border-neutral-200 bg-white"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <header className="mb-8">
          <h2
            id="products-heading"
            className="text-lg font-semibold tracking-[0.3em] text-neutral-900 uppercase"
          >
            Ürünlerimiz
          </h2>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}


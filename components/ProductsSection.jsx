import ProductCard from "./ProductCard";

const products = [
  {
    name: "ETNA OREGANO",
    description: "Yoğun kekik notalarıyla dengelenmiş klasik kuru et tadı.",
    price: "₺180,00",
    imageSrc: "/Baharatli.jpeg",
  },
  {
    name: "ETNA BİBERLİ TERBİYE",
    description: "Biberle zenginleştirilmiş hafif acılı, aromatik lezzet.",
    price: "₺190,00",
    imageSrc: "/Baharatli_et_cubuklari.jpeg",
  },
  {
    name: "ETNA SPECIAL TERBİYE",
    description:
      "Özel baharat karışımıyla hazırlanan dengeli ve hafif tatlı lezzet.",
    price: "₺210,00",
    imageSrc: "/Kurutulmus_dana.jpeg",
  },
  {
    name: "ETNA ACI",
    description: "Acı severlere özel, yoğun baharatlı, güçlü karakterli tat.",
    price: "₺200,00",
    imageSrc: "/Et_cubuklari.jpeg",
  },
  {
    name: "ETNA BAHARATLI ET CUBUKLARI",
    description: "Acı severlere özel, yoğun baharatlı, güçlü karakterli tat.",
    price: "₺200,00",
    imageSrc: "/Baharatli_et_cubuklari.jpeg",
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


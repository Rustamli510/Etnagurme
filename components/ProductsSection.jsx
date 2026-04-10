 "use client";

import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { useState } from "react";

const products = [
  {
    name: "Kurutulmuş Tavuk Eti",
    description: "Az baharatlı, klasik kurutulmuş tavuk eti",
    description_modal: "Yağsız tavuk göğsü ince dilimlenerek özel sosumuzda 24 saat marine edilir, kurutulur. Ne ağır bir tat bırakır nede yoğun baharat… Yoğun baharat sevmeyenler için iyi seçimdir. Tavuğun kendi doğal lezzetini taşıyan, pratik ve sağlıklı bir atıştırmalık sunar.",
    imageSrc: "/Kurutulmus_tavuk_eti.svg",
    ingredients: [
      "Tavuk Eti",
      "Tuz",
      "Baharat Karışımı",
    ],
  },
  {
    name: "Kurutulmuş Dana Eti",
    description: "Az baharatlı, klasik kurutulmuş dana eti",
    description_modal: "İnce dilimlenmiş yağsız dana etini kurutmadan önce özel sosda 24saat marine ediyoruz. Baharatı kontrollü tutarak etin kendi aromasını öne çıkaracak sade ve doğal bir atıştırmalık sunuyoruz. Doğalyapısı, yüksek protein değeri ve katkısız içeriğiyle hem geleneksel et severlere hemde sağlıklı beslenenlere hitap eder.",
    imageSrc: "/Kurutulmus_dana_eti.svg",
    ingredients: [
      "Dana Eti",
      "Tuz",
      "Baharat Karışımı",
    ],
  },
  {
    name: "Kurutulmuş Baharatlı Dana Eti",
    description: "Damakda yoğun tat bırakan baharatlı kurutulmuş dana eti",
    description_modal: "İnce dilimlenmiş yağsız dana etini kurutmadan önce özel sosda 24saat marine ediyoruz. İlk lokmada baharat kendini gösterir, ardından tavuk ve sos tadı ortaya çıkar. Kurutma sürecinde baharat etin içine işler, buda yedikten sonra uzun süre damağında kalan, tok ve belirgin bir lezzet bırakır. Baharatlı atıştırmalıkları gerçekten sevenler için hazırlanmış, karakterli bir üründür.",
    imageSrc: "/Kurutulmus_baharatli_dana_eti.svg",
    ingredients: [
      "Dana Eti",
      "Tuz",
      "Baharat Karışımı",
    ],
  },
  {
    name: "Kurutulmuş Baharatlı Tavuk Eti",
    description: "Damakda yoğun tat bırakan baharatlı kurutulmuş tavuk eti",
    description_modal:
      "Yağsız tavuk göğsü ince dilimlenerek özel sosumuzda 24 saat marine edilir, ardından baharatlandırılarak kurutulur. Baharatı kısmadık. Lezzeti bastırmadan, ama kendini net hissettirecek şekilde hazırladık. İlk lokmada baharat kendini gösterir, ardından tavuk ve sos tadı ortaya çıkar. Kurutma sürecinde baharat etin içine işler, buda yedikten sonra uzun süre damağında kalan, tok ve belirgin bir lezzet bırakır. Tavuğun kendi doğal lezzetini taşıyan, pratik ve sağlıklı bir atıştırmalık sunar.",
    imageSrc: "/Kurutulmus_baharatli_tavuk_eti.svg",
    ingredients: [
      "Tavuk Eti",
      "Tuz",
      "Baharat Karışımı",
    ],
  },
  {
    name: "Baharatlı Tavuk Çubukları",
    description: "Damakda yoğun tat bırakan baharatlı kurutulmuş tavuk çubukları",
    description_modal: "Doğal baharatlarla lezzetlendirilmiş baharatlı tavuk eti çubukları, yüksek protein içeriğini korurken güçlü bir tat sunar. Düşük yağ oranı ile sporcu beslenmesine uygundur. Lezzetli ve pratik bir atıştırmalık olarak tüketilebilir.",
    imageSrc: "/Baharatli_tavuk_cubuklari.svg",
    ingredients: [
      "Tavuk Eti",
      "Tuz",
      "Baharat Karışımı",
    ],
  },
  {
    name: "Tavuk Çubukları",
    description: "Az baharatlı, klasik kurutulmuş tavuk çubukları",
    description_modal: "Sporcular için özel olarak hazırlanan tavuk eti çubukları, yüksek protein içeriğiyle kas gelişimini destekler. Düşük yağ oranı sayesinde dengeli beslenmeye uygundur. Pratik tüketim yapısıyla antrenman öncesi ve sonrası için ideal bir protein kaynağıdır.",
    imageSrc: "/Tavuk_cubuklari.svg",
    ingredients: [
      "Tavuk Eti",
      "Tuz",
      "Baharat Karışımı",
    ],
  },
].map((p) => {
  // Your modal requires richer product fields than the current card uses.
  return {
    ...p,
    title: p.name,
    subtitle: "Doğal | Yüksek Protein | Glutensiz",
    images: [p.imageSrc, p.imageSrc, p.imageSrc],
    ingredients: p.ingredients
  }
});

export default function ProductsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="products"
      className="bg-linear-to-b from-neutral-100 to-[#DCE4F2]"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <header className="mb-8">
          <h2
            id="products-heading"
            className="text-lg font-semibold tracking-[0.3em] text-neutral-900 uppercase"
          >
            Ürünlerİmİz
          </h2>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              onOpen={openModal}
            />
          ))}
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </section>
  );
}


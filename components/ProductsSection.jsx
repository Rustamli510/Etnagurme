 "use client";

import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { useState } from "react";

const fruitDescription =
  "Mevsiminde toplanan taze meyveden hazırlanmıştır. Dondurularak kurutma sayesinde ürün sadece suyunu kaybeder ve çıtır hale gelir. Yeniden sulandırıldığında orjinal haline döner. Atıştırmalık olarak tek, yulafla, yoğurtla ve b. kullanabilirsiniz. Şeker ve b. ilavesi yapılmamıştır.";

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
  {
    name: "Çıtır çilek dilimleri",
    description: "Dondurularak kurutulmuş çıtır çilek dilimleri",
    description_modal: fruitDescription,
    imageSrc: "/ambalaj%20meyve/strawberry.svg",
    subtitle: "Doğal | Şeker İlavesiz | Glutensiz",
    ingredients: ["Çilek"],
  },
  {
    name: "Çıtır kivi dilimleri",
    description: "Dondurularak kurutulmuş çıtır kivi dilimleri",
    description_modal: fruitDescription,
    imageSrc: "/ambalaj%20meyve/kivi.svg",
    subtitle: "Doğal | Şeker İlavesiz | Glutensiz",
    ingredients: ["Kivi"],
  },
  {
    name: "Çıtır muz dilimleri",
    description: "Dondurularak kurutulmuş çıtır muz dilimleri",
    description_modal: fruitDescription,
    imageSrc: "/ambalaj%20meyve/banana.svg",
    subtitle: "Doğal | Şeker İlavesiz | Glutensiz",
    ingredients: ["Muz"],
  },
  {
    name: "Çıtır Kavun dilimleri",
    description: "Dondurularak kurutulmuş çıtır kavun dilimleri",
    description_modal: fruitDescription,
    imageSrc: "/ambalaj%20meyve/melon.svg",
    subtitle: "Doğal | Şeker İlavesiz | Glutensiz",
    ingredients: ["Kavun"],
  },
  {
    name: "Çıtır Kızılcık dilimleri",
    description: "Dondurularak kurutulmuş çıtır kızılcık dilimleri",
    description_modal: fruitDescription,
    imageSrc: "/ambalaj%20meyve/cranberry.svg",
    subtitle: "Doğal | Şeker İlavesiz | Glutensiz",
    ingredients: ["Kızılcık"],
  },
  {
    name: "Çıtır incir dilimleri",
    description: "Dondurularak kurutulmuş çıtır incir dilimleri",
    description_modal: fruitDescription,
    imageSrc: "/ambalaj%20meyve/fig.svg",
    subtitle: "Doğal | Şeker İlavesiz | Glutensiz",
    ingredients: ["İncir"],
  },
  {
    name: "Çıtır Mango dilimleri",
    description: "Dondurularak kurutulmuş çıtır mango dilimleri",
    description_modal: fruitDescription,
    imageSrc: "/ambalaj%20meyve/mango.svg",
    subtitle: "Doğal | Şeker İlavesiz | Glutensiz",
    ingredients: ["Mango"],
  },
  {
    name: "Kurutulmuş Çarkıfelek",
    description: "Dondurularak kurutulmuş çarkıfelek",
    description_modal: fruitDescription,
    imageSrc: "/ambalaj%20meyve/passion.svg",
    subtitle: "Doğal | Şeker İlavesiz | Glutensiz",
    ingredients: ["Çarkıfelek"],
  },
  {
    name: "Çıtır kuru dut",
    description: "Dondurularak kurutulmuş çıtır kuru dut",
    description_modal: fruitDescription,
    imageSrc: "/ambalaj%20meyve/mulberry.svg",
    subtitle: "Doğal | Şeker İlavesiz | Glutensiz",
    ingredients: ["Dut"],
  },
  {
    name: "Çıtır Yaban mersini",
    description: "Dondurularak kurutulmuş çıtır yaban mersini",
    description_modal: fruitDescription,
    imageSrc: "/ambalaj%20meyve/blueberry.svg",
    subtitle: "Doğal | Şeker İlavesiz | Glutensiz",
    ingredients: ["Yaban Mersini"],
  },
  {
    name: "Çıtır Vişne",
    description: "Dondurularak kurutulmuş çıtır vişne",
    description_modal: fruitDescription,
    imageSrc: "/ambalaj%20meyve/cherry.svg",
    subtitle: "Doğal | Şeker İlavesiz | Glutensiz",
    ingredients: ["Vişne"],
  },
  {
    name: "Çıtır Ejder meyvesi",
    description: "Dondurularak kurutulmuş çıtır ejder meyvesi",
    description_modal: fruitDescription,
    imageSrc: "/ambalaj%20meyve/dragon.svg",
    subtitle: "Doğal | Şeker İlavesiz | Glutensiz",
    ingredients: ["Ejder Meyvesi"],
  },
  {
    name: "Çıtır Ananas dilimleri",
    description: "Dondurularak kurutulmuş çıtır ananas dilimleri",
    description_modal: fruitDescription,
    imageSrc: "/ambalaj%20meyve/pineapple.svg",
    subtitle: "Doğal | Şeker İlavesiz | Glutensiz",
    ingredients: ["Ananas"],
  },
  {
    name: "Çıtır Şeftali dilimleri",
    description: "Dondurularak kurutulmuş çıtır şeftali dilimleri",
    description_modal: fruitDescription,
    imageSrc: "/ambalaj%20meyve/honey-peach.svg",
    subtitle: "Doğal | Şeker İlavesiz | Glutensiz",
    ingredients: ["Şeftali"],
  },
  {
    name: "Çıtır Kayısı dilimleri",
    description: "Dondurularak kurutulmuş çıtır kayısı dilimleri",
    description_modal: fruitDescription,
    imageSrc: "/ambalaj%20meyve/yellow-peach.svg",
    subtitle: "Doğal | Şeker İlavesiz | Glutensiz",
    ingredients: ["Kayısı"],
  },
  {
    name: "Çıtır böğürtlen",
    description: "Dondurularak kurutulmuş çıtır böğürtlen",
    description_modal: fruitDescription,
    imageSrc: "/ambalaj%20meyve/blackberry.svg",
    subtitle: "Doğal | Şeker İlavesiz | Glutensiz",
    ingredients: ["Böğürtlen"],
  },
  {
    name: "Çıtır Jak Meyvesi",
    description: "Dondurularak kurutulmuş çıtır jak meyvesi",
    description_modal: fruitDescription,
    imageSrc: "/ambalaj%20meyve/jak.svg",
    subtitle: "Doğal | Şeker İlavesiz | Glutensiz",
    ingredients: ["Jak Meyvesi"],
  },
  {
    name: "Çıtır MIX - Mango, kivi, şeftali, kayısı, ejder meyvesi",
    description: "Dondurularak kurutulmuş çıtır meyve karışımı",
    description_modal: fruitDescription,
    imageSrc: "/ambalaj%20meyve/crisps-mix.svg",
    subtitle: "Doğal | Şeker İlavesiz | Glutensiz",
    ingredients: [
      "Mango",
      "Kivi",
      "Şeftali",
      "Kayısı",
      "Ejder Meyvesi",
    ],
  },
].map((p) => {
  // Your modal requires richer product fields than the current card uses.
  return {
    ...p,
    title: p.name,
    subtitle: p.subtitle || "Doğal | Yüksek Protein | Glutensiz",
    images: p.imageSrc ? [p.imageSrc, p.imageSrc, p.imageSrc] : [],
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


import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-neutral-200 bg-neutral-50"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-stretch md:px-6 lg:px-8 lg:py-16">
        <div className="flex-1">
          <h2
            id="about-heading"
            className="text-lg font-semibold tracking-[0.3em] text-neutral-900 uppercase"
          >
            Hakkımızda
          </h2>
          <div className="mt-5 space-y-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
            <p>
            Yolculuğumuza 8 çeşit dana ve tavuk ürünüyle başladık.
            Bugün ise teknoloji ve üretim ekibimiz, her gün yeni lezzetler geliştirmek için aynı sevgi ve azimle çalışmaya devam ediyor.
            Ürünlerimizin hiçbiri birbirine benzemez.
            Her biri kendi karakterine sahiptir.
            Ortak noktaları ise nettir:
            özenle seçilmiş, taze ve kaliteli hammaddelerden üretilmeleri.
            </p>
            <p>
            Kurutulmuş et ürünlerimizde olduğu gibi, meyve ve sebzelerde de aynı yaklaşımı benimsiyoruz.
            Onları değiştirmiyoruz.
            Sadece en iyi hallerini koruyoruz.
            </p>
            <p>
            Meyve ve sebzeleri freeze dry (dondurarak kurutma) yöntemiyle işleyerek;
            renklerini, aromalarını ve doğal yapılarını büyük ölçüde muhafaza ediyoruz.
            Ortaya çıkan ürünler hafif, çıtır ve yoğun lezzetlidir.
            Ürünlerimizin her biri, lezzet ve kalitenin dengeli bir birleşimidir.
            Amacımız; geniş ürün çeşitliliği, güvenilir üretim ve güçlü bir lezzet deneyimi sunmaktır.
            Geleneksel üretim anlayışını, modern gıda güvenliği standartlarıyla destekliyoruz.
            </p>
            <p>
            Meyve ve sebzeleri freeze dry (dondurarak kurutma) yöntemiyle işleyerek;
            renklerini, aromalarını ve doğal yapılarını büyük ölçüde muhafaza ediyoruz.
            Ortaya çıkan ürünler hafif, çıtır ve yoğun lezzetlidir.
            Ürünlerimizin her biri, lezzet ve kalitenin dengeli bir birleşimidir.
            Amacımız; geniş ürün çeşitliliği, güvenilir üretim ve güçlü bir lezzet deneyimi sunmaktır.
            Geleneksel üretim anlayışını, modern gıda güvenliği standartlarıyla destekliyoruz.
            </p>
            <p>Kalitenin lezzetle buluştuğu bu dünyada,
            seni de gerçek ve yoğun bir lezzet deneyimine davet ediyoruz.</p>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative w-full h-64 overflow-hidden rounded-2xl bg-neutral-200 sm:h-72 md:h-full">
            <Image
              src="/Factory.svg"
              alt="ETNA üretim tesisi"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


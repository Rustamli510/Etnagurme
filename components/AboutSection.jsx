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
              ETNA olarak, kuru et geleneğini modern üretim teknikleriyle
              buluşturuyoruz. Seçtiğimiz etleri, hijyenik tesislerimizde
              yavaşça kurutarak yoğun lezzet ve dengeli doku elde ediyoruz.
            </p>
            <p>
              Her ürünümüzde; izlenebilir tedarik zinciri, kontrollü üretim
              adımları ve düzenli kalite testleriyle güvenilirlikten ödün
              vermiyoruz. Baharat karışımlarımızı, etin dokusunu öne çıkaracak
              şekilde dikkatle tasarlıyoruz.
            </p>
            <p>
              Amacımız, atıştırmalık kategorisinde rafine ve dengeli bir kuru
              et deneyimi sunmak; her pakette aynı standartta lezzet yakalamak.
            </p>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative h-64 overflow-hidden rounded-2xl bg-neutral-200 sm:h-72 md:h-full">
            <Image
              src="/factory.jpg"
              alt="ETNA üretim tesisi"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


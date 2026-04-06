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
            8 çeşit dana  ve tavuk etiyle üretime başlasak da teknoloji uzmanlarımız her gün yeni çeşitler yaratmak için sevgi ve azimle çalışıyor. Ürünlerimizin hiçbiri birbirine benzemiyor, tek ortak noktaları taze ve kaliteli etten üretilmeleri.
            </p>
            <p>
            Ürünlerimiz lezzet ve kalitenin bir senfonisidir. Amacımız, her müşteriye geniş bir ürün yelpazesi, mükemmel hizmet ve benzersiz bir değer sunmaktır! 
            </p>
            <p>
            Ürünlerimizin her biri, sağlığınıza özen göstermekten başlayarak en ince zevklerinizi bile tatmin edecek şekilde tasarlanmıştır. 
            Kalitenin lezzetle buluştuğu doğal ürünlerimizle gerçek bir lezzet dünyasına dalın!
            </p>
            <p>
            Geleneksel üretim anlayışını modern gıda güvenliği uygulamalarıyla destekledik. Üretim alanımız hijyen kurallarına uygun olarak düzenli şekilde temizlenir. Personel, gıda güvenliği ve hijyen kurallarına uygun şekilde çalışır. Çapraz bulaşma riskleri önlenir. Temiz hammadde, kontrollü süreç ve hijyenik üretim anlayışımızla, güvenle tüketilebilecek kurutulmuş et sunuyoruz.
            </p>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative w-full h-64 overflow-hidden rounded-2xl bg-neutral-200 sm:h-72 md:h-full">
            <Image
              src="/Factory.png"
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


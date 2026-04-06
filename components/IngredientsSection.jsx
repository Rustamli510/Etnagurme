import Image from "next/image";

export default function IngredientsSection() {
  return (
    <>
    <section className="relative w-full bg-neutral-100 h-[100%]">
      {/* TOP SECTION */}
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide text-neutral-900 md:text-4xl">
              DOĞRU <br /> HAMMADDE <br /> SEÇİMİ
            </h2>
            <div className="mt-3 h-1 w-16 bg-amber-500" />
          </div>

          {/* IMAGE */}
          <div className="absolute right-0 -top-10 h-full w-full sm:top-0">
            
            <Image
              src="/Baharat.svg" // kendi görselini koy
              alt="Baharatlar"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* DARK SECTION */}
      <div className="bg-[#1f2a3a] py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <h3 className="text-lg font-bold tracking-widest text-white">
            BAHARATLAR
          </h3>

          <p className="mt-4 max-w-82 md:max-w-1/2 text-sm leading-relaxed text-neutral-300">
            Baharat bizim için süs değil, imzadır. En doğrusundan seçilir,
            tazeyken öğütülür. Bu yüzden her lokmada fark edilir bir tat bırakır.
            Hazır baharat kullanmayız. Lezzeti şansa bırakmayız.
          </p>
        </div>
      </div>
    </section>

    <section>
      {/* FEATURES */}
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-sm font-bold tracking-wide text-neutral-900">
              TEMİZ HAMMADDE
            </h4>
            <div className="mt-1 h-1 w-16 bg-amber-500" />
            <p className="mt-3 text-sm text-neutral-600">
              Kullanılan etler, veteriner kontrolünden geçmiş ve gıda mevzuatına
              uygun kaynaklardan temin edilir.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wide text-neutral-900">
              KONTROLLÜ SÜREÇ
            </h4>
            <div className="mt-1 h-1 w-16 bg-amber-800" />
            <p className="mt-3 text-sm text-neutral-600">
              Üretim tüm aşamaları kontrol altında tutulur. Kurutma işlemi,
              sıcaklık ve nem değerleri izlenerek gerçekleştirilir.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wide text-neutral-900">
              DOĞAL LEZZET
            </h4>
            <div className="mt-1 h-1 w-16 bg-emerald-700" />
            <p className="mt-3 text-sm text-neutral-600">
              Katkı maddesi kullanılmadan, tamamen doğal yöntemlerle eşsiz
              lezzet elde edilir.
            </p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
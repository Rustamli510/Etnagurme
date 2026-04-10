import Image from "next/image";

export default function IngredientsSection() {
  return (
    <>
    <section className="relative w-full bg-neutral-100 overflow-hidden">
  
  {/* SOL TARAF - GÖRSEL (ABSOLUTE) */}
  {/* w-1/2 yaparak sadece sol yarıyı kaplamasını, h-full ile boydan boya olmasını sağladık */}
  <div className="absolute h-[200px] w-full -left-10 top-40 sm:top-0 sm:h-full sm:w-full z-10 sm:-left-60 md:-left-70 overflow-hidden">
    <Image
      src="/kuru meyve.svg"
      alt="Kurutulmuş Meyveler"
      fill
      className="object-cover overflow-hidden" 
    />
  </div>

  <div className="relative mx-auto max-w-6xl px-4 md:px-6 lg:px-8 z-10 overflow-hidden">
    {/* Grid yapısı */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[300px] md:min-h-[400px]">
      
      {/* SOL TARAF BOŞ BIRAKILIYOR (Resim arkada absolute olduğu için) */}
      <div className="hidden md:block"></div>

      {/* SAĞ TARAF - METİN */}
      {/* flex-col ve items-end metni en sağa yaslar */}
      <div className="flex flex-col items-end text-right justify-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-wide text-neutral-800">
          LEZZETLİ, <br/> 
          ÇITIR, <br/> 
          HAFİF
        </h2>
        <div className="mt-3 h-1 w-16 bg-amber-500" />
      </div>

    </div>
  </div>

  {/* DARK SECTION - AVANTAJLAR */}
  <div className="relative bg-[#1f2a3a] py-12 text-right">
    <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
      <h3 className="text-lg font-bold tracking-widest text-white uppercase">
        Dondurularak Kurutulmuş <br/> Meyvelerİn Avantajları 
      </h3>

      <ul className="mt-6 space-y-3 text-sm leading-relaxed text-neutral-300">
        <li className="flex justify-end items-center gap-2">
          Vitaminler ve mineraller korunur <span>✔</span>
        </li>
        <li className="flex justify-end items-center gap-2">
          Doğal tat ve renk korunur <span>✔</span>
        </li>
        <li className="flex justify-end items-center gap-2">
          Uzun raf ömrü <span>✔</span>
        </li>
        <li className="flex justify-end items-center gap-2">
          Hafif ve gevrek doku <span>✔</span>
        </li>
        <li className="flex justify-end items-center gap-2">
          Yeniden sulandırıldığında orijinal haline döner <span>✔</span>
        </li>
      </ul>
    </div>
  </div>
</section>
    


    <section className="relative w-full bg-neutral-100 h-full">
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

    <section className="bg-neutral-100">
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
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="border-b border-neutral-200 bg-neutral-50"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:py-16 md:px-6 lg:px-8 lg:py-20">
        <div className="flex-1">
          <h1
            id="hero-heading"
            className="mt-4 text-3xl font-semibold tracking-[0.35em] text-neutral-900 sm:text-5xl md:text-4xl"
          >
            ETNAGURME
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
          Her lokmada başka bir karakter.
          <br />
          Her üründe farklı bir lezzet.
          <br />
          Her an, her yerde yanında.
          </p>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-amber-100 via-neutral-50 to-neutral-200 shadow-[0_40px_80px_rgba(15,23,42,0.25)]" />
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/ambalaj (9).svg"
                alt="ETNAGURME kuru et ürünleri"
                width={5200}
                height={4200}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[300px] sm:h-[250px] md:h-[300px] lg:h-[500px] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/arka plan.svg"
        alt="ETNAGURME kuru et ürünleri"
        fill
        className="object-fill w-full h-full"
        priority
      />
    </section>
  );
}
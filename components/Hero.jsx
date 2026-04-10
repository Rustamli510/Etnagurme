import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src='/Arka-plan.svg'
          alt="Variety of beef and chicken jerky, dried fruits and premium meat snacks"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wide drop-shadow-lg">
        Lezzetin en gurme hali!
        </h1>
        <p className="text-md md:text-2xl mb-12 text-gray-200 max-w-2xl mx-auto drop-shadow-md">
          Protein dolu etler, doğallığını koruyan meyve ve sebzeler.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
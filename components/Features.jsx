import { Leaf, Zap, ShieldCheck, Heart } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: '100% Doğal İçerikler',
    description: 'Yapay katkı maddesi yok, sadece saf kaliteli et'
  },
  {
    icon: Zap,
    title: 'Yüksek Proteinli Atıştırmalık',
    description: 'Aktif yaşam tarzınızı beslemek için protein dolu'
  },
  {
    icon: ShieldCheck,
    title: 'Yapay Koruyucu Yok',
    description: 'Güvenebileceğiniz temiz içerikler'
  },
  {
    icon: Heart,
    title: 'Özenle Hazırlanmış',
    description: 'Premium kalite için küçük partiler halinde el yapımı'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-linear-to-b from-[#DCE4F2] to-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-blue-900 to-emerald-600 text-white mb-4 shadow-2xl">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

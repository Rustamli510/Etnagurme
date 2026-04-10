import { Check, GraduationCap, Home, Briefcase, Plane, Dumbbell } from 'lucide-react';

const reasons = [
  {
    title: 'Birinci Sınıf Kalite',
    description: 'En iyi lezzet ve doku için özenle seçilmiş, en kaliteli et, sebze ve meyveleri kullanıyoruz.'
  },
  {
    title: 'Otantik Lezzet',
    description: 'Geleneksel tarifler ve zamanın testinden geçmiş teknikler; özgün ve iddialı lezzetler sunmamızı sağlar.'
  },
  {
    title: 'Sağlık Bilinci',
    description: 'Rahatlıkla atıştırmanız için yüksek proteinli, düşük yağlı ve sıfır yapay içerikli ürünler sunuyoruz.'
  },
];

const usageScenarios = [
  {
    icon: GraduationCap,
    label: 'Okulda'
  },
  {
    icon: Home,
    label: 'Evde'
  },
  {
    icon: Briefcase,
    label: 'İşte'
  },
  {
    icon: Plane,
    label: 'Yolculukta'
  },
  {
    icon: Dumbbell,
    label: 'Sporda'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-linear-to-b from-[#DCE4F2] to-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            Neden Etnagurme?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
           Kalite ve lezzetin farkını deneyimleyin.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-20 px-4">
          {usageScenarios.map((scenario, index) => {
            const Icon = scenario.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3 group cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <div className="w-20 h-20 rounded-full bg-linear-to-br from-blue-900 to-emerald-600 flex items-center justify-center group-hover:from-blue-700 group-hover:to-emerald-200 transition-all duration-300">
                  <Icon className="w-9 h-9 text-white group-hover:text-white" strokeWidth={1.5} />
                </div>
                <span className="text-gray-700 font-bold tracking-wide group-hover:text-emerald-700 transition-colors duration-300">
                  {scenario.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="shrink-0">
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-900 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-5 h-5 text-white" strokeWidth={3} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
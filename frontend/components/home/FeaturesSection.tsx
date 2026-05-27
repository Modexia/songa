import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const highlights = [
  'Automated tax calculations every month',
  'Direct integration with Uber, Bolt, Glovo & Wolt',
  'Legal compliance without lifting a finger',
  'Real-time earnings dashboard',
];

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-white" id="offer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image side */}
          <div className="relative order-1 lg:order-1 reveal">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/feature.png"
                alt="Songa earnings dashboard"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Floating badge */}
              <div className="absolute top-6 left-6 glass-white rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-xs text-gray-500 font-medium">This week</p>
                <p className="text-xl font-black text-[#0A0F1E]">+4,820 PLN</p>
                <p className="text-xs text-green-500 font-semibold mt-0.5">↑ 12% from last week</p>
              </div>
            </div>

            {/* Decorative blob */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#FF6B35]/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#006072]/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Text side */}
          <div className="order-2 lg:order-2 reveal">
            <span className="inline-block text-[#FF6B35] font-bold text-xs uppercase tracking-widest mb-4 bg-[#FF6B35]/10 px-3 py-1.5 rounded-full">
              Why Songa
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0F1E] leading-tight mb-5">
              We Handle the Admin.{' '}
              <span className="gradient-text-teal">You Focus</span>{' '}
              on Earning.
            </h2>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
              Songa gives drivers and couriers a structured, professional financial backbone — without the complexity. Clear systems. Zero confusion.
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/login">
              <Button variant="primary" size="lg" className="inline-flex items-center gap-2">
                Start for free
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

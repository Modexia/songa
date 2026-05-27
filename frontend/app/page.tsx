import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { StatsSection } from '@/components/home/StatsSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { UserCheck, FileCheck, Zap } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserCheck,
    title: 'Sign Up',
    desc: 'Create your account in under 5 minutes. Just your name, email, and phone.',
    color: 'from-orange-500/20 to-orange-500/5',
    border: 'border-orange-500/20',
  },
  {
    number: '02',
    icon: FileCheck,
    title: 'Complete Documents',
    desc: 'We handle all legal paperwork and registration with your chosen gig platforms.',
    color: 'from-teal-500/20 to-teal-500/5',
    border: 'border-teal-500/20',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Start Earning',
    desc: 'Go live immediately. We manage your taxes and compliance in the background.',
    color: 'from-blue-500/20 to-blue-500/5',
    border: 'border-blue-500/20',
  },
];

const brands = ['UBER', 'BOLT', 'FREE NOW', 'WOLT', 'GLOVO', 'RAPPI', 'FREENOW'];
const brandColors: Record<string, string> = {
  UBER: '#000000', BOLT: '#34D186', 'FREE NOW': '#FFCE00', WOLT: '#009DE0',
  GLOVO: '#FFC244', RAPPI: '#FF441F', FREENOW: '#FFCE00',
};

export default function LandingPage() {
  return (
    <main>
      <Header />
      <Hero />

      {/* Brands marquee */}
      <section className="bg-white py-10 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-4">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400">
            Platforms we support
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee-rtl w-max gap-4">
            {[...Array(3)].map((_, si) =>
              brands.map((brand) => (
                <div
                  key={`${si}-${brand}`}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#FF6B35]/30 transition-all duration-200 shrink-0"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-xs"
                    style={{ background: brandColors[brand] || '#000' }}
                  >
                    {brand.charAt(0)}
                  </div>
                  <span className="text-gray-800 font-bold text-sm tracking-tight">{brand}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <FeaturesSection />
      <StatsSection />
      <ServicesSection />

      {/* How It Works */}
      <section className="py-20 lg:py-32 bg-white" id="work">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 reveal">
            <span className="inline-block text-[#FF6B35] font-bold text-xs uppercase tracking-widest bg-[#FF6B35]/10 px-3 py-1.5 rounded-full mb-4">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0F1E] mb-4">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Start working with Uber, Bolt, Glovo, or Wolt today. We handle all the paperwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-14 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-[#FF6B35]/30 to-[#006072]/30" />

            {steps.map((step, i) => (
              <div key={i} className={`relative bg-gradient-to-br ${step.color} rounded-3xl p-6 sm:p-8 border ${step.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal`} style={{ animationDelay: `${i * 0.15}s` }}>
                <span className="absolute top-5 right-5 text-5xl font-black text-[#0A0F1E]/10 leading-none">{step.number}</span>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-5">
                  <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF6B35]" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#0A0F1E] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32 bg-[#0A0F1E] relative overflow-hidden" id="contact">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(#FF6B35 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#006072]/15 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-[#FF6B35] font-bold text-xs uppercase tracking-widest bg-[#FF6B35]/10 px-3 py-1.5 rounded-full mb-6">
            Ready to Start?
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
            Your Gig Journey Starts{' '}
            <span className="gradient-text">Here.</span>
          </h2>
          <p className="text-white/50 text-base sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto">
            Join thousands of drivers and couriers across Poland who trust Songa to manage their gig income.
          </p>
          <div className="flex flex-row gap-3 justify-center">
            <Link href="/login">
              <Button variant="gradient" size="md" className="sm:!px-10 sm:!h-15 sm:!text-lg whitespace-nowrap">
                Create Account
              </Button>
            </Link>
            <a href="mailto:hello@songa.pl">
              <Button variant="ghost" size="md" className="sm:!px-10 sm:!h-15 sm:!text-lg whitespace-nowrap">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <ScrollReveal />
      <Footer />
    </main>
  );
}

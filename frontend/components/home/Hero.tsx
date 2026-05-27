'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0F1E]">
      {/* Background image */}
      <Image
        src="/hero_new.png"
        alt="Gig worker in a modern city"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Multi-layer overlay for dramatic effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E] via-[#0A0F1E]/80 to-[#0A0F1E]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#FF6B35]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#006072]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-3xl">
          {/* Social proof pill */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-in">
            <div className="flex -space-x-1.5">
              {['#FF6B35','#006072','#0A0F1E'].map((c, i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-white/20" style={{ background: c }} />
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-[#FF6B35] text-[#FF6B35]" />
              ))}
            </div>
            <span className="text-white/80 text-xs font-medium">Trusted by 10,000+ gig workers</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.92] tracking-tight mb-6 animate-fade-in-up">
            Work
            <span className="block">Without</span>
            <span className="block gradient-text">The Hassle.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl mb-10 animate-fade-in-up delay-200">
            Become a driver or courier in minutes. Songa handles contracts, taxes, and compliance — so you can focus entirely on your income.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Link href="/login">
              <Button variant="gradient" size="xl" className="w-full sm:w-auto">
                Get Started Free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <a href="#work">
              <button className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors font-semibold px-6 py-4 group">
                <span className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#FF6B35] group-hover:bg-[#FF6B35]/10 transition-all">
                  <Play size={16} className="ml-0.5" />
                </span>
                See How It Works
              </button>
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-14 animate-fade-in-up delay-400">
            {[
              { value: '10K+', label: 'Active Workers' },
              { value: '500K+', label: 'Receipts Processed' },
              { value: '98%', label: 'Compliance Rate' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black text-white">{stat.value}</p>
                <p className="text-white/50 text-sm mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

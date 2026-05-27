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
        <div className="max-w-3xl mx-auto sm:mx-0 text-center sm:text-left">
          {/* Social proof pill removed per user request */}

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.92] tracking-tight mb-6 animate-fade-in-up">
            Work
            <span className="block">Without</span>
            <span className="block gradient-text">The Hassle.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl mb-10 animate-fade-in-up delay-200 mx-auto sm:mx-0">
            Become a driver or courier in minutes. Songa handles contracts, taxes, and compliance — so you can focus entirely on your income.
          </p>

          {/* CTAs */}
          <div className="flex flex-row gap-3 sm:gap-4 animate-fade-in-up delay-300 justify-center sm:justify-start">
            <Link href="/login" className="flex-1 sm:flex-none">
              <Button variant="gradient" size="xl" className="w-full sm:w-auto whitespace-nowrap">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </Link>
            <a href="#work" className="flex-1 sm:flex-none">
              <button className="w-full inline-flex items-center justify-center gap-2 text-white/80 hover:text-white transition-colors font-semibold px-4 sm:px-6 py-4 border border-white/20 rounded-2xl hover:border-white/40 hover:bg-white/5 whitespace-nowrap">
                <Play size={14} />
                How It Works
              </button>
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-row gap-6 sm:gap-8 mt-14 animate-fade-in-up delay-400 justify-center sm:justify-start">
            {[
              { value: '10K+', label: 'Active Workers' },
              { value: '500K+', label: 'Receipts Processed' },
              { value: '98%', label: 'Compliance Rate' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-black text-white">{stat.value}</p>
                <p className="text-white/50 text-xs sm:text-sm mt-0.5">{stat.label}</p>
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

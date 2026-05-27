'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SongaLogo } from '@/components/ui/SongaLogo';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
  const router = useRouter();
  const [showPhone, setShowPhone] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '',
    rodoAccepted: false, mandateAccepted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left — Brand Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col">
        <img src="/hero.png" alt="Songa" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#004d5b]/95 via-[#006072]/80 to-[#0A0F1E]/90" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />

        <div className="relative z-10 flex flex-col h-full p-12">
          <SongaLogo theme="dark" iconSize={42} />

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-5xl font-black text-white leading-tight mb-6">
              Your income,<br />
              <span className="text-[#FF6B35]">simplified.</span>
            </h2>
            <p className="text-teal-200 text-lg leading-relaxed max-w-sm mb-10">
              Join 10,000+ gig workers who trust Songa to handle their earnings, taxes, and compliance.
            </p>

            {/* Testimonial */}
            <div className="glass rounded-2xl p-6 max-w-sm">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#FF6B35] text-lg">★</span>
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                &ldquo;Songa saved me hours every month. I just drive — they handle everything else.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF6B35]/30 flex items-center justify-center font-bold text-white text-sm">MK</div>
                <div>
                  <p className="text-white font-semibold text-sm">Marcin K.</p>
                  <p className="text-white/40 text-xs">Uber driver · Warsaw</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-white/30 text-xs">© {new Date().getFullYear()} Songa. All rights reserved.</p>
        </div>
      </div>

      {/* Right — Form Panel */}
      <div className="w-full lg:w-1/2 flex flex-col bg-white">
        {/* Mobile logo */}
        <div className="lg:hidden flex items-center justify-between px-6 pt-6">
          <SongaLogo theme="light" iconSize={32} />
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-600">← Back</Link>
        </div>

        <div className="flex-1 flex items-center justify-center px-6 sm:px-10 py-12">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-black text-[#0A0F1E] mb-2">Welcome to Songa</h1>
              <p className="text-gray-400">Sign in or create your account below.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="relative">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jan Kowalski"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-100 bg-gray-50 text-[#0A0F1E] placeholder-gray-300 focus:outline-none focus:border-[#FF6B35] focus:bg-white transition-all text-sm font-medium"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="jan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-100 bg-gray-50 text-[#0A0F1E] placeholder-gray-300 focus:outline-none focus:border-[#FF6B35] focus:bg-white transition-all text-sm font-medium"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">+48</span>
                  <input
                    type="tel"
                    required
                    placeholder="123 456 789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-14 pr-4 py-3.5 rounded-xl border-2 border-gray-100 bg-gray-50 text-[#0A0F1E] placeholder-gray-300 focus:outline-none focus:border-[#FF6B35] focus:bg-white transition-all text-sm font-medium"
                  />
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3 pt-1">
                {[
                  {
                    id: 'rodo',
                    checked: formData.rodoAccepted,
                    onChange: (v: boolean) => setFormData({ ...formData, rodoAccepted: v }),
                    label: <>I accept the <a href="#" className="text-[#FF6B35] font-semibold hover:underline">GDPR / RODO</a> regulations.</>,
                  },
                  {
                    id: 'mandate',
                    checked: formData.mandateAccepted,
                    onChange: (v: boolean) => setFormData({ ...formData, mandateAccepted: v }),
                    label: <>I agree to the <a href="#" className="text-[#FF6B35] font-semibold hover:underline">Mandate Contract</a> terms.</>,
                  },
                ].map((item) => (
                  <label key={item.id} className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5 shrink-0">
                      <input
                        type="checkbox"
                        required
                        id={item.id}
                        checked={item.checked}
                        onChange={(e) => item.onChange(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${item.checked ? 'bg-[#FF6B35] border-[#FF6B35]' : 'border-gray-200 bg-white group-hover:border-[#FF6B35]/50'}`}>
                        {item.checked && <CheckCircle2 size={13} className="text-white" />}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 leading-snug">{item.label}</span>
                  </label>
                ))}
              </div>

              {/* Submit */}
              <Button type="submit" variant="gradient" size="lg" className="w-full mt-2">
                Sign In / Create Account
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </form>

            <p className="text-center text-gray-400 text-xs mt-6">
              By signing up, you agree to our{' '}
              <a href="#" className="text-[#FF6B35] hover:underline">Terms</a>{' '}
              and{' '}
              <a href="#" className="text-[#FF6B35] hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

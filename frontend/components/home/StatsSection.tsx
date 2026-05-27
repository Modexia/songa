import { Users, Receipt, TrendingUp, Shield } from 'lucide-react';

const stats = [
  { number: '10K+', label: 'Active Gig Workers', icon: Users, desc: 'Drivers & couriers across Poland' },
  { number: '500K+', label: 'Receipts Processed', icon: Receipt, desc: 'Automated every month' },
  { number: '98%', label: 'Tax Compliance Rate', icon: TrendingUp, desc: 'Zero penalties on our watch' },
  { number: '24/7', label: 'Support Available', icon: Shield, desc: 'Real humans, always ready' },
];

export function StatsSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* BG image with deep overlay */}
      <div className="absolute inset-0">
        <img src="/stats-bg.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E]/95 via-[#004d5b]/85 to-[#0A0F1E]/90" />
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#006072]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#FF6B35] font-bold text-xs uppercase tracking-widest bg-[#FF6B35]/10 px-3 py-1.5 rounded-full">
            By The Numbers
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 mb-4">
            Results That Speak
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Thousands of gig workers across Poland trust Songa to manage their earnings.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group reveal"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#FF6B35]/20 flex items-center justify-center mb-4 group-hover:bg-[#FF6B35]/30 transition-colors">
                <stat.icon className="w-6 h-6 text-[#FF6B35]" />
              </div>
              <p className="text-4xl font-black text-white mb-1">{stat.number}</p>
              <p className="text-white font-semibold text-sm mb-1">{stat.label}</p>
              <p className="text-white/40 text-xs">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

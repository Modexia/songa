import {
  Calculator, Plug, ShieldCheck, LayoutDashboard, FileText, Headphones,
} from 'lucide-react';

const services = [
  {
    title: 'Automated Earnings Processing',
    description: 'Your income from all platforms is automatically calculated, organized, and ready to review.',
    icon: Calculator,
    color: 'from-orange-500/20 to-orange-500/5',
    iconColor: 'text-[#FF6B35]',
  },
  {
    title: 'Platform Integration',
    description: 'Seamlessly connected with Uber, Bolt, Glovo, and Wolt — all your platforms in one view.',
    icon: Plug,
    color: 'from-teal-500/20 to-teal-500/5',
    iconColor: 'text-[#006072]',
  },
  {
    title: 'Compliance Support',
    description: 'Stay aligned with Polish labor and tax regulations without figuring it out alone.',
    icon: ShieldCheck,
    color: 'from-blue-500/20 to-blue-500/5',
    iconColor: 'text-blue-500',
  },
  {
    title: 'Financial Dashboard',
    description: 'See all your earnings at a glance — no spreadsheets, no headaches.',
    icon: LayoutDashboard,
    color: 'from-purple-500/20 to-purple-500/5',
    iconColor: 'text-purple-500',
  },
  {
    title: 'Transparent Reporting',
    description: 'Access structured income summaries and tax reports whenever you need them.',
    icon: FileText,
    color: 'from-pink-500/20 to-pink-500/5',
    iconColor: 'text-pink-500',
  },
  {
    title: 'Dedicated Support',
    description: 'Real humans ready to assist you when questions arise — in Polish, English & Ukrainian.',
    icon: Headphones,
    color: 'from-green-500/20 to-green-500/5',
    iconColor: 'text-green-500',
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#F8FAFC]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="inline-block text-[#FF6B35] font-bold text-xs uppercase tracking-widest bg-[#FF6B35]/10 px-3 py-1.5 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0A0F1E] mb-4">
            Built for{' '}
            <span className="gradient-text">Gig Workers</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Everything you need to earn with confidence and stay compliant — all in one place.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>

              <h3 className="text-lg font-bold text-[#0A0F1E] mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>

              {/* Animated bottom border */}
              <div className="mt-5 h-0.5 w-0 bg-gradient-to-r from-[#FF6B35] to-[#006072] group-hover:w-full transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

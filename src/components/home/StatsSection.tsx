
import { Users, Receipt, TrendingUp, Shield } from 'lucide-react';

const stats = [
    { number: '10K+', label: 'Active Gig Workers', icon: Users },
    { number: '500K+', label: 'Receipts Processed', icon: Receipt },
    { number: '98%', label: 'Tax Compliance Rate', icon: TrendingUp },
    { number: '24/7', label: 'Support Available', icon: Shield },
];

export function StatsSection() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/public/images/featureIMG.jpg)` }}>
            {/* Gradient overlay similar to hero */}
            <div className="absolute inset-0 bg-gradient-to-r from-logisco-teal-dark via-logisco-teal/50 to-transparent"></div>
            <div className="absolute inset-0 backdrop-blur-[2px]"></div>

            {/* Decorative blur orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-logisco-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center space-x-3 sm:space-x-4 group backdrop-blur-xl bg-white/10 p-4 sm:p-6 rounded-lg sm:rounded-xl hover:bg-white/20 transition-all border border-white/10 shadow-xl">
                            <div className="p-2.5 sm:p-4 bg-logisco-orange/20 rounded-lg backdrop-blur-sm shrink-0">
                                <stat.icon className="text-logisco-orange w-6 h-6 sm:w-8 sm:h-8" />
                            </div>
                            <div className="min-w-0">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-0.5 sm:mb-1">{stat.number}</div>
                                <div className="text-[10px] sm:text-xs text-blue-200 uppercase tracking-wide max-w-[100px] sm:max-w-[120px] leading-tight">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

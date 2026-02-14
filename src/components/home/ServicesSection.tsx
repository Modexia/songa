import {
    Calculator,
    Plug,
    ShieldCheck,
    LayoutDashboard,
    FileText,
    Headphones,
} from 'lucide-react';

const services = [
    {
        title: 'Automated Earnings Processing',
        description: 'Your income is calculated accurately and organized in one place.',
        icon: Calculator,
    },
    {
        title: 'Platform Integration',
        description: 'Works seamlessly with major ride and delivery platforms.',
        icon: Plug,
    },
    {
        title: 'Compliance Support',
        description: 'Stay aligned with local regulations without the stress of figuring it out alone.',
        icon: ShieldCheck,
    },
    {
        title: 'Financial Overview Dashboard',
        description: 'See your earnings clearly — no spreadsheets required.',
        icon: LayoutDashboard,
    },
    {
        title: 'Transparent Reporting',
        description: 'Access structured summaries whenever you need them.',
        icon: FileText,
    },
    {
        title: 'Dedicated Support',
        description: 'Real people ready to assist you when questions arise.',
        icon: Headphones,
    },
];

export function ServicesSection() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <span className="text-logisco-orange uppercase tracking-widest font-bold text-xs mb-2 block">Our Services</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-logisco-teal-dark dark:text-white">
                        Built for Gig Workers
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
                        Everything you need to earn with confidence and stay compliant.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-lg hover:border-logisco-teal/30 dark:hover:border-logisco-teal/50 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-logisco-teal/10 dark:bg-logisco-teal/20 flex items-center justify-center text-logisco-teal mb-4 group-hover:bg-logisco-orange/10 group-hover:text-logisco-orange transition-colors duration-300">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                {service.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

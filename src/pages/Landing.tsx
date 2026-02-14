import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/ui/Hero';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { StatsSection } from '../components/home/StatsSection';
import { ServicesSection } from '../components/home/ServicesSection';

export default function Landing() {
    return (
        <Layout>
            <Hero />

            {/* Brands / Partners - infinite scroll right to left */}
            <section className="bg-gray-50/80 py-8 sm:py-10 md:py-14 border-t border-gray-200/80 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 sm:mb-4">
                    <p className="text-center text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-400">
                        Platforms we support
                    </p>
                </div>
                <div className="relative overflow-hidden">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
                    {/* Marquee track - duplicate content for seamless loop */}
                    <div className="flex animate-marquee-rtl w-max">
                        {[...Array(2)].map((_, setIndex) => (
                            <div key={setIndex} className="flex items-center gap-6 sm:gap-10 pr-6 sm:pr-10 shrink-0">
                                {['UBER', 'BOLT', 'FREE NOW', 'WOLT', 'GLOVO'].map((brand) => (
                                    <div
                                        key={`${setIndex}-${brand}`}
                                        className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-logisco-orange/30 transition-all duration-300 shrink-0"
                                    >
                                        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-xs">
                                            {brand.charAt(0)}
                                        </div>
                                        <span className="text-gray-700 font-bold text-sm sm:text-lg tracking-tight">{brand}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FeaturesSection />
            <StatsSection />
            <ServicesSection />

            {/* How It Works Section */}
            <section id="work" className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-16">
                        <span className="text-logisco-orange uppercase tracking-widest font-bold text-xs mb-2 block">How It Works</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-logisco-teal-dark mb-3 sm:mb-4 px-2">
                            Get Started in 3 Simple Steps
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base px-2">
                            Start working with Uber, Bolt, Glovo, or Wolt today. We handle all the paperwork.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        <div className="text-center p-5 sm:p-6 backdrop-blur-xl bg-white/80 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-shadow">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-logisco-orange/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 backdrop-blur-sm border border-logisco-orange/20">
                                <span className="text-xl sm:text-2xl font-bold text-logisco-orange">1</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Sign Up</h3>
                            <p className="text-gray-500 text-sm sm:text-base">Create your account and provide basic information. Takes only 5 minutes.</p>
                        </div>
                        <div className="text-center p-5 sm:p-6 backdrop-blur-xl bg-white/80 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-shadow">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-logisco-orange/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 backdrop-blur-sm border border-logisco-orange/20">
                                <span className="text-xl sm:text-2xl font-bold text-logisco-orange">2</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Complete Documents</h3>
                            <p className="text-gray-500 text-sm sm:text-base">We handle all legal paperwork and registration with gig platforms.</p>
                        </div>
                        <div className="text-center p-5 sm:p-6 backdrop-blur-xl bg-white/80 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-shadow">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-logisco-orange/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 backdrop-blur-sm border border-logisco-orange/20">
                                <span className="text-xl sm:text-2xl font-bold text-logisco-orange">3</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Start Earning</h3>
                            <p className="text-gray-500 text-sm sm:text-base">Begin working immediately. We manage your taxes and compliance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-logisco-teal-dark to-blue-900"></div>
                <div className="absolute inset-0 backdrop-blur-3xl bg-logisco-teal-dark/80"></div>
                <div className="absolute top-10 left-10 w-48 h-48 sm:w-96 sm:h-96 bg-logisco-orange/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="backdrop-blur-xl bg-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20 shadow-2xl">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 sm:mb-6 px-1">
                            Ready to Start Your Gig Journey?
                        </h2>
                        <p className="text-blue-200 text-base sm:text-lg mb-6 sm:mb-8 px-1">
                            Join thousands of drivers and couriers across Poland who trust Songa.
                        </p>
                        <Link to="/login">
                            <Button className="bg-logisco-orange/90 hover:bg-logisco-orange text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg backdrop-blur-xl border border-orange-300/30 shadow-2xl w-full sm:w-auto">
                                Get Started Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </Layout>
    );
}

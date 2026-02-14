import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function FeaturesSection() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Hook / Promise - left */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight mb-4 sm:mb-6">
                            We Handle the Administration. You Focus on Earning.
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8">
                            Songa supports drivers and couriers with structured financial management and compliance tools designed specifically for gig work. Clear systems. No confusion. No unnecessary complexity.
                        </p>
                        <Link to="/login">
                            <Button className="bg-logisco-teal-dark hover:bg-logisco-teal text-white px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2">
                                Get Started
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                    </div>

                    {/* Image - right */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square bg-gray-100 dark:bg-gray-800">
                            <img
                                src='/src/public/images/GUSTO.jpg'
                                alt="Focus on your work — we handle the admin"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

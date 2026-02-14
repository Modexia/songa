import { Link } from 'react-router-dom';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';



export function Hero() {
    return (
        <div className="relative text-white overflow-hidden min-h-[100dvh] sm:min-h-screen flex items-center -mt-16 sm:-mt-20 lg:-mt-24 pt-16 sm:pt-20 lg:pt-24">
            {/* Background Image - positioned to show right side, scaled down slightly */}
            <img 
                src="/images/myHero.jpg" 
                alt="Uber driver" 
                className="absolute inset-0 w-full h-full object-cover object-center scale-100"
            />            {/* Gradient overlay from left to center (strong on left, transparent on right) */}
            <div className="absolute inset-0 bg-gradient-to-r from-logisco-teal-dark via-logisco-teal/50 to-transparent"></div>
            <div className="absolute inset-0 backdrop-blur-[2px]"></div>

            {/* Decorative blur orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-logisco-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 relative z-20 flex justify-center items-center">
                <div className="max-w-4xl mx-auto text-center -translate-y-6 sm:-translate-y-8">
                    <div className="space-y-5 sm:space-y-8">
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                            WORK WITHOUT THE HASSLE
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto px-1">
                            Become a driver or courier in minutes. We take care of contracts, taxes, and tools — you focus on your income.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 sm:pt-4">
                            <Link to="/login" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto bg-logisco-orange hover:bg-logisco-orange/90 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 group"
                                >
                                    Get Started 
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform inline-block" size={20} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

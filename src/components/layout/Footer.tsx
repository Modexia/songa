import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import songalogo from '../../assets/images/songalogo.png';

export function Footer() {
    return (
        <footer className="w-full min-w-full bg-songa-dark border-t border-songa-gray/20 pt-8 sm:pt-12 md:pt-16 pb-5 sm:pb-6 md:pb-8">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-8 md:mb-12">
                    <div>
                        <img src={songalogo} alt="Songa" className="h-12 sm:h-16 md:h-20 mb-3 sm:mb-4 md:mb-6" />
                        <p className="text-songa-gray text-xs sm:text-sm leading-relaxed max-w-sm">
                            Songa supports drivers and couriers with clear financial structure, transparent earnings management, and reliable administrative support — all designed to simplify gig work.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4 md:mb-6">Platform</h4>
                        <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                            {['Features', 'Pricing', 'Integrations', 'FAQ'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-songa-gray hover:text-songa-orange transition-colors text-xs sm:text-sm py-1 block touch-manipulation">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4 md:mb-6">Company</h4>
                        <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                            {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-songa-gray hover:text-songa-orange transition-colors text-xs sm:text-sm py-1 block touch-manipulation">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4 md:mb-6">Follow Us</h4>
                        <div className="flex space-x-4">
                            {[
                                { Icon: Facebook, label: 'Facebook' },
                                { Icon: Twitter, label: 'Twitter' },
                                { Icon: Instagram, label: 'Instagram' },
                                { Icon: Linkedin, label: 'LinkedIn' },
                            ].map(({ Icon, label }) => (
                                <a key={label} href="#" className="text-songa-gray hover:text-white transition-colors p-2 -m-2 touch-manipulation min-h-[44px] min-w-[44px] inline-flex items-center justify-center" aria-label={label}>
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-songa-gray/10 pt-4 sm:pt-6 md:pt-8 text-center">
                    <p className="text-songa-gray text-xs">
                        &copy; {new Date().getFullYear()} Songa. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

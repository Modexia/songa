import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../ui/Button';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Updated navigation items
    const navItems = ['Offer', 'Work', 'Blog', 'Contact'];

    return (
        <header className="w-full relative z-50">

            {/* Main Header - Preserved teal styling */}
            <div className="bg-logisco-teal text-white shadow-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">

                        {/* Logo - Updated to Songa */}
                        <div className="flex-shrink-0 flex items-center space-x-2">
                            <img src="/images/songalogo.png" alt="Songa" className="h-12 sm:h-16" />
                        </div>

                        {/* Desktop Navigation - Updated items */}
                        <nav className="hidden lg:flex space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-sm font-medium hover:text-logisco-orange transition-colors uppercase tracking-wide text-white"
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>

                        {/* Right Side Actions - Updated Button text */}
                        <div className="hidden lg:flex items-center space-x-6">
                            <div className="flex items-center space-x-2 text-sm font-medium">
                                
                            </div>
                            <Link to="/login">
                                <Button className="bg-logisco-orange hover:bg-orange-600 text-white shadow-lg shadow-orange-900/20 rounded-none px-6 uppercase font-bold text-xs tracking-wider">
                                    Get Started
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-300 hover:text-white p-2"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation - Updated items */}
            {isMenuOpen && (
                <div className="lg:hidden bg-logisco-teal border-t border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-3 py-2.5 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md"
                            >
                                {item}
                            </a>
                        ))}
                        <div className="mt-4 px-3 pb-2">
                            <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block w-full">
                                <Button className="w-full bg-logisco-orange text-white uppercase font-bold text-sm py-3">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
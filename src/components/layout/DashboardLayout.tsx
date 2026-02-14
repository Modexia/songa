import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Sidebar from './Sidebar';
import ChatDrawer from '../features/ChatDrawer';
import songaLogo from '../../images/songalogo.png';

const routeTitles: Record<string, string> = {
    '/dashboard': 'Dashboard',
    '/dashboard/wallet': 'Wallet',
    '/dashboard/receipts': 'Invoices',
    '/dashboard/settlements': 'Settlements',
    '/dashboard/account': 'Account',
    '/dashboard/settings': 'Settings',
    '/dashboard/notifications': 'Notifications',
    '/dashboard/faq': 'FAQ',
};

function getPageTitle(pathname: string): string {
    for (const [path, title] of Object.entries(routeTitles)) {
        if (pathname === path || (path !== '/dashboard' && pathname.startsWith(path))) return title;
    }
    return 'Dashboard';
}

export default function DashboardLayout() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [drawerVisible, setDrawerVisible] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        if (mobileMenuOpen) {
            setDrawerVisible(false);
            const id = requestAnimationFrame(() => requestAnimationFrame(() => setDrawerVisible(true)));
            return () => cancelAnimationFrame(id);
        } else {
            setDrawerVisible(false);
        }
    }, [mobileMenuOpen]);

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Desktop sidebar */}
            <div className="hidden md:block">
                <Sidebar />
            </div>

            {/* Mobile header */}
            <header className="md:hidden fixed top-0 left-0 right-0 h-14 sm:h-16 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 z-40 flex items-center justify-between px-4 gap-4">
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="p-2 -ml-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="Open menu"
                >
                    <Menu className="w-6 h-6" />
                </button>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate flex-1 text-center">
                    {getPageTitle(pathname)}
                </h1>
                <div className="w-10 shrink-0" aria-hidden />
            </header>

            {/* Mobile sidebar overlay */}
            {mobileMenuOpen && (
                <>
                    <div
                        className="md:hidden fixed inset-0 bg-black/50 z-50 transition-opacity"
                        aria-hidden
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    <div className={`md:hidden fixed inset-y-0 left-0 z-50 w-full max-w-[280px] sm:max-w-[320px] bg-white dark:bg-black shadow-xl flex flex-col transform transition-transform duration-200 ease-out ${drawerVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="flex items-center justify-between p-4 border-b dark:border-gray-800 shrink-0">
                            <img src={songaLogo} alt="Songa" className="h-8" />
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            <Sidebar onNavigate={() => setMobileMenuOpen(false)} isMobile />
                        </div>
                    </div>
                </>
            )}

            <main className="flex-1 min-w-0 p-4 sm:p-6 md:p-8 pt-14 sm:pt-16 md:pt-8 overflow-y-auto">
                <Outlet />
            </main>

            <ChatDrawer />
        </div>
    );
}

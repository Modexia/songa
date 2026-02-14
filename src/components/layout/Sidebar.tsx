import { NavLink, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Wallet,
    FileText,
    BarChart3,
    User,
    Settings,
    Bell,
    HelpCircle,
    LogOut,
    Moon,
    Sun
} from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '../ui/Button';

interface SidebarProps {
    onNavigate?: () => void;
    isMobile?: boolean;
}

export default function Sidebar({ onNavigate, isMobile }: SidebarProps) {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    const links = [
        { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { to: '/dashboard/wallet', icon: Wallet, label: 'Wallet' },
        { to: '/dashboard/receipts', icon: FileText, label: 'Invoices' },
        { to: '/dashboard/settlements', icon: BarChart3, label: 'Settlements' },
        { to: '/dashboard/account', icon: User, label: 'Account' },
        { to: '/dashboard/settings', icon: Settings, label: 'Settings' },
        { to: '/dashboard/notifications', icon: Bell, label: 'Notifications' },
        { to: '/dashboard/faq', icon: HelpCircle, label: 'FAQ' },
    ];

    const content = (
        <>
            <div className="p-4 sm:p-6">
                <h1 className="text-xl sm:text-2xl font-bold text-brand-orange">Songa</h1>
            </div>

            <nav className="flex-1 px-3 sm:px-4 space-y-1 sm:space-y-2 overflow-y-auto">
                {links.map((link) => {
                    const isActive = link.to === '/dashboard'
                        ? location.pathname === '/dashboard'
                        : link.to === '/dashboard/wallet'
                        ? location.pathname === '/dashboard/wallet'
                        : location.pathname.startsWith(link.to);
                    return (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.to === '/dashboard' || link.to === '/dashboard/wallet'}
                            onClick={onNavigate}
                            className={cn(
                                "flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm font-medium transition-colors min-h-[44px]",
                                isActive
                                    ? "bg-brand-orange text-white"
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900"
                            )}
                        >
                            <link.icon className="w-5 h-5 shrink-0" />
                            <span>{link.label}</span>
                        </NavLink>
                    );
                })}
            </nav>

            <div className="p-3 sm:p-4 border-t dark:border-gray-800 space-y-1 sm:space-y-2 shrink-0">
                <button
                    onClick={toggleTheme}
                    className="w-full flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors min-h-[44px]"
                >
                    {theme === 'dark' ? <Sun className="w-5 h-5 shrink-0" /> : <Moon className="w-5 h-5 shrink-0" />}
                    <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </button>

                <button className="w-full flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors min-h-[44px]">
                    <LogOut className="w-5 h-5 shrink-0" />
                    <span>Logout</span>
                </button>
            </div>
        </>
    );

    if (isMobile) {
        return (
            <div className="w-full max-w-[280px] sm:max-w-[320px] bg-white dark:bg-black flex flex-col h-full">
                {content}
            </div>
        );
    }

    return (
        <aside className="w-56 sm:w-64 bg-white dark:bg-black border-r dark:border-gray-800 flex flex-col h-screen sticky top-0 shrink-0">
            {content}
        </aside>
    );
}

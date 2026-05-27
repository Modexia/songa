'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, Wallet, FileText, BarChart3, User,
  Settings, Bell, HelpCircle, LogOut, Moon, Sun, Map as MapIcon, CreditCard
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SongaLogo } from '@/components/ui/SongaLogo';
import { useState } from 'react';

const navLinks = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/dashboard/wallet', icon: Wallet, label: 'Wallet & Earnings' },
  { to: '/dashboard/expenses', icon: FileText, label: 'Expenses (OCR)' },
  { to: '/dashboard/profile', icon: User, label: 'Legal & Profile' },
  { to: '/dashboard/map', icon: MapIcon, label: 'Real-Time Heatmaps' },
  { to: '/dashboard/fuel-cards', icon: CreditCard, label: 'Fuel Cards' },
];

const bottomLinks = [
  { to: '/dashboard/settings', icon: Settings, label: 'Settings' },
  { to: '/dashboard/notifications', icon: Bell, label: 'Notifications' },
  { to: '/dashboard/faq', icon: HelpCircle, label: 'FAQ & Help' },
];

interface SidebarProps {
  onNavigate?: () => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);

  const isActive = (path: string) =>
    path === '/dashboard' ? pathname === '/dashboard' : pathname.startsWith(path);

  const NavItem = ({ to, icon: Icon, label }: { to: string; icon: React.ElementType; label: string }) => (
    <Link
      href={to}
      onClick={onNavigate}
      className={cn(
        'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group',
        isActive(to)
          ? 'bg-gradient-to-r from-[#FF6B35] to-[#ff8f5e] text-white shadow-lg shadow-orange-500/25'
          : 'text-white/50 hover:text-white hover:bg-white/10'
      )}
    >
      <Icon
        size={18}
        className={cn(
          'transition-transform duration-200',
          isActive(to) ? '' : 'group-hover:scale-110'
        )}
      />
      <span>{label}</span>
      {isActive(to) && (
        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white/80" />
      )}
    </Link>
  );

  return (
    <aside className="w-64 bg-[#0A0F1E] flex flex-col h-full border-r border-white/5">
      {/* Logo area */}
      <div className="p-6 border-b border-white/5">
        <SongaLogo theme="dark" iconSize={36} />
      </div>

      {/* User profile mini */}
      <div className="mx-4 my-4 p-4 rounded-2xl bg-white/5 border border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#006072] flex items-center justify-center font-bold text-white text-sm shrink-0">
            JK
          </div>
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm truncate">Jan Kowalski</p>
            <p className="text-white/40 text-xs truncate">jan@example.com</p>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-green-400 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
            Active
          </span>
          <span className="text-xs text-white/30">Uber · Bolt</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto py-2">
        <p className="text-white/25 text-[10px] uppercase tracking-widest px-4 mb-3 mt-1">Main Menu</p>
        {navLinks.map((link) => <NavItem key={link.to} {...link} />)}

        <p className="text-white/25 text-[10px] uppercase tracking-widest px-4 mb-3 mt-5">Settings</p>
        {bottomLinks.map((link) => <NavItem key={link.to} {...link} />)}
      </nav>

      {/* Bottom actions */}
      <div className="p-3 border-t border-white/5 space-y-1">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-white/50 hover:text-white hover:bg-white/10 transition-all"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
        <Link
          href="/"
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}

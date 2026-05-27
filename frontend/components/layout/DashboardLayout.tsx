'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Bell, Search } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { SongaLogo } from '@/components/ui/SongaLogo';

const routeTitles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/dashboard/wallet': 'Wallet & Earnings',
  '/dashboard/expenses': 'Expenses (OCR)',
  '/dashboard/profile': 'Legal & Profile',
  '/dashboard/map': 'Real-Time Heatmaps',
  '/dashboard/fuel-cards': 'Fuel Cards',
  '/dashboard/settings': 'Settings',
  '/dashboard/notifications': 'Notifications',
  '/dashboard/faq': 'FAQ & Help',
};

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const title = Object.entries(routeTitles).find(([path]) =>
    path === pathname || (path !== '/dashboard' && pathname.startsWith(path))
  )?.[1] ?? 'Dashboard';

  return (
    <div className="flex h-screen bg-[#F0F4F8] overflow-hidden">
      {/* Desktop sidebar */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/60 z-40 animate-fade-in"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="md:hidden fixed inset-y-0 left-0 z-50 animate-slide-in-left">
            <Sidebar onNavigate={() => setSidebarOpen(false)} />
          </div>
        </>
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <Menu size={22} />
            </button>
            <div className="hidden md:block">
              <h1 className="text-xl font-black text-[#0A0F1E]">{title}</h1>
              <p className="text-xs text-gray-400">Welcome back, Jan 👋</p>
            </div>
            <div className="md:hidden">
              <SongaLogo theme="light" iconSize={30} />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search (desktop) */}
            <div className="hidden sm:flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 w-48">
              <Search size={15} className="text-gray-400" />
              <input placeholder="Search..." className="bg-transparent text-sm outline-none text-gray-600 placeholder-gray-300 w-full" />
            </div>

            {/* Language Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-gray-50 border border-gray-100 rounded-xl px-2 py-1 cursor-pointer">
              <span className="text-sm font-semibold text-[#0A0F1E] px-2 py-1 bg-white shadow-sm rounded-lg">PL</span>
              <span className="text-sm font-medium text-gray-400 px-2 py-1 hover:text-gray-600 transition-colors">UK</span>
              <span className="text-sm font-medium text-gray-400 px-2 py-1 hover:text-gray-600 transition-colors">EN</span>
            </div>

            {/* Notifications */}
            <button className="relative p-2.5 rounded-xl hover:bg-gray-100 transition-colors text-gray-500">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF6B35] rounded-full" />
            </button>

            {/* Avatar */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#006072] flex items-center justify-center font-bold text-white text-sm cursor-pointer">
              JK
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

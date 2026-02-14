
import { ReactNode } from 'react';
import { Header } from './Header';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen w-full min-w-0 bg-gray-50 text-slate-900 flex flex-col font-sans">
            <Header />
            <main className="flex-grow pt-16 sm:pt-20 overflow-x-hidden">
                {children}
            </main>
        </div>
    );
}

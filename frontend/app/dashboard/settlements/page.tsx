import { Construction } from 'lucide-react';
import Link from 'next/link';

export default function ComingSoonPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#FF6B35]/20 to-[#006072]/20 flex items-center justify-center mb-6">
        <Construction size={36} className="text-[#FF6B35]" />
      </div>
      <h2 className="text-2xl font-black text-[#0A0F1E] mb-3">Coming Soon</h2>
      <p className="text-gray-400 max-w-sm mb-8">This feature is being built. Stay tuned for updates.</p>
      <Link href="/dashboard">
        <button className="bg-[#FF6B35] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#e85d2a] transition-all hover:shadow-lg hover:shadow-orange-500/30">
          Back to Dashboard
        </button>
      </Link>
    </div>
  );
}

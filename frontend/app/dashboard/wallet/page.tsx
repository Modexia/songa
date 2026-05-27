import { ArrowDownLeft, ArrowUpRight, CreditCard, Banknote, Plus } from 'lucide-react';

const transactions = [
  { id: 1, date: 'Feb 12, 2026', description: 'Uber card payout', amount: '+420.00', type: 'in', platform: 'Uber' },
  { id: 2, date: 'Feb 11, 2026', description: 'Bolt app tip', amount: '+85.50', type: 'in', platform: 'Bolt' },
  { id: 3, date: 'Feb 10, 2026', description: 'Glovo card delivery', amount: '+156.00', type: 'in', platform: 'Glovo' },
  { id: 4, date: 'Feb 9, 2026', description: 'Uber card payout', amount: '+320.00', type: 'in', platform: 'Uber' },
  { id: 5, date: 'Feb 8, 2026', description: 'Bolt app tip', amount: '+95.00', type: 'in', platform: 'Bolt' },
];

export default function WalletPage() {
  return (
    <div className="space-y-6 w-full">
      {/* Credit card visual */}
      <div className="relative bg-gradient-to-br from-[#0A0F1E] via-[#004d5b] to-[#006072] rounded-3xl p-7 sm:p-8 text-white overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '18px 18px' }} />
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#FF6B35]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 left-20 w-48 h-48 bg-[#006072]/30 rounded-full blur-2xl" />

        {/* Card top row */}
        <div className="flex items-start justify-between mb-12 relative z-10">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Your Wallet</p>
            <p className="text-white font-bold">Jan Kowalski</p>
          </div>
          <div className="flex gap-1.5">
            <div className="w-8 h-8 rounded-full bg-[#FF6B35]/70 backdrop-blur-sm" />
            <div className="w-8 h-8 rounded-full bg-[#FF6B35]/40 backdrop-blur-sm -ml-4" />
          </div>
        </div>

        {/* Balances */}
        <div className="grid grid-cols-2 gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <CreditCard size={14} className="text-[#FF6B35]" />
              <p className="text-white/50 text-xs">Cashless Balance</p>
            </div>
            <p className="text-3xl font-black">2,450<span className="text-lg font-semibold text-white/60">.00 PLN</span></p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Banknote size={14} className="text-[#FF6B35]" />
              <p className="text-white/50 text-xs">Cash Balance</p>
            </div>
            <p className="text-3xl font-black">1,320<span className="text-lg font-semibold text-white/60">.00 PLN</span></p>
          </div>
        </div>

        {/* Next payout */}
        <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between relative z-10">
          <p className="text-white/50 text-sm">Next payout: <span className="text-white font-semibold">Friday, Feb 21, 2026</span></p>
          <button className="bg-[#FF6B35] hover:bg-[#e85d2a] text-white px-5 py-2 rounded-xl text-sm font-bold transition-all hover:shadow-lg hover:shadow-orange-500/30">
            Withdraw
          </button>
        </div>
      </div>

      {/* Actions row */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Add Funds', icon: Plus, color: 'bg-green-50 text-green-600 border-green-100' },
          { label: 'Withdraw', icon: ArrowUpRight, color: 'bg-orange-50 text-[#FF6B35] border-orange-100' },
          { label: 'Transfer', icon: ArrowDownLeft, color: 'bg-blue-50 text-blue-500 border-blue-100' },
        ].map((a) => (
          <button key={a.label} className={`flex flex-col items-center gap-2 p-5 rounded-2xl bg-white border ${a.color} hover:shadow-md hover:-translate-y-0.5 transition-all`}>
            <a.icon size={22} />
            <span className="text-sm font-bold">{a.label}</span>
          </button>
        ))}
      </div>

      {/* Transactions */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-black text-[#0A0F1E] text-lg">Latest Cashless Transactions</h2>
          <button className="text-xs text-[#FF6B35] font-semibold hover:underline">View All</button>
        </div>
        <div className="space-y-1">
          {transactions.map((t) => (
            <div
              key={t.id}
              className="flex items-center justify-between py-3.5 px-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                  <ArrowDownLeft size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-[#0A0F1E] text-sm">{t.description}</p>
                  <p className="text-xs text-gray-400">{t.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-black text-green-600 text-sm">{t.amount} PLN</p>
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{t.platform}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

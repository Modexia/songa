import { Wallet, TrendingUp, Download, Calendar, ArrowUpRight, Upload, FileText, MessageCircle } from 'lucide-react';

const platformData = [
  { platform: 'Uber', amount: '1,240.50', color: '#000', trips: '48 trips', pct: 75 },
  { platform: 'Bolt', amount: '890.30', color: '#34D186', trips: '35 trips', pct: 54 },
  { platform: 'Glovo', amount: '456.80', color: '#FFC244', trips: '28 deliveries', pct: 28 },
  { platform: 'Wolt', amount: '312.40', color: '#009DE0', trips: '19 deliveries', pct: 19 },
];

const settlements = [
  { date: 'Feb 10, 2026', platform: 'Uber', amount: '+1,240.50', status: 'Completed' },
  { date: 'Feb 9, 2026', platform: 'Bolt', amount: '+890.30', status: 'Completed' },
  { date: 'Feb 8, 2026', platform: 'Glovo', amount: '+456.80', status: 'Pending' },
  { date: 'Feb 7, 2026', platform: 'Wolt', amount: '+312.40', status: 'Completed' },
];

const quickActions = [
  { icon: Upload, label: 'Upload Receipt', color: 'bg-orange-50 text-[#FF6B35]' },
  { icon: Download, label: 'Download Statement', color: 'bg-teal-50 text-[#006072]' },
  { icon: Wallet, label: 'Request Payout', color: 'bg-blue-50 text-blue-500' },
  { icon: MessageCircle, label: 'Contact Support', color: 'bg-purple-50 text-purple-500' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6 max-w-[1400px]">
      {/* Welcome header */}
      <div className="relative bg-gradient-to-r from-[#004d5b] to-[#006072] rounded-2xl p-6 sm:p-8 text-white overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
        <div className="absolute -right-10 -top-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black mb-1">Welcome back, Jan! 👋</h1>
            <p className="text-teal-200">Here&apos;s your earnings overview for this week</p>
          </div>
          <button className="flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e85d2a] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all hover:shadow-lg hover:shadow-orange-500/30 shrink-0 w-full sm:w-auto justify-center">
            <ArrowUpRight size={18} />
            Withdraw Funds
          </button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Cashless Balance', value: '2,450.00', unit: 'PLN', icon: Wallet, change: '+12%', changeColor: 'text-green-500', sub: 'from last week' },
          { label: 'Cash Balance', value: '1,320.00', unit: 'PLN', icon: Wallet, change: null, sub: 'Cash settlements' },
          { label: 'Pending Payouts', value: '850.00', unit: 'PLN', icon: Calendar, change: 'Due: Friday', changeColor: 'text-[#FF6B35]', sub: '' },
          { label: 'Monthly Expenses', value: '1,200.00', unit: 'PLN', icon: Download, change: '-8%', changeColor: 'text-red-500', sub: 'Fuel & maintenance' },
        ].map((card, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{card.label}</p>
              <div className="w-9 h-9 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center group-hover:bg-[#FF6B35]/20 transition-colors">
                <card.icon size={16} className="text-[#FF6B35]" />
              </div>
            </div>
            <p className="text-2xl font-black text-[#0A0F1E]">
              {card.value} <span className="text-sm font-semibold text-gray-400">{card.unit}</span>
            </p>
            {card.change && (
              <p className={`text-xs font-semibold mt-1 ${card.changeColor}`}>
                {card.change} {card.sub}
              </p>
            )}
            {!card.change && card.sub && (
              <p className="text-xs text-gray-400 mt-1">{card.sub}</p>
            )}
          </div>
        ))}
      </div>

      {/* Earnings breakdown + Settlements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform earnings */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-black text-[#0A0F1E] text-lg">Platform Earnings</h2>
            <span className="text-xs text-gray-400 font-medium bg-gray-100 px-3 py-1 rounded-full">This week</span>
          </div>
          <div className="space-y-4">
            {platformData.map((item) => (
              <div key={item.platform}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-xs" style={{ background: item.color }}>
                      {item.platform.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-[#0A0F1E] text-sm">{item.platform}</p>
                      <p className="text-xs text-gray-400">{item.trips}</p>
                    </div>
                  </div>
                  <span className="font-black text-green-600 text-sm">+{item.amount} PLN</span>
                </div>
                {/* Progress bar */}
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${item.pct}%`, background: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent settlements */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-black text-[#0A0F1E] text-lg">Recent Settlements</h2>
            <button className="text-xs text-[#FF6B35] font-semibold hover:underline">View All</button>
          </div>
          <div className="space-y-1">
            {settlements.map((s, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 rounded-xl px-2 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center font-black text-xs text-[#0A0F1E]">
                    {s.platform.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0A0F1E] text-sm">{s.platform}</p>
                    <p className="text-xs text-gray-400">{s.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-black text-green-600 text-sm">{s.amount} PLN</p>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${s.status === 'Completed' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-[#FF6B35]'}`}>
                    {s.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="font-black text-[#0A0F1E] text-lg mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <button
              key={action.label}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#FF6B35]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group text-center"
            >
              <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <action.icon size={20} />
              </div>
              <span className="text-xs font-bold text-gray-600">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

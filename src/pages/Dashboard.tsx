import { Button } from '../components/ui/Button';
import { Wallet, TrendingUp, Download, Calendar } from 'lucide-react';

export default function Dashboard() {
    return (
        <div className="space-y-4 sm:space-y-6">
            {/* User Welcome Header */}
            <div className="relative bg-gradient-to-r from-logisco-teal-dark to-logisco-teal rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-white shadow-xl overflow-hidden">
                <div className="absolute inset-0 backdrop-blur-3xl bg-white/5"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative z-10">
                    <div className="min-w-0">
                        <h1 className="text-2xl sm:text-3xl font-extrabold mb-1 sm:mb-2 truncate">Welcome back, Jan!</h1>
                        <p className="text-blue-100 text-sm sm:text-base md:text-lg">Here's your earnings overview for this week</p>
                    </div>
                    <Button className="bg-logisco-orange hover:bg-orange-600 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wide shadow-lg backdrop-blur-sm w-full sm:w-auto shrink-0">
                        Withdraw
                    </Button>
                </div>
            </div>

            {/* Financial Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="backdrop-blur-xl bg-white/80 dark:bg-black/80 p-4 sm:p-6 rounded-xl shadow-xl border border-white/20 dark:border-gray-800/50">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <h3 className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">Cashless Balance</h3>
                        <Wallet className="w-4 h-4 sm:w-5 sm:h-5 text-logisco-orange shrink-0" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white truncate">2,450.00 PLN</p>
                    <span className="text-xs text-green-500 font-medium flex items-center mt-1 sm:mt-2">
                        <TrendingUp className="w-3 h-3 mr-1 shrink-0" />
                        +12% from last week
                    </span>
                </div>
                <div className="bg-white dark:bg-black p-4 sm:p-6 rounded-xl shadow-sm border dark:border-gray-800">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <h3 className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">Cash Balance</h3>
                        <Wallet className="w-4 h-4 sm:w-5 sm:h-5 text-logisco-orange shrink-0" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white truncate">1,320.00 PLN</p>
                    <span className="text-xs text-gray-500 font-medium">Cash settlements</span>
                </div>
                <div className="bg-white dark:bg-black p-4 sm:p-6 rounded-xl shadow-sm border dark:border-gray-800">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <h3 className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">Pending Payouts</h3>
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-logisco-orange shrink-0" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white truncate">850.00 PLN</p>
                    <span className="text-xs text-brand-orange font-medium">Due: Friday</span>
                </div>
                <div className="bg-white dark:bg-black p-4 sm:p-6 rounded-xl shadow-sm border dark:border-gray-800">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <h3 className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">Monthly Expenses</h3>
                        <Download className="w-4 h-4 sm:w-5 sm:h-5 text-logisco-orange shrink-0" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white truncate">1,200.00 PLN</p>
                    <span className="text-xs text-red-500 font-medium">Fuel & maintenance</span>
                </div>
            </div>

            {/* Platform Earnings Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white dark:bg-black rounded-xl shadow-sm border dark:border-gray-800 p-4 sm:p-6 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Platform Earnings</h3>
                    <div className="space-y-3 sm:space-y-4">
                        {[
                            { platform: 'Uber', amount: '1,240.50', color: 'bg-black', trips: '48 trips' },
                            { platform: 'Bolt', amount: '890.30', color: 'bg-green-600', trips: '35 trips' },
                            { platform: 'Glovo', amount: '456.80', color: 'bg-orange-500', trips: '28 deliveries' },
                            { platform: 'Wolt', amount: '312.40', color: 'bg-blue-500', trips: '19 deliveries' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between gap-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg hover:shadow-md transition-shadow min-w-0">
                                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                                        {item.platform.charAt(0)}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-bold text-gray-900 dark:text-white truncate">{item.platform}</p>
                                        <p className="text-xs sm:text-sm text-gray-500 truncate">{item.trips}</p>
                                    </div>
                                </div>
                                <span className="font-bold text-green-600 text-sm sm:text-lg shrink-0">+{item.amount} PLN</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Settlements */}
                <div className="bg-white dark:bg-black rounded-xl shadow-sm border dark:border-gray-800 p-4 sm:p-6 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Recent Settlements</h3>
                        <Button variant="outline" size="sm" className="w-full sm:w-auto shrink-0">View All</Button>
                    </div>
                    <div className="space-y-0">
                        {[
                            { date: 'Feb 10, 2026', platform: 'Uber', amount: '+1,240.50', status: 'Completed' },
                            { date: 'Feb 9, 2026', platform: 'Bolt', amount: '+890.30', status: 'Completed' },
                            { date: 'Feb 8, 2026', platform: 'Glovo', amount: '+456.80', status: 'Pending' },
                            { date: 'Feb 7, 2026', platform: 'Wolt', amount: '+312.40', status: 'Completed' }
                        ].map((settlement, i) => (
                            <div key={i} className="flex items-center justify-between gap-3 py-3 sm:py-4 px-0 sm:px-0 border-b dark:border-gray-800 last:border-0 min-w-0">
                                <div className="min-w-0">
                                    <p className="font-medium text-gray-900 dark:text-white truncate">{settlement.platform}</p>
                                    <p className="text-xs sm:text-sm text-gray-500">{settlement.date}</p>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className="font-bold text-green-600 text-sm sm:text-base">{settlement.amount} PLN</p>
                                    <p className={`text-xs ${settlement.status === 'Completed' ? 'text-green-500' : 'text-orange-500'}`}>
                                        {settlement.status}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-black rounded-xl shadow-sm border dark:border-gray-800 p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <Button className="w-full" variant="outline">Upload Receipt</Button>
                    <Button className="w-full" variant="outline">Download Statement</Button>
                    <Button className="w-full" variant="outline">Request Payout</Button>
                    <Button className="w-full" variant="outline">Contact Support</Button>
                </div>
            </div>
        </div>
    );
}
